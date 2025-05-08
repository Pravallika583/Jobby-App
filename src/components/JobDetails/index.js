import './index.css'
import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import JobItem from '../JobItem'

const apiStatusJobsConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}
class JobDetails extends Component {
  state = {
    apiJobsStatus: apiStatusJobsConstants.initial,
    jobsList: [],
  }

  componentDidMount() {
    this.renderJobs()
  }

  componentDidUpdate(prevProps) {
    const {search, selectedEmploymentType, salaryRange} = this.props
    if (prevProps.search !== search) {
      this.renderJobs()
    }
    if (prevProps.selectedEmploymentType !== selectedEmploymentType) {
      this.renderJobs()
    }
    if (prevProps.salaryRange !== salaryRange) {
      this.renderJobs()
    }
  }

  renderJobs = async () => {
    const {search, selectedEmploymentType, salaryRange} = this.props
    this.setState({apiJobsStatus: apiStatusJobsConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const url = `https://apis.ccbp.in/jobs?employment_type=${selectedEmploymentType.join(
      ',',
    )}&minimum_package=${salaryRange}&search=${search}`

    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok) {
      const formattedJobs = data.jobs.map(job => ({
        id: job.id,
        title: job.title,
        companyLogoUrl: job.company_logo_url,
        location: job.location,
        rating: job.rating,
        packagePerAnnum: job.package_per_annum,
        employmentType: job.employment_type,
        jobDescription: job.job_description,
      }))

      this.setState({
        jobsList: formattedJobs,
        apiJobsStatus: apiStatusJobsConstants.success,
      })
    } else {
      this.setState({apiJobsStatus: apiStatusJobsConstants.failure})
    }
  }

  renderLoaderView = () => (
    <div className="job-loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  renderFailureView = () => (
    <div className="failure-view">
      <img
        src="https://assets.ccbp.in/frontend/react-js/failure-img.png"
        alt="failure view"
        className="failure-image"
      />
      <h1 className="failure-heading"> OOPS! Something Went Wrong.</h1>
      <p className="failure-text">
        We cannot seem to find the page you are looking for.
      </p>
      <button type="button" className="retry-button" onClick={this.renderJobs}>
        Retry
      </button>
    </div>
  )

  renderNoJobsView = () => (
    <div className="no-jobs-view">
      <img
        src="https://assets.ccbp.in/frontend/react-js/no-jobs-img.png"
        alt="no jobs"
        className="no-jobs-image"
      />
      <h1 className="no-jobs-heading">No Jobs Found</h1>
      <p className="no-jobs-text">
        We could not find any jobs. Try other filters
      </p>
    </div>
  )

  renderJobsList = () => {
    const {jobsList} = this.state
    return (
      <>
        {jobsList.length === 0 ? (
          this.renderNoJobsView()
        ) : (
          <ul className="jobs-list">
            {jobsList.map(job => (
              <JobItem key={job.id} jobDetails={job} />
            ))}
          </ul>
        )}
      </>
    )
  }

  render() {
    const {apiJobsStatus} = this.state
    switch (apiJobsStatus) {
      case apiStatusJobsConstants.inProgress:
        return this.renderLoaderView()
      case apiStatusJobsConstants.success:
        return this.renderJobsList()
      case apiStatusJobsConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }
}

export default JobDetails
