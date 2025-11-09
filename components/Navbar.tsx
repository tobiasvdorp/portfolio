"use client";

import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

const scrollOffset = 70;

const Navbar = () => {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { textKey: "home", link: "#home" },
    { textKey: "aboutMe", link: "#aboutme" },
    { textKey: "projects", link: "#projects" },
    { textKey: "skills", link: "#skills" },
    { textKey: "contact", link: "#contact" },
  ];

  useEffect(() => {
    if (typeof document === "undefined" || typeof window === "undefined") {
      return;
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    const anchors = Array.from(
      document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]'),
    );

    const handleClick = (event: MouseEvent) => {
      event.preventDefault();
      const anchor = event.currentTarget as HTMLAnchorElement | null;
      const href = anchor?.getAttribute("href");

      if (!href) {
        return;
      }

      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const top =
          window.pageYOffset +
          targetElement.getBoundingClientRect().top -
          scrollOffset;
        window.scrollTo({
          top,
          behavior: "smooth",
        });
      }

      // Close mobile menu when clicking a link
      setIsMobileMenuOpen(false);
    };

    anchors.forEach((anchor) => {
      anchor.addEventListener("click", handleClick);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      anchors.forEach((anchor) => {
        anchor.removeEventListener("click", handleClick);
      });
    };
  }, []);

  return (
    <header className={`navbar ${isScrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-container">
        <a href="#home" className="navbar-logo">
          Tobias
        </a>

        <button
          className={`navbar-toggle ${isMobileMenuOpen ? "active" : ""}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className="navbar-toggle-line"></span>
          <span className="navbar-toggle-line"></span>
          <span className="navbar-toggle-line"></span>
        </button>

        <nav className={`navbar-menu ${isMobileMenuOpen ? "active" : ""}`}>
          {menuItems.map((item) => (
            <a
              key={item.textKey}
              href={item.link}
              className="navbar-link"
            >
              <span className="navbar-link-text">{t(item.textKey)}</span>
            </a>
          ))}
          <div className="navbar-lang">
            <LanguageSwitcher />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
