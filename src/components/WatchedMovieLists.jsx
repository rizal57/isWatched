import { useMovies } from '../context/MovieContext';
import WatchedMovie from './WatchedMovie';

export default function WatchedMovieLists() {
  const { watched } = useMovies();

  return (
    <ul className="p-2">
      {watched.map((movie) => (
        <WatchedMovie key={movie.imdbID} movie={movie} />
      ))}
    </ul>
  );
}
