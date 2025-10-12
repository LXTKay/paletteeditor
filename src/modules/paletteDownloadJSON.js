export default function paletteDownloadJSON(palette) {
  const jsonPalette = {
    "palettes": [
      {
        "name": "Palette from that one Website",
        "slug": "example",
        "type": "categorical",
        "colors": [
          ...palette
        ]
      }
    ]
  }
  const json = JSON.stringify(jsonPalette, null, 2);
  const blob = new Blob([json], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "palette.json";
  a.click();
  URL.revokeObjectURL(url);
}