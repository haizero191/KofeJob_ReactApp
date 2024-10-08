import React, { useState } from "react";
import "./Login.css";
import Logo from "../../../assets/images/logo.svg";
import GoogleSVG from "../../../assets/images/icon/google-icon.svg";
import FacebookSVG from "../../../assets/images/icon/fb-icon.svg";
import AppleSVG from "../../../assets/images/icon/ios-icon.svg";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [inputTypeHidden, setInputTypeHidden] = useState({
    password: true,
  });

  const navigate = useNavigate();

  /* PASSWORD TYPE INPUT TOGGLE ------------------- */
  const toggleHidden = (name) => {
    var inputType = inputTypeHidden;
    inputType[name] = !inputType[name];

    console.log(name, inputTypeHidden);

    setInputTypeHidden({ ...inputType });
  };

  /* ON NAVIGATE TO PAGE ------------------- */
  const onNavRoute = (endpoint) => {
    navigate(endpoint);
  };

  return (
    <div className="Login">
      <div className="background-wrapper"></div>
      <div className="login-content">
        <div className="login-header">
          <div className="logo">
            <img src={Logo} alt="logo" />
          </div>
          <p>Welcome! Nice to see you again</p>
        </div>
        <div className="login-form">
          <div className="form-input">
            <div className="input-block">
              <label className="focus-label">
                Email Address <span className="label-star"> *</span>
              </label>
              <input type="text" className="form-control floating" />
            </div>
            <div className="input-block">
              <label className="focus-label">
                Password <span className="label-star"> *</span>
              </label>
              <div className="position-relative">
                <input
                  type={inputTypeHidden.password ? "password" : "text"}
                  className="form-control floating pass-input"
                />
                <div
                  className="password-icon"
                  onClick={() => toggleHidden("password")}
                >
                  {inputTypeHidden.password ? (
                    <i className="bi bi-eye-slash"></i>
                  ) : (
                    <i class="bi bi-eye"></i>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="login-button">
            <button>Login now</button>
          </div>
          <div className="actions">
            <div className="action-line">
              <span>OR</span>
            </div>
            <div className="action-socials">
              <div className="social-btn">
                <div className="social-icon">
                  <img src={GoogleSVG} alt="icon social"/>
                </div>
                <span>Google</span>
              </div>
              <div className="social-btn">
                <div className="social-icon">
                  <img src={FacebookSVG} alt="icon social"/>
                </div>
                <span>Facebook</span>
              </div>
              <div className="social-btn">
                <div className="social-icon">
                  <img src={AppleSVG} alt="icon social"/>
                </div>
                <span>Apple</span>
              </div>
            </div>
            <div className="action-options">
              <div>
                Have you an account yet ?{" "}
                <span className="signup-link" onClick={() => onNavRoute("/register")}>Signup</span>
              </div>
              <div className="forgot-password">
                <span>Forgot password </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
