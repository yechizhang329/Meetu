// vNext scenes config — final, sourced from SoT §1.
// SoT: Meetu/产品文档/2026-05-11-心情值班室-vNext-copy-sot-final.md

import type { Scene } from '../data/types';

export const SCENES: readonly Scene[] = [
  {
    id: 'S1',
    sceneTitle: '想把话轻轻带过',
    sceneExamples: '你咋了 / 不想解释 / 室友追问近况',
    defaultRoleId: 'A', // 嘴硬章鱼
    rolePool: ['A', 'B', 'D'] as const, // 默认 + 备选 1 (断电猫) + 备选 2 (整活吗喽)
  },
  {
    id: 'S2',
    sceneTitle: '消息看见了，但现在接不住',
    sceneExamples: '群聊 99+ / 私信已读没回 / 被@但不想回',
    defaultRoleId: 'B', // 断电猫
    rolePool: ['B', 'A', 'E'] as const,
  },
  {
    id: 'S3',
    sceneTitle: '任务在那，但人还没启动',
    sceneExamples: 'DDL / 作业 / 论文 / 被催进度',
    defaultRoleId: 'C', // 躺平树懒
    rolePool: ['C', 'D', 'E'] as const,
  },
  {
    id: 'S4',
    sceneTitle: '校园日常突然离谱',
    sceneExamples: '课上突然加作业 / 学校发奇怪通知 / 宿舍怪事',
    defaultRoleId: 'D', // 整活吗喽
    rolePool: ['D', 'E', 'C'] as const,
  },
  {
    id: 'S5',
    sceneTitle: '现在不想被拉进互动',
    sceneExamples: '宿舍邀约 / 聚餐活动 / 群里被 cue',
    defaultRoleId: 'B', // 断电猫
    rolePool: ['B', 'A', 'E'] as const,
  },
  {
    id: 'S6',
    sceneTitle: '这事离谱，但不想亲自开怼',
    sceneExamples: '被白嫖 / 被安排 / 被甩锅',
    defaultRoleId: 'E', // 高情商刺猬
    rolePool: ['E', 'C', 'D'] as const,
  },
];

export const SCENE_BY_ID: Readonly<Record<string, Scene>> = Object.freeze(
  Object.fromEntries(SCENES.map((s) => [s.id, s])),
);
