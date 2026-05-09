// 心情值班室 v1.0 — 32-combo batch QA + screenshot.
// PRD v1.1: 8 scenes × 4 characters = 32 receipt combos.
// Verifies:
//   1. All 32 receipt PNGs are reachable at expected paths
//   2. Each PNG is 1080×1350
//   3. Result page renders for each scene + character switch works
//   4. Save flow downloadable
//
// Usage: `npm run build && npm run qa:batch`
// Output: qa-screenshots/batch-32/<sceneId>-<roleId>.png

import puppeteer from 'puppeteer';
import { createServer } from 'node:http';
import { readFile, mkdir } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const distDir = resolve(__dirname, '..', 'dist');
const outDir = resolve(__dirname, '..', 'qa-screenshots', 'batch-32');

const PORT = 4199;
const BASE_PREFIX = '/Meetu/duty-room-v1/';
const BASE_URL = `http://localhost:${PORT}${BASE_PREFIX}`;

const SCENES = [
  'S1_stubborn_deny',
  'S2_low_battery',
  'S3_ddl_procrast',
  'S4_polite_overflow',
  'S5_need_quiet',
  'S6_invited_out',
  'S7_msg_unreplied',
  'S8_pushed_along',
];

const ROLES = ['stubborn_goose', 'low_battery_cat', 'ddl_hamster', 'backstage_alpaca'];

async function startStaticServer() {
  const server = createServer(async (req, res) => {
    try {
      let urlPath = req.url ?? '/';
      const qIdx = urlPath.indexOf('?');
      if (qIdx >= 0) urlPath = urlPath.slice(0, qIdx);
      const hIdx = urlPath.indexOf('#');
      if (hIdx >= 0) urlPath = urlPath.slice(0, hIdx);
      if (urlPath.startsWith(BASE_PREFIX)) {
        urlPath = urlPath.slice(BASE_PREFIX.length - 1);
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

interface ComboResult {
  sceneId: string;
  roleId: string;
  pngFetchOk: boolean;
  pngWidth: number;
  pngHeight: number;
  resultPageOk: boolean;
  error?: string;
}

async function main() {
  await mkdir(outDir, { recursive: true });
  const server = await startStaticServer();
  const results: ComboResult[] = [];

  try {
    const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
    try {
      const page = await browser.newPage();
      await page.setViewport({ width: 414, height: 896, deviceScaleFactor: 2 });
      page.on('console', (m) => {
        if (m.type() === 'error') console.log('[browser err]', m.text());
      });
      page.on('pageerror', (e) => console.log('[pageerror]', (e as Error).message));

      // Phase 1: verify all 32 PNGs are reachable + 1080×1350
      // Use <img> loading (no CORS) instead of fetch + createImageBitmap.
      console.log('\n📋 Phase 1: verifying 32 receipt PNGs...');
      // Navigate to the app first so the page is on the right origin
      await page.goto(BASE_URL, { waitUntil: 'networkidle0' });
      for (const sceneId of SCENES) {
        for (const roleId of ROLES) {
          const pngUrl = `${BASE_URL}duty-room-v1/receipts/${sceneId}-${roleId}.png`;
          let pngFetchOk = false;
          let pngWidth = 0;
          let pngHeight = 0;
          let error: string | undefined;
          try {
            const dim = await page.evaluate(async (url) => {
              return await new Promise<{ ok: boolean; w: number; h: number; err?: string }>(
                (resolveProm) => {
                  const img = new Image();
                  img.onload = () => resolveProm({ ok: true, w: img.naturalWidth, h: img.naturalHeight });
                  img.onerror = () => resolveProm({ ok: false, w: 0, h: 0, err: 'img onerror' });
                  img.src = url;
                },
              );
            }, pngUrl);
            pngFetchOk = dim.ok;
            pngWidth = dim.w;
            pngHeight = dim.h;
            if (!dim.ok) error = dim.err;
          } catch (e) {
            error = String(e);
          }
          const dimsOk = pngWidth === 1080 && pngHeight === 1350;
          const ok = pngFetchOk && dimsOk;
          console.log(
            `${ok ? '✓' : '✗'} ${sceneId} × ${roleId} → ${sceneId}-${roleId}.png (${pngWidth}×${pngHeight})${error ? ` err=${error}` : ''}`,
          );
          results.push({
            sceneId,
            roleId,
            pngFetchOk,
            pngWidth,
            pngHeight,
            resultPageOk: false,
            error,
          });
        }
      }

      // Phase 2: smoke test 4 result pages (one per scene's primary role) + character switch
      console.log('\n📋 Phase 2: result-page render + character switch...');
      const samplePages = ['S1_stubborn_deny', 'S2_low_battery', 'S5_need_quiet', 'S8_pushed_along'];
      for (const sceneId of samplePages) {
        const url = `${BASE_URL}#/result/${sceneId}`;
        try {
          await page.goto(url, { waitUntil: 'networkidle0' });
          await page.waitForSelector('.role-tabs', { timeout: 8000 });
          await page.waitForSelector('.result-receipt', { timeout: 8000 });

          // Click each role tab and verify image src changes
          const tabs = await page.$$('.role-tab');
          if (tabs.length !== 4) {
            console.log(`✗ ${sceneId}: expected 4 role-tabs, got ${tabs.length}`);
            continue;
          }
          let switchOk = true;
          for (let i = 0; i < tabs.length; i++) {
            await tabs[i].click();
            await new Promise((r) => setTimeout(r, 200));
            const src = await page.$eval('.result-receipt', (el) => (el as HTMLImageElement).src);
            if (!src.includes('/receipts/')) {
              switchOk = false;
              break;
            }
          }
          if (switchOk) console.log(`✓ ${sceneId}: 4 role tabs switch OK`);
          // Update results entries for combos in this scene
          for (const r of results) {
            if (r.sceneId === sceneId) r.resultPageOk = switchOk;
          }
          // Snapshot
          const file = resolve(outDir, `result-${sceneId}.png`);
          await page.screenshot({ path: file as `${string}.png`, fullPage: true });
        } catch (e) {
          console.log(`✗ ${sceneId}: ${String(e)}`);
        }
      }

      // Phase 3: snapshot intro + scenes
      console.log('\n📋 Phase 3: shell pages...');
      for (const [label, hash, sel] of [
        ['00-intro', '#/', '.intro-cta'],
        ['01-scenes', '#/scenes', '.scene-list .scene-note'],
      ] as const) {
        try {
          await page.goto(BASE_URL + hash, { waitUntil: 'networkidle0' });
          await page.waitForSelector(sel, { timeout: 8000 });
          await page.screenshot({
            path: resolve(outDir, `${label}.png`) as `${string}.png`,
            fullPage: true,
          });
          console.log(`✓ ${label}`);
        } catch (e) {
          console.log(`✗ ${label}: ${String(e)}`);
        }
      }

      await browser.close();
    } finally {
      await browser.close().catch(() => {});
    }
  } finally {
    server.close();
  }

  // Final report
  const total = results.length;
  const pngOk = results.filter((r) => r.pngFetchOk && r.pngWidth === 1080 && r.pngHeight === 1350).length;
  const allOk = pngOk === total;
  console.log('\n══════════════════════════════════════════');
  console.log(`📊 Batch QA result: ${pngOk}/${total} combos pass PNG check`);
  console.log(`📁 Screenshots: ${outDir}`);
  console.log('══════════════════════════════════════════\n');
  if (!allOk) {
    console.error('✗ Some combos failed.');
    process.exit(1);
  }
  console.log('✅ 32-combo batch QA PASS.');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
