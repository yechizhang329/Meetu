import puppeteer from 'puppeteer';

// Asserts the offscreen share-card DOM is exactly 360×480 (3:4).
// Run:  npx tsx scripts/verify-share-card-dims.ts
// Requires `npm run preview` running on http://localhost:4173/

const BASE = process.env.SA_BASE_URL ?? 'http://localhost:4173';
const EXPECTED_W = 360;
const EXPECTED_H = 480;
const TOLERANCE = 0.5;

const animals = [
  'power_cat',
  'warm_dog',
  'calm_capybara',
  'corner_mouse',
  'vibe_monkey',
  'prep_hamster',
  'border_collie',
  'meme_fox',
  'show_peacock',
  'empathy_otter',
  'border_hedgehog',
  'recharge_panda',
  'night_owl',
  'lastminute_pigeon',
  'bullet_alpaca',
  'social_butterfly',
];

async function main() {
  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 430, height: 900, deviceScaleFactor: 1 });

  const problems: string[] = [];

  for (const animal of animals) {
    await page.goto(`${BASE}/?_=${Date.now()}#result=${animal}`, { waitUntil: 'networkidle0' });
    await page.evaluate(() => localStorage.clear());
    await page.reload({ waitUntil: 'networkidle0' });
    await page.waitForSelector('.share-card-viewport .share-card', { timeout: 3000 });

    const dims = await page.evaluate(() => {
      const el = document.querySelector<HTMLElement>('.share-card-viewport .share-card');
      if (!el) return null;
      const r = el.getBoundingClientRect();
      return { w: r.width, h: r.height };
    });

    if (!dims) {
      problems.push(`${animal}: share-card element not found`);
      continue;
    }
    const dw = Math.abs(dims.w - EXPECTED_W);
    const dh = Math.abs(dims.h - EXPECTED_H);
    const pass = dw <= TOLERANCE && dh <= TOLERANCE;
    console.log(
      `${pass ? '✓' : '✗'} ${animal.padEnd(22)} ${dims.w.toFixed(2)}×${dims.h.toFixed(2)}`,
    );
    if (!pass) {
      problems.push(`${animal}: got ${dims.w.toFixed(2)}×${dims.h.toFixed(2)}, expected ${EXPECTED_W}×${EXPECTED_H}`);
    }
  }

  await browser.close();

  if (problems.length > 0) {
    console.error('\n❌ Share-card dimension drift:');
    problems.forEach((p) => console.error('  ' + p));
    process.exit(1);
  }
  console.log(`\n✅ All ${animals.length} share cards are strict ${EXPECTED_W}×${EXPECTED_H}.`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
