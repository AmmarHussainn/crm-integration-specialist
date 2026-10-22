"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  PhoneCall,
  PhoneOff,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  Mail,
  Smartphone,
  Database,
  RefreshCw,
  FileCheck,
  Send,
  Sliders,
  Layers,
  Cpu,
  ShieldCheck,
  Zap,
} from "lucide-react";

export default function EmploymentVoiceSimulator() {
  const [simulationMode, setSimulationMode] = useState("completed"); // "completed" | "dropoff"
  const [isResumed, setIsResumed] = useState(false);

  const handleModeChange = (mode) => {
    setSimulationMode(mode);
    setIsResumed(false);
  };

  return (
    <div className="rounded-3xl border border-indigo-500/30 bg-gradient-to-b from-[#0F172A]/90 via-[#0B0F14]/95 to-[#020617] p-6 sm:p-10 shadow-2xl relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-indigo-500/15 blur-[100px]" />
      <div className="pointer-events-none absolute -right-20 -bottom-20 h-72 w-72 rounded-full bg-cyan/15 blur-[100px]" />

      {/* Header & Mode Switcher */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 pb-8 border-b border-border/80">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/40 bg-indigo-500/10 px-3.5 py-1 text-xs font-mono text-indigo-400">
            <Sparkles size={13} />
            <span>Retell AI + Monday.com Fallback Engine</span>
          </div>
          <h3 className="mt-3 font-display text-2xl font-semibold text-text sm:text-3xl">
            The 40-Question Triage & "Zero-Disqualification" Engine
          </h3>
          <p className="mt-1.5 text-xs sm:text-sm text-muted max-w-2xl leading-relaxed">
            Employment law triage requires 40+ nuanced criteria. Test our live conversational agent
            below to see how complete sessions auto-advance, and how callers who hang up halfway are
            automatically rescued without losing a single lead.
          </p>
        </div>

        {/* Mode Selector Tabs */}
        <div className="flex items-center rounded-2xl border border-border bg-surface/80 p-1.5 self-start lg:self-auto shrink-0">
          <button
            type="button"
            onClick={() => handleModeChange("completed")}
            className={`flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-semibold transition-all ${
              simulationMode === "completed"
                ? "bg-indigo-600 text-white shadow-[0_0_15px_-3px_rgba(99,102,241,0.5)]"
                : "text-muted hover:text-text"
            }`}
          >
            <PhoneCall size={14} />
            Complete 40-Q Session
          </button>
          <button
            type="button"
            onClick={() => handleModeChange("dropoff")}
            className={`flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-semibold transition-all ${
              simulationMode === "dropoff"
                ? "bg-amber-500 text-slate-950 font-bold shadow-[0_0_15px_-3px_rgba(245,158,11,0.5)]"
                : "text-muted hover:text-text"
            }`}
          >
            <PhoneOff size={14} />
            Half-Lead Drop-Off Rescue
          </button>
        </div>
      </div>

      {/* Main Simulation Stage */}
      <div className="mt-8 grid gap-8 lg:grid-cols-12 items-start">
        {/* Left Column: Live Audio Stream & Conversational Dialog (7 Cols) */}
        <div className="lg:col-span-7 rounded-2xl border border-border/80 bg-[#0F172A]/80 p-5 sm:p-6 backdrop-blur">
          {/* Top Bar with Live Audio Waveform Simulation */}
          <div className="flex items-center justify-between pb-4 border-b border-border/60">
            <div className="flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-live opacity-75"></span>
                <span className="relative inline-flex h-3 w-3 rounded-full bg-live"></span>
              </span>
              <div>
                <span className="font-mono text-xs font-bold text-text">
                  RETELL AI VOICE AGENT #409
                </span>
                <div className="text-[10px] text-muted font-mono">
                  Low-Latency Speech-to-Speech (&lt; 780ms)
                </div>
              </div>
            </div>

            {/* Simulated Call Status Pill */}
            <div className="flex items-center gap-2 font-mono text-[11px]">
              {simulationMode === "completed" ? (
                <span className="rounded-md border border-live/30 bg-live/10 px-2.5 py-1 text-live font-semibold">
                  Call Finished (40/40 Answered)
                </span>
              ) : isResumed ? (
                <span className="rounded-md border border-live/30 bg-live/10 px-2.5 py-1 text-live font-semibold">
                  Resumed via Monday.com Form
                </span>
              ) : (
                <span className="rounded-md border border-amber-500/30 bg-amber-500/10 px-2.5 py-1 text-amber-400 font-semibold flex items-center gap-1.5">
                  <AlertCircle size={12} />
                  Caller Hung Up (Q 18/40)
                </span>
              )}
            </div>
          </div>

          {/* Dialog Bubbles */}
          <div className="mt-5 space-y-4 text-xs sm:text-[13px] leading-relaxed">
            {/* Agent Message 1 */}
            <div className="flex items-start gap-3">
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-indigo-500/20 text-indigo-400 font-mono text-[10px] font-bold">
                AI
              </div>
              <div className="rounded-2xl rounded-tl-sm border border-indigo-500/30 bg-indigo-950/30 p-3.5 text-slate-200">
                <p>
                  "Thank you for contacting the Employment Law Practice Group. I’m here to take down
                  the details of your workplace dispute. To confirm jurisdiction, were you an exempt
                  salaried employee, and what was your approximate annual salary?"
                </p>
              </div>
            </div>

            {/* Caller Message 1 */}
            <div className="flex items-start gap-3 justify-end">
              <div className="rounded-2xl rounded-tr-sm border border-cyan/30 bg-cyan/10 p-3.5 text-text text-right max-w-[85%]">
                <p>
                  "I was a Senior Operations Director making $175,000. I was abruptly terminated last
                  Friday, three weeks after I reported persistent sexual harassment and pay disparity to HR."
                </p>
              </div>
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-cyan/20 text-cyan font-mono text-[10px] font-bold">
                CL
              </div>
            </div>

            {/* Agent Message 2 */}
            <div className="flex items-start gap-3">
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-indigo-500/20 text-indigo-400 font-mono text-[10px] font-bold">
                AI
              </div>
              <div className="rounded-2xl rounded-tl-sm border border-indigo-500/30 bg-indigo-950/30 p-3.5 text-slate-200">
                <p>
                  "I’m very sorry to hear that. Retaliation following a protected complaint is illegal.
                  Did your employer offer a severance agreement, and how many employees does the company have?"
                </p>
              </div>
            </div>

            {/* Branching based on Mode */}
            {simulationMode === "completed" ? (
              <>
                <div className="flex items-start gap-3 justify-end">
                  <div className="rounded-2xl rounded-tr-sm border border-cyan/30 bg-cyan/10 p-3.5 text-text text-right max-w-[85%]">
                    <p>
                      "Yes, they offered $25,000 severance with a 21-day signing deadline. The company
                      has around 350 employees across California and Texas."
                    </p>
                  </div>
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-cyan/20 text-cyan font-mono text-[10px] font-bold">
                    CL
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-indigo-500/20 text-indigo-400 font-mono text-[10px] font-bold">
                    AI
                  </div>
                  <div className="rounded-2xl rounded-tl-sm border border-live/30 bg-live/10 p-3.5 text-slate-200">
                    <p className="text-live font-semibold text-xs mb-1">
                      ✓ All 40 Core Employment Criteria Successfully Captured
                    </p>
                    <p>
                      "Thank you for sharing these details. Based on our evaluation criteria, your case
                      qualifies for an immediate priority attorney review. I am sending an automated retainer
                      agreement to your email for your review now."
                    </p>
                  </div>
                </div>
              </>
            ) : (
              /* Drop-off Mode Scenario */
              <div className="rounded-2xl border border-amber-500/40 bg-amber-950/20 p-4">
                <div className="flex items-start gap-3">
                  <AlertCircle size={18} className="mt-0.5 shrink-0 text-amber-400" />
                  <div>
                    <h5 className="font-semibold text-amber-300 text-xs uppercase tracking-wider">
                      Caller Hang-Up Detected at Question 18/40
                    </h5>
                    <p className="mt-1 text-xs text-amber-200/80 leading-relaxed">
                      The prospect had to attend to an urgent matter and disconnected before completing
                      the remaining 22 questions. Traditional law firms lose this $175k case right here.
                    </p>

                    <div className="mt-3.5 flex flex-wrap gap-2.5">
                      <div className="rounded-lg border border-amber-500/30 bg-amber-500/10 px-3 py-1.5 text-[11px] font-mono text-amber-300">
                        ⚡ Checkpoint Saved: 18 Responses Buffered
                      </div>
                      <div className="rounded-lg border border-indigo-500/30 bg-indigo-500/10 px-3 py-1.5 text-[11px] font-mono text-indigo-300">
                        ✉ Rescue SMS & Monday Form Dispatched
                      </div>
                    </div>

                    {!isResumed ? (
                      <button
                        type="button"
                        onClick={() => setIsResumed(true)}
                        className="mt-4 flex items-center gap-2 rounded-xl bg-amber-400 px-4 py-2 text-xs font-bold text-slate-950 transition-transform hover:scale-[1.02]"
                      >
                        <Send size={13} />
                        Simulate Client Resuming via Mobile Form
                      </button>
                    ) : (
                      <div className="mt-3.5 rounded-lg border border-live/40 bg-live/10 p-2.5 text-xs text-live font-semibold flex items-center gap-2">
                        <CheckCircle2 size={16} />
                        Client completed questions 19–40 on their phone. Lead rescued and synced to Lead Docket & Filevine!
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Live Multi-System State & Entity Extraction (5 Cols) */}
        <div className="lg:col-span-5 space-y-4">
          {/* Real-time Extracted Entity Dossier */}
          <div className="rounded-2xl border border-border/80 bg-[#0F172A]/90 p-5 font-mono text-xs">
            <div className="flex items-center justify-between pb-3 border-b border-border/60">
              <span className="text-muted text-[10px] tracking-wider uppercase">
                Real-Time Parsed Payload
              </span>
              <span className="text-indigo-400 text-[10px] font-bold border border-indigo-500/30 bg-indigo-500/10 px-2 py-0.5 rounded">
                Retell Function Call
              </span>
            </div>

            <div className="mt-3.5 space-y-2 text-[11px]">
              <div className="flex justify-between">
                <span className="text-muted">Primary Claim:</span>
                <span className="text-indigo-300 font-semibold">Wrongful Term / Retaliation</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">Protected Activity:</span>
                <span className="text-cyan">HR Pay Inequity Report</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">Base Salary:</span>
                <span className="text-text font-bold">$175,000 / year</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">Employer Size:</span>
                <span className="text-slate-300">350 (Title VII Covered)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">Severance Review:</span>
                <span className="text-amber-400 font-bold">$25k Offered (21 Days)</span>
              </div>
            </div>
          </div>

          {/* Downstream Sync Pipelines */}
          <div className="rounded-2xl border border-border/80 bg-[#0F172A]/90 p-5 text-xs space-y-3">
            <div className="eyebrow text-cyan text-[10px]">Downstream Pipeline Orchestration</div>

            {/* Monday.com Status */}
            <div className="flex items-start gap-2.5 rounded-xl border border-border/60 bg-surface/60 p-3">
              <Database size={16} className="mt-0.5 shrink-0 text-indigo-400" />
              <div>
                <div className="font-semibold text-text">Monday.com Board Sync</div>
                <p className="text-[11px] text-muted">
                  {simulationMode === "completed" || isResumed
                    ? "Item #8820: Status 'Qualified Retaliation Claim' · 40 Fields Validated"
                    : "Item #8820: Status 'Half-Lead Dispatched' · Rescue Form Active"}
                </p>
              </div>
            </div>

            {/* Lead Docket Status */}
            <div className="flex items-start gap-2.5 rounded-xl border border-border/60 bg-surface/60 p-3">
              <Layers size={16} className="mt-0.5 shrink-0 text-cyan" />
              <div>
                <div className="font-semibold text-text">Lead Docket Status</div>
                <p className="text-[11px] text-muted">
                  {simulationMode === "completed" || isResumed
                    ? "Case Intake ID #LD-993: Auto-Qualified ➔ Filevine Export Triggered"
                    : "Lead Docket Queue: Awaiting Full Triage Completion"}
                </p>
              </div>
            </div>

            {/* Filevine & Retainer Status */}
            <div className="flex items-start gap-2.5 rounded-xl border border-border/60 bg-surface/60 p-3">
              <FileCheck size={16} className="mt-0.5 shrink-0 text-live" />
              <div>
                <div className="font-semibold text-text">Filevine & Contract Engine</div>
                <p className="text-[11px] text-muted">
                  {simulationMode === "completed" || isResumed
                    ? "Filevine Project #FV-402 Created · Vinesign Retainer Dispatched via Webhook"
                    : "Standby: Contract Generation Paused until Rescue Completion"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
