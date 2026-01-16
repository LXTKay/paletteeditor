export default function fillEmptyPaletteSlots(palette, maxColors) {
  console.log("fillEmptyPaletteSlots");
  console.log("palette", palette);
  let newPalette = [];

  newPalette = palette.concat(
    Array(maxColors - palette.length).fill("#000000")
  );

  console.log("newPalette", newPalette);
  return newPalette;

}