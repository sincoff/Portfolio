import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-sans",
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
        className={`${geistSans.variable} ${geistSans.className} antialiased text-neutral-50`}
      >
        {children}
      </body>
    </html>
  );
}
