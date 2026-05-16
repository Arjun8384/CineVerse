import {
  useCallback,
  useRef,
} from "react";

export const useInfiniteScroll = (
  fetchNextPage,
  loading,
  hasMore
) => {
  const observer =
    useRef(null);

  const lastElementRef =
    useCallback(
      (node) => {
        if (loading) return;

        if (observer.current) {
          observer.current.disconnect();
        }

        observer.current =
          new IntersectionObserver(
            (entries) => {
              if (
                entries[0]
                  .isIntersecting &&
                hasMore
              ) {
                fetchNextPage();
              }
            },
            {
              root: null,
              rootMargin:
                "300px",
              threshold: 0,
            }
          );

        if (node) {
          observer.current.observe(
            node
          );
        }
      },
      [
        loading,
        hasMore,
        fetchNextPage,
      ]
    );

  return lastElementRef;
};