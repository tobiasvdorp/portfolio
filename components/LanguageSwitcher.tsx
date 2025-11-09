"use client";

import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.resolvedLanguage || i18n.language;

  const toggleLanguage = () => {
    const newLanguage = currentLanguage === "en" ? "nl" : "en";
    void i18n.changeLanguage(newLanguage);
  };

  return (
    <button
      className="lang-toggle"
      onClick={toggleLanguage}
      aria-label={`Switch to ${currentLanguage === "en" ? "Dutch" : "English"}`}
      data-lang={currentLanguage}
      type="button"
    >
      <span
        className={`lang-toggle-option ${currentLanguage === "nl" ? "active" : ""}`}
      >
        🇳🇱
      </span>
      <span
        className={`lang-toggle-option ${currentLanguage === "en" ? "active" : ""}`}
      >
        🇬🇧
      </span>
      <span className="lang-toggle-slider"></span>
    </button>
  );
};

export default LanguageSwitcher;
