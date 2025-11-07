"use client";

import { FormEvent, useState } from "react";
import { FaGripLines } from "react-icons/fa";
import { TbArrowsCross } from "react-icons/tb";
import { useTranslation } from "react-i18next";
import useWOW from "@/hooks/useWOW";
import Socials from "./Socials";

const formEndpoint = "https://formspree.io/f/xknlznnl";

const Contact = () => {
  const { t } = useTranslation();
  const [status, setStatus] = useState("");
  const [isDisordered, setIsDisordered] = useState(false);

  useWOW();

  const toggleDisordered = () => {
    setIsDisordered((prev) => !prev);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: formData.get("name")?.toString() ?? "",
      email: formData.get("email")?.toString() ?? "",
      message: formData.get("message")?.toString() ?? "",
    };

    try {
      const response = await fetch(formEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await response.json();

      if (data.ok) {
        setStatus(t("messageSent"));
        form.reset();
      } else {
        setStatus(t("somethingWentWrong"));
      }
    } catch (error) {
      console.error(error);
      setStatus(t("somethingWentWrong"));
    }
  };

  const disorderedClass = isDisordered
    ? "disordered animate__bounceInDown"
    : "wow animate__flipInX";

  return (
    <div className="contact" id="contact">
      <div className="flex">
        <h2 className="title2">{t("getInTouch")}</h2>
        <button
          className="filter-icon button"
          onClick={toggleDisordered}
          type="button"
          aria-label="Toggle animations"
        >
          {isDisordered ? <TbArrowsCross /> : <FaGripLines />}
        </button>
      </div>
      <h3 className="readmore">{t("friendRequestAccepted")}</h3>
      <form onSubmit={handleSubmit}>
        <div
          className={`name animate__animated ${disorderedClass} ${isDisordered ? "animate__slower" : ""}`}
        >
          <label htmlFor="name">{t("nameLabel")}</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div
          className={`email animate__animated ${disorderedClass} ${isDisordered ? "animate__slow" : ""}`}
        >
          <label htmlFor="email">{t("emailLabel")}</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div
          className={`message animate__animated ${disorderedClass} ${isDisordered ? "animate__fast" : ""}`}
        >
          <label htmlFor="message">{t("messageLabel")}</label>
          <textarea
            id="message"
            name="message"
            required
            onInput={(event) => {
              const target = event.currentTarget;
              target.style.height = "";
              target.style.height = `${target.scrollHeight}px`;
            }}
          />
        </div>
        <div
          id="senddiv"
          className={`animate__animated ${isDisordered ? "disordered animate__faster" : "wow animate__bounceInDown animate__flipInX"}`}
        >
          <button type="submit" className="button">
            {t("sendButton")}
          </button>
        </div>
        <div className="statusdiv">
          {status && (
            <p className="status animate__animated animate__fadeInLeft">
              {status}
            </p>
          )}
        </div>
      </form>
      <h3 className="readmore" id="findme">
        {t("orFindMeOn")}
      </h3>

      <Socials />
    </div>
  );
};

export default Contact;
