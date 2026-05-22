"use client";

import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const TOAST_STORAGE_KEY = "portfolioOutdatedToastSeen";
const CLOSE_ANIMATION_MS = 350;

const OutdatedToast = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const hasSeenToast = window.localStorage.getItem(TOAST_STORAGE_KEY);
    if (!hasSeenToast) {
      setIsVisible(true);
      window.localStorage.setItem(TOAST_STORAGE_KEY, "true");
    }
  }, []);

  const handleDismiss = () => {
    setIsClosing(true);
    window.setTimeout(() => {
      setIsVisible(false);
      setIsClosing(false);
    }, CLOSE_ANIMATION_MS);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className={`toast-notice animated ${
        isClosing ? "toast-notice--closing" : "toast-notice--open"
      }`}
      role="status"
      aria-live="polite"
    >
      <div className="toast-notice__content">
        <p className="toast-notice__title">{t("portfolioNoticeTitle")}</p>
        <p className="toast-notice__message">{t("portfolioNoticeMessage")}</p>
      </div>
      <button
        className="toast-notice__dismiss"
        type="button"
        onClick={handleDismiss}
      >
        {t("portfolioNoticeDismiss")}
      </button>
    </div>
  );
};

export default OutdatedToast;
