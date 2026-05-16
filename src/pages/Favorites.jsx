import Container from "../components/layout/Container";
import MovieGrid from "../components/media/MovieGrid";
import EmptyState from "../components/feedback/EmptyState";
import { useFavorites } from "../hooks/useFavorites";

const Favorites = () => {
  const { favorites } =
    useFavorites();

  return (
    <Container>
      {favorites.length === 0 ? (
        <EmptyState
          title="No Favorites Yet"
          message="Movies you save will appear here."
          icon="❤️"
        />
      ) : (
        <MovieGrid
          movies={favorites}
        />
      )}
    </Container>
  );
};

export default Favorites;