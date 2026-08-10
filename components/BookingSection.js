"use client";

import { motion } from "framer-motion";
import { CALENDLY_URL } from "@/lib/data";

export default function BookingSection() {
  return (
    <section id="booking" className="relative px-4 py-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[320px] w-[1100px] -translate-x-1/2 -translate-y-1/2 bg-bowtie blur-2xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-3xl text-center"
      >
        <span className="eyebrow text-brass">Strategy Call</span>
        <h2 className="mt-3 text-balance font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          Bring your broken webhook. Leave with a plan.
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-muted">
          A focused 30-minute call to map your current stack, flag where
          leads are falling through, and scope the integration that fixes it.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mx-auto mt-10 max-w-3xl overflow-hidden rounded-2xl border border-border bg-surface/70"
      >
        <div className="flex items-center justify-between border-b border-border px-5 py-3">
          <span className="eyebrow text-muted">Book a Strategy Call</span>
          <span className="text-xs text-muted">30 min · Google Meet</span>
        </div>
        <div className="h-[640px] w-full">
          <iframe
            title="Book a strategy call with Ammar Hussain"
            src={`${CALENDLY_URL}?embed_domain=crmintegrationspecialists.com&embed_type=Inline&hide_gdpr_banner=1`}
            className="h-full w-full"
            frameBorder="0"
          />
        </div>
      </motion.div>

      <div className="mt-6 text-center">
        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-xl bg-text px-6 py-3.5 text-sm font-semibold text-ink transition-transform hover:scale-[1.03] active:scale-[0.98]"
        >
          Open Booking Page in a New Tab
        </a>
      </div>
    </section>
  );
}
