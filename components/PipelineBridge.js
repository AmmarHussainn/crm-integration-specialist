"use client";

import { motion } from "framer-motion";
import { Zap, ShieldCheck, Briefcase, CheckCircle2 } from "lucide-react";

function EndpointBadge({ icon: Icon, eyebrow, label, accent }) {
  const accentText = accent === "cyan" ? "text-cyan" : "text-brass";
  const accentBorder = accent === "cyan" ? "border-cyan/30" : "border-brass/30";
  const accentBg = accent === "cyan" ? "bg-cyan/10" : "bg-brass/10";

  return (
    <div className="flex flex-1 items-center gap-3 rounded-xl border border-border bg-surface/80 p-4">
      <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border ${accentBorder} ${accentBg}`}>
        <Icon size={18} className={accentText} />
      </div>
      <div className="text-left">
        <div className={`eyebrow ${accentText}`}>{eyebrow}</div>
        <div className="mt-0.5 text-sm font-semibold text-text">{label}</div>
      </div>
    </div>
  );
}

export default function PipelineBridge() {
  return (
    <div className="animate-floaty mt-16 w-full max-w-2xl rounded-2xl border border-border bg-surface/80 p-5 shadow-2xl shadow-cyan/5 backdrop-blur sm:p-6">
      <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
        <EndpointBadge
          icon={Zap}
          eyebrow="GoHighLevel Trigger"
          label="Contact Updated"
          accent="cyan"
        />

        {/* Animated bridge */}
        <div className="flex shrink-0 flex-col items-center justify-center gap-2 px-1 py-2 sm:w-40">
          <div className="relative h-px w-full overflow-hidden rounded-full bg-gradient-to-r from-cyan via-border to-brass sm:w-40">
            <motion.span
              className="absolute top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-cyan shadow-[0_0_10px_2px_rgba(76,201,240,0.8)]"
              animate={{ left: ["0%", "96%"] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
          <div className="flex items-center gap-1.5 whitespace-nowrap text-center">
            <ShieldCheck size={12} className="shrink-0 text-live" />
            <span className="eyebrow text-[9px] text-muted">
              OAuth 2.0 • Signature Verified
            </span>
          </div>
        </div>

        <EndpointBadge
          icon={Briefcase}
          eyebrow="Clio Action"
          label="Matter Created & Linked"
          accent="brass"
        />
      </div>

      <div className="mt-5 flex items-center justify-center gap-2 border-t border-border pt-4 text-center">
        <CheckCircle2 size={14} className="text-live" />
        <span className="eyebrow text-text">Zero Manual Data Entry Required</span>
      </div>
    </div>
  );
}