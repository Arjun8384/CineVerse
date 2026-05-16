import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import PropTypes from "prop-types";

const ThemeContext = createContext();

export const ThemeProvider = ({
  children,
}) => {

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ||
      "dark"
  );

  useEffect(() => {
    document.body.dataset.theme = theme;
    localStorage.setItem(
      "theme",
      theme
    );
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) =>
      prev === "dark"
        ? "light"
        : "dark"
    );
  }, []);

  const value = useMemo(
    () => ({
      theme,
      toggleTheme,
    }),
    [theme, toggleTheme]
  );

  return (
    <ThemeContext.Provider
      value={value}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () =>
  useContext(ThemeContext);