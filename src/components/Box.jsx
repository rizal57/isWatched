import { useState } from 'react';

export default function Box(props) {
  const {
    children,
    height = 'h-[calc(100vh-400px)] sm:h-[calc(100vh-100px)]',
  } = props;

  const [showBox, setShowBox] = useState(true);

  function handleShowBox() {
    setShowBox((show) => !show);
  }
  return (
    <div
      className={`box w-full ${height} shadow-md rounded-xl mt-2 mb-3 overflow-hidden overflow-y-scroll relative`}
    >
      <button
        onClick={handleShowBox}
        className="w-5 h-5 bg-black text-white rounded-full absolute top-3 right-3 z-20 aspect-square font-semibold text-[.9rem] flex items-center justify-center"
      >
        {!showBox ? '+' : '-'}
      </button>
      {showBox && children}
    </div>
  );
}
