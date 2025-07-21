import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
import { Menu } from "lucide-react";

const DashboardLayout = () => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

  useEffect(() => {
    const saved: string | null = localStorage.getItem("sidebar-collapsed");
    if (saved !== null) {
      setIsCollapsed(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("sidebar-collapsed", JSON.stringify(isCollapsed));
  }, [isCollapsed]);

  return (
    <div className="flex min-h-screen">
      {/* Desktop Sidebar */}
      <Sidebar collapsed={isCollapsed} onToggle={() => setIsCollapsed(!isCollapsed)} mobile={false} />

      {/* Mobile Sidebar */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-black/50 md:hidden" onClick={() => setMobileOpen(false)}>
          <Sidebar collapsed={false} onToggle={() => setIsCollapsed(!isCollapsed)} mobile />
        </div>
      )}

      {/* Main */}
      <div className="flex-1 p-4">
        <button className="md:hidden mb-4" onClick={() => setMobileOpen(!mobileOpen)}>
          <Menu />
        </button>
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
