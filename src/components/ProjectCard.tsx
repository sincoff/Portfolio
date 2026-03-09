import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { GlowingBorder } from "@/components/ui/glowing-border";
import { cn } from "@/lib/utils";

interface TechBadgeProps {
  children: React.ReactNode;
}

function TechBadge({ children }: TechBadgeProps) {
  return (
    <span className="px-2.5 py-1 text-xs font-medium rounded-md bg-neutral-800 text-neutral-300 border border-neutral-700">
      {children}
    </span>
  );
}

function TrafficLightDots() {
  return (
    <div className="flex flex-row gap-1.5 mb-4">
      <span
        className="size-2.5 rounded-full bg-[#ff605c] flex-shrink-0"
        style={{ boxShadow: "-3px 3px 5px rgba(0, 0, 0, 0.3)" }}
      />
      <span
        className="size-2.5 rounded-full bg-[#ffbd44] flex-shrink-0"
        style={{ boxShadow: "-3px 3px 5px rgba(0, 0, 0, 0.3)" }}
      />
      <span
        className="size-2.5 rounded-full bg-[#00ca4e] flex-shrink-0"
        style={{ boxShadow: "-3px 3px 5px rgba(0, 0, 0, 0.3)" }}
      />
    </div>
  );
}

interface ProjectCardProps {
  children: React.ReactNode;
  className?: string;
  featured?: boolean;
}

function ProjectCard({ children, className, featured = false }: ProjectCardProps) {
  return (
    <Card
      className={cn(
        "overflow-hidden transition-all duration-[0.4s] ease-[ease] p-8 rounded-xl ring-0",
        "bg-white/[0.03] backdrop-blur-[10px]",
        "border-0 border-b-[3px] border-b-white/[0.15] border-l-2 border-l-white/[0.2] [border-left-style:outset]",
        featured
          ? "shadow-[-20px_30px_40px_rgba(0,0,0,0.4),0_0_30px_rgba(0,202,78,0.05)] hover:shadow-[-25px_40px_50px_rgba(0,0,0,0.5),0_0_30px_rgba(0,202,78,0.05)]"
          : "shadow-[-20px_30px_40px_rgba(0,0,0,0.4)] hover:shadow-[-25px_40px_50px_rgba(0,0,0,0.5)]",
        "hover:translate-y-[-8px] hover:border-b-white/[0.3]",
        className
      )}
    >
      <TrafficLightDots />
      {children}
    </Card>
  );
}

interface SoloProjectCardProps {
  title: string;
  description: string[];
  techStack: string[];
  liveUrl: string;
  codeUrl: string;
}

export function SoloProjectCard({
  title,
  description,
  techStack,
  liveUrl,
  codeUrl,
}: SoloProjectCardProps) {
  return (
    <ProjectCard featured>
      <CardHeader className="px-0 pt-0">
        <span className="inline-block text-xs text-neutral-500 uppercase tracking-wider mb-2">
          Featured Project
        </span>
        <h3 className="text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          {title}
        </h3>
        <p className="text-neutral-400 mt-2 leading-relaxed">{description[0]}</p>
        <p className="text-neutral-400 leading-relaxed">{description[1]}</p>
        <p className="text-neutral-400 leading-relaxed">{description[2]}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {techStack.map((tech) => (
            <TechBadge key={tech}>{tech}</TechBadge>
          ))}
        </div>
      </CardHeader>
      <CardContent className="flex flex-wrap gap-4 pt-0 px-0">
        <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="inline-block">
          <GlowingBorder variant="primary">View Live App</GlowingBorder>
        </a>
        <a href={codeUrl} target="_blank" rel="noopener noreferrer" className="inline-block">
          <GlowingBorder variant="secondary">See the Code</GlowingBorder>
        </a>
      </CardContent>
    </ProjectCard>
  );
}

interface PhaseSectionProps {
  phase: string;
  liveLink: string;
  contribution: string;
}

function PhaseSection({ phase, liveLink, contribution }: PhaseSectionProps) {
  return (
    <div className="border border-neutral-800 rounded-lg p-4 space-y-2">
      <h4 className="font-semibold text-neutral-200">{phase}</h4>
      <p className="text-sm text-neutral-400">
        <span className="text-neutral-500">Live link:</span> {liveLink}
      </p>
      <p className="text-sm text-neutral-400">
        <span className="text-neutral-500">My contribution:</span> {contribution}
      </p>
    </div>
  );
}

export function TeamProjectCard() {
  return (
    <ProjectCard>
      <CardHeader className="px-0 pt-0">
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            Battleship Radar Command
          </h3>
          <span className="px-2.5 py-0.5 text-xs font-medium rounded-md bg-neutral-800 text-amber-400 border border-amber-900/50">
            In Progress
          </span>
        </div>
        <p className="text-neutral-400 mt-2 leading-relaxed">
          Multiplayer Battleship REST API backend built with Express.js and PostgreSQL.
          Handles player registration, game creation, join flow, and UUID-based game state.
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          {["Node.js", "Express.js", "PostgreSQL", "JavaScript", "HTML/CSS", "Render"].map((tech) => (
            <TechBadge key={tech}>{tech}</TechBadge>
          ))}
        </div>
      </CardHeader>
      <CardContent className="flex flex-wrap gap-4 pt-0 px-0">
        <a
          href="https://finalproject3750.onrender.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block"
        >
          <GlowingBorder variant="primary">View Live App</GlowingBorder>
        </a>
        <a
          href="https://github.com/sincoff/FINALPROJECT3750"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block"
        >
          <GlowingBorder variant="secondary">See the Code</GlowingBorder>
        </a>
      </CardContent>
    </ProjectCard>
  );
}
