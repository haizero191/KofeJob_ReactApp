import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/user/Home/Home";
import Login from "../pages/user/Login/Login";
import Register from "../pages/user/Register/Register";
import Developer from "../pages/user/Developer/Developer";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Home Router */}
      <Route path="/" element={<Home />} />

      {/* Login Router */}
      <Route path="/login" element={<Login />} />

      {/* Login Router */}
      <Route path="/register" element={<Register />} />

      {/* Login Router */}
      <Route path="/developer" element={<Developer />} />

      
    </Routes>
  );
};

export default AppRoutes;
