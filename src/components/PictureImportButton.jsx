import "./pictureImportButton.css";
import "../styles/genericButton.css";
import getImageData from "../modules/getImageData";
import validateImageFile from "../modules/validateImageFile";
import resizeImage from "../modules/resizeImage";
import imageToCanvas from "../modules/imageToCanvas";
import reduceColors from "../modules/reduceColors";

export default function PictureImportButton({ setPalette, setPixels, setSize, bitDepth }) {
  function invokePictureUpload() {
    document.getElementById("pictureUpload").click();
  }

  async function handlePictureUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    try {
      validateImageFile(file);

      const src = URL.createObjectURL(file);

      let canvas = await imageToCanvas(src);

      if (canvas.width > 400 || canvas.height > 300) canvas = await resizeImage(canvas, 400, 300);
      const colorAmount = Math.pow(2, bitDepth);
      canvas = reduceColors(canvas, colorAmount);

      const data = await getImageData(canvas);

      setPalette(data.fetchedPalette);
      setPixels(data.fetchedPixels);
      setSize({ width: data.width, height: data.height });

      URL.revokeObjectURL(src);
    } catch (error) {
      console.error("Error processing image:", error);
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
