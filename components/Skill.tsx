"use client";

import Image, { type StaticImageData } from "next/image";

type SkillProps = {
  name: string;
  onClick: (skillName: string) => void;
  imageSrc: StaticImageData;
  isActive: boolean;
  shouldReduceMotion: boolean;
};

const Skill = ({
  name,
  onClick,
  imageSrc,
  isActive,
  shouldReduceMotion,
}: SkillProps) => (
  <li
    onClick={() => onClick(name)}
    className={`skill ${isActive ? "active" : ""} ${!shouldReduceMotion ? "animate__backInLeft wow animate__animated" : ""}`}
  >
    <Image src={imageSrc} alt={`${name} logo`} width={48} height={48} />
    {name}
  </li>
);

export default Skill;
