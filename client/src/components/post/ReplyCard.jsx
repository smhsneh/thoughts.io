import { useState } from "react";
import { Heart, Reply } from "lucide-react";

export default function ReplyCard({ reply }) {
  const [liked, setLiked] = useState(false);
  const [showReply, setShowReply] = useState(false);
  const [text, setText] = useState("");

  return (
    <div className="bg-white rounded-xl border border-primary/30 p-4 ml-6">
      <div className="flex items-center gap-2 text-sm">
        <span className="font-header text-primary">
          @{reply.author}
        </span>
      </div>

      <p className="text-sm mt-1 text-black">
        {reply.content}
      </p>

      <div className="flex items-center gap-4 text-xs text-accent mt-3">
        <button
          onClick={() => setLiked(!liked)}
          className="flex items-center gap-1"
        >
          <Heart
            size={12}
            className={
              liked
                ? "fill-red-500 text-red-500"
                : "text-accent"
            }
          />
          <span>{liked ? "Liked" : "Like"}</span>
        </button>

        <button
          onClick={() => setShowReply(!showReply)}
          className="flex items-center gap-1"
        >
          <Reply size={12} />
          <span>Reply</span>
        </button>
      </div>

      {showReply && (
        <div className="mt-3">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Reply to this comment..."
            rows={2}
            className="w-full text-sm border border-primary/20 rounded-lg p-2 outline-none"
          />
          <div className="flex justify-end mt-2">
            <button
              onClick={() => {
                setText("");
                setShowReply(false);
              }}
              className="bg-accent text-white px-3 py-1 rounded-full text-xs font-semibold hover:opacity-90"
            >
              Reply
            </button>
          </div>
        </div>
      )}
    </div>
  );
}