// sync-dist-to-docs — copy vNext build output (dist/) to docs/duty-room-vnext/.
// PER MEMORY 教训 #1 (2026-05-10 P0): GH Pages serves docs/, not dist/. Any deploy MUST cp dist/* → docs/duty-room-vnext/.
//
// Repo root: <Meetu>/  (contains .git + docs/)
// PKG_DIR  : <Meetu>/心情值班室H5/06-前端实现/duty-room-vnext/  (3 levels below repo root)
// Vite base: '/Meetu/duty-room-vnext/' (vite.config.ts)
// Live URL : https://yechizhang329.github.io/Meetu/duty-room-vnext/

const fs = require('fs');
const path = require('path');

const PKG_DIR = path.resolve(__dirname, '..');
const DIST = path.join(PKG_DIR, 'dist');
// Repo root = PKG_DIR/../../.. (up 3 levels: out of duty-room-vnext, 06-前端实现, 心情值班室H5)
const REPO_ROOT = path.resolve(PKG_DIR, '..', '..', '..');
const DOCS_TARGET = path.join(REPO_ROOT, 'docs', 'duty-room-vnext');

function rmDir(p) {
  if (!fs.existsSync(p)) return;
  fs.rmSync(p, { recursive: true, force: true });
}

function cpDir(src, dst) {
  fs.mkdirSync(dst, { recursive: true });
  for (const e of fs.readdirSync(src, { withFileTypes: true })) {
    const s = path.join(src, e.name);
    const d = path.join(dst, e.name);
    if (e.isDirectory()) cpDir(s, d);
    else fs.copyFileSync(s, d);
  }
}

console.log('🔁 sync-dist-to-docs');
console.log(`   from: ${DIST}`);
console.log(`   to  : ${DOCS_TARGET}`);

if (!fs.existsSync(DIST)) {
  console.error('❌ dist/ not found — run `npm run build` first');
  process.exit(1);
}

if (!fs.existsSync(path.join(REPO_ROOT, '.git'))) {
  console.error(`❌ repo root looks wrong: ${REPO_ROOT} (no .git)`);
  process.exit(1);
}

rmDir(DOCS_TARGET);
cpDir(DIST, DOCS_TARGET);

const distSize = (() => {
  let n = 0;
  function walk(p) {
    for (const e of fs.readdirSync(p, { withFileTypes: true })) {
      const f = path.join(p, e.name);
      if (e.isDirectory()) walk(f);
      else n += fs.statSync(f).size;
    }
  }
  walk(DIST);
  return n;
})();

const filesCopied = (() => {
  let n = 0;
  function walk(p) {
    for (const e of fs.readdirSync(p, { withFileTypes: true })) {
      const f = path.join(p, e.name);
      if (e.isDirectory()) walk(f);
      else n += 1;
    }
  }
  walk(DOCS_TARGET);
  return n;
})();

console.log(`✅ synced ${filesCopied} files (${(distSize / 1024).toFixed(1)} KiB)`);
console.log('   live URL: https://yechizhang329.github.io/Meetu/duty-room-vnext/');
console.log('   (commit + push docs/ to deploy)');
