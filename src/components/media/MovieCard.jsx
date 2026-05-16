import MoviePoster from "./MoviePoster";
import RatingBadge from "./RatingBadge";
import FavoriteButton from "./FavoriteButton";
import PropTypes from "prop-types";
import "./media.css";

const MovieCard = ({ movie }) => {
  const {
    title,
    release_date,
    vote_average,
    poster_path,
  } = movie;

  const releaseYear = release_date
    ? new Date(release_date).getFullYear()
    : "N/A";

  return (
    <article className="movie-card">
      <MoviePoster
        path={poster_path}
        title={title}
      />

      <FavoriteButton movie={movie} />

      <div className="movie-info">
        <div className="movie-meta">
          <h3 className="movie-title">
            {title}
          </h3>

          <RatingBadge rating={vote_average} />
        </div>

        <p className="movie-year">
          {releaseYear}
        </p>
      </div>
    </article>
  );
};

export default MovieCard;

MovieCard.propTypes = {
    movie: PropTypes.shape({
        title: PropTypes.string.isRequired,
        release_date: PropTypes.string,
        vote_average: PropTypes.number,
        poster_path: PropTypes.string,
    }).isRequired,
};