"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Button } from "../ui/button";
import FadeIn from "@/components/motion/fade-in";
import { heroContent } from "@/data/content";
import { Eyebrow } from "../ui/eyebrow";
import { cn } from "@/lib/utils";
import { BackgroundRippleEffect } from "../ui/background-ripple-effect";

const Hero = () => {
  const { scrollYProgress } = useScroll();
  const [movedToHeader, setMovedToHeader] = useState(false);

  // Toggle when the eyebrow should live in the header instead of hero
  useMotionValueEvent(scrollYProgress, "change", (v: number) => {
    const shouldMove = v > 0.02; // small scroll threshold
    if (shouldMove !== movedToHeader) setMovedToHeader(shouldMove);
  });

  return (
    <>
      <section
        id="home"
        className={cn(
          "z-10 relative rounded-3xl border border-border bg-gradient-to-br",
          "dark:from-background/10 dark:via-white/3 dark:to-background/5",
          "from-white/10 via-foreground/3 to-transparent",
          "px-6 py-14 sm:px-10 sm:py-20"
        )}
      >
        <BackgroundRippleEffect className="z-0 dark:opacity-30 opacity-60" />

        {movedToHeader ? null : (
          <motion.div
            layoutId="eyebrow"
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 40,
              mass: 0.8,
            }}
            className="absolute -top-2 left-10"
          >
            <Eyebrow
              label={heroContent.eyebrow}
              variant="bold"
              className="bg-background"
              size="lg"
            />
          </motion.div>
        )}
        <div
          className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,var(--accent),transparent_55%)]"
          aria-hidden
        />
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-8">
            <FadeIn delay={0.1}>
              <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                {heroContent.role}
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="max-w-2xl text-base text-muted-foreground sm:text-lg">
                {heroContent.tagline}
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="flex flex-wrap gap-3">
                <Button asChild>
                  <Link href="#projects">View projects</Link>
                </Button>
                <Button asChild variant="secondary">
                  <Link href="#contact">Let&apos;s talk</Link>
                </Button>
              </div>
            </FadeIn>
          </div>
          <FadeIn delay={0.2}>
            <div className="relative mx-auto w-full max-w-sm">
              <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-background/80 p-4 shadow-2xl">
                <div className="rounded-[2rem] bg-black/40 p-2">
                  <Image
                    src="/images/avatar.png"
                    alt="Portrait"
                    width={512}
                    height={512}
                    className="h-auto w-full rounded-[1.75rem] object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
};

export default Hero;
