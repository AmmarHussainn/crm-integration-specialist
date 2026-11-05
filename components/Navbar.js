
"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS, CALENDLY_URL, LINKEDIN_URL } from "@/lib/data";
import { LinkedInIcon } from "@/components/CertificationsSection";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed left-0 right-0 top-4 z-50 mx-auto w-[calc(100%-2rem)] max-w-7xl"
    >
      <div
        className={`relative rounded-2xl border backdrop-blur-xl transition-all duration-300 ${
          scrolled
            ? "border-border bg-surface/90 shadow-lg shadow-black/10"
            : "border-white/10 bg-surface/70"
        }`}
      >
        {/* Main Navbar */}
        <div className="flex min-h-[68px] items-center justify-between gap-3 px-3 sm:px-5 lg:px-6">

          {/* Logo */}
          <a
            href="/"
            className="flex shrink-0 items-center gap-2.5 font-display text-sm font-semibold tracking-tight text-text"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-cyan/40 bg-cyan/10 font-mono text-xs text-cyan">
              {"{ }"}
            </span>

            <span className="hidden sm:block whitespace-nowrap">
              CRM Integration Specialists
            </span>

            <span className="sm:hidden whitespace-nowrap">
              CRM.IS
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex flex-1 items-center justify-center gap-5 2xl:gap-7">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="whitespace-nowrap text-sm text-muted transition-colors hover:text-text"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden shrink-0 items-center gap-3 xl:flex">
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ammar Hussain LinkedIn Profile"
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-border/70 bg-surface/60 text-muted transition-colors hover:border-[#0A66C2] hover:text-[#0A66C2]"
            >
              <LinkedInIcon className="h-4 w-4 fill-current" />
            </a>

            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="whitespace-nowrap rounded-xl bg-text px-4 py-2.5 text-sm font-semibold text-ink transition-transform hover:scale-[1.03] active:scale-[0.98]"
            >
              Book Strategy Call
            </a>
          </div>

          {/* Mobile / Tablet Actions */}
          <div className="flex shrink-0 items-center gap-2 xl:hidden">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="whitespace-nowrap rounded-lg bg-text px-3 py-2 text-xs font-semibold text-ink transition-transform hover:scale-[1.02] sm:px-4 sm:text-sm"
            >
              Book a Call
            </a>

            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={menuOpen}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border/70 bg-surface/60 text-text transition-colors hover:border-cyan/50"
            >
              {menuOpen ? (
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <path d="M4 7h16M4 12h16M4 17h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile / Tablet Dropdown */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="overflow-hidden border-t border-border/60 xl:hidden"
            >
              <nav className="flex flex-col gap-1 p-3 sm:p-4">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="rounded-lg px-4 py-3 text-sm text-muted transition-colors hover:bg-white/5 hover:text-text"
                  >
                    {link.label}
                  </a>
                ))}

                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 flex items-center gap-2 rounded-lg px-4 py-3 text-sm text-muted transition-colors hover:bg-white/5 hover:text-[#0A66C2]"
                >
                  <LinkedInIcon className="h-4 w-4 fill-current" />
                  Connect on LinkedIn
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
