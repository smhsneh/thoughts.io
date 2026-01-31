import { useParams } from "react-router-dom";
import { useState } from "react";
import PostCard from "../../components/post/PostCard";

export default function PostDetail() {
  const { id } = useParams();

  const post = {
    id,
    author: "alice",
    content: "I think social platforms should focus more on safety.",
    time: "2h",
  };

  const [replies, setReplies] = useState([
    {
      id: 1,
      author: "bob",
      content: "I agree. Moderation is more important than engagement.",
    },
    {
      id: 2,
      author: "charlie",
      content: "True, but freedom of speech is also important.",
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
      <PostCard post={post} />

      <div className="bg-white rounded-2xl border-2 border-accent/70 p-4">
        <textarea
          value={replyText}
          onChange={(e) => setReplyText(e.target.value)}
          placeholder="Write a reply..."
          rows={3}
          className="w-full resize-none outline-none text-sm"
        />
        <div className="flex justify-end mt-2">
          <button
            onClick={handleReply}
            className="bg-accent text-white px-4 py-1 rounded-full text-sm"
          >
            Reply
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {replies.map((reply) => (
          <div
            key={reply.id}
            className="bg-white rounded-xl border border-primary/20 p-4 ml-6"
          >
            <p className="text-sm font-header text-primary">
              @{reply.author}
            </p>
            <p className="text-sm mt-1">{reply.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}