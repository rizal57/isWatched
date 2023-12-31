import { useEffect } from 'react';
import { useRef } from 'react';
import { useMovies } from '../context/MovieContext';

export default function Search() {
  const { query, setQuery, setSelectedId } = useMovies();
  const searchRef = useRef(null);

  useEffect(() => {
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Control') {
        searchRef.current.focus();
        setQuery('');
        setSelectedId(null);
      }
    });
  }, []);

  return (
    <div className="md:w-[40%] w-[43%] relative">
      <div className="absolute hidden md:block right-2 top-[50%] -translate-y-[50%]">
        <p className="text-darkWhite font-semibold">Ctrl</p>
      </div>
      <input
        ref={searchRef}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        placeholder="Search movies..."
        className="w-full p-2 rounded-md placeholder:text-darkWhite outline-none border-none focus:shadow-md shadow-blue text-black focus:-translate-y-[2px] transition-all duration-300 ease-out"
      />
    </div>
  );
}
