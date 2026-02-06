export default function ReplyCard({ reply, onDelete }) {
  if (!reply?.author?.username) return null;

  return (
    <div className="bg-white rounded-xl border border-primary/20 p-4">
      <div className="flex justify-between items-center">
        <p className="font-header text-primary text-sm">
          @{reply.author.username}
        </p>

        {onDelete && (
          <button
            onClick={() => onDelete(reply._id)}
            className="text-xs text-warning hover:underline"
          >
            Delete
          </button>
        )}
      </div>

      <p className="text-sm mt-1 text-black">{reply.content}</p>
    </div>
  );
}