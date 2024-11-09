import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Customers from './Customers'
import OrderDetails from './OrderDetails'
import Orders from './Orders'
import Products from './Products';
import SingleProduct from './SingleProduct';

export default function AdminRoutes() {
  return <>
  



  <Routes>
        <Route path="customer" element={<Customers />} />
        <Route path="order/:id" element={<OrderDetails />} />
        <Route path="orders" element={<Orders />} />
        <Route path="products" element={<Products />} />
        <Route path="products/:id" element={<SingleProduct />} />

      </Routes>
  </>
}
