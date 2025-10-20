"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Button } from "../ui/button";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "Over mij" },
  { href: "#experience", label: "Ervaring" },
  { href: "#projects", label: "Projecten" },
  { href: "#skills", label: "Vaardigheden" },
  { href: "#contact", label: "Contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 backdrop-blur-lg">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-8">
        <Link
          href="#home"
          className="font-display text-lg font-semibold tracking-tight"
        >
          Tobias van Dorp
        </Link>
        <nav className="hidden items-center gap-1 text-sm font-medium text-muted-foreground md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-2 hover:bg-white/10 hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <ModeToggle className="hidden md:flex" />

        <div className="flex items-center gap-2 md:hidden">
          <ModeToggle />
          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen((prev) => !prev)}
            className="md:hidden rounded-full"
            aria-label="Toggle navigation"
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
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.nav
        aria-hidden={!isOpen}
        aria-label="Main navigation"
        role="navigation"
        initial="hidden"
        animate={isOpen ? "visible" : "hidden"}
        variants={{
          hidden: {
            opacity: 0,
            height: 0,
            transition: { duration: 0.1 },
          },
          visible: {
            opacity: 1,
            height: "auto",
            transition: {
              staggerChildren: 0.1,
              duration: 0.3,
              type: "spring",
            },
            marginBottom: 16,
            padding: 8,
          },
        }}
        className={
          "mx-2 flex max-w-full flex-col gap-2 rounded-2xl border border-white/10 bg-background/95 text-sm text-muted-foreground shadow-glow md:hidden overflow-hidden"
        }
      >
        {navLinks.map((link) => (
          <motion.a
            key={link.href}
            variants={{
              hidden: { opacity: 0, x: -30 },
              visible: { opacity: 1, x: 0 },
            }}
            href={link.href}
            className="px-3 py-2 font-medium hover:bg-white/10 hover:text-foreground"
            onClick={() => setIsOpen(false)}
          >
            {link.label}
          </motion.a>
        ))}
      </motion.nav>
    </header>
  );
};

export default Header;
