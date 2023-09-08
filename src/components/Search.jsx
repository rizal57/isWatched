export default function Search({ query, setQuery }) {
  console.log(query);
  return (
    <div className="sm:w-[40%]">
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        placeholder="Search movies..."
        className="w-full p-2 rounded-md placeholder:text-lightWhite outline-none border-none focus:shadow-md shadow-blue text-black focus:-translate-y-[2px] transition-all duration-300 ease-out"
      />
    </div>
  );
}
