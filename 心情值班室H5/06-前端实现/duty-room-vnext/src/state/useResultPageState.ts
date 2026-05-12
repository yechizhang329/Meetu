// vNext result-page state machine.
// PRD §7.3 / §7.4 transitions:
//   - init from scene S + initialRoleId R → variant = defaultVariantOf(S, R)
//   - 换个说法 → 同 scene + 同 role, 换 variant (round-robin)
//   - 换个嘴替帮你说 (点 pool 内某 R) → 同 scene + 同 pool, currentRoleId=R, variant=defaultVariantOf(S,R)
//   - 重选状态 → new scene, defaultRole, defaultVariant

import { useCallback, useEffect, useState } from 'react';
import type { ResultPageState, RoleId, Scene } from '../data/types';
import { SCENE_BY_ID } from '../config/scenes.config';
import { defaultVariantOf, nextVariantOf } from '../config/variants.config';

function initState(scene: Scene, roleId: RoleId): ResultPageState {
  // P2 已限制只能选 rolePool 内的 role; 若调用方意外传入 pool 外, fallback 到 defaultRoleId.
  const safeRole: RoleId = scene.rolePool.includes(roleId) ? roleId : scene.defaultRoleId;
  const variant = defaultVariantOf(scene.id, safeRole);
  return {
    sceneId: scene.id,
    currentRoleId: safeRole,
    rolePool: scene.rolePool,
    variantId: variant?.variantId ?? `${scene.id}-${safeRole}-v1`,
  };
}

export function useResultPageState(initialScene: Scene, initialRoleId: RoleId) {
  const [state, setState] = useState<ResultPageState>(() => initState(initialScene, initialRoleId));

  // 当用户从 P3 退回 P2 重选 role 后再进入 P3, 需要根据 props 重新初始化
  useEffect(() => {
    setState(initState(initialScene, initialRoleId));
  }, [initialScene.id, initialRoleId]);

  /** 换个说法: 同 scene + 同 role, round-robin 下一个 variant. */
  const changeWording = useCallback(() => {
    setState((s) => {
      const next = nextVariantOf(s.sceneId, s.currentRoleId, s.variantId);
      return next ? { ...s, variantId: next.variantId } : s;
    });
  }, []);

  /** 换个嘴替: 同 scene + 同 pool, currentRoleId=newRole, variant=该 role 的 default. */
  const switchRole = useCallback((newRoleId: RoleId) => {
    setState((s) => {
      if (!s.rolePool.includes(newRoleId)) return s;
      if (newRoleId === s.currentRoleId) return s;
      const variant = defaultVariantOf(s.sceneId, newRoleId);
      return {
        ...s,
        currentRoleId: newRoleId,
        variantId: variant?.variantId ?? `${s.sceneId}-${newRoleId}-v1`,
      };
    });
  }, []);

  /** 重选状态: 切到新 scene, 重置到该 scene 的 default role + default variant. */
  const resetScene = useCallback((newSceneId: string) => {
    const newScene = SCENE_BY_ID[newSceneId];
    if (!newScene) return;
    setState(initState(newScene, newScene.defaultRoleId));
  }, []);

  /** Block4 显示规则: 当前 pool 中除 currentRoleId 外的 2 个. */
  const alternateRoleIds = state.rolePool.filter((r) => r !== state.currentRoleId);

  return { state, changeWording, switchRole, resetScene, alternateRoleIds };
}
