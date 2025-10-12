export default function paletteArrayToGPL(palette) {
  const header = "GIMP Palette\n";
  let body = "";

  for (const hexColor of palette) {
    const value1 = parseInt(hexColor.slice(1, 3), 16);
    const value2 = parseInt(hexColor.slice(3, 5), 16);
    const value3 = parseInt(hexColor.slice(5, 7), 16);

    body += `${value1} ${value2} ${value3} ${hexColor}\n`;
  }

  const GPL = header + body;
  return GPL;
}