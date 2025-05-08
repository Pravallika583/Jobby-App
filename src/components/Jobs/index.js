import './index.css'
import {Component} from 'react'
import {BsSearch} from 'react-icons/bs'
import Header from '../Header'
import FilterGroup from '../FilterGroup'
import Profile from '../Profile'
import JobDetails from '../JobDetails'

class Jobs extends Component {
  state = {
    search: '',
  }

  onChangeSearch = event => {
    this.setState({search: event.target.value})
  }

  onClickSearch = () => {}

  render() {
    const {search} = this.state
    return (
      <div>
        <Header />
        <div className="jobs-bg-container">
          <div className="profile-filter-container">
            <Profile />
            <FilterGroup />
          </div>
          <div className="jobs-show-container">
            <div className="search-container">
              <input
                type="search"
                placeholder="Search"
                className="search-input"
                onChange={this.onChangeSearch}
                value={search}
              />
              <div className="search-field">
                <button
                  type="button"
                  data-testid="searchButton"
                  className="search-button"
                  onClick={this.onClickSearch}
                >
                  <BsSearch className="search-icon" />
                </button>
              </div>
            </div>
            <div className="jobs">
              <JobDetails search={search} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Jobs
