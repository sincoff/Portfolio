"use client";

import { cn } from "@/lib/utils";

interface GlowingBorderProps {
  children: React.ReactNode;
  className?: string;
  /** "primary" = white fill, "secondary" = outlined */
  variant?: "primary" | "secondary";
}

export function GlowingBorder({
  children,
  className,
  variant = "secondary",
}: GlowingBorderProps) {
  const isPrimary = variant === "primary";
  return (
    <span
      className={cn(
        "relative inline-flex items-center justify-center group",
        className
      )}
    >
      {/* Outer glow - animates on hover */}
      <span
        className="absolute -inset-[1px] z-0 overflow-hidden rounded-lg blur-[2px]
          before:absolute before:z-[-2] before:size-[400px] before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:bg-no-repeat before:rotate-[60deg]
          before:bg-[conic-gradient(#0a0a0a,#52525b_5%,#0a0a0a_38%,#0a0a0a_50%,#71717a_60%,#0a0a0a_87%)]
          before:transition-all before:duration-1000 group-hover:before:rotate-[-60deg]"
      />
      <span
        className="absolute -inset-[0.5px] z-0 overflow-hidden rounded-[7px] blur-[1px]
          before:absolute before:z-[-2] before:size-[300px] before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:bg-no-repeat before:rotate-[80deg]
          before:bg-[conic-gradient(rgba(0,0,0,0),#404040,rgba(0,0,0,0)_12%,rgba(0,0,0,0)_48%,#525252,rgba(0,0,0,0)_62%)]
          before:transition-all before:duration-1000 group-hover:before:rotate-[-100deg]"
      />
      <span
        className={cn(
          "relative z-10 rounded-lg px-6 py-3 font-semibold text-base transition",
          isPrimary
            ? "bg-white text-black hover:bg-neutral-200"
            : "bg-black/95 text-neutral-200 hover:text-white"
        )}
      >
        {children}
      </span>
    </span>
  );
}
