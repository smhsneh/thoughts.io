export default function PostCard() {
  return (
    <div className="bg-white rounded-2xl border border-soft/20 p-5 shadow-sm">
      <div className="flex gap-4">

        <div className="w-10 h-10 rounded-full bg-soft flex items-center justify-center font-semibold text-primary">
          U
        </div>
        
        <div className="flex-1">
          <div className="flex items-center gap-2 text-sm">
            <span className="text-gray-500">@username111</span>
            <span className="text-gray-500">· 2h</span>
          </div>

          <p className="mt-2 text-sm text-black">
            a short thought posted by the user
          </p>
        </div>
      </div>

      <div className="flex gap-6 text-xs text-accent mt-4 pl-14">
        <span className="cursor-pointer hover:underline">Reply</span>
        <span className="cursor-pointer hover:underline">Comment</span>
        <span className="cursor-pointer hover:underline">Like</span>
      </div>
    </div>
  );
}