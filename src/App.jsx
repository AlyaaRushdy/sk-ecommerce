import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./components/shared/Cart";
import Products from "./pages/Products";
import Navbar from "./components/shared/Navbar";
import { Toaster } from "./components/ui/toaster";
import ProductDetails from "./pages/ProductDetails";
import RefundPolicy from "./pages/RefundPolicy";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/refundpolicy" element={<RefundPolicy />} />
        <Route
          path="/bodyOils"
          element={
            <Products
              url={"http://localhost:5000/categories/code/bodyOils"}
              h1Text="Body Oils"
            />
          }
        />
        <Route
          path="/masks"
          element={
            <Products
              url={"http://localhost:5000/categories/code/masks"}
              h1Text="Masks"
            />
          }
        />
        <Route
          path="/allproducts"
          element={
            <Products
              url={"http://localhost:5000/products/"}
              h1Text="All Products"
            />
          }
        />
      </Routes>
      <Cart />
      <Toaster />
    </>
  );
}

export default App;
