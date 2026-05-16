import { FALLBACK_POSTER } from "./constants";

/* Build TMDB Image URL */

export const getImageUrl = (
  path
) => {
  if (!path) {
    return FALLBACK_POSTER;
  }

  return `${
    import.meta.env
      .VITE_TMDB_IMAGE_BASE_URL
  }${path}`;
};

export const getBlurImage = (
  path
) => {
  if (!path) {
    return FALLBACK_POSTER;
  }

  return `https://image.tmdb.org/t/p/w200${path}`;
};