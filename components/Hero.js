"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  ShieldCheck,
  Zap,
  PhoneCall,
  FileCheck2,
  Clock,
  Sparkles,
  Layers,
  Scale,
  Activity,
  Globe,
  Gavel,
  Briefcase,
  Calculator,
} from "lucide-react";
import { CALENDLY_URL, TRUST_BADGES } from "@/lib/data";
import { ClioLogo } from "@/components/CertificationsSection";

const PRACTICE_PIPELINE_PRESETS = [
  {
    id: "pi",
    label: "Personal Injury",
    icon: Scale,
    stage1: "Google LSA / Webhook → Retell AI Voice Call (<15s)",
    stage2: "Accident details mapped & duplicate claimant check (<380ms)",
    stage3: "SmartAdvocate / Clio matter created + DocuSign Retainer texted (<60s)",
    sla: "42s Retainer Delivery",
  },
  {
    id: "employment",
    label: "Employment Law",
    icon: Briefcase,
    stage1: "Employee intake form → Retell AI EEOC timeline screener (<15s)",
    stage2: "Claimant timeline mapped & payroll document request triggered (<350ms)",
    stage3: "Clio / Filevine case created + fee agreement & engagement packet pushed (<55s)",
    sla: "39s Case Ingestion",
  },
  {
    id: "ssdi",
    label: "Disability Law (SSDI)",
    icon: Activity,
    stage1: "Intake form → Automated Grid-Rule Criteria Screener (<20s)",
    stage2: "Claim score calculated + SSA denial date validated (<250ms)",
    stage3: "Lead Docket matter opened + SSA-1696 packet dispatched (<50s)",
    sla: "48s Assessment Delivery",
  },
  {
    id: "immigration",
    label: "Immigration Law",
    icon: Globe,
    stage1: "Bilingual (ES/EN) AI Voice Receptionist screens visa type (<10s)",
    stage2: "Questionnaire data formatted + attorney diary slot checked (<310ms)",
    stage3: "Lawmatics contact logged + Paid consultation deposit collected (<45s)",
    sla: "38s Bilingual Handoff",
  },
  {
    id: "criminal",
    label: "Criminal Defense",
    icon: Gavel,
    stage1: "24/7 Arrest / Jail emergency call intercepted immediately (<8s)",
    stage2: "Simultaneous ring to on-call attorney + charge details parsed (<200ms)",
    stage3: "Clio matter filed + Flat-fee retainer secured via LawPay (<60s)",
    sla: "28s Rapid Retainer",
  },
];

