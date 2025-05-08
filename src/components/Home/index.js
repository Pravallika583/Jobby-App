import './index.css'
import {Component} from 'react'
import {Link} from 'react-router-dom'
import Header from '../Header'

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="home-container">
          <div className="home-content">
            <h1 className="heading">Find the Job That Fits Your Life</h1>
            <p className="description">
              Millions of people are searching for jobs, salary information,
              company review. Find the job that fits your abilities and
              potential.
            </p>
            <Link to="/jobs" className="home-find-jobs-link">
              <button type="button" className="find-button">
                Find Jobs
              </button>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
