"use client";

import { ChangeEvent } from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.resolvedLanguage || i18n.language;

  const changeLanguage = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguage = event.target.value;
    void i18n.changeLanguage(selectedLanguage);
  };

  return (
    <div className="lang-switch-container">
      <select
        value={currentLanguage}
        onChange={changeLanguage}
        style={{ fontSize: "35px" }}
      >
        <option value="en">🇬🇧</option>
        <option value="nl">🇳🇱</option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;
