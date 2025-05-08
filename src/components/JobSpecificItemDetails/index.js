import './index.css'
import {BsFillStarFill, BsBoxArrowUpRight} from 'react-icons/bs'
import {MdWork, MdLocationOn} from 'react-icons/md'

const JobSpecificItemDetails = props => {
  const {jobDetails, similarJobs} = props
  const {
    companyLogoUrl,
    companyWebsiteUrl,
    employmentType,
    jobDescription,
    skills,
    lifeAtCompany,
    location,
    packagePerAnnum,
    rating,
    title,
  } = jobDetails

  return (
    <div className="job-details-container">
      <div className="job-skills-company-section">
        <div className="job-header">
          <img
            src={companyLogoUrl}
            alt="job details company logo"
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
          <div className="description-website">
            <h2 className="description-heading">Description</h2>
            <div className="visit-arrow">
              <a
                href={companyWebsiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="visit-link"
              >
                Visit
              </a>
              <BsBoxArrowUpRight className="arrow" />
            </div>
          </div>
          <p className="description-text">{jobDescription}</p>
        </div>
        <div className="job-skills">
          <h2 className="skills-heading">Skills</h2>
          <ul className="skills-list">
            {skills.map(skill => (
              <li key={skill.name} className="skill-item">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="skill-icon"
                />
                <p className="skill-name">{skill.name}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="life-at-company">
          <h2 className="life-at-company-heading">Life at Company</h2>
          <div className="company-details">
            <p className="life-at-company-description">
              {lifeAtCompany.description}
            </p>
            <img
              src={lifeAtCompany.image_url}
              alt="life at company"
              className="life-image"
            />
          </div>
        </div>
      </div>
      <div className="similar-jobs">
        <h2 className="similar-jobs-heading">Similar Jobs</h2>
        <ul className="similar-jobs-list">
          {similarJobs.map(job => (
            <li key={job.id} className="similar-job-item">
              <div className="job-header">
                <img
                  src={job.companyLogoUrl}
                  alt="similar job company logo"
                  className="company-logo"
                />
                <div className="job-title-rating">
                  <h1 className="job-title">{job.title}</h1>
                  <div className="rating-container">
                    <BsFillStarFill className="star-icon" />
                    <p className="rating">{job.rating}</p>
                  </div>
                </div>
              </div>
              <div className="job-description">
                <h2 className="description-heading">Description</h2>
                <p className="description-text">{job.jobDescription}</p>
              </div>
              <div className="job-location-details">
                <div className="location-employment-container">
                  <div className="location-employment">
                    <MdLocationOn className="icon" />
                    <p className="detail-text">{job.location}</p>
                  </div>
                  <div className="location-employment">
                    <MdWork className="icon" />
                    <p className="detail-text">{job.employmentType}</p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default JobSpecificItemDetails
