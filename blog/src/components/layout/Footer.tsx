import Image from "next/image";
import Link from "next/link";
import { Newsletter } from "@/components/blog/Newsletter";

// Mirrors the main site's Footer exactly (same columns, same links, same
// legal/social row) so the footer is unified across trafy.ai, the cohort
// pages, and this blog.
//
// Root-relative paths on purpose, not absolute https://trafy.ai URLs: this
// blog is only ever reached in production via the /blog rewrite on the main
// site's own domain, so a relative link resolves to that same domain with
// no external host baked into the code.
const footerColumns = [
  {
    title: "For Talent",
    links: [
      { label: "Get Started", href: "https://app.trafy.ai" },
      { label: "AI Assessment", href: "/#how" },
      { label: "Employability Index", href: "/#employability" },
      { label: "AI Engineering Cohort", href: "/cohort/" },
      { label: "AI for Marketers Cohort", href: "/cohort/marketers/" },
    ],
  },
  {
    title: "For Companies",
    links: [
      { label: "Hire Talent", href: "/#companies" },
      { label: "Private Workspace", href: "/#companies" },
      { label: "AI Assistant", href: "/#companies" },
      { label: "Enterprise", href: "mailto:enterprise@trafy.ai" },
    ],
  },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Cookie Policy", href: "/cookies" },
  { label: "Accessibility", href: "/accessibility" },
  { label: "Sitemap", href: "/sitemap" },
];

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Blog", href: "/intelligence" },
  { label: "Press", href: "/press" },
  { label: "Announcements", href: "/announcements/4th-anniversary" },
  { label: "Contact", href: "mailto:hello@trafy.ai" },
];

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
  </svg>
);
const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.15 1.45-2.15 2.95v5.66H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45z" />
  </svg>
);
const XIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);
const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);
const ArrowUpIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 19V5M5 12l7-7 7 7" />
  </svg>
);

const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/trafy.ai", icon: InstagramIcon },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/trafy-ai/", icon: LinkedInIcon },
  { label: "X (Twitter)", href: "https://x.com/trafyai", icon: XIcon },
  { label: "Facebook", href: "https://www.facebook.com/trafyedu?mibextid=wwXIfr", icon: FacebookIcon },
];

export function Footer() {
  return (
    <footer id="footer" className="relative overflow-hidden border-t border-white/10 bg-ink text-white">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[600px] -translate-x-1/2 rounded-full bg-lime/8 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-10">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand block */}
          <div className="lg:col-span-4">
            <a href="/" className="group inline-flex items-center gap-2.5 transition-opacity hover:opacity-80">
              <Image src="/trafy-logo-light.svg" alt="Trafy" width={90} height={55} className="h-9 w-auto" />
            </a>

            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/50">
              Work Tech connecting global AI talent with the world&apos;s top AI companies.
            </p>

            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/50 transition-all duration-200 hover:border-lime/60 hover:text-lime hover:shadow-md hover:shadow-lime/10"
                  aria-label={`Trafy on ${label}`}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-5">
            {footerColumns.map((col) => (
              <div key={col.title}>
                <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-white/30">
                  {col.title}
                </h4>
                <ul className="flex flex-col gap-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        {...(link.href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
                        className="text-sm text-white/55 transition-colors duration-200 hover:text-lime"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-3">
            <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-white/30">
              Stay Updated
            </h4>
            <p className="mb-4 text-sm text-white/50">
              Get the latest on AI talent, product launches, and industry insights.
            </p>
            <Newsletter variant="on-lime" source="footer" />
          </div>
        </div>

        {/* Company quick links */}
        <div className="mt-14 flex flex-col gap-4 border-t border-white/8 pt-8 sm:flex-row sm:items-center sm:gap-x-6">
          <span className="text-xs font-semibold uppercase tracking-widest text-white/25">Company</span>
          <div className="flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-6 sm:gap-y-2">
            {companyLinks.map(({ label, href }) =>
              href === "/intelligence" ? (
                <Link
                  key={label}
                  href={href}
                  className="text-sm text-white/45 transition-colors duration-200 hover:text-lime"
                >
                  {label}
                </Link>
              ) : (
                <a
                  key={label}
                  href={href}
                  className="text-sm text-white/45 transition-colors duration-200 hover:text-lime"
                >
                  {label}
                </a>
              )
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col items-start justify-between gap-6 border-t border-white/8 pt-8 sm:flex-row sm:items-center">
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-4 sm:gap-y-2">
            <p className="text-xs text-white/35">
              &copy; {new Date().getFullYear()} Dmerz Technology Pvt. Ltd. All rights reserved.
            </p>
            <span className="hidden h-3 w-px bg-white/15 sm:inline-block" aria-hidden="true" />
            <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
              {legalLinks.map(({ label, href }, i) => (
                <span key={label} className="inline-flex items-center gap-4">
                  <a href={href} className="text-xs text-white/35 transition-colors duration-200 hover:text-white/70">
                    {label}
                  </a>
                  {i < legalLinks.length - 1 && (
                    <span className="hidden h-0.5 w-0.5 rounded-full bg-white/20 sm:inline-block" aria-hidden="true" />
                  )}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="#top"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-white/40 transition-all duration-200 hover:border-lime/50 hover:text-lime hover:-translate-y-0.5"
              aria-label="Back to top"
            >
              <ArrowUpIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
