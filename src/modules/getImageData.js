import rgbToHex from "./rgbToHex";

export default async function getImageData(src) {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  try {
    const img = new Image();
    img.src = src;
    await img.decode();

    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0);

    const data = ctx.getImageData(0, 0, img.width, img.height).data;
    const palette = [];
    const pixels = [];

    for (let i = 0; i < data.length; i += 4) {

      const hexValue = rgbToHex(data[i], data[i + 1], data[i + 2]);
      let index = palette.indexOf(hexValue);

      if (index === -1) {
        palette.push(hexValue);
        index = palette.length - 1;
      }
      pixels.push(index);
    }

    const imageWidth = img.width;
    const imageHeight = img.height;

    const dataPacket = {
      fetchedPalette: palette,
      fetchedPixels: pixels,
      width: imageWidth,
      height: imageHeight,
    };

    return dataPacket;

  } catch (err) {
    console.error(err);
    console.log("This is the source:", src);
  }
}