import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="min-h-screen bg-gradient-to-l from-white via-soft/100 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl border border-soft/30 shadow-sm p-8 w-full max-w-md space-y-6">
        {/* Title */}
        <div className="text-center space-y-1">
          <h2 className="font-header text-3xl font-bold text-primary">
            LOGIN
          </h2>
          <p className="text-sm text-gray-500">
            welcome back to thoughts.io
          </p>
        </div>

        {/* Form */}
        <div className="space-y-4">
          <input
            type="text"
            placeholder="USERNAME"
            className="w-full border border-primary/20 rounded-xl px-4 py-3 text-sm outline-none"
          />

          <input
            type="password"
            placeholder="PASSWORD"
            className="w-full border border-primary/20 rounded-xl px-4 py-3 text-sm outline-none"
          />

          <button
            className="
              w-full
              bg-accent
              text-white
              rounded-full
              py-3
              text-sm
              font-semibold
              hover:opacity-90
              transition
            "
          >
            LOGIN
          </button>
        </div>

        {/* Footer */}
        <p className="text-xs text-center text-gray-500">
          DON’T HAVE AN ACCOUNT?{" "}
          <Link to="/signup" className="text-accent font-semibold hover:underline">
            SIGN UP
          </Link>
        </p>
      </div>
    </div>
  );
}