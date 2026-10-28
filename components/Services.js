"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SERVICES } from "@/lib/data";

export default function Services() {
  return (
    <section id="services" className="relative px-4 py-28">
      <div className="mx-auto max-w-3xl text-center">
        <span className="eyebrow text-cyan">What I Build</span>
        <h2 className="mt-3 text-balance font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          Four ways to stop losing leads to broken systems
        </h2>
      </div>

      <div className="mx-auto mt-14 grid max-w-5xl gap-5 sm:grid-cols-2">
        {SERVICES.map((service, i) => (
          <motion.div
            key={service.tag}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: (i % 2) * 0.08 }}
            className="group flex flex-col justify-between rounded-2xl border border-border bg-surface/60 p-6 transition-all hover:border-cyan/30 hover:bg-surface/90"
          >
            <div>
              <span className="eyebrow inline-block rounded-md border border-border px-2 py-1 text-brass">
                {service.tag}
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold leading-snug text-text">
                {service.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted">
                {service.description}
              </p>
              <ul className="mt-4 space-y-1.5">
                {service.points.map((point) => (
                  <li key={point} className="flex items-center gap-2 text-xs text-muted">
                    <span className="h-1 w-1 rounded-full bg-cyan" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            {service.href && (
              <a
                href={service.href}
                className="mt-6 flex items-center gap-1.5 text-xs font-semibold text-cyan transition-transform group-hover:translate-x-1"
              >
                Learn More & View Specs
                <ArrowRight size={14} />
              </a>
            )}
          </motion.div>
        ))}
      </div>

      {/* Featured Platform Bridges */}
      <div className="mx-auto mt-12 max-w-5xl rounded-2xl border border-border bg-surface/40 p-6 sm:p-8">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div>
            <span className="eyebrow text-brass">Dedicated System Connectors</span>
            <h3 className="mt-1 font-display text-lg font-semibold text-text sm:text-xl">
              Specialized API bridges built for legal & enterprise stacks
            </h3>
            <p className="mt-1 text-xs text-muted sm:text-sm">
              Custom-coded endpoints, bidirectional field mapping, and IOLTA compliance safeguards.
            </p>
          </div>
          <div className="flex flex-wrap gap-2.5">
            <a
              href="/integrations"
              className="inline-flex items-center gap-1.5 rounded-xl border border-cyan/40 bg-cyan/20 px-3.5 py-2 text-xs font-semibold text-cyan transition-colors hover:bg-cyan/30"
            >
              All 30+ Legal CRMs →
            </a>
            <a
              href="/employment-law-automation"
              className="inline-flex items-center gap-1.5 rounded-xl border border-indigo-500/30 bg-indigo-500/10 px-3.5 py-2 text-xs font-semibold text-indigo-400 transition-colors hover:bg-indigo-500/20"
            >
              Lead Docket ➔ Filevine
              <ArrowRight size={12} />
            </a>
            <a
              href="/monday-crm-integration"
              className="inline-flex items-center gap-1.5 rounded-xl border border-cyan/30 bg-cyan/10 px-3.5 py-2 text-xs font-semibold text-cyan transition-colors hover:bg-cyan/20"
            >
              Monday.com CRM
              <ArrowRight size={12} />
            </a>
            <a
              href="/smartadvocate-integration"
              className="inline-flex items-center gap-1.5 rounded-xl border border-brass/30 bg-brass/10 px-3.5 py-2 text-xs font-semibold text-brass transition-colors hover:bg-brass/20"
            >
              SmartAdvocate
              <ArrowRight size={12} />
            </a>
            <a
              href="/lawpay-integration"
              className="inline-flex items-center gap-1.5 rounded-xl border border-cyan/30 bg-cyan/10 px-3.5 py-2 text-xs font-semibold text-cyan transition-colors hover:bg-cyan/20"
            >
              LawPay IOLTA
              <ArrowRight size={12} />
            </a>
            <a
              href="/ghl-clio-integration"
              className="inline-flex items-center gap-1.5 rounded-xl border border-brass/30 bg-brass/10 px-3.5 py-2 text-xs font-semibold text-brass transition-colors hover:bg-brass/20"
            >
              GoHighLevel–Clio
              <ArrowRight size={12} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
