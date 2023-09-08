import Movie from './Movie';

export default function MovieList({ movies }) {
  return (
    <>
      {movies.map((movie) => (
        <Movie key={movie.imdbID} movie={movie} />
      ))}
    </>
  );
}
