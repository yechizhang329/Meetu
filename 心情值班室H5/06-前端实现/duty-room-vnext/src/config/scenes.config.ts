// vNext scenes config — PRD §6 表锁定的 6 场景 + 每场景 3 角色池.
// externalDirection 是 placeholder, 由文案侧填实.
// rolePool / defaultRoleId 来自 PRD §6, 是产品决策, 不变.

import type { Scene } from '../data/types';

const TBD = 'TBD-NOT-FINAL-COPY-';

export const SCENES: readonly Scene[] = [
  {
    id: 'S1',
    externalDirection: TBD + 'S1-想把话轻轻带过',
    defaultRoleId: 'A',
    rolePool: ['A', 'B', 'D'] as const,
  },
  {
    id: 'S2',
    externalDirection: TBD + 'S2-消息看见但接不住',
    defaultRoleId: 'B',
    rolePool: ['B', 'A', 'E'] as const,
  },
  {
    id: 'S3',
    externalDirection: TBD + 'S3-任务在那但没启动',
    defaultRoleId: 'C',
    rolePool: ['C', 'D', 'E'] as const,
  },
  {
    id: 'S4',
    externalDirection: TBD + 'S4-校园日常突然离谱',
    defaultRoleId: 'D',
    rolePool: ['D', 'E', 'C'] as const,
  },
  {
    id: 'S5',
    externalDirection: TBD + 'S5-不想被拉进互动',
    defaultRoleId: 'B',
    rolePool: ['B', 'A', 'E'] as const,
  },
  {
    id: 'S6',
    externalDirection: TBD + 'S6-这事离谱不想开怼',
    defaultRoleId: 'E',
    rolePool: ['E', 'C', 'D'] as const,
  },
];

export const SCENE_BY_ID: Readonly<Record<string, Scene>> = Object.freeze(
  Object.fromEntries(SCENES.map((s) => [s.id, s])),
);
