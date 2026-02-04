export default function AdminDashboard() {
  const flaggedReplies = [
    {
      id: 1,
      user: "eve",
      content: "Go kill yourself.",
      category: "Threat / Hate Speech",
      score: 0.92,
      status: "hidden",
    },
    {
      id: 2,
      user: "charlie",
      content: "You're stupid if you think that.",
      category: "Harassment",
      score: 0.71,
      status: "flagged",
    },
  ];

  return (
    <div className="space-y-6">
      <h2 className="font-header text-3xl font-bold text-primary">
        Admin Dashboard
      </h2>

      <div className="bg-white rounded-2xl border border-soft/40 p-5 shadow-sm">
        <h3 className="font-header text-lg font-semibold mb-2">
          Alerts & Notifications
        </h3>

        <div className="text-sm space-y-1">
          <p>🚩 Harmful reply detected</p>
          <p>🚩 Repeat offender identified</p>
          <p>⛔ User blocked by admin</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-soft/40 p-5 shadow-sm">
        <h3 className="font-header text-lg font-semibold mb-2">
          Model Stats
        </h3>

        <p className="text-sm">
          <strong>Latest Category:</strong> Hate Speech
        </p>
        <p className="text-sm">
          <strong>Confidence Score:</strong> 0.92
        </p>
        <p className="text-sm">
          <strong>Model Status:</strong>{" "}
          <span className="text-green-600">Active</span>
        </p>
      </div>

      <div className="bg-white rounded-2xl border border-soft/40 p-5 shadow-sm">
        <h3 className="font-header text-lg font-semibold mb-2">
          Moderation Summary
        </h3>

        <div className="text-sm space-y-1">
          <p>👁 Comments hidden: 2</p>
          <p>✅ Comments approved: 3</p>
          <p>⛔ Users blocked: 1</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-soft/40 p-5 shadow-sm">
        <h3 className="font-header text-lg font-semibold mb-4">
          Flagged Replies
        </h3>

        <div className="space-y-4">
          {flaggedReplies.map((reply) => (
            <div
              key={reply.id}
              className="border border-primary/20 rounded-xl p-4"
            >
              <div className="flex justify-between text-sm mb-1">
                <span className="font-semibold">@{reply.user}</span>
                <span className="text-gray-500">
                  Score: {reply.score}
                </span>
              </div>

              <p className="text-sm mb-2">
                {reply.content}
              </p>

              <div className="text-xs text-red-600 mb-3">
                Category: {reply.category}
              </div>

              <div className="flex gap-4 text-xs">
                <button className="text-accent hover:underline">
                  Hide comment
                </button>

                <button className="text-accent hover:underline">
                  Do not hide
                </button>

                <button className="text-warning hover:underline">
                  Block user
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}