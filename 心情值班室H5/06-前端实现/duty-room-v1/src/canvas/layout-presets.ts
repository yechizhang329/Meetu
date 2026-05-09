// 心情值班室 v1.0 — Canvas layout presets (task #24)
// A layout preset controls: paper color, CJK font, text padding & line height,
// jitter, scale override, signature opacity — everything that differs between
// V3.1 and the next (final) look Phoebe task #33 picks.
//
// Today we ship 2 presets:
//   - v3_1              — current PM-gated baseline (奶油米 + LXGW)
//   - next_placeholder  — visibly-different preset to prove the swap works
//
// When task #33 lands, add a 3rd preset here (or replace `next_placeholder`)
// and flip Theme.layoutPreset. MouthpieceCanvas must not grow per-theme
// branches — it reads only from the preset object.

export interface CanvasLayoutPreset {
  id: 'v3_1' | 'next_placeholder';
  /** Canvas background fill color */
  paper: string;
  /** Paper grain noise alpha (0..1) */
  noiseAlpha: number;
  /** Primary CJK handwriting family (Canvas string) */
  fontFamily: string;
  /** Fraction of canvas width used by role art (0..1) */
  scaleOverride: number;
  /** Outer text padding in px */
  textPadding: number;
  /** Extra y offset added on top of padding */
  textTopOffset: number;
  /** Line height multiplier */
  lineHeightMul: number;
  /** Font size boost multiplier on the heuristic base */
  fontSizeBoost: number;
  /** Jitter amplitude (1 = baseline) */
  jitterAmp: number;
  /** Whether to paint a background note-frame behind the character */
  drawFrame: boolean;
  /** Chroma-key paper out of role PNG? (v1/v3 paths yes; v2 no) */
  characterTrim: boolean;
  /** Watermark font size (px) */
  signatureFontPx: number;
  /** Watermark opacity (0..1) */
  signatureAlpha: number;
  /** Ink color for the mouthpiece text (CSS color) */
  inkColor: string;
  /** Signature color (CSS color) */
  signatureColor: string;
}

export const CANVAS_LAYOUT_PRESETS: Record<CanvasLayoutPreset['id'], CanvasLayoutPreset> = {
  v3_1: {
    id: 'v3_1',
    paper: '#FBF6E8',
    noiseAlpha: 0.012,
    fontFamily: 'LXGW WenKai',
    scaleOverride: 0.72,
    textPadding: 70,
    textTopOffset: 80,
    lineHeightMul: 1.12,
    fontSizeBoost: 1.32,
    jitterAmp: 1.4,
    drawFrame: false,
    characterTrim: true,
    signatureFontPx: 16,
    signatureAlpha: 0.42,
    inkColor: '#2A2420',
    signatureColor: '#7E7065',
  },
  next_placeholder: {
    id: 'next_placeholder',
    paper: '#EEF2F5',
    noiseAlpha: 0.006,
    fontFamily: 'PingFang SC',
    scaleOverride: 0.6,
    textPadding: 80,
    textTopOffset: 70,
    lineHeightMul: 1.25,
    fontSizeBoost: 1.0,
    jitterAmp: 0.4,
    drawFrame: false,
    characterTrim: true,
    signatureFontPx: 14,
    signatureAlpha: 0.35,
    inkColor: '#1F2A33',
    signatureColor: '#6A7785',
  },
};
