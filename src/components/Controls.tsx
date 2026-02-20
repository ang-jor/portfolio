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
  const [isMotionDisabled, setIsMotionDisabled] = useState(false);
  const [colors, setColors] = useState(defaultColors);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark-mode");
    } else {
      document.documentElement.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  useEffect(() => {
    if (isMotionDisabled) {
      document.documentElement.classList.add("no-motion");
    } else {
      document.documentElement.classList.remove("no-motion");
    }
  }, [isMotionDisabled]);

  useEffect(() => {
    onColorsChange?.(colors);
  }, [colors, onColorsChange]);

  const handleShuffleColors = () => {
    setColors(shuffleArray(colorOptions).slice(0, 5));
  };

  return (
    <div className="toggle-content">
      <button
        onClick={() => setIsMotionDisabled((previous) => !previous)}
        className="btn btn-soft btn-circle shuffle-btn"
        title={isMotionDisabled ? "Enable animations" : "Disable animations"}
      >
        <i
          className={`fa-solid ${isMotionDisabled ? "fa-play" : "fa-pause"}`}
        ></i>
      </button>
      <button
        onClick={handleShuffleColors}
        className="btn btn-soft btn-circle shuffle-btn"
        title="Shuffle container colors"
      >
        <i className="fa-solid fa-shuffle"></i>
      </button>
      <label className="toggle text-base-content toggle-xl">
        <input
          type="checkbox"
          value="synthwave"
          className="theme-controller"
          checked={isDarkMode}
          onChange={(event) => setIsDarkMode(event.target.checked)}
        />
        <svg
          aria-label="sun"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="12" cy="12" r="4"></circle>
            <path d="M12 2v2"></path>
            <path d="M12 20v2"></path>
            <path d="m4.93 4.93 1.41 1.41"></path>
            <path d="m17.66 17.66 1.41 1.41"></path>
            <path d="M2 12h2"></path>
            <path d="M20 12h2"></path>
            <path d="m6.34 17.66-1.41 1.41"></path>
            <path d="m19.07 4.93-1.41 1.41"></path>
          </g>
        </svg>
        <svg
          aria-label="moon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2"
            fill="none"
            stroke="currentColor"
          >
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
          </g>
        </svg>
      </label>
    </div>
  );
};

export default Controls;
