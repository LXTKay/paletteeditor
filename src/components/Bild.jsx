import { useEffect } from "react"
import drawImage from "../modules/drawImage"

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