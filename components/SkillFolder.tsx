"use client";

import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import type { StaticImageData } from "next/image";
import htmlLogo from "../public/images/HTMLlogo.png";
import cssLogo from "../public/images/CSSlogo.png";
import reactLogo from "../public/images/reactIMG.png";
import nextLogo from "../public/images/next.png";
import builderLogo from "../public/images/builder.avif";
import tailwindLogo from "../public/images/TailwindCSS.png";
import elementorLogo from "../public/images/Elementor.png";
import wordpressLogo from "../public/images/WordPress.png";
import Skill from "./Skill";
import TypeAnimation from "./TypeAnimationClient";

const REDUCE_MOTION_STORAGE_KEY = "reduceMotion";

type SkillDetail = {
  name: string;
  description: string;
  imageSrc: StaticImageData;
  skillLevel: string;
};

const SkillFolder = () => {
  const { t, i18n } = useTranslation();
  const [selectedSkillName, setSelectedSkillName] = useState<string | null>(
    null
  );
  const [shouldReduceMotion, setShouldReduceMotion] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const savedMotionPref = window.localStorage.getItem(
      REDUCE_MOTION_STORAGE_KEY
    );
    setShouldReduceMotion(savedMotionPref === "true");
  }, []);

  const skills = useMemo<SkillDetail[]>(
    () => [
      {
        name: "HTML",
        description: t("HTML_description"),
        imageSrc: htmlLogo,
        skillLevel: t("HTML_skillLevel"),
      },
      {
        name: "CSS",
        description: t("CSS_description"),
        imageSrc: cssLogo,
        skillLevel: t("CSS_skillLevel"),
      },
      {
        name: "React",
        description: t("React_description"),
        imageSrc: reactLogo,
        skillLevel: t("React_skillLevel"),
      },
      {
        name: "NextJS",
        description: t("NextJS_description"),
        imageSrc: nextLogo,
        skillLevel: t("NextJS_skillLevel"),
      },
      {
        name: "TailwindCSS",
        description: t("TailwindCSS_description"),
        imageSrc: tailwindLogo,
        skillLevel: t("TailwindCSS_skillLevel"),
      },
      {
        name: "Elementor",
        description: t("Elementor_description"),
        imageSrc: elementorLogo,
        skillLevel: t("Elementor_skillLevel"),
      },
      {
        name: "Builder.io",
        description: t("Builderio_description"),
        imageSrc: builderLogo,
        skillLevel: t("Builderio_skillLevel"),
      },
      {
        name: "WordPress",
        description: t("WordPress_description"),
        imageSrc: wordpressLogo,
        skillLevel: t("WordPress_skillLevel"),
      },
    ],
    [t]
  );

  // Get the current selected skill from the skills array
  const selectedSkill = useMemo(() => {
    if (!selectedSkillName) return null;
    return skills.find((skill) => skill.name === selectedSkillName) ?? null;
  }, [selectedSkillName, skills]);

  const selectSkill = (name: string) => {
    setSelectedSkillName(name);
  };

  return (
    <div className="skills" id="skills">
      <h2 className="title2">{t("skills_title")}</h2>
      <h3 className="readmore">{t("skills_under")}</h3>
      <div className="skill-folder-container">
        <div className="folder">
          <div className="folder-glow"></div>
          <div className="skills-column">
            <ul>
              {skills.map((skill) => (
                <Skill
                  key={skill.name}
                  name={skill.name}
                  onClick={selectSkill}
                  imageSrc={skill.imageSrc}
                  isActive={selectedSkillName === skill.name}
                  shouldReduceMotion={shouldReduceMotion}
                />
              ))}
            </ul>
          </div>
          <div className="skills-divider" />
          <div className="skills-description">
            {selectedSkill ? (
              <>
                <div id="whatisit">
                  <h3>{t("what_isit")}</h3>
                  <TypeAnimation
                    key={`description-${selectedSkill.name}-${i18n.language}`}
                    sequence={[selectedSkill.description, 1000]}
                    speed={90}
                    style={{ color: "var(--text)" }}
                  />
                </div>
                <h3>{t("how_skilled")}</h3>
                <TypeAnimation
                  key={`skill-level-${selectedSkill.name}-${i18n.language}`}
                  sequence={[selectedSkill.skillLevel, 1000]}
                  speed={90}
                  style={{ color: "var(--text)" }}
                />
              </>
            ) : (
              <p
                id="select-skill"
                className={
                  !shouldReduceMotion
                    ? "animate__fadeInDown wow animate__animated animation-delay-1s"
                    : ""
                }
              >
                {t("skills_select")}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillFolder;
