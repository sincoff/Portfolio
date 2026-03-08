"use client";

import { cn } from "@/lib/utils";

interface SpotlightProps {
  className?: string;
  fill?: string;
}

export function Spotlight({ className, fill = "white" }: SpotlightProps) {
  const fillColor =
    fill === "white"
      ? "rgba(255,255,255,0.12)"
      : fill === "black"
        ? "rgba(0,0,0,0.2)"
        : fill;
  return (
    <div
      className={cn(
        "pointer-events-none absolute h-[1380px] w-[560px] opacity-60",
        className
      )}
      style={{
        background: `radial-gradient(ellipse at center, ${fillColor} 0%, transparent 70%)`,
      }}
    />
  );
}
