#!/usr/bin/env node
/**
 * Render the WeChat long-image article into a PNG.
 *
 * Run from `Meetu/社交动物测试H5/06-前端实现/social-animal-test`:
 *   node scripts/render-wechat-long-image.cjs
 *
 * Output:
 *   Meetu/社交动物测试H5/07-传播包/微信公众号首篇-正文长图.png
 *   (900×~2095, ~250KB)
 */
const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

const REPO_ROOT = path.resolve(__dirname, '..', '..', '..', '..', '..');
const SRC_HTML = path.join(
  REPO_ROOT,
  'Meetu/社交动物测试H5/07-传播包/微信公众号首篇-代码版/wechat-long-image.html',
);
const OUT_PNG = path.join(
  REPO_ROOT,
  'Meetu/社交动物测试H5/07-传播包/微信公众号首篇-正文长图.png',
);

(async () => {
  if (!fs.existsSync(SRC_HTML)) {
    console.error('Source HTML missing:', SRC_HTML);
    process.exit(1);
  }
  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 900, height: 2200, deviceScaleFactor: 1 });
  const fileUrl = 'file://' + SRC_HTML;
  await page.goto(fileUrl, { waitUntil: 'networkidle0' });
  await page.waitForFunction(() => {
    const img = document.querySelector('.result-img-wrap img');
    return img && img.complete && img.naturalWidth > 0;
  }, { timeout: 8000 });
  await new Promise((r) => setTimeout(r, 600));

  const el = await page.$('#poster');
  const box = await el.boundingBox();
  await el.screenshot({ path: OUT_PNG });
  await browser.close();

  const stat = fs.statSync(OUT_PNG);
  console.log(`✓ rendered: ${box.width}×${box.height}  ${(stat.size / 1024).toFixed(1)}KB`);
  console.log(`  → ${OUT_PNG}`);
})();
