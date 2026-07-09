import { useEffect, useMemo, useRef, useState } from 'react';
import Lanyard from '../components/Lanyard';

function fitFont(ctx, text, weight, family, maxWidth, startSize) {
  let size = startSize;
  while (size > 20) {
    ctx.font = `${weight} ${size}px ${family}`;
    if (ctx.measureText(text).width <= maxWidth) break;
    size -= 2;
  }
  return size;
}

function useFrontCardImage() {
  return useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 800;
    canvas.height = 1000;
    const ctx = canvas.getContext('2d');
    if (!ctx) return null;

    ctx.fillStyle = '#0a0b0e';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const borderWidth = 14;
    ctx.strokeStyle = '#c6ff33';
    ctx.lineWidth = borderWidth;
    ctx.strokeRect(borderWidth / 2, borderWidth / 2, canvas.width - borderWidth, canvas.height - borderWidth);

    ctx.textAlign = 'center';
    ctx.fillStyle = '#eeeeee';
    ctx.font = '700 110px "Space Grotesk", sans-serif';
    ctx.fillText('You.', canvas.width / 2, 460);

    const line2 = 'Future AI Engineer @ FAANG.';
    const size = fitFont(ctx, line2, '700', '"Space Grotesk", sans-serif', canvas.width - 140, 54);
    ctx.fillStyle = '#c6ff33';
    ctx.font = `700 ${size}px "Space Grotesk", sans-serif`;
    ctx.fillText(line2, canvas.width / 2, 580);

    ctx.strokeStyle = 'rgba(198,255,51,0.35)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(160, 860);
    ctx.lineTo(canvas.width - 160, 860);
    ctx.stroke();

    ctx.fillStyle = '#c6ff33';
    ctx.font = '600 26px "JetBrains Mono", monospace';
    ctx.fillText('TRAFY AI · COHORT 04', canvas.width / 2, 910);

    return canvas.toDataURL('image/png');
  }, []);
}

export default function ApplyCohort() {
  const frontImage = useFrontCardImage();
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
          One side is where you start. The other is where eight weeks of shipping takes you. Click the card to flip it.
        </p>
      </div>

      <div ref={stageRef} className="mt-6 h-[520px] md:h-[650px] relative z-10">
        {isInView && frontImage && (
          <Lanyard
            position={[0, 0, 20]}
            gravity={[0, -40, 0]}
            frontImage={frontImage}
            backImage="/trafy-logo.svg"
            imageFit="contain"
            lanyardWidth={0.15}
          />
        )}
      </div>

      <div className="container-x text-center relative z-10 -mt-4 md:-mt-10">
        <a
          href="#get-pricing"
          className="inline-flex items-center gap-2 bg-[var(--amber)] text-[#0a0b0e] font-display font-semibold px-9 py-5 rounded-full text-lg hover:brightness-110 transition"
        >
          Get Pricing & Seats
        </a>
      </div>
    </section>
  );
}
