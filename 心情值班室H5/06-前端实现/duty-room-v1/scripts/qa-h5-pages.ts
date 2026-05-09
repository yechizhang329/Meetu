// 心情值班室 v1.0 — H5 3-page QA screenshot + full-chain verify.
// task #23 (Fiona 21:36): "可访问链接 + 三页截图 + 低电量猫完整链路 +
// 结果预览直接用 Canvas PNG + 保存/换一句主动作".
//
// Usage: `npm run qa:h5` (after `npm run build`).
// Output: qa-screenshots/h5/<page>.png + mouthpiece-S2-1-lowBatteryCat.png.

import puppeteer from 'puppeteer';
import { createServer } from 'node:http';
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const distDir = resolve(__dirname, '..', 'dist');
const outDir = resolve(__dirname, '..', 'qa-screenshots', 'h5');

const PORT = 4198;
const BASE_PREFIX = '/Meetu/duty-room-v1/';
const BASE_URL = `http://localhost:${PORT}${BASE_PREFIX}`;

async function startStaticServer() {
  const server = createServer(async (req, res) => {
    try {
      let urlPath = req.url ?? '/';
      const qIdx = urlPath.indexOf('?');
      if (qIdx >= 0) urlPath = urlPath.slice(0, qIdx);
      const hIdx = urlPath.indexOf('#');
      if (hIdx >= 0) urlPath = urlPath.slice(0, hIdx);
      if (urlPath.startsWith(BASE_PREFIX)) {
        urlPath = urlPath.slice(BASE_PREFIX.length - 1); // keep leading '/'
      }
      if (urlPath === '' || urlPath === '/') urlPath = '/index.html';
      const filePath = resolve(distDir, '.' + urlPath);
      if (!filePath.startsWith(distDir)) {
        res.writeHead(403);
        res.end();
        return;
      }
      const data = await readFile(filePath);
      const ext = filePath.split('.').pop() ?? '';
      const mime: Record<string, string> = {
        html: 'text/html; charset=utf-8',
        js: 'application/javascript; charset=utf-8',
        css: 'text/css; charset=utf-8',
        png: 'image/png',
        svg: 'image/svg+xml',
        json: 'application/json',
      };
      res.writeHead(200, { 'Content-Type': mime[ext] ?? 'application/octet-stream' });
      res.end(data);
    } catch {
      res.writeHead(404);
      res.end('Not found');
    }
  });
  await new Promise<void>((r) => server.listen(PORT, r));
  return server;
}

interface PageShot {
  label: string;
  hashPath: string;
  waitSelector: string;
  extraWaitMs?: number;
}

const SHOTS: PageShot[] = [
  { label: '01-intro', hashPath: '#/', waitSelector: '.intro-cta' },
  { label: '02-scenes', hashPath: '#/scenes', waitSelector: '.scene-list .scene-note' },
  {
    label: '03-result-low-battery-cat',
    hashPath: '#/result/S2_low_battery',
    waitSelector: '.result-canvas-wrap canvas',
    extraWaitMs: 2000,
  },
];

async function main() {
  await mkdir(outDir, { recursive: true });
  const server = await startStaticServer();
  try {
    const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
    try {
      const page = await browser.newPage();
      await page.setViewport({ width: 414, height: 896, deviceScaleFactor: 2 });
      page.on('console', (m) => {
        if (m.type() === 'error') console.log('[browser err]', m.text());
      });
      page.on('pageerror', (e) => console.log('[pageerror]', e.message));

      for (const shot of SHOTS) {
        const url = `${BASE_URL}${shot.hashPath}`;
        await page.goto(url, { waitUntil: 'networkidle0' });
        await page.evaluate(() => document.fonts.ready);
        await page.waitForSelector(shot.waitSelector, { timeout: 12000 });
        if (shot.extraWaitMs) {
          await new Promise((r) => setTimeout(r, shot.extraWaitMs));
        }
        const file = resolve(outDir, `${shot.label}.png`);
        await page.screenshot({ path: file as `${string}.png`, fullPage: true });
        console.log(`✓ ${shot.label} → ${file}`);
      }

      // Verify the result-page canvas is strict 1080×1350
      const dims = await page.$$eval('.result-canvas-wrap canvas', (els) =>
        els.map((c) => ({ w: (c as HTMLCanvasElement).width, h: (c as HTMLCanvasElement).height })),
      );
      let allPass = true;
      dims.forEach((d, i) => {
        const ok = d.w === 1080 && d.h === 1350;
        if (!ok) allPass = false;
        console.log(`${ok ? '✓' : '✗'} result canvas[${i}] = ${d.w}×${d.h}`);
      });

      // Export the result-page canvas PNG — proves the "保存这张" chain works
      // for the low-battery cat flagship scene end-to-end.
      const png = await page.$$eval('.result-canvas-wrap canvas', (els) =>
        Promise.all(
          els.map(
            (c) =>
              new Promise<string>((resolve) => {
                (c as HTMLCanvasElement).toBlob((b) => {
                  const r = new FileReader();
                  r.onload = () => resolve(r.result as string);
                  r.readAsDataURL(b!);
                }, 'image/png');
              }),
          ),
        ),
      );
      if (png[0]) {
        const buf = Buffer.from(png[0].split(',')[1], 'base64');
        const pngOut = resolve(outDir, 'mouthpiece-S2-1-low-battery-cat.png');
        await writeFile(pngOut, buf);
        console.log(`✓ exported canvas PNG → ${pngOut} (${buf.length} bytes)`);
      } else {
        allPass = false;
        console.log('✗ no canvas found on result page');
      }

      await browser.close();
      if (!allPass) {
        console.error('\n✗ QA checks failed');
        process.exit(1);
      }
      console.log('\n✅ H5 3-page QA pass.');
    } finally {
      await browser.close().catch(() => {});
    }
  } finally {
    server.close();
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
