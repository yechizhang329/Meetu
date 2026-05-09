// 心情值班室 v1.0 — Scene metadata
// PRD v1.0 §3 — 8 core scenes with primary + fallback role routing.

import type { SceneMeta } from './types';

export const SCENES: SceneMeta[] = [
  {
    id: 'S1_stubborn_deny',
    userPick: '被说中了，但我不准备承认',
    internalLabel: 'stubborn-deny',
    primary: 'stubborn_goose',
    fallback: 'backstage_alpaca',
  },
  {
    id: 'S2_low_battery',
    userPick: '人还在，电先下班了',
    internalLabel: 'low-battery',
    primary: 'low_battery_cat',
    fallback: 'stubborn_goose',
  },
  {
    id: 'S3_ddl_procrast',
    userPick: '会做的，不是现在',
    internalLabel: 'ddl-procrast',
    primary: 'ddl_hamster',
    fallback: 'stubborn_goose',
  },
  {
    id: 'S4_polite_overflow',
    userPick: '表面好的，后台别来了',
    internalLabel: 'polite-overflow',
    primary: 'backstage_alpaca',
    fallback: 'ddl_hamster',
  },
  {
    id: 'S5_need_quiet',
    userPick: '想安静一点，先别问',
    internalLabel: 'need-quiet',
    primary: 'low_battery_cat',
    fallback: 'backstage_alpaca',
  },
  {
    id: 'S6_invited_out',
    userPick: '朋友约我，但身体没签字',
    internalLabel: 'invited-out',
    primary: 'low_battery_cat',
    fallback: 'ddl_hamster',
  },
  {
    id: 'S7_msg_unreplied',
    userPick: '消息看到了，嘴没上班',
    internalLabel: 'msg-unreplied',
    primary: 'low_battery_cat',
    fallback: 'stubborn_goose',
  },
  {
    id: 'S8_pushed_along',
    userPick: '被催到了，但我想把话甩出去',
    internalLabel: 'pushed-along',
    primary: 'backstage_alpaca',
    fallback: 'ddl_hamster',
  },
];

export const SCENE_BY_ID: Record<string, SceneMeta> = Object.fromEntries(
  SCENES.map((s) => [s.id, s]),
);
