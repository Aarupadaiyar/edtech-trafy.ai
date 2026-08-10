import { Link } from "react-router-dom";

type AnnouncementItem = {
  id: string;
  date: string;
  badge: string;
  badgeColor: string;
  title: string;
  summary: string;
  isLatest?: boolean;
  link?: string;
  linkText?: string;
  details?: {
    stats?: { label: string; value: string }[];
    quote?: string;
  };
};

const announcements: AnnouncementItem[] = [
  {
    id: "anniversary-4th",
    date: "August 11, 2026",
    badge: "✦ 4TH ANNIVERSARY",
    badgeColor: "bg-rose/20 text-rose border-rose/30",
    title: "Trafy AI Celebrates 4th Year Anniversary on August 11, 2026!",
    summary:
      "Four years ago on August 11, 2022, Trafy AI was founded to empower global tech talent. Today, we celebrate 10,000+ verified AI engineers, 90%+ placement rates, and representation across 30+ countries.",
    isLatest: true,
    link: "/announcements/4th-anniversary",
    linkText: "Explore Full 4th Anniversary Celebration →",
    details: {
      stats: [
        { label: "Years of Excellence", value: "4 Years" },
        { label: "Verified AI Talent", value: "10,000+" },
        { label: "Placement Rate", value: "90%" },
        { label: "Global Reach", value: "30+ Countries" },
      ],
      quote:
        "In four short years, we've built a global ecosystem connecting high-caliber AI engineers with top tech companies. Thank you to our amazing global community!",
    },
  },
  {
    id: "networking-app-announce",
    date: "August 10, 2026",
    badge: "PRODUCT ANNOUNCEMENT",
    badgeColor: "bg-green-hard/20 text-green-hard border-green-hard/30",
    title: "Building the Next-Generation AI-Driven Professional Networking App",
    summary:
      "Trafy AI is officially developing a privacy-first, skill-verified networking platform built specifically for software developers, AI engineers, and tech founders.",
    link: "/press/networking-app",
    linkText: "Read Official Press Release →",
  },
  {
    id: "mentorship-expansion",
    date: "July 15, 2026",
    badge: "COMMUNITY & LEARNING",
    badgeColor: "bg-blue/20 text-blue border-blue/30",
    title: "Mentorship Network Expansion Across 30+ Countries",
    summary:
      "Trafy AI has onboarded 150+ senior AI architects and tech leads to mentor students across our AI Engineering and AI for Marketers cohorts.",
  },
  {
    id: "talent-10k-milestone",
    date: "May 15, 2026",
    badge: "MILESTONE",
    badgeColor: "bg-yellow/20 text-yellow border-yellow/30",
    title: "Trafy Talent Network Surpasses 10,000 Verified AI Professionals",
    summary:
      "Our skill evaluation engine has officially certified over 10,000 engineers, establishing Trafy AI as a premier global talent network.",
  },
  {
    id: "founding-announcement",
    date: "August 11, 2022",
    badge: "COMPANY FOUNDING",
    badgeColor: "bg-white/10 text-white/70 border-white/20",
    title: "Founding of Trafy AI by Dmerz Technology Pvt. Ltd.",
    summary:
      "Dmerz Technology Pvt. Ltd. officially incorporated Trafy AI with the vision of building transparent work tech and borderless career opportunities for tech talent.",
  },
];

export default function Announcements() {
  return (
    <section className="relative mx-auto max-w-4xl px-6 pt-32 pb-24 text-white">
      {/* Decorative Background Glows */}
      <div className="pointer-events-none absolute -top-20 left-1/2 h-80 w-[600px] -translate-x-1/2 rounded-full bg-rose/10 blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 left-0 h-64 w-64 rounded-full bg-green-hard/10 blur-3xl" />

      {/* Breadcrumb */}
      <nav className="mb-8 flex items-center gap-2 text-xs text-white/40">
        <Link to="/" className="transition-colors hover:text-white">Home</Link>
        <span>/</span>
        <span className="text-white/70">Announcements</span>
      </nav>

      {/* Header */}
      <div className="relative">
        <span className="rounded-full bg-rose/15 px-3.5 py-1 text-xs font-bold text-rose">
          COMPANY TIMELINE &amp; NEWS
        </span>
        <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
          Announcements Timeline
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-white/60">
          Chronological timeline of company updates, product reveals, and major milestones. New announcements automatically appear at the top.
        </p>
      </div>

      {/* Vertical Timeline Container */}
      <div className="relative mt-16 pl-6 sm:pl-8 border-l-2 border-white/15 space-y-12">
        {announcements.map((item) => (
          <div key={item.id} className="relative group">
            {/* Timeline Connector Node Circle */}
            <div
              className={`absolute -left-[31px] sm:-left-[39px] top-1.5 flex h-6 w-6 items-center justify-center rounded-full border-2 bg-ink transition-transform duration-300 group-hover:scale-125 ${
                item.isLatest
                  ? "border-rose bg-rose/20 shadow-lg shadow-rose/40"
                  : "border-green-hard bg-green-hard/20"
              }`}
            >
              <div
                className={`h-2 w-2 rounded-full ${
                  item.isLatest ? "bg-rose animate-ping" : "bg-green-hard"
                }`}
              />
            </div>

            {/* Announcement Timeline Card */}
            <div
              className={`rounded-2xl border p-6 sm:p-8 transition-all duration-300 ${
                item.isLatest
                  ? "border-rose/40 bg-gradient-to-br from-rose/10 via-white/[0.04] to-white/[0.01] shadow-xl shadow-rose/5"
                  : "border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/[0.07]"
              }`}
            >
              {/* Header metadata row */}
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="text-xs font-bold text-white/50">{item.date}</span>
                <span
                  className={`inline-flex items-center rounded-full border px-3 py-0.5 text-[11px] font-bold tracking-wide ${item.badgeColor}`}
                >
                  {item.badge}
                </span>
              </div>

              {/* Title & Summary */}
              <h2 className="mt-3 font-display text-xl sm:text-2xl font-bold text-white group-hover:text-green-hard transition-colors">
                {item.title}
              </h2>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-white/70">
                {item.summary}
              </p>

              {/* Optional detail stats / quote */}
              {item.details && (
                <div className="mt-6 border-t border-white/10 pt-6">
                  {item.details.quote && (
                    <p className="italic text-sm text-white/80 border-l-2 border-rose pl-3 mb-4">
                      &ldquo;{item.details.quote}&rdquo;
                    </p>
                  )}
                  {item.details.stats && (
                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                      {item.details.stats.map((s) => (
                        <div key={s.label} className="rounded-xl border border-white/10 bg-white/5 p-3 text-center">
                          <div className="font-display text-lg font-bold text-white">{s.value}</div>
                          <div className="text-[10px] text-white/40">{s.label}</div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Link CTA */}
              {item.link && (
                <div className="mt-6 pt-4 border-t border-white/10">
                  <Link
                    to={item.link}
                    className={`inline-flex items-center gap-2 text-sm font-semibold transition-colors ${
                      item.isLatest
                        ? "text-rose hover:underline"
                        : "text-green-hard hover:underline"
                    }`}
                  >
                    {item.linkText || "View Details →"}
                  </Link>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Back CTA */}
      <div className="mt-16 border-t border-white/10 pt-8 flex items-center justify-between">
        <Link to="/" className="text-sm text-white/60 hover:text-white transition-colors">
          ← Back to Home
        </Link>
        <Link to="/press" className="text-sm font-semibold text-green-hard hover:underline">
          View Press Releases →
        </Link>
      </div>
    </section>
  );
}
