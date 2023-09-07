export default function WatchedSummary() {
  return (
    <div className="bg-slate-100 shadow-md p-2 sticky top-0">
      <h2 className="font-semibold text-slate-900 text-[1rem]">
        MOVIES YOU WATCHED
      </h2>
      <div className="flex items-center gap-4 text-slate-500">
        <p>
          <span>🎞️</span>0 movies
        </p>
        <p>
          <span>⭐</span>0.00
        </p>
        <p>
          <span>🌟</span>0.00
        </p>
        <p>
          <span>⏲️</span>130 min
        </p>
      </div>
    </div>
  );
}
