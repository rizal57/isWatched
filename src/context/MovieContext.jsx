import { useState } from 'react';
import { createContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import useFetchMovies from '../hooks/useFetchMovies';
import { useContext } from 'react';

const MovieContext = createContext();

function MovieProvider({ children }) {
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
    <MovieContext.Provider
      value={{
        query,
        setQuery,
        setSelectedId,
        selectedId,
        handleCloseMovie,
        handleAddWatched,
        handleDeleteWatched,
        handleSelectedId,
        movies,
        isLoading,
        error,
        watched,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
}

function useMovies() {
  const context = useContext(MovieContext);
  return context;
}

export { MovieProvider, useMovies };
