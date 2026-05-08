import type { Scene, SceneOption, SceneRoute } from './types';

// PRD v0.8 §7.1 / §7.2 — 6 场景 + 用户口语化选项
export const SCENES: SceneOption[] = [
  { id: 'no_energy', label: '别叫我，我现在不想动' },
  { id: 'called_out', label: '朋友一约我，我就开始和床谈判' },
  { id: 'got_called_out', label: '他们说得很准，但我不想承认' },
  { id: 'brain_overload', label: '表面在听，脑子里已经开会了' },
  { id: 'deadline', label: '事情很多，但我还在假装不急' },
  { id: 'need_space', label: '想安静一点，先别靠近我' },
];

// PRD v0.8 §11.1（含 commit f5e5f8e 微修：P0 推荐链路只出现 4 个 P0 角色）
export const SCENE_ROUTES: SceneRoute[] = [
  { scene: 'no_energy',      primary: 'low_battery_cat',  fallback: 'backstage_alpaca' },
  { scene: 'called_out',     primary: 'low_battery_cat',  fallback: 'backstage_alpaca' },
  { scene: 'got_called_out', primary: 'stubborn_goose',   fallback: 'backstage_alpaca' },
  { scene: 'brain_overload', primary: 'backstage_alpaca', fallback: 'stubborn_goose'  },
  { scene: 'deadline',       primary: 'ddl_hamster',      fallback: 'backstage_alpaca' },
  { scene: 'need_space',     primary: 'low_battery_cat',  fallback: 'stubborn_goose'  },
];

export function recommendRoleByScene(scene: Scene): { primary: SceneRoute['primary']; fallback: SceneRoute['fallback'] } {
  const route = SCENE_ROUTES.find((r) => r.scene === scene);
  if (!route) {
    // Defensive: this should not happen for any P0 scene
    return { primary: 'low_battery_cat', fallback: 'backstage_alpaca' };
  }
  return { primary: route.primary, fallback: route.fallback };
}
