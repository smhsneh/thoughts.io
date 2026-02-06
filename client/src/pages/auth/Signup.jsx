import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div className="min-h-screen bg-gradient-to-l from-white via-soft/100 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl border border-soft/30 shadow-sm p-8 w-full max-w-md space-y-6">
        {/* Title */}
        <div className="text-center space-y-1">
          <h2 className="font-header text-3xl font-bold text-primary">
            SIGN UP
          </h2>
          <p className="text-sm text-gray-500">
            create your thoughts.io account
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
            type="email"
            placeholder="EMAIL"
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
            CREATE ACCOUNT
          </button>
        </div>

        {/* Footer */}
        <p className="text-xs text-center text-gray-500">
          ALREADY HAVE AN ACCOUNT?{" "}
          <Link to="/login" className="text-accent font-semibold hover:underline">
            LOGIN
          </Link>
        </p>
      </div>
    </div>
  );
}
