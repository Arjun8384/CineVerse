import "./media.css";
import PropTypes from "prop-types";

const RatingBadge = ({ rating }) => {
  const formattedRating = rating?.toFixed(1);

  return (
    <div className="rating-badge">
      ⭐ {formattedRating}
    </div>
  );
};

export default RatingBadge;

RatingBadge.propTypes = {
    rating: PropTypes.number,
}