"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FileText, Download, CheckCircle2, Shield, ArrowRight } from "lucide-react";

export default function LeadMagnet() {
  const [email, setEmail] = useState("");
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = (e) => {
    e.preventDefault();
    if (email) {
      setDownloaded(true);
    }
  };

  return (
    <section className="relative px-4 py-20">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-cyan/40 bg-gradient-to-br from-surface/90 via-surface/70 to-cyan/5 p-8 shadow-2xl shadow-cyan/5 sm:p-12"
        >
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl">
              <span className="eyebrow text-cyan">Free Technical Resource</span>
              <h3 className="mt-3 font-display text-2xl font-bold tracking-tight text-text sm:text-3xl">
                The Legal Webhook Failure Checklist
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                12 silent failure points between GoHighLevel, Clio, and Lawmatics — and the exact middleware code patterns to prevent lost client leads.
              </p>

              <ul className="mt-5 space-y-2 text-xs text-text sm:text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="shrink-0 text-cyan" />
                  <span>How to handle Clio REST API v4 rate limits during Facebook lead surges</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="shrink-0 text-cyan" />
                  <span>Preventing duplicate matters with SHA-256 idempotency headers</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="shrink-0 text-cyan" />
                  <span>n8n exponential backoff dead-letter queue blueprint</span>
                </li>
              </ul>
            </div>

            <div className="shrink-0 rounded-2xl border border-border bg-ink/70 p-6 sm:w-80">
              {downloaded ? (
                <div className="text-center py-4">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-cyan/15 text-cyan">
                    <CheckCircle2 size={24} />
                  </div>
                  <h4 className="mt-3 font-display text-base font-semibold text-text">
                    Checklist Dispatched!
                  </h4>
                  <p className="mt-1 text-xs text-muted">
                    Check your inbox at <strong>{email}</strong> for the PDF & code templates.
                  </p>
                  <button
                    type="button"
                    onClick={() => setDownloaded(false)}
                    className="mt-4 text-xs text-cyan underline"
                  >
                    Enter another email
                  </button>
                </div>
              ) : (
                <form onSubmit={handleDownload} className="space-y-3">
                  <div className="flex items-center gap-2 text-xs font-semibold text-text">
                    <FileText size={16} className="text-brass" />
                    Instant PDF & Starter Blueprint
                  </div>
                  <input
                    type="email"
                    required
                    placeholder="Enter work email..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-xl border border-border bg-surface px-3.5 py-2.5 text-xs text-text placeholder-muted focus:border-cyan/60 focus:outline-none sm:text-sm"
                  />
                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-text py-2.5 text-xs font-semibold text-ink transition-transform hover:scale-[1.02] sm:text-sm"
                  >
                    <Download size={14} />
                    Download Free Checklist
                  </button>
                  <p className="text-center text-[10px] text-muted">
                    No spam. Unsubscribe anytime.
                  </p>
                </form>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