export default function Hero() {
  const [activePipeline, setActivePipeline] = useState("pi");
  const currentPipeline =
    PRACTICE_PIPELINE_PRESETS.find((p) => p.id === activePipeline) ||
    PRACTICE_PIPELINE_PRESETS[0];

  return (
    <section
      id="top"
      className="relative flex min-h-[92vh] flex-col items-center justify-center overflow-hidden px-4 pb-20 pt-36 text-center sm:pt-44"
    >
      {/* Ambient bowtie glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[420px] w-[1400px] -translate-x-1/2 -translate-y-1/2 bg-bowtie blur-2xl" />
        <div className="absolute inset-0 grid-fade" />
      </div>

      {/* Trust Badges Bar */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-6 flex flex-wrap items-center justify-center gap-2"
      >
        {TRUST_BADGES.map((badge, i) => (
          <span
            key={badge}
            className="eyebrow rounded-full border border-border bg-surface/70 px-3 py-1.5 text-muted"
          >
            {badge}
            {i < TRUST_BADGES.length - 1 && <span className="ml-2 text-cyan">•</span>}
          </span>
        ))}
      </motion.div>

      {/* Conversion-Focused Hero Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
        className="text-balance font-display text-4xl font-semibold leading-[1.08] tracking-tight text-text sm:text-6xl md:text-7xl max-w-5xl"
      >
        We Turn Cold Legal Intake Leads Into{" "}
        <span className="bg-gradient-to-r from-cyan via-text to-brass bg-clip-text text-transparent">
          Signed Retainers
        </span>{" "}
        <span className="text-muted">in Under 60 Seconds</span>
      </motion.h1>

      {/* High-Ticket Positioning Subheadline */}
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.25 }}
        className="mx-auto mt-6 max-w-3xl text-balance text-base text-muted sm:text-lg"
      >
        Stop losing qualified claimants to delayed callbacks and broken CRM webhooks.
        We engineer custom bi-directional intake pipelines, 24/7 Retell AI voice screening, and practice management bridges maintaining <span className="text-cyan font-medium">&lt;400ms speed-to-lead</span> and <span className="text-brass font-medium">zero dropped cases</span>.
      </motion.p>

      {/* High-Visibility Clio Certified Administrator Trust Badge */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-6"
      >
        <a
          href="#certifications"
          onClick={(e) => {
            if (typeof window !== "undefined") {
              window.dispatchEvent(new CustomEvent("open-clio-cert"));
            }
          }}
          className="group inline-flex items-center gap-2.5 rounded-full border border-cyan/40 bg-surface/90 px-4 py-2 text-xs backdrop-blur-md transition-all duration-300 hover:border-cyan hover:bg-surface hover:shadow-[0_0_28px_-6px_rgba(76,201,240,0.6)] hover:scale-[1.02]"
        >
          {/* Verified Clio Badge Graphic with Live Beacon */}
          <span className="relative flex h-5 w-5 items-center justify-center rounded-full bg-cyan/15 text-cyan">
            <ClioLogo className="h-3.5 w-3.5 text-cyan transition-transform duration-300 group-hover:scale-110" />
            <span className="absolute -bottom-0.5 -right-0.5 flex h-2 w-2 rounded-full bg-live" />
          </span>

          <span className="font-display font-semibold text-text text-xs">
            Official Clio Certified Administrator{" "}
            <span className="hidden text-muted font-normal sm:inline">|</span>{" "}
            <span className="text-cyan font-medium hidden sm:inline">Legal CRM &amp; Practice Management Specialist</span>
          </span>

          <span className="rounded-full border border-cyan/30 bg-cyan/10 px-2 py-0.5 font-mono text-[10px] font-semibold text-cyan transition-colors group-hover:bg-cyan group-hover:text-ink">
            Verify Badge
          </span>
        </a>
      </motion.div>

      {/* Primary Conversion CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.38 }}
        className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
      >
        <a
          href="#roi-calculator"
          className="group flex items-center gap-2 rounded-xl bg-text px-6 py-3.5 text-sm font-semibold text-ink transition-transform hover:scale-[1.03] active:scale-[0.98] shadow-lg shadow-cyan/10"
        >
          <Calculator size={16} />
          Calculate Your Intake ROI
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
        </a>

        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl border border-border bg-surface/70 px-6 py-3.5 text-sm font-semibold text-text transition-colors hover:border-cyan/40 hover:text-cyan"
        >
          <Calendar size={15} className="inline mr-2 text-cyan" />
          Book Architecture Strategy Call
        </a>

        <a
          href="#crm-wizard"
          className="rounded-xl border border-brass/30 bg-brass/10 px-5 py-3.5 text-sm font-medium text-brass transition-colors hover:bg-brass/20"
        >
          <Sparkles size={14} className="inline mr-1.5" />
          Find Optimal CRM Stack
        </a>
      </motion.div>

      {/* Visual Workflow Diagram & Practice SLA Pipeline (Replacing developer code snippet) */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.48, ease: "easeOut" }}
        className="mt-14 w-full max-w-4xl rounded-3xl border border-border bg-surface/85 p-6 text-left shadow-2xl shadow-cyan/5 backdrop-blur-xl sm:p-8"
      >
        {/* Diagram Header & Practice Area Switcher */}
        <div className="flex flex-col gap-4 border-b border-border/80 pb-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-2 w-2 rounded-full bg-live animate-ping" />
              <span className="eyebrow text-cyan">Live Practice-Area Lead Pipeline</span>
            </div>
            <h3 className="mt-1 font-display text-base font-semibold text-text sm:text-lg">
              Visual Lead Conversion Architecture (<span className="text-cyan">{currentPipeline.sla}</span>)
            </h3>
          </div>

          {/* Practice Area Toggle Pills */}
          <div className="flex flex-wrap gap-1.5 rounded-xl border border-border bg-ink/70 p-1">
            {PRACTICE_PIPELINE_PRESETS.map((preset) => {
              const Icon = preset.icon;
              const active = preset.id === activePipeline;
              return (
                <button
                  key={preset.id}
                  type="button"
                  onClick={() => setActivePipeline(preset.id)}
                  className={`flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-xs font-medium transition-colors ${
                    active
                      ? "bg-cyan text-ink font-semibold"
                      : "text-muted hover:text-text hover:bg-surface"
                  }`}
                >
                  <Icon size={13} />
                  <span>{preset.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 3-Stage Pipeline Diagram */}
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {/* Stage 1 */}
          <div className="rounded-2xl border border-border/80 bg-ink/60 p-4 relative overflow-hidden">
            <div className="flex items-center justify-between text-xs text-muted mb-2">
              <span className="font-mono text-cyan uppercase font-bold text-[10px]">Stage 01 • Ingestion</span>
              <span className="rounded bg-cyan/15 px-1.5 py-0.5 font-mono text-[10px] text-cyan">&lt; 15s</span>
            </div>
            <div className="flex items-center gap-2 font-display text-sm font-semibold text-text">
              <PhoneCall size={16} className="text-cyan" />
              Instant AI Screening
            </div>
            <p className="mt-2 text-xs text-muted leading-relaxed">
              {currentPipeline.stage1}
            </p>
          </div>

          {/* Stage 2 */}
          <div className="rounded-2xl border border-border/80 bg-ink/60 p-4 relative overflow-hidden">
            <div className="flex items-center justify-between text-xs text-muted mb-2">
              <span className="font-mono text-brass uppercase font-bold text-[10px]">Stage 02 • Middleware</span>
              <span className="rounded bg-brass/15 px-1.5 py-0.5 font-mono text-[10px] text-brass">&lt; 380ms</span>
            </div>
            <div className="flex items-center gap-2 font-display text-sm font-semibold text-text">
              <Layers size={16} className="text-brass" />
              Deduplication &amp; Check
            </div>
            <p className="mt-2 text-xs text-muted leading-relaxed">
              {currentPipeline.stage2}
            </p>
          </div>

          {/* Stage 3 */}
          <div className="rounded-2xl border border-border/80 bg-ink/60 p-4 relative overflow-hidden">
            <div className="flex items-center justify-between text-xs text-muted mb-2">
              <span className="font-mono text-live uppercase font-bold text-[10px]">Stage 03 • Case Retained</span>
              <span className="rounded bg-live/15 px-1.5 py-0.5 font-mono text-[10px] text-live">&lt; 60s</span>
            </div>
            <div className="flex items-center gap-2 font-display text-sm font-semibold text-text">
              <FileCheck2 size={16} className="text-live" />
              Matter &amp; E-Retainer
            </div>
            <p className="mt-2 text-xs text-muted leading-relaxed">
              {currentPipeline.stage3}
            </p>
          </div>
        </div>

        {/* SLA & Compliance Metrics Banner */}
        <div className="mt-6 grid grid-cols-2 gap-2.5 border-t border-border/80 pt-5 sm:grid-cols-4">
          <div className="flex items-center gap-2 text-xs text-muted">
            <Zap size={14} className="text-cyan shrink-0" />
            <span>&lt;400ms Speed-to-Lead</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-muted">
            <ShieldCheck size={14} className="text-brass shrink-0" />
            <span>100% HIPAA &amp; PHI Safe</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-muted">
            <Clock size={14} className="text-live shrink-0" />
            <span>0 Missed Night Calls</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-muted">
            <Sparkles size={14} className="text-cyan shrink-0" />
            <span>Sub-60s Retainer Push</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
