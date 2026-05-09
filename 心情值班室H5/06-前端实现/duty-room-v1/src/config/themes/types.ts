// 心情值班室 v1.0 — Theme schema (task #24)
// Intentionally tight: every token here IS used by H5 pages or Canvas.
// Do not add speculative tokens — Fiona 21:38: 不做过度抽象.

export type ThemeId = 'proof' | 'next-placeholder';

/** Canvas layout preset id. Consumed by MouthpieceCanvas via `layoutPreset`. */
export type CanvasLayoutPresetId = 'v3_1' | 'next_placeholder';

export interface Theme {
  id: ThemeId;
  /** Human-readable label — surfaced only in dev debug, never on user UI. */
  label: string;

  /** CSS variables injected at :root (see main.tsx applyTheme). */
  cssVars: {
    /** Page background (H5 shell + page backgrounds) */
    bg: string;
    /** Paper / card surface color */
    surface: string;
    /** Primary text / ink color */
    ink: string;
    /** Secondary text / caption */
    inkMuted: string;
    /** Accent color (primary CTA border + scene card border on select) */
    accent: string;
    /** On-accent text color (primary CTA text) */
    accentInk: string;
    /** Subtle divider */
    divider: string;
    /** Primary H5 font stack (CSS string) */
    fontPrimary: string;
    /** Handwriting font stack (may equal fontPrimary) — used for mouthpiece UI echoes */
    fontHand: string;
    /** Button border radius for primary CTA */
    radiusPill: string;
    /** Card corner radius */
    radiusCard: string;
  };

  /** Which Canvas layout preset to use when exporting mouthpiece PNGs. */
  layoutPreset: CanvasLayoutPresetId;
}
