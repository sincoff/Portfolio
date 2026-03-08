import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ian Sincoff | Full-Stack Developer",
  description:
    "Full-stack developer building web applications with Python, Flask & JavaScript.",
  metadataBase: process.env.URL ? new URL(process.env.URL) : undefined,
  openGraph: {
    title: "Ian Sincoff | Full-Stack Developer",
    description:
      "Full-stack developer building web applications with Python, Flask & JavaScript.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Ian Sincoff | Full-Stack Developer",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://prod.spline.design" />
        <link rel="preconnect" href="https://prod.spline.design" crossOrigin="" />
        <link rel="dns-prefetch" href="https://prod.spline.design" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-neutral-50`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-black focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-400"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
