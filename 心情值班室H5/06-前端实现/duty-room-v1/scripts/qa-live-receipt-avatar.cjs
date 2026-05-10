// qa:live-receipt-avatar — post-deploy live gate.
// Per Fiona 14:14 + 14:21: 直接 curl live PNG, 裁 avatar slot, 检测是否命中旧
// `.avatar-*` CSS placeholder 颜色签名。这是 v1.2 polish 块2 P0 (commit f5877ef
// 漏 dist→docs 同步, live 32 PNG 全是旧 placeholder, Phoebe 14:11 抓出) 的根因
// 沉淀: 工程 staging/contact sheet PASS ≠ live PASS。HTTP 200 + naturalSize
// 1080×1350 也不是充分验收 (旧 placeholder 也满足)。必须验内容。
//
// 命中旧 placeholder 颜色签名即 FAIL。
//
// Usage: node scripts/qa-live-receipt-avatar.cjs [--base <url>]
//   default base = https://yechizhang329.github.io/Meetu/duty-room-v1/duty-room-v1/receipts/
//
// Exit code: 0 PASS, 1 FAIL.

const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');
const { PNG } = require('pngjs');

const DEFAULT_BASE = 'https://yechizhang329.github.io/Meetu/duty-room-v1/duty-room-v1/receipts/';
const argBaseIdx = process.argv.indexOf('--base');
const BASE = argBaseIdx >= 0 ? process.argv[argBaseIdx + 1] : DEFAULT_BASE;

const DIR = __dirname;
const PROJECT_ROOT = path.resolve(DIR, '..');
const OUT_DIR = path.join(PROJECT_ROOT, 'qa-screenshots', 'live-receipt-avatar');

// 4 sample receipts spanning S2/S3/S5/S8 × 4 characters.
// avatar slot ~ (100, 670) → (200, 770) per template form A height:160 in .l3 left col.
const SAMPLES = [
  { fn: 'S2_low_battery-low_battery_cat.png',     role: 'cat',     label: 'W1 cat',    expectMean: 'warm orange (R≥G≥B, R>200)' },
  { fn: 'S3_ddl_procrast-backstage_alpaca.png',   role: 'alpaca',  label: 'W4 alpaca', expectMean: 'cream/white wool (R≈G≈B, all >190)' },
  { fn: 'S5_need_quiet-stubborn_goose.png',       role: 'goose',   label: 'W2 goose',  expectMean: 'gray-warm body (R≈G≈B, all >180)' },
  { fn: 'S8_pushed_along-ddl_hamster.png',        role: 'hamster', label: 'W3 hamster',expectMean: 'caramel-cream (R≥G≥B, R>200)' },
];

// Old `.avatar-*` CSS placeholder radial-gradient signatures (the FAIL conditions).
// These are the colors Phoebe抓 at 14:11 when live was wrong.
const PLACEHOLDER_SIGNATURES = {
  cat:     { r: 184, g:  70, b:  58, name: 'red radial-gradient (.avatar-cat)' },
  goose:   { r:  90, g: 142, b: 106, name: 'green radial-gradient (.avatar-goose)' },
  hamster: { r: 232, g: 160, b:  96, name: 'sat-orange radial-gradient (.avatar-hamster)' },
  alpaca:  { r: 106, g: 160, b: 184, name: 'slate-blue radial-gradient (.avatar-alpaca)' },
};
const PLACEHOLDER_CH_TOLERANCE = 25; // FAIL match: per-channel |Δ|≤25 across R/G/B (saturated placeholder vs balanced whitelist)

// avatar-zone scan region (px in 1080×1350 receipt).
// Per template form A (whitelist v1): .l3 padding 22 8 + display flex + gap 28;
// .role-img height 160 width auto sits in the left column, character roughly fits
// 80-220 horizontal × 600-800 vertical. Restricted to LEFT column to avoid catching
// "本次由：" text and "签字" sign in the right column (which would average toward
// dark ink RGB and false-match green/red placeholder signatures).
// If template form changes, update SCAN.
const SCAN = { x0: 70, y0: 600, x1: 230, y1: 800 };

// Paper-bg base colors (from template L11-12 / .receipt L36-43 base + warm tints).
// Ignore pixels close to these as "paper background, not avatar".
const PAPER_BG = [
  { r: 241, g: 236, b: 223 }, // --paper-base #F1ECDF
  { r: 235, g: 228, b: 211 }, // --paper-warm #EBE4D3
  { r: 214, g: 207, b: 188 }, // body #D6CFBC
];
const PAPER_TOLERANCE = 28; // any pixel within ±28 of any paper RGB → ignored


function isPaperBg(r, g, b) {
  for (const p of PAPER_BG) {
    if (Math.abs(r - p.r) <= PAPER_TOLERANCE
     && Math.abs(g - p.g) <= PAPER_TOLERANCE
     && Math.abs(b - p.b) <= PAPER_TOLERANCE) return true;
  }
  return false;
}

function avatarMeanRgbInZone(png) {
  const { width, data } = png;
  let r = 0, g = 0, b = 0, n = 0;
  for (let y = SCAN.y0; y < SCAN.y1; y++) {
    for (let x = SCAN.x0; x < SCAN.x1; x++) {
      const i = (width * y + x) << 2;
      const pr = data[i], pg = data[i+1], pb = data[i+2];
      if (isPaperBg(pr, pg, pb)) continue;
      r += pr; g += pg; b += pb; n++;
    }
  }
  if (n === 0) return null; // no avatar pixels found
  return { r: r/n, g: g/n, b: b/n, count: n };
}

