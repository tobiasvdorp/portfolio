"use client";

import FadeIn from "@/components/motion/fade-in";
import SectionHeading from "@/components/ui/section-heading";
import { aboutContent, personalDetails } from "@/data/content";

const About = () => (
  <section id="about" className="space-y-10">
    <SectionHeading
      label={aboutContent.heading.eyebrow}
      title={aboutContent.heading.title}
      description={aboutContent.heading.description}
    />
    <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
      <FadeIn className="space-y-6 rounded-3xl border border-white/10 bg-background/70 p-6 text-base text-muted-foreground shadow-lg sm:p-10">
        <p className="text-lg text-foreground">{aboutContent.bio[0]}</p>
        <p className="text-lg">{aboutContent.bio[1]}</p>
        <p className="text-lg">{aboutContent.bio[2]}</p>
      </FadeIn>
      <FadeIn delay={0.15} className="">
        <div className="flex flex-col gap-5 rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 via-background/60 to-transparent p-6 shadow-inner">
          <h3 className="font-display text-xl font-semibold text-foreground">
            Quick facts
          </h3>
          <ul className="space-y-4 text-sm text-muted-foreground">
            {personalDetails.map((detail) => (
              <li
                key={detail.label}
                className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-background/60 px-4 py-3"
              >
                <span className="text-xs uppercase tracking-[0.25em] text-highlight">
                  {detail.label}
                </span>
                <span className="font-medium text-foreground text-right">
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
