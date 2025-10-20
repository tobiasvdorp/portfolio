import Link from "next/link";
import { socials } from "@/data/content";

const Footer = () => (
  <footer className="border-t border-white/5 bg-background/80">
    <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:px-8 md:flex-row md:items-center md:justify-between">
      <div>
        <p className="font-display text-base font-semibold text-foreground">
          Laten we samenwerken
        </p>
        <p className="text-sm text-muted-foreground">
          Op zoek naar een betrouwbare front-end developer? Stuur een berichtje,
          ik reageer meestal binnen 24 uur.
        </p>
      </div>
      <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
        {socials.map((social) => (
          <Link
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noreferrer noopener"
            className="rounded-full border border-white/10 px-4 py-2 transition hover:border-highlight hover:text-foreground"
          >
            {social.label}
          </Link>
        ))}
      </div>
    </div>
    <div className="border-t border-white/5 py-4 text-center text-xs text-muted-foreground">
      © {new Date().getFullYear()} Tobias van Dorp. Gebouwd met Next.js en
      TailwindCSS.
    </div>
  </footer>
);

export default Footer;
