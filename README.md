# Portfolio Tobias van Dorp

Een moderne, volledig opnieuw opgebouwde portfolio-ervaring met Next.js 15 en TailwindCSS. De applicatie is ontworpen volgens hedendaagse best practices met een focus op performance, toegankelijkheid en onderhoudbaarheid.

## Highlights

- **Next.js App Router** met server components waar mogelijk en lichte client componenten voor animaties via Framer Motion.
- **TailwindCSS design system** met herbruikbare utility classes, gradients en zachte animaties geïnspireerd op [reactbits.dev](https://reactbits.dev/).
- **Volledig responsive** ontwerp dat schittert op mobiel, tablet en desktop.
- **Content vanuit één bron** dankzij TypeScript datastructuren voor hero, projecten, skills en contactinformatie.
- **Contactformulier** gekoppeld aan Formspree met validatie via `react-hook-form`.

## Structuur

```
app/
├─ layout.tsx      # Basistemplate met navigatie en footer
├─ page.tsx        # Pagina die alle secties samenbrengt
components/
├─ layout/         # Navigatie en footer
├─ sections/       # Hero, About, Experience, Projects, Skills, Contact
├─ ui/             # Herbruikbare UI-elementen (o.a. ShinyButton, SectionHeading)
├─ motion/         # Animatiehelpers
└─ icons/          # Light-weight social icons
```

De content zelf wordt beheerd in `data/content.ts`. Op deze manier blijft de UI schoon en kan informatie eenvoudig worden aangepast of uitgebreid.

## Ontwikkelen

```bash
pnpm install
pnpm dev
```

Bezoek vervolgens `http://localhost:3000` om de applicatie te bekijken. De site kan volledig statisch worden geexporteerd via `pnpm build` en `pnpm start`.

## Deploy

De site is klaar voor statische hosting (Next.js `output: export`). Alle assets worden geoptimaliseerd en gehost vanuit de `public/` map.

## Licentie

MIT License. Gebruik gerust als inspiratie voor je eigen portfolio en pas het aan naar wens.
