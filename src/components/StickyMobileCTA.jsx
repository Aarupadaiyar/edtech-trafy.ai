export default function StickyMobileCTA() {
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 p-3 bg-gradient-to-t from-[var(--ink)] via-[var(--ink)]/95 to-transparent pointer-events-none">
      <a
        href="#get-pricing"
        className="pointer-events-auto flex items-center justify-center gap-2 w-full bg-[var(--amber)] text-[#0a0b0e] font-display font-semibold px-6 py-4 rounded-full shadow-[0_10px_30px_-6px_rgba(198,255,51,0.5)]"
      >
        Get Pricing & Seats →
      </a>
    </div>
  );
}
