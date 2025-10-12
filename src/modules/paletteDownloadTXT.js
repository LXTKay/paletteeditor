export default function paletteDownloadTXT(palette) {
  const txtPalette = palette.join("\n");
  const blob = new Blob([txtPalette], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "palette.txt";
  a.click();
  URL.revokeObjectURL(url);
}