// vNext quotes config — placeholder. 文案侧 PRD §9 brief 完成后填实.
// PRD §9.2: 每个角色 ~7 条 (3 role_card + 2 alternate_card + 2 result_support).
// 总计 5×7 = 35 条 placeholder.

import type { RoleId, RoleQuote, QuoteUsage } from '../data/types';

const TBD = 'TBD-NOT-FINAL-COPY-';

const ROLE_IDS: RoleId[] = ['A', 'B', 'C', 'D', 'E'];
const USAGES: { usage: QuoteUsage; n: number }[] = [
  { usage: 'role_card', n: 3 },
  { usage: 'alternate_card', n: 2 },
  { usage: 'result_support', n: 2 },
];

function genQuotesFor(roleId: RoleId): RoleQuote[] {
  const quotes: RoleQuote[] = [];
  for (const { usage, n } of USAGES) {
    for (let i = 1; i <= n; i++) {
      quotes.push({
        roleId,
        quoteId: `${roleId}-${usage}-${i}`,
        text: `${TBD}${roleId}-${usage}-${i}`,
        usage,
        intensity: 'safe',
      });
    }
  }
  return quotes;
}

export const QUOTES: readonly RoleQuote[] = ROLE_IDS.flatMap(genQuotesFor);

export const QUOTES_BY_ROLE: Readonly<Record<RoleId, RoleQuote[]>> = Object.freeze(
  Object.fromEntries(
    ROLE_IDS.map((r) => [r, QUOTES.filter((q) => q.roleId === r)]),
  ) as Record<RoleId, RoleQuote[]>,
);
