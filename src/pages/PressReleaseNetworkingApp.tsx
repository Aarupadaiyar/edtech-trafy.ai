import { Link } from "react-router-dom";

export default function PressReleaseNetworkingApp() {
  return (
    <article className="mx-auto max-w-4xl px-4 sm:px-6 pt-24 sm:pt-32 pb-16 sm:pb-24 text-white">
      {/* Breadcrumb */}
      <nav className="mb-5 sm:mb-8 flex items-center gap-2 text-xs text-white/40">
        <Link to="/" className="transition-colors hover:text-white">Home</Link>
        <span>/</span>
        <Link to="/press" className="transition-colors hover:text-white">Press</Link>
        <span>/</span>
        <span className="text-white/70">Press Release</span>
      </nav>

      {/* Header details */}
      <div className="flex flex-wrap items-center gap-2 sm:gap-3">
        <span className="rounded-full bg-green-hard/15 px-3 py-1 text-xs font-bold text-green-hard">
          OFFICIAL PRESS RELEASE
        </span>
        <span className="text-xs text-white/40">FOR IMMEDIATE RELEASE</span>
        <span className="text-xs text-white/20">•</span>
        <span className="text-xs text-white/40">August 10, 2026</span>
      </div>

      <h1 className="mt-4 sm:mt-6 font-display text-2xl font-extrabold tracking-tight sm:text-4xl md:text-5xl leading-tight">
        Trafy AI Announces Development of Flagship AI-Driven Professional Networking Platform for Global Tech Talent
      </h1>

      <p className="mt-4 sm:mt-6 text-lg sm:text-xl leading-relaxed text-white/70 font-medium border-l-2 border-green-hard pl-3 sm:pl-4">
        New intelligent networking application merges adaptive skill graph verification, direct peer-to-peer engineering collaboration, and automated enterprise matching.
      </p>

      {/* Corporate Metadata Box */}
      <div className="mt-6 sm:mt-8 grid gap-3 sm:gap-4 rounded-xl sm:rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-6 sm:grid-cols-2">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-white/30">Dateline</span>
          <p className="mt-1 text-sm text-white/80 font-medium">BENGALURU, INDIA &amp; SAN FRANCISCO, CA</p>
        </div>
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-white/30">Media Contact</span>
          <p className="mt-1 text-sm text-white/80 font-medium">
            Trafy Communications Office — <a href="mailto:press@trafy.ai" className="text-green-hard hover:underline">press@trafy.ai</a>
          </p>
        </div>
      </div>

      {/* Main Body */}
      <div className="legal-prose mt-8 sm:mt-12 space-y-4 sm:space-y-6 text-sm sm:text-base text-white/80 leading-relaxed">
        <p>
          <strong>BENGALURU &amp; SAN FRANCISCO — August 10, 2026</strong> — Dmerz Technology Pvt. Ltd. (operating as <strong>Trafy AI</strong>), a global pioneer in AI work tech and talent verification, today officially announced that it is building a next-generation AI-powered professional networking platform tailored specifically for AI engineers, software developers, and technology teams worldwide.
        </p>

        <p>
          As demand for specialized artificial intelligence talent accelerates globally, traditional professional social networks have increasingly struggled with resume inflation, unverified skill claims, and inefficient outreach. Trafy AI’s forthcoming networking application directly solves these systemic issues by combining real-world skill proofing with automated semantic matchmaking.
        </p>

        <h2>Redefining Technical Networking with Verified Intelligence</h2>

        <p>
          Unlike conventional platforms relying on self-reported profiles, the new Trafy AI networking app integrates directly into engineers’ workflows and assessment outcomes. Key technological capabilities built into the platform include:
        </p>

        <ul>
          <li>
            <strong>Dynamic Skill Graph Engine:</strong> Evaluates verified project outputs, benchmark assessments, and real-world coding capability to generate dynamic, tamper-evident talent portfolios.
          </li>
          <li>
            <strong>Context-Aware Peer Matchmaking:</strong> Enables engineers to discover peers, co-founders, and mentors based on mutual technical stack affinities and real project challenges rather than superficial keywords.
          </li>
          <li>
            <strong>Direct Enterprise Connect:</strong> Gives hiring leaders and engineering directors direct access to top 1% verified talent with zero recruiter friction and streamlined technical interviews.
          </li>
          <li>
            <strong>Privacy-First Verified Credentials:</strong> Employs encrypted credential verification, ensuring professionals retain full ownership of their data while sharing verified proof of expertise.
          </li>
        </ul>

        <h2>Executive Commentary</h2>

        <div className="my-6 sm:my-8 rounded-xl sm:rounded-2xl border border-white/15 bg-white/[0.03] p-4 sm:p-6 italic text-white/90">
          <p className="mb-2 sm:mb-3 text-base sm:text-lg font-display not-italic">
            &ldquo;Traditional networking tools were designed for the last decade of corporate resume exchanges. In the AI era, proof of execution matters far more than job titles. Our new networking platform gives engineers a real space to build together, demonstrate true capability, and connect directly with world-class opportunities.&rdquo;
          </p>
          <p className="text-sm font-bold not-italic text-green-hard">
            — Leadership Team, Trafy AI
          </p>
        </div>

        <h2>Availability &amp; Early Access Program</h2>

        <p>
          Private beta testing for the Trafy AI networking app will commence in Q4 2026, with public availability scheduled shortly thereafter. Engineers and engineering leaders interested in participating in the early access cohort can register interest via <a href="https://app.trafy.ai" target="_blank" rel="noreferrer">app.trafy.ai</a>.
        </p>

        <h2>About Trafy AI</h2>
        <p>
          Trafy AI (operated by Dmerz Technology Pvt. Ltd.) is an AI work tech infrastructure company connecting global AI engineers with leading technology enterprises. Through practical assessment frameworks, specialized learning cohorts, and intelligent matching software, Trafy AI is building the global standard for verified tech talent.
        </p>

        {/* Legal Disclaimer / Safe Harbor Statement */}
        <div className="mt-8 sm:mt-12 border-t border-white/10 pt-6 sm:pt-8 text-[10px] sm:text-xs leading-relaxed text-white/40">
          <h3 className="text-xs font-bold uppercase tracking-wider text-white/50 mb-2">Legal Notice &amp; Forward-Looking Statements</h3>
          <p>
            This press release contains forward-looking statements regarding future product releases, feature capabilities, and strategic plans. These statements are based on current expectations, forecasts, and assumptions that involve risks and uncertainties. Actual outcomes and timing may differ materially due to market conditions, technical developments, and strategic shifts. Dmerz Technology Pvt. Ltd. disclaims any obligation to update forward-looking statements except as required by applicable law. All product names, logos, and brands referenced herein are property of their respective owners.
          </p>
        </div>
      </div>

      {/* Back & CTA */}
      <div className="mt-8 sm:mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6 sm:pt-8">
        <Link
          to="/press"
          className="inline-flex items-center gap-2 text-sm font-semibold text-white/70 hover:text-white transition-colors"
        >
          ← Back to Press Releases
        </Link>
        <a
          href="https://app.trafy.ai"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-xl bg-green-hard px-5 py-2.5 text-sm font-semibold text-ink transition-all hover:brightness-110 hover:shadow-lg hover:shadow-green-hard/20"
        >
          Request Early Access
        </a>
      </div>
    </article>
  );
}
