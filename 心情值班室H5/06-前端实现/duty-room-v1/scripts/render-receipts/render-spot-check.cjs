// Render 4 PNGs for S2 × all 4 characters using the polish template (sign font fix)
// Output to public/duty-room-v1/receipts-v2/  (separate from v1.1.1 stable receipts/)
const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');

const DIR = __dirname;
const PROJECT_ROOT = path.resolve(DIR, '..', '..');
const TEMPLATE = path.join(DIR, 'template.html');
const DATA = path.join(DIR, 'copy-config-v2.json');
const OUT = path.join(PROJECT_ROOT, 'public', 'duty-room-v1', 'receipts-v2');

const AVATAR_INNER = {
  cat: `<div class="face"><span class="eyes">— —</span><span class="whiskers"></span><span class="battery"></span></div>`,
  goose: `<div class="face"><span class="eyes">• •</span><span class="beak"></span></div>`,
  hamster: `<div class="face"><span class="eyes">· ·</span><span class="seed">🌰</span></div>`,
  alpaca: `<div class="face"><span class="curl">〰〰〰</span><span class="eyes">◉ ◉</span></div>`,
};

(async () => {
  const tpl = fs.readFileSync(TEMPLATE, 'utf8');
  const data = JSON.parse(fs.readFileSync(DATA, 'utf8'));
  if (!fs.existsSync(OUT)) fs.mkdirSync(OUT, { recursive: true });
  const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'] });

  const sceneShort = 'S2';
  const scene = data.scenes[sceneShort];
  const charIds = ['low_battery_cat', 'stubborn_goose', 'ddl_hamster', 'backstage_alpaca'];

  for (let i = 0; i < charIds.length; i++) {
    const charId = charIds[i];
    const char = data.characters[charId];
    const ovKey = `${sceneShort}__${charId}`;
    const override = data.overrides[ovKey] || {};
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
      .replace(/\{\{AVATAR_CLASS\}\}/g, `avatar-${char.avatarType}`)
      .replace(/\{\{AVATAR_INNER\}\}/g, AVATAR_INNER[char.avatarType] || '')
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
    await page.setContent(html, { waitUntil: 'networkidle0', timeout: 15000 });
    await page.evaluate(() => document.fonts.ready);
    await new Promise((r) => setTimeout(r, 400));
    const filename = `${sceneIdFull}-${charId}.png`;
    await page.screenshot({ path: path.join(OUT, filename), type: 'png', clip: { x:0, y:0, width:1080, height:1350 } });
    await page.close();
    const hasOverride = override.l2 ? '[override]' : '         ';
    console.log(`✓ ${hasOverride} ${filename}  sign=${char.sign}  L2: ${l2.join(' / ')}`);
  }
  await browser.close();
  console.log(`\nDone! 4 spot-check PNGs in ${OUT}`);
})();
