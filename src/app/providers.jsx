import { ThemeProvider } from "../context/ThemeContext";
import PropTypes from "prop-types";
import { FavoritesProvider } from "../context/FavoritesContext";

const Providers = ({ children }) => {
  return (
    <ThemeProvider>
      <FavoritesProvider>
        {children}
      </FavoritesProvider>
    </ThemeProvider>
  );
};

export default Providers;

Providers.propTypes = {
    children: PropTypes.node.isRequired
}