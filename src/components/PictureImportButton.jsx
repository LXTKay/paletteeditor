import "./pictureImportButton.css";
import "../styles/genericButton.css";

export default function PictureImportButton() {
  return (
    <div className="pictureImportButtonContainer">
      <input type="file" accept="image/*" className="hiddenInput" />
      <div className="genericButton">Upload Your Own Picture</div>
    </div>
  )
}