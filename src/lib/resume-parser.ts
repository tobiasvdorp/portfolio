import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import { toMarkdown } from "mdast-util-to-markdown";
import { toString } from "mdast-util-to-string";
import type { RootContent } from "mdast";
import { z } from "zod";

export const slug = (value: string) =>
  value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
export const serialize = (children: RootContent[]) =>
  toMarkdown({ type: "root", children });
export type ResumeSection = {
  id: string;
  title: string;
  nodes: RootContent[];
  markdown: string;
};
export type Experience = {
  id: string;
  company: string;
  role: string;
  period: string;
  markdown: string;
  technologies: string[];
};

function getTechnologies(nodes: RootContent[], labelIndex: number) {
  const technologyNode = nodes[labelIndex + 1];
  if (technologyNode?.type !== "paragraph") return [];
  return toString(technologyNode)
    .split(/[·•]/)
    .map((technology) => technology.trim())
    .filter(Boolean);
}

export function getExperiences(section: ResumeSection): Experience[] {
  const items: { company: string; nodes: RootContent[] }[] = [];
  for (const node of section.nodes) {
    if (node.type === "heading" && node.depth === 3)
      items.push({ company: toString(node), nodes: [] });
    else if (node.type !== "thematicBreak") items.at(-1)?.nodes.push(node);
  }
  return items.map(({ company, nodes }) => {
    if (nodes[0]?.type !== "paragraph" || nodes[1]?.type !== "paragraph")
      throw new Error(`Werkervaring '${company}' mist een functie of periode.`);
    const technologyLabelIndex = nodes.findIndex(
      (node) => node.type === "paragraph" && toString(node) === "Technologieën",
    );
    const technologyNode = nodes[technologyLabelIndex + 1];
    const hasTechnologyList =
      technologyLabelIndex !== -1 && technologyNode?.type === "paragraph";
    const contentNodes = hasTechnologyList
      ? [
          ...nodes.slice(0, technologyLabelIndex),
          ...nodes.slice(technologyLabelIndex + 2),
        ]
      : nodes;
    return {
      id: slug(company),
      company,
      role: toString(nodes[0]),
      period: toString(nodes[1]),
      markdown: serialize(contentNodes.slice(2)),
      technologies:
        technologyLabelIndex === -1
          ? []
          : getTechnologies(nodes, technologyLabelIndex),
    };
  });
}

export function parseResume(source: string) {
  const { content } = matter(source);
  const tree = unified().use(remarkParse).parse(content);
  const intro: RootContent[] = [];
  const sections: ResumeSection[] = [];
  for (const node of tree.children) {
    if (node.type === "heading" && node.depth === 2) {
      const title = toString(node);
      sections.push({ id: slug(title), title, nodes: [], markdown: "" });
    } else if (node.type !== "thematicBreak") {
      if (sections.length) sections.at(-1)!.nodes.push(node);
      else intro.push(node);
    }
  }
  const [name, role, stack, location, linksNode] = intro;
  if (name?.type !== "heading" || !role || !stack || !location)
    throw new Error(
      "Het résumé moet beginnen met # naam, functie, stack en locatie.",
    );
  const links =
    linksNode?.type === "paragraph"
      ? linksNode.children.flatMap((node) =>
          node.type === "link"
            ? [{ label: toString(node), href: z.url().parse(node.url) }]
            : [],
        )
      : [];
  const ids = sections.map((section) => section.id);
  if (new Set(ids).size !== ids.length)
    throw new Error("Sectietitels moeten uniek zijn.");
  return {
    markdown: content.trim(),
    tree,
    name: toString(name),
    role: toString(role),
    stack: toString(stack),
    location: toString(location),
    links,
    sections: sections.map((section) => ({
      ...section,
      markdown: serialize(section.nodes),
    })),
  };
}
export type Resume = ReturnType<typeof parseResume>;
