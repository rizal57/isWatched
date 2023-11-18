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

import DetailMovie from './components/DetailMovie';
import useFetchMovies from './hooks/useFetchMovies';
import useLocalStorage from './hooks/useLocalStorage';
import { createContext } from 'react';
import { MovieProvider, useMovies } from './context/MovieContext';
import { Main } from './components/Main';

export default function App() {
  return (
    <div className="p-2 h-screen max-w-5xl mx-auto relative">
      <a
        href="https://github.com/rizal57/isWatched"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-5 z-50 bg-white hover:shadow-xl transition-all ease-out duration-300 shadow-sm p-1 rounded-full w-8 h-8 md:w-10 md:h-10 animate-bounce"
      >
        <img src="/github.png" alt="Github" />
      </a>
      <MovieProvider>
        <Navbar>
          <Search />
          <NumResults />
        </Navbar>
        <Main />
      </MovieProvider>
    </div>
  );
}
