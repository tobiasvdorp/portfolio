"use client";

import { useTranslation } from "react-i18next";
import useWOW from "@/hooks/useWOW";
import AboutMeCard from "./AboutMeCard";

const AboutMe = () => {
  const { t } = useTranslation();

  useWOW();

  return (
    <div id="aboutme" className="sectionClass">
      <div className="row">
        <div>
          <h2 className="title2">{t("About myself.")}</h2>
          <h3 className="readmore">{t("Limited edition.")}</h3>
          <div className="wow animate__fadeInRight animate__animated tobias">
            <h3>{t("About Tobias van Dorp")}</h3>
            <div className="date">
              <i className="fa fa-calendar" />
              {t("February 7th 2003")}
            </div>
            <h4>
              <i className="fa fa-flag fa-sm" />
              {t("Maarn, Utrecht, Netherlands")}
            </h4>
            <p>{t("aboutme_description")}</p>
          </div>
        </div>

        <div className="mycarreer">
          <h2 className="title2" id="carreer">
            {t("My carreer")}
          </h2>
          <h3 className="readmore">{t("Experience points accumulating...")}</h3>
          <ul className="cbp_tmtimeline">
            <AboutMeCard
              title={t("HAVO-degree")}
              date={t("Juli 2021")}
              location={t("Amersfoort, Utrecht")}
              description={
                <>
                  {t("havo_description")}
                  <a
                    href="https://www.socrateshonours.org/lid-worden/socrates-awards"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="socrates"
                  >
                    {t("Socrates Award")}
                  </a>{" "}
                  {t("havo_description_2")}
                </>
              }
            />
            <AboutMeCard
              title={t("Bachelor's degree at OpenICT")}
              date={t("September 2022 - now")}
              location="Hogeschool Utrecht"
              description={t("openict_description")}
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
