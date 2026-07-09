import Marquee from '../components/Marquee';

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

const tools = stack.map(t => ({ name: t.name, src: t.src || `https://cdn.simpleicons.org/${t.slug}/7fa30e` }));

export default function TechStack() {
  return (
    <section className="py-24 md:py-32 border-b border-[var(--line)] bg-[var(--navy-soft)]">
      <div className="container-x">
        <div className="eyebrow mb-4 text-[var(--navy)]">The Toolkit</div>
        <h2 className="font-display font-semibold text-4xl md:text-6xl max-w-3xl leading-[1.05] text-[var(--ink)]">
          12 Tools. The Exact Stack Production Teams Run.
        </h2>
      </div>

      <div className="mt-14">
        <Marquee items={tools} tone="brand" speed={28} />
      </div>
    </section>
  );
}
