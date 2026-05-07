#!/usr/bin/env node
/**
 * Render the 4 XHS screens (开屏孔雀) into separate 1080×1350 PNGs.
 *
 * Run from `Meetu/社交动物测试H5/06-前端实现/social-animal-test`:
 *   node scripts/render-xhs-peacock.cjs
 *
 * Output (in `Meetu/社交动物测试H5/07-传播包/XHS-动物园挂牌-孔雀多图/`):
 *   01-cover.png
 *   02-result-card.png
 *   03-roast.png
 *   04-cta.png
 */
const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

const REPO_ROOT = path.resolve(__dirname, '..', '..', '..', '..', '..');
const DIR = path.join(REPO_ROOT, 'Meetu/社交动物测试H5/07-传播包/XHS-动物园挂牌-孔雀多图');
const SRC = path.join(DIR, 'xhs-peacock-screens.html');

const SCREENS = [
  { id: 'screen-01', out: '01-cover.png' },
  { id: 'screen-02', out: '02-result-card.png' },
  { id: 'screen-03', out: '03-roast.png' },
  { id: 'screen-04', out: '04-cta.png' },
];

(async () => {
  if (!fs.existsSync(SRC)) {
    console.error('source not found:', SRC);
    process.exit(1);
  }
  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1080, height: 1350, deviceScaleFactor: 1 });
  await page.goto('file://' + SRC, { waitUntil: 'networkidle0' });
  await page.waitForFunction(() => {
    const img = document.querySelector('#screen-02 img');
    return img && img.complete && img.naturalWidth > 0;
  }, { timeout: 8000 });
  await new Promise((r) => setTimeout(r, 500));

  for (const { id, out } of SCREENS) {
    const el = await page.$('#' + id);
    if (!el) {
      console.error('missing element', id);
      continue;
    }
    const box = await el.boundingBox();
    const target = path.join(DIR, out);
    await el.screenshot({ path: target });
    const size = (fs.statSync(target).size / 1024).toFixed(1);
    console.log(`✓ ${out}  ${box.width}×${box.height}  ${size}KB`);
  }

  await browser.close();
})();
