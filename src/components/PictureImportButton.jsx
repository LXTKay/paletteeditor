import "./pictureImportButton.css";
import "../styles/genericButton.css";
import getImageData from "../modules/getImageData";
import validateImageFile from "../modules/validateImageFile";
import resizeImage from "../modules/resizeImage";
import imageToCanvas from "../modules/imageToCanvas";
import reduceColors from "../modules/reduceColors";
import fillEmptyPaletteSlots from "../modules/fillEmptyPaletteSlots";

export default function PictureImportButton({ setPalette, setPixels, setSize, bitDepth }) {
  function invokePictureUpload() {
    document.getElementById("pictureUpload").click();
  }

  async function handlePictureUpload(event) {
    const file = event.target.files[0];
    event.target.value = "";
    if (!file) return;

    try {
      validateImageFile(file);

      const src = URL.createObjectURL(file);

      let canvas = await imageToCanvas(src);

      if (canvas.width > 200 || canvas.height > 200) {
        canvas = await resizeImage(canvas, 200, 200);
      }

      const colorAmount = Math.pow(2, bitDepth);
      canvas = reduceColors(canvas, colorAmount);

      const data = await getImageData(canvas);

      const maxColors = Math.pow(2, bitDepth);

      if (data.fetchedPalette.length < maxColors) {
        data.fetchedPalette = fillEmptyPaletteSlots(data.fetchedPalette, maxColors);
      } else if (data.fetchedPalette.length > maxColors) {
        data.fetchedPalette = data.fetchedPalette.slice(0, maxColors);
      }

      setPalette(data.fetchedPalette);
      setPixels(data.fetchedPixels);
      setSize({ width: data.width, height: data.height });

      URL.revokeObjectURL(src);

      return;
    } catch (error) {
      throw new Error(`Error processing image: ${error.message}`);
    }
  }

  return (
    <div className="pictureImportButtonContainer">
      <input
        type="file"
        className="hiddenInput"
        id="pictureUpload"
        accept=".jpg, .jpeg, .png, .bmp"
        onChange={handlePictureUpload}
      />
      <div className="genericButton" onClick={invokePictureUpload}>
        Upload Your Own Picture
      </div>
    </div>
  );
}

