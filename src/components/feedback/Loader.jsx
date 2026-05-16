import "./feedback.css";
import PropTypes from "prop-types";

const Loader = ({
  fullScreen = true,
  text = "Loading content...",
}) => {
  return (
    <section
      className={`loader ${
        fullScreen ? "loader-fullscreen" : ""
      }`}
    >
      <div className="loader-spinner"></div>

      <p className="loader-text">{text}</p>
    </section>
  );
};

export default Loader;

Loader.propTypes = {
    fullScreen: PropTypes.bool,
    text: PropTypes.string,
}