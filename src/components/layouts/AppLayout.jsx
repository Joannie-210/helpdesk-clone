import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import TopLayout from "./TopLayout";
// import IconBar from "../../columns/IconBar";
// import TicketSidebar from "../../columns/TicketSidebar";
// import Inspector from "../../columns/Inspector";
import MainField from "../MainField";

const AppLayout = () => {
  return (
    <div className="h-screen w-full flex flex-col bg-slate-100">
      {/* Top bar */}
      <TopLayout />

      {/* Main body */}
      <div className="flex flex-1 overflow-hidden bg-blue-900">

        {/* Icon / Sidebar */}
        <aside className="flex items-start justify-center pt-4">
          <Sidebar />
        </aside>

        {/* Ticket List */}
        <aside className="bg-white rounded-tl-3xl w-full overflow-y-auto">
          <MainField />
        </aside>

      </div>
    </div>
  );
};

export default AppLayout;
