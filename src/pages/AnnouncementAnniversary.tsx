import { Link } from "react-router-dom";

const milestones = [
  {
    year: "2022",
    title: "Trafy AI Founded",
    description: "Started with a vision to democratize AI education and transparent skill proofing for engineers worldwide.",
  },
  {
    year: "2023-2024",
    title: "AI Cohorts & Assessment Engine",
    description: "Launched mentored AI Engineering and AI Marketer cohorts alongside real-world adaptive skill evaluations.",
  },
  {
    year: "2025",
    title: "Global Talent Network",
    description: "Expanded across 30+ countries, serving over 10,000 verified AI professionals and top enterprise hiring partners.",
  },
  {
    year: "2026",
    title: "4th Anniversary & Networking App",
    description: "Celebrating four years of rapid growth and unveiling our upcoming AI-driven professional networking platform.",
  },
];

const stats = [
  { value: "4 Years", label: "of Empowering AI Talent" },
  { value: "10,000+", label: "Verified AI Engineers" },
  { value: "90%", label: "Placement Success Rate" },
  { value: "30+", label: "Countries Represented" },
];

export default function AnnouncementAnniversary() {
  return (
    <section className="relative overflow-hidden mx-auto max-w-5xl px-6 pt-32 pb-24 text-white">
      {/* Decorative Glow */}
      <div className="pointer-events-none absolute -top-20 left-1/2 h-96 w-[700px] -translate-x-1/2 rounded-full bg-rose/10 blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 right-0 h-80 w-80 rounded-full bg-green-hard/10 blur-3xl" />

      {/* Breadcrumb */}
      <nav className="mb-8 flex items-center gap-2 text-xs text-white/40">
        <Link to="/" className="transition-colors hover:text-white">Home</Link>
        <span>/</span>
        <span className="text-white/70">Announcements</span>
      </nav>

      {/* Main Hero Header */}
      <div className="relative">
        <div className="inline-flex items-center gap-2 rounded-full border border-rose/30 bg-rose/10 px-4 py-1.5 text-xs font-semibold text-rose">
          <span>✦</span> OFFICIAL ANNOUNCEMENT
        </div>

        <h1 className="mt-6 font-display text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl leading-tight">
          Trafy AI is Celebrating our <span className="bg-gradient-to-r from-rose via-yellow to-green-hard bg-clip-text text-transparent">4th Year Anniversary</span> on August 11, 2026!
        </h1>

        <p className="mt-6 max-w-3xl text-xl leading-relaxed text-white/70">
          Four years ago on August 11, 2022, Trafy AI embarked on a mission to reshape how global tech talent learns, proves their capability, and builds impactful careers in artificial intelligence. Today, we celebrate this major milestone with our global community of engineers, mentors, and corporate partners.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {stats.map((item) => (
          <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
            <div className="font-display text-3xl font-extrabold text-white sm:text-4xl">{item.value}</div>
            <div className="mt-2 text-xs font-medium text-white/50">{item.label}</div>
          </div>
        ))}
      </div>

      {/* Celebration Note */}
      <div className="mt-16 rounded-3xl border border-white/15 bg-gradient-to-br from-white/[0.07] to-white/[0.02] p-8 sm:p-12 relative overflow-hidden">
        <div className="pointer-events-none absolute -bottom-10 -right-10 h-64 w-64 rounded-full bg-yellow/10 blur-2xl" />
        
        <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
          A Message from Our Leadership Team
        </h2>

        <div className="mt-6 space-y-4 text-base leading-relaxed text-white/75">
          <p>
            &ldquo;As we reach our fourth anniversary on August 11, 2026, we are deeply grateful to every developer, mentor, student, and enterprise leader who trusted Trafy AI from day one.&rdquo;
          </p>
          <p>
            &ldquo;In four short years, we have transitioned from an ambitious edtech &amp; work tech vision into an international ecosystem connecting high-caliber talent across 30+ countries. As AI transforms every industry, Trafy AI remains committed to providing borderless career opportunities, real-world skill validation, and cutting-edge software tools.&rdquo;
          </p>
        </div>

        <div className="mt-8 flex items-center gap-4 pt-6 border-t border-white/10">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-hard font-display text-lg font-bold text-ink">
            T
          </div>
          <div>
            <h4 className="font-display text-sm font-bold text-white">The Trafy AI Founding Team</h4>
            <p className="text-xs text-white/40">Dmerz Technology Pvt. Ltd.</p>
          </div>
        </div>
      </div>

      {/* 4-Year Journey Milestone Timeline */}
      <div className="mt-20">
        <h2 className="font-display text-xs font-bold uppercase tracking-widest text-white/30">
          4-Year Milestone Journey
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {milestones.map((m) => (
            <div
              key={m.year}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:border-white/20"
            >
              <span className="inline-block rounded-lg bg-white/10 px-3 py-1 text-xs font-bold text-green-hard">
                {m.year}
              </span>
              <h3 className="mt-3 font-display text-lg font-bold text-white">{m.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">{m.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Future Roadmap / Next Chapter */}
      <div className="mt-16 rounded-2xl border border-green-hard/20 bg-green-hard/5 p-8 text-center sm:text-left sm:flex sm:items-center sm:justify-between sm:gap-8">
        <div>
          <h3 className="font-display text-xl font-bold text-white">What&apos;s Next for Trafy AI</h3>
          <p className="mt-2 text-sm text-white/70 max-w-xl">
            We are gearing up for the launch of our AI-driven professional networking platform and expanding our AI cohort intakes.
          </p>
        </div>
        <div className="mt-6 sm:mt-0 flex flex-wrap gap-3 justify-center">
          <Link
            to="/press/networking-app"
            className="inline-flex items-center justify-center rounded-xl bg-green-hard px-5 py-2.5 text-sm font-semibold text-ink transition-all hover:brightness-110"
          >
            Read Press Release
          </Link>
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-white/10"
          >
            Explore Platform
          </Link>
        </div>
      </div>
    </section>
  );
}
