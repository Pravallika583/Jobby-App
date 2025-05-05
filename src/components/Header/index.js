import './index.css'
import {Link, withRouter} from 'react-router-dom'
import {AiFillHome, AiOutlineLogout} from 'react-icons/ai'
import {MdWork} from 'react-icons/md'
import Cookies from 'js-cookie'

const Header = props => {
  const onLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.push('/login')
  }

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
      <button className="logout-button" onClick={onLogout}>
        Logout
      </button>
      <div className="header-icons">
        <Link to="/">
          <AiFillHome className="icon" />
        </Link>
        <Link to="/jobs">
          <MdWork className="icon" />
        </Link>
        <button className="logout-icon" onClick={onLogout}>
          <AiOutlineLogout className="icon" />
        </button>
      </div>
    </div>
  )
}

export default withRouter(Header)
