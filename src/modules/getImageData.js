import rgbToHex from "./rgbToHex";
import sortPaletteByColor from "./sortPaletteByColor";

export default async function getImageData(src) {
  try {
    let canvas, ctx, img;
    if (src instanceof URL) {
      img = new Image();
      img.src = src;
      await img.decode();

      canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0);
    } else if (src instanceof HTMLCanvasElement) {
      canvas = src;
      ctx = canvas.getContext("2d");
    } else {
      throw new Error("Invalid image source - is neither URL nor HTMLCanvasElement");
    }

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

    const sortedPalette = sortPaletteByColor(palette, 300);

    // Rebuild pixel indices to match new palette order
    const newPixels = pixels.map((oldIndex) =>
      sortedPalette.indexOf(palette[oldIndex])
    );

    const dataPacket = {
      fetchedPalette: sortedPalette,
      fetchedPixels: newPixels,
      width: canvas.width,
      height: canvas.height,
    };

    return dataPacket;

  } catch (err) {
    console.error(err);
    console.log("This is the source:", src);
  }
}