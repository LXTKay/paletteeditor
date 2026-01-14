import "./paletteExport.css"
import paletteDownloadJSON from "../modules/paletteDownloadJSON"
import paletteDownloadTXT from "../modules/paletteDownloadTXT"
import paletteDownloadGPL from "../modules/paletteDownloadGPL"
import "../styles/genericButton.css"
import "../styles/icons.css"

export default function PaletteExport({ palette }) {
  return (
    <div className="paletteExportBar">
      <img src="icon-download.svg" alt="Export Icon" className="littleIcon" />
      <div className="genericButton" onClick={() => paletteDownloadJSON(palette)}>.JSON</div>
      <div className="genericButton" onClick={() => paletteDownloadTXT(palette)}>.txt</div>
      <div className="genericButton" onClick={() => paletteDownloadGPL(palette)}>.gpl</div>
    </div>
  )
}