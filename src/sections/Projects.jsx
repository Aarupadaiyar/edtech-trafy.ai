import { useEffect, useState } from 'react';
import CircularGallery from '../components/CircularGallery';
import { projects } from '../data/projects';

// Real logo images swapped in for specific cards instead of the drawn glyph
// (index -> asset path). Falls back to the drawn glyph if the image fails to load.
const LOGO_OVERRIDES = {
  0: '/logos/openai-mark.svg', // AI Personal Assistant — built on the OpenAI API
  2: '/logos/database-icon.svg' // AI Research Assistant — Vector DB
};

function loadImage(src) {
  return new Promise(resolve => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => resolve(null);
    img.src = src;
  });
}

// Draws a small isometric "3D" cube badge in brand lime tones, with a simple
// ink-colored glyph on its top face representing the project's theme —
// stands in for a per-card 3D icon without spinning up a live WebGL scene
// per gallery card (which would be 8 extra render loops).
function drawIsoBadge(ctx, cx, cy, r, glyph) {
  const h = r * 0.9;
  const top = { x: cx, y: cy - r };
  const right = { x: cx + r, y: cy - r / 2 };
  const bottom = { x: cx, y: cy };
  const left = { x: cx - r, y: cy - r / 2 };

  ctx.fillStyle = '#d4ff5c';
  ctx.beginPath();
  ctx.moveTo(top.x, top.y);
  ctx.lineTo(right.x, right.y);
  ctx.lineTo(bottom.x, bottom.y);
  ctx.lineTo(left.x, left.y);
  ctx.closePath();
  ctx.fill();

  ctx.fillStyle = '#5a7d1a';
  ctx.beginPath();
  ctx.moveTo(left.x, left.y);
  ctx.lineTo(bottom.x, bottom.y);
  ctx.lineTo(bottom.x, bottom.y + h);
  ctx.lineTo(left.x, left.y + h);
  ctx.closePath();
  ctx.fill();

  ctx.fillStyle = '#b6eb30';
  ctx.beginPath();
  ctx.moveTo(right.x, right.y);
  ctx.lineTo(bottom.x, bottom.y);
  ctx.lineTo(bottom.x, bottom.y + h);
  ctx.lineTo(right.x, right.y + h);
  ctx.closePath();
  ctx.fill();

  ctx.save();
  ctx.strokeStyle = '#0a0b0e';
  ctx.fillStyle = '#0a0b0e';
  ctx.lineWidth = r * 0.09;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  const s = r * 0.5;
  glyph(ctx, top.x, top.y - r * 0.25, s);
  ctx.restore();
}

function drawLogoBadge(ctx, cx, cy, r, img) {
  const size = r * 1.7;
  const scale = Math.min(size / img.width, size / img.height);
  const dw = img.width * scale;
  const dh = img.height * scale;
  ctx.drawImage(img, cx - dw / 2, cy - dh / 2 - r * 0.1, dw, dh);
}

