"use client";

import FadeIn from "@/components/motion/fade-in";
import SectionHeading from "@/components/ui/section-heading";
import { timeline } from "@/data/content";

const Experience = () => (
  <section id="experience" className="space-y-12">
    <SectionHeading
      label="Carrière"
      title="Ervaring die mijn manier van werken vormt"
      description="Ik groei het snelst door projecten te doen. Elke stap in mijn opleiding en werkervaring heeft me iets geleerd over samenwerken, toegankelijkheid en het leveren van waarde."
    />
    <div className="relative">
      <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-highlight/60 via-white/20 to-transparent sm:block" />
      <ul className="space-y-8">
        {timeline.map((item, index) => (
          <FadeIn key={item.title} delay={index * 0.08}>
            <li className="relative flex flex-col gap-4 rounded-3xl border border-white/10 bg-background/70 p-6 shadow-lg sm:ml-14 sm:flex-row sm:items-start sm:gap-8 sm:p-8">
              <div
                className="absolute -left-10 hidden h-4 w-4 rounded-full border border-highlight bg-background sm:block"
                aria-hidden
              />
              <div className="w-full sm:w-56">
                <p className="text-xs uppercase tracking-[0.3em] text-highlight">
                  {item.period}
                </p>
                <h3 className="mt-2 font-display text-xl font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">{item.location}</p>
              </div>
              <div className="flex-1 space-y-3 text-sm text-muted-foreground">
                <p>{item.summary}</p>
                {item.highlight ? (
                  <p className="rounded-2xl border border-highlight/40 bg-highlight/10 p-3 text-foreground">
                    {item.highlight}
                  </p>
                ) : null}
                {item.linkUrl ? (
                  <a
                    href={item.linkUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-2 text-sm font-medium text-highlight transition hover:text-accent"
                  >
                    {item.linkLabel ?? "Lees meer"}
                    <svg
                      className="h-3 w-3"
                      viewBox="0 0 12 12"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path
                        d="M3 9L9 3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M3 3h6v6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                ) : null}
              </div>
            </li>
          </FadeIn>
        ))}
      </ul>
    </div>
  </section>
);

export default Experience;
