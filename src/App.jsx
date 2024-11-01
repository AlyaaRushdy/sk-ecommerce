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


      </Routes>
      <Cart />
      <Toaster />
    </>
  );
}

export default App;
