import type { Metadata } from "next";
import { Geist_Mono, Orbitron, Space_Grotesk } from "next/font/google";
import { MotionProvider } from "@/components/MotionProvider";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Suraj Kumar Yadav | Full Stack Engineer",
  description:
    "Universe-themed portfolio of Suraj Kumar Yadav — Full Stack Software Engineer specializing in React, TypeScript, and AI-driven web applications.",
  openGraph: {
    title: "Suraj Kumar Yadav | Portfolio",
    description:
      "Full Stack Software Engineer · React · TypeScript · AI-driven products",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${orbitron.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col text-zinc-100">
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
