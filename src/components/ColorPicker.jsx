import { SketchPicker } from "react-color";
import "./colorPicker.css";
import { useLayoutEffect } from "react";

export default function ColorPicker({ hexColour, setPaletteColour }) {

  useLayoutEffect(() => {
    const colorPicker = document.querySelector(".colorPicker");
    const offsetTop = colorPicker.getBoundingClientRect().top;

    if (offsetTop < 0) {
      colorPicker.classList.add("colorPickerShifted");
    }
  },);

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