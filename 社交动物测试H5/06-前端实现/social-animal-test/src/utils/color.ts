export function readableTextOn(hex: string) {
  const match = /^#?([\da-f]{6})$/i.exec(hex);
  if (!match) return '#1f1f1f';
  const value = parseInt(match[1], 16);
  const red = (value >> 16) & 0xff;
  const green = (value >> 8) & 0xff;
  const blue = value & 0xff;
  const luminance = 0.2126 * red + 0.7152 * green + 0.0722 * blue;
  return luminance > 160 ? '#1f1f1f' : '#fffdf5';
}

export function keywordPillStyle(themeColor: string, index: number) {
  const textColor = readableTextOn(themeColor);
  const isLightText = textColor === '#fffdf5';
  const backgrounds = isLightText
    ? ['rgba(0, 0, 0, 0.32)', 'rgba(0, 0, 0, 0.24)', 'rgba(0, 0, 0, 0.18)']
    : ['rgba(255, 255, 255, 0.92)', 'rgba(255, 255, 255, 0.82)', 'rgba(255, 255, 255, 0.72)'];

  return {
    background: backgrounds[index % backgrounds.length],
    color: textColor,
    borderColor: textColor,
  };
}
