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
    <li className="timeline-item">
      <div className="timeline-marker">
        <div className="timeline-dot"></div>
        <div className="timeline-pulse"></div>
      </div>
      <div className={`cbp_tmlabel wow ${className} timeline-card`}>
        <div className="timeline-card-header">
          <h3>{title}</h3>
          <div className="timeline-card-badges">
            <div className="timeline-date-badge">
              <i className="fa fa-calendar" />
              <span>{date}</span>
            </div>
            <div className="timeline-location-badge">
              <i className="fa fa-map-marker-alt" />
              <span>{location}</span>
            </div>
          </div>
        </div>
        <div className="timeline-card-body">
          <p className="projectParagraph">{description}</p>
        </div>
        <div className="timeline-card-glow"></div>
      </div>
    </li>
  );
};

export default AboutMeCard;
