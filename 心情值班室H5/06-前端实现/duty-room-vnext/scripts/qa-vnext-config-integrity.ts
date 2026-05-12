// qa:vnext-config-integrity — schema/data integrity gate (PRD v2.3 / SoT v2 schema).
//
// 检查:
//   - SCENES.length === 6, ROLES.length === 5
//   - 每 scene rolePool.length === 3, 默认 ∈ rolePool, 元素 ⊆ {A..E}
//   - 每 scene 至少有 sceneTitle + sceneExamples
//   - 每 role 必填: roleName / roleProfile / voicePrinciple / do / dont / redline /
//     defaultScenes / backupScenes / imageRef.{single,profile} / stylePhrase / tags[2] / profileBgColor
//   - 每 role 至少有 3 条 master quotes (Block 2 "角色资料" 区并列展示, DavidC 23:32)
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
  if (!Array.isArray(r.defaultScenes) || r.defaultScenes.length === 0) fail.push(`role ${r.id} defaultScenes empty`);
  if (!Array.isArray(r.backupScenes)) fail.push(`role ${r.id} backupScenes not array`);

  // Cross-check: each defaultScene must list role in its rolePool with role as the scene's defaultRoleId.
  for (const sId of r.defaultScenes || []) {
    const defScene = SCENES.find((s) => s.id === sId);
    if (!defScene) {
      fail.push(`role ${r.id} defaultScenes contains unknown scene ${sId}`);
      continue;
    }
    if (defScene.defaultRoleId !== r.id) {
      fail.push(`role ${r.id} claims default in scene ${sId}, but scene.defaultRoleId is ${defScene.defaultRoleId}`);
    }
    if (!defScene.rolePool.includes(r.id)) {
      fail.push(`role ${r.id} claims default in scene ${sId}, but role not in scene.rolePool`);
    }
  }

  // Cross-check: each backupScene must list role in its rolePool but NOT as default.
  for (const sId of r.backupScenes || []) {
    const bScene = SCENES.find((s) => s.id === sId);
    if (!bScene) {
      fail.push(`role ${r.id} backupScenes contains unknown scene ${sId}`);
      continue;
    }
    if (!bScene.rolePool.includes(r.id)) {
      fail.push(`role ${r.id} claims backup in scene ${sId}, but role not in scene.rolePool`);
    }
    if (bScene.defaultRoleId === r.id) {
      fail.push(`role ${r.id} listed as backup in scene ${sId}, but scene.defaultRoleId is ${r.id} (should be in defaultScenes)`);
    }
  }

  // Cross-check: defaultScenes ∩ backupScenes must be empty
  const ds = new Set(r.defaultScenes || []);
  for (const sId of r.backupScenes || []) {
    if (ds.has(sId)) fail.push(`role ${r.id} scene ${sId} listed in both defaultScenes and backupScenes`);
  }

  // Quote coverage — Block 2 needs 3 master quotes per role (DavidC 23:32 全部并列展示, 不 filter usage).
  const qs = QUOTES.filter((q) => q.roleId === r.id);
  const masterQuotes = qs.filter((q) => q.tier === 'master');
  if (masterQuotes.length < 3) {
    fail.push(`role ${r.id} needs ≥3 master quotes (Block 2 "角色资料" 并列展示), got ${masterQuotes.length}`);
  }
  const anyPreview = qs.find((q) => q.usages.includes('preview'));
  if (!anyPreview) fail.push(`role ${r.id} missing preview quote (any tier)`);

  // imageRef shape — PRD v2.3 §8 拆 single/profile.
  if (!r.imageRef || typeof r.imageRef !== 'object') {
    fail.push(`role ${r.id} imageRef must be object {single, profile}, got ${typeof r.imageRef}`);
  } else {
    if (typeof r.imageRef.single !== 'string' || !r.imageRef.single.trim()) {
      fail.push(`role ${r.id} imageRef.single empty`);
    }
    if (typeof r.imageRef.profile !== 'string' || !r.imageRef.profile.trim()) {
      fail.push(`role ${r.id} imageRef.profile empty`);
    }
  }

  // stylePhrase, tags, profileBgColor — PRD v2.3 §8 + §11 + DavidC 23:20.
  if (typeof r.stylePhrase !== 'string' || !r.stylePhrase.trim()) {
    fail.push(`role ${r.id} stylePhrase empty (PRD §11.1 / SoT §5.1)`);
  }
  if (!Array.isArray(r.tags) || r.tags.length !== 2) {
    fail.push(`role ${r.id} tags must be tuple [master, backup], got length ${r.tags?.length}`);
  } else {
    for (const t of r.tags) {
      if (typeof t !== 'string' || !t.trim()) fail.push(`role ${r.id} tags element empty`);
    }
  }
  if (typeof r.profileBgColor !== 'string' || !/^#[0-9A-Fa-f]{6}$/.test(r.profileBgColor)) {
    fail.push(`role ${r.id} profileBgColor must be #RRGGBB hex, got "${r.profileBgColor}"`);
  }
}

// Reverse cross-check: every scene's defaultRoleId must list this scene in role.defaultScenes;
// every (rolePool - defaultRoleId) member must list this scene in role.backupScenes.
for (const s of SCENES) {
  const defRole = ROLES.find((r) => r.id === s.defaultRoleId);
  if (defRole && !defRole.defaultScenes.includes(s.id)) {
    fail.push(`scene ${s.id} defaultRoleId is ${s.defaultRoleId}, but role.defaultScenes does not include ${s.id}`);
  }
  for (const r of s.rolePool) {
    if (r === s.defaultRoleId) continue;
    const role = ROLES.find((x) => x.id === r);
    if (role && !role.backupScenes.includes(s.id)) {
      fail.push(`scene ${s.id} rolePool member ${r} is not default, but role.backupScenes does not include ${s.id}`);
    }
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
