import { useEffect, useMemo, useRef, useState } from 'react';
import Lanyard from '../components/Lanyard';

function useBackCardImage() {
  return useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 800;
    canvas.height = 1000;
    const ctx = canvas.getContext('2d');
    if (!ctx) return null;

    ctx.fillStyle = '#0a0b0e';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.textAlign = 'center';
    ctx.fillStyle = '#8b909b';
    ctx.font = '600 32px "JetBrains Mono", monospace';
    ctx.fillText('THIS COULD BE', canvas.width / 2, 340);

    ctx.fillStyle = '#eeeeee';
    ctx.font = '700 76px "Space Grotesk", sans-serif';
    ctx.fillText('YOU.', canvas.width / 2, 460);

    ctx.fillStyle = '#b6eb30';
    ctx.font = '700 58px "Space Grotesk", sans-serif';
    ctx.fillText('FAANG AI ENGINEER.', canvas.width / 2, 580);
    ctx.fillText('MULTIMILLIONAIRE.', canvas.width / 2, 650);

    ctx.strokeStyle = '#23262e';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(160, 720);
    ctx.lineTo(canvas.width - 160, 720);
    ctx.stroke();

    ctx.fillStyle = '#8b909b';
    ctx.font = '500 28px "JetBrains Mono", monospace';
    ctx.fillText('TRAFY AI · COHORT 04', canvas.width / 2, 780);

    return canvas.toDataURL('image/png');
  }, []);
}

export default function ApplyCohort() {
  const backImage = useBackCardImage();
  const stageRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="apply" className="py-24 md:py-32 border-b border-[var(--ink-line)] relative overflow-hidden">
      <div className="container-x text-center relative z-10">
        <div className="eyebrow mb-4 justify-center flex">Apply for the Cohort</div>
        <h2 className="font-display font-semibold text-4xl md:text-6xl leading-[1.05] max-w-3xl mx-auto">
          Drag the card. Flip your future.
        </h2>
        <p className="mt-5 text-[var(--mist)] max-w-xl mx-auto">
          One side is where you start. The other is where eight weeks of shipping takes you.
        </p>
      </div>

      <div ref={stageRef} className="mt-6 h-[520px] md:h-[650px] relative z-10">
        {isInView && backImage && (
          <Lanyard
            position={[0, 0, 20]}
            gravity={[0, -40, 0]}
            frontImage="/trafy-logo.svg"
            backImage={backImage}
            imageFit="contain"
          />
        )}
      </div>

      <div className="container-x text-center relative z-10 -mt-4 md:-mt-10">
        <a
          href="#final-cta"
          className="cursor-target inline-flex items-center gap-2 bg-[var(--amber)] text-[var(--ink)] font-display font-semibold px-9 py-5 rounded-full text-lg hover:brightness-110 transition"
        >
          Apply Now
        </a>
      </div>
    </section>
  );
}