function fetchBuf(url) {
  return new Promise((resolve, reject) => {
    const lib = url.startsWith('https:') ? https : http;
    lib.get(url, res => {
      if (res.statusCode !== 200) {
        return reject(new Error(`HTTP ${res.statusCode} for ${url}`));
      }
      const chunks = [];
      res.on('data', c => chunks.push(c));
      res.on('end', () => resolve(Buffer.concat(chunks)));
      res.on('error', reject);
    }).on('error', reject);
  });
}

function placeholderHit(rgb) {
  // Placeholder signatures are saturated radial-gradient colors. Use per-channel match
  // (all 3 channels within ±PLACEHOLDER_CH_TOLERANCE). Balanced/desaturated whitelist
  // means won't match per-channel even if euclidean is small.
  for (const [role, sig] of Object.entries(PLACEHOLDER_SIGNATURES)) {
    const dr = Math.abs(rgb.r - sig.r);
    const dg = Math.abs(rgb.g - sig.g);
    const db = Math.abs(rgb.b - sig.b);
    if (dr <= PLACEHOLDER_CH_TOLERANCE && dg <= PLACEHOLDER_CH_TOLERANCE && db <= PLACEHOLDER_CH_TOLERANCE) {
      const eucl = Math.sqrt(dr*dr + dg*dg + db*db);
      return { role, name: sig.name, distance: eucl.toFixed(1) };
    }
  }
  return null;
}

function cropToFile(png, outPath) {
  const w = SCAN.x1 - SCAN.x0;
  const h = SCAN.y1 - SCAN.y0;
  const out = new PNG({ width: w, height: h });
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const si = (png.width * (y + SCAN.y0) + (x + SCAN.x0)) << 2;
      const oi = (w * y + x) << 2;
      out.data[oi  ] = png.data[si  ];
      out.data[oi+1] = png.data[si+1];
      out.data[oi+2] = png.data[si+2];
      out.data[oi+3] = 255;
    }
  }
  fs.writeFileSync(outPath, PNG.sync.write(out));
}

(async () => {
  if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });
  console.log(`🔍 qa:live-receipt-avatar — fetching live receipts from:\n   ${BASE}\n`);
  console.log(`📐 avatar scan zone: x[${SCAN.x0}-${SCAN.x1}] y[${SCAN.y0}-${SCAN.y1}] (paper-bg masked)`);
  console.log(`📏 placeholder FAIL threshold: per-channel |Δ| ≤ ${PLACEHOLDER_CH_TOLERANCE} across R/G/B\n`);
  console.log(`${'sample'.padEnd(48)} ${'label'.padEnd(12)} ${'avatar mean R,G,B'.padEnd(20)} verdict`);

  let failures = [];
  for (const { fn, role, label } of SAMPLES) {
    const url = BASE + fn;
    let buf, png;
    try {
      buf = await fetchBuf(url);
      png = PNG.sync.read(buf);
    } catch (e) {
      failures.push({ fn, role, reason: 'fetch/parse error: ' + e.message });
      console.log(`  ${fn.padEnd(48)} ${label.padEnd(12)} ${''.padEnd(20)} ❌ FAIL: ${e.message}`);
      continue;
    }
    if (png.width !== 1080 || png.height !== 1350) {
      failures.push({ fn, role, reason: `wrong size ${png.width}×${png.height}` });
      console.log(`  ${fn.padEnd(48)} ${label.padEnd(12)} ${''.padEnd(20)} ❌ FAIL: size ${png.width}×${png.height}`);
      continue;
    }
    const rgb = avatarMeanRgbInZone(png);
    const cropPath = path.join(OUT_DIR, fn.replace('.png', '-avatar-zone.png'));
    cropToFile(png, cropPath);
    if (!rgb) {
      failures.push({ fn, role, reason: 'no non-paper pixels found in scan zone (template moved?)' });
      console.log(`  ${fn.padEnd(48)} ${label.padEnd(12)} ${'(empty)'.padEnd(20)} ❌ FAIL: empty zone`);
      continue;
    }
    const hit = placeholderHit(rgb);
    const rgbStr = `${rgb.r.toFixed(1)},${rgb.g.toFixed(1)},${rgb.b.toFixed(1)}`;
    if (hit) {
      failures.push({ fn, role, hit: hit.name, distance: hit.distance, rgb: rgbStr });
      console.log(`  ${fn.padEnd(48)} ${label.padEnd(12)} ${rgbStr.padEnd(20)} ❌ FAIL: hit ${hit.name} (Δ=${hit.distance})`);
    } else {
      console.log(`  ${fn.padEnd(48)} ${label.padEnd(12)} ${rgbStr.padEnd(20)} ✅ PASS (n=${rgb.count})`);
    }
  }

  console.log('');
  console.log(`📁 avatar-slot crops: ${path.relative(PROJECT_ROOT, OUT_DIR)}/`);

  if (failures.length === 0) {
    console.log('\n✅ qa:live-receipt-avatar PASS — live PNGs do not match any old CSS placeholder color signature');
    process.exit(0);
  }
  console.log(`\n❌ qa:live-receipt-avatar FAIL — ${failures.length} live receipt(s) hit placeholder signature:`);
  for (const f of failures) {
    console.log(`  • ${f.fn} (${f.role})  RGB=${f.rgb || '-'}  ${f.hit ? 'matches: ' + f.hit : f.reason}`);
  }
  console.log('\nPossible causes:');
  console.log('  - dist/ → docs/duty-room-v1/ 未同步 (run: npm run deploy:gh)');
  console.log('  - GH Pages cache stale (wait 30-60s)');
  console.log('  - receipts/ swap 失败 (check public/duty-room-v1/receipts/)');
  process.exit(1);
})();
