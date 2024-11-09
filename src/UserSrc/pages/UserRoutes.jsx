import React from 'react';
import ProductDetails from './ProductDetails';
import Products from './Products';
import RefundPolicy from './RefundPolicy';
import Contact from './Contact';
import Login from './Login';
import Register from './Register';
import Account from './Account';
import { Route, Routes } from 'react-router-dom';

export default function UserRoutes() {
  return (
    <>
      <Routes>

        <Route path="products" element={<Products />} />
        <Route path="product/:id" element={<ProductDetails />} />
        <Route path="refundpolicy" element={<RefundPolicy />} />
        <Route path="contact" element={<Contact />} />

        <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
        <Route
          path="bodyOils"
          element={
            <Products
              url={"http://localhost:5000/categories/code/bodyOils"}
              h1Text="Body Oils"
            />
          }
        />
        <Route
          path="masks"
          element={
            <Products
              url={"http://localhost:5000/categories/code/masks"}
              h1Text="Masks"
            />
          }
        />
        <Route
          path="allproducts"
          element={
            <Products
              url={"http://localhost:5000/products/"}
              h1Text="All Products"
            />
          }
        />

         <Route
          path="/account"
          element={
            <Account
              url={"http://localhost:5000/account/"}
              h1Text="Account Page"
            />
          }
        />
      </Routes>
    </>
  );
}
