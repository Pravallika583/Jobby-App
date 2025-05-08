import './index.css'
import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import JobSpecificItemDetails from '../JobSpecificItemDetails'

const apiStatusJobItemConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class JobItemDetails extends Component {
  state = {
    apiJobsStatus: apiStatusJobItemConstants.initial,
    jobDetails: {},
    similarJobs: [],
  }

  componentDidMount() {
    this.renderJobItemDetails()
  }

  renderJobItemDetails = async () => {
    this.setState({apiJobsStatus: apiStatusJobItemConstants.inProgress})
    const {match} = this.props
    const {id} = match.params
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const url = `https://apis.ccbp.in/jobs/${id}`

    const response = await fetch(url, options)
    if (response.ok) {
      const fetchedData = await response.json()
      const jobSkills = fetchedData.job_details.skills.map(skill => ({
        imageUrl: skill.image_url,
        name: skill.name,
      }))
      const updatedJobDetails = {
        companyLogoUrl: fetchedData.job_details.company_logo_url,
        companyWebsiteUrl: fetchedData.job_details.company_website_url,
        employmentType: fetchedData.job_details.employment_type,
        id: fetchedData.job_details.id,
        jobDescription: fetchedData.job_details.job_description,
        skills: jobSkills,
        lifeAtCompany: fetchedData.job_details.life_at_company,
        location: fetchedData.job_details.location,
        packagePerAnnum: fetchedData.job_details.package_per_annum,
        rating: fetchedData.job_details.rating,
        title: fetchedData.job_details.title,
      }
      const updatedSimilarJobs = fetchedData.similar_jobs.map(job => ({
        companyLogoUrl: job.company_logo_url,
        employmentType: job.employment_type,
        id: job.id,
        jobDescription: job.job_description,
        location: job.location,
        rating: job.rating,
        title: job.title,
      }))
      this.setState({
        jobDetails: updatedJobDetails,
        similarJobs: updatedSimilarJobs,
        apiJobsStatus: apiStatusJobItemConstants.success,
      })
    } else {
      this.setState({apiJobsStatus: apiStatusJobItemConstants.failure})
    }
  }

  renderLoaderView = () => (
    <div className="jobItem-loader-container" data-testid="loader">
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
      <button
        type="button"
        className="retry-button"
        onClick={this.renderJobItemDetails}
      >
        Retry
      </button>
    </div>
  )

  renderJobsList = () => {
    const {jobDetails, similarJobs} = this.state
    return (
      <JobSpecificItemDetails
        jobDetails={jobDetails}
        similarJobs={similarJobs}
      />
    )
  }

  render() {
    const {apiJobsStatus} = this.state
    switch (apiJobsStatus) {
      case apiStatusJobItemConstants.inProgress:
        return (
          <>
            <Header />
            {this.renderLoaderView()}
          </>
        )
      case apiStatusJobItemConstants.success:
        return (
          <>
            <Header />
            {this.renderJobsList()}
          </>
        )
      case apiStatusJobItemConstants.failure:
        return (
          <>
            <Header />
            {this.renderFailureView()}
          </>
        )
      default:
        return null
    }
  }
}

export default JobItemDetails
