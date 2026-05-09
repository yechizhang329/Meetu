// 心情值班室 v1.0 — Theme schema (task #24)
// Intentionally tight: every token here IS used by H5 pages or Canvas.
// Do not add speculative tokens — Fiona 21:38: 不做过度抽象.

export type ThemeId = 'proof' | 'next-placeholder' | 'duty-badge-young-adult';

/** Canvas layout preset id. Consumed by MouthpieceCanvas via `layoutPreset`. */
export type CanvasLayoutPresetId = 'v3_1' | 'next_placeholder' | 'duty_slip';

/** Slip layout copy block (used only by `duty-badge-young-adult` / `duty_slip`).
 *  Fiona 23:09 PM lock — these fields are CONFIGURABLE per Phoebe v0.2 tuning;
 *  three labels are PM-locked finals, four are placeholders awaiting low-fi.
 *  Do NOT hardcode any of these strings into page components. */
export interface SlipCopy {
  /** L1 凭条抬头 — Phoebe 23:40 v0.2 决定，placeholder ''. */
  title: string;
  /** L2 弱编号 — PM lock 23:09: footer 删域名只留弱「No.007」. */
  serial: string;
  /** L3 代班声明主句 — Phoebe v0.2 placeholder '' */
  handoffLine: string;
  /** L3 section label — PM lock 23:09: 「今日状态」 (替换原「受理信息」). */
  scopeLabel: string;
  /** L3 代班范围/时效正文 — Phoebe v0.2 placeholder '' */
  scopeLine: string;
  /** L4 章上文字 — Phoebe v0.2 placeholder '' */
  stampText: string;
  /** L4 动物签名 — Phoebe v0.2 placeholder '' */
  signature: string;
  /** L5 action list intro — PM lock 23:09: 「这张单子可以：」 (替换原「凭此单可」). */
  actionsIntro: string;
  /** L5 自嘲句 / CTA — Phoebe v0.2 placeholder '' */
  footerActions: string;
}

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

  /** Slip-layout copy block. Only present when layoutPreset === 'duty_slip'. */
  slipCopy?: SlipCopy;
}
