import './index.css'
import {BsFillStarFill} from 'react-icons/bs'
import {MdLocationOn, MdWork} from 'react-icons/md'
import {Link} from 'react-router-dom'

const JobItem = props => {
  const {jobDetails} = props
  const {
    id,
    title,
    companyLogoUrl,
    location,
    rating,
    packagePerAnnum,
    employmentType,
    jobDescription,
  } = jobDetails

  return (
    <li className="job-card">
      <Link to={`/jobs/${id}`} className="job-item">
        <div className="job-header">
          <img
            src={companyLogoUrl}
            alt="company logo"
            className="company-logo"
          />
          <div className="job-title-rating">
            <h1 className="job-title">{title}</h1>
            <div className="rating-container">
              <BsFillStarFill className="star-icon" />
              <p className="rating">{rating}</p>
            </div>
          </div>
        </div>

        <div className="job-details">
          <div className="location-employment-container">
            <div className="location-employment">
              <MdLocationOn className="icon" />
              <p className="detail-text">{location}</p>
            </div>
            <div className="location-employment">
              <MdWork className="icon" />
              <p className="detail-text">{employmentType}</p>
            </div>
          </div>
          <p className="package">{packagePerAnnum}</p>
        </div>

        <hr className="divider" />

        <div className="job-description">
          <h2 className="description-heading">Description</h2>
          <p className="description-text">{jobDescription}</p>
        </div>
      </Link>
    </li>
  )
}

export default JobItem
