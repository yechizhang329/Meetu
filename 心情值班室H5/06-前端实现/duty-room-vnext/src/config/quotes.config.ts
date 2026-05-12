// vNext quotes config — final, sourced from SoT v2 §3 (master) + §4 (backup).
// SoT: Meetu/产品文档/2026-05-12-心情值班室-vNext-copy-sot-v2.md
//
// usages: 一条 quote 可有多个 usage. master tier 优先, backup 用作扩量/preview 池.
// Block 2 per DavidC 23:32: 3 条 master quote 全部并列展示 (不再 pick 1 条).

import type { RoleId, RoleQuote } from '../data/types';

let qSeq = 0;
function q(roleId: RoleId, text: string, usages: RoleQuote['usages'], tier: RoleQuote['tier']): RoleQuote {
  qSeq += 1;
  return { roleId, quoteId: `${roleId}-${tier}-${String(qSeq).padStart(2, '0')}`, text, usages, tier };
}

export const QUOTES: readonly RoleQuote[] = [
  // §3 Master Quotes (2026-05-12 SoT v2)
  // A 嘴硬章鱼
  q('A', '你对我冷淡我就对你冷漠', ['role_card'], 'master'),
  q('A', '泼出去的水连盆都可以不要', ['role_card'], 'master'),
  q('A', '我没事，是沙子里进眼睛了', ['role_card'], 'master'),
  // B 断电猫
  q('B', '不是不合群，是低能量人群', ['role_card'], 'master'),
  q('B', '在，但不在线', ['role_card', 'preview'], 'master'),
  q('B', '今日说话额度已用尽', ['role_card'], 'master'),
  // C 躺平树懒
  q('C', '文件夹已建好', ['role_card', 'result_support'], 'master'),
  q('C', '明天一定', ['preview', 'result_support'], 'master'),
  q('C', '别急，在写了', ['role_card', 'preview'], 'master'),
  // D 整活吗喽
  q('D', '我不是没主见，我是讨好型人格', ['role_card'], 'master'),
  q('D', '情况就是这么个情况，具体什么情况，还要看情况', ['role_card'], 'master'),
  q('D', '虽然我不会做饭，但我点得一手好外卖', ['role_card'], 'master'), // 2026-05-12 22:54 从 backup promote
  // E 高情商刺猬
  q('E', '啊对对对', ['preview', 'result_support'], 'master'),
  q('E', '我没意见，我有看法', ['role_card'], 'master'),
  q('E', '脸上笑嘻嘻，心里XXX', ['role_card'], 'master'),
  // §4 Backup Quotes
  // A 嘴硬章鱼
  q('A', '可以，我习惯了', ['role_card', 'preview'], 'backup'),
  q('A', '我没哭，是风太大', ['role_card'], 'backup'), // 2026-05-12 22:15 从 master 降级
  q('A', '你们玩你们的，不用管我', ['role_card', 'result_support'], 'backup'),
  // B 断电猫
  q('B', '状态：隐身', ['role_card', 'preview'], 'backup'), // 2026-05-12 21:51 从 master 降级; 同时为 style phrase
  q('B', '已读，不回', ['role_card', 'preview'], 'backup'),
  q('B', '之后回复', ['preview', 'result_support'], 'backup'),
  q('B', '懒得动嘴', ['role_card', 'preview'], 'backup'),
  // C 躺平树懒
  q('C', '等我灵感来了', ['role_card', 'preview'], 'backup'),
  q('C', '我先研究一下怎么做', ['role_card'], 'backup'),
  q('C', '下一秒就开始', ['preview', 'result_support'], 'backup'),
  // D 整活吗喽
  q('D', '但凡我有点本事，也不至于没本事', ['role_card'], 'backup'),
  q('D', '要是这事能解决，那应该就能解决了', ['role_card'], 'backup'),
  q('D', '狗都不吃', ['result_support', 'preview'], 'backup'),
  q('D', '形而上学，不行退学', ['role_card'], 'backup'), // 2026-05-12 22:54 从 master 降级
  // E 高情商刺猬
  q('E', '你别生气，听我狡辩', ['role_card', 'preview'], 'backup'),
  q('E', '听您的', ['preview', 'role_card'], 'backup'),
  q('E', '您说得都对', ['role_card'], 'backup'),
];

export const QUOTES_BY_ROLE: Readonly<Record<RoleId, RoleQuote[]>> = Object.freeze(
  Object.fromEntries(
    (['A', 'B', 'C', 'D', 'E'] as RoleId[]).map((r) => [r, QUOTES.filter((q) => q.roleId === r)]),
  ) as Record<RoleId, RoleQuote[]>,
);

/** 取该角色的所有 master quotes (Block 2 展示 3 条并列; DavidC 23:32). */
export function masterQuotesOf(roleId: RoleId): RoleQuote[] {
  return (QUOTES_BY_ROLE[roleId] || []).filter((q) => q.tier === 'master');
}

/** 取该角色的第一条 role_card 用 quote (master 优先). Deprecated for Block 2; 保留供 Block 4 preview fallback. */
export function pickRoleCardQuote(roleId: RoleId): RoleQuote | undefined {
  const list = QUOTES_BY_ROLE[roleId] || [];
  return (
    list.find((q) => q.tier === 'master' && q.usages.includes('role_card')) ||
    list.find((q) => q.usages.includes('role_card'))
  );
}

/** 取该角色的 preview quote (用于换嘴替 CTA 卡). */
export function pickPreviewQuote(roleId: RoleId): RoleQuote | undefined {
  const list = QUOTES_BY_ROLE[roleId] || [];
  return (
    list.find((q) => q.tier === 'master' && q.usages.includes('preview')) ||
    list.find((q) => q.usages.includes('preview'))
  );
}
