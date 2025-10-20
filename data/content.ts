import { generateCurrentAge } from "@/lib/utils";

export const heroContent = {
  eyebrow: "Tobias van Doro",
  role: "I'm a passionate front-end developer",
  tagline:
    "I design and build accessible digital experiences with Next.js and a healthy dose of curiosity.",
};

export const aboutContent = {
  heading: {
    eyebrow: "About me",
    title: "A creative nerd",
    description:
      "I work closely with the product and team. With a focus on accessibility and performance, I make sure every detail is perfect.",
  },
  bio: [
    "I'm 22 years old and I've always had an interest in computers, but it wasn't until I started my studies that I realized how much of a nerd I really am. I love combining the technical aspects with creativity to make engaging and functional user interfaces. When I'm not coding, you can usually find me playing with my dog, hanging out with friends or watching science and programming video’s",
  ],
};

export const personalDetails = [
  {
    label: "Age",
    value: `${generateCurrentAge("2003-02-07")} years old`,
  },
  { label: "Location", value: "Utrecht, Netherlands" },
  { label: "Study", value: "Bachelor OpenICT, Hogeschool Utrecht" },
  {
    label: "Favorite stack",
    value: "React · Next.js · TypeScript · TailwindCSS",
  },
];

export type TimelineItem = {
  title: string;
  period: string;
  location: string;
  summary: string;
  highlight?: string;
  linkLabel?: string;
  linkUrl?: string;
};

export const timeline: TimelineItem[] = [
  {
    title: "HAVO-degree",
    period: "Juli 2021",
    location: "Amersfoort, Utrecht",
    summary:
      "I started at the gymnasium but quickly switched to the HAVO. There I not only got my diploma, but also the highest exam score in the entire study.",
    highlight: "Winnaar van de Socrates Award voor hoogste eindexamencijfer.",
    linkLabel: "Lees meer over de Socrates Awards",
    linkUrl: "https://www.socrateshonours.org/lid-worden/socrates-awards",
  },
  {
    title: "Bachelor OpenICT",
    period: "September 2022 — heden",
    location: "Hogeschool Utrecht",
    summary:
      "Binnen de opleiding OpenICT leer ik in projectteams werken met echte opdrachtgevers. Geen tentamens, maar direct in de praktijk aan de slag met Agile, discovery en productontwikkeling.",
    highlight:
      "De projectmatige aanpak zorgt ervoor dat ik nu al gewend ben om klantwensen te vertalen naar schaalbare oplossingen.",
  },
];

export type Project = {
  title: string;
  summary: string;
  description: string;
  href?: string;
  image: string;
  year: string;
  type: "School project" | "Klantproject" | "Persoonlijk project";
  stack: string[];
};

export const projects: Project[] = [
  {
    title: "Portfolio 1.0",
    summary:
      "Mijn eerste portfolio ooit, gebouwd in zes weken zonder voorkennis.",
    description:
      "Tijdens mijn eerste project bij OpenICT bouwde ik zonder enige programmeerervaring een portfolio. Met YouTube, hulp van medestudenten en veel doorzettingsvermogen wist ik een volledig werkende site neer te zetten.",
    href: "/Portfolio-1.html",
    image: "/images/avatar.png",
    year: "2022",
    type: "School project",
    stack: ["HTML", "CSS"],
  },
  {
    title: "Kapsalon Collective",
    summary:
      "Een toegankelijke website voor een kapsalon, gebouwd met een multidisciplinair team.",
    description:
      "In mijn tweede semester ontwierp en bouwde ik de front-end van een kapsalonwebsite. We werkten met Git, bespraken klantwensen en vertaalden die naar componenten in TailwindCSS.",
    href: "/hairdresser-project.html",
    image: "/images/login.png",
    year: "2023",
    type: "School project",
    stack: ["HTML", "CSS", "TailwindCSS"],
  },
  {
    title: "Spark Game Platform",
    summary: "Website, forum en chatbot voor een educatieve programmeergame.",
    description:
      "Voor het project Spark verschoof mijn focus van game-ontwerp naar het ontwikkelen van ondersteunende tooling. Ik bouwde een React-gebaseerde website met forum en chatbot om spelers onderweg te helpen.",
    image: "/images/spark.png",
    year: "2023",
    type: "School project",
    stack: ["React", "TypeScript"],
  },
  {
    title: "Netwerk USP Inclusief",
    summary:
      "Toegankelijke WordPress-website voor een organisatie met focus op inclusie.",
    description:
      "Mijn eerste echte klantopdracht: een toegankelijke website voor Netwerk USP Inclusief. Van requirement workshops tot overdrachtsdocument, ik leerde hoe je wensen vertaalt naar duurzame weboplossingen.",
    href: "https://www.netwerkuspinclusief.nl/",
    image: "/images/nuspi.png",
    year: "2024",
    type: "Klantproject",
    stack: ["WordPress", "Elementor", "CSS"],
  },
  {
    title: "Website Judith",
    summary:
      "Supersnelle Next.js website met Builder.io als gebruiksvriendelijke CMS-laag.",
    description:
      "Voor mijn moeder bouwde ik een beheersbare website met Next.js en Builder.io. Ik ontwierp herbruikbare componenten, contentmodellen en optimaliseerde voor performance en SEO.",
    href: "https://judith-website.vercel.app/",
    image: "/images/judith.png",
    year: "2024",
    type: "Klantproject",
    stack: ["Next.js", "TailwindCSS", "Builder.io"],
  },
];

