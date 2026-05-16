import { useState } from "react";
import PropTypes from "prop-types";
import "./search.css";

const MoodMatcher = ({
  onSubmit,
  loading,
}) => {
  const [mood, setMood] =
    useState("");
  const handleSubmit = async (
    e
  ) => {
    e.preventDefault();
    if (!mood.trim()) return;
    await onSubmit(mood);
    setMood("");
  };

  return (
    <form
      className="mood-form"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Describe your mood..."
        value={mood}
        onChange={(e) =>
          setMood(
            e.target.value
          )
        }
        className="mood-input"
      />

      <button
        type="submit"
        className="mood-button"
        disabled={loading}
      >
        {loading
          ? "Thinking..."
          : "AI Search"}
      </button>
    </form>
  );
};

export default MoodMatcher;
MoodMatcher.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    loading: PropTypes.bool,
}