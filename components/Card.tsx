"use client";

import Image, { type StaticImageData } from "next/image";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { createPortal } from "react-dom";
import { FaTimes, FaExternalLinkAlt } from "react-icons/fa";

export type ProjectSkill = {
  name: string;
  image: StaticImageData | string;
};

type CardProps = {
  title: string;
  imageSrc: StaticImageData;
  description: string;
  skills: ProjectSkill[];
  detailDescription: string;
  projectLocation: string;
  className: string;
  wowDelay: string;
};

const Card = ({
  title,
  imageSrc,
  description,
  skills,
  detailDescription,
  projectLocation,
  className,
  wowDelay,
}: CardProps) => {
  const { t } = useTranslation();
  const [isExpanded, setIsExpanded] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleCardClick = () => {
    if (!isExpanded) {
      setIsExpanded(true);
      document.body.style.overflow = "hidden";
    }
  };

  const handleCloseClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    setIsExpanded(false);
    document.body.style.overflow = "";
  };

  const modalContent = isExpanded && (
    <>
      <div className="card-modal-backdrop" onClick={handleCloseClick} />
      <div className="card-modal">
        <button
          className="modal-close"
          onClick={handleCloseClick}
          type="button"
          aria-label="Close"
        >
          <FaTimes />
        </button>
        <div className="modal-image">
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="modal-image-content"
            sizes="(max-width: 768px) 100vw, 600px"
          />
        </div>
        <div className="modal-content">
          <h2 className="modal-title">{title}</h2>
          <p className="modal-description">{detailDescription}</p>
          <div className="modal-skills-section">
            <p className="modal-skills-label">{t("technologies")}</p>
            <div className="modal-skills">
              {skills.map((skill) => (
                <div className="modal-skill" key={skill.name}>
                  <Image
                    src={skill.image}
                    alt={skill.name}
                    width={28}
                    height={28}
                  />
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
          <a
            className="button button-small"
            href={projectLocation}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>{t("See the result")}</span>
            <FaExternalLinkAlt size={16} />
          </a>
        </div>
      </div>
    </>
  );

  return (
    <>
      <div
        className={`project-card wow ${className}`}
        data-wow-delay={wowDelay}
      >
        <article className="card-content" onClick={handleCardClick}>
          <div className="card-image-container">
            <Image
              src={imageSrc}
              alt={title}
              fill
              className="card-image"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="card-body">
            <h3 className="card-title">{title}</h3>
            <p className="card-description">{description}</p>
            <div className="card-skills">
              {skills.map((skill) => (
                <div className="skill-tooltip" key={skill.name}>
                  <Image
                    src={skill.image}
                    alt={skill.name}
                    width={32}
                    height={32}
                  />
                  <span className="tooltip-text">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </article>
      </div>
      {mounted && isExpanded && createPortal(modalContent, document.body)}
    </>
  );
};

export default Card;
