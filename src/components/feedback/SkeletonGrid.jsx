import { useMemo } from "react";
import "./feedback.css";
import PropTypes from "prop-types";

const SkeletonCard = () => {
  return (
    <article className="skeleton-card">
      <div className="skeleton-poster"></div>
      <div className="skeleton-content">
        <div className="skeleton-title"></div>
        <div className="skeleton-subtitle"></div>
      </div>
    </article>
  );
};

const SkeletonGrid = ({ count = 12 }) => {
  const skeletonKeys = useMemo(
    () =>
      Array.from({ length: count }, () =>
        `${Math.random().toString(36).slice(2)}-${Date.now()}`
      ),
    [count]
  );

  return (
    <section className="movies-grid">
      {skeletonKeys.map((key) => (
        <SkeletonCard key={key} />
      ))}
    </section>
  );
};

SkeletonGrid.propTypes = {
  count: PropTypes.number,
};

export default SkeletonGrid;