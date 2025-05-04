import './index.css'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div className="header-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
        alt="website logo"
        className="logo"
      />
      <ul className="route-links">
        <li className="route">
          <Link to="/" className="route-link">
            Home
          </Link>
        </li>
        <li className="route">
          <Link to="/jobs" className="route-link">
            Jobs
          </Link>
        </li>
      </ul>
      <button className="logout-button">Logout</button>
    </div>
  )
}

export default Header
