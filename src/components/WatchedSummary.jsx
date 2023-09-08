export default function WatchedSummary() {
  return (
    <div className="bg-gray shadow-md p-2">
      <h2 className="font-semibold text-black text-[1rem]">
        MOVIES YOU WATCHED
      </h2>
      <div className="flex items-center gap-4 text-lightBlack">
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
