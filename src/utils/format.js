export const getYear = (
  dateString
) => {
  if (!dateString)
    return number | "N/A";

  return new Date(
    dateString
  ).getFullYear();
};

export const formatRating = (
  rating
) => {
  if (!rating) return "N/A";

  return Number(rating).toFixed(
    1
  );
};

export const truncateText = (
  text,
  maxLength = 50
) => {
  if (!text) return "";

  if (text.length <= maxLength) {
    return text;
  }

  return `${text.slice(
    0,
    maxLength
  )}...`;
};

export const removeDuplicateMovies =
  (movies) => {
    return movies.filter(
      (movie, index, self) =>
        index ===
        self.findIndex(
          (m) => m.id === movie.id
        )
    );
  };