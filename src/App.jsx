import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./components/products/Product"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product/>} />
      </Routes>
    </>
  );
}

export default App;
