"use client";
import { Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check initial theme preference
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    } else {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    }
    setIsDark(!isDark);
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2 rounded-lg hover:bg-cream-100 dark:hover:bg-dark-hover transition-colors"
      aria-label="Toggle dark mode"
    >
      <Sun
        className={`w-5 h-5 text-coffee-500 dark:text-dark-text transition-all duration-750 ${
          isDark ? "opacity-0 scale-0" : "opacity-100 scale-100"
        }`}
      />
      <Moon
        className={`w-5 h-5 text-dark-text absolute top-2 left-2 transition-all duration-750 ${
          isDark ? "opacity-100 scale-100" : "opacity-0 scale-0"
        }`}
      />
    </button>
  );
}
