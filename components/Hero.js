"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import { CALENDLY_URL, TRUST_BADGES } from "@/lib/data";

const codeLines = [
  { t: "webhook.on(", c: "text" },
  { t: "'ghl.contact.updated'", c: "brass" },
  { t: ", async (payload) => {", c: "text" },
  { t: "  const matter = await clio.sync(payload);", c: "cyan" },
  { t: "  return matter.status;", c: "muted" },
  { t: "});", c: "text" },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[92vh] flex-col items-center justify-center overflow-hidden px-4 pb-20 pt-40 text-center"
    >
      {/* Ambient bowtie glow, echoing the reference screenshot */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[420px] w-[1400px] -translate-x-1/2 -translate-y-1/2 bg-bowtie blur-2xl" />
        <div className="absolute inset-0 grid-fade" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-6 flex flex-wrap items-center justify-center gap-2"
      >
        {TRUST_BADGES.map((badge, i) => (
          <span
            key={badge}
            className="eyebrow rounded-full border border-border bg-surface/70 px-3 py-1.5 text-muted"
          >
            {badge}
            {i < TRUST_BADGES.length - 1 && <span className="ml-2 text-cyan">•</span>}
          </span>
        ))}
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
        className="text-balance font-display text-4xl font-semibold leading-[1.05] tracking-tight text-text sm:text-6xl md:text-7xl"
      >
        Custom API Integrations
        <br />
        <span className="text-muted">& Automation for</span>{" "}
        <span className="bg-gradient-to-r from-cyan to-brass bg-clip-text text-transparent">
          Law Firms
        </span>
        <span className="text-muted"> & GHL Agencies</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.25 }}
        className="mx-auto mt-6 max-w-2xl text-balance text-base text-muted sm:text-lg"
      >
        Stop losing leads to broken webhooks. I engineer secure, bi-directional API bridges maintaining <span className="text-cyan font-medium">sub-380ms sync latency</span> and <span className="text-brass font-medium">100% field-mapping accuracy</span> connecting GoHighLevel with Clio, Lawmatics, Filevine, and Retell AI.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.35 }}
        className="mt-9 flex flex-col items-center gap-3 sm:flex-row"
      >
        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 rounded-xl bg-text px-6 py-3.5 text-sm font-semibold text-ink transition-transform hover:scale-[1.03] active:scale-[0.98]"
        >
          <Calendar size={16} />
          Book a Strategy Call
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
        </a>
        <a
          href="#simulator"
          className="rounded-xl border border-border bg-surface/60 px-6 py-3.5 text-sm font-semibold text-text transition-colors hover:border-cyan/40 hover:text-cyan"
        >
          See a Live Sync Demo
        </a>
      </motion.div>

      {/* Animated code preview visual */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
        className="animate-floaty mt-16 w-full max-w-xl rounded-2xl border border-border bg-surface/80 p-5 text-left shadow-2xl shadow-cyan/5 backdrop-blur"
      >
        <div className="mb-3 flex items-center justify-between">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
          </div>
          <div className="flex items-center gap-1.5 text-xs text-live">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-live opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-live" />
            </span>
            Sync Live
          </div>
        </div>
        <pre className="scrollbar-none overflow-x-auto font-mono text-[13px] leading-relaxed">
          {codeLines.map((line, i) => (
            <div key={i}>
              <span
                className={
                  line.c === "cyan"
                    ? "text-cyan"
                    : line.c === "brass"
                    ? "text-brass"
                    : line.c === "muted"
                    ? "text-muted"
                    : "text-text"
                }
              >
                {line.t}
              </span>
            </div>
          ))}
        </pre>
      </motion.div>
    </section>
  );
}
