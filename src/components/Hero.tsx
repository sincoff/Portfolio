"use client";

import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";
import { Meteors } from "@/components/ui/meteors";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";

export function Hero() {
  return (
    <Card className="w-full min-h-[500px] bg-black/[0.96] relative overflow-hidden flex items-center justify-center">
      <AnimatedGridPattern
        numSquares={40}
        maxOpacity={0.15}
        duration={3}
        repeatDelay={1}
        className="[mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_60%,transparent_100%)] fill-neutral-800/50 stroke-neutral-700/30"
      />

      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />

      <Meteors number={12} />

      <div className="relative z-10 text-center px-6 py-12 max-w-2xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Ian Sincoff
        </h1>

        <p className="mt-3 text-lg md:text-xl text-neutral-400 font-medium">
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
            className="px-8 py-3 border border-neutral-600 text-neutral-300 font-semibold rounded-lg hover:border-neutral-400 transition text-center"
          >
            See All Projects
          </a>
        </div>
      </div>
    </Card>
  );
}
