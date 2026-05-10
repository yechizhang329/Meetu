// Render 4 PNGs for S3 (DDL拖延) × all 4 characters using whitelist v1 assets.
// Output to public/duty-room-v1/receipts-staging-whitelist-v1/  (independent staging, NOT live).
// Per Fiona 13:15 transfer + Phoebe 13:14 form decisions.
// W1 cat / W2 goose / W3 hamster / W4 alpaca-main-v2.

const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');

const DIR = __dirname;
const PROJECT_ROOT = path.resolve(DIR, '..', '..');
const TEMPLATE = path.join(DIR, 'template.html');
const DATA = path.join(DIR, 'copy-config-v2.json');
const OUT = path.join(PROJECT_ROOT, 'public', 'duty-room-v1', 'receipts-staging-whitelist-v1');

const ROLE_ASSETS_DIR = path.resolve(PROJECT_ROOT, '..', '..', '..', 'design-assets', 'duty-room-p0', 'contact-crops-transparent');
function dataUri(p) {
  const buf = fs.readFileSync(p);
  return 'data:image/png;base64,' + buf.toString('base64');
}
const ROLE_IMG_SRC = {
  cat:     dataUri(path.join(ROLE_ASSETS_DIR, 'low-battery-cat',   'low-battery-cat-main-v1.png')),
  goose:   dataUri(path.join(ROLE_ASSETS_DIR, 'stubborn-goose',    'stubborn-goose-main-v1.png')),
  hamster: dataUri(path.join(ROLE_ASSETS_DIR, 'ddl-hamster',       'ddl-hamster-main-v1.png')),
  alpaca:  dataUri(path.join(ROLE_ASSETS_DIR, 'backstage-alpaca',  'backstage-alpaca-main-v3.png')),
};

(async () => {
  const tpl = fs.readFileSync(TEMPLATE, 'utf8');
  const data = JSON.parse(fs.readFileSync(DATA, 'utf8'));
  if (!fs.existsSync(OUT)) fs.mkdirSync(OUT, { recursive: true });
  const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'] });

  const sceneShort = 'S3';
  const scene = data.scenes[sceneShort];
  const charIds = ['low_battery_cat', 'stubborn_goose', 'ddl_hamster', 'backstage_alpaca'];

  for (let i = 0; i < charIds.length; i++) {
    const charId = charIds[i];
    const char = data.characters[charId];
    const ovKey = `${sceneShort}__${charId}`;
    const override = (data.overrides && data.overrides[ovKey]) || {};
    const l2 = override.l2 || scene.l2;
    const stampLine1 = override.stampLine1 || scene.stampLine1;
    const stampLine2 = override.stampLine2 || scene.stampLine2;
    const sceneIdFull = scene.id || sceneShort;
    const html = tpl
      .replace(/\{\{ACCENT_COLOR\}\}/g, char.accent)
      .replace(/\{\{SERIAL\}\}/g, `MD-${sceneIdFull}`)
      .replace(/\{\{CHARACTER_NAME\}\}/g, char.name)
      .replace(/\{\{SCENE_TITLE\}\}/g, scene.title)
      .replace(/\{\{L2_LINE1\}\}/g, l2[0])
      .replace(/\{\{L2_LINE2\}\}/g, l2[1])
      .replace(/\{\{L2_LINE3\}\}/g, l2[2])
      .replace(/\{\{ROLE_IMG_SRC\}\}/g, ROLE_IMG_SRC[char.avatarType] || '')
      .replace(/\{\{SCOPE\}\}/g, scene.scope)
      .replace(/\{\{SIGN\}\}/g, char.sign)
      .replace(/\{\{TIME\}\}/g, '今日 · 当下')
      .replace(/\{\{VALIDITY\}\}/g, scene.validity)
      .replace(/\{\{STAMP_LINE1\}\}/g, stampLine1)
      .replace(/\{\{STAMP_LINE2\}\}/g, stampLine2)
      .replace(/\{\{FOOTER1\}\}/g, scene.footer[0])
      .replace(/\{\{FOOTER2\}\}/g, scene.footer[1])
      .replace(/\{\{FOOTER3\}\}/g, scene.footer[2])
      .replace(/\{\{NO\}\}/g, String(i + 1).padStart(3, '0'));
    const page = await browser.newPage();
    await page.setViewport({ width: 1080, height: 1350 });
    await page.setContent(html, { waitUntil: 'networkidle0', timeout: 20000 });
    await page.evaluate(() => document.fonts.ready);
    await new Promise((r) => setTimeout(r, 600));
    const filename = `${sceneIdFull}-${charId}.png`;
    await page.screenshot({ path: path.join(OUT, filename), type: 'png', clip: { x:0, y:0, width:1080, height:1350 } });
    await page.close();
    console.log(`✓ ${filename}  sign=${char.sign}  L2: ${l2.join(' / ')}  asset=${path.basename(ROLE_IMG_SRC[char.avatarType])}`);
  }
  await browser.close();
  console.log(`\nDone! 4 staging PNGs in ${OUT}`);
})();
