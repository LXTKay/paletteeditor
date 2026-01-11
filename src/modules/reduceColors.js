import RgbQuant from "rgbquant";

export default function reduceColors(canvas, colors = 4) {
  const options = { colors: colors };
  const quant = new RgbQuant(options);
  quant.sample(canvas);
  quant.palette();
  const quantizedUint8Array = quant.reduce(canvas); //Uint8Array

  const imageData = new ImageData(
    new Uint8ClampedArray(quantizedUint8Array),
    canvas.width,
    canvas.height
  );


  const newCanvas = document.createElement("canvas");
  const ctx = newCanvas.getContext("2d");

  newCanvas.width = canvas.width;
  newCanvas.height = canvas.height;
  ctx.putImageData(imageData, 0, 0);

  return newCanvas;

}
