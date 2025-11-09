"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const ModeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="toggleWrapper">
        <input
          type="checkbox"
          id="dn"
          className="dn"
          checked={false}
          readOnly
        />
        <label htmlFor="dn" className="toggle">
          <span className="toggle__handler" />
        </label>
      </div>
    );
  }

  const handleThemeChange = () => {
    setTheme(theme === "dark" ? "light" : "dark");
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
