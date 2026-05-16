import "./layout.css";
import PropTypes from "prop-types";

const Container = ({ children, className = "" }) => {
  return (
    <div className={`app-container ${className}`}>
      {children}
    </div>
  );
};

export default Container;

Container.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
}