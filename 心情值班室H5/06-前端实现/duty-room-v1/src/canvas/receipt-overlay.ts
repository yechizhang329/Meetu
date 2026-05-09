// 心情值班室 v1.0 — Receipt overlay renderer for duty_slip layout
// Called as a post-pass AFTER base MouthpieceCanvas has painted:
//   paper → character art → mouthpiece text → signature
//
// This module adds the "今日代班凭条" receipt frame on top:
//   - Dashed border (热敏小票裁切线)
//   - Header block: title + serial + status line
//   - Scope section: 今日状态 label + scope content
//   - Red seal / stamp (stampText in circle)
//   - Footer: actionsIntro + footer actions list
//   - Signature line: animal name + sign line
//
// Design ref: Phoebe v0.2 low-fi (conditionally passed 23:31)
// PM lock: title='今日代班凭条', scopeLabel='今日状态', actionsIntro='这张单子可以：'

import type { ResolvedSlipFields } from '../data/slip-config';

const CANVAS_W = 1080;
const CANVAS_H = 1350;

/** Render the receipt overlay onto an existing canvas context.
 *  MUST be called AFTER mouthpiece text + character art are already drawn.
 *  This adds the structural receipt chrome around the content. */
export function paintReceiptOverlay(
  ctx: CanvasRenderingContext2D,
  fields: ResolvedSlipFields,
): void {
  const margin = 48;
  const innerX = margin;
  const innerY = margin;
  const innerW = CANVAS_W - margin * 2;
  const innerH = CANVAS_H - margin * 2;

  // ─── 1. Dashed border (thermal receipt cut-line aesthetic) ───────────────
  ctx.save();
  ctx.setLineDash([12, 8]);
  ctx.strokeStyle = 'rgba(26, 22, 20, 0.25)';
  ctx.lineWidth = 2;
  ctx.strokeRect(innerX, innerY, innerW, innerH);
  ctx.restore();

  // ─── 2. Header block ───────────────────────────────────────────────────────
  const headerY = innerY + 36;

  // Title: 今日代班凭条
  ctx.save();
  ctx.font = '600 42px "JetBrains Mono", "IBM Plex Mono", "PingFang SC", system-ui';
  ctx.fillStyle = '#1A1614';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'top';
  ctx.fillText(fields.title, CANVAS_W / 2, headerY);
  ctx.restore();

  // Serial number (top-right)
  ctx.save();
  ctx.font = '300 20px "JetBrains Mono", "IBM Plex Mono", monospace';
  ctx.fillStyle = 'rgba(26, 22, 20, 0.4)';
  ctx.textAlign = 'right';
  ctx.textBaseline = 'top';
  ctx.fillText(fields.serialNo, innerX + innerW - 16, headerY + 4);
  ctx.restore();

  // Divider line below title
  const divY = headerY + 56;
  ctx.save();
  ctx.setLineDash([4, 4]);
  ctx.strokeStyle = 'rgba(26, 22, 20, 0.15)';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(innerX + 24, divY);
  ctx.lineTo(innerX + innerW - 24, divY);
  ctx.stroke();
  ctx.restore();

  // Status line below divider
  ctx.save();
  ctx.font = '400 28px "PingFang SC", system-ui';
  ctx.fillStyle = '#1A1614';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'top';
  ctx.fillText(fields.statusLine, CANVAS_W / 2, divY + 18);
  ctx.restore();

  // ─── 3. Scope section (mid-left, doesn't overlap mouthpiece text area) ────
  const scopeY = divY + 70;

  ctx.save();
  ctx.font = '500 22px "PingFang SC", system-ui';
  ctx.fillStyle = 'rgba(26, 22, 20, 0.6)';
  ctx.textAlign = 'left';
  ctx.textBaseline = 'top';
  ctx.fillText(`【${fields.scopeLabel}】`, innerX + 32, scopeY);
  ctx.restore();

  ctx.save();
  ctx.font = '400 24px "PingFang SC", system-ui';
  ctx.fillStyle = '#1A1614';
  ctx.textAlign = 'left';
  ctx.textBaseline = 'top';
  ctx.fillText(`负责范围：${fields.scopeContent}`, innerX + 32, scopeY + 34);
  ctx.restore();

  // ─── 4. Red seal / stamp (bottom-right quadrant) ──────────────────────────
  const stampCenterX = CANVAS_W - margin - 140;
  const stampCenterY = CANVAS_H - margin - 200;
  const stampRadius = 64;

  ctx.save();
  // Outer circle
  ctx.beginPath();
  ctx.arc(stampCenterX, stampCenterY, stampRadius, 0, Math.PI * 2);
  ctx.strokeStyle = fields.accent;
  ctx.lineWidth = 4;
  ctx.globalAlpha = 0.85;
  ctx.stroke();

  // Inner ring (decorative)
  ctx.beginPath();
  ctx.arc(stampCenterX, stampCenterY, stampRadius - 8, 0, Math.PI * 2);
  ctx.strokeStyle = fields.accent;
  ctx.lineWidth = 1.5;
  ctx.stroke();

  // Stamp text (two lines: stampCategory / 值班中)
  ctx.globalAlpha = 0.9;
  ctx.fillStyle = fields.accent;
  ctx.font = '700 22px "PingFang SC", system-ui';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  const stampParts = fields.stampText.split(' / ');
  if (stampParts.length >= 2) {
    ctx.fillText(stampParts[0], stampCenterX, stampCenterY - 14);
    ctx.fillText(stampParts[1], stampCenterX, stampCenterY + 14);
  } else {
    ctx.fillText(fields.stampText, stampCenterX, stampCenterY);
  }
  ctx.restore();

  // ─── 5. Footer section (bottom area) ─────────────────────────────────────
  const footerY = CANVAS_H - margin - 100;

  // Actions intro
  ctx.save();
  ctx.font = '500 22px "PingFang SC", system-ui';
  ctx.fillStyle = 'rgba(26, 22, 20, 0.55)';
  ctx.textAlign = 'left';
  ctx.textBaseline = 'top';
  ctx.fillText(fields.actionsIntro, innerX + 32, footerY);
  ctx.restore();

  // Footer actions (split by " / ")
  ctx.save();
  ctx.font = '400 20px "PingFang SC", system-ui';
  ctx.fillStyle = 'rgba(26, 22, 20, 0.7)';
  ctx.textAlign = 'left';
  ctx.textBaseline = 'top';
  ctx.fillText(fields.footerActions, innerX + 32, footerY + 30);
  ctx.restore();

  // ─── 6. Signature line (bottom-right, above stamp) ────────────────────────
  const sigY = stampCenterY + stampRadius + 20;
  ctx.save();
  ctx.font = '400 20px "PingFang SC", system-ui';
  ctx.fillStyle = 'rgba(26, 22, 20, 0.6)';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'top';
  ctx.fillText(`${fields.animalName} · ${fields.signLine}`, stampCenterX, sigY);
  ctx.restore();
}
