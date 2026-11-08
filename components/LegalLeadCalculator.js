"use client";

import { useState, useId } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Scale,
  ShieldCheck,
  Zap,
  Clock,
  ArrowRight,
  TrendingUp,
  DollarSign,
  PhoneCall,
  Lock,
  FileCheck2,
  Users,
  CheckCircle2,
  Activity,
  FileText,
  Gavel,
  Briefcase,
  Building2,
  HeartPulse,
  Home,
  FileSpreadsheet,
} from "lucide-react";
import { CALENDLY_URL } from "@/lib/data";

const PRACTICE_AREAS = [
  {
    id: "personal-injury",
    name: "Personal Injury & Mass Torts",
    shortName: "Personal Injury",
    categoryFocus: "speed", // speed | documents | booking
    icon: Scale,
    defaultLeads: 130,
    defaultAvgFee: 12500,
    defaultResponseTime: "1-4hours",
    retellFeature: "24/7 Motor Vehicle & Mass Tort Injury Screener",
    crmTargets: "SmartAdvocate • Lead Docket • Clio Manage • CallRail",
    complianceBadge: "HIPAA PHI & State Tort Reform Compliant",
    workflowSteps: [
      { title: "Intake Ingestion", desc: "Google LSA / Webform webhook fires in <50ms" },
      { title: "Voice & SMS Screener", desc: "Retell AI qualifies liability & injury date in <15s" },
      { title: "CRM Sync & Conflict", desc: "SmartAdvocate / Clio matter created with zero duplicates" },
      { title: "Instant Retainer", desc: "DocuSign retainer + LawPay IOLTA link texted to claimant" },
    ],
    slaTarget: "< 45 Seconds",
    highlightLabel: "Speed-to-Lead SLA",
  },
  {
    id: "employment-law",
    name: "Employment & Labor Law",
    shortName: "Employment Law",
    categoryFocus: "speed",
    icon: Briefcase,
    defaultLeads: 95,
    defaultAvgFee: 16500,
    defaultResponseTime: "1-4hours",
    retellFeature: "EEOC Timeline & Wrongful Termination Screener",
    crmTargets: "Clio Manage • Filevine • HubSpot Legal • GoHighLevel",
    complianceBadge: "EEOC 180/300-Day Statute & Workplace Privacy Safeguards",
    workflowSteps: [
      { title: "Intake Capture", desc: "Webhook fires on wage dispute, severance, or harassment form" },
      { title: "Voice & EEOC Screener", desc: "Retell AI scores employer size, termination date & protected class" },
      { title: "CRM & Document Webhooks", desc: "Pushes claimant timeline & payroll stubs to Clio/Filevine" },
      { title: "Retainer & Form Push", desc: "Representation agreement + EEOC intake packet texted in <60s" },
    ],
    slaTarget: "< 40 Seconds",
    highlightLabel: "EEOC Intake Velocity",
  },
  {
    id: "disability-benefits",
    name: "Disability & Benefits (SSDI/VA)",
    shortName: "Disability Law",
    categoryFocus: "documents",
    icon: Activity,
    defaultLeads: 90,
    defaultAvgFee: 7200,
    defaultResponseTime: "next-day",
    retellFeature: "SSA Grid-Rule & Medical Treatment Screener",
    crmTargets: "Filevine • Lead Docket • MyCase • Clio Manage",
    complianceBadge: "SSA-827 Authorization & HIPAA Protected Health Data",
    workflowSteps: [
      { title: "Claim Assessment", desc: "Pre-screen work credits, age & recent SSA denial date" },
      { title: "Intake Scoring", desc: "Automated qualification score assigns matter to hearing track" },
      { title: "Filevine / MyCase Sync", desc: "Ingests medical chronology with zero duplicate entries" },
      { title: "Record Request Router", desc: "Automated SSA-827 authorization packet sent to providers" },
    ],
    slaTarget: "< 60 Seconds",
    highlightLabel: "Document Gathering Efficiency",
  },
  {
    id: "immigration-law",
    name: "Immigration Law",
    shortName: "Immigration Law",
    categoryFocus: "speed",
    icon: FileText,
    defaultLeads: 85,
    defaultAvgFee: 5500,
    defaultResponseTime: "15-30min",
    retellFeature: "Bilingual (Spanish/English) 24/7 Voice Screener",
    crmTargets: "Lawmatics • Clio Grow • Zoho CRM • GoHighLevel",
    complianceBadge: "EOIR, USCIS & Sensitive Biometric Privacy Compliant",
    workflowSteps: [
      { title: "Bilingual Reception", desc: "Native Spanish & English AI screening within 10 seconds" },
      { title: "Relief / Visa Categorization", desc: "Classifies family petition, asylum, or H-1B/PERM" },
      { title: "Lawmatics Pipeline", desc: "Maps questionnaires & calendar slot into attorney diary" },
      { title: "Paid Consult Fee", desc: "Stripe / LawPay deposit collection prior to consult confirmation" },
    ],
    slaTarget: "< 35 Seconds",
    highlightLabel: "Bilingual Speed-to-Lead",
  },
  {
    id: "criminal-defense",
    name: "Criminal Defense & Traffic",
    shortName: "Criminal Defense",
    categoryFocus: "speed",
    icon: Gavel,
    defaultLeads: 60,
    defaultAvgFee: 6500,
    defaultResponseTime: "1-4hours",
    retellFeature: "24/7 Emergency Jail / Arrest Call Interception",
    crmTargets: "Clio Manage • PracticePanther • GoHighLevel",
    complianceBadge: "Privileged Attorney-Client Cryptographic Vault",
    workflowSteps: [
      { title: "Emergency Trigger", desc: "24/7 call interception with simultaneous attorney ring in <8s" },
      { title: "Arraignment Extraction", desc: "Captures court date, custody status, charges & bond amount" },
      { title: "Flat-Fee Retainer", desc: "Representation agreement pushed to family via SMS in <30s" },
      { title: "Card-on-File Vault", desc: "LawPay card tokenization secures initial retainer in <90s" },
    ],
    slaTarget: "< 30 Seconds",
    highlightLabel: "Emergency Call Capture",
  },
  {
    id: "workers-comp",
    name: "Workers' Compensation",
    shortName: "Workers' Comp",
    categoryFocus: "documents",
    icon: HeartPulse,
    defaultLeads: 75,
    defaultAvgFee: 9500,
    defaultResponseTime: "1-4hours",
    retellFeature: "Employer Incident & Injury Screener",
    crmTargets: "SmartAdvocate • MerusCase • Clio Manage • Filevine",
    complianceBadge: "State Workers' Comp Board & HIPAA Data Security",
    workflowSteps: [
      { title: "Incident Ingestion", desc: "Injury report parsed (date, employer, carrier, body parts)" },
      { title: "Voice Qualification", desc: "Retell AI confirms injury occurred within scope of employment" },
      { title: "Custom n8n Bridge", desc: "Direct schema push to MerusCase/SmartAdvocate claim screen" },
      { title: "Medical Release Push", desc: "Auto-generates state board filings and medical release" },
    ],
    slaTarget: "< 45 Seconds",
    highlightLabel: "Forms & Filing Velocity",
  },
  {
    id: "family-estate",
    name: "Family Law & Estate Planning",
    shortName: "Family & Estate",
    categoryFocus: "booking",
    icon: Home,
    defaultLeads: 50,
    defaultAvgFee: 5800,
    defaultResponseTime: "15-30min",
    retellFeature: "Conflict-Screened Consultation Booking Engine",
    crmTargets: "Clio Manage • Lawmatics • GoHighLevel",
    complianceBadge: "ABA Model Rule 1.7 Conflict & Family Privacy Guardrails",
    workflowSteps: [
      { title: "Adverse Check", desc: "Automatically checks opposing spouse/party in database" },
      { title: "Calendar Validation", desc: "Confirms attorney practice availability in real time" },
      { title: "Intake Form Parser", desc: "Ingests assets, children details, and marital timeline" },
      { title: "Retainer & Trust", desc: "Dispatches consultation invoice + evergreen trust agreement" },
    ],
    slaTarget: "< 50 Seconds",
    highlightLabel: "Consult Booking Automation",
  },
  {
    id: "bankruptcy-business",
    name: "Bankruptcy & Business Litigation",
    shortName: "Bankruptcy & Business",
    categoryFocus: "booking",
    icon: FileSpreadsheet,
    defaultLeads: 45,
    defaultAvgFee: 14000,
    defaultResponseTime: "next-day",
    retellFeature: "Financial Debt Threshold & Entity Scope Screener",
    crmTargets: "Clio Manage • Monday.com • Salesforce Legal • LawPay",
    complianceBadge: "Court Financial Disclosure & IOLTA Trust Accounting",
    workflowSteps: [
      { title: "Debt / Dispute Intake", desc: "Ingests creditor amounts, real estate parcels, or breach claims" },
      { title: "Financial Portal Link", desc: "Secure document link for tax returns, pay stubs & contracts" },
      { title: "Middleware Ledger Sync", desc: "Reconciles billing milestones into Clio / Monday.com" },
      { title: "LawPay Billing Sync", desc: "Card tokenization & automated trust account split" },
    ],
    slaTarget: "< 60 Seconds",
    highlightLabel: "Document Gathering & Audit",
  },
];

