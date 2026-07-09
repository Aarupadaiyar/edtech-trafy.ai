import { useEffect, useState } from 'react';
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
  if (diffMs <= 0) return { started: true, days: 0, hours: 0, minutes: 0 };
  const totalMinutes = Math.floor(diffMs / 60000);
  const days = Math.floor(totalMinutes / (60 * 24));
  const hours = Math.floor((totalMinutes % (60 * 24)) / 60);
  const minutes = totalMinutes % 60;
  return { started: false, days, hours, minutes };
}

export default function CohortCountdown({ className = '' }) {
  const [remaining, setRemaining] = useState(getRemaining);

  useEffect(() => {
    const id = setInterval(() => setRemaining(getRemaining()), 30000);
    return () => clearInterval(id);
  }, []);

  const badgeClass =
    'font-display font-bold inline-flex items-center rounded-full bg-[var(--amber)] text-[#0a0b0e] px-4 py-1.5 text-xs md:text-sm tracking-wide';

  if (remaining.started) {
    return (
      <span className={`${badgeClass} ${className}`}>{cohortInfo.cohortLabel} has started</span>
    );
  }

  const pad = n => String(n).padStart(2, '0');

  return (
    <span className={`${badgeClass} ${className}`}>
      {pad(remaining.days)}D {pad(remaining.hours)}H {pad(remaining.minutes)}M until {cohortInfo.cohortLabel} starts
    </span>
  );
}
