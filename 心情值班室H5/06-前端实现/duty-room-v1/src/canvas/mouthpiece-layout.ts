// 心情值班室 v1.0 — Canvas 2D handwritten-text layout engine
// tech-selection-v1.md §2.2 §2.4
//
// Goal: paint CJK mouthpiece text onto a 1080×1350 canvas such that it looks
// like "part of the picture", not UI-font glued on top. Uses:
//   - LXGW WenKai handwritten CJK font
//   - per-glyph subtle rotation + y-jitter to break UI-grid feel
//   - manual CJK line-wrapping (no CSS word-break)
//   - aligned to a user-chosen "text anchor" (tl/tc/tr/cl/cc) instead of
//     centered UI style

export interface LayoutInput {
  text: string;                  // raw text, may contain "/" as soft break hint
  canvasW: number;
  canvasH: number;
  anchor: 'tl' | 'tc' | 'tr' | 'cl' | 'cc';
  padding: number;               // px from canvas edge
  fontSize: number;              // px
  fontFamily: string;
  lineHeight: number;            // multiplier
  maxLineWidth: number;          // px, hard cap per line
  /** Per-glyph jitter amplitude — 1.0 = baseline (~±1.7° / ±3 px), >1 looser */
  jitterAmp?: number;
}

export interface LaidOutLine {
  text: string;
  /** glyphs with per-glyph baseline offset and rotation */
  glyphs: Array<{ ch: string; x: number; yOffset: number; rotate: number }>;
  y: number;                     // baseline y
  x: number;                     // left edge x (anchor applied)
  width: number;                 // measured width of this line
}

export interface Layout {
  lines: LaidOutLine[];
  bbox: { x: number; y: number; w: number; h: number };
}

/**
 * Manual CJK word-wrap with "/" as soft-break hint.
 * "人在。/ 电不在。" → ["人在。", "电不在。"]
 * If a segment is still wider than maxLineWidth, it breaks at CJK char
 * boundaries.
 */
function splitIntoRawLines(text: string): string[] {
  return text
    .split(/[/\n]/)
    .map((s) => s.trim())
    .filter(Boolean);
}

function measureSegment(
  ctx: CanvasRenderingContext2D,
  segment: string,
  maxLineWidth: number,
): string[] {
  const lines: string[] = [];
  let current = '';
  for (const ch of segment) {
    const next = current + ch;
    if (ctx.measureText(next).width > maxLineWidth && current.length > 0) {
      lines.push(current);
      current = ch;
    } else {
      current = next;
    }
  }
  if (current) lines.push(current);
  return lines;
}

/** deterministic pseudo-random per (seed, i) — avoids jitter changing on every re-paint */
function pseudoRandom(seed: number, i: number): number {
  const x = Math.sin(seed * 9999 + i * 9301 + 49297) * 233280;
  return x - Math.floor(x);
}

export function layoutMouthpiece(
  ctx: CanvasRenderingContext2D,
  input: LayoutInput,
  seed = 1,
): Layout {
  ctx.font = `${input.fontSize}px "${input.fontFamily}"`;
  ctx.textBaseline = 'alphabetic';

  const rawLines = splitIntoRawLines(input.text);
  const paragraphs: string[] = [];
  for (const segment of rawLines) {
    for (const part of measureSegment(ctx, segment, input.maxLineWidth)) {
      paragraphs.push(part);
    }
  }

  const lineHeightPx = input.fontSize * input.lineHeight;
  const totalH = paragraphs.length * lineHeightPx;

  // Anchor → base position
  let baseY: number;
  switch (input.anchor) {
    case 'cl':
    case 'cc':
      baseY = (input.canvasH - totalH) / 2 + input.fontSize;
      break;
    default:
      baseY = input.padding + input.fontSize;
  }

  const lines: LaidOutLine[] = paragraphs.map((str, li) => {
    const w = ctx.measureText(str).width;
    let x: number;
    switch (input.anchor) {
      case 'tc':
      case 'cc':
        x = (input.canvasW - w) / 2;
        break;
      case 'tr':
        x = input.canvasW - input.padding - w;
        break;
      default:
        x = input.padding;
    }
    const y = baseY + li * lineHeightPx;

    // Per-glyph jitter — baseline ±1.7° rotate, ±3px y, ±1px x; scaled by amp
    const amp = input.jitterAmp ?? 1;
    let cursorX = x;
    const glyphs = Array.from(str).map((ch, gi) => {
      const r1 = pseudoRandom(seed + li * 31 + gi, 1);
      const r2 = pseudoRandom(seed + li * 31 + gi, 2);
      const r3 = pseudoRandom(seed + li * 31 + gi, 3);
      const rotate = (r1 - 0.5) * 0.06 * amp;     // ±~1.7° baseline
      const yOffset = (r2 - 0.5) * 6 * amp;       // ±3 px baseline
      const xJitter = (r3 - 0.5) * 2 * amp;       // ±1 px baseline
      const glyphW = ctx.measureText(ch).width;
      const result = {
        ch,
        x: cursorX + xJitter,
        yOffset,
        rotate,
      };
      cursorX += glyphW;
      return result;
    });

    return { text: str, glyphs, y, x, width: w };
  });

  const bboxX = Math.min(...lines.map((l) => l.x));
  const bboxY = lines[0] ? lines[0].y - input.fontSize : baseY;
  const bboxW = Math.max(...lines.map((l) => l.width));
  const bboxH = totalH;

  return {
    lines,
    bbox: { x: bboxX, y: bboxY, w: bboxW, h: bboxH },
  };
}

export interface PaintOptions {
  color: string;
  shadowColor?: string;
  shadowOffsetY?: number;
  shadowBlur?: number;
}

export function paintMouthpiece(
  ctx: CanvasRenderingContext2D,
  layout: Layout,
  opts: PaintOptions,
): void {
  ctx.save();
  ctx.fillStyle = opts.color;
  if (opts.shadowColor) {
    ctx.shadowColor = opts.shadowColor;
    ctx.shadowBlur = opts.shadowBlur ?? 0;
    ctx.shadowOffsetY = opts.shadowOffsetY ?? 0;
  }
  ctx.textBaseline = 'alphabetic';

  for (const line of layout.lines) {
    for (const g of line.glyphs) {
      ctx.save();
      // rotate around glyph center
      ctx.translate(g.x, line.y + g.yOffset);
      ctx.rotate(g.rotate);
      ctx.fillText(g.ch, 0, 0);
      ctx.restore();
    }
  }

  ctx.restore();
}

/** One-shot convenience: layout + paint */
export function drawMouthpieceText(
  ctx: CanvasRenderingContext2D,
  input: LayoutInput,
  paint: PaintOptions,
  seed = 1,
): Layout {
  const layout = layoutMouthpiece(ctx, input, seed);
  paintMouthpiece(ctx, layout, paint);
  return layout;
}
