import './index.css'
import {Component} from 'react'
import {BsSearch} from 'react-icons/bs'
import Header from '../Header'
import FilterGroup from '../FilterGroup'
import Profile from '../Profile'
import JobDetails from '../JobDetails'

class Jobs extends Component {
  state = {
    searchInput: '',
    search: '',
    selectedEmploymentType: [],
    salaryRange: '',
  }

  onSelectEmploymentType = id => {
    this.setState(prevState => {
      const {selectedEmploymentType} = prevState
      if (selectedEmploymentType.includes(id)) {
        return {
          selectedEmploymentType: selectedEmploymentType.filter(
            type => type !== id,
          ),
        }
      }
      return {
        selectedEmploymentType: [...selectedEmploymentType, id],
      }
    })
  }

  onSelectSalaryRange = id => {
    this.setState({salaryRange: id})
  }

  onChangeSearch = event => {
    this.setState({searchInput: event.target.value})
  }

  onClickSearch = () => {
    const {searchInput} = this.state
    this.setState({search: searchInput})
  }

  render() {
    const {
      search,
      searchInput,
      selectedEmploymentType,
      salaryRange,
    } = this.state
    console.log(search)
    return (
      <div>
        <Header />
        <div className="jobs-bg-container">
          <div className="mobile-search-container">
            <div className="search-container">
              <input
                type="search"
                placeholder="Search"
                className="search-input"
                onChange={this.onChangeSearch}
                value={searchInput}
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
          </div>
          <div className="profile-filter-container">
            <Profile />
            <FilterGroup
              onSelectEmploymentType={this.onSelectEmploymentType}
              onSelectSalaryRange={this.onSelectSalaryRange}
            />
          </div>
          <div className="jobs-show-container">
            <div className="desktop-search-container">
              <div className="search-container">
                <input
                  type="search"
                  placeholder="Search"
                  className="search-input"
                  onChange={this.onChangeSearch}
                  value={searchInput}
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
            </div>
            <div className="jobs">
              <JobDetails
                search={search}
                selectedEmploymentType={selectedEmploymentType}
                salaryRange={salaryRange}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Jobs
