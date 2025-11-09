import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import avatar from "../public/images/avatar.png";
import htmlLogo from "../public/images/HTMLlogo.png";
import cssLogo from "../public/images/CSSlogo.png";
import tailwindLogo from "../public/images/TailwindCSS.png";
import wordpressLogo from "../public/images/WordPress.png";
import elementorLogo from "../public/images/Elementor.png";
import nuspiLogo from "../public/images/nuspi.png";
import judithScreenshot from "../public/images/judith.png";
import nextLogo from "../public/images/next.png";
import builderLogo from "../public/images/builder.avif";
import Card, { type ProjectSkill } from "./Card";

type Project = {
  id: number;
  imageSrc: string;
  title: string;
  description: string;
  detailDescription: string;
  skills: ProjectSkill[];
  projectLocation: string;
  className: string;
  wowDelay: string;
};

const Projects = () => {
  const { t } = useTranslation();

  const projects = useMemo<Project[]>(
    () => [
      {
        id: 1,
        imageSrc: avatar.src,
        title: t("project1_title"),
        description: t("project1_description"),
        skills: [
          { name: "HTML", image: htmlLogo },
          { name: "CSS", image: cssLogo },
        ],
        detailDescription: t("project1_detailDescription"),
        projectLocation: "/Portfolio-1.html",
        className: "animate__animated animate__bounceIn",
        wowDelay: "0.5s",
      },
      {
        id: 2,
        imageSrc:
          "https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2340",
        title: t("project2_title"),
        description: t("project2_description"),
        skills: [
          { name: "HTML", image: htmlLogo },
          { name: "CSS", image: cssLogo },
          { name: "TailwindCSS", image: tailwindLogo },
        ],
        detailDescription: t("project2_detailDescription"),
        projectLocation: "/hairdresser-project.html",
        className: "animate__animated animate__bounceIn",
        wowDelay: "0.7s",
      },
      {
        id: 4,
        imageSrc: nuspiLogo.src,
        title: t("project4_title"),
        description: t("project4_description"),
        skills: [
          { name: "CSS", image: cssLogo },
          { name: "WordPress", image: wordpressLogo },
          { name: "Elementor", image: elementorLogo },
        ],
        detailDescription: t("project4_detailDescription"),
        projectLocation: "https://www.netwerkuspinclusief.nl/",
        className: "animate__animated animate__bounceIn nuspi",
        wowDelay: "1.1s",
      },
      {
        id: 5,
        imageSrc: judithScreenshot.src,
        title: t("project5_title"),
        description: t("project5_description"),
        skills: [
          { name: "NextJS", image: nextLogo },
          { name: "TailwindCSS", image: tailwindLogo },
          { name: "BuilderIO", image: builderLogo },
        ],
        detailDescription: t("project5_detailDescription"),
        projectLocation: "https://judith-website.vercel.app/",
        className: "animate__animated animate__bounceIn",
        wowDelay: "1.2s",
      },
    ],
    [t]
  );

  return (
    <div className="projects" id="projects">
      <div className="flex">
        <h2 className="title2">{t("Projects.")}</h2>
      </div>
      <h3 className="readmore">{t("Click on a card to read more.")}</h3>
      <div className="projects-cards">
        {projects.map((project) => (
          <Card
            key={project.id}
            imageSrc={project.imageSrc}
            title={project.title}
            description={project.description}
            detailDescription={project.detailDescription}
            skills={project.skills}
            projectLocation={project.projectLocation}
            className={project.className}
            wowDelay={project.wowDelay}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
