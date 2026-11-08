"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Compass,
  CheckCircle2,
  ArrowRight,
  RefreshCw,
  Cpu,
  Layers,
  Scale,
  Activity,
  Globe,
  Gavel,
  Briefcase,
  Zap,
  PhoneCall,
  Clock,
  ShieldCheck,
  CreditCard,
  Database,
  ChevronRight,
  Sparkles,
  HeartPulse,
  Home,
  FileSpreadsheet,
  FileText,
  FileCheck2,
} from "lucide-react";
import { CALENDLY_URL } from "@/lib/data";

const QUESTION_1_OPTIONS = [
  {
    id: "pi",
    label: "Personal Injury & Mass Torts",
    sub: "MVA, slip & fall, class action, MDL, high-volume contingency",
    icon: Scale,
  },
  {
    id: "employment",
    label: "Employment & Labor Law",
    sub: "Wrongful termination, discrimination, wage & hour, severance",
    icon: Briefcase,
  },
  {
    id: "ssdi",
    label: "Disability & Benefits (SSDI/VA)",
    sub: "Complex medical records, multi-stage hearing track, appeals",
    icon: Activity,
  },
  {
    id: "immigration",
    label: "Immigration Law",
    sub: "Bilingual intake, family/business visas, paid consultations",
    icon: Globe,
  },
  {
    id: "criminal",
    label: "Criminal Defense & Traffic",
    sub: "DUI/DWI, federal, white collar, urgent 24/7 call dispatch",
    icon: Gavel,
  },
  {
    id: "workers-comp",
    label: "Workers' Compensation",
    sub: "On-the-job injury, occupational illness, insurer disputes",
    icon: HeartPulse,
  },
  {
    id: "family-estate",
    label: "Family Law & Estate Planning",
    sub: "Divorce, custody, probate, wills/trusts, conflict lookups",
    icon: Home,
  },
  {
    id: "bankruptcy-business",
    label: "Bankruptcy & Business Litigation",
    sub: "Debt threshold intake, contract disputes, financial audits",
    icon: FileSpreadsheet,
  },
];

const QUESTION_2_OPTIONS = [
  {
    id: "speed-after-hours",
    label: "Slow Speed-to-Lead / Missed After-Hours Calls",
    sub: "Competitors sign claimants first; evening and weekend calls sit in voicemail",
    icon: Zap,
  },
  {
    id: "duplicate-manual",
    label: "Duplicate Intake & Manual Copy-Pasting",
    sub: "Staff waste billable hours manually retyping client details across tabs",
    icon: Layers,
  },
  {
    id: "missing-docs",
    label: "Missing Medical Record / Payroll Document Automation",
    sub: "Weeks lost chasing medical releases, wage stubs, or financial disclosure forms",
    icon: FileCheck2,
  },
  {
    id: "unsynced-marketing",
    label: "Unsynced Marketing Channels with Legal CRMs",
    sub: "Google Ads, CallRail, and GoHighLevel webhooks fail to push reliably to core CRM",
    icon: RefreshCw,
  },
];

const TOOLS_OPTIONS = [
  "Clio Manage",
  "Clio Grow",
  "SmartAdvocate",
  "Filevine",
  "Lead Docket",
  "Lawmatics",
  "MyCase",
  "Retell AI",
  "GoHighLevel",
  "LawPay",
  "Monday.com",
  "CallRail",
  "HubSpot Legal",
  "None / Spreadsheets",
];

