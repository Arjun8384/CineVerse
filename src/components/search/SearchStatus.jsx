import "./search.css";
import PropTypes from "prop-types";

const SearchStatus = ({
  query,
  totalResults,
  loading,
}) => {
  if (loading) {
    return (
      <p className="search-status">
        Searching movies...
      </p>
    );
  }

  if (!query) {
    return (
      <p className="search-status">
        Trending popular movies
      </p>
    );
  }

  return (
    <p className="search-status">
      Found {totalResults} result
      {totalResults === 1 ? "" : "s"}
      {" "}for "{query}"
    </p>
  );
};

export default SearchStatus;

SearchStatus.propTypes = {
    query: PropTypes.string,
    totalResults: PropTypes.number,
    loading: PropTypes.bool,
}