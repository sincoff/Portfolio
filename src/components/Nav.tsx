"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export function Nav() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#projects", label: "Projects" },
    { href: "#about", label: "About" },
    {
      href: "https://github.com/sincoff",
      label: "GitHub",
      external: true,
    },
  ];

  return (
    <nav
      className="sticky top-0 z-50 w-full bg-black/95 backdrop-blur-sm border-b border-neutral-800"
      role="navigation"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 hover:opacity-90 transition"
          >
            Ian Sincoff
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) =>
              link.external ? (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-300 font-medium hover:text-white transition"
                >
                  {link.label}
                </a>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-neutral-300 font-medium hover:text-white transition"
                >
                  {link.label}
                </a>
              )
            )}
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-neutral-300 hover:text-white transition"
            aria-expanded={open}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile dropdown */}
        {open && (
          <div className="md:hidden py-4 border-t border-neutral-800">
            <div className="flex flex-col gap-4">
              {links.map((link) =>
                link.external ? (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-300 font-medium hover:text-white transition py-2"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </a>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-neutral-300 font-medium hover:text-white transition py-2"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </a>
                )
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
