// 心情值班室 v1.0 — MouthpieceCanvas
// Renders one 1080×1350 mouthpiece image: background + role art + handwritten text.
// PRD v1.0 §4.2: only paper background + character + text +极轻落款。
// No banner / tag bar / friend-rate frame allowed.

import { useEffect, useImperativeHandle, useRef, forwardRef } from 'react';
import type { MouthpieceLine, RoleDef } from '../data/types';
import { drawMouthpieceText } from '../canvas/mouthpiece-layout';
import { ensureFontLoaded } from '../canvas/font-loader';
import { CANVAS_LAYOUT_PRESETS, type CanvasLayoutPreset } from '../canvas/layout-presets';
import { activeTheme } from '../config/theme';

const CANVAS_W = 1080;
const CANVAS_H = 1350;

/** Variant style — controls layout, font, frame, and background.
 *  Kept for back-compat with the 4-flagship debug grid (qa-screenshots).
 *  task #24: V3_1 values now pull from CANVAS_LAYOUT_PRESETS['v3_1'] so
 *  theme/layout swaps only change one file.
 */
export type Variant = 'V1_clean' | 'V2_note_frame' | 'V3_fusion' | 'V3_1' | 'theme';

export interface VariantParams {
  paper: string;             // canvas background fill
  noiseAlpha: number;        // paper grain alpha
  fontFamily: string;        // primary CJK handwriting family
  scaleOverride?: number;    // override role.scale (e.g. 0.62)
  textPadding: number;
  textTopOffset: number;     // additional y offset for text anchor (move text down)
  lineHeightMul: number;
  fontSizeBoost: number;     // multiplier (1 = default heuristic)
  jitterAmp: number;         // 1.0 = baseline; >1 = more handwritten feel
  drawFrame: boolean;        // V2 only — draw note-paper frame around character
  characterTrim: boolean;    // V1/V3 — apply chroma-key alpha clean of #F2EAD8 paper bg from PNG
  signatureFontPx: number;   // bottom-right "心情值班室" size
  signatureAlpha: number;    // signature opacity
  inkColor: string;          // mouthpiece text color
  signatureColor: string;    // signature color
}

const VARIANT_PARAMS: Record<Exclude<Variant, 'theme'>, VariantParams> = {
  V1_clean: {
    paper: '#F2EAD8',
    noiseAlpha: 0.018,
    fontFamily: 'LXGW WenKai Screen',
    scaleOverride: 0.62,
    textPadding: 90,
    textTopOffset: 0,
    lineHeightMul: 1.5,
    fontSizeBoost: 1,
    jitterAmp: 1,
    drawFrame: false,
    characterTrim: true,
    signatureFontPx: 22,
    signatureAlpha: 1,
    inkColor: '#2A2420',
    signatureColor: '#7E7065',
  },
  V2_note_frame: {
    paper: '#F2EAD8',
    noiseAlpha: 0.018,
    fontFamily: 'LXGW WenKai Screen',
    scaleOverride: 0.55,
    textPadding: 90,
    textTopOffset: 0,
    lineHeightMul: 1.5,
    fontSizeBoost: 1,
    jitterAmp: 1,
    drawFrame: true,
    characterTrim: false,
    signatureFontPx: 22,
    signatureAlpha: 1,
    inkColor: '#2A2420',
    signatureColor: '#7E7065',
  },
  V3_fusion: {
    paper: '#FBF6E8',
    noiseAlpha: 0.012,
    fontFamily: 'LXGW WenKai',
    scaleOverride: 0.7,
    textPadding: 70,
    textTopOffset: 0,
    lineHeightMul: 1.1,
    fontSizeBoost: 1.3,
    jitterAmp: 1,
    drawFrame: false,
    characterTrim: true,
    signatureFontPx: 22,
    signatureAlpha: 1,
    inkColor: '#2A2420',
    signatureColor: '#7E7065',
  },
  // task #24: `V3_1` is NOT a self-contained value anymore — it mirrors the
  // `v3_1` Canvas layout preset from src/canvas/layout-presets.ts so theme
  // swaps only change one file. When Phoebe task #33 picks the final look,
  // flip `activeTheme.layoutPreset` (not this block).
  V3_1: presetToVariantParams(CANVAS_LAYOUT_PRESETS.v3_1),
};

