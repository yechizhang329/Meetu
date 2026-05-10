// qa:no-v1-leak — verify duty-room-vnext source has no leak from v1.x product assumptions.
// 沉淀自 P0 prework v0.1 §7.3.
// FAIL 模式 (任一命中即 FAIL):
//   - 旧 RoleId 字符串/标识符: stubborn_goose | low_battery_cat | ddl_hamster | backstage_alpaca
//   - 旧角色中文名: 嘴硬鹅 | 低电量猫 | DDL仓鼠 | 后台羊驼
//   - 旧 module path: slip-config | slip-data-adapter | lines-v1.1 | copy-config-v2.json | duty-badge-young-adult
//   - import 路径含 'duty-room-v1/'
//   - HTML/CSS class: .avatar-cat | .avatar-goose | .avatar-hamster | .avatar-alpaca | .tear-scissor
//   - HTML entity / emoji: &#9986; | ✂
//   - file path 含 'contact-crops-transparent/' | 'public/duty-room-v1/receipts/' | 'duty-room-p0/'

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');

const SCAN_DIRS = ['src', 'scripts'];
const SCAN_EXTS = new Set(['.ts', '.tsx', '.js', '.cjs', '.mjs', '.html', '.css', '.json', '.md']);

const PATTERNS = [
  { name: 'old RoleId stubborn_goose',  re: /\bstubborn_goose\b/ },
  { name: 'old RoleId low_battery_cat', re: /\blow_battery_cat\b/ },
  { name: 'old RoleId ddl_hamster',     re: /\bddl_hamster\b/ },
  { name: 'old RoleId backstage_alpaca',re: /\bbackstage_alpaca\b/ },
  { name: 'old role 嘴硬鹅',  re: /嘴硬鹅/ },
  { name: 'old role 低电量猫',re: /低电量猫/ },
  { name: 'old role DDL仓鼠', re: /DDL\s*仓鼠/ },
  { name: 'old role 后台羊驼',re: /后台羊驼/ },
  { name: 'old module slip-config',       re: /slip-config/ },
  { name: 'old module slip-data-adapter', re: /slip-data-adapter/ },
  { name: 'old module lines-v1.1',        re: /lines-v1\.1/ },
  { name: 'old module copy-config-v2',    re: /copy-config-v2/ },
  { name: 'old theme duty-badge-young-adult', re: /duty-badge-young-adult/ },
  { name: 'import from duty-room-v1/',    re: /from\s+['"][^'"]*duty-room-v1\// },
  { name: 'CSS .avatar-cat',     re: /\.avatar-cat\b/ },
  { name: 'CSS .avatar-goose',   re: /\.avatar-goose\b/ },
  { name: 'CSS .avatar-hamster', re: /\.avatar-hamster\b/ },
  { name: 'CSS .avatar-alpaca',  re: /\.avatar-alpaca\b/ },
  { name: 'CSS .tear-scissor',   re: /\.tear-scissor\b/ },
  { name: 'scissor entity &#9986;', re: /&#9986;/ },
  { name: 'scissor char ✂',         re: /✂/ },
  { name: 'path contact-crops-transparent/', re: /contact-crops-transparent\// },
  { name: 'path public/duty-room-v1/receipts/', re: /public\/duty-room-v1\/receipts\// },
  { name: 'path duty-room-p0/', re: /duty-room-p0\// },
];

// 文档/注释豁免: 允许 README / brief 文档里以"被禁"的姿态提及关键词 (用 NEGATIVE / FORBIDDEN / 不允许 / 不复用 / archived 等上下文标识).
// 实际 source code 命中无豁免.
function isMentionInDocContext(line) {
  return /禁止|不允许|不复用|FORBIDDEN|deprecated|archive|legacy|do not use|not allowed|removed/i.test(line);
}

function* walk(dir) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const fp = path.join(dir, ent.name);
    if (ent.isDirectory()) {
      if (ent.name === 'node_modules' || ent.name === 'dist' || ent.name.startsWith('.')) continue;
      yield* walk(fp);
    } else if (ent.isFile()) {
      // Skip the scanner itself (its FORBIDDEN-pattern definitions would self-match).
      if (path.basename(fp) === 'qa-no-v1-leak.cjs') continue;
      if (SCAN_EXTS.has(path.extname(ent.name))) yield fp;
    }
  }
}

const failures = [];
for (const dir of SCAN_DIRS) {
  const fullDir = path.join(ROOT, dir);
  if (!fs.existsSync(fullDir)) continue;
  for (const fp of walk(fullDir)) {
    const lines = fs.readFileSync(fp, 'utf8').split('\n');
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      for (const p of PATTERNS) {
        if (p.re.test(line)) {
          // skip if line is a doc-context mention (e.g. README listing what's NOT allowed)
          const isDoc = path.extname(fp) === '.md' && isMentionInDocContext(line);
          if (isDoc) continue;
          failures.push({
            file: path.relative(ROOT, fp),
            line: i + 1,
            pattern: p.name,
            content: line.trim().slice(0, 100),
          });
        }
      }
    }
  }
}

console.log(`🔍 qa:no-v1-leak  scan: ${SCAN_DIRS.join(', ')} ext: ${[...SCAN_EXTS].join(',')}`);
console.log(`   patterns: ${PATTERNS.length}`);
if (failures.length === 0) {
  console.log('\n✅ qa:no-v1-leak PASS — no v1 product-assumption leakage');
  process.exit(0);
}
console.log(`\n❌ qa:no-v1-leak FAIL (${failures.length}):`);
for (const f of failures) {
  console.log(`  • ${f.file}:${f.line}  [${f.pattern}]`);
  console.log(`      ${f.content}`);
}
process.exit(1);
