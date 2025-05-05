import './index.css'
import {Component} from 'react'

class Login extends Component {
  render() {
    return (
      <div className="bg-container">
        <div className="login-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            alt="website logo"
            className="website-logo"
          />
          <form className="form-container">
            <div className="input-field">
              <label className="label" htmlFor="username">
                USERNAME
              </label>
              <br />
              <input id="username" placeholder="Username" className="input" />
            </div>
            <div className="input-field">
              <label className="label" htmlFor="username">
                PASSWORD
              </label>
              <br />
              <input id="username" placeholder="Password" className="input" />
            </div>
            <button type="submit" className="login-button">
              Login
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default Login
