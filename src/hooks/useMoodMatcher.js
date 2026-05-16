import { useState } from "react";
import {
  getMovieRecommendation,
} from "../services/aiClient";

export const useMoodMatcher = (
  onSearch
) => {
  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState(null);

  const findMovieByMood =
    async (mood) => {
      try {
        setLoading(true);

        setError(null);

        const movieTitle =
          await getMovieRecommendation(
            mood
          );

        if (movieTitle) {
          onSearch(movieTitle);
        }
      } catch (err) {
        const message =
          err?.message ||
          "AI recommendation failed.";
        console.error("useMoodMatcher error:", err);
        setError(message);
      } finally {
        setLoading(false);
      }
    };

  return {
    loading,
    error,
    findMovieByMood,
  };
};