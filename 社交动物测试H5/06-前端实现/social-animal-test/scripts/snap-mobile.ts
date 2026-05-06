import puppeteer from 'puppeteer';
import { writeFile, mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';

// Mobile QA screenshots at 375 and 390px.
// Usage: npx tsx scripts/snap-mobile.ts

const BASE = process.env.SA_BASE_URL ?? 'http://localhost:4173';
const OUT = path.resolve('qa-screenshots');

async function main() {
  if (!existsSync(OUT)) await mkdir(OUT, { recursive: true });

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox'],
  });

  const widths = [375, 390];
  for (const width of widths) {
    const page = await browser.newPage();
    await page.setViewport({ width, height: 844, deviceScaleFactor: 2 });

    // 1. Intro
    await page.goto(BASE, { waitUntil: 'networkidle0' });
    // Clear any restored state from previous test runs.
    await page.evaluate(() => localStorage.clear());
    await page.goto(BASE, { waitUntil: 'networkidle0' });
    await page.screenshot({
      path: path.join(OUT, `01-intro-${width}.png`),
      fullPage: true,
    });

    // 2. Quiz page - click start
    await page.click('button.big-btn');
    await page.waitForSelector('.quiz-card', { timeout: 2000 });
    await page.screenshot({
      path: path.join(OUT, `02-quiz-${width}.png`),
      fullPage: true,
    });

    // 3. Click through 12 questions always picking A
    for (let i = 0; i < 12; i++) {
      await page.waitForSelector('.option-card', { timeout: 2000 });
      const buttons = await page.$$('.option-card');
      if (!buttons[0]) break;
      await buttons[0].click();
      await new Promise((r) => setTimeout(r, 350));
    }

    // 4. Wait for loading/result
    await page.waitForSelector('.result-animal-name', { timeout: 5000 });
    await new Promise((r) => setTimeout(r, 400));
    await page.screenshot({
      path: path.join(OUT, `03-result-allA-${width}.png`),
      fullPage: true,
    });

    await page.close();
  }

  // Force each of 16 animals via hash override and screenshot
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
  const page = await browser.newPage();
  await page.setViewport({ width: 375, height: 844, deviceScaleFactor: 2 });
  for (const animal of animals) {
    // Hard navigate to bust any SPA state
    await page.goto(`${BASE}/?_=${Date.now()}#result=${animal}`, { waitUntil: 'networkidle0' });
    await page.evaluate(() => localStorage.clear());
    await page.reload({ waitUntil: 'networkidle0' });
    await page.waitForSelector('.result-animal-name', { timeout: 3000 });
    await new Promise((r) => setTimeout(r, 250));
    await page.screenshot({
      path: path.join(OUT, `result-${animal}.png`),
      fullPage: true,
    });
    console.log(`snap ${animal}`);
  }
  await page.close();

  await browser.close();
  console.log(`\nSaved to ${OUT}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
