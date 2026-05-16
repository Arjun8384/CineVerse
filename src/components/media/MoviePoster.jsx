import { getImageUrl } from "../../utils/image";
import "./media.css";
import PropTypes from "prop-types";

const MoviePoster = ({ path, title }) => {
  return (
    <div className="movie-poster-wrapper">
      <img
        src={getImageUrl(path)}
        alt={title}
        loading="lazy"
        className="movie-poster"
      />
    </div>
  );
};

export default MoviePoster;

MoviePoster.propTypes = {
    path: PropTypes.string,
    title: PropTypes.string.isRequired,
}