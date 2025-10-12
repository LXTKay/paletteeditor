import "./topMenu.css"
import { Link } from "react-router"

export default function TopMenu() {
  return (
    <div className="topMenu">
      <Link to="/">
        <div className="bitSelection">
          <h1>2bit</h1>
        </div>
      </Link>
      <div className="divider"></div>
      <Link to="/3bit">
        <div className="bitSelection">
          <h1>3bit</h1>
        </div>
      </Link>
      <div className="divider"></div>
      <Link to="/4bit">
        <div className="bitSelection">
          <h1>4bit</h1>
        </div>
      </Link>
      <div className="divider"></div>
      <Link to="/5bit">
        <div className="bitSelection">
          <h1>5bit</h1>
        </div>
      </Link>
      <div className="divider"></div>
      <Link to="/6bit">
        <div className="bitSelection">
          <h1>6bit</h1>
        </div>
      </Link>
      <div className="divider"></div>
      <Link to="/8bit">
        <div className="bitSelection">
          <h1>8bit</h1>
        </div>
      </Link>
    </div>
  )
}