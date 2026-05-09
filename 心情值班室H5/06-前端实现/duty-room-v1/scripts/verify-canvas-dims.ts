// Verify the MouthpieceCanvas exports a strict 1080×1350 PNG.
// tech-selection-v1.md §4.2.

import puppeteer from 'puppeteer';
import { createServer } from 'node:http';
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const distDir = resolve(__dirname, '..', 'dist');
const outDir = resolve(__dirname, '..', 'qa-screenshots');

const PORT = 4197;
const BASE = `http://localhost:${PORT}/Meetu/duty-room-v1/`;

async function startStaticServer() {
  const server = createServer(async (req, res) => {
    try {
      let urlPath = req.url ?? '/';
      // Strip query
      const qIdx = urlPath.indexOf('?');
      if (qIdx >= 0) urlPath = urlPath.slice(0, qIdx);
      // Strip the /Meetu/duty-room-v1 base prefix
      if (urlPath.startsWith('/Meetu/duty-room-v1')) {
        urlPath = urlPath.replace(/^\/Meetu\/duty-room-v1/, '');
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
        json: 'application/json',
      };
      res.writeHead(200, {
        'Content-Type': mime[ext] ?? 'application/octet-stream',
      });
      res.end(data);
    } catch {
      res.writeHead(404);
      res.end('Not found');
    }
  });
  await new Promise<void>((r) => server.listen(PORT, r));
  return server;
}

async function main() {
  await mkdir(outDir, { recursive: true });
  const server = await startStaticServer();
  try {
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox'],
    });
    try {
      const page = await browser.newPage();
      await page.setViewport({ width: 414, height: 896, deviceScaleFactor: 2 });
      page.on('console', (msg) => {
        if (msg.type() === 'error') console.log('[browser console]', msg.text());
      });
      await page.goto(BASE, { waitUntil: 'networkidle0' });
      await page.waitForSelector('canvas', { timeout: 10000 });
      // Wait for fonts to load + canvases to draw
      await page.evaluate(() => document.fonts.ready);
      await new Promise((r) => setTimeout(r, 1500));

      const dims = await page.$$eval('canvas', (els) =>
        els.map((c) => ({ w: (c as HTMLCanvasElement).width, h: (c as HTMLCanvasElement).height })),
      );

      let allPass = true;
      dims.forEach((d, i) => {
        const ok = d.w === 1080 && d.h === 1350;
        if (!ok) allPass = false;
        const tag = ok ? '✓' : '✗';
        console.log(`${tag} canvas[${i}] = ${d.w}×${d.h}`);
      });

      // Export each canvas as a PNG file, naming by data-line-id + data-role-id
      const blobs = await page.$$eval('canvas', (els) =>
        Promise.all(
          els.map(
            (c, i) =>
              new Promise<{ idx: number; lineId: string; roleId: string; dataUrl: string }>(
                (resolve) => {
                  const canvas = c as HTMLCanvasElement;
                  const lineId = canvas.dataset.lineId ?? `idx${i}`;
                  const roleId = canvas.dataset.roleId ?? '';
                  canvas.toBlob((b) => {
                    const r = new FileReader();
                    r.onload = () =>
                      resolve({ idx: i, lineId, roleId, dataUrl: r.result as string });
                    r.readAsDataURL(b!);
                  }, 'image/png');
                },
              ),
          ),
        ),
      );

      for (const { lineId, roleId, dataUrl } of blobs) {
        const buf = Buffer.from(dataUrl.split(',')[1], 'base64');
        const name = roleId
          ? `mouthpiece-${lineId}-${roleId}.png`
          : `mouthpiece-${lineId}.png`;
        await writeFile(resolve(outDir, name), buf);
        console.log(`  → wrote ${name} (${buf.length} bytes)`);
      }

      // Full page screenshot for the demo grid
      const pageShot = resolve(outDir, '00-demo-grid.png');
      await page.screenshot({ path: pageShot, fullPage: true });
      console.log(`  → wrote 00-demo-grid.png`);

      await browser.close();
      if (!allPass) {
        console.error('\n✗ Some canvases failed strict 1080×1350 check');
        process.exit(1);
      }
      console.log(`\n✅ All ${dims.length} canvases at strict 1080×1350.`);
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
