import { useState } from "react";
import { Heart, Reply } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function PostCard({ post, onDelete }) {
  const [liked, setLiked] = useState(false);
  const [showReply, setShowReply] = useState(false);
  const [replyText, setReplyText] = useState("");

  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-2xl border-2 border-soft/70 p-5 shadow-sm">
      <div className="flex gap-4">
        <div className="w-10 h-10 rounded-full bg-soft flex items-center justify-center font-semibold text-primary">
          {post.author.charAt(0).toUpperCase()}
        </div>

        <div className="flex-1">
          <div className="flex items-center justify-between text-sm">
            <div className="flex gap-2">
              <span className="font-header text-primary">
                @{post.author}
              </span>
              <span className="text-gray-500">· {post.time}</span>
            </div>

            {onDelete && (
              <button
                onClick={() => onDelete(post.id)}
                className="text-xs text-warning hover:underline"
              >
                Delete
              </button>
            )}
          </div>

          <p className="mt-2 text-sm text-black">
            {post.content}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-6 text-xs text-accent mt-4 pl-14">
        <button
          onClick={() => setLiked(!liked)}
          className="flex items-center gap-1"
        >
          <Heart
            size={14}
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
          <Reply size={14} />
          <span>Reply</span>
        </button>

        <button
          onClick={() => navigate(`/post/${post.id}`)}
          className="hover:underline"
        >
          See more
        </button>
      </div>

      {showReply && (
        <div className="mt-4 pl-14">
          <textarea
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
            placeholder="Write a reply..."
            rows={2}
            className="
              w-full
              text-sm
              border
              border-primary/20
              rounded-lg
              p-2
              outline-none
            "
          />
          <div className="flex justify-end mt-2">
            <button
              onClick={() => {
                setReplyText("");
                setShowReply(false);
              }}
              className="
                bg-accent
                text-white
                px-4 py-1
                rounded-full
                text-xs
                font-semibold
                hover:opacity-90
              "
            >
              Reply
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
