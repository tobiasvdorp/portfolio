"use client";

import { useEffect, useState } from "react";

const REDUCE_MOTION_STORAGE_KEY = "reduceMotion";

const AnimateSwitcher = () => {
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const savedMotionPref = window.localStorage.getItem(
      REDUCE_MOTION_STORAGE_KEY,
    );
    if (savedMotionPref !== null) {
      setReduceMotion(savedMotionPref === "true");
    } else if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setReduceMotion(true);
    }
  }, []);

  useEffect(() => {
    if (typeof document === "undefined" || typeof window === "undefined") {
      return;
    }

    document.body.dataset.reduceMotion = reduceMotion ? "true" : "false";
    window.localStorage.setItem(
      REDUCE_MOTION_STORAGE_KEY,
      JSON.stringify(reduceMotion),
    );
  }, [reduceMotion]);

  const toggleMotion = () => {
    setReduceMotion((prevState) => !prevState);
  };

  return (
    <div className="toggleWrapper">
      <input
        type="checkbox"
        id="animate"
        className="animate-checkbox"
        checked={!reduceMotion}
        onChange={toggleMotion}
      />
      <label
        htmlFor="animate"
        className={`toggle ${!reduceMotion ? "checked" : ""}`}
      >
        <span className="toggle__handler" />
      </label>
    </div>
  );
};

export default AnimateSwitcher;
