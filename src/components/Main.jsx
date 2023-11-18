import { useMovies } from '../context/MovieContext';
import Box from './Box';
import DetailMovie from './DetailMovie';
import ErrorMessage from './ErrorMessage';
import Loader from './Loader';
import MovieList from './MovieList';
import WatchedMovieLists from './WatchedMovieLists';
import WatchedSummary from './WatchedSummary';

export const Main = () => {
  const { selectedId, error, isLoading } = useMovies();

  return (
    <main className="h-[calc(100vh-80px)] flex sm:flex-row-reverse flex-col sm:gap-3">
      <Box>
        {selectedId ? (
          <DetailMovie />
        ) : (
          <>
            <WatchedSummary />
            <WatchedMovieLists />
          </>
        )}
      </Box>

      <Box height="h-[calc(100vh-300px)] sm:h-[calc(100vh-100px)]">
        {isLoading && <Loader />}
        {!isLoading && !error && <MovieList />}
        {error && <ErrorMessage message={error} />}
      </Box>
    </main>
  );
};
