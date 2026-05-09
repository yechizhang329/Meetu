// 心情值班室 v1.0 — Mouthpiece lines (Lucy v1.1 frozen baseline)
// Source: 文案池-v1.1-8场景40A+16B.md (attachment id 27fd20d8, 2026-05-09)
// Fiona directive (msg c269f744): `后台开了十八个窗口` 是 B backup，不进 flagship 池。
// Hard rule: text may contain 电量/后台/已读 linguistic metaphors; visual layer MUST NOT
// render 屏幕/电池/弹窗 (see copy-pool-v1.1 §0.1).

import type { MouthpieceLine } from './types';

export const LINES: MouthpieceLine[] = [
  // ──────────────────────────────────────────────────────────
  // A tier — 40 lines (8 scenes × 5)
  // ──────────────────────────────────────────────────────────

  // S1 嘴硬否认
  { lineId: 'S1-1', sceneId: 'S1_stubborn_deny', roleId: 'stubborn_goose', userOriginal: '我没事', text: '我没事。/ 真的。/ 我说真的。', friendReply: '你重复三遍了', caption: '本人不认 你们评', selfCheck: 5, visualMode: '鹅翅膀挡嘴 / 眼神躲', tier: 'A' },
  { lineId: 'S1-2', sceneId: 'S1_stubborn_deny', roleId: 'stubborn_goose', userOriginal: '我没多想', text: '我没多想。/ 我想了八次。', friendReply: '笑死', caption: '谁也这样', selfCheck: 5, visualMode: '鹅发呆+头上气泡×8', tier: 'A' },
  { lineId: 'S1-3', sceneId: 'S1_stubborn_deny', roleId: 'stubborn_goose', userOriginal: '没记仇', text: '我没记仇。/ 但记笔记。', friendReply: '那不就是记仇', caption: '本人不认 但笔记很厚', selfCheck: 5, visualMode: '鹅翻笔记本', tier: 'A' },
  { lineId: 'S1-4', sceneId: 'S1_stubborn_deny', roleId: 'stubborn_goose', userOriginal: '没听见', text: '我没听见。/ 但我记下了。', friendReply: '那就是听见了', caption: '别装 这就是你', selfCheck: 5, visualMode: '鹅背手侧脸', tier: 'A' },
  { lineId: 'S1-5', sceneId: 'S1_stubborn_deny', roleId: 'backstage_alpaca', userOriginal: '表面在嘴硬', text: '我说没事。/ 但眼神刚溜了一下。', friendReply: '被抓包了', caption: '不是我 是它眼神', selfCheck: 5, visualMode: '羊驼眼神飘', tier: 'A' },

  // S2 低电量拒绝营业
  { lineId: 'S2-1', sceneId: 'S2_low_battery', roleId: 'low_battery_cat', userOriginal: '今天别叫我', text: '人在。/ 电不在。', friendReply: '那充电去', caption: '别叫 它替我请假', selfCheck: 5, visualMode: '猫整只趴桌 尾巴垂下', tier: 'A' },
  { lineId: 'S2-2', sceneId: 'S2_low_battery', roleId: 'low_battery_cat', userOriginal: '不要叫醒', text: '不要叫醒。/ 我在攒明天。', friendReply: '那今天提前结束了', caption: '我在攒明天', selfCheck: 5, visualMode: '猫闭眼蜷缩', tier: 'A' },
  { lineId: 'S2-3', sceneId: 'S2_low_battery', roleId: 'low_battery_cat', userOriginal: '让我趴一下', text: '让我趴一下。/ 三分钟就够。', friendReply: '三分钟说了一小时', caption: '这猫替我说的', selfCheck: 5, visualMode: '猫趴桌面 + 小时钟（生活物件，不画 UI）', tier: 'A' },
  { lineId: 'S2-4', sceneId: 'S2_low_battery', roleId: 'low_battery_cat', userOriginal: '别打扰', text: '我在。/ 但请把我当背景。', friendReply: '收到 不动你', caption: '把我当壁纸', selfCheck: 5, visualMode: '猫呆滞蹲角落', tier: 'A' },
  { lineId: 'S2-5', sceneId: 'S2_low_battery', roleId: 'stubborn_goose', userOriginal: '不累是假的', text: '我没累。/ 只是不想说话了。', friendReply: '不累谁不说话', caption: '我没累 别cue', selfCheck: 5, visualMode: '鹅缩脖子闭眼', tier: 'A' },

  // S3 DDL / 拖延
  { lineId: 'S3-1', sceneId: 'S3_ddl_procrast', roleId: 'ddl_hamster', userOriginal: '别催我', text: '会做的。/ 不是现在。', friendReply: '你又这样', caption: '今天它在我桌上加班', selfCheck: 5, visualMode: '仓鼠抱着厚厚一叠纸', tier: 'A' },
  { lineId: 'S3-2', sceneId: 'S3_ddl_procrast', roleId: 'ddl_hamster', userOriginal: '等我一下', text: '再等我一下。/ 这一下我说了三天。', friendReply: '笑死', caption: '谁的一下也这么久', selfCheck: 5, visualMode: '仓鼠歪头举小表 / 脚边一叠纸团', tier: 'A' },
  { lineId: 'S3-3', sceneId: 'S3_ddl_procrast', roleId: 'ddl_hamster', userOriginal: '我开始了', text: '我已经开始了。/ 在喝水阶段。', friendReply: '那啥时候下笔', caption: '喝水也是进度', selfCheck: 5, visualMode: '仓鼠举水杯', tier: 'A' },
  { lineId: 'S3-4', sceneId: 'S3_ddl_procrast', roleId: 'ddl_hamster', userOriginal: '还有时间', text: '还有时间。/ 我说的是给我自己。', friendReply: '那就给你自己', caption: '我在骗我自己', selfCheck: 5, visualMode: '仓鼠望向很远的地方', tier: 'A' },
  { lineId: 'S3-5', sceneId: 'S3_ddl_procrast', roleId: 'stubborn_goose', userOriginal: '没拖延', text: '我没拖。/ 只是节奏晚了一点。', friendReply: '晚了多一点', caption: '本人不认', selfCheck: 5, visualMode: '鹅推日历（生活物件，不画 UI）', tier: 'A' },

  // S4 表面正常后台崩
  { lineId: 'S4-1', sceneId: 'S4_polite_overflow', roleId: 'backstage_alpaca', userOriginal: '我表面好其实炸', text: '表面：好的。/ 后台：不要再来了。', friendReply: '我看出来了', caption: '它替我说的 别戳穿', selfCheck: 5, visualMode: '羊驼礼貌笑 身后阴影在冒烟（抽象氛围，不画屏幕/窗口）', tier: 'A' },
  { lineId: 'S4-2', sceneId: 'S4_polite_overflow', roleId: 'backstage_alpaca', userOriginal: '假装已读', text: '表面收到。/ 后台已读不回。', friendReply: '鸽王', caption: '别戳穿 谁懂', selfCheck: 5, visualMode: '羊驼礼貌点头 眼神飘走（不画屏幕/已读标）', tier: 'A' },
  { lineId: 'S4-3', sceneId: 'S4_polite_overflow', roleId: 'backstage_alpaca', userOriginal: '礼貌假装', text: '我说嗯嗯。/ 我想说嗯。', friendReply: '少打一个就行了', caption: '谁也多打过一个', selfCheck: 5, visualMode: '羊驼嘴角抽', tier: 'A' },
  { lineId: 'S4-4', sceneId: 'S4_polite_overflow', roleId: 'backstage_alpaca', userOriginal: '表面维持', text: '表面在。/ 里面已经回宿舍了。', friendReply: '那让你宿舍出来', caption: '人不在 你找它谈', selfCheck: 5, visualMode: '羊驼空壳身体 半透明', tier: 'A' },
  { lineId: 'S4-5', sceneId: 'S4_polite_overflow', roleId: 'ddl_hamster', userOriginal: '表面冷静', text: '表面很稳。/ 我自己知道我在慌。', friendReply: '那就慌了', caption: '别帮我维持', selfCheck: 5, visualMode: '仓鼠手颤+面无表情', tier: 'A' },

  // S5 想安静 / 勿扰
  { lineId: 'S5-1', sceneId: 'S5_need_quiet', roleId: 'low_battery_cat', userOriginal: '今天我不在', text: '今天我不在。/ 我猫替我。', friendReply: '那就找猫', caption: '有事找它', selfCheck: 5, visualMode: '猫坐桌上瞪你', tier: 'A' },
  { lineId: 'S5-2', sceneId: 'S5_need_quiet', roleId: 'low_battery_cat', userOriginal: '别靠近', text: '别晃我。/ 今天容易散。', friendReply: '收到 不动你', caption: '它替我说的 别晃', selfCheck: 5, visualMode: '猫蜷成一团 缩着', tier: 'A' },
  { lineId: 'S5-3', sceneId: 'S5_need_quiet', roleId: 'low_battery_cat', userOriginal: '今天只收不回', text: '我听见了。/ 但今天不想开口。', friendReply: '已读不回选手', caption: '它替我已读不回', selfCheck: 5, visualMode: '猫低头看着远处不动', tier: 'A' },
  { lineId: 'S5-4', sceneId: 'S5_need_quiet', roleId: 'backstage_alpaca', userOriginal: '别追问', text: '我说我好。/ 再问我就要关门了。', friendReply: '那就关吧', caption: '别再追 它烦了', selfCheck: 5, visualMode: '羊驼关小门', tier: 'A' },
  { lineId: 'S5-5', sceneId: 'S5_need_quiet', roleId: 'low_battery_cat', userOriginal: '想躲一下', text: '我躲一下。/ 回头再说。', friendReply: '那就躲', caption: '藏起来了 回头见', selfCheck: 5, visualMode: '猫半身缩进箱子', tier: 'A' },

  // S6 被约出门但不想动
  { lineId: 'S6-1', sceneId: 'S6_invited_out', roleId: 'low_battery_cat', userOriginal: '想去但不去', text: '我人可以去。/ 身体没同意。', friendReply: '那谈判一下', caption: '两方谈不拢', selfCheck: 5, visualMode: '猫对着床开会', tier: 'A' },
  { lineId: 'S6-2', sceneId: 'S6_invited_out', roleId: 'low_battery_cat', userOriginal: '和床谈判', text: '我和床谈了一下。/ 它赢了。', friendReply: '床赢得漂亮', caption: '今天床赢', selfCheck: 5, visualMode: '猫被床压住', tier: 'A' },
  { lineId: 'S6-3', sceneId: 'S6_invited_out', roleId: 'low_battery_cat', userOriginal: '出门要启动', text: '出门要等我开机。/ 开机要先充电。', friendReply: '你又赖床', caption: '这猫骗子', selfCheck: 5, visualMode: '猫坐地发呆 一只爪抬一半', tier: 'A' },
  { lineId: 'S6-4', sceneId: 'S6_invited_out', roleId: 'ddl_hamster', userOriginal: '想去但卡住', text: '我想去。/ 但日历先找我。', friendReply: '先搞日历', caption: '日历替我拦了', selfCheck: 5, visualMode: '仓鼠被日历挡门', tier: 'A' },
  { lineId: 'S6-5', sceneId: 'S6_invited_out', roleId: 'low_battery_cat', userOriginal: '朋友一约就躺', text: '朋友一约。/ 我就和被窝聊起来了。', friendReply: '你俩聊什么', caption: '被窝话多', selfCheck: 5, visualMode: '猫抱被子窃窃私语', tier: 'A' },

  // S7 消息不想回
  { lineId: 'S7-1', sceneId: 'S7_msg_unreplied', roleId: 'low_battery_cat', userOriginal: '看到了但不想回', text: '我看到了。/ 我电量回不动。', friendReply: '留爪', caption: '它看了 我没力气', selfCheck: 5, visualMode: '猫直视前方 爪子垂下（不画屏幕）', tier: 'A' },
  { lineId: 'S7-2', sceneId: 'S7_msg_unreplied', roleId: 'low_battery_cat', userOriginal: '嘴没到', text: '消息看到了。/ 嘴没到。', friendReply: '嘴呢', caption: '嘴去哪了 它找找', selfCheck: 5, visualMode: '猫张嘴却没声', tier: 'A' },
  { lineId: 'S7-3', sceneId: 'S7_msg_unreplied', roleId: 'low_battery_cat', userOriginal: '存着晚点', text: '我收好了。/ 明天再打开。', friendReply: '那明天见', caption: '帮我存着', selfCheck: 5, visualMode: '猫把消息抱进怀', tier: 'A' },
  { lineId: 'S7-4', sceneId: 'S7_msg_unreplied', roleId: 'stubborn_goose', userOriginal: '没不想回', text: '我没有不回。/ 我只是排队回。', friendReply: '排到谁了', caption: '别催 队伍长', selfCheck: 5, visualMode: '鹅面前一排信封', tier: 'A' },
  { lineId: 'S7-5', sceneId: 'S7_msg_unreplied', roleId: 'low_battery_cat', userOriginal: '想回但没电', text: '我想回。/ 手指今天签了请假。', friendReply: '那让手指回一个', caption: '手指罢工', selfCheck: 5, visualMode: '猫爪软软垂着 不动', tier: 'A' },

  // S8 被安排 / 被催
  { lineId: 'S8-1', sceneId: 'S8_pushed_along', roleId: 'backstage_alpaca', userOriginal: '说可以但想逃', text: '我说可以。/ 是因为说不可以要解释。', friendReply: '那解释一下', caption: '别让我解释', selfCheck: 5, visualMode: '羊驼嘴角僵硬点头', tier: 'A' },
  { lineId: 'S8-2', sceneId: 'S8_pushed_along', roleId: 'backstage_alpaca', userOriginal: '被压不敢拒', text: '我点头。/ 是因为忘记还可以摇了。', friendReply: '现在记起来了', caption: '它替我点头 我其实想摇', selfCheck: 5, visualMode: '羊驼机械点头', tier: 'A' },
  { lineId: 'S8-3', sceneId: 'S8_pushed_along', roleId: 'backstage_alpaca', userOriginal: '说能是不想开会', text: '我说我能。/ 是因为说不能要再开会。', friendReply: '那不开会就行了', caption: '谁懂 能不能不再开会', selfCheck: 5, visualMode: '羊驼双手抱头 耳朵下垂（不画会议邀请 UI）', tier: 'A' },
  { lineId: 'S8-4', sceneId: 'S8_pushed_along', roleId: 'ddl_hamster', userOriginal: '再给我点时间', text: '我在配合。/ 只是配合得很慢。', friendReply: '慢也是配合', caption: '别催它 在配合中', selfCheck: 5, visualMode: '仓鼠慢动作签名', tier: 'A' },
  { lineId: 'S8-5', sceneId: 'S8_pushed_along', roleId: 'backstage_alpaca', userOriginal: '表面同意', text: '我说好。/ 是因为说不好太麻烦。', friendReply: '说不好也没事', caption: '它替我省力', selfCheck: 5, visualMode: '羊驼闭眼点头', tier: 'A' },

  // ──────────────────────────────────────────────────────────
  // B tier — 16 backup lines (4 per role)
  // ──────────────────────────────────────────────────────────

  // 嘴硬鹅 B
  { lineId: 'B-G1', sceneId: 'S1_stubborn_deny', roleId: 'stubborn_goose', userOriginal: '没生气', text: '我没生气。/ 只是脸色按了暂停。', friendReply: '别装', caption: '', selfCheck: 4, visualMode: '鹅发呆', tier: 'B' },
  { lineId: 'B-G2', sceneId: 'S1_stubborn_deny', roleId: 'stubborn_goose', userOriginal: '不在乎', text: '我不在乎。/ 我只是反复想了一下。', friendReply: '想这么久', caption: '', selfCheck: 4, visualMode: '鹅看远方', tier: 'B' },
  { lineId: 'B-G3', sceneId: 'S1_stubborn_deny', roleId: 'stubborn_goose', userOriginal: '没在装', text: '我没在装。/ 演技不够而已。', friendReply: '这就承认了', caption: '', selfCheck: 4, visualMode: '鹅背手叹气', tier: 'B' },
  { lineId: 'B-G4', sceneId: 'S1_stubborn_deny', roleId: 'stubborn_goose', userOriginal: '不是我', text: '不是我。/ 是另一个版本的我。', friendReply: '那不还是你', caption: '', selfCheck: 4, visualMode: '鹅侧身', tier: 'B' },

  // 低电量猫 B
  { lineId: 'B-C1', sceneId: 'S2_low_battery', roleId: 'low_battery_cat', userOriginal: '我没事', text: '我没事。/ 只是没电。', friendReply: '那就是累了', caption: '', selfCheck: 4, visualMode: '猫趴枕头', tier: 'B' },
  { lineId: 'B-C2', sceneId: 'S2_low_battery', roleId: 'low_battery_cat', userOriginal: '先别找', text: '我在。/ 但今天不响应。', friendReply: '响应呢', caption: '', selfCheck: 4, visualMode: '猫闭眼打盹', tier: 'B' },
  { lineId: 'B-C3', sceneId: 'S2_low_battery', roleId: 'low_battery_cat', userOriginal: '在线但不动', text: '我在线。/ 但灵魂在排队。', friendReply: '排什么队', caption: '', selfCheck: 4, visualMode: '猫直愣愣坐着', tier: 'B' },
  { lineId: 'B-C4', sceneId: 'S2_low_battery', roleId: 'low_battery_cat', userOriginal: '今天走不动', text: '我没动。/ 只是换了一种站法。', friendReply: '躺也是站', caption: '', selfCheck: 4, visualMode: '猫反躺 肚子朝上', tier: 'B' },

  // DDL 仓鼠 B
  { lineId: 'B-D1', sceneId: 'S3_ddl_procrast', roleId: 'ddl_hamster', userOriginal: '没写', text: '没写。/ 但脑子已经写过一遍了。', friendReply: '那也算?', caption: '', selfCheck: 4, visualMode: '仓鼠敲脑袋', tier: 'B' },
  { lineId: 'B-D2', sceneId: 'S3_ddl_procrast', roleId: 'ddl_hamster', userOriginal: '会做', text: '会做的。/ 而且我已经想了一会儿了。', friendReply: '想了多久', caption: '', selfCheck: 4, visualMode: '仓鼠坐着发呆', tier: 'B' },
  { lineId: 'B-D3', sceneId: 'S3_ddl_procrast', roleId: 'ddl_hamster', userOriginal: '没摆烂', text: '我没摆烂。/ 我在蓄力。', friendReply: '蓄到天亮', caption: '', selfCheck: 4, visualMode: '仓鼠弓身', tier: 'B' },
  { lineId: 'B-D4', sceneId: 'S3_ddl_procrast', roleId: 'ddl_hamster', userOriginal: '别问还多久', text: '别问。/ 问了就是不交。', friendReply: '收到', caption: '', selfCheck: 4, visualMode: '仓鼠摆手', tier: 'B' },

  // 后台羊驼 B
  { lineId: 'B-A1', sceneId: 'S4_polite_overflow', roleId: 'backstage_alpaca', userOriginal: '看起来没事', text: '我看起来还在。/ 是因为还没轮到我崩。', friendReply: '啥时候轮', caption: '', selfCheck: 4, visualMode: '羊驼站着 眼神空', tier: 'B' },
  { lineId: 'B-A2', sceneId: 'S4_polite_overflow', roleId: 'backstage_alpaca', userOriginal: '笑但没笑', text: '我笑了。/ 但是表情没动。', friendReply: '调一下设置', caption: '', selfCheck: 4, visualMode: '羊驼嘴角僵', tier: 'B' },
  // 注意：Fiona msg 053ccbc7 — `后台开了十八个窗口` 仅进 B backup，不进 flagship 池
  { lineId: 'B-A3', sceneId: 'S4_polite_overflow', roleId: 'backstage_alpaca', userOriginal: '假装在听', text: '我在听。/ 只是后台开了十八个窗口。', friendReply: '关不上', caption: '', selfCheck: 4, visualMode: '羊驼耳朵转', tier: 'B', excludedFromFlagship: true },
  { lineId: 'B-A4', sceneId: 'S4_polite_overflow', roleId: 'backstage_alpaca', userOriginal: '在撑着', text: '这个笑。/ 是临时拼的。', friendReply: '拼得不错', caption: '', selfCheck: 4, visualMode: '羊驼侧头', tier: 'B' },
];

