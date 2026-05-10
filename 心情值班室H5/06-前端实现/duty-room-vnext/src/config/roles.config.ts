// vNext roles config — P0 prework, all values are placeholder.
// 文案侧 (Lucy + Fiona) 在 PRD §10 brief 完成后填实。
// 修改这个文件需要 PM 确认 + qa:no-placeholder-text 转 PASS。

import type { Role } from '../data/types';

const TBD = 'TBD-NOT-FINAL-COPY-';

export const ROLES: readonly Role[] = [
  {
    id: 'A',
    roleName: TBD + 'A-roleName',
    imageRef: TBD + 'A-image',
    stylePhrase: TBD + 'A-style',
    personalityLine: TBD + 'A-personality',
    voiceRules: ['嘴硬', '收着', '装没事', '轻微破绽'],
    forbiddenMoves: ['卖惨', '求安慰', '把用户说成脆弱'],
  },
  {
    id: 'B',
    roleName: TBD + 'B-roleName',
    imageRef: TBD + 'B-image',
    stylePhrase: TBD + 'B-style',
    personalityLine: TBD + 'B-personality',
    voiceRules: ['离线', '勿扰', '接不动', '先缓缓'],
    forbiddenMoves: ['冷暴力', '高姿态', '懒得理你'],
  },
  {
    id: 'C',
    roleName: TBD + 'C-roleName',
    imageRef: TBD + 'C-image',
    stylePhrase: TBD + 'C-style',
    personalityLine: TBD + 'C-personality',
    voiceRules: ['加载中', '未启动', '进度条没动', '有自知的装死'],
    forbiddenMoves: ['真摆烂', '甩锅', '不负责'],
  },
  {
    id: 'D',
    roleName: TBD + 'D-roleName',
    imageRef: TBD + 'D-image',
    stylePhrase: TBD + 'D-style',
    personalityLine: TBD + 'D-personality',
    voiceRules: ['抽象', '发疯', '玩梗', '精神跑偏但可读'],
    forbiddenMoves: ['随机胡言', '精神疾病隐喻', '完全看不懂'],
  },
  {
    id: 'E',
    roleName: TBD + 'E-roleName',
    imageRef: TBD + 'E-image',
    stylePhrase: TBD + 'E-style',
    personalityLine: TBD + 'E-personality',
    voiceRules: ['轻刺', '反骨', '体面', '有分寸'],
    forbiddenMoves: ['人身攻击', '阴阳怪气过重', '具体矛盾爆料'],
  },
];

export const ROLE_BY_ID: Readonly<Record<string, Role>> = Object.freeze(
  Object.fromEntries(ROLES.map((r) => [r.id, r])),
);
