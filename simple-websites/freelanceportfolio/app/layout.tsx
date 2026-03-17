import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nikhil | Freelance Full Stack Developer",
  description:
    "Freelance Full Stack Developer helping startups & businesses build fast, scalable web apps using React, Next.js & MERN.",
  keywords: [
    "freelance web developer",
    "nextjs developer india",
    "mern stack freelancer",
    "full stack developer"
  ],
  openGraph: {
    title: "Nikhil – Freelance Full Stack Developer",
    description: "I build SEO-friendly, high-performance web applications.",
    url: "https://yourdomain.com",
    siteName: "Nikhil Portfolio",
    locale: "en_IN",
    type: "website"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
