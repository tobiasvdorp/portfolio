import { ArrowDown, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Resume } from "@/lib/resume-parser";

export function Hero({ resume }: { resume: Resume }) {
  const [first, ...rest] = resume.name.split(" ");
  return (
    <section className="hero" aria-labelledby="name">
      <div className="hero-copy">
        <p className="eyebrow hero-kicker">{resume.location}</p>
        <h1 id="name">
          {first} <span>{rest.join(" ")}</span>
          <span className="name-period">.</span>
        </h1>
        <div className="hero-description">
          <p className="hero-role">{resume.role}</p>
          <p className="hero-stack">{resume.stack}</p>
        </div>
        <div className="hero-actions">
          <Button asChild>
            <a href="/cv" download="Tobias-van-Dorp-CV.pdf">
              Download CV <ArrowDown className="size-4" aria-hidden="true" />
            </a>
          </Button>
          <div className="social-links">
            {resume.links
              .filter((link) => link.label !== "Portfolio")
              .map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="external-link"
                >
                  {link.label}
                  <ExternalLink aria-hidden="true" className="external-link-icon" />
                </a>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
