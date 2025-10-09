import "./colourButton.css"

export default function ColourButton({ hexColour = "#000000" }) {
  if (!hexColour.match(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/)) {
    throw new Error(`Invalid hex colour: ${hexColour}`)
  }

  return (
    <div className="colourButton">
      <div className="colourButtonInnerColour" style={{ backgroundColor: hexColour }}></div>
    </div>
  )
}

