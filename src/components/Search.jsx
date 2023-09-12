export default function Search({ query, setQuery }) {
  return (
    <div className="sm:w-[40%] w-[50%]">
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        placeholder="Search movies..."
        className="w-full p-2 rounded-md placeholder:text-darkWhite outline-none border-none focus:shadow-md shadow-blue text-black focus:-translate-y-[2px] transition-all duration-300 ease-out"
      />
    </div>
  );
}
