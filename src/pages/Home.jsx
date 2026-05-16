import Container from "../components/layout/Container";
import MovieGrid from "../components/media/MovieGrid";
import SearchBar from "../components/search/SearchBar";
import MoodMatcher from "../components/search/MoodMatcher";
import Loader from "../components/feedback/Loader";
import ErrorState from "../components/feedback/ErrorState";
import EmptyState from "../components/feedback/EmptyState";
import SearchStatus from "../components/search/SearchStatus";
import { useMovies } from "../hooks/useMovies";
import { useInfiniteScroll } from "../hooks/useInfiniteScroll";
import { useMoodMatcher } from "../hooks/useMoodMatcher";

const Home = () => {

  const {
    movies,
    loading,
    error,
    query,
    hasMore,
    handleSearch,
    fetchNextPage,
  } = useMovies();

  const lastMovieRef =
    useInfiniteScroll(
      fetchNextPage,
      loading,
      hasMore
    );

  const {
    loading: aiLoading,
    error: aiError,
    findMovieByMood,
  } = useMoodMatcher(
    handleSearch
  );

  return (
    <Container>
      <SearchBar
        onSearch={handleSearch}
      />

      <MoodMatcher
        onSubmit={
          findMovieByMood
        }
        loading={aiLoading}
      />

      <SearchStatus
        query={query}
      />

      {error && (
        <ErrorState
          message={error}
        />
      )}

      {aiError && (
        <ErrorState
          message={aiError}
        />
      )}

      {!loading &&
        movies.length === 0 && (
          <EmptyState />
        )}

      <MovieGrid
        movies={movies}
        lastElementRef={
          lastMovieRef
        }
      />

      {loading && <Loader />}
    </Container>
  );
};

export default Home;