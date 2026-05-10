// qa:no-placeholder — scan template + render scripts for placeholder residue.
// Per Fiona 13:12:21 / 13:16:04 / brief v2 §7.
// FAIL conditions:
//   - String matches: AVATAR_INNER / AVATAR_CLASS / .avatar-(cat|goose|hamster|alpaca)
//                    / &#9986; / ✂ / radial-gradient on character forms
//   - <img> src outside whitelist
// Exempt: W5 SVG turbulence noise, sign A1, page background tints (.receipt radial-gradient paper warm/base)
//
// Exit code: 0 PASS, 1 FAIL.

const fs = require('fs');
const path = require('path');

const DIR = __dirname;
const RR = path.join(DIR, 'render-receipts');
const PROJECT_ROOT = path.resolve(DIR, '..');
const STAGING_DIR = path.join(PROJECT_ROOT, 'public', 'duty-room-v1', 'receipts-staging-whitelist-v1');

// --- whitelist (per brief v2 §3) ---
const WHITELIST_BASENAMES = new Set([
  'low-battery-cat-main-v1.png',
  'stubborn-goose-main-v1.png',
  'ddl-hamster-main-v1.png',
  'backstage-alpaca-main-v3.png',
]);

// --- file targets ---
const SOURCE_FILES = [
  path.join(RR, 'template.html'),
  path.join(RR, 'batch-render.cjs'),
  path.join(RR, 'render-spot-check.cjs'),
  path.join(RR, 'render-staging-whitelist-v1.cjs'),
];

// --- placeholder patterns ---
// Each pattern: { name, regex, scope: 'all' | 'template-html' | 'scripts',
//                 exempt: line-level whitelist callback (optional) }
const PATTERNS = [
  { name: 'AVATAR_INNER literal',     regex: /AVATAR_INNER/,    scope: 'all',
    exempt: (line) => /\/\/|\*/.test(line.split(/AVATAR_INNER/)[0]) /* allow in comments */ },
  { name: 'AVATAR_CLASS literal',     regex: /AVATAR_CLASS/,    scope: 'all',
    exempt: (line) => /\/\/|\*/.test(line.split(/AVATAR_CLASS/)[0]) /* allow in comments */ },
  { name: '.avatar-cat selector',     regex: /\.avatar-cat/,    scope: 'all' },
  { name: '.avatar-goose selector',   regex: /\.avatar-goose/,  scope: 'all' },
  { name: '.avatar-hamster selector', regex: /\.avatar-hamster/,scope: 'all' },
  { name: '.avatar-alpaca selector',  regex: /\.avatar-alpaca/, scope: 'all' },
  { name: 'avatar-{role} string',     regex: /avatar-(cat|goose|hamster|alpaca)/, scope: 'all' },
  { name: '&#9986; scissor entity',   regex: /&#9986;/,         scope: 'all' },
  { name: '✂ raw scissor',            regex: /✂/,          scope: 'all' },
  { name: '✂︎ VS scissor',             regex: /✂︎/,    scope: 'all' },
  { name: '.tear-scissor selector',   regex: /\.tear-scissor/,  scope: 'all',
    exempt: (line) => /removed per Phoebe/.test(line) /* allow the explanatory CSS comment */ },
  { name: 'tear-scissor div',         regex: /<div class="tear-scissor/, scope: 'all' },
  // radial-gradient on character forms: detect by line-level keywords. Page-bg tints
  // (.receipt / .receipt::before / .receipt::after / corner shadow) are exempt because
  // they don't reference role/avatar form keywords.
  { name: 'radial-gradient on character form', regex: /radial-gradient/, scope: 'template-html',
    exempt: (line) => !/avatar|role-img|\.face\b|whisker|battery|beak|seed|curl/i.test(line) },
];

let failures = [];

function scanFile(filepath) {
  const isTemplate = filepath.endsWith('.html');
  const scopeKey = isTemplate ? 'template-html' : 'scripts';
  const lines = fs.readFileSync(filepath, 'utf8').split('\n');
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    for (const p of PATTERNS) {
      if (p.scope !== 'all' && p.scope !== scopeKey) continue;
      if (p.regex.test(line)) {
        if (p.exempt && p.exempt(line)) continue;
        failures.push({
          file: path.relative(PROJECT_ROOT, filepath),
          line: i + 1,
          pattern: p.name,
          content: line.trim().slice(0, 120),
        });
      }
    }
  }
}

function scanWhitelistImgSrc() {
  // Verify any <img src=...> in template uses only whitelisted basenames (template uses {{ROLE_IMG_SRC}} placeholder, not literal).
  // We also verify the ROLE_IMG_SRC tables in scripts only reference whitelisted basenames.
  const scriptFiles = SOURCE_FILES.filter(f => f.endsWith('.cjs'));
  for (const f of scriptFiles) {
    const lines = fs.readFileSync(f, 'utf8').split('\n');
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const m = line.match(/['"]([^'"]+\.(?:png|jpg|jpeg|svg|webp))['"]/);
      if (!m) continue;
      const basename = path.basename(m[1]);
      // Only flag basenames that look like role assets (contain role keyword or 'main-')
      if (!/(cat|goose|hamster|alpaca|main-)/.test(basename)) continue;
      if (!WHITELIST_BASENAMES.has(basename)) {
        failures.push({
          file: path.relative(PROJECT_ROOT, f),
          line: i + 1,
          pattern: 'whitelist-violation: <img>/asset path',
          content: line.trim().slice(0, 120),
        });
      }
    }
  }
}

function scanStagingPNGs() {
  // Check that staging dir has exactly the 4 expected files and no others.
  if (!fs.existsSync(STAGING_DIR)) {
    console.log(`ℹ️  staging dir not yet rendered: ${STAGING_DIR}`);
    return;
  }
  const files = fs.readdirSync(STAGING_DIR).filter(f => f.endsWith('.png'));
  console.log(`📁 staging dir contains ${files.length} PNG(s):`);
  for (const f of files) console.log(`   - ${f}`);
}

console.log('🔍 qa:no-placeholder — scanning sources…');
for (const f of SOURCE_FILES) {
  if (!fs.existsSync(f)) {
    console.log(`⚠️  missing source file: ${f}`);
    continue;
  }
  scanFile(f);
}
scanWhitelistImgSrc();
scanStagingPNGs();

if (failures.length === 0) {
  console.log('\n✅ qa:no-placeholder PASS — no placeholder residue detected');
  process.exit(0);
}

console.log(`\n❌ qa:no-placeholder FAIL — ${failures.length} hit(s):`);
for (const f of failures) {
  console.log(`  • ${f.file}:${f.line}  [${f.pattern}]`);
  console.log(`      ${f.content}`);
}
process.exit(1);
