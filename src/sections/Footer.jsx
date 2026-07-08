export default function Footer() {
  return (
    <footer className="py-14 md:py-16">
      <div className="container-x flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div>
          <div className="font-display font-semibold text-lg mb-2">
            Trafy<span className="text-[var(--amber)]">AI</span>
          </div>
          <p className="text-sm text-[var(--mist)] max-w-xs">
            We don't teach AI. We build AI engineers — one shipped project at a time.
          </p>
        </div>

        <div className="flex flex-wrap gap-x-10 gap-y-4 font-mono text-xs uppercase tracking-widest text-[var(--mist)]">
          <a href="#curriculum" className="cursor-target hover:text-[var(--amber)] transition-colors">Curriculum</a>
          <a href="#projects" className="cursor-target hover:text-[var(--amber)] transition-colors">Projects</a>
          <a href="#faq" className="cursor-target hover:text-[var(--amber)] transition-colors">FAQ</a>
          <a href="https://trafyai.com" className="cursor-target hover:text-[var(--amber)] transition-colors">trafyai.com ↗</a>
        </div>
      </div>
      <div className="container-x mt-10 pt-6 border-t border-[var(--ink-line)] flex flex-col sm:flex-row justify-between gap-3 font-mono text-[11px] text-[var(--mist)]">
        <span>© {new Date().getFullYear()} Trafy AI. All rights reserved.</span>
        <span>Built by learning. Not just about it.</span>
      </div>
    </footer>
  );
}
