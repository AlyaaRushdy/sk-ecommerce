import AdminRoutes from "./AdminRoutes";
import Sidebar from "../components/shared/Sidebar";

export default function AdminLayout() {
  return (
    <>
      <Sidebar />
      <main className="w-full sm:w-[calc(100%-6rem)] md:w-[calc(100%-7rem)] ml-auto  min-h-screen">
        <AdminRoutes />
      </main>
    </>
  );
}
