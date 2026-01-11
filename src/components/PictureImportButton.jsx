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
    event.target.value = "";
    if (!file) return;

    try {
      const l = console.log;
      l("Validate Image File...")
      validateImageFile(file);

      l("Create Object URL...");
      const src = URL.createObjectURL(file);

      l("Image to Canvas...");
      let canvas = await imageToCanvas(src);

      l("Resize Image...");
      if (canvas.width > 200 || canvas.height > 200) {
        canvas = await resizeImage(canvas, 200, 200);
        l("Image Resized to: ", canvas.width, "x", canvas.height);
      } else {
        l("Image too small - no need to resize")
      }
      l("Setting bitDepth to:", bitDepth);
      const colorAmount = Math.pow(2, bitDepth);
      l("Reduce Colors...");
      canvas = reduceColors(canvas, colorAmount);

      l("Get Image Data...");
      const data = await getImageData(canvas);

      l("Set State...");
      setPalette(data.fetchedPalette);
      setPixels(data.fetchedPixels);
      setSize({ width: data.width, height: data.height });

      URL.revokeObjectURL(src);

      return;
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
