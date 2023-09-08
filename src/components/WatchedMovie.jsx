export default function WatchedMovie({ movie }) {
  return (
    <div className="w-full p-2 mb-2 flex gap-3 border-b border-gray relative">
      <img
        src={movie.Poster}
        alt={movie.Title}
        className="w-14 h-16 object-cover rounded-md"
      />

      <div>
        <h1 className="font-semibold text-xl mb-1 text-black">{movie.Title}</h1>
        <div className="flex items-center gap-4 text-lightBlack">
          <p>
            <span>⭐</span>
            <span>{movie.imdbRating}</span>
          </p>
          <p>
            <span>🌟</span>
            <span>{movie.userRating}</span>
          </p>
          <p>
            <span>⏲️</span>
            <span>{movie.runtime} min</span>
          </p>
        </div>
      </div>

      <button className="w-5 h-5 aspect-square text-[.9rem] font-semibold absolute top-2 right-2 rounded-full bg-red text-white hover:bg-darkRed transition-all duration-300 ease-out">
        X
      </button>
    </div>
  );
}
