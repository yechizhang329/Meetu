// vNext result-page state machine.
// PRD §7.3 / §7.4 transitions:
//   - init from scene S → defaultRoleId, defaultVariant
//   - 换个说法 → 同 scene + 同 role, 换 variant (round-robin)
//   - 换个嘴替帮你说 (点 pool 内某 R) → 同 scene + 同 pool, currentRoleId=R, variant=defaultVariantOf(S,R)
//   - 重选状态 → new scene, defaultRole, defaultVariant

import { useCallback, useState } from 'react';
import type { ResultPageState, RoleId, Scene } from '../data/types';
import { SCENE_BY_ID } from '../config/scenes.config';
import { defaultVariantOf, nextVariantOf } from '../config/variants.config';

function initStateFromScene(scene: Scene): ResultPageState {
  const variant = defaultVariantOf(scene.id, scene.defaultRoleId);
  return {
    sceneId: scene.id,
    currentRoleId: scene.defaultRoleId,
    rolePool: scene.rolePool,
    variantId: variant?.variantId ?? `${scene.id}-${scene.defaultRoleId}-v1`,
  };
}

export function useResultPageState(initialScene: Scene) {
  const [state, setState] = useState<ResultPageState>(() => initStateFromScene(initialScene));

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
      if (!s.rolePool.includes(newRoleId)) return s; // pool 外角色拒绝切换
      if (newRoleId === s.currentRoleId) return s;
      const variant = defaultVariantOf(s.sceneId, newRoleId);
      return {
        ...s,
        currentRoleId: newRoleId,
        variantId: variant?.variantId ?? `${s.sceneId}-${newRoleId}-v1`,
      };
    });
  }, []);

  /** 重选状态: 切到新 scene, 重置到该 scene 的 default. */
  const resetScene = useCallback((newSceneId: string) => {
    const newScene = SCENE_BY_ID[newSceneId];
    if (!newScene) return;
    setState(initStateFromScene(newScene));
  }, []);

  /** Block4 显示规则: 当前 pool 中除 currentRoleId 外的 2 个. */
  const alternateRoleIds = state.rolePool.filter((r) => r !== state.currentRoleId);

  return { state, changeWording, switchRole, resetScene, alternateRoleIds };
}
