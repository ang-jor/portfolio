import { useEffect, useState } from "react";

const colorOptions = [
  "var(--color-intro)",
  "var(--color-about)",
  "var(--color-projects)",
  "var(--color-experience)",
  "var(--color-contact)",
  "var(--color-toggle-bg)",
];

const defaultColors = [
  "var(--color-intro)",
  "var(--color-about)",
  "var(--color-experience)",
  "var(--color-projects)",
  "var(--color-contact)",
];

const shuffleArray = (array: string[]) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

interface ControlsProps {
  onColorsChange?: (colors: string[]) => void;
}

const Controls = ({ onColorsChange }: ControlsProps) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [colors, setColors] = useState(defaultColors);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark-mode");
    } else {
      document.documentElement.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  useEffect(() => {
    onColorsChange?.(colors);
  }, [colors, onColorsChange]);

  const handleShuffleColors = () => {
    setColors(shuffleArray(colorOptions).slice(0, 5));
  };

  const handleToggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <div className="toggle-content">
      <button
        onClick={handleToggleDarkMode}
        className="btn btn-soft theme-toggle-btn"
        title="Toggle dark/light mode"
      >
        <i
          className={`fa-solid ${
            isDarkMode ? "fa-moon" : "fa-sun"
          } theme-icon ${isDarkMode ? "icon-spin-in" : "icon-spin-in"}`}
          key={isDarkMode ? "moon" : "sun"}
        />
      </button>
      <button
        onClick={handleShuffleColors}
        className="btn btn-soft shuffle-btn"
        title="Shuffle container colors"
      >
        <i className="fa-solid fa-shuffle"></i>
      </button>
    </div>
  );
};

export default Controls;
