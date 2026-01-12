import "../styles/genericButton.css"
import "./paletteImport.css"
import TXTToPaletteArray from "../modules/TXTToPaletteArray";
import GPLToPaletteArray from "../modules/GPLToPaletteArray";

export default function PaletteImport() {
  function invokePaletteUpload() {
    document.getElementById("paletteUpload").click();
  }

  async function handlePaletteUpload(event) {
    const file = event.target.files[0];
    event.target.value = "";
    if (!file) return;

    if (file.name.endsWith(".json")) {
      alert("Importing JSON palette...");
    } else if (file.name.endsWith(".txt")) {
      TXTToPaletteArray(file);
    } else if (file.name.endsWith(".gpl")) {
      GPLToPaletteArray(file);
    } else {
      alert("Invalid file extension. Please upload a JSON, TXT, or GPL file.");
      return;
    }
  }

  return (
    <div className="paletteImportBar">
      <input
        type="file"
        className="hiddenInput"
        id="paletteUpload"
        accept=".json, .txt, .gpl"
        onChange={handlePaletteUpload}
      />
      <div className="genericButton" onClick={invokePaletteUpload}>Import Palette</div>
    </div >
  )
}