export default function AdminDashboard() {
  // Dummy ML + moderation data
  const alerts = [
    {
      id: 1,
      title: "Harmful Comment Detected",
      description: "Reply flagged as cyberbullying",
      confidence: 0.91,
      category: "Harassment",
    },
    {
      id: 2,
      title: "User Reported",
      description: "Multiple reports on a single user",
      confidence: 0.78,
      category: "Hate Speech",
    },
    {
      id: 3,
      title: "Comment Hidden",
      description: "Reply automatically hidden from feed",
      confidence: 0.88,
      category: "Threat",
    },
  ];

  const flaggedReplies = [
    {
      id: 1,
      user: "eve",
      content: "Go kill yourself",
      category: "Threat",
      confidence: 0.95,
      status: "Hidden",
    },
    {
      id: 2,
      user: "charlie",
      content: "You're stupid if you think that",
      category: "Harassment",
      confidence: 0.89,
      status: "Flagged",
    },
  ];

  return (
    <div className="space-y-8">
      <h2 className="font-header text-3xl font-bold text-primary">
        admin dashboard
      </h2>

      {/* ALERTS (STACKED BENTO) */}
      <div className="space-y-4">
        {alerts.map((alert) => (
          <div
            key={alert.id}
            className="bg-white rounded-2xl border border-soft/40 p-5 shadow-sm"
          >
            <h3 className="font-semibold text-primary">
              {alert.title}
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              {alert.description}
            </p>
            <div className="flex gap-4 text-xs text-gray-500 mt-3">
              <span>category: {alert.category}</span>
              <span>
                confidence: {alert.confidence}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* FLAGGED REPLIES TABLE */}
      <div className="bg-white rounded-2xl border border-soft/40 p-6 shadow-sm">
        <h3 className="font-semibold text-lg text-primary mb-4">
          flagged replies
        </h3>

        <div className="space-y-4">
          {flaggedReplies.map((reply) => (
            <div
              key={reply.id}
              className="border border-primary/20 rounded-xl p-4"
            >
              <div className="flex justify-between text-sm">
                <span className="font-semibold">
                  @{reply.user}
                </span>
                <span className="text-gray-500">
                  {reply.status}
                </span>
              </div>

              <p className="text-sm text-black mt-2">
                {reply.content}
              </p>

              <div className="flex gap-4 text-xs text-gray-500 mt-3">
                <span>{reply.category}</span>
                <span>
                  confidence: {reply.confidence}
                </span>
              </div>

              <div className="flex gap-3 mt-4">
                <button className="text-xs px-3 py-1 rounded-full border border-primary/30 hover:bg-primary/5">
                  hide
                </button>
                <button className="text-xs px-3 py-1 rounded-full border border-primary/30 hover:bg-primary/5">
                  allow
                </button>
                <button className="text-xs px-3 py-1 rounded-full border border-warning text-warning hover:bg-warning/5">
                  block user
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}