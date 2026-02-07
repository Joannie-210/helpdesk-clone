import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import TopLayout from "./TopLayout";

const AppLayout = () => {
  return (
    <div className="h-screen w-full flex flex-col">
      {/* Top bar */}
      <TopLayout />

      {/* Middle section */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="w-12 bg-blue-900">
          <Sidebar />
        </aside>

        {/* Page section ONLY */}
        <section className="flex-1 overflow-y-auto bg-gray-50 p-4">
          <Outlet />
        </section>
      </div>
    </div>
  );
};

export default AppLayout;
