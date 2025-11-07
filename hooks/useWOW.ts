"use client";

import { useEffect } from "react";
const useWOW = () => {
  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const loadWOW = async () => {
      const wowModule = await import("wowjs");
      const wow = new wowModule.WOW({ live: false });
      wow.init();
    };

    void loadWOW();
  }, []);
};

export default useWOW;
