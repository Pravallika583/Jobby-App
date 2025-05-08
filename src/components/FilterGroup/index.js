import './index.css'
import {Component} from 'react'

const employmentTypesList = [
  {
    label: 'Full Time',
    employmentTypeId: 'FULLTIME',
  },
  {
    label: 'Part Time',
    employmentTypeId: 'PARTTIME',
  },
  {
    label: 'Freelance',
    employmentTypeId: 'FREELANCE',
  },
  {
    label: 'Internship',
    employmentTypeId: 'INTERNSHIP',
  },
]

const salaryRangesList = [
  {
    salaryRangeId: '1000000',
    label: '10 LPA and above',
  },
  {
    salaryRangeId: '2000000',
    label: '20 LPA and above',
  },
  {
    salaryRangeId: '3000000',
    label: '30 LPA and above',
  },
  {
    salaryRangeId: '4000000',
    label: '40 LPA and above',
  },
]
class FilterGroup extends Component {
  render() {
    return (
      <div className="filter-container">
        <hr className="line" />
        <div className="employment-types-container">
          <p className="types-of-employment-heading">Type of Employment</p>
          <ul>
            {employmentTypesList.map(eachType => (
              <li key={eachType.employmentTypeId} className="employment-type">
                <div className="input-section">
                  <input
                    type="checkbox"
                    id={eachType.employmentTypeId}
                    className=" filter-input"
                  />
                  <label htmlFor={eachType.employmentTypeId}>
                    {eachType.label}
                  </label>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <hr className="line" />
        <div className="salaryrange-types-container">
          <p className="salary-range-heading">Salary Range</p>
          <ul>
            {salaryRangesList.map(eachType => (
              <li key={eachType.salaryRangeId} className="salary-type">
                <div className="input-section">
                  <input
                    type="radio"
                    name="salary"
                    id={eachType.salaryRangeId}
                    className="filter-input"
                  />
                  <label htmlFor={eachType.salaryRangeId}>
                    {eachType.label}
                  </label>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default FilterGroup
