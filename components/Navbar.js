"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { NAV_LINKS, CALENDLY_URL } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-4 left-1/2 z-50 w-[94%] max-w-6xl -translate-x-1/2"
    >
      <div
        className={`flex items-center justify-between rounded-2xl border px-4 py-3 backdrop-blur-xl transition-colors duration-300 sm:px-6 ${
          scrolled
            ? "border-border bg-surface/80"
            : "border-white/5 bg-surface/50"
        }`}
      >
        <a href="#top" className="flex items-center gap-2 font-display text-sm font-semibold tracking-tight text-text">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-cyan/40 bg-cyan/10 font-mono text-xs text-cyan">
            {"{ }"}
          </span>
          <span className="hidden sm:inline">CRM Integration Specialists</span>
          <span className="sm:hidden">CRM.IS</span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition-colors hover:text-text"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl bg-text px-4 py-2 text-sm font-semibold text-ink transition-transform hover:scale-[1.03] active:scale-[0.98]"
        >
          Book Strategy Call
        </a>
      </div>
    </motion.header>
  );
}
