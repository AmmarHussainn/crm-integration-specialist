"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  PhoneCall,
  Database,
  Layers,
  FileCheck,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Workflow,
  Zap,
  Cpu,
  GitBranch,
  Lock,
} from "lucide-react";

const STAGES = [
  {
    id: "voice",
    name: "01. Retell AI Voice Intake",
    shortName: "Voice Intake",
    tag: "Autonomous Inbound Agent",
    icon: PhoneCall,
    accent: "indigo",
    headline: "40-Question Conversational Triage with Zero Caller Fatigue",
    description:
      "Our Retell AI voice agents field incoming employment disputes 24/7. The agent empathetically navigates 40+ complex triage questions, evaluating Title VII thresholds, FEHA claims, wage and hour overtime exemptions, and severance deadlines with sub-800ms speech response.",
    technicalFeatures: [
      "Custom function calling for real-time conflict checking and phone validation",
      "Dynamic prompt branching based on claim category (harassment vs. wage theft)",
      "Continuous entity extraction generating structured JSON on the active call",
    ],
    codeSnippet: {
      title: "Retell AI Inbound Payload Parser",
      badge: "Real-time Function Execution",
      lines: [
        { key: "claim_category", val: '"Wrongful_Termination_Retaliation"' },
        { key: "protected_class", val: '["Gender", "Whistleblower_Labor_Code_1102.5"]' },
        { key: "eeoc_statute_days_left", val: "184" },
        { key: "severance_deadline", val: '"2026-11-12T00:00:00Z"' },
      ],
    },
  },
  {
    id: "monday",
    name: "02. Monday.com Field Validation",
    shortName: "Monday.com Validation",
    tag: "Data Integrity & Rescue Hub",
    icon: Database,
    accent: "cyan",
    headline: "Strict GraphQL Column Schema Enforcement & Fallback Checkpoints",
    description:
      "All triage responses hit our custom n8n / Node.js middleware. Payloads are strictly validated against Monday.com board column IDs, enum labels, and date formats before mutations run, ensuring 0% dropped items. If a caller disconnects prematurely, the half-lead rescue engine immediately dispatches a pre-filled WorkForm.",
    technicalFeatures: [
      "Automatic JSON Schema type-casting preventing GraphQL column value rejections",
      "Half-lead checkpoint buffer saving partial responses (e.g. Q1 to Q18)",
      "Automated Twilio SMS and SendGrid email rescue link dispatch with one-click resume",
    ],
    codeSnippet: {
      title: "Monday.com GraphQL Mutation Guard",
      badge: "Strict Schema Validator",
      lines: [
        { key: "mutation", val: '"change_multiple_column_values"' },
        { key: "board_id", val: "8472910482" },
        { key: "column_validation", val: '"STRICT_ENUM_MATCH_VERIFIED"' },
        { key: "half_lead_checkpoint", val: '"BUFFERED_IN_SECURE_REDIS"' },
      ],
    },
  },
  {
    id: "leaddocket",
    name: "03. Lead Docket Intake Bridge",
    shortName: "Lead Docket Bridge",
    tag: "Case Qualification Engine",
    icon: Layers,
    accent: "indigo",
    headline: "Automated Lead Qualification & Intake Scoring",
    description:
      "Once the 40 questions are validated, the lead instantly populates in Lead Docket with mapped custom fields. Intake coordinators and managing attorneys receive instant alerts with pre-calculated claim valuations, severity ratings, and liability scores.",
    technicalFeatures: [
      "Zero manual data entry: claimant background, employer info, and evidence pre-populated",
      "Immediate duplicate contact detection across existing files",
      "Automated case status progression triggering the Filevine matter hand-off",
    ],
    codeSnippet: {
      title: "Lead Docket API Bridge",
      badge: "Intake Lead Creation",
      lines: [
        { key: "lead_status", val: '"Qualified_Employment_Dispute"' },
        { key: "estimated_case_value", val: '"$150,000 - $350,000"' },
        { key: "lead_source", val: '"Retell_AI_Autonomous_Inbound"' },
        { key: "auto_qualify_rule", val: '"CRITERIA_MET_TRIGGER_FILEVINE"' },
      ],
    },
  },
  {
    id: "filevine",
    name: "04. Filevine & Automated Retainers",
    shortName: "Filevine & Retainers",
    tag: "Case Creation & Contract Dispatch",
    icon: FileCheck,
    accent: "live",
    headline: "Sub-Second Filevine Project Generation & Vinesign Retainer Dispatch",
    description:
      "Upon qualification in Lead Docket, our bi-directional bridge calls Filevine API v2 to provision a new matter with the correct practice area template, auto-tags team assignments, and triggers an automated contingent fee agreement via Vinesign or DocuSign directly to the prospect's inbox.",
    technicalFeatures: [
      "Filevine API v2 Project and Contact creation with 60+ custom mapped fields",
      "Automated fee agreement template populated with client name and contingency rate",
      "Webhook listener tracking contract e-signatures and auto-advancing case to Active Litigation",
    ],
    codeSnippet: {
      title: "Filevine Vinesign Dispatch Payload",
      badge: "Automated Retainer Generation",
      lines: [
        { key: "filevine_project_id", val: "9918204" },
        { key: "contract_template", val: '"California_Employment_Contingency_Retainer"' },
        { key: "contingency_rate", val: '"33.3% Pre-Litigation / 40% Post-Filing"' },
        { key: "vinesign_dispatch_status", val: '"SENT_AWAITING_ESIGN"' },
      ],
    },
  },
];

