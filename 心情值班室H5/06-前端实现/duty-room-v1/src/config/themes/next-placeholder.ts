// 心情值班室 v1.0 — `next-placeholder` theme.
//
// Purpose: PROVE the theme-swap infrastructure by shipping a second preset
// that is VISIBLY different from `proof` — different bg, different font
// stack, different accent, different Canvas paper. It is NOT a design
// proposal — Phoebe task #33 owns the real final direction.
//
// Usage: flip `ACTIVE_THEME_ID` in src/config/theme.ts to 'next-placeholder'
//        — shell should re-skin and Canvas export should repaint.
// When task #33 decision lands, replace this file's values with the chosen
// direction (or add a third theme file and flip the id).

import type { Theme } from './types';

export const NEXT_PLACEHOLDER_THEME: Theme = {
  id: 'next-placeholder',
  label: 'placeholder · 浅雾蓝 · 圆体（非最终）',
  cssVars: {
    bg: '#EEF2F5',
    surface: '#FFFFFF',
    ink: '#1F2A33',
    inkMuted: '#6A7785',
    accent: '#3E6B8A',
    accentInk: '#FFFFFF',
    divider: 'rgba(31, 42, 51, 0.08)',
    fontPrimary:
      '"PingFang SC", "Hiragino Sans GB", "Source Han Sans SC", system-ui, sans-serif',
    fontHand:
      '"LXGW WenKai Screen", "LXGW WenKai", "PingFang SC", system-ui, sans-serif',
    radiusPill: '12px',
    radiusCard: '10px',
  },
  layoutPreset: 'next_placeholder',
};
