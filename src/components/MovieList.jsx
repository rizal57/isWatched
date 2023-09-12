import Movie from './Movie';

export default function MovieList({ movies, onSelected }) {
  return (
    <>
      {movies?.map((movie) => (
        <Movie key={movie.imdbID} movie={movie} onSelected={onSelected} />
      ))}
    </>
  );
}
