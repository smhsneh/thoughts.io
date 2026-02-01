import { useParams, useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import PostCard from "../../components/post/PostCard";
import ReplyCard from "../../components/post/ReplyCard";

export default function PostDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock main post (later comes from backend)
  const post = {
    id,
    author: "alice",
    content: "I think social platforms should focus more on safety.",
    time: "2h",
  };

  // Mock replies (will be extracted to ReplyCard next)
  const [replies, setReplies] = useState([
  {
    id: 1,
    author: "bob",
    content: "I agree. Moderation matters more than engagement.",
    status: "normal",
  },
  {
    id: 2,
    author: "charlie",
    content: "You're stupid if you think that.",
    status: "flagged",
  },
  {
    id: 3,
    author: "eve",
    content: "Go kill yourself.",
    status: "hidden",
  },
]);

  const [replyText, setReplyText] = useState("");

  const handleReply = () => {
    if (!replyText.trim()) return;

    setReplies((prev) => [
      ...prev,
      {
        id: Date.now(),
        author: "you",
        content: replyText,
      },
    ]);

    setReplyText("");
  };

  return (
    <div className="space-y-6">
      <div className="flex gap-4 text-sm">
        <button
          onClick={() => navigate(-1)}
          className="text-accent hover:underline"
        >
          ← Back
        </button>

        <Link
          to="/"
          className="text-accent hover:underline"
        >
          Home
        </Link>
      </div>


      <PostCard post={post} />

      <div className="bg-white rounded-2xl border-2 border-soft/70 p-5 shadow-sm">
        <textarea
          value={replyText}
          onChange={(e) => setReplyText(e.target.value)}
          placeholder="Write a reply..."
          rows={3}
          className="w-full resize-none outline-none text-sm"
        />
        <div className="flex justify-end mt-3">
          <button
            onClick={handleReply}
            className="bg-accent text-white px-5 py-2 rounded-full text-sm font-semibold hover:opacity-90"
          >
            Reply
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {/* {replies.map((reply) => (
          <div
            key={reply.id}
            className="bg-white rounded-xl border border-primary/20 p-4 ml-6"
          >
            <p className="font-header text-primary text-sm">
              @{reply.author}
            </p>
            <p className="text-sm mt-1 text-black">
              {reply.content}
            </p>
          </div>
        ))} */}
        {replies.map((reply) => (
  <ReplyCard key={reply.id} reply={reply} />
))}
      </div>
    </div>
  );
}