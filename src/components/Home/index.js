import './index.css'
import {Component} from 'react'
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
            <button className="find-button">Find Jobs</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
