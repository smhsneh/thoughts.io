import userAvatar from "../../assets/user.jpg";
export default function Sidebar() {
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
      <div className="space-y-4">
        <div>
          <h1 className="font-header text-4xl font-bold text-primary">
            thoughts.io
          </h1>
          <p className="text-xs text-gray-500 mt-1">
            a calm space for thoughtful expression
          </p>
        </div>

        <div className="flex items-center gap-3 pt-4 border-t border-white/40">
          <img
            src={userAvatar}
            alt="User avatar"
            className="w-10 h-10 rounded-full object-cover border border-primary/20"
          />
          <div>
            <p className="text-sm font-semibold">username</p>
            <p className="text-xs text-gray-500">@uuu</p>
          </div>
        </div>

        <nav className="flex flex-col gap-3 text-sm pt-2">
          <span className="font-semibold">home</span>
          <span className="text-gray-500">profile</span>
          <span className="text-gray-500">admin</span>
        </nav>
      </div>

      <div className="text-xs text-gray-400">thoughts</div>
    </aside>
  );
}