function presetToVariantParams(p: CanvasLayoutPreset): VariantParams {
  return {
    paper: p.paper,
    noiseAlpha: p.noiseAlpha,
    fontFamily: p.fontFamily,
    scaleOverride: p.scaleOverride,
    textPadding: p.textPadding,
    textTopOffset: p.textTopOffset,
    lineHeightMul: p.lineHeightMul,
    fontSizeBoost: p.fontSizeBoost,
    jitterAmp: p.jitterAmp,
    drawFrame: p.drawFrame,
    characterTrim: p.characterTrim,
    signatureFontPx: p.signatureFontPx,
    signatureAlpha: p.signatureAlpha,
    inkColor: p.inkColor,
    signatureColor: p.signatureColor,
  };
}

export interface MouthpieceCanvasHandle {
  /** Export the current canvas as a PNG Blob (1080×1350) */
  toBlob: () => Promise<Blob>;
  /** Export as data URL (used for preview <img>) */
  toDataURL: () => string;
  /** Force a re-render (e.g. after font load) */
  redraw: () => void;
}

interface Props {
  line: MouthpieceLine;
  role: RoleDef;
  /** Path under public/duty-room-v1/, resolved against import.meta.env.BASE_URL */
  artBaseUrl: string;
  /** Optional render seed — change to re-jitter text */
  seed?: number;
  /** Variant — V1_clean / V2_note_frame / V3_fusion / V3_1 / 'theme' (default: theme). */
  variant?: Variant;
  /** Optional CSS class on the wrapping <canvas> */
  className?: string;
}

/** Resolves anchor + scale → drawImage rect for the role art. */
function resolveImageRect(role: RoleDef, scaleOverride?: number): {
  x: number;
  y: number;
  w: number;
  h: number;
} {
  const scale = scaleOverride ?? role.scale;
  const targetW = CANVAS_W * scale;
  // 4:5 portrait so use square as natural aspect for now (Phoebe2 PNGs are
  // square in batch 1); we scale by width and keep aspect.
  const targetH = targetW;
  const margin = 80;
  let x = 0;
  let y = 0;
  switch (role.imagePosition) {
    case 'br':
      x = CANVAS_W - targetW - margin;
      y = CANVAS_H - targetH - margin;
      break;
    case 'bl':
      x = margin;
      y = CANVAS_H - targetH - margin;
      break;
    case 'bc':
      x = (CANVAS_W - targetW) / 2;
      y = CANVAS_H - targetH - margin;
      break;
    case 'cb':
      x = (CANVAS_W - targetW) / 2;
      y = CANVAS_H - targetH - margin * 1.4;
      break;
    case 'cl':
      x = margin;
      y = (CANVAS_H - targetH) / 2;
      break;
    case 'cr':
      x = CANVAS_W - targetW - margin;
      y = (CANVAS_H - targetH) / 2;
      break;
  }
  return { x, y, w: targetW, h: targetH };
}

const imageCache = new Map<string, Promise<HTMLImageElement>>();

function loadImage(src: string): Promise<HTMLImageElement> {
  const cached = imageCache.get(src);
  if (cached) return cached;
  const p = new Promise<HTMLImageElement>((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => resolve(img);
    img.onerror = (e) => reject(e);
    img.src = src;
  });
  imageCache.set(src, p);
  return p;
}

