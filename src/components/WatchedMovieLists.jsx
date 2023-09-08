import React from 'react';
import WatchedMovie from './WatchedMovie';

export default function WatchedMovieLists({ movies }) {
  return (
    <div className="p-2">
      {movies.map((movie) => (
        <WatchedMovie key={movie.imdbID} movie={movie} />
      ))}
    </div>
  );
}
