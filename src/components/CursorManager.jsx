import { useEffect, useState } from 'react';
import SplashCursor from './SplashCursor';

export default function CursorManager() {
  const [splashActive, setSplashActive] = useState(false);

  useEffect(() => {
    const handleOver = e => {
      const inZone = !!e.target.closest('[data-splash-zone]');
      setSplashActive(prev => (prev === inZone ? prev : inZone));
    };
    window.addEventListener('mouseover', handleOver, { passive: true });
    return () => window.removeEventListener('mouseover', handleOver);
  }, []);

  return <SplashCursor active={splashActive} RAINBOW_MODE={false} COLOR="#b6eb30" />;
}
