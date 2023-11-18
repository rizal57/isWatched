import { useMovies } from '../context/MovieContext';

export default function NumResults() {
  const { movies } = useMovies();

  return (
    <div>
      <span className="font-semibold text-[14px] md:text-base">
        Found {movies?.length} results
      </span>
    </div>
  );
}