const GLYPHS = [
  // chat bubble — AI assistant
  (ctx, x, y, s) => {
    ctx.beginPath();
    ctx.roundRect(x - s, y - s * 0.7, s * 2, s * 1.3, s * 0.4);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x - s * 0.3, y + s * 0.6);
    ctx.lineTo(x - s * 0.5, y + s * 1.1);
    ctx.lineTo(x + s * 0.1, y + s * 0.6);
    ctx.fill();
  },
  // pen nib — content studio
  (ctx, x, y, s) => {
    ctx.beginPath();
    ctx.moveTo(x, y - s);
    ctx.lineTo(x + s * 0.7, y + s * 0.6);
    ctx.lineTo(x, y + s * 1.1);
    ctx.lineTo(x - s * 0.7, y + s * 0.6);
    ctx.closePath();
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x, y - s * 0.2);
    ctx.lineTo(x, y + s * 0.9);
    ctx.stroke();
  },
  // magnifying glass — research
  (ctx, x, y, s) => {
    ctx.beginPath();
    ctx.arc(x - s * 0.15, y - s * 0.15, s * 0.65, 0, Math.PI * 2);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x + s * 0.3, y + s * 0.3);
    ctx.lineTo(x + s * 0.95, y + s * 0.95);
    ctx.stroke();
  },
  // calendar — executive assistant
  (ctx, x, y, s) => {
    ctx.beginPath();
    ctx.roundRect(x - s, y - s * 0.8, s * 2, s * 1.7, s * 0.3);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x - s, y - s * 0.2);
    ctx.lineTo(x + s, y - s * 0.2);
    ctx.stroke();
  },
  // connected nodes — multi-agent suite
  (ctx, x, y, s) => {
    const pts = [
      [x, y - s],
      [x - s, y + s * 0.7],
      [x + s, y + s * 0.7]
    ];
    ctx.beginPath();
    pts.forEach(([px, py], i) => (i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py)));
    ctx.closePath();
    ctx.stroke();
    pts.forEach(([px, py]) => {
      ctx.beginPath();
      ctx.arc(px, py, s * 0.22, 0, Math.PI * 2);
      ctx.fill();
    });
  },
  // stacked layers — SaaS platform
  (ctx, x, y, s) => {
    [-0.6, 0.05, 0.7].forEach(o => {
      ctx.beginPath();
      ctx.roundRect(x - s, y + s * o - s * 0.22, s * 2, s * 0.4, s * 0.12);
      ctx.stroke();
    });
  },
  // shield check — production system
  (ctx, x, y, s) => {
    ctx.beginPath();
    ctx.moveTo(x, y - s);
    ctx.lineTo(x + s * 0.9, y - s * 0.5);
    ctx.lineTo(x + s * 0.9, y + s * 0.3);
    ctx.quadraticCurveTo(x + s * 0.9, y + s * 1.1, x, y + s * 1.3);
    ctx.quadraticCurveTo(x - s * 0.9, y + s * 1.1, x - s * 0.9, y + s * 0.3);
    ctx.lineTo(x - s * 0.9, y - s * 0.5);
    ctx.closePath();
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x - s * 0.35, y + s * 0.2);
    ctx.lineTo(x - s * 0.05, y + s * 0.55);
    ctx.lineTo(x + s * 0.5, y - s * 0.15);
    ctx.stroke();
  },
  // star — capstone
  (ctx, x, y, s) => {
    ctx.beginPath();
    for (let i = 0; i < 5; i++) {
      const a = (Math.PI * 2 * i) / 5 - Math.PI / 2;
      const a2 = a + Math.PI / 5;
      const ox = x + Math.cos(a) * s;
      const oy = y + Math.sin(a) * s;
      const ix = x + Math.cos(a2) * s * 0.45;
      const iy = y + Math.sin(a2) * s * 0.45;
      if (i === 0) ctx.moveTo(ox, oy);
      else ctx.lineTo(ox, oy);
      ctx.lineTo(ix, iy);
    }
    ctx.closePath();
    ctx.fill();
  }
];

function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
  const words = text.split(' ');
  const lines = [];
  let line = '';
  words.forEach(word => {
    const test = `${line}${word} `;
    if (ctx.measureText(test).width > maxWidth && line) {
      lines.push(line.trim());
      line = `${word} `;
    } else {
      line = test;
    }
  });
  lines.push(line.trim());
  const startY = y - ((lines.length - 1) * lineHeight) / 2;
  lines.forEach((l, i) => ctx.fillText(l, x, startY + i * lineHeight));
}

function createProjectTile(project, index, logoImg) {
  const W = 700;
  const H = 900;
  const canvas = document.createElement('canvas');
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext('2d');
  if (!ctx) return '';

  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, W, H);

  const borderWidth = 14;
  ctx.strokeStyle = '#b6eb30';
  ctx.lineWidth = borderWidth;
  ctx.strokeRect(borderWidth / 2, borderWidth / 2, W - borderWidth, H - borderWidth);

  const pad = 50;
  ctx.strokeStyle = 'rgba(10,11,14,0.12)';
  ctx.lineWidth = 1;
  ctx.strokeRect(pad, pad, W - pad * 2, H - pad * 2);

  ctx.textAlign = 'left';
  ctx.font = '700 42px "Space Grotesk", sans-serif';
  ctx.fillStyle = 'rgba(10,11,14,0.2)';
  ctx.fillText(`0${index + 1}`, pad + 8, pad + 52);

  if (logoImg) {
    drawLogoBadge(ctx, W / 2, pad + 175, 95, logoImg);
  } else {
    drawIsoBadge(ctx, W / 2, pad + 175, 95, GLYPHS[index % GLYPHS.length]);
  }

  ctx.textAlign = 'center';
  ctx.fillStyle = '#5a7d1a';
  ctx.font = '600 30px "JetBrains Mono", monospace';
  ctx.fillText(project.week.toUpperCase(), W / 2, pad + 330);

  ctx.strokeStyle = 'rgba(10,11,14,0.2)';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(W / 2 - 40, pad + 355);
  ctx.lineTo(W / 2 + 40, pad + 355);
  ctx.stroke();

  ctx.fillStyle = '#0a0b0e';
  ctx.font = '700 50px "Space Grotesk", sans-serif';
  wrapText(ctx, project.title, W / 2, H / 2 + 60, W - pad * 2 - 40, 56);

  ctx.font = '600 22px "JetBrains Mono", monospace';
  ctx.fillStyle = '#5a7d1a';
  ctx.fillText(project.difficulty.toUpperCase(), W / 2, H - pad - 36);

  return canvas.toDataURL('image/png');
}

