import { useMovies } from '../context/MovieContext';
import Movie from './Movie';

export default function MovieList() {
  const { movies } = useMovies();

  return (
    <ul>
      {movies?.map((movie) => (
        <Movie key={movie.imdbID} movie={movie} />
      ))}
    </ul>
  );
}
