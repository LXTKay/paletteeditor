import Pica from 'pica';

const pica = Pica();

export default async function resizeImage(src, width, height) {
  const img = new Image();
  img.src = src;
  await img.decode();

  let canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;

  await pica.resize(img, canvas);
  return canvas;
}
