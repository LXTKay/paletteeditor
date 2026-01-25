import { SketchPicker } from "react-color";
import "./colorPicker.css";
import { useLayoutEffect } from "react";

export default function ColorPicker({ hexColour, setPaletteColour }) {

  useLayoutEffect(() => {
    const colorPicker = document.querySelector(".colorPicker");
    const yPos = window.mousePosition.y - 30;
    if (yPos + 300 > window.innerHeight) {
      colorPicker.style.top = `${window.innerHeight - 300 - 10}px`;
    } else {
      colorPicker.style.top = `${yPos}px`;
    }
    colorPicker.style.left = `${window.mousePosition.x + 20}px`;
  }, []);

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