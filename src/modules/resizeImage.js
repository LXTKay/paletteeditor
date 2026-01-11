import Pica from 'pica';

const pica = Pica();

export default async function resizeImage(src, width, height) {

  let canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;

  await pica.resize(src, canvas);

  return canvas;
}

