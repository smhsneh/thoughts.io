export default function Profile() {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    return <p className="text-center mt-20">Please login</p>;
  }

  return (
    <div className="max-w-md mx-auto mt-16 bg-white p-6 rounded-2xl border">
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 rounded-full bg-soft flex items-center justify-center text-2xl font-bold">
          {user.username.charAt(0).toUpperCase()}
        </div>

        <div>
          <p className="font-header text-xl">{user.name || "User"}</p>
          <p className="text-gray-500">@{user.username}</p>
        </div>
      </div>
    </div>
  );
}