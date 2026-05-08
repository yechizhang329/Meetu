import type { DutyRole, DutyRoleDef } from './types';

// PRD v0.8 §6.2 — P0 4 个动物员工。
// `main` 现在用 master-sheets PNG 占位（Phoebe2 task #28 v1 已交付）。
// share_*_v1.png 等 task #29 第二批就位后再 import 替换。
// 颜色字段使用 visual-system-v1.md §3 的占位 HEX；Phoebe2 v0.8.1 提案最终 HEX 后再校准。

import goosePng from '../../public/duty-room-p0/role_stubborn_goose_main_v1.png';
import catPng from '../../public/duty-room-p0/role_low_battery_cat_main_v1.png';
import hamsterPng from '../../public/duty-room-p0/role_ddl_hamster_main_v1.png';
import alpacaPng from '../../public/duty-room-p0/role_backstage_alpaca_main_v1.png';

export const ROLES: Record<DutyRole, DutyRoleDef> = {
  stubborn_goose: {
    id: 'stubborn_goose',
    name: '嘴硬鹅',
    station: '否认部部长',
    emotionTag: '嘴硬 / 不认',
    oneLiner: '我没有，只是刚好很像',
    prop: '拒签章 / 警卫帽 / 文件夹',
    themeColor: '#F2C744',
    accentColor: '#FF7A3D',
    highlightColor: '#1C1A17',
    primaryScene: 'got_called_out',
    notOverlap: ['backstage_alpaca'],
    assets: { masterSheet: goosePng, main: goosePng, background: goosePng },
  },
  low_battery_cat: {
    id: 'low_battery_cat',
    name: '低电量猫',
    station: '电量管理员',
    emotionTag: '没电 / 不想营业',
    oneLiner: '人在，电不在',
    prop: '电池牌 / 充电线 / 趴桌',
    themeColor: '#9DC8D8',
    accentColor: '#5D7186',
    highlightColor: '#F2C744',
    primaryScene: 'no_energy',
    notOverlap: ['backstage_alpaca'],
    assets: { masterSheet: catPng, main: catPng, background: catPng },
  },
  ddl_hamster: {
    id: 'ddl_hamster',
    name: 'DDL 仓鼠',
    station: '截止日期专员',
    emotionTag: '焦虑 / 拖延 / DDL',
    oneLiner: '会做的，但不是现在',
    prop: '日历 / 倒计时 / 纸堆',
    themeColor: '#D8A06A',
    accentColor: '#FF5A3D',
    highlightColor: '#F2C744',
    primaryScene: 'deadline',
    notOverlap: ['backstage_alpaca'],
    assets: { masterSheet: hamsterPng, main: hamsterPng, background: hamsterPng },
  },
  backstage_alpaca: {
    id: 'backstage_alpaca',
    name: '后台羊驼',
    station: '前台正常员',
    emotionTag: '假装 / 表面正常 / 后台过载',
    oneLiner: '表面嗯嗯，后台报警',
    prop: '多窗口屏幕 / 耳机 / 工牌',
    themeColor: '#C8B8D8',
    accentColor: '#5D4B8C',
    highlightColor: '#FFB7C5',
    primaryScene: 'brain_overload',
    notOverlap: ['stubborn_goose', 'low_battery_cat', 'ddl_hamster'],
    assets: { masterSheet: alpacaPng, main: alpacaPng, background: alpacaPng },
  },
};

export const ROLE_IDS: DutyRole[] = ['stubborn_goose', 'low_battery_cat', 'ddl_hamster', 'backstage_alpaca'];
