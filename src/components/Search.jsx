import { useEffect } from 'react';
import { useRef } from 'react';

export default function Search({ query, setQuery, setSelectedId }) {
  const searchRef = useRef(null);

  useEffect(() => {
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') {
        searchRef.current.focus();
        setQuery('');
        setSelectedId(null);
      }
    });
  }, []);

  return (
    <div className="sm:w-[40%] w-[50%] relative">
      <div className="absolute hidden md:block right-2 top-[50%] -translate-y-[50%]">
        <p className="text-darkWhite font-semibold">Enter</p>
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
