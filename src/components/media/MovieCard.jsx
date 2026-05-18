import MoviePoster from "./MoviePoster";
import RatingBadge from "./RatingBadge";
import FavoriteButton from "./FavoriteButton";
import PropTypes from "prop-types";

import { getYear } from "../../utils/format";

import "./media.css";

const MovieCard = ({ movie }) => {
  const movieUrl = `https://www.themoviedb.org/movie/${movie.id}`;

  return (
    <a
      href={movieUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="movie-card-link"
    >
      <div className="movie-card">
        <div className="movie-poster-wrapper">
          <MoviePoster
            path={movie.poster_path}
            title={movie.title}
          />

          <FavoriteButton movie={movie} />
        </div>

        <div className="movie-content">
          <div className="movie-header">
            <h3 className="movie-title">
              {movie.title}
            </h3>

            <RatingBadge
              rating={
                movie.vote_average
              }
            />
          </div>

          <p className="movie-year">
            {getYear(
              movie.release_date
            )}
          </p>
        </div>
      </div>
    </a>
  );
};

export default MovieCard;

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string,
    vote_average: PropTypes.number,
    release_date: PropTypes.string,
  }).isRequired,
};