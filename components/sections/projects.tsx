"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import FadeIn from "@/components/motion/fade-in";
import SectionHeading from "@/components/ui/section-heading";
import { Button } from "../ui/button";
import { projects } from "@/data/content";
import Link from "next/link";
import ExpandableCardDemo from "../expandable-card-demo-grid";

const ProjectCard = ({ project }: { project: (typeof projects)[number] }) => (
  <motion.article
    whileHover={{ y: -6 }}
    className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-background/70 shadow-lg"
  >
    <div className="relative aspect-[3/2] w-full overflow-hidden">
      <motion.div
        className="absolute inset-0 z-10 bg-gradient-to-t from-background via-background/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden
      />
      <Image
        src={project.image}
        alt={`Screenshot van ${project.title}`}
        fill
        className="object-cover transition duration-500 group-hover:scale-105"
        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
      />
    </div>
    <div className="flex flex-1 flex-col gap-4 p-6">
      <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-highlight">
        <span>{project.type}</span>
        <span>{project.year}</span>
      </div>
      <h3 className="font-display text-xl font-semibold text-foreground">
        {project.title}
      </h3>
      <p className="flex-1 text-sm text-muted-foreground">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
        {project.stack.map((item) => (
          <span
            key={item}
            className="rounded-full border border-white/10 px-3 py-1"
          >
            {item}
          </span>
        ))}
      </div>
      {project.href ? (
        <Button asChild className="w-full justify-center" variant="ghost">
          <Link href={project.href}>Bekijk project</Link>
        </Button>
      ) : null}
    </div>
  </motion.article>
);

const Projects = () => (
  <section id="projects" className="space-y-12">
    <SectionHeading
      label="Projecten"
      title="Cases waar ik trots op ben"
      description="Een selectie van projecten waarin ik veel leerde over samenwerking, ontwerp, development en communicatie met opdrachtgevers."
    />
    {/* <FadeIn className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"> */}
    <ExpandableCardDemo />
    {/* {projects.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))} */}
    {/* </FadeIn> */}
  </section>
);

export default Projects;
