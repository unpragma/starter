// Import Tailwind CSS.
import "@/styles/globals.css";

// Import Google fonts and use them with Taiwlind CSS.
// The variable is declared in attached into
// tailwind.config.ts
import { Inter } from "next/font/google";
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// Website's metadata.
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "...",
  description: "...",
};

/* ======================================================== */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans`}>{children}</body>
    </html>
  );
}
