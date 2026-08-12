"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";

// Mirrors the main site's Navbar exactly (same items, same styling) so the
// nav is unified across trafy.ai, the cohort pages, and this blog.
//
// Root-relative paths on purpose, not absolute https://trafy.ai URLs: this
// blog is only ever reached in production via the /blog rewrite on the main
// site's own domain, so a relative link resolves to that same domain with
// no external host baked into the code. Sections like #talent/#how live on
// the main site's homepage, not here, so those still need the leading "/".
const navLinks = [
  { label: "For Talent", href: "/#talent" },
  { label: "Employability Index", href: "/#employability" },
  {
    label: "Cohort",
    href: "/cohort/",
    children: [
      { label: "AI Engineering Cohort", href: "/cohort/" },
      { label: "AI for Marketers Cohort", href: "/cohort/marketers/" },
    ],
  },
  { label: "Blog", href: "/intelligence" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-ink/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/intelligence" className="flex items-center gap-2">
          <Image src="/new-logo.png" alt="Trafy" width={80} height={49} className="h-8 w-auto" priority />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.label} className="group relative">
                <button className="flex items-center gap-1 text-sm font-medium text-white/70 transition-colors hover:text-white">
                  {link.label}
                  <ChevronDown size={14} className="transition-transform duration-200 group-hover:rotate-180" />
                </button>
                <div className="invisible absolute left-0 top-full pt-3 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100">
                  <div className="flex w-60 flex-col gap-1 rounded-2xl border border-white/10 bg-[#14123a] p-2 shadow-lg">
                    {link.children.map((child) => (
                      <a
                        key={child.label}
                        href={child.href}
                        className="rounded-xl px-3 py-2 text-sm font-medium text-white/70 transition-colors hover:bg-white/5 hover:text-white"
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-white/70 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            )
          )}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="https://app.trafy.ai"
            className="inline-flex items-center justify-center rounded-full bg-lime px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-lime-dim"
          >
            Get Started
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-white/10 lg:hidden"
          >
            <div className="flex flex-col gap-4 px-6 py-6">
              {navLinks.map((link) =>
                link.children ? (
                  <div key={link.label} className="flex flex-col gap-3">
                    <span className="text-base font-medium text-white/80">{link.label}</span>
                    <div className="flex flex-col gap-3 border-l border-white/10 pl-4">
                      {link.children.map((child) => (
                        <a
                          key={child.label}
                          href={child.href}
                          onClick={() => setOpen(false)}
                          className="text-sm font-medium text-white/60"
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  </div>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-base font-medium text-white/80"
                  >
                    {link.label}
                  </a>
                )
              )}
              <div className="mt-2 flex flex-col gap-3">
                <a
                  href="https://app.trafy.ai"
                  onClick={() => setOpen(false)}
                  className="inline-flex w-full items-center justify-center rounded-full bg-lime px-6 py-3 text-sm font-semibold text-white"
                >
                  Get Started
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
