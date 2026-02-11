import { useEffect } from "react"
import drawImage from "../modules/drawImage"
import "./bild.css"

export default function Bild({ palette, pixels, width, height }) {
  useEffect(() => {
    const canvas = document.getElementById("bildCanvas");
    drawImage(canvas, pixels, palette, width, height);
  })

  return (
    <div className="bild">
      <canvas id="bildCanvas"></canvas>
    </div>
  )
}