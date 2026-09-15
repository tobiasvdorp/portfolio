import type { Metadata } from "next";
import "@fontsource/dm-sans/400.css";
import "@fontsource/dm-sans/500.css";
import "@fontsource/dm-sans/600.css";
import "@fontsource/instrument-serif/400.css";
import "@fontsource/instrument-serif/400-italic.css";
import "./globals.css";
import { getResume } from "@/lib/resume";
export async function generateMetadata(): Promise<Metadata> {
  const resume = await getResume();
  return {
    title: `${resume.name} | ${resume.role}`,
    description: `${resume.role} in ${resume.location}. ${resume.stack}. Bekijk mijn werkervaring, vaardigheden en opleiding.`,
    openGraph: {
      title: `${resume.name} | ${resume.role}`,
      locale: "nl_NL",
      type: "profile",
      firstName: "Tobias",
      lastName: "van Dorp",
    },
    robots: { index: true, follow: true },
  };
}
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="nl">
      <body>{children}</body>
    </html>
  );
}
