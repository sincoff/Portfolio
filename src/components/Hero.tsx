"use client";

import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";

export function Hero() {
  return (
    <Card className="w-full h-[500px] bg-black/[0.96] relative overflow-hidden border-0">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />

      <div className="flex h-full">
        <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
          <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            Ian Sincoff
          </h1>
          <p className="mt-2 text-lg text-neutral-400 font-medium">
            Full-Stack Developer | Python, Flask & JavaScript
          </p>
          <p className="mt-4 text-neutral-300 max-w-lg">
            I build full-stack web applications with clean interfaces and
            scalable backends.
          </p>
          <div className="flex flex-wrap gap-4 mt-6">
            <a
              href="https://sneaker-manager.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-neutral-200 transition"
            >
              View Featured Project
            </a>
            <a
              href="#projects"
              className="px-6 py-3 border border-neutral-600 text-neutral-300 font-semibold rounded-lg hover:border-neutral-400 transition"
            >
              See All Projects
            </a>
          </div>
        </div>

        <div className="flex-1 relative hidden md:block">
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>
    </Card>
  );
}
