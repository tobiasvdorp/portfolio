"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  AnimatePresence,
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Eyebrow } from "@/components/ui/eyebrow";
import { heroContent } from "@/data/content";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "Over mij" },
  { href: "#experience", label: "Ervaring" },
  { href: "#projects", label: "Projecten" },
  { href: "#skills", label: "Vaardigheden" },
  { href: "#contact", label: "Contact" },
];

const SiteHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const backgroundOpacity = useTransform(
    scrollYProgress,
    [0, 0.1],
    [0.1, 0.92]
  );
  const backgroundColor = useMotionTemplate`rgba(10, 12, 20, ${backgroundOpacity})`;

  const [showEyebrowInHeader, setShowEyebrowInHeader] = useState(false);
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (v: number) => {
      setShowEyebrowInHeader(v > 0.02);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <motion.header
      style={{ backgroundColor }}
      className="fixed inset-x-0 top-0 z-50 border-b border-white/10 backdrop-blur-lg"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-8">
        <div className="min-h-[28px]">
          {showEyebrowInHeader ? (
            <motion.div
              layoutId="eyebrow"
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 40,
                mass: 0.8,
              }}
            >
              <Link href="#home" className="block">
                <Eyebrow label={heroContent.eyebrow} variant="bold" size="lg" />
              </Link>
            </motion.div>
          ) : (
            <Link
              href="#home"
              className="font-display text-lg font-semibold tracking-tight"
            >
              Tobias van Dorp
            </Link>
          )}
        </div>
        <nav className="hidden items-center gap-1 text-sm font-medium text-muted-foreground md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-2 transition hover:bg-white/10 hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
          <div className="ml-2">
            <ModeToggle />
          </div>
        </nav>
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-sm font-semibold text-foreground transition hover:border-accent hover:text-accent md:hidden"
          aria-label="Toggle navigatie"
        >
          <span className="sr-only">Menu</span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            aria-hidden="true"
          >
            <motion.path
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              initial={false}
              animate={isOpen ? "open" : "closed"}
              variants={{
                closed: { d: "M3 6h14M3 14h14" },
                open: { d: "M4.5 4.5 15.5 15.5M15.5 4.5 4.5 15.5" },
              }}
            />
          </svg>
        </button>
      </div>
      <AnimatePresence>
        {isOpen ? (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="mx-auto mt-2 flex w-[min(90%,24rem)] flex-col gap-2 rounded-2xl border border-white/10 bg-background/95 p-4 text-sm text-muted-foreground shadow-glow md:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-xl px-3 py-2 font-medium transition hover:bg-white/10 hover:text-foreground"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-2 flex justify-center">
              <ModeToggle />
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
      <motion.div
        className="absolute inset-x-0 bottom-0 h-px origin-left bg-gradient-to-r from-transparent via-highlight/80 to-transparent"
        style={{ scaleX: useTransform(scrollYProgress, [0, 1], [0, 1]) }}
        aria-hidden="true"
      />
    </motion.header>
  );
};

export default SiteHeader;
