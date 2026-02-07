import { NavLink } from "react-router-dom";
import {
  Home,
  Lightbulb,
  Users,
  Inbox,
  Plus,
  Headset,
  LayoutGrid,
  GitBranch,
  Database,
  RefreshCcw,
  BarChart3,
  Settings,

} from "lucide-react";



const navItems = [
  { icon: Home, path: "/", label: "Dashboard" },
  { icon: Lightbulb, path: "/knowledgebase", label: "Knowledge Base" },
  { icon: Inbox, path: "/tickets", label: "Tickets" },
  { icon: Plus, path: "/create-ticket", label: "Create Ticket" },
    { icon: Headset, path: "/support", label: "Support" },
    { icon: LayoutGrid, path: "/projects", label: "Projects" },
    { icon: GitBranch, path: "/branches", label: "Branches" },
    { icon: Database, path: "/database", label: "Database" },
        { icon: RefreshCcw, path: "/activity", label: "Activity" },
  { icon: Users, path: "/users", label: "Users" },
  { icon: BarChart3, path: "/reports", label: "Reports" },
  { icon: Settings, path: "/settings", label: "Settings" },
 
];

export default function Sidebar() {
  return (
    <aside className="bg-blue-900 w-12 h-full text-white flex flex-col items-center py-4 gap-2">

      {navItems.map(({ icon: Icon, path, label }) => (
        <NavLink
          key={path}
          to={path}
          title={label}
          className={({ isActive }) =>
            `p-2 rounded transition ${
              isActive ? "bg-blue-700" : "hover:bg-blue-800"
            }`
          }
        >
          <Icon size={18} />
        </NavLink>
      ))}
    </aside>
  );
}
