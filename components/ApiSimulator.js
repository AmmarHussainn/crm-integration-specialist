"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Copy, ArrowLeftRight } from "lucide-react";

const GHL_PAYLOAD = `{
  "event": "ContactUpdate",
  "source": "GoHighLevel",
  "contact": {
    "id": "ghl_8823ax",
    "name": "Dana Whitfield",
    "email": "dana.whitfield@example.com",
    "pipeline_stage": "Consultation Booked",
    "tags": ["pi-lead", "hot"]
  }
}`;

const CLIO_PAYLOAD = `{
  "event": "MatterSync",
  "target": "Clio",
  "matter": {
    "id": "clio_mt_5510",
    "client_name": "Dana Whitfield",
    "practice_area": "Personal Injury",
    "status": "Open — Intake",
    "linked_contact": "ghl_8823ax"
  }
}`;

function CodeBlock({ label, code, accent }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  const accentClass = accent === "cyan" ? "text-cyan border-cyan/30" : "text-brass border-brass/30";

  return (
    <div className="flex-1 rounded-2xl border border-border bg-surface/80 p-4">
      <div className="mb-3 flex items-center justify-between">
        <span className={`eyebrow rounded-full border px-2.5 py-1 ${accentClass}`}>
          {label}
        </span>
        <button
          onClick={handleCopy}
          aria-label={`Copy ${label} payload`}
          className="flex items-center gap-1.5 rounded-lg border border-border px-2.5 py-1.5 text-xs text-muted transition-colors hover:text-text"
        >
          {copied ? <Check size={13} className="text-live" /> : <Copy size={13} />}
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre className="scrollbar-none overflow-x-auto font-mono text-[12.5px] leading-relaxed text-text/90">
        {code}
      </pre>
    </div>
  );
}

export default function ApiSimulator() {
  return (
    <section id="simulator" className="relative px-4 py-24">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <span className="eyebrow text-cyan">Live Interactive Demo</span>
          <h2 className="mt-3 text-balance font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Watch a webhook cross the bridge
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted">
            A real payload shape, sent from GoHighLevel and translated into a
            Clio matter, field for field, in both directions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col items-stretch gap-4 md:flex-row md:items-center"
        >
          <CodeBlock label="GoHighLevel → outbound" code={GHL_PAYLOAD} accent="brass" />

          <div className="flex shrink-0 items-center justify-center py-2 md:py-0">
            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-cyan/30 bg-cyan/10 text-cyan">
              <ArrowLeftRight size={18} />
            </div>
          </div>

          <CodeBlock label="Clio ← inbound" code={CLIO_PAYLOAD} accent="cyan" />
        </motion.div>

        <div className="mt-5 flex items-center justify-center gap-2 text-xs text-live">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-live opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-live" />
          </span>
          Sync Live — average round-trip under 400ms
        </div>
      </div>
    </section>
  );
}
