import ProductDetails from "./ProductDetails";
import Products from "./Products";
import RefundPolicy from "./RefundPolicy";
import Contact from "./Contact";
import Login from "./Login";
import Register from "./Register";
import Account from "./Account";
import { Route, Routes } from "react-router-dom";

const productsPaths = [
  {
    path: "bodyOils",
    url: "http://localhost:5000/categories/code/bodyOils",
    h1Text: "Body Oils",
  },
  {
    path: "masks",
    url: "http://localhost:5000/categories/code/masks",
    h1Text: "Masks",
  },
  {
    path: "allproducts",
    url: "http://localhost:5000/products/",
    h1Text: "All Products",
  },
];

export default function UserRoutes() {
  return (
    <>
      <Routes>
        {productsPaths.map((route, i) => {
          return (
            <Route
              path={route.path}
              element={<Products h1Text={route.h1Text} url={route.url} />}
              key={i}
            />
          );
        })}
        <Route path="product/:id" element={<ProductDetails />} />
        <Route path="refundpolicy" element={<RefundPolicy />} />
        <Route path="contact" element={<Contact />} />
        <Route path="account" element={<Account />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </>
  );
}
