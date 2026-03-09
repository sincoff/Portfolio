export function Footer() {
  return (
    <footer id="about" className="py-20 px-4 md:px-8 border-t border-neutral-800">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-8">
          About
        </h2>
        <p className="text-neutral-400 max-w-xl leading-relaxed mb-8 mx-auto">
          Full-stack developer focused on building web applications with Python,
          Flask, and JavaScript. I work across the stack from database design to
          responsive interfaces.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="https://github.com/sincoff"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full text-sm font-medium text-neutral-300 border border-neutral-700 bg-neutral-900/50 hover:border-neutral-500 hover:text-white transition-all duration-300"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/ian-s-0b5b09290/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full text-sm font-medium text-neutral-300 border border-neutral-700 bg-neutral-900/50 hover:border-neutral-500 hover:text-white transition-all duration-300"
          >
            LinkedIn
          </a>
          <a
            href="mailto:ian.sincoff@gmail.com"
            className="px-5 py-2.5 rounded-full text-sm font-medium text-neutral-300 border border-neutral-700 bg-neutral-900/50 hover:border-neutral-500 hover:text-white transition-all duration-300"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
