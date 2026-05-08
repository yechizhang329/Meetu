import html2canvas from 'html2canvas';

// PRD v0.8 §9 / §12.5 — 4:5 share card spec.
// Logical 360 × 450 → exported at 3× = 1080 × 1350 (XHS 4:5).
// MUST NOT drift; verify-share-card-dims.ts asserts this.

export const SHARE_CARD_WIDTH = 360;
export const SHARE_CARD_HEIGHT = 450;
export const EXPORT_SCALE = 3;
export const EXPORT_WIDTH = SHARE_CARD_WIDTH * EXPORT_SCALE;   // 1080
export const EXPORT_HEIGHT = SHARE_CARD_HEIGHT * EXPORT_SCALE; // 1350

export const SHARE_CARD_SPEC = {
  width: SHARE_CARD_WIDTH,
  height: SHARE_CARD_HEIGHT,
  exportScale: EXPORT_SCALE,
  exportWidth: EXPORT_WIDTH,
  exportHeight: EXPORT_HEIGHT,
} as const;

export function assertShareCardDimensions(element: HTMLElement) {
  const rect = element.getBoundingClientRect();
  if (
    Math.abs(rect.width - SHARE_CARD_WIDTH) > 0.5 ||
    Math.abs(rect.height - SHARE_CARD_HEIGHT) > 0.5
  ) {
    throw new Error(
      `share-card dimension drift: got ${rect.width}×${rect.height}, expected ${SHARE_CARD_WIDTH}×${SHARE_CARD_HEIGHT}.`,
    );
  }
}

async function renderShareCardCanvas(element: HTMLElement) {
  assertShareCardDimensions(element);

  const canvas = await html2canvas(element, {
    scale: EXPORT_SCALE,
    backgroundColor: null,
    useCORS: true,
    logging: false,
    width: SHARE_CARD_WIDTH,
    height: SHARE_CARD_HEIGHT,
    windowWidth: SHARE_CARD_WIDTH,
    windowHeight: SHARE_CARD_HEIGHT,
  });

  if (canvas.width !== EXPORT_WIDTH || canvas.height !== EXPORT_HEIGHT) {
    throw new Error(
      `share-card export drift: got ${canvas.width}×${canvas.height}, expected ${EXPORT_WIDTH}×${EXPORT_HEIGHT}`,
    );
  }
  return canvas;
}

export async function renderShareCardImage(element: HTMLElement) {
  const canvas = await renderShareCardCanvas(element);
  return canvas.toDataURL('image/png');
}

export async function exportShareCard(element: HTMLElement, filename: string) {
  const dataUrl = await renderShareCardImage(element);
  const link = document.createElement('a');
  link.href = dataUrl;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  return dataUrl;
}

export function isLikelyWeChat() {
  if (typeof navigator === 'undefined') return false;
  return /MicroMessenger/i.test(navigator.userAgent);
}
