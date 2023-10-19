import React from 'react';
import Home from '../../pages/home/Home.jsx';
import Register from '../../pages/auth/register.jsx';
import Login from '../../pages/auth/login.jsx';
import NewProduct from '../../pages/newProduct/newProduct.jsx';
import Cart from '../../pages/cart/cart.jsx';
import Product from '../../pages/detailProduct/detailProduct.jsx'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from '../../pages/profile/profile.jsx';

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/newproduct" element={<NewProduct/>} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product" element={<Product />} />
          <Route path="/profile" element={<Profile />} />
          {/* Add other routes as needed */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Router;