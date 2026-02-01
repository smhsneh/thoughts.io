export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <h2 className="font-header text-3xl font-bold text-primary">
        Admin Dashboard
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl p-6 border shadow">
          <h3 className="font-semibold mb-2">Alerts</h3>
          <p className="text-sm">🚩 Harmful comment detected</p>
          <p className="text-sm">⛔ User blocked</p>
        </div>

        <div className="bg-white rounded-2xl p-6 border shadow">
          <h3 className="font-semibold mb-2">ML Output</h3>
          <p className="text-sm">Category: Hate Speech</p>
          <p className="text-sm">Confidence: 0.92</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-6 border shadow">
        <h3 className="font-semibold mb-3">Flagged Replies</h3>
        <p className="text-sm">“Go kill yourself.” — @eve</p>
      </div>
    </div>
  );
}