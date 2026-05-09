// 心情值班室 v1.0 — Theme config (task #24)
// One file to replace: bg / font / button / canvas layout preset.
// Rule: H5 pages read ONLY from `activeTheme` (via CSS vars). Canvas reads
// `activeTheme.layoutPreset` to pick paper/font/text-padding et al.
//
// Why: Jonathan `75bca338` — final visual direction (Phoebe task #33) may
// overturn current proof. Engineering must not hard-code any of:
//   paper / accent / font / button / canvas preset
// Switching `ACTIVE_THEME_ID` below (1 line change) must re-skin the whole
// H5 + change Canvas export look, without touching page components or
// Canvas renderer internals.

import type { Theme, ThemeId } from './themes/types';
import { PROOF_THEME } from './themes/proof';
import { NEXT_PLACEHOLDER_THEME } from './themes/next-placeholder';
import { DUTY_BADGE_YOUNG_ADULT_THEME } from './themes/duty-badge-young-adult';

export const THEMES: Record<ThemeId, Theme> = {
  proof: PROOF_THEME,
  'next-placeholder': NEXT_PLACEHOLDER_THEME,
  'duty-badge-young-adult': DUTY_BADGE_YOUNG_ADULT_THEME,
};

/** Switch the whole H5 + Canvas look by changing this one id.
 *  `proof`                    — V3.1 baseline (奶油米 + LXGW WenKai). Stable fallback.
 *  `next-placeholder`         — generic placeholder; not a design proposal.
 *  `duty-badge-young-adult`   — P0 主线「今日代班凭条」(PM Fiona 23:09 greenlit, Lucy stress test pass).
 *
 *  PRD v1.1 (Fiona 23:39): P0 = 8×4=32 完整产品矩阵.
 *  Phoebe v0.2 batch (00:00 ship) = 32 pre-rendered PNGs at /public/duty-room-v1/receipts/
 *  ResultPage now displays these pre-rendered images directly via slip-data-adapter.
 */
export const ACTIVE_THEME_ID: ThemeId = 'duty-badge-young-adult';

export const activeTheme: Theme = THEMES[ACTIVE_THEME_ID];

export type { Theme, ThemeId } from './themes/types';
