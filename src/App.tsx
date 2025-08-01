import { Routes, Route } from "react-router-dom";
import DashboardLayout from "./Layouts/DashboardLayout";
import DashboardHome from "./pages/DashboardHome";
import Users from "./pages/Users";
import Settings from "./pages/Settings";

function App() {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<DashboardHome />} />
        <Route path="users" element={<Users />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}

export default App;
