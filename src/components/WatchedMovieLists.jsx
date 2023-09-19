import WatchedMovie from './WatchedMovie';

export default function WatchedMovieLists({ movies, onDelete }) {
  return (
    <ul className="p-2">
      {movies.map((movie) => (
        <WatchedMovie key={movie.imdbID} movie={movie} onDelete={onDelete} />
      ))}
    </ul>
  );
}
