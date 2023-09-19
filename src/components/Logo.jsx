export default function Logo() {
  return (
    <div className="flex gap-2 items-center">
      <span className="text-3xl">
        <img src="/logo.png" alt="logo" className="w-8 h-8" />
      </span>
      <h1
        className="font-semibold text-[20px] hidden md:block"
        style={{ userSelect: 'none' }}
      >
        isWatched
      </h1>
    </div>
  );
}
