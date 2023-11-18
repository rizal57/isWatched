import { useMovies } from '../context/MovieContext';

export default function Movie({ movie }) {
  const { handleSelectedId } = useMovies();

  return (
    <li
      onClick={() => handleSelectedId(movie.imdbID)}
      className="w-full py-2 px-4 hover:bg-lightGray cursor-pointer transition duration-300 ease-out mb-2 flex gap-3 border-b border-gray relative"
    >
      <img
        src={movie.Poster}
        alt={movie.Title}
        className="w-14 h-16 object-cover rounded-md"
      />
      <div>
        <h1 className="text-xl font-semibold text-black mb-2">{movie.Title}</h1>
        <p className="text-lightBlack text-sm">
          <span>📅</span>
          <span>{movie.Year}</span>
        </p>
      </div>
    </li>
  );
}
