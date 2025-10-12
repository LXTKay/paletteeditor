import "./paletteExport.css"
import paletteDownloadJSON from "../modules/paletteDownloadJSON"
import paletteDownloadTXT from "../modules/paletteDownloadTXT"
import paletteDownloadGPL from "../modules/paletteDownloadGPL"

export default function PaletteExport({ palette }) {
  return (
    <div className="paletteExportBar">
      <div className="paletteDownloadButton" onClick={() => paletteDownloadJSON(palette)}>.JSON</div>
      <div className="paletteDownloadButton" onClick={() => paletteDownloadTXT(palette)}>.txt</div>
      <div className="paletteDownloadButton" onClick={() => paletteDownloadGPL(palette)}>.gpl</div>
    </div>
  )
}