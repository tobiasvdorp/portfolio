"use client";

import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import type { StaticImageData } from "next/image";
import avatar from "../public/images/avatar.png";
import htmlLogo from "../public/images/HTMLlogo.png";
import cssLogo from "../public/images/CSSlogo.png";
import tailwindLogo from "../public/images/TailwindCSS.png";
import loginScreenshot from "../public/images/login.png";
import wordpressLogo from "../public/images/WordPress.png";
import elementorLogo from "../public/images/Elementor.png";
import nuspiLogo from "../public/images/nuspi.png";
import judithScreenshot from "../public/images/judith.png";
import nextLogo from "../public/images/next.png";
import builderLogo from "../public/images/builder.avif";
import Card, { type ProjectSkill } from "./Card";
import FilterButton from "./FilterButton";
import Filters, { type ProjectCategory } from "./Filters";

type ProjectTag = Exclude<ProjectCategory, "all">;

type Project = {
  id: number;
  imageSrc: StaticImageData;
  title: string;
  description: string;
  detailDescription: string;
  skills: ProjectSkill[];
  projectLocation: string;
  className: string;
  wowDelay: string;
  tag: ProjectTag;
};

const Projects = () => {
  const { t } = useTranslation();
  const [activeFilters, setActiveFilters] = useState<ProjectCategory[]>([
    "all",
  ]);
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  const projects = useMemo<Project[]>(
    () => [
      {
        id: 1,
        imageSrc: avatar,
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
        tag: "school",
      },
      {
        id: 2,
        imageSrc: loginScreenshot,
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
        tag: "school",
      },
      {
        id: 4,
        imageSrc: nuspiLogo,
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
        tag: "work",
      },
      {
        id: 5,
        imageSrc: judithScreenshot,
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
        tag: "work",
      },
    ],
    [t]
  );

  const filteredProjects = projects.filter(
    (project) =>
      activeFilters.includes("all") || activeFilters.includes(project.tag)
  );

  const showNoResults =
    !activeFilters.includes("all") && filteredProjects.length === 0;

  const toggleFilters = () => {
    setIsFiltersOpen((prev) => !prev);
  };

  return (
    <div className="projects" id="projects">
      <div className="flex">
        <h2 className="title2">{t("Projects.")}</h2>
      </div>
      <h3 className="readmore">{t("Click on a card to read more.")}</h3>
      <div className="projects-cards">
        {filteredProjects.map((project) => (
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

        {showNoResults && (
          <div className="no-results">
            <h3>{t("Oops! No projects found for the selected filters.")}</h3>
            <button
              className="button reset"
              onClick={() => setActiveFilters(["all"])}
              type="button"
            >
              Reset filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
