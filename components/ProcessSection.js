"use client";

import { motion } from "framer-motion";
import { Search, GitBranch, Code, TestTube, CheckCircle, ArrowRight } from "lucide-react";
import { CALENDLY_URL } from "@/lib/data";

const STEPS = [
  {
    step: "01",
    title: "Stack Audit & Field Mapping",
    description:
      "We review your current GoHighLevel pipelines, Clio/Lawmatics custom fields, and third-party tools to identify exactly where leads drop and map every data point 1-to-1.",
    icon: Search,
    accent: "cyan",
  },
  {
    step: "02",
    title: "Architecture & Token Security",
    description:
      "We design the middleware blueprint, configuring OAuth 2.0 automatic token refresh cycles, HMAC payload signing, and sandbox test environments.",
    icon: GitBranch,
    accent: "brass",
  },
  {
    step: "03",
    title: "Middleware Build & Deduplication Logic",
    description:
      "We engineer custom n8n / Node.js microservices with SHA-256 idempotency protection, rate-limit backoff, and bidirectional event listeners.",
    icon: Code,
    accent: "cyan",
  },
  {
    step: "04",
    title: "End-to-End Stress & Edge Case Testing",
    description:
      "We simulate 1,000+ test payloads: duplicate contacts, missing phone numbers, network timeouts, and simultaneous intake submissions to ensure 0% failure.",
    icon: TestTube,
    accent: "brass",
  },
  {
    step: "05",
    title: "Production Deployment & 30-Day Support",
    description:
      "We cut over to live production, connect real-time Slack dead-letter alerts, provide video documentation, and remain on standby with 30 days of included monitoring.",
    icon: CheckCircle,
    accent: "cyan",
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="relative border-t border-border px-4 py-28">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <span className="eyebrow text-cyan">Predictable Delivery</span>
          <h2 className="mt-3 text-balance font-display text-3xl font-semibold tracking-tight text-text sm:text-4xl">
            How It Works: From Broken Webhooks to Production Sync
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted text-sm sm:text-base">
            A battle-tested 5-phase engineering process designed for zero downtime and seamless team adoption.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {STEPS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className={`relative flex flex-col justify-between rounded-2xl border border-border bg-surface/60 p-6 transition-all hover:border-cyan/30 hover:bg-surface/90 ${
                  idx === 4 ? "sm:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span
                      className={`font-mono text-2xl font-bold ${
                        item.accent === "cyan" ? "text-cyan" : "text-brass"
                      }`}
                    >
                      {item.step}
                    </span>
                    <div
                      className={`flex h-9 w-9 items-center justify-center rounded-xl ${
                        item.accent === "cyan"
                          ? "bg-cyan/10 text-cyan border border-cyan/25"
                          : "bg-brass/10 text-brass border border-brass/25"
                      }`}
                    >
                      <Icon size={18} />
                    </div>
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold text-text">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-xs leading-relaxed text-muted sm:text-sm">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-text px-6 py-3.5 text-sm font-semibold text-ink transition-transform hover:scale-[1.03]"
          >
            Schedule a Process & Architecture Review
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
