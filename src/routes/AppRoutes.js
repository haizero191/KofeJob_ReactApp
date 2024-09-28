import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/user/Home/Home";
import Login from "../pages/user/Login/Login";
import Register from "../pages/user/Register/Register";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Home Router */}
      <Route path="/" element={<Home />} />

      {/* Login Router */}
      <Route path="/login" element={<Login />} />

      {/* Login Router */}
      <Route path="/register" element={<Register />} />

      {/* Products of store router */}
      {/* <Route path="/products" element={<ProductLayout />}></Route>
      <Route path="/products/view/:id" element={<ProductDetail />}></Route> */}

      {/* Checkout router */}
      {/* <Route path="/checkout" element={<Checkout />}></Route> */}

      {/* Post-purchase page */}
      {/* <Route path="/thanks" element={<PostPurchase />}></Route> */}

      {/* About page */}
      {/* <Route path="/about" element={<About />}></Route> */}

      {/* About page */}
      {/* <Route path="/update" element={<Update/>}></Route> */}
    </Routes>
  );
};

export default AppRoutes;
