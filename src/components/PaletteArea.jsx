import ColourButton from "./ColourButton"
import "./paletteArea.css"

export default function PaletteArea({ palette, setPalette }) {
  return (
    <div className="palette align4colours">
      <ColourButton hexColour={palette[0]} />
      <ColourButton hexColour={palette[1]} />
      <ColourButton hexColour={palette[2]} />
      <ColourButton hexColour={palette[3]} />
    </div>
  )
}