export const MouthpieceCanvas = forwardRef<MouthpieceCanvasHandle, Props>(
  function MouthpieceCanvas({ line, role, artBaseUrl, seed = 1, variant = 'theme', className }, ref) {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const lastDrawRef = useRef<{ line: MouthpieceLine; role: RoleDef; seed: number; variant: Variant }>({
      line,
      role,
      seed,
      variant,
    });

    const draw = async () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      canvas.width = CANVAS_W;
      canvas.height = CANVAS_H;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      // task #24: default variant 'theme' resolves to the active layout preset.
      // Explicit V1_clean / V2_note_frame / V3_fusion / V3_1 are still honoured
      // for debug grids and qa samples.
      const params: VariantParams =
        variant === 'theme'
          ? presetToVariantParams(CANVAS_LAYOUT_PRESETS[activeTheme.layoutPreset])
          : VARIANT_PARAMS[variant];

      // 1. Paper background
      ctx.fillStyle = params.paper;
      ctx.fillRect(0, 0, CANVAS_W, CANVAS_H);

      // 1.5 Subtle paper grain
      paintNoise(ctx, params.noiseAlpha);

      // 2. Role art
      const rect = resolveImageRect(role, params.scaleOverride);
      if (params.drawFrame) {
        // V2 — paint a soft note-paper frame BEHIND the character
        paintNoteFrame(ctx, rect);
      }
      if (role.artPath) {
        try {
          const url = `${artBaseUrl}${role.artPath}`;
          const img = await loadImage(url);
          if (params.characterTrim) {
            // V1/V3 — chroma-key the PNG's nested cream background out so the
            // character lifts off and blends into whatever canvas paper we use.
            // Also crop to the content bbox so scale represents the visible
            // character size, not the PNG bounding box (which carries a lot
            // of transparent padding from rembg + chroma-key).
            const { canvas: trimmed, bbox } = trimPaperBackground(img, '#F2EAD8');
            // Aspect ratio from the actual content
            const aspect = bbox.w / bbox.h;
            // Each role has a max width (rect.w) AND we cap height to roughly
            // 60% of canvas so portrait characters (alpaca / goose) don't
            // overflow into the text region.
            const maxH = CANVAS_H * 0.6;
            let drawW = rect.w;
            let drawH = drawW / aspect;
            if (drawH > maxH) {
              drawH = maxH;
              drawW = drawH * aspect;
            }
            // Re-anchor based on imagePosition: keep visual bottom aligned to
            // the original rect's bottom edge for `b*` positions; horizontally
            // hug the rect's outer edge (not center) so a portrait character
            // anchored at `br` stays out of the top-left text column.
            let drawX: number;
            switch (role.imagePosition) {
              case 'br':
              case 'cr':
                drawX = rect.x + rect.w - drawW;
                break;
              case 'bl':
              case 'cl':
                drawX = rect.x;
                break;
              default:
                drawX = rect.x + (rect.w - drawW) / 2;
            }
            // drawY clamp: if the natural drawH (aspect-corrected) makes the
            // top of the image go above the canvas safe top (text region),
            // shrink drawH to fit instead of letting the head clip off-canvas.
            // Safe top = max(canvas margin, text region bottom).
            // For now we just clamp to a hard top margin of 80px so the head
            // is always inside the canvas — the previous behaviour silently
            // pushed `pose3` goose's head OUT of frame, which Jonathan caught.
            const SAFE_TOP = 80;
            let drawY = rect.y + (rect.h - drawH);
            if (drawY < SAFE_TOP) {
              const overflow = SAFE_TOP - drawY;
              drawH -= overflow;
              drawW = drawH * aspect;
              drawY = SAFE_TOP;
              // Re-apply horizontal anchoring with new drawW
              switch (role.imagePosition) {
                case 'br':
                case 'cr':
                  drawX = rect.x + rect.w - drawW;
                  break;
                case 'bl':
                case 'cl':
                  drawX = rect.x;
                  break;
                default:
                  drawX = rect.x + (rect.w - drawW) / 2;
              }
            }
            ctx.drawImage(
              trimmed,
              bbox.x,
              bbox.y,
              bbox.w,
              bbox.h,
              drawX,
              drawY,
              drawW,
              drawH,
            );
          } else {
            ctx.drawImage(img, rect.x, rect.y, rect.w, rect.h);
          }
        } catch {
          paintMissingArtPlaceholder(ctx, role);
        }
      } else {
        paintMissingArtPlaceholder(ctx, role);
      }

      // 3. Mouthpiece text
      const fontReady = await ensureFontLoaded();
      if (!fontReady) {
        return;
      }
      const fontSize = pickFontSize(line.text) * params.fontSizeBoost;

      drawMouthpieceText(
        ctx,
        {
          text: line.text,
          canvasW: CANVAS_W,
          canvasH: CANVAS_H,
          anchor: role.textAnchor,
          padding: params.textPadding + params.textTopOffset,
          fontSize,
          fontFamily: params.fontFamily,
          lineHeight: params.lineHeightMul,
          maxLineWidth: CANVAS_W - params.textPadding * 2,
          jitterAmp: params.jitterAmp,
        },
        { color: params.inkColor },
        seed,
      );

      // 4. Signature
      ctx.save();
      ctx.globalAlpha = params.signatureAlpha;
      ctx.fillStyle = params.signatureColor;
      ctx.font = `${params.signatureFontPx}px "${params.fontFamily}", "PingFang SC", system-ui`;
      const sig = '心情值班室';
      const sigW = ctx.measureText(sig).width;
      ctx.fillText(sig, CANVAS_W - sigW - 32, CANVAS_H - 32);
      ctx.restore();

      lastDrawRef.current = { line, role, seed, variant };
    };

    useEffect(() => {
      void draw();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [line.lineId, role.id, seed, variant]);

    useImperativeHandle(
      ref,
      () => ({
        toBlob: () =>
          new Promise<Blob>((resolve, reject) => {
            const canvas = canvasRef.current;
            if (!canvas) return reject(new Error('canvas not mounted'));
            canvas.toBlob(
              (b) => (b ? resolve(b) : reject(new Error('toBlob returned null'))),
              'image/png',
              0.95,
            );
          }),
        toDataURL: () => canvasRef.current?.toDataURL('image/png') ?? '',
        redraw: () => {
          void draw();
        },
      }),
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [],
    );

    return (
      <canvas
        ref={canvasRef}
        className={className}
        width={CANVAS_W}
        height={CANVAS_H}
        data-line-id={line.lineId}
        data-role-id={role.id}
        data-variant={variant}
      />
    );
  },
);

