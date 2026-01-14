import "../styles/genericButton.css";
import "./paletteImport.css";
import createPaletteArrayFromTXT from "../modules/createPaletteArrayFromTXT";
import createPaletteArrayFromGPL from "../modules/createPaletteArrayFromGPL";
import createPaletteArrayFromJSON from "../modules/createPaletteArrayFromJSON";
import "../styles/icons.css";


export default function PaletteImport({ setPalette, bitDepth }) {
  function invokePaletteUpload() {
    document.getElementById("paletteUpload").click();
  }

  async function handlePaletteUpload(event) {
    try {
      const file = event.target.files[0];
      event.target.value = "";
      if (!file) return;

      let newPalette = [];

      if (file.name.endsWith(".json")) {
        newPalette = await createPaletteArrayFromJSON(file);
      } else if (file.name.endsWith(".txt")) {
        newPalette = await createPaletteArrayFromTXT(file);
      } else if (file.name.endsWith(".gpl")) {
        newPalette = await createPaletteArrayFromGPL(file);
      } else {
        throw new Error("Invalid file type");
      }

      const maxColors = Math.pow(2, bitDepth);
      if (newPalette.length < maxColors) {
        newPalette = newPalette.concat(
          Array(maxColors - newPalette.length).fill("#000000")
        );
      } else if (newPalette.length > maxColors) {
        newPalette = newPalette.slice(0, maxColors);
      }

      setPalette(newPalette);

      return;
    } catch (error) {
      console.error("Error processing palette:", error);
    }
  }

  return (

    <div className="paletteImportBar">
      <img src="icon-upload.svg" alt="Import Icon" className="littleIcon" />
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