import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

function getInitialTheme() {
  const attr = document.documentElement.dataset.theme;
  return attr === 'light' || attr === 'dark' ? attr : 'dark';
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div className="flex items-center gap-1 rounded-full border border-[var(--ink-line)] bg-[var(--ink-raised)] p-1 shrink-0">
      <button
        type="button"
        onClick={() => setTheme('light')}
        aria-label="Switch to light mode"
        aria-pressed={theme === 'light'}
        className={`flex items-center justify-center w-7 h-7 rounded-full transition-colors ${
          theme === 'light' ? 'bg-[var(--amber)] text-[var(--ink)]' : 'text-[var(--mist)] hover:text-[var(--bone)]'
        }`}
      >
        <Sun className="w-4 h-4" strokeWidth={2} />
      </button>
      <button
        type="button"
        onClick={() => setTheme('dark')}
        aria-label="Switch to dark mode"
        aria-pressed={theme === 'dark'}
        className={`flex items-center justify-center w-7 h-7 rounded-full transition-colors ${
          theme === 'dark' ? 'bg-[var(--amber)] text-[var(--ink)]' : 'text-[var(--mist)] hover:text-[var(--bone)]'
        }`}
      >
        <Moon className="w-4 h-4" strokeWidth={2} />
      </button>
    </div>
  );
}
