import { Routes, Route } from "react-router-dom";
import Home from "./UserSrc/pages/Home";
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
      <Toaster />
    </>
  );
}

export default App;
