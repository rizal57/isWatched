import React from 'react';
import WatchedMovie from './WatchedMovie';

export default function WatchedMovieLists({ movies, onDelete }) {
  return (
    <div className="p-2">
      {movies.map((movie) => (
        <WatchedMovie key={movie.imdbID} movie={movie} onDelete={onDelete} />
      ))}
    </div>
  );
}