export default function EmploymentStackVisualizer() {
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const activeStage = STAGES[activeStageIndex];

  return (
    <div className="rounded-3xl border border-border bg-[#0B0F14]/90 p-6 sm:p-10 shadow-2xl relative">
      <div className="mx-auto max-w-4xl text-center pb-8 border-b border-border/70">
        <span className="eyebrow text-cyan">Multi-CRM Integration Architecture</span>
        <h3 className="mt-2.5 font-display text-2xl font-semibold text-text sm:text-3xl">
          Lead Docket ➔ Filevine ➔ Monday.com + Retell AI Pipeline
        </h3>
        <p className="mt-2 text-xs sm:text-sm text-muted max-w-2xl mx-auto leading-relaxed">
          Click any step in the pipeline below to inspect how each platform communicates through our
          custom bi-directional webhook middleware.
        </p>

        {/* Step Navigation Tabs */}
        <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-2.5">
          {STAGES.map((stage, idx) => {
            const isSelected = activeStageIndex === idx;
            const Icon = stage.icon;
            return (
              <button
                key={stage.id}
                type="button"
                onClick={() => setActiveStageIndex(idx)}
                className={`flex items-center gap-2.5 p-3 rounded-2xl border text-left transition-all ${
                  isSelected
                    ? "border-cyan bg-cyan/10 shadow-[0_0_20px_-4px_rgba(6,182,212,0.4)]"
                    : "border-border/70 bg-surface/50 hover:border-border hover:bg-surface/80"
                }`}
              >
                <div
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl font-bold ${
                    isSelected ? "bg-cyan text-slate-950" : "bg-surface2 text-muted"
                  }`}
                >
                  <Icon size={16} />
                </div>
                <div className="truncate">
                  <div className="text-[10px] font-mono text-muted uppercase">Stage 0{idx + 1}</div>
                  <div
                    className={`text-xs font-semibold truncate ${
                      isSelected ? "text-text" : "text-slate-300"
                    }`}
                  >
                    {stage.shortName}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Stage Detail Card */}
      <div className="mt-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStage.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="grid gap-8 lg:grid-cols-12 items-start"
          >
            {/* Left Content (7 Cols) */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-mono text-cyan">
                <span>{activeStage.tag}</span>
              </div>

              <h4 className="mt-3 font-display text-xl sm:text-2xl font-semibold text-text">
                {activeStage.headline}
              </h4>

              <p className="mt-3 text-xs sm:text-sm text-muted leading-relaxed">
                {activeStage.description}
              </p>

              {/* Technical Features Checklist */}
              <div className="mt-5 space-y-2.5">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                  Engineering Implementation Highlights:
                </div>
                {activeStage.technicalFeatures.map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-200">
                    <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-cyan" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Code Payload Card (5 Cols) */}
            <div className="lg:col-span-5 rounded-2xl border border-border/80 bg-slate-950/90 p-5 font-mono text-xs shadow-inner">
              <div className="flex items-center justify-between pb-3 border-b border-border/60">
                <span className="text-cyan text-[11px] font-semibold flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-cyan inline-block animate-pulse" />
                  {activeStage.codeSnippet.title}
                </span>
                <span className="text-[10px] text-brass border border-brass/30 bg-brass/10 px-2 py-0.5 rounded">
                  {activeStage.codeSnippet.badge}
                </span>
              </div>

              <div className="mt-3.5 space-y-2 text-[11px]">
                {activeStage.codeSnippet.lines.map((line, lIdx) => (
                  <div key={lIdx} className="flex flex-wrap items-baseline gap-2">
                    <span className="text-muted">{line.key}:</span>
                    <span className="text-slate-100 font-medium">{line.val}</span>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-3 border-t border-border/50 text-[10px] text-muted flex items-center justify-between">
                <span>Latency: &lt; 380ms</span>
                <span className="text-live flex items-center gap-1">
                  <ShieldCheck size={12} /> SHA-256 Verified
                </span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
