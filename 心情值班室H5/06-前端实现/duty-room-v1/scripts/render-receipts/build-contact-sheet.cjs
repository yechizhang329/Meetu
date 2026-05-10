// Build a 32-thumbnail contact sheet from receipts-v2/
// Strategy: use file:// URLs (faster than base64 inline) + bigger setContent timeout
const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');

const ROOT = path.resolve(__dirname, '..', '..');
const SRC_DIR = path.join(ROOT, 'public', 'duty-room-v1', 'receipts-v2');
const OUT = path.join(ROOT, 'qa-screenshots', 'v1.2-contact-sheet.jpg');

const SCENES = [
  'S1_stubborn_deny','S2_low_battery','S3_ddl_procrast','S4_polite_overflow',
  'S5_need_quiet','S6_invited_out','S7_msg_unreplied','S8_pushed_along',
];
const ROLES = ['low_battery_cat','stubborn_goose','ddl_hamster','backstage_alpaca'];

(async () => {
  if (!fs.existsSync(path.dirname(OUT))) fs.mkdirSync(path.dirname(OUT), { recursive: true });
  let imgs = '';
  for (const scene of SCENES) {
    for (const role of ROLES) {
      const filename = `${scene}-${role}.png`;
      const abs = path.join(SRC_DIR, filename);
      const fileUrl = `file://${abs}`;
      imgs += `<div class="cell"><img src="${fileUrl}" /><div class="lbl">${scene.split('_').slice(1).join(' ').slice(0,10)} × ${role.split('_')[0].slice(0,7)}</div></div>`;
    }
  }
  const html = `<!doctype html><html><head><style>
    body{margin:0;padding:0;background:#1a1a1a;font-family:monospace;color:#eee;}
    .grid{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;padding:8px;}
    .cell{position:relative;background:#000;}
    .cell img{display:block;width:100%;height:auto;}
    .cell .lbl{position:absolute;left:4px;bottom:4px;background:rgba(0,0,0,.7);color:#fff;font-size:11px;padding:2px 5px;border-radius:2px;}
  </style></head><body><div class="grid">${imgs}</div></body></html>`;
  const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox', '--allow-file-access-from-files'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1100, height: 200 });
  await page.setContent(html, { waitUntil: 'networkidle0', timeout: 60000 });
  const bodyH = await page.evaluate(() => document.body.scrollHeight);
  await page.setViewport({ width: 1100, height: bodyH });
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({ path: OUT, type: 'jpeg', quality: 78, fullPage: true });
  console.log(`✓ contact sheet: ${OUT}`);
  await browser.close();
})();
