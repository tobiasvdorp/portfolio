"use client";
import { useState, type ReactNode } from "react";
import { Menu, X, ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";
type NavItem = { id: string; label: string };
export function ResumeShell({
  name,
  year,
  navigation,
  textContent,
  children,
}: {
  name: string;
  year: number;
  navigation: NavItem[];
  textContent: ReactNode;
  children: ReactNode;
}) {
  const [mode, setMode] = useState<"ui" | "text">("ui");
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className={cn("site-shell", mode === "text" && "text-mode")}>
      <a href="#main" className="skip-link">
        Naar inhoud
      </a>
      <header className="site-header">
        <a
          href="#"
          className="wordmark"
          onClick={() => {
            setMode("ui");
            setMenuOpen(false);
          }}
        >
          {name}
          <span className="wordmark-dot">.</span>
        </a>
        <nav
          aria-label="Hoofdnavigatie"
          className="desktop-nav"
          hidden={mode === "text"}
        >
          {navigation.map((item) => (
            <a key={item.id} href={`#${item.id}`}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="header-controls">
          <div className="mode-toggle" role="group" aria-label="Weergave">
            <button
              aria-pressed={mode === "ui"}
              onClick={() => {
                setMode("ui");
                setMenuOpen(false);
              }}
            >
              UI
            </button>
            <span aria-hidden="true">/</span>
            <button
              aria-pressed={mode === "text"}
              onClick={() => {
                setMode("text");
                setMenuOpen(false);
              }}
            >
              Text
            </button>
          </div>
          {mode === "ui" ? (
            <button
              className="mobile-menu-button"
              aria-label={menuOpen ? "Menu sluiten" : "Menu openen"}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? (
                <X className="size-5" />
              ) : (
                <Menu className="size-5" />
              )}
            </button>
          ) : null}
        </div>
      </header>
      {menuOpen ? (
        <nav
          id="mobile-navigation"
          className="mobile-nav"
          aria-label="Mobiele navigatie"
        >
          {navigation.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      ) : null}
      <main id="main" tabIndex={-1}>
        <div hidden={mode !== "ui"}>{children}</div>
        {mode === "text" ? (
          <div className="text-document">
            <div className="text-toolbar">
              <span>Text view</span>
              <a href="/cv" download="Tobias-van-Dorp-CV.pdf">
                Download CV <span aria-hidden="true">↓</span>
              </a>
            </div>
            {textContent}
          </div>
        ) : null}
      </main>
      <footer className="site-footer">
        <p>
          © {year} {name}
        </p>
        <a href="#" aria-label="Terug naar boven">
          Terug naar boven <ArrowUp className="size-3.5" aria-hidden="true" />
        </a>
      </footer>
    </div>
  );
}