const RESPONSE_TIMES = [
  { id: "under-5", label: "< 5 Min", penalty: 1.0, desc: "Fast (Market leader)" },
  { id: "15-30min", label: "15–30 Min", penalty: 0.65, desc: "35% lead drop rate" },
  { id: "1-4hours", label: "1–4 Hours", penalty: 0.40, desc: "60% loss to competitor" },
  { id: "next-day", label: "Next Day", penalty: 0.18, desc: "82% lead loss rate" },
];

export default function LegalLeadCalculator() {
  const [selectedPracticeId, setSelectedPracticeId] = useState("personal-injury");
  const selectedPractice =
    PRACTICE_AREAS.find((p) => p.id === selectedPracticeId) || PRACTICE_AREAS[0];

  const [leadsPerMonth, setLeadsPerMonth] = useState(selectedPractice.defaultLeads);
  const [avgCaseFee, setAvgCaseFee] = useState(selectedPractice.defaultAvgFee);
  const [responseTimeId, setResponseTimeId] = useState(selectedPractice.defaultResponseTime);

  const leadsSliderId = useId();
  const feeSliderId = useId();

  // Switch practice area handler
  const handlePracticeChange = (practice) => {
    setSelectedPracticeId(practice.id);
    setLeadsPerMonth(practice.defaultLeads);
    setAvgCaseFee(practice.defaultAvgFee);
    setResponseTimeId(practice.defaultResponseTime);
  };

  // Empirical Legal Intake Conversion Mathematics
  // Baseline conversion rate at sub-60s speed-to-lead is typically ~22-26%
  const targetConversionRate = 0.24;
  const currentResponsePenalty =
    RESPONSE_TIMES.find((r) => r.id === responseTimeId)?.penalty || 0.4;
  const currentEffectiveConversion = targetConversionRate * currentResponsePenalty;

  // Additional cases retained per month
  const currentRetainedCases = Math.round(leadsPerMonth * currentEffectiveConversion);
  const optimizedRetainedCases = Math.round(leadsPerMonth * targetConversionRate);
  const additionalCases = Math.max(1, optimizedRetainedCases - currentRetainedCases);

  // Financial outcomes
  const monthlyRevenueGain = additionalCases * avgCaseFee;
  const annualRevenueGain = monthlyRevenueGain * 12;

  // Operational metrics tailored by practice focus category
  // speed: higher focus on voice AI recovery and speed-to-lead
  // documents: higher focus on document gathering, medical records & forms hours
  // booking: higher focus on calendar validation, billing reconciliation & conflict check
  const hoursSavedPerMonth =
    selectedPractice.categoryFocus === "documents"
      ? Math.round(leadsPerMonth * 0.95) // More document-heavy intake
      : selectedPractice.categoryFocus === "booking"
      ? Math.round(leadsPerMonth * 0.75) // Conflict check + billing
      : Math.round(leadsPerMonth * 0.65); // Speed-to-lead & voice qualifying

  const afterHoursRecovered = Math.round(leadsPerMonth * 0.38);

  const handleBookingRedirect = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("select-integration", {
          detail: {
            practice: selectedPractice.name,
            integration: `${selectedPractice.shortName} Intake & CRM Pipeline`,
            message: `Calculated Intake Audit for ${selectedPractice.name}:\n- Inbound volume: ${leadsPerMonth} leads/mo\n- Current response: ${responseTimeId}\n- Estimated revenue opportunity: $${monthlyRevenueGain.toLocaleString()}/mo\nLooking to deploy sub-60s speed-to-lead and CRM middleware.`,
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
      id="roi-calculator"
      className="relative scroll-mt-24 border-t border-border px-4 py-24 sm:py-28"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[420px] w-[1200px] -translate-x-1/2 -translate-y-1/2 bg-bowtie blur-3xl opacity-40" />
      </div>

      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-brass/40 bg-brass/10 px-3.5 py-1 text-xs font-mono text-brass">
            <TrendingUp size={14} className="text-brass" />
            <span>Intake Speed &amp; Revenue Audit</span>
          </div>
          <h2 className="mt-4 text-balance font-display text-3xl font-semibold tracking-tight text-text sm:text-4xl md:text-5xl">
            Legal Lead-to-Case ROI &amp; Speed-to-Lead Calculator
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-balance text-sm text-muted sm:text-base">
            Select your firm&apos;s practice area across 8 core legal categories to project how many qualified claimants slip through the cracks of delayed response times, manual document gathering, and missed after-hours calls.
          </p>
        </div>

        {/* Practice Area Selector Tabs (8 Categories) */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {PRACTICE_AREAS.map((practice) => {
            const Icon = practice.icon;
            const isSelected = practice.id === selectedPracticeId;
            return (
              <button
                key={practice.id}
                type="button"
                onClick={() => handlePracticeChange(practice)}
                className={`group flex items-center gap-2 rounded-xl border px-3 py-2 text-xs font-semibold transition-all duration-200 sm:px-3.5 sm:py-2.5 sm:text-sm ${
                  isSelected
                    ? "border-cyan bg-cyan/15 text-cyan shadow-[0_0_24px_-6px_rgba(76,201,240,0.4)]"
                    : "border-border bg-surface/70 text-muted hover:border-border/80 hover:bg-surface hover:text-text"
                }`}
              >
                <Icon size={15} className={isSelected ? "text-cyan" : "text-muted group-hover:text-text"} />
                <span>{practice.shortName}</span>
              </button>
            );
          })}
        </div>

        {/* Main Calculator Grid */}
        <div className="mt-8 grid gap-8 rounded-3xl border border-border bg-surface/80 p-6 sm:p-10 lg:grid-cols-12 lg:gap-10 backdrop-blur-xl shadow-2xl">
          {/* Left Column: Input Sliders & Selectors (5 Cols) */}
          <div className="space-y-6 lg:col-span-5">
            <div>
              <span className="eyebrow text-cyan">Step 1: Your Intake Parameters</span>
              <h3 className="mt-1 font-display text-xl font-semibold text-text">
                {selectedPractice.name}
              </h3>
              <p className="mt-1 text-xs text-muted">
                Adjust sliders to reflect your monthly marketing volume and current lead response time.
              </p>
            </div>

            {/* Inbound Leads Slider */}
            <div className="rounded-2xl border border-border/80 bg-ink/50 p-4">
              <div className="flex items-center justify-between">
                <label htmlFor={leadsSliderId} className="text-xs font-semibold text-text">
                  Monthly Inbound Leads / Inquiries
                </label>
                <span className="font-mono text-base font-bold text-cyan">
                  {leadsPerMonth} <span className="text-xs font-normal text-muted">leads</span>
                </span>
              </div>
              <input
                id={leadsSliderId}
                type="range"
                min={15}
                max={450}
                step={5}
                value={leadsPerMonth}
                onChange={(e) => setLeadsPerMonth(Number(e.target.value))}
                aria-label="Monthly Inbound Leads"
                className="mt-3 h-1.5 w-full cursor-pointer appearance-none rounded-lg bg-border accent-cyan"
              />
              <div className="mt-1.5 flex justify-between text-[11px] font-mono text-muted">
                <span>15</span>
                <span>225</span>
                <span>450+</span>
              </div>
            </div>

            {/* Current Response Time Selector */}
            <div className="rounded-2xl border border-border/80 bg-ink/50 p-4">
              <label className="block text-xs font-semibold text-text">
                Current Time to First Contact (Lead Response Time)
              </label>
              <div className="mt-3 grid grid-cols-2 gap-2">
                {RESPONSE_TIMES.map((rt) => {
                  const active = rt.id === responseTimeId;
                  return (
                    <button
                      key={rt.id}
                      type="button"
                      onClick={() => setResponseTimeId(rt.id)}
                      className={`flex flex-col items-start rounded-xl border p-2.5 text-left transition-colors ${
                        active
                          ? "border-brass bg-brass/15 text-brass"
                          : "border-border bg-surface/60 text-muted hover:border-border/80 hover:text-text"
                      }`}
                    >
                      <span className="font-mono text-xs font-semibold">{rt.label}</span>
                      <span className="text-[10px] opacity-80">{rt.desc}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Average Case Fee Slider */}
            <div className="rounded-2xl border border-border/80 bg-ink/50 p-4">
              <div className="flex items-center justify-between">
                <label htmlFor={feeSliderId} className="text-xs font-semibold text-text">
                  Average Fee per Retained Matter
                </label>
                <span className="font-mono text-base font-bold text-brass">
                  ${avgCaseFee.toLocaleString()}
                </span>
              </div>
              <input
                id={feeSliderId}
                type="range"
                min={2000}
                max={45000}
                step={500}
                value={avgCaseFee}
                onChange={(e) => setAvgCaseFee(Number(e.target.value))}
                aria-label="Average Fee per Retained Case"
                className="mt-3 h-1.5 w-full cursor-pointer appearance-none rounded-lg bg-border accent-brass"
              />
              <div className="mt-1.5 flex justify-between text-[11px] font-mono text-muted">
                <span>$2,000</span>
                <span>$20,000</span>
                <span>$45,000+</span>
              </div>
            </div>

            {/* Compliance Note */}
            <div className="flex items-center gap-2 rounded-xl border border-border/60 bg-surface/40 p-3 text-xs text-muted">
              <ShieldCheck size={16} className="shrink-0 text-live" />
              <span>
                Verified standard: <strong>{selectedPractice.complianceBadge}</strong>
              </span>
            </div>
          </div>

          {/* Right Column: Projected ROI & Outcome Metrics (7 Cols) */}
          <div className="flex flex-col justify-between space-y-6 lg:col-span-7">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border/80 pb-4">
                <div>
                  <span className="eyebrow text-brass">Step 2: Conversion Projections</span>
                  <h3 className="mt-1 font-display text-xl font-semibold text-text">
                    Predicted Growth for {selectedPractice.shortName}
                  </h3>
                </div>
                <div className="flex items-center gap-1.5 rounded-full border border-live/40 bg-live/10 px-3 py-1 font-mono text-xs font-semibold text-live">
                  <Zap size={14} />
                  <span>{selectedPractice.highlightLabel}: {selectedPractice.slaTarget}</span>
                </div>
              </div>

              {/* Big Impact Highlight Cards */}
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {/* Monthly Revenue Gain */}
                <div className="rounded-2xl border border-cyan/40 bg-cyan/5 p-5">
                  <span className="text-xs font-medium text-muted">Projected Monthly Revenue Gain</span>
                  <div className="mt-2 flex items-baseline gap-2">
                    <span className="font-mono text-3xl font-extrabold text-cyan sm:text-4xl">
                      +${monthlyRevenueGain.toLocaleString()}
                    </span>
                    <span className="text-xs text-muted">/ month</span>
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-muted">
                    {selectedPractice.categoryFocus === "speed"
                      ? "Gained by screening and engaging hot claimants within the first 60 seconds."
                      : selectedPractice.categoryFocus === "documents"
                      ? "Gained by accelerating record authorization turnaround from weeks to minutes."
                      : "Gained by eliminating calendar friction and securing trust payments instantly."}
                  </p>
                </div>

                {/* Additional Retained Cases */}
                <div className="rounded-2xl border border-brass/40 bg-brass/5 p-5">
                  <span className="text-xs font-medium text-muted">Monthly Retained Matters Added</span>
                  <div className="mt-2 flex items-baseline gap-2">
                    <span className="font-mono text-3xl font-extrabold text-brass sm:text-4xl">
                      +{additionalCases}
                    </span>
                    <span className="text-xs text-muted">signed retainers / mo</span>
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-muted">
                    Estimated <strong>+${annualRevenueGain.toLocaleString()}</strong> in annualized fee volume.
                  </p>
                </div>
              </div>

              {/* Secondary Operational Gains */}
              <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
                <div className="rounded-xl border border-border bg-ink/40 p-3.5 text-center">
                  <Clock size={16} className="mx-auto text-cyan" />
                  <div className="mt-2 font-mono text-lg font-bold text-text">
                    {hoursSavedPerMonth} hrs
                  </div>
                  <span className="text-[11px] text-muted">
                    {selectedPractice.categoryFocus === "documents"
                      ? "Records & Filing Hours Saved"
                      : selectedPractice.categoryFocus === "booking"
                      ? "Booking & Billing Hours Saved"
                      : "Intake & Typing Hours Saved"}
                  </span>
                </div>

                <div className="rounded-xl border border-border bg-ink/40 p-3.5 text-center">
                  <PhoneCall size={16} className="mx-auto text-brass" />
                  <div className="mt-2 font-mono text-lg font-bold text-text">
                    ~{afterHoursRecovered}
                  </div>
                  <span className="text-[11px] text-muted">After-Hours Leads Rescued</span>
                </div>

                <div className="col-span-2 rounded-xl border border-border bg-ink/40 p-3.5 text-center sm:col-span-1">
                  <CheckCircle2 size={16} className="mx-auto text-live" />
                  <div className="mt-2 font-mono text-lg font-bold text-text">
                    0.0%
                  </div>
                  <span className="text-[11px] text-muted">Dropped Webhooks</span>
                </div>
              </div>

              {/* Practice-Area Architecture Workflow Blueprint */}
              <div className="mt-6 rounded-2xl border border-border bg-ink/60 p-4 sm:p-5">
                <div className="flex items-center justify-between text-xs">
                  <span className="eyebrow text-cyan">Custom Architecture Blueprint</span>
                  <span className="font-mono text-muted text-[11px]">{selectedPractice.crmTargets}</span>
                </div>
                <div className="mt-3 grid gap-2 sm:grid-cols-2">
                  {selectedPractice.workflowSteps.map((step, idx) => (
                    <div
                      key={step.title}
                      className="flex items-start gap-2.5 rounded-lg border border-border/60 bg-surface/60 p-2.5 text-xs"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-cyan/15 font-mono text-[10px] font-bold text-cyan">
                        {idx + 1}
                      </span>
                      <div>
                        <strong className="text-text">{step.title}</strong>
                        <p className="mt-0.5 text-[11px] leading-tight text-muted">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Instant Action Button */}
            <div className="pt-2">
              <button
                type="button"
                onClick={handleBookingRedirect}
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-text px-6 py-4 text-sm font-semibold text-ink transition-transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-cyan/10"
              >
                <span>Get Custom Setup Strategy for {selectedPractice.shortName}</span>
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </button>
              <div className="mt-2 text-center text-[11px] text-muted">
                30-Minute Architecture Audit on Google Meet • Pre-populated with your {selectedPractice.shortName} metrics
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
