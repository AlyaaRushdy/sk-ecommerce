// import { Routes, Route } from "react-router-dom";
// import Navbar from "./UserSrc/components/shared/Navbar";
// import Cart from "./UserSrc/components/shared/Cart";
// import { Toaster } from "./components/ui/toaster";
// import Home from "./UserSrc/pages/Home";
// import Products from "./UserSrc/pages/Products";
// import ProductDetails from "./UserSrc/pages/ProductDetails";
// import RefundPolicy from "./UserSrc/pages/RefundPolicy";
// import Contact from "./UserSrc/pages/Contact";
// import Login from "./UserSrc/pages/Login";
// import Register from "./UserSrc/pages/Register";
// import Account from "./UserSrc/pages/Account";

// const productsPaths = [
//   {
//     path: "/bodyOils",
//     url: "http://localhost:5000/categories/code/bodyOils",
//     h1Text: "Body Oils",
//   },
//   {
//     path: "/masks",
//     url: "http://localhost:5000/categories/code/masks",
//     h1Text: "Masks",
//   },
//   {
//     path: "/allproducts",
//     url: "http://localhost:5000/products/",
//     h1Text: "All Products",
//   },
// ];

// function App() {
//   return (
//     <>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         {productsPaths.map((route, i) => {
//           return (
//             <Route
//               path={route.path}
//               element={<Products h1Text={route.h1Text} url={route.url} />}
//               key={i}
//             />
//           );
//         })}
//         <Route path="/product/:id" element={<ProductDetails />} />
//         <Route path="/refundpolicy" element={<RefundPolicy />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route
//           path="/account"
//           element={
//             <Account
//               url={"http://localhost:5000/account/"}
//               h1Text="Account Page"
//             />
//           }
//         />
//       </Routes>
//       <Cart />
//       <Toaster />
//     </>
//   );
// }

// export default App;





import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./UserSrc/pages/Home";
import Cart from "./UserSrc/components/shared/Cart";
import { Toaster } from "./components/ui/toaster";
import UserLayout from "./UserSrc/pages/UserLayout";
import AdminLayout from "./AdminSrc/pages/AdminLayout";
function App() {
  return (
    <>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/*" element={<UserLayout />} />
        <Route path="/admin/*" element={<AdminLayout />} />
      </Routes>
      <Cart />
      <Toaster />
    </>
  );
}

export default App;
