import React from "react";
import Logo from "../../../assets/images/Fcon.jpg";
import "./Header.css";
import DropMenu from "../DropMenu/DropMenu";
import LogoHeader from "../../../assets/images/logo.svg"
import { useNavigate } from "react-router-dom";
const Header = () => {

  const navigate = useNavigate();

  /* NAVIGATE TO PAGE  ------------------- */
  const onNavRoute = (endpoint) => {
    navigate(endpoint)
  }

  return (
    <div className="Header">
      {/* Logo  */}
      <div className="navbar-header">
        <div className="logo" onClick={() => onNavRoute('/')}>
          <img src={LogoHeader} alt="header-logo-img" />
        </div>
      </div>

      {/* Dropdown menu  */}
      <div className="navbar-main">
        <DropMenu/>
      </div>

      {/* Auth header */}
      <div className="auth-header">
        <div className="auth-button register" onClick={() => onNavRoute('/register')}>
          <i class="bi bi-person"></i>
          <span>Register</span>
        </div>
        <div className="line"></div>
        <div className="auth-button login" onClick={() => onNavRoute('/login')}>
          <i class="bi bi-person-lock"></i>
          <span>Login</span>
        </div>
        <div className="project-add">
          <i class="bi bi-plus"></i>
          Post a project
        </div>
      </div>
    </div>
  );
};

export default Header;
