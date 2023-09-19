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
import useFetchMovies from './hooks/useFetchMovies';
import useLocalStorage from './hooks/useLocalStorage';

export default function App() {
  const [query, setQuery] = useState('');
  const [selectedId, setSelectedId] = useState(null);

  const [watched, setWatched] = useLocalStorage([], 'watched');

  function handleSelectedId(id) {
    setSelectedId((selected) => (selected === id ? null : id));
  }

  function handleAddWatched(movie) {
    setWatched((movies) => [...movies, movie]);
  }

  function handleCloseMovie() {
    setSelectedId(null);
  }

  function handleDeleteWatched(id) {
    setWatched((movies) => movies.filter((movie) => movie.imdbID !== id));
  }

  const { movies, isLoading, error } = useFetchMovies(query);

  return (
    <div className="p-2 h-screen max-w-5xl mx-auto relative">
      <a
        href="https://github.com/rizal57/isWatched"
        target="_blank"
        rel="noreferrer"
        className="absolute bottom-5 right-4 z-50 bg-white hover:shadow-xl hover:-translate-y-1 transition-all ease-out duration-300 shadow-md p-1 rounded-full w-8 h-8"
      >
        <img src="/github.png" alt="Github" />
      </a>
      <Navbar>
        <Search
          query={query}
          setQuery={setQuery}
          setSelectedId={setSelectedId}
        />
        <NumResults movies={movies} />
      </Navbar>
      <main className="h-[calc(100vh-80px)] flex sm:flex-row-reverse flex-col sm:gap-3">
        <Box>
          {selectedId ? (
            <DetailMovie
              selectedId={selectedId}
              onClose={handleCloseMovie}
              onAddWatched={handleAddWatched}
              watched={watched}
              key={selectedId}
            />
          ) : (
            <>
              <WatchedSummary movies={watched} />
              <WatchedMovieLists
                movies={watched}
                onDelete={handleDeleteWatched}
              />
            </>
          )}
        </Box>

        <Box height="h-[calc(100vh-300px)] sm:h-[calc(100vh-100px)]">
          {isLoading && <Loader />}
          {!isLoading && !error && (
            <MovieList movies={movies} onSelected={handleSelectedId} />
          )}
          {error && <ErrorMessage message={error} />}
        </Box>
      </main>
    </div>
  );
}
