import { useState } from "react";

import IconMoon from "../../Icons/IconMoon";
import IconSun from "../../Icons/IconSun";

import "./header.scss";

export default function Header() {
  const [themeMode, setThemeMode] = useState("light");

  function changeTheme() {
    if (themeMode === "light") {
      setThemeMode("dark");
    } else {
      setThemeMode("light");
    }
    document.body.setAttribute("data-theme", themeMode);
  }

  return (
    <header className="container todo-header">
      <h1>Todo</h1>
      <button
        type="button"
        aria-label={
          themeMode === "light" ? "Switch to Dark Mode Theme" : "Switch to Light Mode Theme"
        }
        onClick={() => changeTheme()}
      >
        {themeMode === "light" ? <IconMoon /> : <IconSun />}
      </button>
    </header>
  );
}
