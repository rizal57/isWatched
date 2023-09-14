function average(arr) {
  return arr.reduce((acc, cur, index, arr) => acc + cur / arr.length, 0);
}

export default function WatchedSummary({ movies }) {
  const avgImdbRating = average(movies.map((movie) => movie.imdbRating));
  const avgUserRating = average(movies.map((movie) => movie.userRating));
  const avgRuntime = average(movies.map((movie) => movie.runtime));

  return (
    <div className="bg-gray shadow-md p-2">
      <h2 className="font-semibold text-black text-[1rem]">
        MOVIES YOU WATCHED
      </h2>
      <div className="flex items-center gap-4 text-lightBlack">
        <p>
          <span>🎞️ </span>
          {movies.length} movies
        </p>
        <p>
          <span>⭐</span>
          {avgImdbRating.toFixed(2)}
        </p>
        <p>
          <span>🌟</span>
          {avgUserRating.toFixed(2)}
        </p>
        <p>
          <span>⏲️</span>
          {avgRuntime.toFixed(2)} min
        </p>
      </div>
    </div>
  );
}