// ──────────────────────────────────────────────────────────
// Launch packs — PRD §7 + Lucy v1.1 §3
// ──────────────────────────────────────────────────────────

import type { LaunchPack } from './types';

export const LAUNCH_PACKS: LaunchPack[] = [
  {
    variant: 'A',
    roleId: 'low_battery_cat',
    primaryLineId: 'S2-1',
    titles: ['人在 电不在', '今天叫不动', '派只猫替我说一句'],
    body: [
      '我们做了个小东西。',
      '',
      '今天有些话 我不想自己说。',
      '让一只动物替我说。',
      '',
      '第一只派出来的是没电猫。',
      '',
      '它替我写了一句:',
      '人在。',
      '电不在。',
      '今天先别叫我。',
      '',
      '觉得好笑的 你们有同款吗。',
    ].join('\n'),
    firstReview: '今天它替我说的 我本人没电',
    dmReply: '这边\n[H5 短域名]\n打不开就粘到手机地址栏试试',
  },
  {
    variant: 'B',
    roleId: 'stubborn_goose',
    primaryLineId: 'S1-1',
    titles: ['我没有 真的', '别说我', '我没事 真的 我说真的'],
    body: [
      '我们做了个小东西。',
      '',
      '朋友一说我什么 我都想先反驳。',
      '所以我们派了一只嘴硬鹅替我说。',
      '',
      '它替我说:',
      '我没事。',
      '真的。',
      '我说真的。',
      '',
      '谁也这样 朋友说什么都先不认。',
    ].join('\n'),
    firstReview: '本人先声明 不是我 是鹅',
    dmReply: '这边\n[H5 短域名]\n打不开就粘到手机地址栏试试',
  },
];

// ──────────────────────────────────────────────────────────
// Indexes + query helpers
// ──────────────────────────────────────────────────────────

export const LINES_BY_ID: Record<string, MouthpieceLine> = Object.fromEntries(
  LINES.map((l) => [l.lineId, l]),
);

/** Get all A tier lines for a scene (primary + fallback roles) */
export function linesForScene(sceneId: string): MouthpieceLine[] {
  return LINES.filter((l) => l.tier === 'A' && l.sceneId === sceneId);
}

/** Get B backup lines for a role */
export function backupForRole(roleId: string): MouthpieceLine[] {
  return LINES.filter((l) => l.tier === 'B' && l.roleId === roleId);
}

/** Preflight counts — sanity check at dev time */
export const LINES_SUMMARY = {
  aTier: LINES.filter((l) => l.tier === 'A').length, // 40
  bTier: LINES.filter((l) => l.tier === 'B').length, // 16
  excludedFromFlagship: LINES.filter((l) => l.excludedFromFlagship).length, // 1
  total: LINES.length, // 56
};
