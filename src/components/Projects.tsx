import { SoloProjectCard } from "./ProjectCard";
import { TeamProjectCard } from "./ProjectCard";

const SNEAKER_VAULT = {
  title: "Sneaker Vault Pro",
  description: [
    "Sneaker Vault Pro lets collectors catalog their sneakers with images, sizes, and values — then instantly see their total collection count and portfolio worth.",
    "It handles full CRUD operations with a searchable, sortable inventory that paginates large collections and calculates aggregate stats on the fly.",
    "I separated the frontend (static HTML/CSS/JS on Netlify) from a Flask REST API on Render, with a serverless PostgreSQL database on Neon — giving me independent scaling and zero-cost hosting at low traffic.",
  ],
  techStack: [
    "Python",
    "Flask",
    "PostgreSQL",
    "JavaScript",
    "HTML/CSS",
    "Neon",
    "Render",
    "Netlify",
  ],
  liveUrl: "https://sneaker-manager.xyz",
  codeUrl: "https://github.com/sincoff/sneaker_manager",
};

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto space-y-12">
        <SoloProjectCard
          title={SNEAKER_VAULT.title}
          description={SNEAKER_VAULT.description}
          techStack={SNEAKER_VAULT.techStack}
          liveUrl={SNEAKER_VAULT.liveUrl}
          codeUrl={SNEAKER_VAULT.codeUrl}
        />
        <TeamProjectCard />
      </div>
    </section>
  );
}
