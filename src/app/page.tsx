import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Nav />
      <main className="max-w-7xl mx-auto">
        <section className="px-4 md:px-8 pt-12 md:pt-16">
          <Hero />
        </section>
        <Projects />
        <Footer />
      </main>
    </div>
  );
}
