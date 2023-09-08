export default function ErrorMessage({ message }) {
  return (
    <div className="flex items-center justify-center gap-2 my-3">
      <span>⛔</span>
      <p className="text-black font-semibold text-xl text-center my-3">
        {message}
      </p>
    </div>
  );
}
