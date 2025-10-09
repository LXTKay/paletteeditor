import "./arbeitsbereich.css"
import Bild from "./Bild"
import PaletteArea from "./PaletteArea"
//import useImageData from "../modules/useImageData"
import { useState } from "react"

const imageData = getImageData();

export default function Arbeitsbereich() {

  return (
    <div className="arbeitsbereich">
      <PaletteArea />
      <Bild />
    </div>
  )
}