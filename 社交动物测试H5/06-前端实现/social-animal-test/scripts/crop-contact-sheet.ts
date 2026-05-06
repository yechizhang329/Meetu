// Crop the 4×4 contact sheet into 16 individual animal PNGs.
// Run:  npx tsx scripts/crop-contact-sheet.ts
//
// Output:
//   src/assets/animals/<id>.png   (resized to OUTPUT_W x OUTPUT_H)
//   src/assets/animals/_colors.json   (sampled edge color per animal)
//
// Source path defaults to the latest contact sheet under 03-视觉设计/.
// Animal order matches results.ts §allAnimalIds (4×4 row-major).

import sharp from 'sharp';
import { writeFile, mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SOURCE = process.env.SA_CONTACT_SHEET ??
  path.resolve(__dirname, '..', '..', '..', '03-视觉设计', '微信图片_20260506213706_54_64.png');
const OUT_DIR = path.resolve(__dirname, '..', 'src', 'assets', 'animals');
// Render is 170px (hero) / 96px (share). 400×333 gives ~2.5x retina without
// shipping full-res PNGs that bloat the bundle.
const OUTPUT_W = 400;
const OUTPUT_H = 334;
// The uploaded contact sheet is visually a 4×4 grid, but the generated cell
// seams are not mathematically even. A safe inner crop avoids carrying a strip
// of the previous/next cell into the exported animal image.
const SAFE_INSET = 18;

const ANIMALS = [
  'power_cat',         // (0,0)
  'warm_dog',          // (1,0)
  'calm_capybara',     // (2,0)
  'corner_mouse',      // (3,0)
  'vibe_monkey',       // (0,1)
  'prep_hamster',      // (1,1)
  'border_collie',     // (2,1)
  'meme_fox',          // (3,1)
  'show_peacock',      // (0,2)
  'empathy_otter',     // (1,2)
  'border_hedgehog',   // (2,2)
  'recharge_panda',    // (3,2)
  'night_owl',         // (0,3)
  'lastminute_pigeon', // (1,3)
  'bullet_alpaca',     // (2,3)
  'social_butterfly',  // (3,3)
];

interface CropColor {
  id: string;
  bgHex: string;
  bgRgb: [number, number, number];
  cropBox: { left: number; top: number; width: number; height: number };
}

function rgbToHex(r: number, g: number, b: number) {
  const h = (n: number) => n.toString(16).padStart(2, '0');
  return `#${h(r)}${h(g)}${h(b)}`;
}

async function sampleEdgeColor(buf: Buffer, w: number, h: number): Promise<[number, number, number]> {
  // Sample a frame around the edges and pick the dominant quantized color.
  // Average edge color is unsafe because some animals intentionally touch the
  // bottom edge; the dominant background bucket is what the page container must
  // match.
  const FRAME = 18;
  const BUCKET = 8;
  const px = await sharp(buf).raw().toBuffer({ resolveWithObject: true });
  const data = px.data;
  const channels = px.info.channels;
  const buckets = new Map<string, { r: number; g: number; b: number; count: number }>();

  const sample = (x: number, y: number) => {
    if (x < 0 || x >= w || y < 0 || y >= h) return;
    const i = (y * w + x) * channels;
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const key = [r, g, b].map((value) => Math.round(value / BUCKET) * BUCKET).join(',');
    const bucket = buckets.get(key) ?? { r: 0, g: 0, b: 0, count: 0 };
    bucket.r += r;
    bucket.g += g;
    bucket.b += b;
    bucket.count++;
    buckets.set(key, bucket);
  };
  for (let x = 0; x < w; x += 2) {
    for (let dy = 0; dy < FRAME; dy++) {
      sample(x, dy);
      sample(x, h - 1 - dy);
    }
  }
  for (let y = 0; y < h; y += 2) {
    for (let dx = 0; dx < FRAME; dx++) {
      sample(dx, y);
      sample(w - 1 - dx, y);
    }
  }

  const dominant = [...buckets.values()].sort((a, b) => b.count - a.count)[0];
  return [
    Math.round(dominant.r / dominant.count),
    Math.round(dominant.g / dominant.count),
    Math.round(dominant.b / dominant.count),
  ];
}

function applySafeInset(left: number, top: number, width: number, height: number) {
  if (width <= SAFE_INSET * 2 || height <= SAFE_INSET * 2) {
    throw new Error(`cell too small for SAFE_INSET=${SAFE_INSET}: ${width}×${height}`);
  }

  return {
    left: left + SAFE_INSET,
    top: top + SAFE_INSET,
    width: width - SAFE_INSET * 2,
    height: height - SAFE_INSET * 2,
  };
}

async function main() {
  await mkdir(OUT_DIR, { recursive: true });

  const meta = await sharp(SOURCE).metadata();
  const W = meta.width!;
  const H = meta.height!;
  if (!W || !H) throw new Error('source has no dimensions');

  // Boundary arrays — avoids per-cell rounding drift.
  const xs = [0, 1, 2, 3, 4].map((i) => Math.round((i * W) / 4));
  const ys = [0, 1, 2, 3, 4].map((j) => Math.round((j * H) / 4));

  const colors: CropColor[] = [];

  for (let r = 0; r < 4; r++) {
    for (let c = 0; c < 4; c++) {
      const idx = r * 4 + c;
      const id = ANIMALS[idx];
      const left = xs[c];
      const top = ys[r];
      const width = xs[c + 1] - xs[c];
      const height = ys[r + 1] - ys[r];
      const cropBox = applySafeInset(left, top, width, height);

      // Crop, then resize to a uniform component size.
      const rawCrop = await sharp(SOURCE)
        .extract(cropBox)
        .png()
        .toBuffer();

      const resized = await sharp(rawCrop)
        .resize({ width: OUTPUT_W, height: OUTPUT_H, fit: 'fill' })
        .png({ compressionLevel: 9 })
        .toBuffer();

      await writeFile(path.join(OUT_DIR, `${id}.png`), resized);

      const [bgR, bgG, bgB] = await sampleEdgeColor(rawCrop, cropBox.width, cropBox.height);
      colors.push({
        id,
        bgHex: rgbToHex(bgR, bgG, bgB),
        bgRgb: [bgR, bgG, bgB],
        cropBox,
      });

      console.log(
        `[${idx + 1}/16] ${id.padEnd(20)} crop=${cropBox.width}x${cropBox.height}@${cropBox.left},${cropBox.top}  bg=${rgbToHex(bgR, bgG, bgB)}`,
      );
    }
  }

  await writeFile(
    path.join(OUT_DIR, '_colors.json'),
    JSON.stringify(colors, null, 2),
  );

  console.log(`\nWrote ${colors.length} animals + _colors.json to ${OUT_DIR}`);
  console.log('\nSampled edge colors (use to update results.ts themeColor/accentColor):');
  for (const c of colors) {
    console.log(`  ${c.id.padEnd(20)} ${c.bgHex}`);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
