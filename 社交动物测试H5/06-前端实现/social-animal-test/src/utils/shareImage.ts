import html2canvas from 'html2canvas';

// Strict 3:4 share card spec — must not drift.
// Source: Meetu/社交动物测试H5/03-视觉设计/前端视觉Token与分享卡安全区Spec-v1.md §2.2
const SHARE_CARD_WIDTH = 360;
const SHARE_CARD_HEIGHT = 480;
const EXPORT_SCALE = 3;

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

  // Final dimension check after capture — catches library drift.
  const expectedW = SHARE_CARD_WIDTH * EXPORT_SCALE;
  const expectedH = SHARE_CARD_HEIGHT * EXPORT_SCALE;
  if (canvas.width !== expectedW || canvas.height !== expectedH) {
    throw new Error(
      `share-card export drift: got ${canvas.width}×${canvas.height}, expected ${expectedW}×${expectedH}`,
    );
  }

  return canvas;
}

export async function renderShareCardImage(element: HTMLElement) {
  const canvas = await renderShareCardCanvas(element);
  return canvas.toDataURL('image/png');
}

/**
 * Export the share card DOM to a PNG at strict 1080×1440 (3:4).
 * - Asserts the DOM node is exactly 360×480 before capture; throws otherwise.
 * - html2canvas is given explicit width/height so clipping is deterministic.
 * - Tries native download; on WeChat-ish UAs where download may be blocked,
 *   the result page's generated PNG preview handles long-press save.
 */
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

export function assertShareCardDimensions(element: HTMLElement) {
  const rect = element.getBoundingClientRect();
  // Allow 0.5px rounding tolerance for subpixel rendering.
  if (
    Math.abs(rect.width - SHARE_CARD_WIDTH) > 0.5 ||
    Math.abs(rect.height - SHARE_CARD_HEIGHT) > 0.5
  ) {
    throw new Error(
      `share-card dimension drift: got ${rect.width}×${rect.height}, expected ${SHARE_CARD_WIDTH}×${SHARE_CARD_HEIGHT}. Tighten .share-card styles or content.`,
    );
  }
}

export const SHARE_CARD_SPEC = {
  width: SHARE_CARD_WIDTH,
  height: SHARE_CARD_HEIGHT,
  exportScale: EXPORT_SCALE,
  exportWidth: SHARE_CARD_WIDTH * EXPORT_SCALE,
  exportHeight: SHARE_CARD_HEIGHT * EXPORT_SCALE,
} as const;

export function isLikelyWeChat() {
  if (typeof navigator === 'undefined') return false;
  return /MicroMessenger/i.test(navigator.userAgent);
}
