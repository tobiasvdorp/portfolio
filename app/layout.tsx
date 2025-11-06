import type { Metadata } from "next";
import "./globals2.css";
import { cn } from "@/lib/utils";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { ThemeProvider } from "@/components/theme-provider";
import TailwindIndicator from "@/components/tailwind-incidcator";

export const metadata: Metadata = {
  metadataBase: new URL("https://tobiasvandorp.nl"),
  title: {
    default: "Tobias van Dorp · Front-end Developer",
    template: "%s · Tobias van Dorp",
  },
  description:
    "Portfolio van Tobias van Dorp – front-end ontwikkelaar met focus op toegankelijke, performante en gebruiksvriendelijke interfaces.",
  openGraph: {
    title: "Tobias van Dorp · Front-end Developer",
    description:
      "Portfolio van Tobias van Dorp – front-end ontwikkelaar met focus op toegankelijke, performante en gebruiksvriendelijke interfaces.",
    url: "https://tobiasvandorp.nl",
    siteName: "Portfolio Tobias van Dorp",
    locale: "nl_NL",
    type: "website",
  },
  keywords: [
    "Tobias van Dorp",
    "front-end developer",
    "Next.js portfolio",
    "TailwindCSS portfolio",
    "React developer Nederland",
  ],
  icons: {
    icon: "/favicon.ico",
  },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="nl" suppressHydrationWarning>
    <body
      className={cn("min-h-screen bg-background font-sans text-foreground")}
    >
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <Header />

        <main className="flex-1 px-4 pb-24 pt-24 sm:px-8">
          <div className="mx-auto w-full max-w-6xl space-y-28">{children}</div>
        </main>

        <Footer />
        <TailwindIndicator />
      </ThemeProvider>
    </body>
  </html>
);

export default RootLayout;
