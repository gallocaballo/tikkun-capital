import type { Metadata } from "next";
import { Fraunces, Outfit } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--serif",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz"],
});

const outfit = Outfit({
  variable: "--sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tikkun Capital — Real Estate Investment Syndication",
  description:
    "Since 2017, Tikkun Capital has syndicated real estate development opportunities for a select group of investors across Southern California and Arizona.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${outfit.variable}`}>
      <body>{children}</body>
    </html>
  );
}
