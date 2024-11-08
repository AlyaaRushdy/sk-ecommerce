import { Routes, Route } from "react-router-dom";
import Navbar from "./components/shared/Navbar";
import Cart from "./components/shared/Cart";
import { Toaster } from "./components/ui/toaster";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import RefundPolicy from "./pages/RefundPolicy";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/register";
import Account from "./pages/Account";

const productsPaths = [
  {
    path: "/bodyOils",
    url: "http://localhost:5000/categories/code/bodyOils",
    h1Text: "Body Oils",
  },
  {
    path: "/masks",
    url: "http://localhost:5000/categories/code/masks",
    h1Text: "Masks",
  },
  {
    path: "/allproducts",
    url: "http://localhost:5000/products/",
    h1Text: "All Products",
  },
];

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {productsPaths.map((route, i) => {
          return (
            <Route
              path={route.path}
              element={<Products h1Text={route.h1Text} url={route.url} />}
              key={i}
            />
          );
        })}
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/refundpolicy" element={<RefundPolicy />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
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
      <Cart />
      <Toaster />
    </>
  );
}

export default App;
