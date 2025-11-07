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
        {/* About Myself Section */}
        <div className="about-myself-wrapper">
          <div className="section-header">
            <h2 className="title2">{t("About myself.")}</h2>
            <h3 className="readmore">{t("Limited edition.")}</h3>
          </div>
          <div className="wow animate__fadeInRight animate__animated about-me-card">
            <div className="about-me-card-header">
              {/* <div className="about-me-icon-wrapper">
                <i className="fa fa-user-circle" />
              </div> */}
              <div className="about-me-header-content">
                <h3>{t("Tobias van Dorp")}</h3>
                <div className="about-me-meta">
                  <div className="date-badge">
                    <i className="fa fa-calendar" />
                    <span>{t("February 7th 2003")}</span>
                  </div>
                  <div className="location-badge">
                    <i className="fa fa-map-marker-alt" />
                    <span>{t("Maarn, Utrecht, Netherlands")}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="about-me-card-body">
              <p>{t("aboutme_description")}</p>
            </div>
            <div className="about-me-card-glow"></div>
          </div>
        </div>

        {/* Career Section */}
        <div className="mycarreer">
          <div className="section-header">
            <h2 className="title2" id="carreer">
              {t("My carreer")}
            </h2>
            <h3 className="readmore">
              {t("Experience points accumulating...")}
            </h3>
          </div>
          <div className="timeline-container">
            <div className="timeline-line"></div>
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
    </div>
  );
};

export default AboutMe;
