"use client";

import { FallingPattern } from "@/components/falling-pattern";
import { GlowingBorder } from "@/components/ui/glowing-border";

export function Hero() {
  return (
    <div className="w-full relative min-h-[400px] bg-[#0a0a0f]/80 backdrop-blur-sm">
      <FallingPattern
        color="rgba(148, 163, 184, 0.7)"
        backgroundColor="#0a0a0f"
        duration={120}
        blurIntensity="0.4em"
        className="absolute inset-0 h-full [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,transparent,black)]"
      />
      <div className="absolute inset-0 z-10 flex items-center justify-center px-6 py-12">
        <div className="relative text-center max-w-2xl mx-auto">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_50%_at_50%_50%,rgba(148,163,184,0.08),transparent)]" />
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 text-balance drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
            Ian Sincoff
          </h1>
          <p className="mt-3 text-lg md:text-xl text-neutral-300 font-medium">
            Full-Stack Developer | Python, Flask & JavaScript
          </p>
          <p className="mt-4 text-neutral-300 max-w-lg mx-auto">
            I build full-stack web applications with clean interfaces and scalable backends.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center items-center">
            <a
              href="https://sneaker-manager.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <GlowingBorder variant="primary">View Featured Project</GlowingBorder>
            </a>
            <a href="#projects" className="inline-block">
              <GlowingBorder variant="secondary">See All Projects</GlowingBorder>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
