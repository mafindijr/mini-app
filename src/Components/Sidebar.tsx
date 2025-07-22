import { NavLink } from "react-router-dom";
import {
  Home,
  Users,
  Settings,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

type SidebarProps = {
  collapsed: boolean;
  onToggle: () => void;
  mobile: boolean;
};



const Sidebar: React.FC<SidebarProps> = ({ collapsed, onToggle, mobile }) => {
  const links = [
    { to: "/dashboard", name: "Home", icon: <Home size={20} /> },
    { to: "/dashboard/users", name: "Users", icon: <Users size={20} /> },
    { to: "/dashboard/settings", name: "Settings", icon: <Settings size={20} /> },
  ];

  return (
    <div
      className={`${
        mobile ? "absolute top-0 left-0 h-full z-50" : "hidden md:block"
      } transition-all duration-300 bg-gray-800 text-white min-h-screen ${
        collapsed ? "w-16" : "w-64"
      }`}
    >
      <div className="flex items-center justify-between px-4 py-4">
        {!collapsed && <h2 className="text-xl font-bold">Dashboard</h2>}
        <button onClick={onToggle} className="text-gray-400 hover:text-white">
          {collapsed ? <ChevronRight /> : <ChevronLeft />}
        </button>
      </div>

      <nav className="flex flex-col gap-2 px-2">
        {links.map((link) => (
          <NavLink
            key={link.name}
            to={link.to}
            end
            className={({ isActive }) =>
              `flex items-center gap-3 p-2 rounded-md hover:bg-gray-700 transition ${
                isActive ? "bg-gray-700" : ""
              }`
            }
          >
            {link.icon}
            {!collapsed && <span>{link.name}</span>}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
