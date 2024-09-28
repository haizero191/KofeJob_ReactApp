import React from "react";
import "./DropMenu.css";
import { useNavigate } from "react-router-dom";

const DropMenu = () => {

  // Employers Data  
  const employers = [
    {
      sub: "Freelancer",
      href: "/",
      ref: [
        {
          sub: "Freelancer List",
          href: "/",
        },
      ],
    },
    {
      sub: "Dashboard",
      ref: [],
    },
    {
      sub: "My profile",
      ref: [],
    },
    {
      sub: "Projects",
      ref: [],
    },
    {
      sub: "Membership",
      ref: [],
    },
    {
      sub: "Milestones",
      ref: [],
    },
    {
      sub: "Chats",
      ref: [],
    },
    {
      sub: "Review",
      ref: [],
    },
    {
      sub: "Payments",
      ref: [],
    },
    {
      sub: "Setting",
      ref: [],
    },
  ];

  // Freelancers Data 
  const freelancer = [
    {
      sub: "Dashboard",
      ref: [],
    },
    {
      sub: "My profile",
      ref: [],
    },
    {
      sub: "Projects",
      ref: [],
    },
    {
      sub: "Membership",
      ref: [],
    },
    {
      sub: "Change Password",
      ref: [],
    },
    {
      sub: "Chats",
      ref: [],
    },
    {
      sub: "Review",
      ref: [],
    },
    {
      sub: "Payments",
      ref: [],
    },
    {
      sub: "Setting",
      ref: [],
    },
  ];

  // Blogs Data 
  const blogs = [
    {
      sub: "Blog list",
      ref: [],
    }
  ];

  const navigate = useNavigate();

  /* NAVIGATE TO PAGE  ------------------- */
  const onNavRoute = (endpoint) => {
    navigate(endpoint);
  };

  return (
    <div className="DropMenu">
      <div className="nav-list">
        <div className="nav-item nav-dropmenu" onClick={() => onNavRoute("/")}>
          <span>Home</span>
        </div>

        {/* Employees */}
        <div className="nav-item nav-dropmenu">
          <span>For employers</span>
          <i class="bi bi-chevron-down"></i>
          <div className="nav-menu-container">
            {employers.map((emp) => {
              return (
                <div
                  className={
                    "sub-nav-item" + (emp.ref.length > 0 ? " sub-nav-drop" : "")
                  }
                >
                  {emp.sub}
                  {emp.ref.length > 0 && <i class="bi bi-chevron-right"></i>}
                  {emp.ref.length > 0 && (
                    <div className="nav-ref-container">
                      {emp.ref.map((refer) => {
                        return <div className="sub-nav-item">{refer.sub}</div>;
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>


        {/* Freelancer */}
        <div className="nav-item nav-dropmenu">
          <span>For freelancer</span>
          <i class="bi bi-chevron-down"></i>
          <div className="nav-menu-container">
            {freelancer.map((emp) => {
              return (
                <div
                  className={
                    "sub-nav-item" + (emp.ref.length > 0 ? " sub-nav-drop" : "")
                  }
                >
                  {emp.sub}
                  {emp.ref.length > 0 && <i class="bi bi-chevron-right"></i>}
                  {emp.ref.length > 0 && (
                    <div className="nav-ref-container">
                      {emp.ref.map((refer) => {
                        return <div className="sub-nav-item">{refer.sub}</div>;
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="nav-item nav-dropmenu">
          <span>Pages</span>
          <i class="bi bi-chevron-down"></i>
          <div className="nav-menu-container"></div>
        </div>
        {/* Freelancer */}
        <div className="nav-item nav-dropmenu">
          <span>Blogs</span>
          <i class="bi bi-chevron-down"></i>
          <div className="nav-menu-container">
            {blogs.map((emp) => {
              return (
                <div
                  className={
                    "sub-nav-item" + (emp.ref.length > 0 ? " sub-nav-drop" : "")
                  }
                >
                  {emp.sub}
                  {emp.ref.length > 0 && <i class="bi bi-chevron-right"></i>}
                  {emp.ref.length > 0 && (
                    <div className="nav-ref-container">
                      {emp.ref.map((refer) => {
                        return <div className="sub-nav-item">{refer.sub}</div>;
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
        <div className="nav-item nav-dropmenu">
          <span>Admin console</span>
        </div>
      </div>
    </div>
  );
};

export default DropMenu;
