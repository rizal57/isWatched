import { useState } from 'react';
import Star from './Star';

function StarRating({
  color = '#fcc419',
  size = 24,
  maxRating = 5,
  defaultRating = 0,
  onRating = () => {},
}) {
  const [rating, setRating] = useState(defaultRating);
  const [tempRating, setTimeRating] = useState(0);

  function handleRating(rate) {
    setRating(rate);
    onRating(rate);
  }

  function handleMouseIn(tempRate) {
    setTimeRating(tempRate);
  }

  return (
    <div className="w-full flex justify-center items-center">
      <div className="flex items-center gap-1 w-full">
        {Array.from({ length: maxRating }, (_, i) => (
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
        <p className="text-yellow ml-3 font-semibold text-base">
          {tempRating ? tempRating : rating}
        </p>
      </div>
    </div>
  );
}

export default StarRating;
