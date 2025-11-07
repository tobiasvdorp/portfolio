"use client";

import { useEffect, useState } from "react";

const GlobalGlow = () => {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate position relative to viewport
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;

      setMousePosition({ x, y });
    };

    // Initialize with center position
    setMousePosition({ x: 50, y: 50 });

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className="global-glow"
      style={{
        background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, var(--accent) 0%, transparent 20%)`,
      }}
    />
  );
};

export default GlobalGlow;
