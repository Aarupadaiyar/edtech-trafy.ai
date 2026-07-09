import { useEffect, useState } from 'react';
import { Timer } from 'lucide-react';
import { cohortInfo } from '../data/cohort';

function getTargetDate() {
  const now = new Date();
  const target = new Date(`${cohortInfo.startDate} ${now.getFullYear()}`);
  if (target.getTime() < now.getTime()) {
    target.setFullYear(target.getFullYear() + 1);
  }
  return target;
}

function getRemaining() {
  const diffMs = getTargetDate().getTime() - Date.now();
  if (diffMs <= 0) return { started: true, days: 0, hours: 0, minutes: 0, seconds: 0 };
  const totalSeconds = Math.floor(diffMs / 1000);
  const days = Math.floor(totalSeconds / (60 * 60 * 24));
  const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return { started: false, days, hours, minutes, seconds };
}

export default function CohortCountdown({ className = '' }) {
  const [remaining, setRemaining] = useState(getRemaining);

  useEffect(() => {
    const id = setInterval(() => setRemaining(getRemaining()), 1000);
    return () => clearInterval(id);
  }, []);

  const badgeClass =
    'font-display font-bold inline-flex items-center gap-2 rounded-full bg-[var(--lime)] text-[var(--ink)] px-4 py-1.5 text-xs md:text-sm tracking-wide';

  if (remaining.started) {
    return (
      <span className={`${badgeClass} ${className}`}>
        <Timer size={14} strokeWidth={2.5} />
        {cohortInfo.cohortLabel} has started
      </span>
    );
  }

  const pad = n => String(n).padStart(2, '0');

  return (
    <span className={`${badgeClass} ${className}`}>
      <Timer size={14} strokeWidth={2.5} />
      {pad(remaining.days)}D {pad(remaining.hours)}H {pad(remaining.minutes)}M {pad(remaining.seconds)}S until {cohortInfo.cohortLabel} starts
    </span>
  );
}
