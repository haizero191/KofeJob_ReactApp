import React, { useState } from "react";
import Logo from "../../../assets/images/logo.svg";
import GoogleSVG from "../../../assets/images/icon/google-icon.svg";
import FacebookSVG from "../../../assets/images/icon/fb-icon.svg";
import AppleSVG from "../../../assets/images/icon/ios-icon.svg";
import { useNavigate } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const [inputTypeHidden, setInputTypeHidden] = useState({
    password: true,
    confirm: true,
  });

  const navigate = useNavigate();

  const [formType, setFormType] = useState("freelancer")

  /* PASSWORD TYPE INPUT TOGGLE ------------------- */
  const toggleHidden = (name) => {
    var inputType = inputTypeHidden;
    inputType[name] = !inputType[name];
    setInputTypeHidden({ ...inputType });
  };

  /* FORM TYPE INPUT CHANGE ------------------- */
  const onChangeFormType = (type) => {
    setFormType(type)
  }

  /* NAVIGATE TO PAGE  ------------------- */
  const onNavRoute = (endpoint) => {
    navigate(endpoint)
  }

  return (
    <div className="Register">
      <div className="register-content">
        <div className="register-header">
          <div className="logo">
            <img src={Logo} alt="logo" />
          </div>
          <p>We love to see you joining our community</p>
          <div className="register-options">
            <button onClick={() => onChangeFormType("freelancer")} className={formType === "freelancer" && "form-active"}>Freelancer</button>
            <button onClick={() => onChangeFormType("company")} className={formType === "company" && "form-active"}>Company</button>
          </div>
        </div>

        
        <div className="register-form">
          <div className="form-input">
            <div class="input-block">
              <label class="focus-label">
                Username <span class="label-star"> *</span>
              </label>
              <input type="text" class="form-control floating" />
            </div>
            <div class="input-block">
              <label class="focus-label">
                Email <span class="label-star"> *</span>
              </label>
              <input type="text" class="form-control floating" />
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
            <div className="input-block">
              <label className="focus-label">
                Confirm Password <span className="label-star"> *</span>
              </label>
              <div className="position-relative">
                <input
                  type={inputTypeHidden.confirm ? "password" : "text"}
                  className="form-control floating pass-input"
                />
                <div
                  className="password-icon"
                  onClick={() => toggleHidden("confirm")}
                >
                  {inputTypeHidden.confirm ? (
                    <i className="bi bi-eye-slash"></i>
                  ) : (
                    <i class="bi bi-eye"></i>
                  )}
                </div>
              </div>
            </div>
            <div className="input-block input-check">
              <div className="position-relative">
                <input type="checkbox" className="checkmark"/>
                <span>I have read and agree to all <a href>Terms & Conditions</a></span>
              </div>
            </div>
          </div>
          <div className="register-button">
            <button>
              register now <i class="bi bi-arrow-right-short"></i>
            </button>
          </div>
          <div className="actions">
            <div className="action-line">
              <span>OR</span>
            </div>
            <div className="action-socials">
              <div className="social-btn">
                <div className="social-icon">
                  <img src={GoogleSVG} alt="google-icon" />
                </div>
                <span>Google</span>
              </div>
              <div className="social-btn">
                <div className="social-icon">
                  <img src={FacebookSVG} alt="facebook-icon" />
                </div>
                <span>Facebook</span>
              </div>
              <div className="social-btn">
                <div className="social-icon">
                  <img src={AppleSVG} alt="ios-icon" />
                </div>
                <span>Apple</span>
              </div>
            </div>
            <div className="action-options">
              <div>
                Already have account ?{" "}
                <span className="signup-link" onClick={() => onNavRoute("/login")}>Sign in</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
