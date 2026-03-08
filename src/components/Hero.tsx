"use client";

import { FallingPattern } from "@/components/falling-pattern";

export function Hero() {
  return (
    <div className="w-full relative min-h-[500px] md:min-h-[70vh]">
      <FallingPattern
        color="rgba(148, 163, 184, 0.5)"
        backgroundColor="#000"
        duration={120}
        blurIntensity="0.5em"
        className="absolute inset-0 h-full [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,transparent,black)]"
      />
      <div className="absolute inset-0 z-10 flex items-center justify-center px-6 py-12">
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-300 text-balance drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
            Ian Sincoff
          </h1>
          <p className="mt-3 text-lg md:text-xl text-neutral-200 font-medium">
            Full-Stack Developer | Python, Flask & JavaScript
          </p>
          <p className="mt-4 text-neutral-300 max-w-lg mx-auto">
            I build full-stack web applications with clean interfaces and scalable backends.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center">
            <a
              href="https://sneaker-manager.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-white text-black font-semibold rounded-lg hover:bg-neutral-200 transition text-center"
            >
              View Featured Project
            </a>
            <a
              href="#projects"
              className="px-8 py-3 border border-neutral-500 text-neutral-200 font-semibold rounded-lg hover:border-neutral-400 hover:text-white transition text-center"
            >
              See All Projects
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
