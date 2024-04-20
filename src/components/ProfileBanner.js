import "./ProfileBanner.css";

const ProfileBanner = () => {
  return (
    <div className="profile-banner">
      <div className="banner-images">
        <img className="banner-image1" alt="" src="/banner-image1.png" />
        <div className="banner-image-group">
          <img className="banner-image2" alt="" src="/banner-image2.png" />
        </div>
      </div>
      <div className="doctor-details">
        <div className="details-wrapper" />
        <div className="name-rating-details">
          <div className="details-container">
            <div className="name-container">
              <div className="frame-parent38">
                <div className="doctor-name-wrapper">
                  <div className="doctor-name">Dr. Bruce Willis</div>
                </div>
                <div className="polygon-parent">
                  <img className="polygon-icon" alt="" src="/polygon-1.svg" />
                  <img
                    className="frame-icon3"
                    loading="lazy"
                    alt=""
                    src="/frame1.svg"
                  />
                </div>
              </div>
            </div>
            <div className="specialization-container">
              <div className="doctor-specialization-wrapper">
                <div className="doctor-specialization">Gynecologist</div>
              </div>
              <div className="ratings-container">
                <div className="wrapper">
                  <div className="rating-value">4.2</div>
                </div>
                <div className="stars-parent">
                  <img className="stars-icon" alt="" src="/stars.svg" />
                  <img
                    className="stars-icon1"
                    loading="lazy"
                    alt=""
                    src="/stars-1.svg"
                  />
                </div>
                <img
                  className="stars-icon2"
                  loading="lazy"
                  alt=""
                  src="/stars-1.svg"
                />
                <img
                  className="stars-icon3"
                  loading="lazy"
                  alt=""
                  src="/stars-3.svg"
                />
              </div>
            </div>
          </div>
          <div className="insta-details">
            <div className="insta-details-container">
              <div className="heading-5-followers-parent">
                <div className="followers-heading">Followers</div>
                <div className="heading-4-850-wrapper">
                  <div className="followers-value">850</div>
                </div>
              </div>
              <div className="heading-5-following-parent">
                <div className="following-heading">Following</div>
                <div className="heading-4-18k-wrapper">
                  <div className="following-value">18K</div>
                </div>
              </div>
              <div className="heading-5-posts-parent">
                <div className="posts-heading">Posts</div>
                <div className="posts-value">250</div>
              </div>
            </div>
          </div>
        </div>
        <div className="book-an-appointment-container">
          <button className="book-an-appointment-wrapper">
            <div className="book-an-appointment">Book an Appointment</div>
          </button>
        </div>
      </div>
      <img
        className="profile-image"
        loading="lazy"
        alt=""
        src="/profileImage.png"
      />
    </div>
  );
};

export default ProfileBanner;
