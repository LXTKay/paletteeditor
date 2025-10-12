import hexToRgb from "./hexToRgb";
import rgbToHsl from "./rgbToHsl";

export default function sortPaletteByColor(palette, hueCutoff = 0) {
  const cutoff = hueCutoff / 360;

  return [...palette].sort((a, b) => {
    const colorA = hexToRgb(a);
    const colorB = hexToRgb(b);
    const hslA = rgbToHsl(colorA.r, colorA.g, colorA.b);
    const hslB = rgbToHsl(colorB.r, colorB.g, colorB.b);

    // rotate hue by cutoff
    const rotatedHueA = (hslA.h - cutoff + 1) % 1;
    const rotatedHueB = (hslB.h - cutoff + 1) % 1;

    if (rotatedHueA !== rotatedHueB) return rotatedHueA - rotatedHueB;
    return hslA.l - hslB.l; // darkest to lightest
  });
}