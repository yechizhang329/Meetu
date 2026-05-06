import html2canvas from 'html2canvas';

/**
 * Export the share card DOM to a PNG blob at 3x scale (≈ 1080×1440).
 * Tries native download first; on WeChat webview where download may be
 * blocked, opens the image in a new viewer so the user can long-press save.
 */
export async function exportShareCard(element: HTMLElement, filename: string) {
  const canvas = await html2canvas(element, {
    scale: 3,
    backgroundColor: null,
    useCORS: true,
    logging: false,
    windowWidth: element.offsetWidth,
    windowHeight: element.offsetHeight,
  });

  const dataUrl = canvas.toDataURL('image/png');

  // Try standard download first
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
