import sharp from 'sharp';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ASSET_DIR = path.resolve(__dirname, '..', 'src', 'assets', 'animals');
const STRIP = 10;
const CORNER = 24;
const MAX_BACKGROUND_DISTANCE = 26;

interface CropColor {
  id: string;
  bgHex: string;
  bgRgb: [number, number, number];
}

function rgbDistance(a: [number, number, number], b: [number, number, number]) {
  return Math.sqrt(a.reduce((sum, value, index) => sum + (value - b[index]) ** 2, 0));
}

function rgbToHex([r, g, b]: [number, number, number]) {
  const h = (n: number) => n.toString(16).padStart(2, '0');
  return `#${h(r)}${h(g)}${h(b)}`;
}

function averageRegion(
  data: Buffer,
  channels: number,
  width: number,
  region: { left: number; top: number; width: number; height: number },
): [number, number, number] {
  let r = 0;
  let g = 0;
  let b = 0;
  let count = 0;

  for (let y = region.top; y < region.top + region.height; y++) {
    for (let x = region.left; x < region.left + region.width; x++) {
      const i = (y * width + x) * channels;
      r += data[i];
      g += data[i + 1];
      b += data[i + 2];
      count++;
    }
  }

  return [Math.round(r / count), Math.round(g / count), Math.round(b / count)];
}

function isCloseToBg(rgb: [number, number, number], bg: [number, number, number]) {
  return rgbDistance(rgb, bg) <= MAX_BACKGROUND_DISTANCE;
}

async function main() {
  const colors = JSON.parse(await readFile(path.join(ASSET_DIR, '_colors.json'), 'utf8')) as CropColor[];
  let failed = false;

  for (const color of colors) {
    const { data, info } = await sharp(path.join(ASSET_DIR, `${color.id}.png`))
      .raw()
      .toBuffer({ resolveWithObject: true });
    const { width, height, channels } = info;

    const samples = {
      top: averageRegion(data, channels, width, { left: 0, top: 0, width, height: STRIP }),
      topLeft: averageRegion(data, channels, width, { left: 0, top: 0, width: CORNER, height: CORNER }),
      topRight: averageRegion(data, channels, width, { left: width - CORNER, top: 0, width: CORNER, height: CORNER }),
      bottomLeft: averageRegion(data, channels, width, { left: 0, top: height - CORNER, width: CORNER, height: CORNER }),
      bottomRight: averageRegion(data, channels, width, { left: width - CORNER, top: height - CORNER, width: CORNER, height: CORNER }),
    } satisfies Record<string, [number, number, number]>;

    const edgeDistances = Object.entries(samples).map(([name, rgb]) => ({
      name,
      distance: rgbDistance(rgb, color.bgRgb),
      hex: rgbToHex(rgb),
    }));
    const worst = edgeDistances.reduce((max, item) => (item.distance > max.distance ? item : max));
    const closeCornerCount = [samples.topLeft, samples.topRight, samples.bottomLeft, samples.bottomRight].filter((rgb) =>
      isCloseToBg(rgb, color.bgRgb),
    ).length;

    const ok =
      isCloseToBg(samples.top, color.bgRgb) &&
      isCloseToBg(samples.topLeft, color.bgRgb) &&
      isCloseToBg(samples.topRight, color.bgRgb) &&
      closeCornerCount >= 3;
    console.log(
      `${ok ? '✓' : '✗'} ${color.id.padEnd(20)} bg=${color.bgHex} top=${rgbToHex(samples.top)} cornersOk=${closeCornerCount}/4 worst=${worst.name}:${worst.hex} Δ${worst.distance.toFixed(1)}`,
    );
    if (!ok) failed = true;
  }

  if (failed) {
    throw new Error('Animal crop edge QA failed: possible bleed or background mismatch.');
  }
  console.log('\n✅ Animal crop edge QA passed.');
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
