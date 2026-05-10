// qa:no-placeholder-text — verify no TBD-NOT-FINAL-COPY-* leaks into final config.
// P0 阶段: allow placeholder. P1 之后: 必须 0 hit.
// 行为: --strict 模式 (CI/部署前用) 任一 placeholder = FAIL; 默认模式只统计、不阻断.

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const STRICT = process.argv.includes('--strict');

const TARGETS = [
  'src/config/roles.config.ts',
  'src/config/scenes.config.ts',
  'src/config/quotes.config.ts',
  'src/config/variants.config.ts',
];

const PLACEHOLDER_RE = /TBD-NOT-FINAL-COPY-/g;

let total = 0;
const perFile = [];
for (const rel of TARGETS) {
  const fp = path.join(ROOT, rel);
  if (!fs.existsSync(fp)) {
    console.log(`⚠️  missing: ${rel}`);
    continue;
  }
  const src = fs.readFileSync(fp, 'utf8');
  const hits = (src.match(PLACEHOLDER_RE) || []).length;
  perFile.push({ rel, hits });
  total += hits;
}

console.log(`🔍 qa:no-placeholder-text  (mode: ${STRICT ? 'STRICT' : 'count-only'})`);
for (const { rel, hits } of perFile) {
  console.log(`  ${rel.padEnd(40)} ${hits} placeholder${hits === 1 ? '' : 's'}`);
}
console.log(`  total: ${total} placeholder${total === 1 ? '' : 's'}`);

if (STRICT && total > 0) {
  console.log('\n❌ qa:no-placeholder-text FAIL — placeholder text present in strict mode');
  console.log('   (P0 阶段不应该用 strict; P1 文案接入后才用 npm run qa:no-placeholder-text -- --strict)');
  process.exit(1);
}
if (!STRICT && total > 0) {
  console.log('\nℹ️  P0 placeholder count above; will FAIL in --strict (P1+) mode');
  process.exit(0);
}
console.log('\n✅ qa:no-placeholder-text PASS — no placeholder text');
process.exit(0);
