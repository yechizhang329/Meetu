// Render 32 PNGs (8 scenes × 4 characters) using whitelist v1 assets.
// Output to public/duty-room-v1/receipts-staging-whitelist-v1/  (independent staging, NOT live).
// Per Fiona 13:47 transfer: scale to 32 staging, no deploy.
// W1 cat / W2 goose / W3 hamster / W4 alpaca-main-v3.

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

  const sceneIds = Object.keys(data.scenes).filter(k => !k.startsWith('_'));
  const charIds = Object.keys(data.characters).filter(k => !k.startsWith('_'));
  const overrides = data.overrides || {};
  let count = 0;
  const total = sceneIds.length * charIds.length;

  for (const sceneShort of sceneIds) {
    const scene = data.scenes[sceneShort];
    for (const charId of charIds) {
      count++;
      const char = data.characters[charId];
      const ovKey = `${sceneShort}__${charId}`;
      const override = overrides[ovKey] || {};
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
        .replace(/\{\{NO\}\}/g, String(count).padStart(3, '0'));
      const page = await browser.newPage();
      await page.setViewport({ width: 1080, height: 1350 });
      await page.setContent(html, { waitUntil: 'networkidle0', timeout: 20000 });
      await page.evaluate(() => document.fonts.ready);
      await new Promise(r => setTimeout(r, 600));
      const filename = `${sceneIdFull}-${charId}.png`;
      await page.screenshot({ path: path.join(OUT, filename), type: 'png', clip: { x:0, y:0, width:1080, height:1350 } });
      await page.close();
      const overrideTag = override.l2 ? '[ov]' : '    ';
      console.log(`[${count}/${total}] ${overrideTag} ${filename}`);
    }
  }
  await browser.close();
  console.log(`\nDone! ${total} staging PNGs in ${OUT}`);
})();
