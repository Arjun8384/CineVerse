import { useFavorites } from "../../context/FavoritesContext";
import PropTypes from "prop-types";
import "./media.css";

const FavoriteButton = ({
  movie,
}) => {
  const {
    toggleFavorite,
    isFavorite,
  } = useFavorites();

  const favorite =
    isFavorite(movie.id);

  const handleClick = (e) => {
    toggleFavorite(movie);
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <button
      className={`favorite-btn ${
        favorite
          ? "favorited"
          : ""
      }`}
      onClick={handleClick}
      aria-label="Toggle Favorite"
    >
      {favorite ? "❤️" : "🤍"}
    </button>
  );
};

export default FavoriteButton;

FavoriteButton.propTypes = {
    movie: PropTypes.shape({
        id: PropTypes.number.isRequired,
    }).isRequired,
};