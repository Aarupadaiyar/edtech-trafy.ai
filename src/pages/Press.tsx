import { Link } from "react-router-dom";

type PressReleaseItem = {
  date: string;
  title: string;
  body: string;
  href?: string;
  featured?: boolean;
  badge?: string;
};

const releases: PressReleaseItem[] = [
  {
    date: "August 10, 2026",
    badge: "LATEST PRESS RELEASE",
    title: "Trafy AI Announces Development of Flagship AI-Driven Professional Networking Platform for Global Tech Talent",
    body: "Dmerz Technology Pvt. Ltd. (operating as Trafy AI) today officially announced that it is building a next-generation AI-powered professional networking platform tailored specifically for AI engineers, software developers, and tech enterprises.",
    href: "/press/networking-app",
    featured: true,
  },
  {
    date: "June 30, 2026",
    badge: "COHORT INTAKE",
    title: "Trafy Cohort: Applications Open for Second Intake",
    body: "Trafy today announced that applications for the second cohort of its mentored AI learning programme are now open. The programme focuses on practical, project-based learning and has already placed 90% of its first cohort graduates into AI roles.",
  },
  {
    date: "May 15, 2026",
    badge: "TALENT NETWORK",
    title: "Trafy Reaches 10,000 Verified AI Professionals",
    body: "Trafy's talent platform has surpassed 10,000 verified AI professionals across 30+ countries, making it one of the fastest-growing AI-focused talent networks globally.",
  },
  {
    date: "March 20, 2026",
    badge: "PRODUCT LAUNCH",
    title: "Trafy Build Launches Rapid AI Product Development Service",
    body: "Trafy has launched Trafy Build, a new service that provides customised AI product development with delivery in as little as 3 working days. The service leverages Trafy's curated network of senior AI engineers.",
  },
  {
    date: "January 10, 2026",
    badge: "ASSESSMENT ENGINE",
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
    <section className="relative mx-auto max-w-4xl px-4 sm:px-6 pt-24 sm:pt-32 pb-16 sm:pb-24 text-white">
      {/* Decorative Glow */}
      <div className="pointer-events-none absolute -top-20 left-1/2 h-80 w-[600px] -translate-x-1/2 rounded-full bg-green-hard/10 blur-3xl" />

      {/* Breadcrumb */}
      <nav className="mb-5 sm:mb-8 flex items-center gap-2 text-xs text-white/40">
        <Link to="/" className="transition-colors hover:text-white">Home</Link>
        <span>/</span>
        <span className="text-white/70">Press</span>
      </nav>

      {/* Page Title */}
      <h1 className="font-display text-3xl font-extrabold tracking-tight md:text-5xl">
        Press &amp; Media Center
      </h1>
      <p className="mt-3 sm:mt-4 max-w-xl text-base sm:text-lg text-white/50">
        Official news releases, company announcements timeline, and media resources.
      </p>

      {/* Announcement Callout Banner */}
      <div className="mt-6 sm:mt-8 rounded-xl sm:rounded-2xl border border-rose/30 bg-gradient-to-r from-rose/15 via-rose/5 to-white/5 p-4 sm:p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 shadow-lg shadow-rose/5">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-rose">✦ Special Announcement</span>
          <h2 className="mt-1 font-display text-lg font-bold text-white">Trafy AI 4th Year Anniversary (August 11, 2026)</h2>
          <p className="mt-1 text-sm text-white/70">Celebrating 4 years of empowering global AI talent and building borderless careers.</p>
        </div>
        <Link
          to="/announcements/4th-anniversary"
          className="inline-flex items-center justify-center whitespace-nowrap rounded-xl bg-rose px-4 py-2.5 text-sm font-semibold text-white transition-all hover:brightness-110 shadow-md shadow-rose/20"
        >
          View Announcement Timeline →
        </Link>
      </div>

      {/* Press Contact Box */}
      <div className="mt-6 sm:mt-8 rounded-xl sm:rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-6">
        <h2 className="font-display text-sm font-bold text-white">Media Enquiries</h2>
        <p className="mt-2 text-sm text-white/50">
          For press enquiries, executive interview requests, or media partnerships, please contact:
        </p>
        <a href="mailto:press@trafy.ai" className="mt-2 inline-block text-sm font-semibold text-green-hard hover:underline">
          press@trafy.ai
        </a>
      </div>

      {/* Press Releases Timeline */}
      <div className="mt-10 sm:mt-16">
        <div className="flex items-center justify-between">
          <h2 className="font-display text-xs font-bold uppercase tracking-widest text-white/40">
            Press Releases Timeline (Newest First)
          </h2>
          <span className="text-xs text-white/30">{releases.length} Releases</span>
        </div>

        {/* Timeline Container */}
        <div className="relative mt-6 sm:mt-8 pl-5 sm:pl-8 border-l-2 border-white/15 space-y-6 sm:space-y-10">
          {releases.map((r) => (
            <div key={r.title} className="relative group">
              {/* Timeline Connector Node Circle */}
              <div
                className={`absolute -left-[27px] sm:-left-[39px] top-1.5 flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full border-2 bg-ink transition-transform duration-300 group-hover:scale-125 ${
                  r.featured
                    ? "border-green-hard bg-green-hard/20 shadow-lg shadow-green-hard/40"
                    : "border-white/30 bg-white/10"
                }`}
              >
                <div
                  className={`h-2 w-2 rounded-full ${
                    r.featured ? "bg-green-hard animate-pulse" : "bg-white/60"
                  }`}
                />
              </div>

              {/* Release Card */}
              <article
                className={`rounded-xl sm:rounded-2xl border p-4 sm:p-6 transition-all duration-300 ${
                  r.featured
                    ? "border-green-hard/40 bg-gradient-to-r from-green-hard/10 via-white/[0.04] to-white/[0.01] shadow-lg shadow-green-hard/5"
                    : "border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/[0.07]"
                }`}
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs font-medium text-white/40">{r.date}</span>
                  {r.badge && (
                    <span
                      className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold tracking-wider ${
                        r.featured
                          ? "bg-green-hard/20 text-green-hard border border-green-hard/30"
                          : "bg-white/10 text-white/60"
                      }`}
                    >
                      {r.badge}
                    </span>
                  )}
                </div>

                <h3 className="mt-2 font-display text-base sm:text-lg font-bold text-white group-hover:text-green-hard transition-colors">
                  {r.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{r.body}</p>

                {r.href && (
                  <div className="mt-4 pt-3 border-t border-white/10">
                    <Link
                      to={r.href}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-green-hard hover:underline"
                    >
                      Read Official Press Release Document →
                    </Link>
                  </div>
                )}
              </article>
            </div>
          ))}
        </div>
      </div>

      {/* Media Kit Section */}
      <div className="mt-20 border-t border-white/10 pt-16">
        <h2 className="font-display text-xs font-bold uppercase tracking-widest text-white/30">Media Kit &amp; Assets</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
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
          Contact <a href="mailto:press@trafy.ai" className="underline hover:text-white">press@trafy.ai</a> to request high-res logo assets.
        </p>
      </div>
    </section>
  );
}
