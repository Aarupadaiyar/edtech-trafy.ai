import DomeGallery from '../components/DomeGallery';

// 'openai' and 'pinecone' aren't in the simpleicons catalog (404), so those
// two use local lime-recolored icons instead of the CDN.
const stack = [
  { name: 'Python', slug: 'python' },
  { name: 'FastAPI', slug: 'fastapi' },
  { name: 'React', slug: 'react' },
  { name: 'TypeScript', slug: 'typescript' },
  { name: 'OpenAI', src: '/logos/openai-mark-lime.svg' },
  { name: 'LangChain', slug: 'langchain' },
  { name: 'Docker', slug: 'docker' },
  { name: 'PostgreSQL', slug: 'postgresql' },
  { name: 'Redis', slug: 'redis' },
  { name: 'GitHub', slug: 'github' },
  { name: 'Vector DB', src: '/logos/database-icon-lime.svg' },
  { name: 'Cloud Deploy', slug: 'googlecloud' }
];

const images = stack.map(t => ({ src: t.src || `https://cdn.simpleicons.org/${t.slug}/b6eb30`, alt: t.name }));

export default function TechStack() {
  return (
    <section className="py-24 md:py-32 border-b border-[var(--ink-line)]">
      <div className="container-x">
        <div className="eyebrow mb-4">The Toolkit</div>
        <h2 className="font-display font-semibold text-4xl md:text-6xl max-w-3xl leading-[1.05]">
          The exact stack production teams run.
        </h2>
        <p className="mt-5 text-[var(--mist)] max-w-xl">Spins on its own — drag to take control.</p>
      </div>

      <div className="mt-14 h-[440px] md:h-[560px]">
        <DomeGallery images={images} fit={0.62} grayscale={false} imageBorderRadius="18px" overlayBlurColor="#0a0b0e" />
      </div>
    </section>
  );
}
