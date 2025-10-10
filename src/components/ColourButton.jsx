import "./colourButton.css"
import { useState } from "react"
import ColorPicker from "./ColorPicker"
import returnNewPalette from "../modules/returnNewPallette";

export default function ColourButton({ index, palette, setPalette }) {
  const hexColour = palette[index];
  if (!hexColour.match(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/)) {
    throw new Error(`Invalid hex colour: ${hexColour}`)
  }

  const [showColourPicker, setShowColourPicker] = useState(false);

  function wipeColourPicker(event) {
    const colourPicker = document.querySelector(".colorPicker");
    if (colourPicker.contains(event.target)) return;
    document.removeEventListener("click", wipeColourPicker);
    setShowColourPicker(false);
  }

  function handleClick() {
    if (showColourPicker) {
      return
    }
    setShowColourPicker(true);

    setTimeout(() => {
      document.addEventListener("click", wipeColourPicker);
    }, 1);
  }

  function setPaletteColour(color) {
    const newPalette = returnNewPalette(index, color.hex, palette);
    setPalette(newPalette);
  }

  return (
    <div className="buttonContainer">
      <div className="colourButton">
        <div className="colourButtonInnerColour" style={{ backgroundColor: hexColour }} onClick={(e) => { handleClick(e) }}>
        </div>
      </div>
      {showColourPicker && <ColorPicker hexColour={hexColour} setPaletteColour={setPaletteColour} id={"colourPicker"} />}
    </div>
  )

}