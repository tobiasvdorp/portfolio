"use client";

import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import useWOW from "@/hooks/useWOW";
import LanguageSwitcher from "./LanguageSwitcher";

type MenuItem = {
  textKey: string;
  link: string;
  animation: string;
};

const scrollOffset = 83;

const Navbar = () => {
  const { t } = useTranslation();
  const menuItems: MenuItem[] = [
    { textKey: "home", link: "#home", animation: "fadeInLeftBig" },
    { textKey: "aboutMe", link: "#aboutme", animation: "fadeInDownBig" },
    { textKey: "projects", link: "#projects", animation: "fadeInDownBig" },
    { textKey: "skills", link: "#skills", animation: "fadeInUpBig" },
    { textKey: "contact", link: "#contact", animation: "fadeInRightBig" },
  ];

  useWOW();

  useEffect(() => {
    if (typeof document === "undefined" || typeof window === "undefined") {
      return;
    }

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
    };

    anchors.forEach((anchor) => {
      anchor.addEventListener("click", handleClick);
    });

    return () => {
      anchors.forEach((anchor) => {
        anchor.removeEventListener("click", handleClick);
      });
    };
  }, []);

  return (
    <header className="header">
      <a
        href="#home"
        className="logo animate__animated animate__fadeInRightBig"
      >
        Tobias
      </a>

      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" htmlFor="menu-btn">
        <span className="navicon" />
      </label>
      <ul className="menu">
        {menuItems.map((item) => (
          <li key={item.textKey}>
            <a
              href={item.link}
              className={`item animate__animated animate__${item.animation}`}
            >
              {t(item.textKey)}
            </a>
          </li>
        ))}
        <li>
          <LanguageSwitcher />
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
