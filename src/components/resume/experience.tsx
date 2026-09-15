import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import {
  SiCss,
  SiDocker,
  SiElementor,
  SiFigma,
  SiGraphite,
  SiGraphql,
  SiNextdotjs,
  SiPosthog,
  SiReact,
  SiRedis,
  SiStorybook,
  SiTypescript,
  SiTurborepo,
  SiWordpress,
} from "react-icons/si";
import { Code2 } from "lucide-react";
import type { IconBaseProps, IconType } from "react-icons";
import { Markdown } from "./markdown";
import { getExperiences, type ResumeSection } from "@/lib/resume-parser";

const PayloadIcon: IconType = (props: IconBaseProps) => (
  <svg viewBox="0 0 38.5 43.5" fill="currentColor" {...props}>
    <path d="m18.01 35.63-12.36-7.13a.5.5 0 0 1-.25-.43v-11.02c0-.19.21-.31.37-.22l14.35 8.28c.2.12.45-.03.45-.26v-5.37c0-.21-.11-.41-.3-.52L3.01 9a.5.5 0 0 0-.5 0l-2.26 1.31a.5.5 0 0 0-.25.43v20.47a.5.5 0 0 0 .25.43l17.73 10.24a.5.5 0 0 0 .5 0l14.89-8.6c.2-.12.2-.4 0-.52l-4.64-2.68a.6.6 0 0 0-.6 0l-9.61 5.55a.5.5 0 0 1-.5 0Z" />
    <path d="M36.21 10.3 18.48.07a.5.5 0 0 0-.5 0L8.61 5.48c-.2.12-.2.4 0 .52l4.6 2.66c.19.11.41.11.6 0l4.2-2.42a.5.5 0 0 1 .5 0l12.36 7.13a.5.5 0 0 1 .25.43v11.07c0 .21.11.41.3.52l4.6 2.65c.2.12.45-.03.45-.26V10.74a.5.5 0 0 0-.25-.43Z" />
  </svg>
);

const technologyIcons: Record<string, IconType> = {
  TypeScript: SiTypescript,
  React: SiReact,
  "Next.js": SiNextdotjs,
  "Payload CMS": PayloadIcon,
  WordPress: SiWordpress,
  GraphQL: SiGraphql,
  Redis: SiRedis,
  Turborepo: SiTurborepo,
  Storybook: SiStorybook,
  Docker: SiDocker,
  PostHog: SiPosthog,
  Graphite: SiGraphite,
  Elementor: SiElementor,
  CSS: SiCss,
  Figma: SiFigma,
};

function Technologies({ items }: { items: string[] }) {
  return (
    <div className="experience-technologies">
      <p className="experience-technologies-label">Technologieën</p>
      <ul className="technology-list" aria-label="Technologieën">
        {items.map((technology) => {
          const Icon = technologyIcons[technology] ?? Code2;
          return (
            <li key={technology} className="technology-item">
              <Icon
                aria-hidden="true"
                className="technology-icon"
                focusable="false"
              />
              <span>{technology}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export function ExperienceList({ section }: { section: ResumeSection }) {
  const items = getExperiences(section);
  return (
    <Accordion
      type="multiple"
      defaultValue={items.map((item) => item.id)}
      className="experience-list"
    >
      {items.map((item) => (
        <AccordionItem key={item.id} value={item.id}>
          <AccordionTrigger>
            <span className="experience-heading">
              <span className="experience-company">{item.company}</span>
              <span className="experience-role">{item.role}</span>
              <span className="experience-period">{item.period}</span>
            </span>
          </AccordionTrigger>
          <AccordionContent>
            <Markdown>{item.markdown}</Markdown>
            {item.technologies.length > 0 ? (
              <Technologies items={item.technologies} />
            ) : null}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
