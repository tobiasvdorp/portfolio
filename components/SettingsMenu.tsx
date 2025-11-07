"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import AnimateSwitcher from "./AnimateSwitcher";
import ModeSwitcher from "./ModeSwitcher";

const SettingsMenu = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [animationClass, setAnimationClass] = useState("animate__bounceInLeft");

  const openMenu = () => {
    setAnimationClass("animate__bounceOutLeft");
    window.setTimeout(() => {
      setAnimationClass("animate__bounceInLeft");
      setIsOpen(true);
    }, 300);
  };

  const closeMenu = () => {
    setAnimationClass("animate__bounceOutLeft");

    window.setTimeout(() => {
      setAnimationClass("animate__bounceInLeft");
    }, 300);
    window.setTimeout(() => {
      setIsOpen(false);
    }, 300);
  };

  return (
    <div
      className={`settings-menu ${isOpen ? "active" : ""} animate__animated ${animationClass}`}
    >
      <div className={`gear ${isOpen ? "active" : ""}`}>
        <i
          className="fa-solid fa-gear fa-2xl settings-button"
          onClick={openMenu}
        />
      </div>
      <div className={`settings-content ${isOpen ? "active" : ""}`}>
        <div className="left">
          <h4>{t("settings")}</h4>
          <button
            onClick={closeMenu}
            className="modal-close button"
            type="button"
          >
            X
          </button>
        </div>
        <div className="theme">
          {t("theme")}
          <ModeSwitcher />
        </div>
        <div className="anima">
          {t("animations")}
          <AnimateSwitcher />
        </div>
      </div>
    </div>
  );
};

export default SettingsMenu;
