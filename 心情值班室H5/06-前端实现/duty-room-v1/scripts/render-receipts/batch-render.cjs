/**
 * batch-render.js (v1.1.1 patched for Lucy's 32-combo lock table)
 *
 * Renders 32 receipt PNGs (8 scenes × 4 characters) at 1080×1350 using:
 *   - template.html  (Phoebe ship)
 *   - copy-config-v2.json  (Lucy v2: sceneBase + characterLayer + 24 overrides)
 *
 * Filenames use Lucy's PRD-spec keys (snake_case). Format:
 *   {sceneIdFull}-{characterId}.png
 *   e.g. S1_stubborn_deny-stubborn_goose.png
 *
 * Override resolution:
 *   overrides[`{sceneShortId}__{characterId}`].l2 / .stampLine1 / .stampLine2
 *   wins over scene.l2 / scene.stampLine1 / scene.stampLine2.
 *
 * Output defaults to ../../public/duty-room-v1/receipts (drop-in for the H5 build).
 *
 * Usage: node scripts/render-receipts/batch-render.js [--out PATH]
 */

const fs = require('fs');
const path = require('path');

const DIR = __dirname;
const TEMPLATE_PATH = path.join(DIR, 'template.html');
const DATA_PATH = path.join(DIR, 'copy-config-v2.json');
const PROJECT_ROOT = path.resolve(DIR, '..', '..');
const DEFAULT_OUTPUT = path.join(PROJECT_ROOT, 'public', 'duty-room-v1', 'receipts');

const argOutIdx = process.argv.indexOf('--out');
const OUTPUT_DIR = argOutIdx >= 0 ? path.resolve(process.argv[argOutIdx + 1]) : DEFAULT_OUTPUT;

// Avatar inner HTML per character type
const AVATAR_INNER = {
  cat: `<div class="face"><span class="eyes">— —</span><span class="whiskers"></span><span class="battery"></span></div>`,
  goose: `<div class="face"><span class="eyes">• •</span><span class="beak"></span></div>`,
  hamster: `<div class="face"><span class="eyes">· ·</span><span class="seed">🌰</span></div>`,
  alpaca: `<div class="face"><span class="curl">〰〰〰</span><span class="eyes">◉ ◉</span></div>`
};

async function main() {
  // Dynamic import for puppeteer
  let puppeteer;
  try {
    puppeteer = require('puppeteer');
  } catch (e) {
    console.log('Installing puppeteer...');
    const { execSync } = require('child_process');
    execSync('npm install puppeteer --no-save', { cwd: PROJECT_ROOT, stdio: 'inherit' });
    puppeteer = require('puppeteer');
  }

  const template = fs.readFileSync(TEMPLATE_PATH, 'utf8');
  const data = JSON.parse(fs.readFileSync(DATA_PATH, 'utf8'));

  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  console.log(`📁 Output: ${OUTPUT_DIR}`);
  console.log(`📜 Template: ${TEMPLATE_PATH}`);
  console.log(`📋 Data: ${DATA_PATH}`);

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  // Filter out _meta keys
  const sceneIds = Object.keys(data.scenes).filter((k) => !k.startsWith('_'));
  const charIds = Object.keys(data.characters).filter((k) => !k.startsWith('_'));
  const overrides = data.overrides || {};

  let count = 0;
  const total = sceneIds.length * charIds.length;

  for (const sceneId of sceneIds) {
    const scene = data.scenes[sceneId];
    for (const charId of charIds) {
      const char = data.characters[charId];
      count++;

      // Override resolution: combo-level wins over scene base
      const overrideKey = `${sceneId}__${charId}`;
      const override = overrides[overrideKey] || {};
      const l2 = Array.isArray(override.l2) && override.l2.length === 3 ? override.l2 : scene.l2;
      const stampLine1 = override.stampLine1 || scene.stampLine1;
      const stampLine2 = override.stampLine2 || scene.stampLine2;

      // Use full PRD scene id for filenames, e.g. S1_stubborn_deny
      const sceneIdFull = scene.id || sceneId;

      const serial = `MD-${sceneIdFull}`;
      const no = String(count).padStart(3, '0');
      const time = '今日 · 当下';

      let html = template
        .replace(/\{\{ACCENT_COLOR\}\}/g, char.accent)
        .replace(/\{\{SERIAL\}\}/g, serial)
        .replace(/\{\{CHARACTER_NAME\}\}/g, char.name)
        .replace(/\{\{SCENE_TITLE\}\}/g, scene.title)
        .replace(/\{\{L2_LINE1\}\}/g, l2[0])
        .replace(/\{\{L2_LINE2\}\}/g, l2[1])
        .replace(/\{\{L2_LINE3\}\}/g, l2[2])
        .replace(/\{\{AVATAR_CLASS\}\}/g, `avatar-${char.avatarType}`)
        .replace(/\{\{AVATAR_INNER\}\}/g, AVATAR_INNER[char.avatarType] || '')
        .replace(/\{\{SCOPE\}\}/g, scene.scope)
        .replace(/\{\{SIGN\}\}/g, char.sign)
        .replace(/\{\{TIME\}\}/g, time)
        .replace(/\{\{VALIDITY\}\}/g, scene.validity)
        .replace(/\{\{STAMP_LINE1\}\}/g, stampLine1)
        .replace(/\{\{STAMP_LINE2\}\}/g, stampLine2)
        .replace(/\{\{FOOTER1\}\}/g, scene.footer[0])
        .replace(/\{\{FOOTER2\}\}/g, scene.footer[1])
        .replace(/\{\{FOOTER3\}\}/g, scene.footer[2])
        .replace(/\{\{NO\}\}/g, no);

      const page = await browser.newPage();
      await page.setViewport({ width: 1080, height: 1350 });
      await page.setContent(html, { waitUntil: 'networkidle0', timeout: 15000 });

      // Wait for fonts
      await page.evaluate(() => document.fonts.ready);
      await new Promise(r => setTimeout(r, 300));

      const filename = `${sceneIdFull}-${charId}.png`;
      await page.screenshot({
        path: path.join(OUTPUT_DIR, filename),
        type: 'png',
        clip: { x: 0, y: 0, width: 1080, height: 1350 }
      });

      await page.close();
      const overrideTag = override.l2 ? '[override]' : '         ';
      console.log(`[${count}/${total}] ${overrideTag} ${filename}  L2: ${l2.join(' / ')}`);
    }
  }

  await browser.close();
  console.log(`\n✅ Done! ${total} images in ${OUTPUT_DIR}`);
}

main().catch(e => {
  console.error(e);
  process.exit(1);
});
