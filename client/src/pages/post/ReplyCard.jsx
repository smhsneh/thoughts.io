if (reply.status === "hidden") {
  return (
    <div className="bg-white rounded-xl border p-4 ml-6">
      <p className="text-sm text-gray-500 italic">
        this reply was hidden due to policy violation
      </p>
    </div>
  );
}
