import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/user/Home/Home";
import Login from "../pages/user/Login/Login";
import Register from "../pages/user/Register/Register";
import Developer from "../pages/user/Developer/Developer";
import Project from "../pages/user/Project/Project";
import About from "../pages/user/About/About";
import Blog from "../pages/user/Blog/Blog";
import BlogDetail from "../pages/user/BlogDetail/BlogDetail";

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
      <Route path="/developers" element={<Developer />} />

      {/* Project Router */}
      <Route path="/projects" element={<Project />} />

      {/* About Router */}
      <Route path="/about-us" element={<About />} />

      {/* Blogs Router */}
      <Route path="/blogs" element={<Blog />} />

      {/* Blog Detail Router */}
      <Route path="/blog/:id" element={<BlogDetail />} />

    </Routes>
  );
};

export default AppRoutes;
