import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Ian Sincoff | Full-Stack Developer",
  description:
    "Full-stack developer building web applications with Python, Flask & JavaScript.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${inter.className} antialiased bg-black text-neutral-50`}
      >
        {children}
      </body>
    </html>
  );
}