export default function CrmSelectionWizard() {
  const [step, setStep] = useState(1);
  const [selectedPractice, setSelectedPractice] = useState("pi");
  const [selectedPainPoint, setSelectedPainPoint] = useState("speed-after-hours");
  const [selectedTools, setSelectedTools] = useState(["GoHighLevel", "Clio Manage"]);

  const toggleTool = (tool) => {
    if (selectedTools.includes(tool)) {
      setSelectedTools(selectedTools.filter((t) => t !== tool));
    } else {
      setSelectedTools([...selectedTools, tool]);
    }
  };

  // Blueprint generator based on selections
  const getBlueprint = () => {
    switch (selectedPractice) {
      case "pi":
        return {
          title: "High-Velocity Personal Injury Retainer Engine",
          firmType: "Personal Injury & Mass Torts",
          primaryCrm: "SmartAdvocate or Lead Docket + Clio Manage",
          voiceScreener: "Retell AI Inbound & Outbound Auto-Caller (<15s)",
          middleware: "Custom n8n Webhook Engine with CallRail Call Mapping & Deduplication",
          billingTrust: "LawPay IOLTA Trust Separation via API",
          dataFlow: [
            "Lead calls or submits webform via Google LSA / CallRail / landing page",
            "Retell AI voice agent verifies accident date, injury criteria & liability within 15 seconds",
            "Middleware executes automated phone/email duplicate suppression and conflict check",
            "New Case Matter auto-generated in SmartAdvocate/Lead Docket with formatted notes",
            "DocuSign/Vinesign retainer contract + LawPay trust deposit link texted via SMS in <60s",
          ],
          slaTarget: "< 45 Seconds Speed-to-Lead",
          retentionUplift: "+45% to +70% Retained Cases",
          compliance: "HIPAA PHI Encryption & ABA Model Rule 1.15 Trust Compliance",
        };
      case "employment":
        return {
          title: "EEOC & Wage Dispute Intake Pipeline",
          firmType: "Employment & Labor Law",
          primaryCrm: "Clio Manage or Filevine + HubSpot Legal",
          voiceScreener: "Retell AI Wrongful Termination & Wage Hour Screener",
          middleware: "EEOC 180/300-Day Statute Calculator & Payroll Doc Collection Router",
          billingTrust: "LawPay Contingency Settlement & Retainer Vault",
          dataFlow: [
            "Employee submits wrongful termination, discrimination, or wage dispute form",
            "AI screener evaluates employer headcount, date of termination, and protected class",
            "Calculates EEOC filing deadline statute and flags high-priority severance claims",
            "Matter pushed to Clio/Filevine with auto-generated payroll/document upload link",
            "Representation agreement pushed to employee via SMS with document checklist",
          ],
          slaTarget: "< 40 Seconds EEOC Case Intake",
          retentionUplift: "+55% Employee Case Capture",
          compliance: "EEOC Statute Tracking & Workplace Privacy Safeguards",
        };
      case "ssdi":
        return {
          title: "Zero-Touch SSDI Hearing & Records Pipeline",
          firmType: "Disability & Benefits Law (SSDI/VA)",
          primaryCrm: "Lead Docket or Filevine + MyCase",
          voiceScreener: "Retell AI Medical Treatment & SSA Grid-Rule Screener",
          middleware: "Automated SSA-827 Medical Records & Provider Request Router",
          billingTrust: "Automated Contingency Ledger & Hearing Track Sync",
          dataFlow: [
            "Claimant submits disability intake via marketing landing page or referral",
            "AI screener checks age, work credits, and recent SSA initial denial date",
            "Automated qualification score assigns matter to appropriate hearing track",
            "Auto-generates digital SSA-1696 representation packet for claimant signature",
            "Fires automated HIPAA medical provider requests with zero staff retyping",
          ],
          slaTarget: "< 60 Seconds Automated Assessment",
          retentionUplift: "+35% Claim Qualification Velocity",
          compliance: "SSA-827 Authorization & HIPAA Protected Health Data",
        };
      case "immigration":
        return {
          title: "24/7 Multilingual Immigration Retainer Stack",
          firmType: "Immigration Law",
          primaryCrm: "Lawmatics or Clio Grow + GoHighLevel",
          voiceScreener: "Bilingual (Spanish/English) 24/7 Retell AI Screener",
          middleware: "USCIS Visa Category Router & Passport Collection Gateway",
          billingTrust: "Stripe & LawPay Paid Consultation Deposit Gateway",
          dataFlow: [
            "Prospective immigrant calls or submits form in English or Spanish",
            "Bilingual Retell AI agent screens for family petition, asylum, or H-1B/PERM",
            "Automated payment link collects paid consultation fee before diary slot confirmation",
            "Pushes questionnaire responses directly to Lawmatics / Clio contact",
            "Auto-reminds client with multilingual WhatsApp/SMS confirmations and document checklists",
          ],
          slaTarget: "< 35 Seconds Bilingual Contact",
          retentionUplift: "+50% Paid Consult Show-Up Rate",
          compliance: "EOIR & Sensitive Biometric/USCIS Privacy Compliant",
        };
      case "criminal":
        return {
          title: "Rapid Retainer 24/7 Emergency Dispatch Stack",
          firmType: "Criminal Defense & Traffic",
          primaryCrm: "Clio Manage or PracticePanther + GoHighLevel",
          voiceScreener: "24/7 Emergency Jail / Arrest Call Interception Router",
          middleware: "Simultaneous Attorney Ring & SMS Retainer Dispatcher",
          billingTrust: "LawPay Card-on-File Vault & Flat-Fee Invoicing",
          dataFlow: [
            "Urgent call received from suspect, family member, or jail phone facility",
            "AI intercepts 24/7, extracts arrest charges, court date, bail, and custody status",
            "Immediate simultaneous ring alert pushed to on-call defense attorney phone",
            "Pre-populated flat-fee representation agreement pushed to family via SMS in <30s",
            "LawPay card tokenization secures initial defense retainer in <90s",
          ],
          slaTarget: "< 25 Seconds Emergency Response",
          retentionUplift: "+60% Retainer Capture Rate",
          compliance: "Privileged Attorney-Client Cryptographic Vault",
        };
      case "workers-comp":
        return {
          title: "Employer Incident & Workers' Comp Docket Router",
          firmType: "Workers' Compensation",
          primaryCrm: "SmartAdvocate or MerusCase + Clio Manage",
          voiceScreener: "Retell AI Employer Incident & Treatment Screener",
          middleware: "State Workers' Comp Board C-3 Filing & Carrier Sync Engine",
          billingTrust: "Automated Medical Lien & Settlement Ledger Tracking",
          dataFlow: [
            "Injured worker completes initial intake or calls from job site/clinic",
            "Retell AI verifies date of injury, employer name, insurance carrier, and body parts",
            "Custom n8n middleware formats payload directly into MerusCase/SmartAdvocate claim screens",
            "Automates state workers' comp board C-3 injury filing and medical record release",
            "Sends signed representation agreement and clinic introduction letter via SMS",
          ],
          slaTarget: "< 45 Seconds Injury Ingestion",
          retentionUplift: "+40% Carrier Filing Velocity",
          compliance: "State Workers' Comp Board & HIPAA Security Guidelines",
        };
      case "family-estate":
        return {
          title: "Conflict-Safe Family Law & Estate Booking Engine",
          firmType: "Family Law & Estate Planning",
          primaryCrm: "Clio Manage or Lawmatics + GoHighLevel",
          voiceScreener: "Conflict-Screened Consultation Booking Engine",
          middleware: "ABA Rule 1.7 Conflict Sweep & Calendar Availability Bridge",
          billingTrust: "LawPay Paid Consultation & Trust Account Split",
          dataFlow: [
            "Prospective client submits divorce, custody, or probate inquiry",
            "Middleware automatically checks opposing spouse/parties across active firm database",
            "Conflict-cleared leads receive real-time calendar picker for attorney consultation",
            "Collects consultation deposit via LawPay prior to calendar slot reservation",
            "Pushes questionnaire responses directly to Clio/Lawmatics matter folder",
          ],
          slaTarget: "< 50 Seconds Conflict-Free Booking",
          retentionUplift: "92% Consult Attendance Rate",
          compliance: "ABA Model Rule 1.7 Conflict & Family Privacy Guardrails",
        };
      case "bankruptcy-business":
      default:
        return {
          title: "Financial Debt & Business Litigation Pipeline",
          firmType: "Bankruptcy & Business Litigation",
          primaryCrm: "Clio Manage or Monday.com + Salesforce Legal",
          voiceScreener: "Financial Debt Threshold & Entity Scope Screener",
          middleware: "Automated Financial Document Gathering & Court Filing Middleware",
          billingTrust: "LawPay Evergreen Trust Replenishment Gateway",
          dataFlow: [
            "Debtor or corporate litigant submits intake questionnaire",
            "AI parses creditor amounts, asset totals, adverse parties, and dispute timeline",
            "Dispatches secure encrypted upload portal for tax returns, pay stubs, or contracts",
            "Reconciles billing milestones and retainer balances into Clio/Monday.com ledgers",
            "Automates fee agreement signature and LawPay trust deposit collection",
          ],
          slaTarget: "< 60 Seconds Financial Audit",
          retentionUplift: "+45% Document Completion Rate",
          compliance: "Court Financial Disclosure & IOLTA Trust Accounting",
        };
    }
  };

  const blueprint = getBlueprint();

  const handleBookingClick = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("select-integration", {
          detail: {
            practice: blueprint.firmType,
            integration: `${blueprint.firmType} Architecture`,
            message: `CRM Architecture Diagnostic Result:\n- Firm Type: ${blueprint.firmType}\n- Primary Bottleneck: ${selectedPainPoint}\n- Existing Tools: ${selectedTools.join(", ") || "None"}\n- Recommended Stack: ${blueprint.primaryCrm}\nLooking to implement this blueprint.`,
          },
        })
      );
      const el = document.getElementById("booking");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      } else {
        window.location.href = CALENDLY_URL;
      }
    }
  };

  return (
    <section
      id="crm-wizard"
      className="relative scroll-mt-24 border-t border-border px-4 py-24 sm:py-28"
    >
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan/40 bg-cyan/10 px-3.5 py-1 text-xs font-mono text-cyan">
            <Compass size={14} className="text-cyan" />
            <span>Multi-Niche CRM Architecture Matcher</span>
          </div>
          <h2 className="mt-4 text-balance font-display text-3xl font-semibold tracking-tight text-text sm:text-4xl md:text-5xl">
            Not sure which legal CRM or automation stack fits your firm?
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-balance text-sm text-muted sm:text-base">
            Answer 3 quick micro-questions to generate an authoritative, practice-specific architecture recommendation across 8 core U.S. legal categories designed for sub-second data flow and zero dropped cases.
          </p>
        </div>

        {/* Wizard Card Container */}
        <div className="mt-12 overflow-hidden rounded-3xl border border-border bg-surface/80 p-6 sm:p-10 backdrop-blur-xl shadow-2xl">
          {/* Step Progress Indicator */}
          <div className="mb-8 flex items-center justify-between border-b border-border/80 pb-4">
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-cyan/15 font-mono text-xs font-bold text-cyan">
                {step <= 3 ? step : 3}/3
              </span>
              <span className="font-display text-sm font-semibold text-text">
                {step === 1 && "Step 1: Select Your Practice Area (8 Firm Types)"}
                {step === 2 && "Step 2: Your Primary Operational Pain Point"}
                {step === 3 && "Step 3: Tools Currently in Place"}
                {step === 4 && "Architecture Recommendation Blueprint"}
              </span>
            </div>

            {step <= 3 ? (
              <span className="text-xs text-muted">60-second diagnostic</span>
            ) : (
              <button
                type="button"
                onClick={() => setStep(1)}
                className="flex items-center gap-1.5 text-xs text-cyan hover:underline"
              >
                <RefreshCw size={12} />
                Restart Diagnostic
              </button>
            )}
          </div>

          <AnimatePresence mode="wait">
            {/* STEP 1: Practice Area (8 Categories) */}
            {step === 1 && (
              <motion.div
                key="step-1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
                className="space-y-4"
              >
                <h3 className="font-display text-lg font-semibold text-text">
                  What is your primary practice area and intake profile?
                </h3>
                <div className="grid gap-3 sm:grid-cols-2">
                  {QUESTION_1_OPTIONS.map((opt) => {
                    const Icon = opt.icon;
                    const active = selectedPractice === opt.id;
                    return (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setSelectedPractice(opt.id)}
                        className={`flex items-start gap-3 rounded-2xl border p-3.5 text-left transition-all ${
                          active
                            ? "border-cyan bg-cyan/10 shadow-[0_0_20px_-6px_rgba(76,201,240,0.4)]"
                            : "border-border bg-ink/40 hover:border-border/80 hover:bg-surface"
                        }`}
                      >
                        <div
                          className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${
                            active ? "bg-cyan text-ink" : "bg-surface text-muted"
                          }`}
                        >
                          <Icon size={18} />
                        </div>
                        <div>
                          <div className="font-display text-sm font-semibold text-text">
                            {opt.label}
                          </div>
                          <div className="mt-1 text-xs text-muted leading-tight">{opt.sub}</div>
                        </div>
                      </button>
                    );
                  })}
                </div>
                <div className="flex justify-end pt-4">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="flex items-center gap-2 rounded-xl bg-text px-5 py-2.5 text-xs font-semibold text-ink transition-transform hover:scale-[1.03]"
                  >
                    Next: Operational Bottleneck
                    <ChevronRight size={14} />
                  </button>
                </div>
              </motion.div>
            )}

            {/* STEP 2: Biggest Bottleneck */}
            {step === 2 && (
              <motion.div
                key="step-2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
                className="space-y-4"
              >
                <h3 className="font-display text-lg font-semibold text-text">
                  Where do potential clients currently slip through the cracks?
                </h3>
                <div className="grid gap-3 sm:grid-cols-2">
                  {QUESTION_2_OPTIONS.map((opt) => {
                    const Icon = opt.icon;
                    const active = selectedPainPoint === opt.id;
                    return (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setSelectedPainPoint(opt.id)}
                        className={`flex items-start gap-3 rounded-2xl border p-4 text-left transition-all ${
                          active
                            ? "border-brass bg-brass/10 shadow-[0_0_20px_-6px_rgba(212,175,106,0.4)]"
                            : "border-border bg-ink/40 hover:border-border/80 hover:bg-surface"
                        }`}
                      >
                        <div
                          className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${
                            active ? "bg-brass text-ink" : "bg-surface text-muted"
                          }`}
                        >
                          <Icon size={18} />
                        </div>
                        <div>
                          <div className="font-display text-sm font-semibold text-text">
                            {opt.label}
                          </div>
                          <div className="mt-1 text-xs text-muted leading-tight">{opt.sub}</div>
                        </div>
                      </button>
                    );
                  })}
                </div>
                <div className="flex items-center justify-between pt-4">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="text-xs text-muted hover:text-text"
                  >
                    ← Back
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    className="flex items-center gap-2 rounded-xl bg-text px-5 py-2.5 text-xs font-semibold text-ink transition-transform hover:scale-[1.03]"
                  >
                    Next: Current Tech Stack
                    <ChevronRight size={14} />
                  </button>
                </div>
              </motion.div>
            )}

            {/* STEP 3: Current Tools in Place */}
            {step === 3 && (
              <motion.div
                key="step-3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
                className="space-y-4"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-lg font-semibold text-text">
                    Which tools are currently part of your legal intake &amp; case workflow?
                  </h3>
                  <span className="text-xs text-muted">Select all that apply</span>
                </div>
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                  {TOOLS_OPTIONS.map((tool) => {
                    const active = selectedTools.includes(tool);
                    return (
                      <button
                        key={tool}
                        type="button"
                        onClick={() => toggleTool(tool)}
                        className={`flex items-center justify-between rounded-xl border p-3 text-xs font-medium transition-all ${
                          active
                            ? "border-cyan/60 bg-cyan/15 text-cyan font-semibold"
                            : "border-border bg-ink/40 text-muted hover:border-border/80 hover:text-text"
                        }`}
                      >
                        <span>{tool}</span>
                        {active && <CheckCircle2 size={14} className="text-cyan" />}
                      </button>
                    );
                  })}
                </div>
                <div className="flex items-center justify-between pt-4">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="text-xs text-muted hover:text-text"
                  >
                    ← Back
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep(4)}
                    className="flex items-center gap-2 rounded-xl bg-cyan px-6 py-3 text-xs font-semibold text-ink transition-transform hover:scale-[1.03]"
                  >
                    <Sparkles size={14} />
                    Generate Recommended Architecture
                    <ArrowRight size={14} />
                  </button>
                </div>
              </motion.div>
            )}

            {/* STEP 4: Architecture Blueprint Output */}
            {step === 4 && (
              <motion.div
                key="step-4"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="space-y-6"
              >
                {/* Result Header Badge */}
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/80 pb-4">
                  <div>
                    <span className="eyebrow text-cyan">Optimal Blueprint Identified</span>
                    <h3 className="mt-1 font-display text-2xl font-bold text-text">
                      {blueprint.title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="rounded-lg border border-brass/40 bg-brass/10 px-3 py-1 font-mono text-xs font-semibold text-brass">
                      {blueprint.slaTarget}
                    </span>
                    <span className="rounded-lg border border-live/40 bg-live/10 px-3 py-1 font-mono text-xs font-semibold text-live">
                      {blueprint.retentionUplift}
                    </span>
                  </div>
                </div>

                {/* Architecture Layers Breakdown */}
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                  <div className="rounded-xl border border-border bg-ink/50 p-3.5">
                    <div className="text-[11px] font-mono text-muted uppercase">1. Ingestion Layer</div>
                    <div className="mt-1 font-display text-sm font-semibold text-text">
                      Webhooks &amp; Ads
                    </div>
                    <p className="mt-1 text-[11px] text-muted">Sub-50ms listener with deduplication</p>
                  </div>

                  <div className="rounded-xl border border-border bg-ink/50 p-3.5">
                    <div className="text-[11px] font-mono text-muted uppercase">2. Voice AI Screener</div>
                    <div className="mt-1 font-display text-sm font-semibold text-cyan">
                      {blueprint.voiceScreener}
                    </div>
                    <p className="mt-1 text-[11px] text-muted">24/7 qualifying &amp; transcript extraction</p>
                  </div>

                  <div className="rounded-xl border border-border bg-ink/50 p-3.5">
                    <div className="text-[11px] font-mono text-muted uppercase">3. Primary Legal CRM</div>
                    <div className="mt-1 font-display text-sm font-semibold text-brass">
                      {blueprint.primaryCrm}
                    </div>
                    <p className="mt-1 text-[11px] text-muted">Matter creation &amp; custom field mapping</p>
                  </div>

                  <div className="rounded-xl border border-border bg-ink/50 p-3.5">
                    <div className="text-[11px] font-mono text-muted uppercase">4. Trust &amp; Billing</div>
                    <div className="mt-1 font-display text-sm font-semibold text-live">
                      {blueprint.billingTrust}
                    </div>
                    <p className="mt-1 text-[11px] text-muted">IOLTA compliance &amp; payment links</p>
                  </div>
                </div>

                {/* Step-by-Step Data Flow Visual */}
                <div className="rounded-2xl border border-border bg-ink/70 p-5">
                  <span className="eyebrow text-cyan">Recommended Data Flow Sequence</span>
                  <div className="mt-3 space-y-2 text-xs">
                    {blueprint.dataFlow.map((stepDesc, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-cyan/15 font-mono text-[10px] font-bold text-cyan">
                          {idx + 1}
                        </span>
                        <span className="text-text leading-relaxed">{stepDesc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Compliance & Security Guarantee */}
                <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-border/60 bg-surface/40 p-3.5 text-xs text-muted">
                  <div className="flex items-center gap-2">
                    <ShieldCheck size={16} className="text-live" />
                    <span>
                      Compliance: <strong>{blueprint.compliance}</strong>
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={16} className="text-brass" />
                    <span>Deployment SLA: 2 to 3 weeks live</span>
                  </div>
                </div>

                {/* Call to Action: Explicit 15-Min Strategy Call for Firm Type */}
                <div className="flex flex-col items-center justify-between gap-4 pt-2 sm:flex-row">
                  <button
                    type="button"
                    onClick={handleBookingClick}
                    className="group flex w-full items-center justify-center gap-2 rounded-xl bg-text px-6 py-3.5 text-sm font-semibold text-ink transition-transform hover:scale-[1.02] sm:w-auto"
                  >
                    <span>Book a 15-Min Strategy Call for {blueprint.firmType}</span>
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </button>

                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="flex items-center gap-1.5 text-xs text-muted hover:text-text"
                  >
                    <RefreshCw size={12} />
                    Adjust Diagnostic Answers
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
