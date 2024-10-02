import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/user/Home/Home";
import Login from "../pages/user/Login/Login";
import Register from "../pages/user/Register/Register";
import Developer from "../pages/user/Developer/Developer";
import Project from "../pages/user/Project/Project";
import About from "../pages/user/About/About";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Home Router */}
      <Route path="/" element={<Home />} />

      {/* Login Router */}
      <Route path="/login" element={<Login />} />

      {/* Register Router */}
      <Route path="/register" element={<Register />} />

      {/* Developer Router */}
      <Route path="/developer" element={<Developer />} />

      {/* Project Router */}
      <Route path="/project" element={<Project />} />

      {/* About Router */}
      <Route path="/about-us" element={<About />} />

    </Routes>
  );
};

export default AppRoutes;
