"use client";

import { useCallback, useEffect, useState } from "react";

const THEME_STORAGE_KEY = "theme";

type Theme = "light" | "dark";

const ModeSwitcher = () => {
  const [theme, setTheme] = useState<Theme>("dark");

  const applyTheme = useCallback((nextTheme: Theme) => {
    if (typeof document === "undefined" || typeof window === "undefined") {
      return;
    }

    document.body.setAttribute("data-theme", nextTheme);
    window.localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
    setTheme(nextTheme);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const storedTheme = window.localStorage.getItem(
      THEME_STORAGE_KEY,
    ) as Theme | null;
    applyTheme(storedTheme ?? "dark");
  }, [applyTheme]);

  const handleThemeChange = () => {
    applyTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="toggleWrapper">
      <input
        type="checkbox"
        id="dn"
        className="dn"
        checked={theme === "dark"}
        onChange={handleThemeChange}
      />
      <label
        htmlFor="dn"
        className={`toggle ${theme === "dark" ? "checked" : ""}`}
      >
        <span className="toggle__handler" />
      </label>
    </div>
  );
};

export default ModeSwitcher;
