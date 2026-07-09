export default function StickyMobileCTA() {
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 p-3 bg-gradient-to-t from-[var(--paper)] via-[var(--paper)]/95 to-transparent pointer-events-none">
      <a
        href="#get-pricing"
        className="pointer-events-auto flex items-center justify-center gap-2 w-full bg-[var(--lime)] text-[var(--ink)] font-display font-semibold px-6 py-4 rounded-full shadow-[0_10px_30px_-6px_rgba(20,20,15,0.25)]"
      >
        Secure Your Seat →
      </a>
    </div>
  );
}
