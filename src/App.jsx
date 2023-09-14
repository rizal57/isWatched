import { useState } from 'react';
import {
  Box,
  ErrorMessage,
  Loader,
  MovieList,
  Navbar,
  NumResults,
  Search,
  WatchedMovieLists,
  WatchedSummary,
} from './components';
import { useEffect } from 'react';
import DetailMovie from './components/DetailMovie';

const tempMovieData = [
  {
    imdbID: 'tt1375666',
    Title: 'Inception',
    Year: '2010',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg',
  },
  {
    imdbID: 'tt0133093',
    Title: 'The Matrix',
    Year: '1999',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg',
  },
  {
    imdbID: 'tt6751668',
    Title: 'Parasite',
    Year: '2019',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg',
  },
];

const tempWatchedData = [
  {
    imdbID: 'tt1375666',
    Title: 'Inception',
    Year: '2010',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg',
    runtime: 148,
    imdbRating: 8.8,
    userRating: 10,
  },
  {
    imdbID: 'tt0088763',
    Title: 'Back to the Future',
    Year: '1985',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
    runtime: 116,
    imdbRating: 8.5,
    userRating: 8,
  },
];

const KEY = 'f6db18';

export default function App() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [selectedId, setSelectedId] = useState(null);

  function handleSelectedId(id) {
    setSelectedId((selected) => (selected === id ? null : id));
  }

  function handleAddWatched(movie) {
    setWatched((movies) => [...movies, movie]);
  }

  useEffect(() => {
    const controller = new AbortController();
    async function getMovies() {
      try {
        setIsLoading(true);
        setError('');

        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
          { signal: controller.signal }
        );
        if (!res.ok)
          throw new Error('Some thing went wrong with fetching movies');

        const data = await res.json();

        if (data.Response === 'False') throw new Error(data.Error);

        setMovies(data.Search);
      } catch (err) {
        if (err.name !== 'AbortError') {
          console.log(err);
          setError(err.message);
        }
      } finally {
        setIsLoading(false);
      }
    }

    if (query.length < 3) {
      setMovies([]);
      setError('');
      return;
    }

    getMovies();

    return function () {
      controller.abort();
    };
  }, [query]);

  return (
    <div className="p-2 h-screen max-w-5xl mx-auto">
      <Navbar>
        <Search query={query} setQuery={setQuery} />
        <NumResults movies={movies} />
      </Navbar>
      <main className="h-[calc(100vh-80px)] flex sm:flex-row-reverse flex-col sm:gap-3">
        <Box>
          {selectedId ? (
            <DetailMovie
              selectedId={selectedId}
              setSelectedId={setSelectedId}
              onAddWatched={handleAddWatched}
            />
          ) : (
            <>
              <WatchedSummary movies={watched} />
              <WatchedMovieLists movies={watched} />
            </>
          )}
        </Box>

        <Box height="h-[calc(100vh-300px)] sm:h-[calc(100vh-100px)]">
          {isLoading ? (
            <Loader />
          ) : error ? (
            <ErrorMessage message={error} />
          ) : (
            <MovieList movies={movies} onSelected={handleSelectedId} />
          )}
        </Box>
      </main>
    </div>
  );
}
