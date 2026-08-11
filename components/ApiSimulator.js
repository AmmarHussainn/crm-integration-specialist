"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Loader2, Check, Zap, ShieldCheck, RefreshCw } from "lucide-react";

const METRICS = [
  { icon: Zap, label: "Sync Latency", value: "<380ms" },
  { icon: ShieldCheck, label: "Field Mapping", value: "100% Accurate" },
  { icon: RefreshCw, label: "Bi-Directional", value: "Live" },
];

function GhlCard() {
  return (
    <div className="w-full max-w-[260px] rounded-2xl border border-cyan/25 bg-surface/90 p-4">
      <div className="eyebrow mb-3 text-cyan">GoHighLevel · Contact</div>
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan/10 font-display text-sm font-semibold text-cyan">
          DW
        </div>
        <div>
          <div className="text-sm font-semibold text-text">Dana Whitfield</div>
          <div className="text-xs text-muted">Consultation Booked</div>
        </div>
      </div>
      <div className="mt-3 flex gap-1.5">
        <span className="rounded-md border border-cyan/30 bg-cyan/10 px-2 py-0.5 text-[10px] font-medium text-cyan">
          PI Lead
        </span>
        <span className="rounded-md border border-brass/30 bg-brass/10 px-2 py-0.5 text-[10px] font-medium text-brass">
          Hot
        </span>
      </div>
    </div>
  );
}

function ClioCardSkeleton() {
  return (
    <div className="w-full max-w-[260px] rounded-2xl border border-dashed border-border bg-surface/40 p-4">
      <div className="eyebrow mb-3 text-muted">Clio · Matter</div>
      <div className="h-4 w-2/3 animate-pulse rounded bg-border" />
      <div className="mt-3 h-3 w-1/2 animate-pulse rounded bg-border" />
      <div className="mt-4 h-3 w-3/4 animate-pulse rounded bg-border" />
      <p className="mt-4 text-center text-[11px] text-muted">Awaiting sync…</p>
    </div>
  );
}

function ClioCard() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="w-full max-w-[260px] rounded-2xl border border-brass/25 bg-surface/90 p-4"
    >
      <div className="eyebrow mb-3 text-brass">Clio · Matter</div>
      <div className="text-sm font-semibold text-text">Dana Whitfield</div>
      <div className="mt-2 space-y-1.5 text-xs text-muted">
        <div className="flex justify-between">
          <span>Status</span>
          <span className="font-medium text-live">Open — Intake</span>
        </div>
        <div className="flex justify-between">
          <span>Practice Area</span>
          <span className="font-medium text-text">Personal Injury</span>
        </div>
      </div>
    </motion.div>
  );
}

export default function ApiSimulator() {
  const [status, setStatus] = useState("idle"); // idle | syncing | synced
  const [runId, setRunId] = useState(0);
  const timeoutRef = useRef(null);

  useEffect(() => () => clearTimeout(timeoutRef.current), []);

  const handleTrigger = () => {
    if (status === "syncing") return;
    setStatus("syncing");
    setRunId((n) => n + 1);
    timeoutRef.current = setTimeout(() => setStatus("synced"), 1500);
  };

  const buttonLabel =
    status === "idle" ? "Simulate Live Trigger" : status === "syncing" ? "Syncing…" : "Run Again";

  return (
    <section id="simulator" className="relative px-4 py-24">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="eyebrow text-cyan">Live Interactive Demo</span>
          <h2 className="mt-3 text-balance font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Live System Bridge: GoHighLevel ↔ Clio Sync
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted">
            Watch customer data instantly transform across systems without
            dropping fields.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col items-center gap-6 rounded-2xl border border-border bg-surface/50 p-6 sm:p-10"
        >
          <div className="flex w-full flex-col items-center gap-6 sm:flex-row sm:justify-between">
            <GhlCard />

            {/* Center: track + trigger button */}
            <div className="flex shrink-0 flex-col items-center gap-3 sm:w-40">
              <div className="relative h-px w-24 overflow-hidden rounded-full bg-border sm:w-full">
                {status === "syncing" && (
                  <motion.span
                    key={runId}
                    className="absolute top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-cyan shadow-[0_0_10px_2px_rgba(76,201,240,0.8)]"
                    initial={{ left: "0%" }}
                    animate={{ left: "96%" }}
                    transition={{ duration: 1.4, ease: "easeInOut" }}
                  />
                )}
              </div>

              <button
                type="button"
                onClick={handleTrigger}
                disabled={status === "syncing"}
                className="flex items-center gap-2 rounded-xl bg-text px-4 py-2.5 text-xs font-semibold text-ink transition-transform hover:scale-[1.03] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === "idle" && <Play size={13} />}
                {status === "syncing" && <Loader2 size={13} className="animate-spin" />}
                {status === "synced" && <Check size={13} className="text-live" />}
                {buttonLabel}
              </button>
            </div>

            <AnimatePresence mode="wait">
              {status === "synced" ? (
                <ClioCard key="clio-filled" />
              ) : (
                <ClioCardSkeleton key="clio-skeleton" />
              )}
            </AnimatePresence>
          </div>

          {/* Live metrics grid */}
          <div className="grid w-full grid-cols-1 gap-3 border-t border-border pt-6 sm:grid-cols-3">
            {METRICS.map((m) => (
              <div
                key={m.label}
                className="flex items-center justify-center gap-2 rounded-xl border border-border bg-surface/70 px-3 py-2.5"
              >
                <m.icon size={14} className="text-cyan" />
                <span className="text-xs text-muted">{m.label}:</span>
                <span className="text-xs font-semibold text-text">{m.value}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}