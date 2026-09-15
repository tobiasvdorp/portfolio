import { cacheLife } from "next/cache";
import { getResume } from "@/lib/resume";
import { ResumeShell } from "@/components/resume/shell";
import { Hero } from "@/components/resume/hero";
import { Section } from "@/components/resume/section";
import { Markdown } from "@/components/resume/markdown";
import { ExperienceList } from "@/components/resume/experience";
const labels: Record<string, string> = {
  profiel: "Over mij",
  "technische-vaardigheden": "Vaardigheden",
  links: "Contact",
};
async function getCurrentYear() {
  "use cache";
  cacheLife("max");
  return new Date().getFullYear();
}
export default async function Home() {
  const [resume, year] = await Promise.all([getResume(), getCurrentYear()]);
  const navigation = resume.sections
    .filter((section) => section.id !== "open-source")
    .map((section) => ({
      id: section.id,
      label: labels[section.id] ?? section.title,
    }));
  return (
    <ResumeShell
      name={resume.name}
      year={year}
      navigation={navigation}
      textContent={
        <Markdown className="text-content">{resume.markdown}</Markdown>
      }
    >
      <Hero resume={resume} />
      {resume.sections.map((section, index) => (
        <Section
          key={section.id}
          id={section.id}
          title={
            section.id === "profiel"
              ? "Over mij"
              : section.id === "links"
                ? "Laten we kennismaken."
                : section.title
          }
          number={index + 1}
        >
          {section.id === "werkervaring" ? (
            <ExperienceList section={section} />
          ) : (
            <Markdown
              className={
                section.id === "technische-vaardigheden"
                  ? "skills-prose"
                  : section.id === "links"
                    ? "contact-prose"
                    : undefined
              }
            >
              {section.markdown}
            </Markdown>
          )}
        </Section>
      ))}
    </ResumeShell>
  );
}
