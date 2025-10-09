export default function drawImage(canvas, pixelData, palette, width, height) {
  const ctx = canvas.getContext("2d");
  const pixelSize = 2; // scale up pixel art
  canvas.width = width * pixelSize;
  canvas.height = height * pixelSize;

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = pixelData[y * width + x];
      ctx.fillStyle = palette[idx];
      ctx.fillRect(x * pixelSize, y * pixelSize, pixelSize, pixelSize);
    }
  }
}