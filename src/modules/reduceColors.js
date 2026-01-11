import * as iq from 'image-q';

export default function reduceColors(canvas, colors = 4) {
  const ctx = canvas.getContext('2d');
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

  const pointContainer = iq.utils.PointContainer.fromImageData(imageData);
  const palette = iq.buildPaletteSync([pointContainer], {
    colors
  });

  const newImageData = iq.applyPaletteSync(pointContainer, palette);
  ctx.putImageData(newImageData, 0, 0);

  return canvas;
}
