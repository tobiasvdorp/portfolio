"use client";

import { useState, type ReactNode } from "react";
import { useForm } from "react-hook-form";
import FadeIn from "@/components/motion/fade-in";
import SectionHeading from "@/components/ui/section-heading";
import DiscordIcon from "@/components/icons/discord-icon";
import GithubIcon from "@/components/icons/github-icon";
import LinkedInIcon from "@/components/icons/linkedin-icon";
import { formEndpoint, socials } from "@/data/content";
import { Button } from "../ui/button";
import { GlowingCard } from "../ui/glowing-card";

type ContactForm = {
  name: string;
  email: string;
  message: string;
};

const socialIcons: Record<string, ReactNode> = {
  Discord: <DiscordIcon className="h-5 w-5" />,
  GitHub: <GithubIcon className="h-5 w-5" />,
  LinkedIn: <LinkedInIcon className="h-5 w-5" />,
};

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactForm>({
    mode: "onSubmit",
    defaultValues: { name: "", email: "", message: "" },
  });
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const onSubmit = async (values: ContactForm) => {
    setStatus("idle");
    try {
      const response = await fetch(formEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      const result = await response.json();
      if (result.ok) {
        setStatus("success");
        reset();
      } else {
        throw new Error("Formspree returned an error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="space-y-12">
      <SectionHeading
        label="Contact"
        title="Samen iets moois maken?"
        description="Ik reageer meestal binnen een dag. Vul het formulier in of kies één van de socials."
      />
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <FadeIn>
          <GlowingCard gradient={false}>
            <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-foreground"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  {...register("name", {
                    required: "Please enter your name.",
                  })}
                  className="w-full rounded-2xl border border-white/10 bg-background/60 px-4 py-3 text-sm text-foreground outline-none transition focus:border-highlight/70 focus:ring-2 focus:ring-highlight/60"
                  placeholder="How can I address you?"
                />
                {errors.name ? (
                  <p className="text-xs text-accent">{errors.name.message}</p>
                ) : null}
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-foreground"
                >
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  {...register("email", {
                    required: "An email address is required.",
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "Please enter a valid email address.",
                    },
                  })}
                  className="w-full rounded-2xl border border-white/10 bg-background/60 px-4 py-3 text-sm text-foreground outline-none transition focus:border-highlight/70 focus:ring-2 focus:ring-highlight/60"
                  placeholder="name@example.com"
                />
                {errors.email ? (
                  <p className="text-xs text-accent">{errors.email.message}</p>
                ) : null}
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-foreground"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  {...register("message", {
                    required: "Please let me know how I can help you.",
                    minLength: {
                      value: 10,
                      message: "Your message should be more detailed.",
                    },
                  })}
                  className="w-full rounded-2xl border border-white/10 bg-background/60 px-4 py-3 text-sm text-foreground outline-none transition focus:border-highlight/70 focus:ring-2 focus:ring-highlight/60"
                  placeholder="Tell me more about your project or ask"
                />
                {errors.message ? (
                  <p className="text-xs text-accent">
                    {errors.message.message}
                  </p>
                ) : null}
              </div>
              <div className="flex items-center gap-3">
                <Button className="justify-center" type="submit">
                  {isSubmitting ? "Sending..." : "Send"}
                </Button>
                {status === "success" ? (
                  <p className="text-xs text-highlight">
                    Thank you for your message! I&apos;ll get back to you soon.
                  </p>
                ) : null}
                {status === "error" ? (
                  <p className="text-xs text-accent">
                    Something went wrong. Please try again later or send a DM.
                  </p>
                ) : null}
              </div>
            </form>
          </GlowingCard>
        </FadeIn>
        <FadeIn delay={0.12} className="h-full">
          <div className="flex h-full flex-col gap-6 rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 via-background/70 to-transparent p-6 shadow-inner sm:p-10">
            <h3 className="font-display text-xl font-semibold text-foreground">
              Connect via socials
            </h3>
            <p className="text-sm text-muted-foreground">
              Prefer to send a message directly? You can find me on the
              following platforms. I&apos;m usually the fastest to respond on
              LinkedIn.
            </p>
            <ul className="space-y-4 text-sm text-foreground">
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="group flex items-center justify-between rounded-2xl border border-white/10 bg-background/60 px-4 py-3 transition hover:border-highlight/70 hover:text-highlight"
                  >
                    <span className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-background/80 text-highlight transition group-hover:border-highlight/70 group-hover:bg-highlight/10 group-hover:text-accent">
                        {socialIcons[social.label] ?? (
                          <span className="text-lg">•</span>
                        )}
                      </span>
                      <span className="flex flex-col">
                        <span className="text-sm font-semibold">
                          {social.label}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {social.handle}
                        </span>
                      </span>
                    </span>
                    <span
                      aria-hidden
                      className="text-base transition group-hover:translate-x-1"
                    >
                      ↗
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Contact;
