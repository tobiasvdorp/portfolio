"use client";

import FadeIn from "@/components/motion/fade-in";
import SectionHeading from "@/components/ui/section-heading";
import { heroContent, personalDetails } from "@/data/content";

const About = () => (
  <section id="about" className="space-y-10">
    <SectionHeading
      label="Over mij"
      title="Een creatieve nerd met een liefde voor functionele interfaces"
      description="Ik werk graag dicht op het product en het team. Met een focus op toegankelijkheid en performance zorg ik ervoor dat elk detail klopt."
    />
    <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
      <FadeIn className="space-y-6 rounded-3xl border border-white/10 bg-background/70 p-6 text-base text-muted-foreground shadow-lg sm:p-10">
        <p className="text-lg text-foreground">{heroContent.bio}</p>
        <p>
          Tijdens projecten hou ik ervan om samen met stakeholders te ontdekken
          waar de echte behoefte ligt. Daarna vertaal ik die inzichten naar
          heldere componenten, documentatie en iteraties. Ik leer snel, stel
          veel vragen en ben niet bang om verantwoordelijkheid te nemen.
        </p>
        <p>
          Ik blijf mezelf ontwikkelen door nieuwe tooling uit te proberen,
          documentatie te lezen en open-source projecten te volgen. Daardoor
          breng ik altijd de nieuwste best practices mee naar mijn werk.
        </p>
      </FadeIn>
      <FadeIn delay={0.15} className="h-full">
        <div className="flex h-full flex-col gap-5 rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 via-background/60 to-transparent p-6 shadow-inner">
          <h3 className="font-display text-xl font-semibold text-foreground">
            Snelle feiten
          </h3>
          <ul className="space-y-4 text-sm text-muted-foreground">
            {personalDetails.map((detail) => (
              <li
                key={detail.label}
                className="flex items-start justify-between gap-4 rounded-2xl border border-white/10 bg-background/60 px-4 py-3"
              >
                <span className="text-xs uppercase tracking-[0.25em] text-highlight">
                  {detail.label}
                </span>
                <span className="font-medium text-foreground">
                  {detail.value}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </FadeIn>
    </div>
  </section>
);

export default About;
