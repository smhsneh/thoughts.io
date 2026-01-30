import { Routes, Route } from "react-router-dom";
import Feed from "./pages/feed/Feed";
import AdminDashboard from "./pages/admin/AdminDashboard";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";

import MainLayout from "./components/common/MainLayout";

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Feed />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}