export type Skill = {
  name: string;
  description: string;
  proficiency: string;
  category: "Front-end" | "Framework" | "CMS";
};

export const skills: Skill[] = [
  {
    name: "HTML",
    description:
      "Met semantische HTML leg ik de basis voor toegankelijkheid en SEO. Ik weet precies hoe ik structuur aanbreng zodat elke gebruiker makkelijk mee kan. ",
    proficiency:
      "Ik bouw componenten bewust op, met aandacht voor ARIA-attributen, leesvolgorde en screenreader-ervaring.",
    category: "Front-end",
  },
  {
    name: "CSS",
    description:
      "Van flexbox tot grid en van custom properties tot fluid typography: CSS is mijn toolkit voor pixel-perfecte interfaces.",
    proficiency:
      "Ik ontwerp en bouw interfaces vanaf scratch en blijf nieuwe lay-outtechnieken verkennen om nog effectiever te werken.",
    category: "Front-end",
  },
  {
    name: "React",
    description:
      "Met React bouw ik componentgedreven interfaces die schaalbaar blijven. Ik schrijf duidelijke, herbruikbare componenten en let scherp op DX.",
    proficiency:
      "De basis is solide en ik leer dagelijks bij door projecten, code reviews en documentatie.",
    category: "Framework",
  },
  {
    name: "Next.js",
    description:
      "Next.js geeft me de tools voor snelle, SEO-vriendelijke sites met hybride rendering en krachtige routing.",
    proficiency:
      "Ik werk veel met server components, data fetching en optimalisatie van performance. SEO en toegankelijkheid hebben prioriteit.",
    category: "Framework",
  },
  {
    name: "TailwindCSS",
    description:
      "Tailwind helpt me snel consistente interfaces te bouwen. Dankzij utility-first werken componenten modulair en schaalbaar.",
    proficiency:
      "Ik beheers de fundamentals en combineer Tailwind met design tokens en component libraries voor maximale snelheid.",
    category: "Front-end",
  },
  {
    name: "Elementor",
    description:
      "Voor klanten die zelf willen beheren is Elementor een fijne optie. Ik zorg voor een goede basis en heldere documentatie.",
    proficiency:
      "Ik bouwde complete sites in Elementor en weet hoe ik flexibiliteit behoud zonder de performance te schaden.",
    category: "CMS",
  },
  {
    name: "Builder.io",
    description:
      "Met Builder.io combineer ik headless contentbeheer met moderne front-ends. Perfect voor teams die willen experimenteren.",
    proficiency:
      "Ik ken de fundamentals van contentmodellen en integratie met Next.js, inclusief realtime previews en publicatieflows.",
    category: "CMS",
  },
  {
    name: "WordPress",
    description:
      "WordPress blijft een betrouwbare keuze voor contentrijke sites. Ik zorg dat thema’s, plugins en performance goed op elkaar aansluiten.",
    proficiency:
      "Ik heb complete websites gebouwd en weet hoe ik content editors begeleid zodat zij zelfstandig aan de slag kunnen.",
    category: "CMS",
  },
];

export const formEndpoint = "https://formspree.io/f/xknlznnl";

export const socials = [
  {
    label: "Discord",
    href: "https://discord.com/users/tobiasvandorp",
    handle: "tobiasvandorp",
  },
  {
    label: "GitHub",
    href: "https://github.com/tobiasvdorp",
    handle: "tobiasvdorp",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/tobias-van-dorp-433189257/",
    handle: "Tobias van Dorp",
  },
];
