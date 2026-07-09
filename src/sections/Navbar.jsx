import GooeyNav from '../components/GooeyNav';
import ThemeToggle from '../components/ThemeToggle';

const links = [
  { href: '#curriculum', label: 'Curriculum' },
  { href: '#projects', label: 'Projects' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#faq', label: 'FAQ' }
];

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-[var(--ink-line)] bg-[var(--ink)]/80 backdrop-blur-md overflow-hidden">
      <div className="container-x flex items-center justify-between h-16 md:h-18">
        <a href="#top" className="font-display font-semibold text-lg tracking-tight text-[var(--bone)]">
          Trafy<span className="text-[var(--amber)]">AI</span>
        </a>
        <div className="hidden md:block" style={{ height: '44px' }}>
          <GooeyNav items={links} particleCount={12} particleDistances={[70, 8]} particleR={90} animationTime={500} timeVariance={250} />
        </div>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a href="#get-pricing" className="font-mono text-xs px-4 py-2 rounded-full border border-[var(--amber)] text-[var(--amber)] hover:bg-[var(--amber)] hover:text-[#0a0b0e] transition">
            Get Pricing
          </a>
        </div>
      </div>
    </header>
  );
}
