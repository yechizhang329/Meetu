// 心情值班室 v1.0 — `proof` theme (current V3.1 baseline).
// Fiona has PM-gated the Canvas PNGs on these values; H5 shell uses the same
// palette so the page and the shareable image feel like one piece.
// When Phoebe task #33 picks a final direction, add a new theme file next to
// this one and switch `ACTIVE_THEME_ID` — don't mutate this preset.

import type { Theme } from './types';

export const PROOF_THEME: Theme = {
  id: 'proof',
  label: 'V3.1 奶油米 · LXGW WenKai',
  cssVars: {
    bg: '#F2EAD8',
    surface: '#FBF6E8',
    ink: '#2A2420',
    inkMuted: '#7E7065',
    accent: '#2A2420',
    accentInk: '#FBF6E8',
    divider: 'rgba(42, 36, 32, 0.12)',
    fontPrimary:
      '"LXGW WenKai Screen", "LXGW WenKai", "PingFang SC", "Hiragino Sans GB", system-ui, sans-serif',
    fontHand:
      '"LXGW WenKai Screen", "LXGW WenKai", "PingFang SC", system-ui, sans-serif',
    radiusPill: '999px',
    radiusCard: '18px',
  },
  layoutPreset: 'v3_1',
};
