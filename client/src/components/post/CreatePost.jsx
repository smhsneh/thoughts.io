export default function CreatePost() {
  return (
    <div className="bg-white rounded-2xl border border-soft/20 p-5 shadow-sm">
      <div className="flex gap-4">

        <div className="w-10 h-10 rounded-full bg-soft flex items-center justify-center font-semibold text-primary">
          U
        </div>

        <div className="flex-1">
          <textarea
            placeholder="Share your thoughts"
            className="
              w-full
              resize-none
              outline-none
              text-sm
              text-black
              placeholder-gray-500
              bg-transparent
            "
            rows={3}
          />

          <div className="flex justify-end mt-4">
          <button
  className="
    bg-soft
    text-black
    px-5 py-2
    rounded-full
    text-sm
    font-semibold
    hover:opacity-90
    transition
  "
>
  Post
</button>
          </div>
        </div>
      </div>
    </div>
  );
}