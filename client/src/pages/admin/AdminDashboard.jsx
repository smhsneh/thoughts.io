import { useEffect, useState } from "react";

export default function AdminDashboard() {
  const [replies, setReplies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/replies/flagged/all")
      .then((res) => res.json())
      .then(setReplies);
  }, []);

  const updateStatus = async (id, status) => {
    await fetch(`http://localhost:5000/api/replies/${id}/status`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });

    setReplies((prev) =>
      prev.filter((r) => r._id !== id)
    );
  };

  return (
    <div className="space-y-6">
      <h2 className="font-header text-3xl font-bold text-primary">
        Moderation Dashboard
      </h2>

      {replies.map((reply) => (
        <div
          key={reply._id}
          className="bg-white p-4 rounded-xl border"
        >
          <p className="text-sm">
            <strong>@{reply.author.username}</strong>:{" "}
            {reply.content}
          </p>

          <p className="text-xs text-gray-500 mt-1">
            Post: {reply.post.content.slice(0, 40)}…
          </p>

          <div className="flex gap-3 mt-3">
            <button
              onClick={() => updateStatus(reply._id, "hidden")}
              className="text-xs text-red-500"
            >
              Hide
            </button>

            <button
              onClick={() => updateStatus(reply._id, "normal")}
              className="text-xs text-green-600"
            >
              Restore
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}