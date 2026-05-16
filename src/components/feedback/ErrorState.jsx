import "./feedback.css";
import PropTypes from "prop-types";

const ErrorState = ({
  title = "Something went wrong",
  message = "Unable to fetch movies at the moment.",
  buttonText = "Try Again",
  onRetry,
}) => {
  return (
    <section className="feedback-state">
      <div className="feedback-icon">⚠️</div>
      <h2 className="feedback-title">{title}</h2>
      <p className="feedback-message">{message}</p>
      {onRetry && (
        <button
          className="feedback-button"
          onClick={onRetry}
        >
          {buttonText}
        </button>
      )}
    </section>
  );
};

export default ErrorState;

ErrorState.propTypes = {
    title: PropTypes.string,
    message: PropTypes.string,
    buttonText: PropTypes.string,
    onRetry: PropTypes.func,
};