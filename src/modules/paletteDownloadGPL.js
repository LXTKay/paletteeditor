import paletteArrayToGPL from "./paletteArrayToGPL";

export default function paletteDownloadGPL(palette) {
  const GPL = paletteArrayToGPL(palette);
  const blob = new Blob([GPL], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "palette.gpl";
  a.click();
  URL.revokeObjectURL(url);
}