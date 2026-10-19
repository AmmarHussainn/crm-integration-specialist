"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Activity, BarChart3, Clock, CheckCircle2, AlertTriangle, ArrowRight } from "lucide-react";
import { CALENDLY_URL } from "@/lib/data";

export default function TrustBenchmark() {
  return (
    <section id="methodology" className="relative border-t border-border px-4 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <span className="eyebrow text-brass">Performance Validation</span>
          <h2 className="mt-3 text-balance font-display text-3xl font-semibold tracking-tight text-text sm:text-4xl">
            How We Back Up Our Numbers: Methodology & Case Study
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted text-sm sm:text-base">
            Claims like &ldquo;&lt;380ms latency&rdquo; and &ldquo;0% silent failures&rdquo; aren&rsquo;t marketing fluff.
            Here is the engineering methodology and real-world benchmark data behind every build.
          </p>
        </div>

        {/* Case Study: Before vs After Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mt-14 overflow-hidden rounded-3xl border border-border bg-surface/70 p-6 sm:p-10"
        >
          <div className="flex flex-col justify-between gap-4 border-b border-border/70 pb-6 sm:flex-row sm:items-center">
            <div>
              <span className="eyebrow text-cyan">Real-World Case Study</span>
              <h3 className="mt-1 font-display text-xl font-semibold text-text">
                Mid-Sized Personal Injury Firm (GHL Intake → Clio Manage Matters)
              </h3>
            </div>
            <span className="rounded-full border border-brass/40 bg-brass/10 px-3 py-1 font-mono text-xs text-brass">
              Production Verified: 14,200+ Syncs
            </span>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {/* Metric 1 */}
            <div className="rounded-2xl border border-border bg-ink/40 p-5">
              <div className="flex items-center justify-between text-xs text-muted">
                <span>Dropped Webhooks</span>
                <Activity size={16} className="text-cyan" />
              </div>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="font-mono text-2xl font-bold text-red-400 line-through decoration-1 opacity-70">
                  12.4%
                </span>
                <span className="text-muted text-xs">→</span>
                <span className="font-mono text-3xl font-bold text-cyan">0.0%</span>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-muted">
                Eliminated silent webhook dropouts using an asynchronous dead-letter queue with exponential backoff retries.
              </p>
            </div>

            {/* Metric 2 */}
            <div className="rounded-2xl border border-border bg-ink/40 p-5">
              <div className="flex items-center justify-between text-xs text-muted">
                <span>Intake-to-Matter Latency</span>
                <Clock size={16} className="text-brass" />
              </div>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="font-mono text-2xl font-bold text-red-400 line-through decoration-1 opacity-70">
                  4.2 hrs
                </span>
                <span className="text-muted text-xs">→</span>
                <span className="font-mono text-3xl font-bold text-brass">320 ms</span>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-muted">
                Replaced manual staff re-entry with immediate event-driven webhooks triggering Clio REST API v4 matter creation.
              </p>
            </div>

            {/* Metric 3 */}
            <div className="rounded-2xl border border-border bg-ink/40 p-5">
              <div className="flex items-center justify-between text-xs text-muted">
                <span>Duplicate Contact Rate</span>
                <BarChart3 size={16} className="text-live" />
              </div>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="font-mono text-2xl font-bold text-red-400 line-through decoration-1 opacity-70">
                  18.1%
                </span>
                <span className="text-muted text-xs">→</span>
                <span className="font-mono text-3xl font-bold text-live">0.0%</span>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-muted">
                SHA-256 payload idempotency keys and pre-write query validation prevent race conditions and duplicate leads.
              </p>
            </div>
          </div>

          {/* Methodology Details */}
          <div className="mt-10 rounded-2xl border border-border/80 bg-surface/90 p-6">
            <h4 className="flex items-center gap-2 font-display text-base font-semibold text-text">
              <ShieldCheck size={18} className="text-cyan" />
              Engineering Test Rig & Measurement Methodology
            </h4>
            <div className="mt-4 grid gap-4 text-xs leading-relaxed text-muted sm:grid-cols-2">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-cyan" />
                <span>
                  <strong>k6 Concurrency Testing:</strong> Every middleware build is stress-tested up to 5,000 concurrent payloads to ensure response times remain below 380ms under peak ad campaign surges.
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-cyan" />
                <span>
                  <strong>Token-Bucket Rate Limiting:</strong> Automated backoff logic compliant with Clio&rsquo;s strict API limits (50 calls/second) avoids 429 Too Many Requests errors.
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-cyan" />
                <span>
                  <strong>HMAC-SHA256 Signature Verification:</strong> Payloads are validated cryptographically at the middleware edge before touching your CRM database.
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-cyan" />
                <span>
                  <strong>Active Dead-Letter Alerts:</strong> Unhandled payload anomalies trigger instant Slack and email alerts with full raw JSON traces for 100% auditability.
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
