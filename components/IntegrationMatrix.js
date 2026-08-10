"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { INTEGRATIONS } from "@/lib/data";

// Split the 8 integrations across two rings so the motion reads as
// layered orbits rather than a single busy circle.
const INNER = INTEGRATIONS.slice(0, 4);
const OUTER = INTEGRATIONS.slice(4);

function OrbitRing({ items, radius, duration, direction, size, paused, onHover }) {
  const rotateFrom = direction === "reverse" ? 360 : 0;
  const rotateTo = direction === "reverse" ? 0 : 360;

  return (
    <motion.div
      className="absolute left-1/2 top-1/2"
      style={{ width: 0, height: 0 }}
      animate={{ rotate: paused ? undefined : [rotateFrom, rotateTo] }}
      transition={{ duration, repeat: Infinity, ease: "linear" }}
    >
      {items.map((item, i) => {
        const angle = (i / items.length) * 2 * Math.PI;
        const x = radius * Math.cos(angle);
        const y = radius * Math.sin(angle);
        const accent = item.accent === "cyan" ? "cyan" : "brass";

        return (
          <motion.div
            key={item.name}
            className="absolute"
            style={{ left: x, top: y, translateX: "-50%", translateY: "-50%" }}
            // counter-rotate so the chip itself always stays upright
            animate={{ rotate: paused ? undefined : [-rotateFrom, -rotateTo] }}
            transition={{ duration, repeat: Infinity, ease: "linear" }}
          >
            <button
              type="button"
              onMouseEnter={() => onHover(item.name)}
              onMouseLeave={() => onHover(null)}
              onFocus={() => onHover(item.name)}
              onBlur={() => onHover(null)}
              className={`group flex items-center justify-center rounded-2xl border bg-surface/90 font-semibold backdrop-blur-md transition-all duration-300 focus:outline-none ${size} ${
                accent === "cyan"
                  ? "border-cyan/25 hover:border-cyan hover:shadow-[0_0_28px_-6px_rgba(76,201,240,0.7)]"
                  : "border-brass/25 hover:border-brass hover:shadow-[0_0_28px_-6px_rgba(212,175,106,0.7)]"
              } hover:scale-110`}
            >
              <span
                className={`text-[11px] leading-tight sm:text-xs ${
                  accent === "cyan" ? "text-cyan" : "text-brass"
                }`}
              >
                {item.name}
              </span>
            </button>
          </motion.div>
        );
      })}
    </motion.div>
  );
}

export default function IntegrationMatrix() {
  const [hovered, setHovered] = useState(null);
  const active = INTEGRATIONS.find((i) => i.name === hovered);

  return (
    <section id="ecosystem" className="relative px-4 py-28">
      <div className="mx-auto max-w-4xl text-center">
        <span className="eyebrow text-brass">Integration Ecosystem</span>
        <h2 className="mt-3 text-balance font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          Your entire stack, orbiting one hub
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-muted">
          Every platform below stays in sync through the same integration
          layer — hover any one to see what it connects.
        </p>
      </div>

      <div
        className="relative mx-auto mt-16 flex aspect-square w-full max-w-[560px] items-center justify-center"
        onMouseLeave={() => setHovered(null)}
      >
        {/* faint guide rings */}
        <div className="absolute h-[62%] w-[62%] rounded-full border border-border/60" />
        <div className="absolute h-[96%] w-[96%] rounded-full border border-border/40" />

        {/* ambient glow */}
        <div className="pointer-events-none absolute h-[70%] w-[70%] rounded-full bg-cyan/10 blur-3xl" />

        <OrbitRing
          items={INNER}
          radius={100}
          duration={26}
          direction="forward"
          size="h-16 w-16 sm:h-[4.6rem] sm:w-[4.6rem]"
          paused={!!hovered}
          onHover={setHovered}
        />
        <OrbitRing
          items={OUTER}
          radius={168}
          duration={38}
          direction="reverse"
          size="h-16 w-16 sm:h-[4.6rem] sm:w-[4.6rem]"
          paused={!!hovered}
          onHover={setHovered}
        />

        {/* Center node */}
        <div className="relative z-10 flex h-28 w-28 flex-col items-center justify-center rounded-full border border-cyan/40 bg-surface text-center shadow-lg shadow-cyan/10 sm:h-32 sm:w-32">
          {/* <span className="font-display text-sm font-semibold sm:text-base">Ammar</span> */}
          <span className="eyebrow mt-0.5 text-[9px] text-cyan">Integration Hub</span>
        </div>
      </div>

      {/* Status line — shows what's active, falls back to a live summary */}
      <div className="mx-auto mt-10 flex h-6 max-w-md items-center justify-center text-center">
        {active ? (
          <motion.p
            key={active.name}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            className="eyebrow text-text"
          >
            <span className={active.accent === "cyan" ? "text-cyan" : "text-brass"}>
              {active.name}
            </span>{" "}
            — {active.tag}
          </motion.p>
        ) : (
          <p className="eyebrow text-muted">8 platforms · synced in real time</p>
        )}
      </div>
    </section>
  );
}