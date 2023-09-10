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
    <header>
      <h1>TODO</h1>
      <button
        type="button"
        aria-describedby="themeBtnDescription"
        onClick={() => changeTheme()}
      >
        <span
          id="themeBtnDescription"
          className="visually-hidden"
        >
          {themeMode === "light" ? "Switch to Dark Mode Theme" : "Switch to Light Mode Theme"}
        </span>
        {themeMode === "light" ? <IconMoon /> : <IconSun />}
      </button>
    </header>
  );
}
