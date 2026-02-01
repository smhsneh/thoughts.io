import { useState } from "react";
import { Heart, Reply, AlertTriangle, EyeOff } from "lucide-react";

export default function ReplyCard({ reply }) {
  const [liked, setLiked] = useState(false);
  const [showReply, setShowReply] = useState(false);
  const [text, setText] = useState("");
  const [showHidden, setShowHidden] = useState(false);

  if (reply.status === "hidden") {
    return (
      <div className="bg-red-50 border border-red-300 rounded-xl p-4 ml-6">
        <div className="flex items-center gap-2 text-red-600 text-sm">
          <EyeOff size={14} />
          <span>This reply has been hidden due to policy violations.</span>
        </div>

        <button
          onClick={() => setShowHidden(!showHidden)}
          className="mt-2 text-xs text-red-500 hover:underline"
        >
          {showHidden ? "Hide content" : "See more"}
        </button>

        {showHidden && (
          <p className="mt-2 text-sm text-red-700">
            {reply.content}
          </p>
        )}
      </div>
    );
  }

  return (
    <div
      className={`rounded-xl p-4 ml-6 border ${
        reply.status === "flagged"
          ? "border-red-400 bg-red-50"
          : "border-primary/30 bg-white"
      }`}
    >
      <div className="flex items-center gap-2 text-sm">
        <span className="font-header text-primary">
          @{reply.author}
        </span>

        {reply.status === "flagged" && (
          <span className="flex items-center gap-1 text-red-600 text-xs">
            <AlertTriangle size={12} />
            Flagged
          </span>
        )}
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