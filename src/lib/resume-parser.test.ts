import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { parseResume, getExperiences } from "./resume-parser";
const source = readFileSync("content/resume.md", "utf8");
test("résumé behoudt alle secties en de volledige werkervaring", () => {
  const resume = parseResume(source);
  assert.equal(resume.name, "Tobias van Dorp");
  assert.equal(resume.sections.length, 5);
  const section = resume.sections.find(
    (section) => section.id === "werkervaring",
  )!;
  const items = getExperiences(section);
  assert.equal(items.length, 4);
  assert.equal(items[0].role, "Software Engineer");
  assert.equal(items[0].period, "September 2024 tot heden · Utrecht");
  assert.match(items[0].markdown, /acht|onderhoudbaarheid/);
  assert.deepEqual(items[0].technologies, [
    "TypeScript",
    "React",
    "Next.js",
    "Payload CMS",
    "WordPress",
    "GraphQL",
    "Redis",
    "Turborepo",
    "Storybook",
    "Docker",
    "PostHog",
    "Graphite",
  ]);
  assert.equal(
    items[0].markdown.split("\n").filter((line) => /^\* /.test(line)).length,
    8,
  );
});
test("Markdown-wijzigingen verschijnen in alle afgeleide content", () => {
  const resume = parseResume(
    source.replaceAll("DOOR Media Groep", "Nieuwe werkgever"),
  );
  assert.match(resume.markdown, /Nieuwe werkgever/);
  assert.equal(
    getExperiences(
      resume.sections.find((section) => section.id === "werkervaring")!,
    )[0].company,
    "Nieuwe werkgever",
  );
});
test("onvolledige content en dubbele secties geven duidelijke fouten", () => {
  assert.throws(() => parseResume("# Alleen een naam"), /functie/);
  assert.throws(() => parseResume(source + "\n## Profiel\n\nDubbel"), /uniek/);
});
test("codeblokken worden niet als secties geïnterpreteerd", () => {
  const resume = parseResume(source + "\n```md\n## Voorbeeld\n```");
  assert.equal(resume.sections.length, 5);
});
