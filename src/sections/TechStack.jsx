import DomeGallery from '../components/DomeGallery';

const stack = [
  { name: 'Python', slug: 'python' },
  { name: 'FastAPI', slug: 'fastapi' },
  { name: 'React', slug: 'react' },
  { name: 'TypeScript', slug: 'typescript' },
  { name: 'OpenAI', slug: 'openai' },
  { name: 'LangChain', slug: 'langchain' },
  { name: 'Docker', slug: 'docker' },
  { name: 'PostgreSQL', slug: 'postgresql' },
  { name: 'Redis', slug: 'redis' },
  { name: 'GitHub', slug: 'github' },
  { name: 'Vector DB', slug: 'pinecone' },
  { name: 'Cloud Deploy', slug: 'googlecloud' }
];

const images = stack.map(t => ({ src: `https://cdn.simpleicons.org/${t.slug}/eeeeee`, alt: t.name }));

export default function TechStack() {
  return (
    <section className="py-24 md:py-32 border-b border-[var(--ink-line)]">
      <div className="container-x">
        <div className="eyebrow mb-4">The Toolkit</div>
        <h2 className="font-display font-semibold text-4xl md:text-6xl max-w-3xl leading-[1.05]">
          The exact stack production teams run.
        </h2>
        <p className="mt-5 text-[var(--mist)] max-w-xl">Drag to spin the shelf.</p>
      </div>

      <div className="mt-14 h-[440px] md:h-[560px]">
        <DomeGallery images={images} fit={0.62} grayscale={false} imageBorderRadius="18px" overlayBlurColor="#0a0b0e" />
      </div>
    </section>
  );
}
