"use client";

import type { ReactNode } from "react";
import useWOW from "@/hooks/useWOW";

type AboutMeCardProps = {
  title: string;
  date: string;
  location: string;
  description: ReactNode;
  className?: string;
};

const AboutMeCard = ({
  title,
  date,
  location,
  description,
  className = "animate__fadeInRight animate__animated",
}: AboutMeCardProps) => {
  useWOW();

  return (
    <li>
      <div className={`cbp_tmlabel wow ${className}`}>
        <h3>{title}</h3>
        <div className="date">
          <i className="fa fa-calendar" />
          {date}
        </div>
        <h4>
          <i className="fa fa-flag fa-sm" />
          {location}
        </h4>
        <p className="projectParagraph">{description}</p>
      </div>
    </li>
  );
};

export default AboutMeCard;
