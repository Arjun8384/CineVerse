import { useState, useEffect } from "react";
import { useDebounce } from "../../hooks/useDebounce";
import PropTypes from "prop-types";
import "./search.css";

const SearchBar = ({
  onSearch,
  delay = 500,
}) => {
  const [query, setQuery] = useState("");
  
  const debouncedQuery = useDebounce(
    query,
    delay
  );

  useEffect(() => {
    onSearch(debouncedQuery.trim());
  }, [debouncedQuery, onSearch]);

  return (
    <section className="search-section">
      <input
        type="text"
        placeholder="Search movies..."
        className="search-input"
        value={query}
        onChange={(e) =>
          setQuery(e.target.value)
        }
      />
    </section>
  );
};

export default SearchBar;

SearchBar.propTypes = {
    onSearch: PropTypes.func.isRequired,
    delay: PropTypes.number,
};