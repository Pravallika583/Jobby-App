import './index.css'
import {Link} from 'react-router-dom'
import {AiFillHome, AiOutlineLogout} from 'react-icons/ai'
import {MdWork} from 'react-icons/md'

const Header = () => (
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
    <div className="header-icons">
      <Link to="/">
        <AiFillHome className="icon" />
      </Link>
      <Link to="/jobs">
        <MdWork className="icon" />
      </Link>
      <Link to="/login">
        <AiOutlineLogout className="icon" />
      </Link>
    </div>
  </div>
)

export default Header
