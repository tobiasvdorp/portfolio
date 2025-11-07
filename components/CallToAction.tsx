"use client";

import { useTranslation } from "react-i18next";
import useWOW from "@/hooks/useWOW";
import TypeAnimation from "./TypeAnimationClient";
import { FaCode, FaRocket, FaArrowDown } from "react-icons/fa";
import { useEffect, useState, useRef } from "react";

const CallToAction = () => {
  const { t, i18n } = useTranslation();
  const particlesRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useWOW();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Parallax effect: particles scroll langzamer (0.3x snelheid)
  const parallaxOffset = -scrollY * 0.3;

  return (
    <div className="hero-container">
      {/* Floating particles */}
      <div
        ref={particlesRef}
        className="hero-particles"
        style={{
          transform: `translateY(${parallaxOffset}px)`,
        }}
      >
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{ "--delay": i * 0.3 + "s" } as React.CSSProperties}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="hero-content">
        {/* Greeting badge */}
        <div className="hero-badge animate__animated animate__fadeInDown">
          <FaCode className="hero-badge-icon" />
          <span>Tobias van Dorp</span>
        </div>

        {/* Main heading */}
        <h1 className="hero-title animate__animated animate__fadeInUp">
          <span className="hero-title-line">{t("Hi")},</span>
          <span className="hero-title-main">
            <TypeAnimation
              key={i18n.language}
              sequence={[t("I'm Tobias.")]}
              speed={50}
              repeat={0}
              cursor={true}
              style={{ color: "var(--accent)" }}
            />
          </span>
          {/* <span className="hero-title-subtitle">
            {t("Welcome")} to my digital space
          </span> */}
        </h1>

        {/* Description */}
        <p className="hero-description animate__animated animate__fadeInUp animate__delay-1s">
          {t("heroDescription")}
        </p>

        {/* CTA Buttons */}
        <div className="hero-actions animate__animated animate__fadeInUp animate__delay-2s">
          <a className="hero-button hero-button-primary" href="#aboutme">
            <span>{t("Explore")}</span>
            <FaRocket className="hero-button-icon" />
          </a>
          <a className="hero-button hero-button-secondary" href="#projects">
            <span>{t("viewWork")}</span>
            <FaArrowDown className="hero-button-icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
