import "./pictureImportButton.css";
import "../styles/genericButton.css";
import getImageData from "../modules/getImageData";
import validateImageFile from "../modules/validateImageFile";

export default function PictureImportButton() {
  function invokePictureUpload() {
    document.getElementById("pictureUpload").click();
  }

  async function handlePictureUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    try {
      validateImageFile(file);

      const src = URL.createObjectURL(file);

      const data = await getImageData(src);
      //useImageData(data);

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