export default function Projects() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [openIdx, setOpenIdx] = useState(null);
  const [galleryItems, setGalleryItems] = useState(null);
  const active = projects[activeIdx];
  const opened = openIdx !== null ? projects[openIdx] : null;

  useEffect(() => {
    let cancelled = false;
    const entries = Object.entries(LOGO_OVERRIDES);
    Promise.all(entries.map(([, src]) => loadImage(src))).then(images => {
      if (cancelled) return;
      const logosByIndex = {};
      entries.forEach(([idx], i) => { logosByIndex[idx] = images[i]; });
      setGalleryItems(
        projects.map((p, i) => ({ image: createProjectTile(p, i, logosByIndex[i]), text: p.week }))
      );
    });
    return () => { cancelled = true; };
  }, []);

  if (!galleryItems) {
    return <section id="projects" className="py-24 md:py-32 border-b border-[var(--ink-line)]" />;
  }

  return (
    <section id="projects" className="py-24 md:py-32 border-b border-[var(--ink-line)]">
      <div className="container-x">
        <div className="eyebrow mb-4">What You'll Ship</div>
        <h2 className="font-display font-semibold text-4xl md:text-6xl max-w-3xl leading-[1.05]">
          Eight projects. Eight proofs you can build.
        </h2>
        <p className="mt-5 text-[var(--mist)] max-w-xl">
          Drag to browse, click a project to open its details.
        </p>
      </div>

      <div className="mt-14 h-[420px] md:h-[520px] relative">
        <CircularGallery
          items={galleryItems}
          bend={2.4}
          textColor="#b6eb30"
          borderRadius={0.06}
          scrollSpeed={1.6}
          scrollEase={0.065}
          onActiveChange={setActiveIdx}
          onItemSelect={setOpenIdx}
        />
        <div className="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 font-mono text-[11px] text-[var(--mist)]">
          {active.week} · {active.title} · click to open
        </div>
      </div>

      {opened && (
        <div
          className="fixed inset-0 z-[80] flex items-end md:items-center justify-center bg-black/70 backdrop-blur-sm p-4"
          onClick={() => setOpenIdx(null)}
        >
          <div
            className="w-full max-w-2xl rounded-2xl border-2 border-[var(--amber)] bg-[var(--ink-raised)] overflow-hidden"
            onClick={e => e.stopPropagation()}
          >
            <div className="h-28 md:h-32 w-full flex items-center px-7 md:px-9 border-b border-[var(--amber)]/30 bg-gradient-to-br from-[var(--amber)]/10 to-transparent">
              <span className="font-display text-5xl md:text-6xl text-[var(--amber)]/50 font-semibold">
                {String(openIdx + 1).padStart(2, '0')}
              </span>
            </div>
            <div className="p-7 md:p-9">
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs text-[var(--amber)]">{opened.week} · {opened.difficulty}</span>
                <button onClick={() => setOpenIdx(null)} className="font-mono text-xs text-[var(--mist)] hover:text-[var(--bone)]">close ✕</button>
              </div>
              <h3 className="font-display text-2xl md:text-3xl mb-3">{opened.title}</h3>
              <p className="text-[var(--mist)] text-sm leading-relaxed mb-6">{opened.description}</p>

              <div className="grid sm:grid-cols-3 gap-6 font-mono text-xs">
                <div>
                  <div className="text-[var(--mist)] uppercase tracking-widest mb-2">Time</div>
                  <div className="text-[var(--bone)]">{opened.time}</div>
                </div>
                <div>
                  <div className="text-[var(--mist)] uppercase tracking-widest mb-2">Tech Stack</div>
                  <div className="flex flex-wrap gap-1.5">
                    {opened.stack.map(t => <span key={t} className="px-2 py-0.5 rounded-full border border-[var(--ink-line)]">{t}</span>)}
                  </div>
                </div>
                <div>
                  <div className="text-[var(--mist)] uppercase tracking-widest mb-2">Skills Unlocked</div>
                  <div className="flex flex-wrap gap-1.5">
                    {opened.skills.map(t => <span key={t} className="px-2 py-0.5 rounded-full bg-[var(--ink)] border border-[var(--circuit)]/40 text-[var(--circuit)]">{t}</span>)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
