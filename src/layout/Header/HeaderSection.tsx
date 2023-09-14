// Hooks
import { useEffect, useState } from "react";

// Components
import IconMoon from "../../Icons/IconMoon";
import IconSun from "../../Icons/IconSun";

// Styles
import "./headerSection.scss";

const LOCAL_STORAGE_THEME_KEY = "theme";

export default function HeaderSection() {
  const [theme, setTheme] = useState(localStorage.getItem(LOCAL_STORAGE_THEME_KEY));

  useEffect(() => {
    const prefferedTheme = window.matchMedia("(prefers-color-scheme: light)").matches
      ? "light"
      : "dark";
    const storedTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY);

    if (!storedTheme) {
      localStorage.setItem(LOCAL_STORAGE_THEME_KEY, prefferedTheme);
    } else {
      setTheme(storedTheme);
    }

    if (theme == null) return;
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  function toggleTheme() {
    const newTheme = theme === "light" ? "dark" : "light";
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    setTheme(newTheme);
  }

  return (
    <header className="container todo-header">
      <h1>Todo</h1>
      <button
        type="button"
        aria-label={theme === "light" ? "Switch to Dark Mode Theme" : "Switch to Light Mode Theme"}
        onClick={toggleTheme}
      >
        {theme === "light" ? <IconMoon /> : <IconSun />}
      </button>
    </header>
  );
}
