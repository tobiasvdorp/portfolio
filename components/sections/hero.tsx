"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import FadeIn from "@/components/motion/fade-in";
import { heroContent } from "@/data/content";

const Hero = () => (
  <section
    id="home"
    className="relative overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-br from-white/10 via-white/5 to-transparent px-6 py-14 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] sm:px-10 sm:py-20"
  >
    <div
      className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(132,94,247,0.45),transparent_55%)]"
      aria-hidden
    />
    <div
      className="absolute -left-32 top-10 h-40 w-40 rounded-full bg-highlight/50 blur-[90px] sm:h-48 sm:w-48"
      aria-hidden
    />
    <div
      className="absolute bottom-10 right-0 h-44 w-44 rounded-full bg-accent/40 blur-[80px]"
      aria-hidden
    />
    <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
      <div className="space-y-8">
        <FadeIn className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-background/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-highlight">
          Tobias van Dorp
        </FadeIn>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-display text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl"
        >
          {heroContent.role}
        </motion.h1>
        <FadeIn delay={0.2}>
          <p className="max-w-2xl text-base text-muted-foreground sm:text-lg">
            {heroContent.tagline}
          </p>
        </FadeIn>
        <FadeIn delay={0.3}>
          <div className="grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-background/60 p-4">
              <p className="text-xs uppercase tracking-[0.25em] text-highlight">
                Locatie
              </p>
              <p className="mt-1 font-medium text-foreground">
                {heroContent.location}
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-background/60 p-4">
              <p className="text-xs uppercase tracking-[0.25em] text-highlight">
                Beschikbaarheid
              </p>
              <p className="mt-1 font-medium text-foreground">
                {heroContent.availability}
              </p>
            </div>
          </div>
        </FadeIn>
        <FadeIn delay={0.4}>
          <div className="flex flex-wrap gap-3">
            <Button asChild>
              <Link href="#projects">Bekijk projecten</Link>
            </Button>
            <Button asChild variant="ghost">
              <Link href="#contact">Laten we praten</Link>
            </Button>
          </div>
        </FadeIn>
        <FadeIn delay={0.5}>
          <div className="grid gap-3 text-sm text-muted-foreground sm:grid-cols-3">
            {heroContent.highlights.map((highlight) => (
              <div
                key={highlight}
                className="rounded-2xl border border-white/10 bg-background/60 p-4 transition hover:border-highlight/60 hover:text-foreground"
              >
                {highlight}
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
      <FadeIn delay={0.2}>
        <div className="relative mx-auto w-full max-w-sm">
          <div className="absolute inset-0 -z-10 rounded-[2.5rem] bg-gradient-to-br from-highlight/30 via-accent/20 to-transparent blur-3xl" />
          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-background/80 p-4 shadow-2xl">
            <div className="rounded-[2rem] bg-black/40 p-2">
              <Image
                src="/images/hoiikbentobias.png"
                alt="Portret van Tobias van Dorp"
                width={512}
                height={512}
                className="h-auto w-full rounded-[1.75rem] object-cover"
                priority
              />
            </div>
            <div className="mt-6 space-y-2 text-sm text-muted-foreground">
              <p>{heroContent.summary}</p>
            </div>
          </div>
        </div>
      </FadeIn>
    </div>
  </section>
);

export default Hero;
