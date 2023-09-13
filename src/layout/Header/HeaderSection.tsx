// Hooks
import { useEffect, useState } from "react";

// Components
import IconMoon from "../../Icons/IconMoon";
import IconSun from "../../Icons/IconSun";

// Styles
import "./headerSection.scss";

export default function HeaderSection() {
  const [theme, setTheme] = useState(localStorage.getItem("theme"));

  useEffect(() => {
    const prefferedTheme = window.matchMedia("(prefers-color-scheme: light)").matches
      ? "light"
      : "dark";
    const storedTheme = localStorage.getItem("theme");

    if (!storedTheme) {
      localStorage.setItem("theme", prefferedTheme);
    } else {
      setTheme(storedTheme);
    }

    if (theme == null) return;
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  function toggleTheme() {
    const newTheme = theme === "light" ? "dark" : "light";
    localStorage.setItem("theme", newTheme);
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
