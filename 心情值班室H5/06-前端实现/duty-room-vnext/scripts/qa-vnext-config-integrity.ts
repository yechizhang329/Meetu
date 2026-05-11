// qa:vnext-config-integrity — schema/data integrity gate.
//
// 检查:
//   - SCENES.length === 6
//   - ROLES.length === 5
//   - 每 scene rolePool.length === 3, 默认 ∈ rolePool, 元素 ⊆ {A..E}
//   - 每 scene 至少有 sceneTitle + sceneExamples
//   - 每 role 至少有 roleName / roleProfile / voicePrinciple / do / dont / redline /
//     defaultScene / backupScenes 字段
//   - 每 role 在 scenes 表里至少作为 default 或 backup 出现
//   - 每 role 至少有 1 条 master role_card quote
//   - 每 role 至少有 1 条 preview quote (master 或 backup)
//   - 每 (sceneId, roleId) ∈ 18 组合 至少 1 条 ResultVariant + resultText 非空
//   - "切换嘴替"模拟: alternateRoles 派生恒 = 2

import { SCENES } from '../src/config/scenes.config';
import { ROLES } from '../src/config/roles.config';
import { QUOTES } from '../src/config/quotes.config';
import { VARIANTS } from '../src/config/variants.config';
import type { RoleId } from '../src/data/types';

const fail: string[] = [];

console.log('🔍 qa:vnext-config-integrity');
console.log(`  SCENES   : ${SCENES.length}`);
console.log(`  ROLES    : ${ROLES.length}`);
console.log(`  QUOTES   : ${QUOTES.length}`);
console.log(`  VARIANTS : ${VARIANTS.length}`);
console.log('');

if (SCENES.length !== 6) fail.push(`SCENES.length must be 6, got ${SCENES.length}`);
if (ROLES.length !== 5) fail.push(`ROLES.length must be 5, got ${ROLES.length}`);

const ROLE_IDS = new Set(ROLES.map((r) => r.id));
const expectedIds: RoleId[] = ['A', 'B', 'C', 'D', 'E'];
for (const id of expectedIds) if (!ROLE_IDS.has(id)) fail.push(`ROLES missing id "${id}"`);

// Scene shape
for (const s of SCENES) {
  if (!s.sceneTitle?.trim()) fail.push(`scene ${s.id} sceneTitle empty`);
  if (!s.sceneExamples?.trim()) fail.push(`scene ${s.id} sceneExamples empty`);
  if (!Array.isArray(s.rolePool) || s.rolePool.length !== 3) {
    fail.push(`scene ${s.id} rolePool length must be 3, got ${s.rolePool?.length}`);
    continue;
  }
  for (const r of s.rolePool) if (!ROLE_IDS.has(r)) fail.push(`scene ${s.id} rolePool contains unknown role "${r}"`);
  if (!s.rolePool.includes(s.defaultRoleId)) fail.push(`scene ${s.id} defaultRoleId "${s.defaultRoleId}" not in rolePool`);
  for (const r of s.rolePool) {
    const alt = s.rolePool.filter((x) => x !== r);
    if (alt.length !== 2) fail.push(`scene ${s.id} alternateRoles after switch to ${r} must be 2, got ${alt.length}`);
  }
}

// Role shape — required string / array fields per SoT §2
for (const r of ROLES) {
  if (!r.roleName?.trim()) fail.push(`role ${r.id} roleName empty`);
  if (!r.roleProfile?.trim()) fail.push(`role ${r.id} roleProfile empty`);
  if (!r.voicePrinciple?.trim()) fail.push(`role ${r.id} voicePrinciple empty`);
  if (!Array.isArray(r.do) || r.do.length === 0) fail.push(`role ${r.id} do empty`);
  if (!Array.isArray(r.dont) || r.dont.length === 0) fail.push(`role ${r.id} dont empty`);
  if (!Array.isArray(r.redline) || r.redline.length === 0) fail.push(`role ${r.id} redline empty`);
  if (!r.defaultScene) fail.push(`role ${r.id} defaultScene empty`);
  if (!Array.isArray(r.backupScenes)) fail.push(`role ${r.id} backupScenes not array`);

  // Cross-check: role's defaultScene must list role in its rolePool.
  const defScene = SCENES.find((s) => s.id === r.defaultScene);
  if (defScene && !defScene.rolePool.includes(r.id)) {
    fail.push(`role ${r.id} defaultScene ${r.defaultScene} does not include role in its rolePool`);
  }

  // Quote coverage
  const qs = QUOTES.filter((q) => q.roleId === r.id);
  const masterRoleCard = qs.find((q) => q.tier === 'master' && q.usages.includes('role_card'));
  if (!masterRoleCard) fail.push(`role ${r.id} missing master role_card quote`);
  const anyPreview = qs.find((q) => q.usages.includes('preview'));
  if (!anyPreview) fail.push(`role ${r.id} missing preview quote (any tier)`);

  // imageRef field exists (placeholder OK; tested separately by qa:no-placeholder-text in strict mode)
  if (typeof r.imageRef !== 'string' || r.imageRef.length === 0) {
    fail.push(`role ${r.id} imageRef empty`);
  }
}

// Variant coverage
for (const s of SCENES) {
  for (const r of s.rolePool) {
    const list = VARIANTS.filter((v) => v.sceneId === s.id && v.roleId === r);
    if (list.length < 1) fail.push(`(${s.id}, ${r}) missing ResultVariant`);
    for (const v of list) {
      if (!v.resultText?.trim()) fail.push(`variant ${v.variantId} resultText empty`);
    }
  }
}

if (fail.length === 0) {
  console.log('✅ qa:vnext-config-integrity PASS');
  process.exit(0);
}
console.log(`❌ qa:vnext-config-integrity FAIL (${fail.length}):`);
for (const f of fail) console.log('  • ' + f);
process.exit(1);
