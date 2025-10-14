import "./arbeitsbereich.css"
import Bild from "./Bild"
import PaletteArea from "./PaletteArea"
import { useState, useEffect } from "react"
import getImageData from "../modules/getImageData"
import PaletteExport from "./PaletteExport"
import PictureImportButton from "./PictureImportButton"

export default function Arbeitsbereich({ bitDepth }) {
  const defaultImage = `/assets/${bitDepth}bitpic.png`;
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
  }, [defaultImage])

  return (
    <div className="arbeitsbereich">
      <div className="areaLeft">
        <PaletteArea palette={palette} setPalette={setPalette} />
        <PaletteExport palette={palette} />
      </div>
      <div className="areaRight">

        <Bild palette={palette} pixels={pixels} width={size.width} height={size.height} />
        <PictureImportButton />
      </div>
    </div>
  )
}