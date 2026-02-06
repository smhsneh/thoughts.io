import userAvatar from "../../assets/user.jpg";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  // TEMP: simulate logged-out state
  const isLoggedIn = false;

  return (
    <aside
      className="
        h-full
        bg-white
        rounded-2xl
        border border-soft/20
        p-6
        flex flex-col
        justify-between
      "
    >
      {/* Top */}
      <div className="space-y-6">
        {/* Logo */}
        <div>
          <h1 className="font-header text-4xl font-bold text-primary">
            thoughts.io
          </h1>
          <p className="text-xs text-gray-500 mt-1">
            a calm space for thoughtful expression
          </p>
        </div>

        {/* User / Auth section */}
        {isLoggedIn ? (
          <div className="flex items-center gap-3 pt-4 border-t border-white/40">
            <img
              src={userAvatar}
              alt="User avatar"
              className="w-10 h-10 rounded-full object-cover border border-primary/20"
            />
            <div>
              <p className="text-sm font-semibold">USERNAME</p>
              <p className="text-xs text-gray-500">@uuu</p>
            </div>
          </div>
        ) : (
          <div className="pt-4 border-t border-white/40 space-y-3">
            <NavLink
              to="/login"
              className="block text-sm font-semibold text-primary hover:underline"
            >
              LOGIN
            </NavLink>
            <NavLink
              to="/signup"
              className="block text-sm font-semibold text-primary hover:underline"
            >
              SIGN UP
            </NavLink>
          </div>
        )}

        {/* Navigation */}
        <nav className="flex flex-col gap-3 text-sm pt-4">
          <NavLink to="/" className="font-semibold">
            Home
          </NavLink>
          <NavLink to="/profile" className="text-gray-500">
            Profile
          </NavLink>
          <NavLink to="/admin" className="text-gray-500">
            Admin Dashboard
          </NavLink>
        </nav>
      </div>

      {/* Footer */}
      <div className="text-xs text-gray-400">thoughts.io</div>
    </aside>
  );
}