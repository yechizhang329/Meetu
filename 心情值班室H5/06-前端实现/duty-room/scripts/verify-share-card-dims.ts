import puppeteer from 'puppeteer';

// Verify each role's share card renders at strict 360×450 in the live preview.
// Run after `npm run preview`:
//   SA_BASE_URL="http://localhost:4173/Meetu/duty-room" npx tsx scripts/verify-share-card-dims.ts

const BASE = process.env.SA_BASE_URL ?? 'http://localhost:4173';
const EXPECTED_W = 360;
const EXPECTED_H = 450;
const TOLERANCE = 0.5;

// (role, scene, tone) — scene picked from PRD §11.1 routing for each role's primary scene.
const TARGETS = [
  { role: 'stubborn_goose',   scene: 'got_called_out', tone: 'stubborn' as const },
  { role: 'low_battery_cat',  scene: 'no_energy',      tone: 'lazy' as const },
  { role: 'ddl_hamster',      scene: 'deadline',       tone: 'pretend_normal' as const },
  { role: 'backstage_alpaca', scene: 'brain_overload', tone: 'polite_dnd' as const },
];

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

async function navAndDeepRender(
  page: puppeteer.Page,
  scene: string,
  tone: string,
) {
  await page.goto(`${BASE}/?_=${Date.now()}`, { waitUntil: 'networkidle0' });
  await page.evaluate(() => localStorage.clear());
  await page.reload({ waitUntil: 'networkidle0' });

  await page.waitForSelector('button.btn-primary');
  await page.click('button.btn-primary');

  await page.waitForSelector('.option-card');
  let texts = await page.$$eval('.option-card', (els) =>
    els.map((e) => (e as HTMLElement).innerText),
  );
  let idx = texts.findIndex((t) => t.includes(SCENE_LABELS[scene]));
  if (idx === -1) throw new Error(`scene label not found: ${scene}`);
  let buttons = await page.$$('.option-card');
  await buttons[idx].click();

  await page.waitForFunction(() => {
    const opts = Array.from(document.querySelectorAll('.option-card'));
    return opts.length > 0 && (opts[0] as HTMLElement).innerText.includes('别说我');
  }, { timeout: 3000 });

  texts = await page.$$eval('.option-card', (els) =>
    els.map((e) => (e as HTMLElement).innerText),
  );
  idx = texts.findIndex((t) => t.includes(TONE_LABELS[tone]));
  if (idx === -1) throw new Error(`tone label not found: ${tone}`);
  buttons = await page.$$('.option-card');
  await buttons[idx].click();

  await page.waitForSelector('.share-viewport .share-card', { timeout: 8000 });
  await new Promise((r) => setTimeout(r, 500));
}

async function main() {
  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 430, height: 900, deviceScaleFactor: 1 });
  const errors: string[] = [];

  for (const t of TARGETS) {
    try {
      await navAndDeepRender(page, t.scene, t.tone);
      const dims = await page.evaluate(() => {
        const el = document.querySelector<HTMLElement>('.share-viewport .share-card');
        if (!el) return null;
        const r = el.getBoundingClientRect();
        return { w: r.width, h: r.height };
      });
      if (!dims) {
        errors.push(`${t.role}: share-card not found`);
        continue;
      }
      const dw = Math.abs(dims.w - EXPECTED_W);
      const dh = Math.abs(dims.h - EXPECTED_H);
      const pass = dw <= TOLERANCE && dh <= TOLERANCE;
      console.log(
        `${pass ? '✓' : '✗'} ${t.role.padEnd(20)} ${dims.w.toFixed(2)}×${dims.h.toFixed(2)}`,
      );
      if (!pass) {
        errors.push(
          `${t.role}: got ${dims.w.toFixed(2)}×${dims.h.toFixed(2)}, expected ${EXPECTED_W}×${EXPECTED_H}`,
        );
      }
    } catch (e) {
      errors.push(`${t.role}: ${(e as Error).message}`);
    }
  }

  await browser.close();

  if (errors.length > 0) {
    console.error('\n❌ Share-card dimension drift:');
    errors.forEach((e) => console.error('  ' + e));
    process.exit(1);
  }
  console.log(`\n✅ All ${TARGETS.length} share cards strict ${EXPECTED_W}×${EXPECTED_H}.`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
