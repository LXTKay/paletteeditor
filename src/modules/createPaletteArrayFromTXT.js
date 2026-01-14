export default async function createPaletteArrayFromTXT(file) {
  const text = await file.text();

  if (text[0] != "#") {
    throw new Error("TXT Import Error: Not correctly formatted!");
  }

  const txtPalette = text.trim().split(/\r?\n/);


  const paletteArray = txtPalette;
  return paletteArray;
}
