import React from 'react';

export default function WatchedMovieLists({ movies }) {
  return (
    <div className="p-2">
      {movies.map((movie) => (
        <div
          key={movie.imdbID}
          className="w-full p-2 mb-2 flex gap-3 border-b relative"
        >
          <img
            src={movie.Poster}
            alt={movie.Title}
            className="w-14 h-16 object-cover rounded-md"
          />

          <div>
            <h1 className="font-semibold text-xl mb-1">{movie.Title}</h1>
            <div className="flex items-center gap-4">
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

          <button className="w-5 h-5 aspect-square text-[.9rem] font-semibold absolute top-2 right-2 rounded-full bg-red-500 text-white hover:bg-red-600 transition-all duration-300 ease-out">
            X
          </button>
        </div>
      ))}
    </div>
  );
}
