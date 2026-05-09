// Font readiness probe — used by MouthpieceCanvas to defer painting until the
// LXGW WenKai handwritten fonts are actually available.
// Loads both Screen (V1/V2) and standard (V3) families.

let fontPromise: Promise<boolean> | null = null;

export async function ensureFontLoaded(): Promise<boolean> {
  if (fontPromise) return fontPromise;
  fontPromise = (async () => {
    try {
      await Promise.all([
        document.fonts.load('120px "LXGW WenKai Screen"'),
        document.fonts.load('64px "LXGW WenKai Screen"'),
        document.fonts.load('120px "LXGW WenKai"'),
        document.fonts.load('64px "LXGW WenKai"'),
      ]);
      await document.fonts.ready;
      return true;
    } catch {
      return false;
    }
  })();
  return fontPromise;
}
