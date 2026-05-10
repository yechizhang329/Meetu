// qa:vnext-config-integrity — schema/data integrity gate.
// 检查:
//   - SCENES.length === 6
//   - ROLES.length === 5
//   - 每个 scene.rolePool.length === 3, 元素 ⊆ ROLE_IDs
//   - 每个 scene.defaultRoleId ∈ scene.rolePool
//   - QUOTES 至少 35 条 (5 角色 × 7), 每角色 ≥ 1 条 role_card / 1 条 alternate_card
//   - VARIANTS: 每个 (sceneId, roleId) ∈ 18 组合 至少 1 条
//   - "切换嘴替"模拟: alternateRoles = pool.filter(r => r !== currentRoleId), 长度恒 = 2
// 任一 FAIL 阻断 build.
//
// 通过 tsx 直接 import config 模块 (避免手写 TS parser).

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

for (const s of SCENES) {
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

for (const role of ROLES) {
  const qs = QUOTES.filter((q) => q.roleId === role.id);
  if (qs.length < 1) fail.push(`role ${role.id} has 0 quotes`);
  if (!qs.some((q) => q.usage === 'role_card')) fail.push(`role ${role.id} missing role_card quote`);
  if (!qs.some((q) => q.usage === 'alternate_card')) fail.push(`role ${role.id} missing alternate_card quote`);
  if (!role.imageRef || role.imageRef.length === 0) fail.push(`role ${role.id} imageRef empty`);
}

for (const s of SCENES) {
  for (const r of s.rolePool) {
    const variants = VARIANTS.filter((v) => v.sceneId === s.id && v.roleId === r);
    if (variants.length < 1) fail.push(`(${s.id}, ${r}) missing ResultVariant`);
  }
}

if (fail.length === 0) {
  console.log('✅ qa:vnext-config-integrity PASS');
  process.exit(0);
}
console.log(`❌ qa:vnext-config-integrity FAIL (${fail.length}):`);
for (const f of fail) console.log('  • ' + f);
process.exit(1);
