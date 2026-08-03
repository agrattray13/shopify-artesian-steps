import type { Metadata } from "next";
import "./globals.css";
import { AnnouncementBar } from "@/components/shared/announcement-bar";
import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";

export const metadata: Metadata = {
  title: "Artesian Steps | Luxury Men's Formalwear",
  description:
    "Tailored confidence for every occasion. Discover refined suits, tuxedos, footwear, and finishing pieces at Artesian Steps.",
  keywords: ["men's formalwear", "suits", "tuxedos", "wedding suits", "tailoring", "luxury menswear"],
  openGraph: {
    title: "Artesian Steps | Luxury Men's Formalwear",
    description: "Tailored confidence for every occasion.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Artesian Steps | Luxury Men's Formalwear",
    description: "Tailored confidence for every occasion.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-soft-white text-obsidian">
        <AnnouncementBar />
        <Header />
        <main id="main-content" className="flex-1" role="main">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
