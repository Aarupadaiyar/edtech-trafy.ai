import { Link } from "react-router-dom";

const releases = [
  {
    date: "August 10, 2026",
    title: "Trafy AI Announces Development of Flagship AI-Driven Professional Networking Platform for Global Tech Talent",
    body: "Dmerz Technology Pvt. Ltd. (operating as Trafy AI) today officially announced that it is building a next-generation AI-powered professional networking platform tailored specifically for AI engineers, developers, and tech enterprises.",
    href: "/press/networking-app",
    featured: true,
  },
  {
    date: "June 30, 2026",
    title: "Trafy Cohort: Applications Open for Second Intake",
    body: "Trafy today announced that applications for the second cohort of its mentored AI learning programme are now open. The programme focuses on practical, project-based learning and has already placed 90% of its first cohort graduates into AI roles.",
  },
  {
    date: "May 15, 2026",
    title: "Trafy Reaches 10,000 Verified AI Professionals",
    body: "Trafy's talent platform has surpassed 10,000 verified AI professionals across 30+ countries, making it one of the fastest-growing AI-focused talent networks globally.",
  },
  {
    date: "March 20, 2026",
    title: "Trafy Build Launches Rapid AI Product Development Service",
    body: "Trafy has launched Trafy Build, a new service that provides customised AI product development with delivery in as little as 3 working days. The service leverages Trafy's curated network of senior AI engineers.",
  },
  {
    date: "January 10, 2026",
    title: "Trafy Launches AI Assessment Platform",
    body: "Trafy has launched its AI-powered skill assessment platform, enabling companies to verify the capabilities of AI engineering candidates through adaptive, real-world evaluation scenarios.",
  },
];

const mediaKit = [
  { label: "Brand Guidelines", desc: "Logo usage, colours, typography", format: "PDF" },
  { label: "Logo Pack", desc: "SVG, PNG in all variants", format: "ZIP" },
  { label: "Company Fact Sheet", desc: "Key stats, timeline, team info", format: "PDF" },
];

export default function Press() {
  return (
    <section className="mx-auto max-w-4xl px-6 pt-32 pb-24">
      {/* Breadcrumb */}
      <nav className="mb-8 flex items-center gap-2 text-xs text-white/40">
        <Link to="/" className="transition-colors hover:text-white">Home</Link>
        <span>/</span>
        <span className="text-white/70">Press</span>
      </nav>

      <h1 className="font-display text-4xl font-extrabold tracking-tight md:text-5xl">
        Press &amp; Media
      </h1>
      <p className="mt-4 max-w-xl text-lg text-white/50">
        News, press releases, and media resources from Trafy.
      </p>

      {/* Announcement Callout Banner */}
      <div className="mt-8 rounded-2xl border border-rose/30 bg-rose/10 p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-rose">✦ Special Announcement</span>
          <h2 className="mt-1 font-display text-lg font-bold text-white">Trafy AI 4th Year Anniversary (August 11, 2026)</h2>
          <p className="mt-1 text-sm text-white/70">Celebrating 4 years of empowering global AI talent and building borderless careers.</p>
        </div>
        <Link
          to="/announcements/4th-anniversary"
          className="inline-flex items-center justify-center whitespace-nowrap rounded-xl bg-rose px-4 py-2 text-sm font-semibold text-white transition-all hover:brightness-110"
        >
          View Announcement →
        </Link>
      </div>

      {/* Press Contact */}
      <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6">
        <h2 className="font-display text-sm font-bold text-white">Media Enquiries</h2>
        <p className="mt-2 text-sm text-white/50">
          For press enquiries, interview requests, or media partnerships, please contact:
        </p>
        <a href="mailto:press@trafy.ai" className="mt-2 inline-block text-sm font-semibold text-white hover:underline">
          press@trafy.ai
        </a>
      </div>

      {/* Releases */}
      <div className="mt-16">
        <h2 className="font-display text-xs font-bold uppercase tracking-widest text-white/30">Press Releases</h2>
        <div className="mt-8 space-y-4">
          {releases.map((r) => (
            <article
              key={r.title}
              className={`rounded-2xl border p-6 transition-all duration-300 ${
                r.featured
                  ? "border-green-hard/40 bg-gradient-to-r from-green-hard/10 to-white/5"
                  : "border-white/10 bg-white/5 hover:border-white/20"
              }`}
            >
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-medium text-white/40">{r.date}</span>
                {r.featured && (
                  <span className="rounded-full bg-green-hard/20 px-2.5 py-0.5 text-[10px] font-bold text-green-hard">
                    FEATURED RELEASE
                  </span>
                )}
              </div>
              <h3 className="mt-2 font-display text-lg font-bold text-white">{r.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">{r.body}</p>
              {r.href && (
                <div className="mt-4">
                  <Link
                    to={r.href}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-green-hard hover:underline"
                  >
                    Read Official Press Release Document →
                  </Link>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>

      {/* Media Kit */}
      <div className="mt-16">
        <h2 className="font-display text-xs font-bold uppercase tracking-widest text-white/30">Media Kit</h2>
        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          {mediaKit.map((item) => (
            <div
              key={item.label}
              className="group cursor-pointer rounded-2xl border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:border-white/20 hover:shadow-sm"
            >
              <h3 className="font-display text-sm font-bold text-white">{item.label}</h3>
              <p className="mt-1 text-xs text-white/40">{item.desc}</p>
              <span className="mt-3 inline-flex items-center gap-1 rounded-full bg-white/10 px-2.5 py-1 text-xs font-semibold text-white/50">
                {item.format}
              </span>
            </div>
          ))}
        </div>
        <p className="mt-4 text-xs text-white/30">
          Contact <a href="mailto:press@trafy.ai" className="underline hover:text-white">press@trafy.ai</a> to request media kit downloads.
        </p>
      </div>
    </section>
  );
}
