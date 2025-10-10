import { SketchPicker } from "react-color";
import "./colorPicker.css";

export default function ColorPicker({ hexColour, setPaletteColour }) {
  return (
    <div className="colorPicker" >
      <SketchPicker
        color={hexColour}
        onChange={setPaletteColour}
        disableAlpha={true}
        width="300px"
        presetColors={[]} />
    </div>
  )
}