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
  id: 'v3_1' | 'next_placeholder' | 'duty_slip';
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

  // P0 主线「今日代班凭条」layout — tentative values.
  // Visual contract: 热敏小票纸感, mono font, minimal jitter (打印不抖),
  // no paper grain (printer paper is flat), character art smaller (凭条 narrow).
  // Phoebe v0.2 conditional pass 23:31 — these values will be re-tuned
  // but the slot is live & type-safe.
  duty_slip: {
    id: 'duty_slip',
    paper: '#FAF7F0',            // 小票白偏米，不是纯白
    noiseAlpha: 0,               // 热敏打印无grain
    fontFamily: 'JetBrains Mono, IBM Plex Mono, Menlo, PingFang SC',
    scaleOverride: 0.48,         // 凭条纸窄，角色头像小
    textPadding: 60,
    textTopOffset: 120,          // 留出顶部凭条 header 区域
    lineHeightMul: 1.4,          // 小票行距宽松
    fontSizeBoost: 0.95,         // 不放大; 等宽字体本身就重
    jitterAmp: 0,                // 打印字不抖
    drawFrame: true,             // 画凭条边框 (dashed rect)
    characterTrim: true,
    signatureFontPx: 12,
    signatureAlpha: 0.3,
    inkColor: '#1A1614',         // 热敏打印深棕黑
    signatureColor: '#6B5F50',
  },
};
