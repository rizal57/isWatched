export default function NumResults({ movies }) {
  return (
    <div>
      <span className="font-semibold text-[14px] md:text-base">
        Found {movies?.length} results
      </span>
    </div>
  );
}
