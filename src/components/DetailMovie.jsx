import { useState, useEffect } from 'react';
import StarRating from './StarRating';

const KEY = 'f6db18';

function DetailMovie({ selectedId, setSelectedId }) {
  const [movieDetail, setMovieDetail] = useState({});
  const [togglePlot, setTogglePlot] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    Title: title,
    Poster: poster,
    Genre: genre,
    Year: year,
    Plot: plot,
    Actors: actors,
    Director: director,
    Rated: rated,
    Runtime: runtime,
    Released: released,
    Country: country,
    imdbRating,
  } = movieDetail;

  const displayPlot = togglePlot
    ? plot
    : plot?.split(' ').slice(0, 20).join(' ');

  useEffect(() => {
    async function getDetailMovie() {
      try {
        setIsLoading(true);
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`
        );
        const data = await res.json();

        if (data.Response === 'False') throw new Error(data.Error);
        setMovieDetail(data);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    }

    getDetailMovie();
  }, [selectedId]);

  if (isLoading)
    return (
      <p className="text-center mt-10 text-blue font-semibold text-xl">
        Loading...
      </p>
    );

  return (
    <div className="p-4 rounded-xl shadow-md m-4 relative">
      <button
        onClick={() => setSelectedId(null)}
        className="absolute top-1 left-1 z-10 p-1 rounded-full w-5 h-5 flex items-center justify-center bg-black text-white"
      >
        &larr;
      </button>
      <div className="flex gap-3 my-3">
        <img
          src={poster}
          alt={title}
          width={150}
          height={150}
          className="rounded-xl object-cover"
        />
        <div>
          <h1 className="text-3xl font-bold text-black">{title}</h1>
          <div className="flex items-center gap-2 text-xs text-lightBlack mt-2">
            <p>{rated}</p>
            <p>{runtime}</p>
            <p>{genre?.split(',')?.join('/')}</p>
          </div>
          <div className="mt-3 flex gap-2 items-center">
            <div className="border border-lightGray shadow-sm p-2 w-16 h-16 rounded-md">
              <p className="text-sm text-darkWhite">IMDb</p>
              <p className="text-2xl font-bold text-yellow">{imdbRating}</p>
            </div>
            <div className="border border-lightGray shadow-sm p-2 w-fit h-16 rounded-md">
              <p className="text-sm text-darkWhite">Your Rated</p>
              <p className="text-2xl font-bold text-yellow">{imdbRating}</p>
            </div>
          </div>
        </div>
      </div>
      <StarRating />
      {/* plot */}
      <div className="mb-3">
        <p className="text-base text-lightBlack leading-relaxed">
          <em>{displayPlot} </em>
          <span
            className="text-blue"
            role="button"
            onClick={() => setTogglePlot((toggle) => !toggle)}
          >
            {togglePlot ? 'less' : 'more'}
          </span>
        </p>
      </div>
      <div className="text-lightBlack mb-3">
        <p>Staring {actors}</p>
        <p>Directed by {director}</p>
      </div>
      {/* released date */}
      <div>
        <h5 className="text-darkWhite">Release date</h5>
        <p className="text-xl text-black font-semibold">
          {released} ({country})
        </p>
      </div>
    </div>
  );
}

export default DetailMovie;
