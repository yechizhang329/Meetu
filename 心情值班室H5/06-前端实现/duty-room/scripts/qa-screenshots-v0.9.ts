import puppeteer from 'puppeteer';
import { mkdir } from 'fs/promises';
import { resolve } from 'path';

// v0.9 UI 验收截图脚本
// 输出到 ./qa-screenshots-v0.9/
//   01-intro.png        375×812 mobile viewport
//   02-scene.png        scene select
//   03-tone.png         tone select
//   04-result.png       full result page (whole scrolled height)
//   05-share-preview.png cropped to share-preview block
//   06-share-card.png   the actual 4:5 share card export (1080×1350)

const BASE = 'http://localhost:4173/Meetu/duty-room';
const OUT_DIR = resolve(process.cwd(), 'qa-screenshots-v0.9');

const SCENE_LABELS: Record<string, string> = {
  no_energy: '别叫我，我现在不想动',
  called_out: '朋友一约我，我就开始和床谈判',
  got_called_out: '他们说得很准，但我不想承认',
  brain_overload: '表面在听，脑子里已经开会了',
  deadline: '事情很多，但我还在假装不急',
  need_space: '想安静一点，先别靠近我',
};
const TONE_LABELS: Record<string, string> = {
  stubborn: '别说我，我不认',
  lazy: '算了，就这样吧',
  polite_dnd: '客气一点',
  pretend_normal: '看起来正常一点',
};

async function main() {
  await mkdir(OUT_DIR, { recursive: true });
  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
  const page = await browser.newPage();
  // iPhone 12 Pro logical viewport — 375×812 with 2x DPR
  await page.setViewport({ width: 375, height: 812, deviceScaleFactor: 2 });

  // 01 — intro
  await page.goto(`${BASE}/?_=${Date.now()}`, { waitUntil: 'networkidle0' });
  await page.evaluate(() => localStorage.clear());
  await page.reload({ waitUntil: 'networkidle0' });
  await page.waitForSelector('button.btn-primary');
  await page.screenshot({ path: resolve(OUT_DIR, '01-intro.png'), fullPage: true });
  console.log('✓ 01-intro.png');

  // 02 — scene select
  await page.click('button.btn-primary');
  await page.waitForSelector('.option-card');
  await page.screenshot({ path: resolve(OUT_DIR, '02-scene.png'), fullPage: true });
  console.log('✓ 02-scene.png');

  // pick scene "deadline" (highlights DDL hamster path)
  let texts = await page.$$eval('.option-card', (els) =>
    els.map((e) => (e as HTMLElement).innerText),
  );
  let idx = texts.findIndex((t) => t.includes(SCENE_LABELS.deadline));
  let buttons = await page.$$('.option-card');
  await buttons[idx].click();

  // 03 — tone select
  await page.waitForFunction(() => {
    const opts = Array.from(document.querySelectorAll('.option-card'));
    return opts.length > 0 && (opts[0] as HTMLElement).innerText.includes('别说我');
  }, { timeout: 3000 });
  await page.screenshot({ path: resolve(OUT_DIR, '03-tone.png'), fullPage: true });
  console.log('✓ 03-tone.png');

  // pick tone "pretend_normal"
  texts = await page.$$eval('.option-card', (els) =>
    els.map((e) => (e as HTMLElement).innerText),
  );
  idx = texts.findIndex((t) => t.includes(TONE_LABELS.pretend_normal));
  buttons = await page.$$('.option-card');
  await buttons[idx].click();

  // 04 — result (wait for share preview to render)
  await page.waitForSelector('.result-name', { timeout: 8000 });
  await page.waitForSelector('.share-preview-img', { timeout: 12000 });
  await new Promise((r) => setTimeout(r, 700));
  await page.screenshot({ path: resolve(OUT_DIR, '04-result.png'), fullPage: true });
  console.log('✓ 04-result.png');

  // 05 — share preview block (cropped) — using document coords + captureBeyondViewport
  await page.evaluate(() => {
    window.scrollTo(0, 0);
  });
  await new Promise((r) => setTimeout(r, 200));
  const docBox = await page.evaluate(() => {
    const el = document.querySelector('.share-preview') as HTMLElement | null;
    if (!el) return null;
    const r = el.getBoundingClientRect();
    return {
      x: r.x + window.scrollX,
      y: r.y + window.scrollY,
      w: r.width,
      h: r.height,
      dpr: window.devicePixelRatio,
    };
  });
  if (docBox && docBox.w > 0 && docBox.h > 0) {
    await page.screenshot({
      path: resolve(OUT_DIR, '05-share-preview.png'),
      clip: {
        x: Math.max(0, docBox.x - 8),
        y: Math.max(0, docBox.y - 8),
        width: docBox.w + 16,
        height: docBox.h + 16,
      },
      captureBeyondViewport: true,
    });
    console.log(`✓ 05-share-preview.png  (clip ${docBox.w}×${docBox.h} at ${docBox.x},${docBox.y})`);
  } else {
    console.log('✗ share-preview not measurable');
  }

  // 06 — actual ShareCard export at native 1080×1350 via html2canvas (we capture the dataURL the app already produced)
  const dataUrl = await page.evaluate(() => {
    const img = document.querySelector('.share-preview-img') as HTMLImageElement | null;
    return img?.src ?? null;
  });
  if (dataUrl && dataUrl.startsWith('data:image/png;base64,')) {
    const base64 = dataUrl.split(',')[1];
    const buf = Buffer.from(base64, 'base64');
    const fs = await import('fs/promises');
    await fs.writeFile(resolve(OUT_DIR, '06-share-card-1080x1350.png'), buf);
    console.log('✓ 06-share-card-1080x1350.png');
  }

  await browser.close();
  console.log(`\n📦 saved to ${OUT_DIR}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
