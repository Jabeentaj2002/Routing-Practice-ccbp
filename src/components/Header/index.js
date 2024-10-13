// Write your JS code here
import './index.css'

import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <nav className="nav-section">
      <div className="title-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
          alt="wave"
          className="wave-img"
        />
        <p className="wave-heading">Wave</p>
      </div>
      <ul className="menu-container">
        <li>
          <Link to="/" className="list-item">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="list-item">
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" className="list-item">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Header
