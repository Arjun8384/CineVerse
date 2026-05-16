import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import PropTypes from "prop-types";

const FavoritesContext =
  createContext();

export const FavoritesProvider = ({
  children,
}) => {
  const [favorites, setFavorites] =
    useState(() => {
      const storedFavorites =
        localStorage.getItem(
          "cineFavorites"
        );

      return storedFavorites
        ? JSON.parse(
            storedFavorites
          )
        : [];
    });

  useEffect(() => {
    localStorage.setItem(
      "cineFavorites",
      JSON.stringify(favorites)
    );
  }, [favorites]);

  const toggleFavorite = (
    movie
  ) => {
    setFavorites((prev) => {
      const exists = prev.some(
        (item) =>
          item.id === movie.id
      );

      if (exists) {
        return prev.filter(
          (item) =>
            item.id !== movie.id
        );
      }

      return [...prev, movie];
    });
  };

  const isFavorite = (id) => {
    return favorites.some(
      (movie) => movie.id === id
    );
  };

  const contextValue = useMemo(
    () => ({
      favorites,
      toggleFavorite,
      isFavorite,
    }),
    [favorites]
  );

  return (
    <FavoritesContext.Provider
      value={contextValue}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites =
  () => {
    return useContext(
      FavoritesContext
    );
  };

FavoritesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};