function pickFontSize(text: string): number {
  // Heuristic: count CJK chars across all soft-break segments
  const totalChars = text.replace(/\s|\//g, '').length;
  if (totalChars <= 8) return 120;
  if (totalChars <= 14) return 96;
  if (totalChars <= 22) return 76;
  if (totalChars <= 30) return 64;
  return 56;
}

function paintNoise(ctx: CanvasRenderingContext2D, alpha: number) {
  // Tiny noise dots — adds paper grain feel without obscuring image
  ctx.save();
  const w = ctx.canvas.width;
  const h = ctx.canvas.height;
  for (let i = 0; i < w * h * 0.0015; i++) {
    const x = Math.random() * w;
    const y = Math.random() * h;
    ctx.fillStyle = `rgba(42, 36, 32, ${alpha})`;
    ctx.fillRect(x, y, 1, 1);
  }
  ctx.restore();
}

function paintMissingArtPlaceholder(ctx: CanvasRenderingContext2D, role: RoleDef) {
  const rect = resolveImageRect(role);
  ctx.save();
  ctx.fillStyle = 'rgba(42, 36, 32, 0.06)';
  ctx.fillRect(rect.x, rect.y, rect.w, rect.h);
  ctx.fillStyle = 'rgba(42, 36, 32, 0.5)';
  ctx.font = '24px system-ui';
  ctx.textBaseline = 'top';
  ctx.fillText(`${role.name}（资产待入）`, rect.x + 12, rect.y + 12);
  ctx.restore();
}

/** V2 — paint a soft note-paper rectangle behind the character. No hard
 *  outline / no brand strip / no badge — just a slightly lighter paper plane
 *  with rotated +0.6° and a gentle drop shadow so it reads as "a small piece
 *  of paper laid on the desk". Avoids product-card aesthetic.
 */
function paintNoteFrame(
  ctx: CanvasRenderingContext2D,
  rect: { x: number; y: number; w: number; h: number },
): void {
  const padding = 36;
  const x = rect.x - padding;
  const y = rect.y - padding;
  const w = rect.w + padding * 2;
  const h = rect.h + padding * 2;

  ctx.save();
  // tilt slightly so it doesn't look like a UI card
  const cx = x + w / 2;
  const cy = y + h / 2;
  ctx.translate(cx, cy);
  ctx.rotate(-0.012); // ~-0.7°
  ctx.translate(-cx, -cy);

  // soft drop shadow
  ctx.shadowColor = 'rgba(42, 36, 32, 0.18)';
  ctx.shadowBlur = 24;
  ctx.shadowOffsetY = 12;

  // note paper — slightly lighter cream than canvas paper
  ctx.fillStyle = '#FCF5E2';
  // organic, very-slightly-irregular rectangle
  roundRect(ctx, x, y, w, h, 6);
  ctx.fill();
  ctx.restore();

  // very thin desk shadow line under the bottom edge to separate from page
  ctx.save();
  ctx.fillStyle = 'rgba(42, 36, 32, 0.06)';
  ctx.fillRect(x + 18, y + h - 1, w - 36, 1);
  ctx.restore();
}

function roundRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  r: number,
) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}

