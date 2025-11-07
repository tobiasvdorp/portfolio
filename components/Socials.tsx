"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";

const Socials = () => {
  const { t } = useTranslation();
  const [showAddMe, setShowAddMe] = useState(false);

  const toggleAddMe = () => {
    setShowAddMe((prev) => !prev);
  };

  return (
    <>
      <div id="socials">
        <div className="socials-container">
          <hr />
          <button onClick={toggleAddMe} className="button" type="button">
            <i className="fa-brands fa-2xl fa-discord" />
          </button>
          <a
            href="https://github.com/tobiasvdorp"
            target="_blank"
            rel="noopener noreferrer"
            className="button"
          >
            <i className="fa-brands fa-2xl fa-github" />
          </a>
          <a
            href="https://www.linkedin.com/in/tobias-van-dorp-433189257/"
            target="_blank"
            rel="noopener noreferrer"
            className="button"
          >
            <i className="fa-brands fa-2xl fa-linkedin" />
          </a>
          <hr />
        </div>
      </div>
      {showAddMe && (
        <div className="animate__animated animate__fadeInLeft">
          <p className="status addme">
            {t("addMeOnDiscord")} <b>tobiasvandorp</b>
          </p>
        </div>
      )}
    </>
  );
};

export default Socials;
