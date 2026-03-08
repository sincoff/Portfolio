export function Footer() {
  return (
    <footer className="py-16 px-4 md:px-8 border-t border-neutral-800">
      <div className="max-w-4xl mx-auto">
        <p className="text-neutral-400 max-w-xl leading-relaxed mb-8">
          Full-stack developer focused on building web applications with Python,
          Flask, and JavaScript. I work across the stack from database design to
          responsive interfaces.
        </p>
        <div className="flex flex-wrap gap-6">
          <a
            href="https://github.com/sincoff"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-300 font-medium hover:text-white transition focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black focus-visible:rounded"
            aria-label="GitHub profile (opens in new tab)"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/ian-s-0b5b09290/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-300 font-medium hover:text-white transition focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black focus-visible:rounded"
            aria-label="LinkedIn profile (opens in new tab)"
          >
            LinkedIn
          </a>
          <a
            href="mailto:ian.sincoff@gmail.com"
            className="text-neutral-300 font-medium hover:text-white transition focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black focus-visible:rounded"
            aria-label="Email Ian Sincoff"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
