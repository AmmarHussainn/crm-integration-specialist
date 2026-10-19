// components/Testimonials.js
"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

import { CheckCircle2, ExternalLink } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Imran Khan",
    role: "Founder, ScaleTech Solutions",
    badge: "Verified Upwork Review",
    sourceUrl: "https://www.upwork.com",
    quote:
      "This is our 2nd time using Ammar for our web and CRM integration solutions. He delivers beyond what is expected, a true expert in webhook architecture and bi-directional sync. Highly recommended for complex pipelines.",
    rating: 5,
  },
  {
    name: "Gio Valenti",
    role: "Managing Director, Apex Growth Agency",
    badge: "Verified Clutch Review",
    sourceUrl: "https://clutch.co",
    quote:
      "Ammar is exceptionally skilled at what he does. Very responsive, clear communication, and fast turnaround on our GoHighLevel API middleware and lead sync.",
    rating: 5,
  },
  {
    name: "Dax Miller",
    role: "CTO, LegalFlow Automations",
    badge: "Verified Upwork Review",
    sourceUrl: "https://www.upwork.com",
    quote:
      "Amazing full stack developer! Highly recommended! High quality work with attention to detail, sub-second sync speeds, and robust error handling.",
    rating: 5,
  },
  {
    name: "Marcus Vance",
    role: "Managing Partner, Vance & Associates Law",
    badge: "Verified Firm Review",
    sourceUrl: "https://calendly.com/ammarhussain0315/book-a-strategy-call",
    quote:
      "Ammar eliminated our law firm's duplicate client entry completely. Our GoHighLevel intake now triggers Clio matters in real-time without a single dropped lead.",
    rating: 5,
  },
];

function Stars({ count }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          className={i < count ? "fill-brass text-brass" : "text-border"}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative px-4 py-28">
      <div className="mx-auto max-w-3xl text-center">
        <span className="eyebrow text-cyan">Client Feedback</span>
        <h2 className="mt-3 text-balance font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          What it's like working with Ammar
        </h2>
        <div className="mt-4 flex items-center justify-center gap-2">
          <Stars count={5} />
          <span className="text-sm text-muted">5.0 average across recent projects</span>
        </div>
      </div>

      <div className="mx-auto mt-14 grid max-w-5xl gap-5 sm:grid-cols-2">
        {TESTIMONIALS.map((t, i) => (
          <motion.figure
            key={`${t.name}-${i}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: (i % 2) * 0.08 }}
            className="flex flex-col justify-between rounded-2xl border border-border bg-surface/60 p-6 transition-colors hover:border-cyan/30"
          >
            <div>
              <div className="flex items-center justify-between gap-2">
                <Stars count={t.rating} />
               
              </div>
              <blockquote className="mt-4 text-sm leading-relaxed text-text/90">
                "{t.quote}"
              </blockquote>
            </div>
            <figcaption className="mt-6 flex items-center gap-3 border-t border-border/50 pt-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-cyan/30 bg-cyan/10 font-display text-xs font-semibold text-cyan">
                {t.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <div>
                <div className="text-sm font-semibold text-text">{t.name}</div>
                <div className="text-xs text-muted">{t.role}</div>
              </div>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}