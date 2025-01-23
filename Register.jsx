import "./register.css";

export default function Register() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          
        <div className="logo">
            <div className="logo-text">MIT</div>
            <div className="divider"></div>
            <div className="subtext">
              <span>School of</span>
              <span style={{ marginLeft: "1px" }}>Distance Education</span>
            </div>
          </div>

          <h3 className="loginLogo">Engage360</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Engage360.
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Username" className="loginInput" />
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <input placeholder="Password Again" className="loginInput" />
            <button className="loginButton">Sign Up</button>
            <button className="loginRegisterButton">
              Log into Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}