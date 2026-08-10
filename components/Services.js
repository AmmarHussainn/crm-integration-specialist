"use client";

import { motion } from "framer-motion";
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
            className="group rounded-2xl border border-border bg-surface/60 p-6 transition-colors hover:border-cyan/30"
          >
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
          </motion.div>
        ))}
      </div>
    </section>
  );
}
