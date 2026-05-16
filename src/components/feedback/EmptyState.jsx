import "./feedback.css";
import PropTypes from "prop-types";

const EmptyState = ({
  title = "No Results Found",
  message = "Try another search keyword.",
  icon = "🎬",
}) => {
  return (
    <section className="feedback-state">
      <div className="feedback-icon">{icon}</div>

      <h2 className="feedback-title">{title}</h2>

      <p className="feedback-message">{message}</p>
    </section>
  );
};

export default EmptyState;

EmptyState.propTypes = {
    title: PropTypes.string,
    message: PropTypes.string,
    icon: PropTypes.string,
}