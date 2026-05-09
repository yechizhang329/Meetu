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

export const THEMES: Record<ThemeId, Theme> = {
  proof: PROOF_THEME,
  'next-placeholder': NEXT_PLACEHOLDER_THEME,
};

/** Switch the whole H5 + Canvas look by changing this one id.
 *  `proof`              — current V3.1 baseline (奶油米 + LXGW WenKai).
 *  `next-placeholder`   — a visible-different preset used to PROVE swap works
 *                         until Phoebe task #33 lands the real final direction.
 */
export const ACTIVE_THEME_ID: ThemeId = 'proof';

export const activeTheme: Theme = THEMES[ACTIVE_THEME_ID];

export type { Theme, ThemeId } from './themes/types';
