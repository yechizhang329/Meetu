import type { DutyRole, RoleSceneCopy, Scene } from './types';
import { ROLE_IDS } from './roles';

// PRD v0.8 §10.2 — P0 文案池：4 角色 × 6 场景 × 4 条 = 96 条。
// 当前为占位文案，等 Lucy v1 文案池来一刀切替换。
// 占位格式：__PLACEHOLDER_<role>_<scene>_<n>__ 让 search-replace 可定位。

const SCENE_IDS: Scene[] = ['no_energy', 'called_out', 'got_called_out', 'brain_overload', 'deadline', 'need_space'];
const PER_CELL = 4;

export const COPY_POOL: RoleSceneCopy[] = (() => {
  const out: RoleSceneCopy[] = [];
  for (const role of ROLE_IDS) {
    for (const scene of SCENE_IDS) {
      for (let i = 0; i < PER_CELL; i++) {
        out.push({
          roleId: role,
          sceneId: scene,
          baseText: `__PLACEHOLDER_${role}_${scene}_${i}__`,
          tags: [`#${role}`, `#${scene}`],
          riskChecked: false,
        });
      }
    }
  }
  return out;
})();

export function pickFromPool(role: DutyRole, scene: Scene): RoleSceneCopy[] {
  return COPY_POOL.filter((c) => c.roleId === role && c.sceneId === scene);
}

// PRD §9.3 配文问句钩子（角色级，placeholder）
export const FRIEND_CAPTIONS: Record<DutyRole, string[]> = {
  stubborn_goose: [
    '__PLACEHOLDER_caption_stubborn_goose_0__',
    '__PLACEHOLDER_caption_stubborn_goose_1__',
    '__PLACEHOLDER_caption_stubborn_goose_2__',
  ],
  low_battery_cat: [
    '__PLACEHOLDER_caption_low_battery_cat_0__',
    '__PLACEHOLDER_caption_low_battery_cat_1__',
    '__PLACEHOLDER_caption_low_battery_cat_2__',
  ],
  ddl_hamster: [
    '__PLACEHOLDER_caption_ddl_hamster_0__',
    '__PLACEHOLDER_caption_ddl_hamster_1__',
    '__PLACEHOLDER_caption_ddl_hamster_2__',
  ],
  backstage_alpaca: [
    '__PLACEHOLDER_caption_backstage_alpaca_0__',
    '__PLACEHOLDER_caption_backstage_alpaca_1__',
    '__PLACEHOLDER_caption_backstage_alpaca_2__',
  ],
};

// PRD §9.4 自评一句池（角色级，placeholder）
export const SELF_COMMENTS: Record<DutyRole, string[]> = {
  stubborn_goose: [
    '__PLACEHOLDER_self_stubborn_goose_0__',
    '__PLACEHOLDER_self_stubborn_goose_1__',
  ],
  low_battery_cat: [
    '__PLACEHOLDER_self_low_battery_cat_0__',
    '__PLACEHOLDER_self_low_battery_cat_1__',
  ],
  ddl_hamster: [
    '__PLACEHOLDER_self_ddl_hamster_0__',
    '__PLACEHOLDER_self_ddl_hamster_1__',
  ],
  backstage_alpaca: [
    '__PLACEHOLDER_self_backstage_alpaca_0__',
    '__PLACEHOLDER_self_backstage_alpaca_1__',
  ],
};

// PRD §10.2 短标签池（角色级，placeholder，每角色 10 条）
export const ROLE_TAGS: Record<DutyRole, string[]> = (() => {
  const map: Record<DutyRole, string[]> = {
    stubborn_goose: [],
    low_battery_cat: [],
    ddl_hamster: [],
    backstage_alpaca: [],
  };
  for (const role of ROLE_IDS) {
    for (let i = 0; i < 10; i++) {
      map[role].push(`#__tag_${role}_${i}__`);
    }
  }
  return map;
})();
