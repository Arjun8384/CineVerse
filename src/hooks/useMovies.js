import {
  useCallback,
  useEffect,
  useState,
} from "react";

import {
  getPopularMovies,
  searchMovies,
} from "../services/tmdbApi";

import {
  removeDuplicateMovies,
} from "../utils/format";


export const useMovies = () => {
  const [movies, setMovies] =
    useState([]);

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState(null);

  const [page, setPage] =
    useState(1);

  const [query, setQuery] =
    useState("");

  const [hasMore, setHasMore] =
    useState(true);

  useEffect(() => {
    const fetchMovies =
      async () => {
        try {
          setLoading(true);

          setError(null);

          const response =
            query
              ? await searchMovies(
                  query,
                  page
                )
              : await getPopularMovies(
                  page
                );

          const results =
            response.results || [];

          setMovies((prev) => {
            if (page === 1) {
              return results;
            }

            return removeDuplicateMovies(
              [...prev, ...results]
            );
          });

          setHasMore(
            page <
              response.total_pages
          );
        } catch (err) {
          console.error(err);
          setError(
            err instanceof Error
              ? err.message
              : "Failed to fetch movies."
          );
        } finally {
          setLoading(false);
        }
      };

    fetchMovies();
  }, [page, query]);

  const handleSearch =
    useCallback(
      (searchQuery) => {
        setMovies([]);

        setPage(1);

        setQuery(searchQuery);
      },
      []
    );

  const fetchNextPage =
    useCallback(() => {
      if (loading || !hasMore)
        return;

      setPage((prev) => prev + 1);
    }, [loading, hasMore]);

  return {
    movies,
    loading,
    error,
    query,
    hasMore,
    handleSearch,
    fetchNextPage,
  };
};