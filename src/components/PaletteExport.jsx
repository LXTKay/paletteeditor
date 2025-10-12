import "./paletteExport.css"
import paletteDownloadJSON from "../modules/paletteDownloadJSON"

export default function PaletteExport({ palette }) {
  return (
    <div className="paletteExportBar">
      <div className="paletteDownloadButton" onClick={() => paletteDownloadJSON(palette)}>.JSON</div>
      <div className="paletteDownloadButton">.txt</div>
      <div className="paletteDownloadButton">.gpl</div>
    </div>
  )
}