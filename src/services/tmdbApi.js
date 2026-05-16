import tmdbClient from "./tmdbClient";

export const getPopularMovies =
  async (page = 1) => {
    const response =
      await tmdbClient.get(
        "/movie/popular",
        {
          params: {
            page,
          },
        }
      );

    return response.data;
  };

export const searchMovies =
  async (
    query,
    page = 1
  ) => {
    const response =
      await tmdbClient.get(
        "/search/movie",
        {
          params: {
            query,
            page,
          },
        }
      );

    return response.data;
  };