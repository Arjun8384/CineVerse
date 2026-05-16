import { NavLink } from "react-router-dom";
import Container from "./Container";
import { useThemeContext } from "../../context/ThemeContext";
import "./layout.css";

const Header = () => {
  const { theme, toggleTheme } =
    useThemeContext();

  return (
    <header className="header">
      <Container className="header-content">
        <NavLink to="/" className="logo">
          CineStream
        </NavLink>

        <div className="header-actions">
          <nav className="nav-links">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "active-link"
                  : ""
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/favorites"
              className={({ isActive }) =>
                isActive
                  ? "active-link"
                  : ""
              }
            >
              Favorites
            </NavLink>
          </nav>

          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle Theme"
          >
            {theme === "dark"
              ? "☀️"
              : "🌙"}
          </button>
        </div>
      </Container>
    </header>
  );
};

export default Header;