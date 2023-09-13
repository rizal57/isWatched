import { useState } from 'react';
import Star from './Star';

function StarRating({ color = '#fcc419', size = 24 }) {
  const [rating, setRating] = useState(0);
  const [tempRating, setTimeRating] = useState(0);

  function handleRating(rate) {
    setRating(rate);
  }

  function handleMouseIn(tempRate) {
    setTimeRating(tempRate);
  }

  return (
    <div className="w-full flex justify-center items-center my-3">
      <div className="flex items-center gap-1 bg-white p-3 rounded-md border border-gray w-fit">
        {Array.from({ length: 10 }, (_, i) => (
          <Star
            key={i}
            index={i}
            onRate={handleRating}
            full={tempRating ? tempRating >= i + 1 : rating >= i + 1}
            color={color}
            onMouseIn={handleMouseIn}
            onMouseOut={setTimeRating}
            size={size}
          />
        ))}
      </div>
    </div>
  );
}

export default StarRating;
