export default function GPLToPaletteArray(gplPalette) {
  const paletteArray = [];

  const lines = gplPalette.split(/\r?\n/);

  for (let line of lines) {
    line = line.trim();

    if (!line) continue;

    // common GPL headers
    if (
      line.startsWith("GIMP Palette") ||
      line.startsWith("Name:") ||
      line.startsWith("Columns:")
    ) {
      continue;
    }

    const hexMatch = line.match(/#([0-9a-fA-F]{6})/);
    if (hexMatch) {
      paletteArray.push(`#${hexMatch[1].toLowerCase()}`);
      continue;
    }

    const rgbMatch = line.match(/^(\d{1,3})\s+(\d{1,3})\s+(\d{1,3})/);
    if (rgbMatch) {
      const r = Number(rgbMatch[1]);
      const g = Number(rgbMatch[2]);
      const b = Number(rgbMatch[3]);

      // Clamp just to be safe
      const toHex = (v) =>
        Math.max(0, Math.min(255, v))
          .toString(16)
          .padStart(2, "0");

      paletteArray.push(`#${toHex(r)}${toHex(g)}${toHex(b)}`);
    }
  }

  return paletteArray;
}
