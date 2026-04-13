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
  title: "Tikkun Capital — Real Estate Investment Fund",
  description:
    "Since 2017, Tikkun Capital has invested in real estate development opportunities on behalf of a select group of investors across Southern California and Arizona.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon-192x192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180" },
      { url: "/apple-touch-icon-152x152.png", sizes: "152x152" },
    ],
  },
  openGraph: {
    title: "Tikkun Capital",
    description:
      "Real estate investment fund. Building wealth through trusted partnerships since 2017.",
    url: "https://tikkun.capital",
    siteName: "Tikkun Capital",
    images: [
      {
        url: "https://tikkun.capital/og-image.png",
        width: 1200,
        height: 630,
        alt: "Tikkun Capital",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tikkun Capital",
    description:
      "Real estate investment fund. Building wealth through trusted partnerships since 2017.",
    images: ["https://tikkun.capital/twitter-card.png"],
  },
  other: {
    "msapplication-TileImage": "/mstile-270x270.png",
    "msapplication-TileColor": "#1B2432",
  },
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
