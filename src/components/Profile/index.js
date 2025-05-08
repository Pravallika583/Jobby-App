import './index.css'
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'

const apiStatusProfileConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}
class Profile extends Component {
  state = {
    profileData: {},
    apiProfileStatus: apiStatusProfileConstants.inProgress,
  }

  componentDidMount() {
    this.renderProfile()
  }

  onProfileDataSuccess = ProfileDetails => {
    const ModifiedProfileData = {
      name: ProfileDetails.name,
      profileImageUrl: ProfileDetails.profile_image_url,
      shortBio: ProfileDetails.short_bio,
    }
    this.setState({
      profileData: ModifiedProfileData,
      apiProfileStatus: apiStatusProfileConstants.success,
    })
  }

  onProfileDataFailure = () => {
    this.setState({apiProfileStatus: apiStatusProfileConstants.failure})
  }

  renderProfile = async () => {
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch('https://apis.ccbp.in/profile', options)
    const data = await response.json()
    if (response.ok === true) {
      this.onProfileDataSuccess(data.profile_details)
    } else {
      this.onProfileDataFailure()
    }
  }

  renderProfileDetails = () => {
    const {profileData} = this.state
    const {name, profileImageUrl, shortBio} = profileData
    return (
      <div className="profile-container">
        <div className="profile-details">
          <img src={profileImageUrl} alt="profile" className="profile-image" />
          <h1 className="profile-name">{name}</h1>
          <p className="profile-bio">{shortBio}</p>
        </div>
      </div>
    )
  }

  renderLoadingView = () => (
    <div className="profile-container">
      <div className="profile-loader-container" data-testid="loader">
        <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
      </div>
    </div>
  )

  renderProfileFailureView = () => (
    <div className="retry-container">
      <button
        onClick={this.renderProfile}
        type="button"
        className="retry-button"
      >
        Retry
      </button>
    </div>
  )

  render() {
    const {apiProfileStatus} = this.state

    switch (apiProfileStatus) {
      case apiStatusProfileConstants.success:
        return this.renderProfileDetails()
      case apiStatusProfileConstants.failure:
        return this.renderProfileFailureView()
      case apiStatusProfileConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }
}

export default Profile
