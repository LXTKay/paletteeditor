import "./arbeitsbereich.css"
import Bild from "./Bild"
import PaletteArea from "./PaletteArea"
import { useState, useEffect } from "react"
import getImageData from "../modules/getImageData"

const defaultImage = "/assets/4bitpic.png";;

export default function Arbeitsbereich() {
  const [palette, setPalette] = useState([]);
  const [pixels, setPixels] = useState([]);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    async function fetchData() {
      const { fetchedPalette, fetchedPixels, width, height } = await getImageData(defaultImage);
      setPalette(fetchedPalette);
      setPixels(fetchedPixels);
      setSize({ width, height });
    }
    fetchData();
  }, [])

  return (
    <div className="arbeitsbereich">
      <PaletteArea palette={palette} setPalette={setPalette} />
      <Bild palette={palette} pixels={pixels} width={size.width} height={size.height} />
    </div>
  )
}