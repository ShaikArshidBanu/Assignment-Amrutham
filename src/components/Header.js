import "./Header.css";

const Header = () => {
  return (
    <header className="frame-header">
      <div className="nav-container" />
      <div className="nav-elements">
        <div className="logo-group">
          <img
            className="logo"
            loading="lazy"
            alt=""
            src="/logo.png"
          />
          <nav className="home-group">
            <div className="home1">Home</div>
            <div className="find-doctors1">find doctors</div>
            <div className="about-us1">{`About us `}</div>
          </nav>
        </div>
        <div className="login-signup-button-container">
          <button className="login-container">
            <div className="login1">Login</div>
          </button>
          <button className="sign-up-container">
            <div className="sign-up1">Sign-up</div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
