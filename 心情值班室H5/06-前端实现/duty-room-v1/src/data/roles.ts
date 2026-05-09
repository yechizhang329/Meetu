// 心情值班室 v1.0 — Role definitions
// PRD v1.0 §2 (4 roles) + tech-selection-v1.md §2.4 (canvas positioning defaults).
// Asset paths from Phoebe2 batch-1 contact sheet (Fiona msg c269f744).
// `artPath` resolves at runtime via /public/duty-room-v1/<file>.

import type { RoleDef, RoleId } from './types';

export const ROLES: Record<RoleId, RoleDef> = {
  stubborn_goose: {
    id: 'stubborn_goose',
    name: '嘴硬鹅',
    station: '否认部部长',
    artPath: 'stubborn-goose-main-v1.png',
    scale: 0.4,
    imagePosition: 'br',
    textAnchor: 'tl',
  },
  low_battery_cat: {
    id: 'low_battery_cat',
    name: '低电量猫',
    station: '电量管理员',
    artPath: 'low-battery-cat-main-v1.png',
    scale: 0.45,
    imagePosition: 'cb',
    textAnchor: 'tl',
  },
  ddl_hamster: {
    id: 'ddl_hamster',
    name: 'DDL 仓鼠',
    station: '截止日期专员',
    artPath: 'ddl-hamster-main-v1.png',
    scale: 0.4,
    imagePosition: 'bl',
    textAnchor: 'tr',
  },
  backstage_alpaca: {
    id: 'backstage_alpaca',
    name: '后台羊驼',
    station: '前台正常员',
    artPath: 'backstage-alpaca-main-v1.png',
    scale: 0.4,
    imagePosition: 'bc',
    textAnchor: 'tc',
  },
};

export const ROLE_IDS: RoleId[] = [
  'stubborn_goose',
  'low_battery_cat',
  'ddl_hamster',
  'backstage_alpaca',
];
