import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, X } from "lucide-react";

type AnnouncementBarProps = {
  message: string;
  linkLabel: string;
  href: string;
};

export default function AnnouncementBar({ message, linkLabel, href }: AnnouncementBarProps) {
  const [visible, setVisible] = useState(true);
  const isExternal = href.startsWith("http");

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="relative z-50 overflow-hidden bg-ink text-white"
        >
          <div className="mx-auto flex max-w-7xl items-center justify-center gap-2 sm:gap-3 px-10 sm:px-4 py-2 sm:py-2.5 text-center text-xs sm:text-sm">
            <span className="text-rose">✦</span>
            <span className="font-medium">{message}</span>
            {isExternal ? (
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 font-semibold text-rose hover:underline whitespace-nowrap"
              >
                {linkLabel}
                <ArrowRight size={14} />
              </a>
            ) : (
              <Link
                to={href}
                className="inline-flex items-center gap-1 font-semibold text-rose hover:underline whitespace-nowrap"
              >
                {linkLabel}
                <ArrowRight size={14} />
              </Link>
            )}
            <button
              onClick={() => setVisible(false)}
              aria-label="Dismiss announcement"
              className="absolute right-3 sm:right-4 text-white/60 hover:text-white"
            >
              <X size={16} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
