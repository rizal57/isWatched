export default function Search({ query, setQuery }) {
  console.log(query);
  return (
    <div>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        placeholder="Search movies..."
        className="p-2 rounded-md placeholder:text-lightWhite outline-none border-none focus:shadow-md shadow-blue text-black focus:-translate-y-[2px] transition-all duration-300 ease-out"
      />
    </div>
  );
}
