import MovieCard from "./MovieCard";
import PropTypes from "prop-types";
import "./media.css";

const MovieGrid = ({
  movies,
  lastElementRef,
}) => {
  if (!movies?.length) {
    return null;
  }

  return (
    <section className="movie-grid">
      {movies.map(
        (movie, index) => {
          const isLastMovie =
            index ===
            movies.length - 1;

          return (
            <div
              key={movie.id}
              ref={
                isLastMovie
                  ? lastElementRef
                  : null
              }
            >
              <MovieCard
                movie={movie}
              />
            </div>
          );
        }
      )}
    </section>
  );
};

export default MovieGrid;

MovieGrid.propTypes = {
    movies: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            release_date: PropTypes.string,
            vote_average: PropTypes.number,
            poster_path: PropTypes.string,
        })
    ),
    lastElementRef: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.shape({ current: PropTypes.any })
    ]),
};