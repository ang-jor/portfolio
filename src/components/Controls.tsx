import { useEffect, useState } from "react";
import {
  IconMoonFilled,
  IconSunFilled,
  IconPlayerPauseFilled,
  IconPlayerPlayFilled,
  IconPaintFilled,
} from "@tabler/icons-react";

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
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Initialize from user's system preference
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });
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
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e: MediaQueryListEvent) => {
      setIsDarkMode(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

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
        className="filled-btn"
        title={isMotionDisabled ? "Enable animations" : "Disable animations"}
      >
        {isMotionDisabled ? (
          <IconPlayerPlayFilled size={24} />
        ) : (
          <IconPlayerPauseFilled size={24} />
        )}
      </button>
      <button
        onClick={handleShuffleColors}
        className="filled-btn"
        title="Shuffle container colors"
      >
        <IconPaintFilled size={24} />
      </button>
      <label className="toggle text-base-content toggle-xl">
        <input
          type="checkbox"
          value={isDarkMode ? "dark" : "light"}
          className="theme-controller"
          checked={isDarkMode}
          onChange={(event) => setIsDarkMode(event.target.checked)}
        />
        <IconSunFilled />
        <IconMoonFilled />
      </label>
    </div>
  );
};

export default Controls;
