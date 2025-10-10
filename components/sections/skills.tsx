"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import FadeIn from "@/components/motion/fade-in";
import SectionHeading from "@/components/ui/section-heading";
import { skills } from "@/data/content";
import { GlowingCard } from "../ui/glowing-card";

const Skills = () => {
  const groupedSkills = useMemo(() => {
    return skills.reduce<Record<string, typeof skills>>((acc, skill) => {
      acc[skill.category] = acc[skill.category]
        ? [...acc[skill.category], skill]
        : [skill];
      return acc;
    }, {});
  }, []);

  const [activeSkill, setActiveSkill] = useState(() => skills[0]);

  return (
    <section id="skills" className="space-y-12">
      <SectionHeading
        label="Skills"
        title="Superkrachten die ik inzet in projecten"
        description="Van basisprincipes tot moderne frameworks: ik combineer sterke fundamenten met nieuwsgierigheid naar nieuwe tools."
      />
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <FadeIn className="rounded-3xl border border-white/10 bg-background/70 p-6 shadow-lg sm:p-10">
          <div className="grid gap-6">
            {Object.entries(groupedSkills).map(([category, categorySkills]) => (
              <div key={category} className="space-y-3">
                <p className="text-xs uppercase tracking-[0.3em] text-highlight">
                  {category}
                </p>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {categorySkills.map((skill) => {
                    const isActive = activeSkill.name === skill.name;
                    return (
                      <button
                        key={skill.name}
                        type="button"
                        onClick={() => setActiveSkill(skill)}
                        className="relative overflow-hidden rounded-2xl border border-white/10 bg-background/60 px-4 py-6 text-left text-sm font-medium text-foreground transition hover:border-highlight/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-highlight/70"
                      >
                        {isActive ? (
                          <motion.span
                            layoutId="skill-highlight"
                            className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-highlight/30 via-accent/30 to-transparent"
                            transition={{
                              type: "spring",
                              stiffness: 300,
                              damping: 30,
                            }}
                          />
                        ) : null}
                        {skill.name}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
        <FadeIn delay={0.1} className="h-full">
          {/* <div className="flex h-full flex-col gap-4 rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 via-background/70 to-transparent p-6 shadow-inner sm:p-10"> */}
          <GlowingCard>
            <motion.span
              key={activeSkill.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="text-xs uppercase tracking-[0.3em] text-highlight"
            >
              {activeSkill.category}
            </motion.span>
            <motion.h3
              key={`${activeSkill.name}-title`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.05 }}
              className="font-display text-2xl font-semibold text-foreground"
            >
              {activeSkill.name}
            </motion.h3>
            <motion.p
              key={`${activeSkill.name}-description`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: "easeOut", delay: 0.08 }}
              className="text-base text-muted-foreground"
            >
              {activeSkill.description}
            </motion.p>
            <motion.p
              key={`${activeSkill.name}-proficiency`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: "easeOut", delay: 0.12 }}
              className="rounded-2xl border border-white/10 bg-background/60 p-4 text-sm text-foreground"
            >
              {activeSkill.proficiency}
            </motion.p>
            {/* </div> */}
          </GlowingCard>
        </FadeIn>
      </div>
    </section>
  );
};

export default Skills;
