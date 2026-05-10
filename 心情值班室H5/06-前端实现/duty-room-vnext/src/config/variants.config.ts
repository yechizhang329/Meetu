// vNext result-page variants config — placeholder.
// PRD §6 + §8: 18 个有效 (sceneId × roleId) 组合 (每 scene 3 角色 × 6 scene = 18).
// P0 阶段每组合 2 条 variant 占位, 满足 "换个说法" 的 round-robin.
// 文案侧 PRD §10/§14.1 brief 完成后填实 resultText.

import type { ResultVariant, SceneId, RoleId } from '../data/types';
import { SCENES } from './scenes.config';

const TBD = 'TBD-NOT-FINAL-COPY-';

function genVariantsFor(sceneId: SceneId, roleId: RoleId): ResultVariant[] {
  return [1, 2].map((i) => ({
    sceneId,
    roleId,
    variantId: `${sceneId}-${roleId}-v${i}`,
    resultText: `${TBD}${sceneId}-${roleId}-result-${i}`,
  }));
}

export const VARIANTS: readonly ResultVariant[] = SCENES.flatMap((s) =>
  s.rolePool.flatMap((r) => genVariantsFor(s.id, r)),
);

export function defaultVariantOf(sceneId: SceneId, roleId: RoleId): ResultVariant | undefined {
  return VARIANTS.find((v) => v.sceneId === sceneId && v.roleId === roleId);
}

export function nextVariantOf(sceneId: SceneId, roleId: RoleId, currentVariantId: string): ResultVariant | undefined {
  const pool = VARIANTS.filter((v) => v.sceneId === sceneId && v.roleId === roleId);
  if (pool.length === 0) return undefined;
  const idx = pool.findIndex((v) => v.variantId === currentVariantId);
  // round-robin: -1 (not found) → 0; else (idx+1) % pool.length
  return pool[(idx + 1) % pool.length] ?? pool[0];
}
