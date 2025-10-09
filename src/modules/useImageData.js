import { useEffect, useRef, useState } from "react";
import rgbToHex from "./rgbToHex";

/**
 * Loads an image and converts it into a palette and pixel array.
 * @param {string} src - Path or URL to the image
 * @returns {object} { palette, pixels, width, height, loading, error }
 */
export default function useImageData(src) {
  const [palette, setPalette] = useState([]);
  const [pixels, setPixels] = useState([]);
  const [size, setSize] = useState({ width: 0, height: 0 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const hiddenCanvasRef = useRef(null);

  useEffect(() => {
    if (!src) return;

    const canvas = hiddenCanvasRef.current ?? document.createElement("canvas");
    hiddenCanvasRef.current = canvas;
    const ctx = canvas.getContext("2d");

    async function loadImage() {
      try {
        setLoading(true);
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
          const hex = rgbToHex(data[i], data[i + 1], data[i + 2]);
          let idx = palette.indexOf(hex);
          if (idx === -1) {
            palette.push(hex);
            idx = palette.length - 1;
          }
          pixels.push(idx);
        }

        setPalette(palette);
        setPixels(pixels);
        setSize({ width: img.width, height: img.height });
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    loadImage();
  }, [src]);

  return { palette, pixels, ...size, loading, error };
}


