import ColourButton from "./ColourButton"
import "./paletteArea.css"

export default function PaletteArea() {
  return (
    <div className="palette align4colours">
      <ColourButton />
      <ColourButton />
      <ColourButton />
      <ColourButton />
    </div>
  )
}