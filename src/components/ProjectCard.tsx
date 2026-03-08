import { Card, CardContent, CardHeader } from "@/components/ui/card";
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

interface ProjectCardProps {
  children: React.ReactNode;
  className?: string;
}

function ProjectCard({ children, className }: ProjectCardProps) {
  return (
    <Card
      className={cn(
        "bg-black/[0.96] border-neutral-800 overflow-hidden",
        className
      )}
    >
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
    <ProjectCard>
      <CardHeader>
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
      <CardContent className="flex flex-wrap gap-4 pt-0">
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-neutral-200 transition text-base"
        >
          View Live App
        </a>
        <a
          href={codeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 border border-neutral-600 text-neutral-300 font-semibold rounded-lg hover:border-neutral-400 transition"
        >
          See the Code
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
      <CardHeader>
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
      <CardContent className="flex flex-wrap gap-4 pt-0">
        <a
          href="https://finalproject3750.onrender.com"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-neutral-200 transition text-base"
        >
          View Live App
        </a>
        <a
          href="https://github.com/sincoff/FINALPROJECT3750"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 border border-neutral-600 text-neutral-300 font-semibold rounded-lg hover:border-neutral-400 transition"
        >
          See the Code
        </a>
      </CardContent>
    </ProjectCard>
  );
}
