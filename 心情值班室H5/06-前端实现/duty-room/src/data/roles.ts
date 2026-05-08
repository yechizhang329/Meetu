import type { DutyRole, DutyRoleDef } from './types';

// PRD v0.8 §6.2 — P0 4 个动物员工。
// v0.9 起：`main` 切到 v3.4 试金石产物（design-language-v1 §9 Tier A 占位 / 风格参照）。
// 颜色字段对齐 design-language-v1.md §4 角色岗位色。

import goosePng from '../../public/duty-room-p0/share_stubborn_goose_v3.4.png';
import catPng from '../../public/duty-room-p0/share_low_battery_cat_v3.4.png';
import hamsterPng from '../../public/duty-room-p0/share_ddl_hamster_v3.4.png';
import alpacaPng from '../../public/duty-room-p0/share_backstage_alpaca_v3.4.png';

export const ROLES: Record<DutyRole, DutyRoleDef> = {
  stubborn_goose: {
    id: 'stubborn_goose',
    name: '嘴硬鹅',
    station: '否认部部长',
    emotionTag: '嘴硬 / 不认',
    oneLiner: '我没有，只是刚好很像',
    prop: '红章 / 警卫帽',
    themeColor: '#3F5C7A', // 警卫蓝
    accentColor: '#D7563B', // 拒签红
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
    prop: '电池牌 / 充电线',
    themeColor: '#E68A3A', // 低电橙
    accentColor: '#7AB5B5', // 充电青
    highlightColor: '#1C1A17',
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
    prop: '日历 / 空白便签',
    themeColor: '#C43E3E', // 倒计红
    accentColor: '#F2EAD8', // 日历米
    highlightColor: '#1C1A17',
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
    prop: '抽象暗色面板 / 红圆灯',
    themeColor: '#5C6A75', // 屏幕灰
    accentColor: '#7A9F6E', // 待机绿
    highlightColor: '#1C1A17',
    primaryScene: 'brain_overload',
    notOverlap: ['stubborn_goose', 'low_battery_cat', 'ddl_hamster'],
    assets: { masterSheet: alpacaPng, main: alpacaPng, background: alpacaPng },
  },
};

export const ROLE_IDS: DutyRole[] = ['stubborn_goose', 'low_battery_cat', 'ddl_hamster', 'backstage_alpaca'];
