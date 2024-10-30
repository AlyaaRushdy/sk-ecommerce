import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./components/products/Product";
import Cart from "./components/shared/Cart";
import Products from "./pages/Products";
import Navbar from "./components/shared/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/products" element={<Products />} />
      </Routes>
      <Cart />
    </>
  );
}

export default App;
