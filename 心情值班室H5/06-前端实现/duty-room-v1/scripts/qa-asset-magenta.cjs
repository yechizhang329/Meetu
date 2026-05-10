// qa:asset-magenta — verify whitelist character source PNGs have no cream-tinted partial-alpha
// background residue (the W4 v2 root cause Phoebe identified at 13:14).
//
// Per Fiona 13:56 + Phoebe 13:56:43 教训:
//   - semi% alone is NOT the red-line indicator (W1-W3 high semi% = legitimate ink AA + brush shading)
//   - Red-line is "cream-tinted partial-alpha pixels visible on magenta diagnostic"
//   - W4 v2 had ~35K cream-tinted partial-alpha (~14%) → halo + rectangular block on magenta → FAIL
//   - W4 v3 cleaned algorithm → near 0 cream-tinted → PASS
//
// Algorithm:
//   1. For each whitelist character source PNG: count pixels where
//      - alpha ∈ [10, 250]  (partial-transparent edge / residue)
//      - AND RGB is cream-tone (R∈[218,255] ∧ G∈[195,250] ∧ B∈[170,240] ∧ R≥G≥B-5)
//   2. Also generate magenta composite for human review at out/qa-magenta-diagnostic-<role>.png
//   3. FAIL if any character has cream-tinted partial-alpha count > THRESHOLD (8000 px ~ 3.3% of 402×611)
//
// Output: qa-screenshots/asset-magenta/{role}.png + summary table to stdout
// Exit code: 0 PASS, 1 FAIL.

const fs = require('fs');
const path = require('path');
const { PNG } = require('pngjs');

const DIR = __dirname;
const PROJECT_ROOT = path.resolve(DIR, '..');
const REPO_ROOT = path.resolve(PROJECT_ROOT, '..', '..', '..');
const OUT_DIR = path.join(PROJECT_ROOT, 'qa-screenshots', 'asset-magenta');

const ROLE_ASSETS_DIR = path.join(REPO_ROOT, 'design-assets', 'duty-room-p0', 'contact-crops-transparent');
const WHITELIST = [
  { role: 'low-battery-cat',   file: 'low-battery-cat-main-v1.png'   },
  { role: 'stubborn-goose',    file: 'stubborn-goose-main-v1.png'    },
  { role: 'ddl-hamster',       file: 'ddl-hamster-main-v1.png'       },
  { role: 'backstage-alpaca',  file: 'backstage-alpaca-main-v3.png'  },
];

const CREAM_TINTED_THRESHOLD = 8000; // pixels — set above v3 (~0) and below v2 (~35K)

function isCreamTone(r, g, b) {
  return r >= 218 && r <= 255
      && g >= 195 && g <= 250
      && b >= 170 && b <= 240
      && r >= g && g >= b - 5; // warm cream: R ≥ G ≥ B (with small slack)
}

function analyze(pngPath) {
  const buf = fs.readFileSync(pngPath);
  const png = PNG.sync.read(buf);
  const { width, height, data } = png;
  const total = width * height;
  let opaque = 0, transparent = 0, semi = 0, creamTintedPartial = 0;
  for (let i = 0; i < data.length; i += 4) {
    const r = data[i], g = data[i+1], b = data[i+2], a = data[i+3];
    if (a === 255) opaque++;
    else if (a === 0) transparent++;
    else {
      semi++;
      if (a >= 10 && a <= 250 && isCreamTone(r, g, b)) creamTintedPartial++;
    }
  }
  return { width, height, total, opaque, transparent, semi, creamTintedPartial };
}

function makeMagentaComposite(pngPath, outPath) {
  const buf = fs.readFileSync(pngPath);
  const png = PNG.sync.read(buf);
  const { width, height, data } = png;
  const out = new PNG({ width, height });
  for (let i = 0; i < data.length; i += 4) {
    const a = data[i+3] / 255;
    out.data[i  ] = Math.round(data[i  ] * a + 255 * (1 - a));
    out.data[i+1] = Math.round(data[i+1] * a + 0   * (1 - a));
    out.data[i+2] = Math.round(data[i+2] * a + 255 * (1 - a));
    out.data[i+3] = 255;
  }
  fs.writeFileSync(outPath, PNG.sync.write(out));
}

if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

console.log('🔍 qa:asset-magenta — scanning whitelist character source PNGs…');
console.log('');
console.log('asset                                         size       semi    semi%   cream-tinted-partial    verdict');

let failures = [];
for (const { role, file } of WHITELIST) {
  const src = path.join(ROLE_ASSETS_DIR, role, file);
  if (!fs.existsSync(src)) {
    failures.push({ role, file, reason: 'MISSING source asset' });
    console.log(`${file.padEnd(45)} MISSING`);
    continue;
  }
  const r = analyze(src);
  const semiPct = (r.semi / r.total * 100).toFixed(2);
  const verdict = r.creamTintedPartial > CREAM_TINTED_THRESHOLD ? '❌ FAIL' : '✅ PASS';
  console.log(`${file.padEnd(45)} ${(r.width+'x'+r.height).padEnd(10)} ${String(r.semi).padStart(7)} ${semiPct.padStart(6)}%  ${String(r.creamTintedPartial).padStart(20)}    ${verdict}`);
  if (r.creamTintedPartial > CREAM_TINTED_THRESHOLD) {
    failures.push({ role, file, creamTintedPartial: r.creamTintedPartial, threshold: CREAM_TINTED_THRESHOLD });
  }
  // Always generate magenta diagnostic for human review
  makeMagentaComposite(src, path.join(OUT_DIR, `${role}-on-magenta.png`));
}

console.log('');
console.log(`📁 magenta diagnostics written to: ${path.relative(PROJECT_ROOT, OUT_DIR)}/`);
console.log(`📏 threshold: cream-tinted partial-alpha > ${CREAM_TINTED_THRESHOLD} px → FAIL`);

if (failures.length === 0) {
  console.log('\n✅ qa:asset-magenta PASS — no cream-tinted partial-alpha residue detected');
  process.exit(0);
}
console.log(`\n❌ qa:asset-magenta FAIL — ${failures.length} asset(s):`);
for (const f of failures) {
  console.log(`  • ${f.role}/${f.file}  cream-tinted-partial=${f.creamTintedPartial}  threshold=${f.threshold}`);
  console.log(`    inspect: qa-screenshots/asset-magenta/${f.role}-on-magenta.png`);
}
process.exit(1);
