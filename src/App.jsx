import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./components/products/Product";
import Cart from "./components/shared/Cart";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
      </Routes>
      <Cart />
    </>
  );
}

export default App;
