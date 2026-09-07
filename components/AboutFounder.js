"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Award, Code2, ArrowRight } from "lucide-react";
import { CALENDLY_URL } from "@/lib/data";

export default function AboutFounder() {
  return (
    <section id="about" className="relative border-t border-border px-4 py-28">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-border bg-surface/70 p-8 sm:p-12"
        >
          <div className="flex flex-col gap-8 md:flex-row md:items-center">
            {/* Avatar & Badge */}
            <div className="flex shrink-0 flex-col items-center text-center">
              <div className="relative flex h-28 w-28 items-center justify-center rounded-full border-2 border-cyan/40 bg-cyan/10 font-display text-3xl font-bold text-cyan shadow-xl shadow-cyan/10 sm:h-32 sm:w-32 sm:text-4xl">
                AH
                <span className="absolute -bottom-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full border border-border bg-surface text-brass">
                  <ShieldCheck size={16} />
                </span>
              </div>
              <span className="mt-4 font-display text-lg font-semibold text-text">Ammar Hussain</span>
              <span className="eyebrow mt-0.5 text-cyan">Integration Architect</span>
            </div>

            {/* Content */}
            <div className="space-y-4">
              <span className="eyebrow text-brass">E-E-A-T & Proven Track Record</span>
              <h2 className="font-display text-2xl font-semibold tracking-tight text-text sm:text-3xl">
                Engineering reliable connectivity for high-stakes pipelines
              </h2>
              <p className="text-sm leading-relaxed text-muted sm:text-base">
                I build the connective middleware layer between GoHighLevel, Clio, Lawmatics, Filevine, and Retell AI voice agents. By focusing strictly on bi-directional API integrity, payload validation, and custom n8n/Node.js microservices, I ensure zero leads fall through the cracks.
              </p>

              {/* Stats badges */}
              <div className="grid grid-cols-2 gap-3 pt-2 sm:grid-cols-3">
                <div className="rounded-xl border border-border bg-ink/50 p-3 text-center">
                  <div className="font-mono text-lg font-bold text-cyan">&lt;380ms</div>
                  <div className="text-[11px] text-muted">Sync Latency</div>
                </div>
                <div className="rounded-xl border border-border bg-ink/50 p-3 text-center">
                  <div className="font-mono text-lg font-bold text-brass">100%</div>
                  <div className="text-[11px] text-muted">Mapping Accuracy</div>
                </div>
                <div className="col-span-2 rounded-xl border border-border bg-ink/50 p-3 text-center sm:col-span-1">
                  <div className="font-mono text-lg font-bold text-text">5.0 ★</div>
                  <div className="text-[11px] text-muted">Client Rating</div>
                </div>
              </div>

              <div className="pt-3">
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-cyan hover:underline"
                >
                  Book a direct technical strategy call with Ammar
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
