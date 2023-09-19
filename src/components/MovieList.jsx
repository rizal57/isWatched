import Movie from './Movie';

export default function MovieList({ movies, onSelected }) {
  return (
    <ul>
      {movies?.map((movie) => (
        <Movie key={movie.imdbID} movie={movie} onSelected={onSelected} />
      ))}
    </ul>
  );
}
