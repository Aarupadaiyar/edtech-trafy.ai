import { useState } from 'react';
import CohortCountdown from '../components/CohortCountdown';

export default function UrgencyBar() {
  const [dismissed, setDismissed] = useState(false);
  if (dismissed) return null;

  return (
    <div className="relative border-b border-[var(--ink-line)] bg-[var(--ink-raised)]">
      <div className="container-x py-3 flex items-center justify-center text-center font-mono text-[11px] md:text-xs uppercase tracking-widest pr-8 md:pr-0">
        <CohortCountdown />
      </div>
      <button
        onClick={() => setDismissed(true)}
        aria-label="Dismiss"
        className="md:hidden absolute right-3 top-1/2 -translate-y-1/2 text-[var(--mist)] font-mono text-sm"
      >
        ✕
      </button>
    </div>
  );
}
