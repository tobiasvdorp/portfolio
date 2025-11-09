import type { Metadata } from "next";
import type { ReactNode } from "react";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "next-themes";
import TranslationProvider from "@/components/TranslationProvider";
import "./globals.css";
import "animate.css/animate.min.css";

type RootLayoutProps = {
  children: ReactNode;
};

export const metadata: Metadata = {
  title: "Tobias van Dorp",
  description:
    "Portfolio website showcasing projects, skills, and contact information for Tobias van Dorp.",
};

const RootLayout = ({ children }: RootLayoutProps) => (
  <html lang="en" suppressHydrationWarning>
    <head>
      <Script
        src="https://kit.fontawesome.com/bfbf5f508f.js"
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />
    </head>
    <body>
      <ThemeProvider
        attribute="data-theme"
        defaultTheme="dark"
        enableSystem={false}
      >
        <TranslationProvider>{children}</TranslationProvider>
        <Analytics />
      </ThemeProvider>
    </body>
  </html>
);

export default RootLayout;
