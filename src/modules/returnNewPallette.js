export default function returnNewPalette(index, hexColour, palette) {
  const newPalette = [...palette];
  newPalette[index] = hexColour;
  return newPalette
}