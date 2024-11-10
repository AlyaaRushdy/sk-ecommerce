import UserRoutes from "./UserRoutes";
import Navbar from "../components/shared/Navbar";

export default function UserLayout() {
  return (
    <>
      <Navbar />
      <main>
        <UserRoutes />
      </main>
    </>
  );
}
