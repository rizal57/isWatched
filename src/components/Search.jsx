export default function Search() {
  return (
    <div>
      <input
        type="text"
        placeholder="Search movies..."
        className="p-2 rounded-md placeholder:text-lightWhite outline-none border-none focus:shadow-md shadow-blue focus:-translate-y-[2px] transition-all duration-300 ease-out"
      />
    </div>
  );
}
