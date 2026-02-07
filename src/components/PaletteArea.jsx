import ColourButton from "./ColourButton"
import "./paletteArea.css"


export default function PaletteArea({ palette, setPalette }) {
  return (
    <div className="palette align4colours">
      {palette.map((colour, index) => (
        <ColourButton key={index} index={index} colour={colour} palette={palette} setPalette={setPalette} />
      ))}
    </div>
  )
} 