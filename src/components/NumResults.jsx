export default function NumResults({ movies }) {
  return (
    <div>
      <span className="font-semibold text-[16px]">
        Found {movies.length} results
      </span>
    </div>
  );
}