/** V1/V3 — chroma-key the inset paper-cream background out of the role PNG.
 *  Phoebe2 batch-1 L1 PNGs were chroma-keyed against #F2EAD8 with tolerance
 *  ~22; some residual paper-rect pixels remain visible on darker canvas
 *  backgrounds. We do a second pass at runtime, on a temp canvas, against a
 *  slightly more aggressive tolerance.
 *
 *  Also returns the tight content bbox so the caller can crop empty padding
 *  out of the asset — without this, scale=0.7 looks the same as scale=0.45
 *  because the PNG carries a lot of transparent padding.
 */
function trimPaperBackground(
  img: HTMLImageElement,
  paperHex: string,
): { canvas: HTMLCanvasElement; bbox: { x: number; y: number; w: number; h: number } } {
  const c = document.createElement('canvas');
  c.width = img.naturalWidth;
  c.height = img.naturalHeight;
  const cx = c.getContext('2d');
  if (!cx) return { canvas: c, bbox: { x: 0, y: 0, w: c.width, h: c.height } };
  cx.drawImage(img, 0, 0);
  const data = cx.getImageData(0, 0, c.width, c.height);
  const tr = parseInt(paperHex.slice(1, 3), 16);
  const tg = parseInt(paperHex.slice(3, 5), 16);
  const tb = parseInt(paperHex.slice(5, 7), 16);
  // Slightly bigger threshold than rembg's 22 to catch residual halos.
  const threshold = 30;
  const t2 = threshold * threshold * 3;
  const buf = data.data;
  let minX = c.width;
  let minY = c.height;
  let maxX = 0;
  let maxY = 0;
  for (let y = 0; y < c.height; y++) {
    for (let x = 0; x < c.width; x++) {
      const i = (y * c.width + x) * 4;
      const dr = buf[i] - tr;
      const dg = buf[i + 1] - tg;
      const db = buf[i + 2] - tb;
      const d2 = dr * dr + dg * dg + db * db;
      if (d2 < t2) {
        const ratio = Math.sqrt(d2 / t2);
        buf[i + 3] = Math.round(buf[i + 3] * ratio);
      }
      if (buf[i + 3] > 16) {
        if (x < minX) minX = x;
        if (y < minY) minY = y;
        if (x > maxX) maxX = x;
        if (y > maxY) maxY = y;
      }
    }
  }
  cx.putImageData(data, 0, 0);
  const bbox = {
    x: minX,
    y: minY,
    w: Math.max(1, maxX - minX + 1),
    h: Math.max(1, maxY - minY + 1),
  };
  return { canvas: c, bbox };
}
