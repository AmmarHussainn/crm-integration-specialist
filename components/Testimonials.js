// components/Testimonials.js
"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Gio",
    quote:
      "Ammar is great at what he does, very responsive and great communication.",
    rating: 5,
  },
  {
    name: "Imran",
    quote: "Ammar was absolutely awesome to work with from start to finish.",
    rating: 5,
  },
  {
    name: "Imran",
    quote:
      "This is our 2nd time using Ammar for our web solutions. He delivers beyond what is expected, a true expert in his field! Will continue to use this gem for all our full stack web solution work. Highly recommended.",
    rating: 5,
  },
  {
    name: "Dax",
    quote:
      "Amazing full stack developer! Highly recommended! Will hire again. High quality work with attention to detail! Fast turn around and delivery and excellent communication!",
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
            className="flex flex-col justify-between rounded-2xl border border-border bg-surface/60 p-6"
          >
            <div>
              <Stars count={t.rating} />
              <blockquote className="mt-4 text-sm leading-relaxed text-text/90">
                "{t.quote}"
              </blockquote>
            </div>
            <figcaption className="mt-5 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-cyan/30 bg-cyan/10 font-display text-xs font-semibold text-cyan">
                {t.name.charAt(0)}
              </div>
              <span className="text-sm font-medium text-text">{t.name}</span>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}