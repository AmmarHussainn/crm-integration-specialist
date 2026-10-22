"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Scale,
  ShieldAlert,
  ShieldCheck,
  CheckCircle2,
  GitBranch,
  CreditCard,
  Calendar,
  Sparkles,
  ArrowRight,
  Clock,
  DollarSign,
  AlertTriangle,
  Send,
  Zap,
  Users,
  Building2,
  Workflow,
  Check,
  FileText,
  Mail,
  Smartphone,
  Layers,
  ChevronRight,
  UserCheck,
} from "lucide-react";
import { CALENDLY_URL } from "@/lib/data";

// JSON-LD Schema for Immigration Law Intake Automation & FAQ
const immigrationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://www.crmintegrationspecialist.com/#immigration-law-firm-automation",
      "name": "Immigration Law Firm Intake Automation & Attorney Routing System",
      "serviceType": "Legal Intake Automation & CRM Integration",
      "provider": {
        "@id": "https://www.crmintegrationspecialist.com/#organization",
      },
      "description":
        "Enterprise-grade automated intake, qualification screening, Stripe paid consultation gating, and algorithmic attorney case matching for high-volume immigration law practices. Prevents $200k-$300k monthly lead leakage with GoHighLevel and custom API middleware.",
      "areaServed": [
        { "@type": "Country", "name": "United States" },
        { "@type": "Country", "name": "Canada" },
        { "@type": "Place", "name": "Global / Remote" },
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Immigration Law Firm Automation Capabilities",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "GoHighLevel Legal Intake Workflows for Immigration Practices",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Automated Attorney Case Matching System by Visa Type",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Legal Intake Paid Consultation Stripe Integration",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Two-Way Calendar Sync & Multi-Channel Alert Automation",
            },
          },
        ],
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.crmintegrationspecialist.com/#immigration-automation-faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How does automated attorney case matching work for immigration law firms?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The automated attorney case matching system uses intelligent screening questions (visa category, timeline urgency, current status) submitted during intake. Algorithmic routing instantly directs the lead to the attorney specializing in that exact domain—such as routing H-1B, L-1, or EB-2 NIW inquiries to corporate employment partners, while directing O-1 or EB-1 cases to extraordinary talent specialists and family petitions to family immigration associates.",
          },
        },
        {
          "@type": "Question",
          "name": "How does Stripe paid consultation integration stop immigration lead leakage?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "High-volume immigration firms typically lose $200k–$300k monthly due to manual intake lag and non-paying consultation no-shows (often exceeding 40%). By integrating Stripe payment gating into GoHighLevel intake workflows, prospects securely pay the consultation fee ($150–$350) prior to calendar confirmation. This reduces no-show rates to under 3%, filters out unqualified tire-kickers, and ensures attorneys only spend time with serious, funded prospects.",
          },
        },
        {
          "@type": "Question",
          "name": "Can GoHighLevel legal intake workflows handle high-volume immigration inquiries across 100+ weekly leads?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Our GoHighLevel intake workflows are specifically architected for practices receiving 100+ weekly leads. The system handles instant qualification in under 60 seconds, automated SMS and email confirmations, two-way Google Calendar and Outlook synchronization, internal Slack or Teams alert dispatches, and bi-directional synchronization with Clio Manage or Lawmatics.",
          },
        },
        {
          "@type": "Question",
          "name": "Is the immigration law intake automation system scalable to other practice areas?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. While custom-engineered for immigration law firms, the underlying algorithmic matching and payment gating engine seamlessly scales across Personal Injury (statute of limitations filtering & retainer dispatch), Family Law (custody/divorce screening), Estate Planning (asset threshold qualification), and Criminal Defense (24/7 emergency dispatch).",
          },
        },
      ],
    },
  ],
};

// 4-Step Solution Architecture
const WORKFLOW_STEPS = [
  {
    step: "01",
    title: "Smart Screening & Intake",
    shortName: "Smart Screening",
    badge: "Step 1: Intelligent Qualification",
    summary:
      "Captures lead intent within 60 seconds via 2–3 dynamic qualification questions: Visa Category, Expiration Timeline, and Current Legal Status.",
    details: [
      "Dynamic conditional logic eliminates 40+ minutes of manual phone tag.",
      "Identifies urgency flags: I-94 expiring < 30 days, lottery deadlines, or OPT extensions.",
      "Filters out non-viable inquiries before consuming expensive attorney billable hours.",
    ],
    highlightCode: {
      label: "Intake Screening Payload",
      badge: "GHL Custom Form Webhook",
      fields: [
        { key: "visa_category", val: '"H-1B Specialty Occupation"' },
        { key: "current_status", val: '"F-1 STEM OPT (Expires in 28 days)"' },
        { key: "has_us_employer", val: "true" },
        { key: "urgency_score", val: '"CRITICAL_URGENT"' },
      ],
    },
  },
  {
    step: "02",
    title: "Algorithmic Case Matching",
    shortName: "Case Matching",
    badge: "Step 2: Dynamic Routing Logic",
    summary:
      "Instant logic rules match the prospect directly to the specialized attorney who handles their exact visa classification.",
    details: [
      "H-1B / EB-2 NIW leads route directly to Corporate & Business Visa Partners.",
      "O-1A / EB-1A extraordinary ability cases route to Tech & Executive Counsel.",
      "Marriage adjustments & I-130 petitions assign to Family Immigration Associates.",
      "Removal defense / Notice to Appear (NTA) alerts trigger Litigation Counsel dispatches.",
    ],
    highlightCode: {
      label: "Matching Engine Rule",
      badge: "n8n / Node.js Decision Matrix",
      fields: [
        { key: "routing_condition", val: 'visa_category === "H-1B"' },
        { key: "assigned_counsel", val: '"David Vance, Senior Business Partner"' },
        { key: "calendar_pool", val: '"Corporate_Immigration_Calendar"' },
        { key: "routing_latency", val: '"410ms"' },
      ],
    },
  },
  {
    step: "03",
    title: "Integrated Paid Consultation",
    shortName: "Stripe Gating",
    badge: "Step 3: Revenue Gating",
    summary:
      "Frictionless Stripe checkout ($150–$350) gated right before calendar slot reservation, eliminating 95% of consultation no-shows.",
    details: [
      "Pre-authorizes or collects the consultation fee via Apple Pay, Google Pay, or card.",
      "Saves senior partners 15–20 hours per month spent on unqualified free consults.",
      "Automated IOLTA / Operating account payment splitting and instant PDF receipt generation.",
    ],
    highlightCode: {
      label: "Payment Verification Webhook",
      badge: "Stripe Event: charge.succeeded",
      fields: [
        { key: "amount_captured", val: "$250.00 USD" },
        { key: "consultation_tier", val: '"Corporate Visa Strategy Session"' },
        { key: "payment_status", val: '"PAID_AND_VERIFIED"' },
        { key: "calendar_lock", val: "RELEASED_FOR_BOOKING" },
      ],
    },
  },
  {
    step: "04",
    title: "Team & CRM Orchestration",
    shortName: "CRM Orchestration",
    badge: "Step 4: Real-Time Sync",
    summary:
      "Sub-second sync updating GoHighLevel CRM, Slack/Teams internal pings, two-way Google/Outlook calendar events, and client SMS confirmations.",
    details: [
      "GoHighLevel pipeline auto-advances to 'Paid Consultation Confirmed'.",
      "Slack #intake-alerts channel receives full case dossier and uploaded documents.",
      "Attorney's calendar blocks out the appointment with auto-generated Zoom link.",
      "Client receives instant SMS + email with calendar invite and intake preparation guide.",
    ],
    highlightCode: {
      label: "Orchestration Pipeline Broadcast",
      badge: "Multi-Channel Event Dispatch",
      fields: [
        { key: "ghl_pipeline", val: '"Corporate Immigration Pipeline [Updated]"' },
        { key: "slack_broadcast", val: '"#intake-corporate-leads (Notified)"' },
        { key: "calendar_sync", val: '"Google Calendar 2-Way Event Created"' },
        { key: "sms_dispatch", val: '"Twilio Delivery: Confirmed (1.2s)"' },
      ],
    },
  },
];

// Interactive Visa Routing Demo Options
const VISA_ROUTING_PRESETS = [
  {
    id: "h1b",
    name: "H-1B / EB-2 NIW",
    tag: "Employment & Business",
    urgency: "High (OPT Expiring in 30 Days)",
    assignedAttorney: "David Vance, Esq.",
    attorneyTitle: "Senior Business Immigration Partner",
    attorneyAvatar: "DV",
    consultationFee: "$250",
    routingReason:
      "Matched via rule: Category 'H-1B' + Employer Sponsor Verified ➔ Route to Corporate Visas Pod.",
    ghlStage: "Stage: Paid Corporate Consult",
    slackChannel: "#immigration-business-intake",
    accent: "cyan",
  },
  {
    id: "o1",
    name: "O-1A / EB-1 Extraordinary",
    tag: "Tech & Executive Talent",
    urgency: "Medium (Filing Q3 Petition)",
    assignedAttorney: "Sarah Al-Mansoor, Esq.",
    attorneyTitle: "Founders & Extraordinary Ability Lead",
    attorneyAvatar: "SA",
    consultationFee: "$350",
    routingReason:
      "Matched via rule: High citations / venture backed founder ➔ Route to Extraordinary Talent Specialist.",
    ghlStage: "Stage: O-1/EB-1 VIP Assessment",
    slackChannel: "#founders-talent-alerts",
    accent: "brass",
  },
  {
    id: "family",
    name: "Marriage Green Card (I-130 / I-485)",
    tag: "Family Adjustment",
    urgency: "Normal (Recent Marriage)",
    assignedAttorney: "Carlos Ramirez, Esq.",
    attorneyTitle: "Family Immigration Counsel",
    attorneyAvatar: "CR",
    consultationFee: "$175",
    routingReason:
      "Matched via rule: Immediate relative petition + lawful entry confirmed ➔ Route to Family Pod.",
    ghlStage: "Stage: Marriage Adjustment Booked",
    slackChannel: "#family-immigration-desk",
    accent: "cyan",
  },
  {
    id: "eb5",
    name: "EB-5 Investor Visa",
    tag: "High Net Worth",
    urgency: "Priority (TEA Investment Target)",
    assignedAttorney: "Jonathan Sterling, Esq.",
    attorneyTitle: "EB-5 Direct Investment Director",
    attorneyAvatar: "JS",
    consultationFee: "$500",
    routingReason:
      "Matched via rule: Capital threshold > $800,000 TEA ➔ Route directly to Senior Investment Director.",
    ghlStage: "Stage: EB-5 Qualified Investor",
    slackChannel: "#vip-eb5-investors",
    accent: "brass",
  },
];

// Tech stack integrations grid
const TECH_INTEGRATIONS = [
  {
    icon: Workflow,
    title: "GoHighLevel (GHL) Automation Pipelines & Custom Workflows",
    badge: "Core Automation Engine",
    accent: "cyan",
    description:
      "Custom GHL pipelines engineered specifically for immigration practice areas. Automatic qualification tagging, conditional workflow branching based on visa category, and sub-second stage progression.",
    features: [
      "Custom immigration fields (USCIS receipt, I-94 date, visa class)",
      "Automated follow-up nurture sequences for unbooked prospects",
      "Seamless bi-directional sync to Clio Manage and Lawmatics",
    ],
  },
  {
    icon: Calendar,
    title: "Two-Way Sync Calendar Integrations",
    badge: "Google Calendar · Outlook · GHL",
    accent: "brass",
    description:
      "Eliminates scheduling conflicts across partner and associate calendars. Smart round-robin routing matches the prospect's visa needs with attorney availability in real time.",
    features: [
      "Skill-based calendar routing per immigration practice area",
      "Automatic buffer intervals, timezone detection & conflict locks",
      "Instant auto-generated unique Zoom or Google Meet room links",
    ],
  },
  {
    icon: Smartphone,
    title: "Multi-Channel Alerts & SMS Workflows",
    badge: "Automated SMS · Email · Slack/Teams",
    accent: "cyan",
    description:
      "Keeps prospects engaged and team members immediately informed. Rapid multi-channel confirmations minimize ghosting and keep retention rates above 90%.",
    features: [
      "Twilio-powered SMS reminders with 98% open rates within 3 minutes",
      "Internal Slack and Microsoft Teams pings with full lead dossier",
      "Automated client preparation emails with document upload checklists",
    ],
  },
  {
    icon: CreditCard,
    title: "Stripe Paid Consultation Gateways",
    badge: "Revenue Gating · Apple/Google Pay",
    accent: "brass",
    description:
      "Seamlessly embed payment collection into the booking workflow. Prospects pay the $150–$350 consultation fee prior to locking an attorney's calendar.",
    features: [
      "Stripe Elements & 1-click Apple Pay / Google Pay checkout",
      "Cuts consultation no-show rates from 45% down to under 3%",
      "Automated invoice reconciliation and IOLTA compliance safeguards",
    ],
  },
];

// Other practice areas expansion
const PRACTICE_AREAS = [
  {
    name: "Personal Injury",
    tag: "High Volume Litigation",
    statute: "Statute of Limitations Filter",
    desc: "Instant liability screening, police report upload gating, and immediate contingency retainer e-signature dispatch.",
  },
  {
    name: "Family Law",
    tag: "Divorce & Custody",
    statute: "Conflict & Jurisdiction Check",
    desc: "Automated opposing party conflict screening, county jurisdiction verification, and paid intake consultation gating.",
  },
  {
    name: "Estate Planning",
    tag: "Asset Protection",
    statute: "Net-Worth Qualification",
    desc: "Tiered asset qualification questionnaires, automated discovery checklist dispatch, and specialized partner routing.",
  },
  {
    name: "Criminal Defense",
    tag: "Emergency Dispatch",
    statute: "24/7 Rapid Response",
    desc: "Arraignment priority routing, immediate attorney SMS paging, and fast bail status intake within 30 seconds.",
  },
];

export default function ImmigrationAutomation() {
  const [activeStep, setActiveStep] = useState(0);
  const [selectedVisa, setSelectedVisa] = useState(VISA_ROUTING_PRESETS[0]);
  const [simulatedStatus, setSimulatedStatus] = useState("routed"); // "routing" | "routed"

  const handleVisaChange = (preset) => {
    setSimulatedStatus("routing");
    setSelectedVisa(preset);
    setTimeout(() => {
      setSimulatedStatus("routed");
    }, 320);
  };

  return (
    <section
      id="immigration-automation"
      aria-labelledby="immigration-heading"
      className="relative border-t border-border/80 px-4 py-28 overflow-hidden"
    >
      {/* Inline Schema Injection for SearchGPT, Perplexity & Google Rich Results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(immigrationSchema),
        }}
      />

      {/* Ambient background glows */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/4 h-[520px] w-[1300px] -translate-x-1/2 -translate-y-1/2 bg-bowtie blur-3xl opacity-70" />
        <div className="absolute right-0 top-1/2 h-96 w-96 rounded-full bg-cyan/10 blur-[130px]" />
        <div className="absolute left-0 bottom-1/4 h-96 w-96 rounded-full bg-brass/10 blur-[130px]" />
        <div className="absolute inset-0 grid-fade opacity-60" />
      </div>

      <div className="mx-auto max-w-6xl">
        {/* =========================================================
            1. SECTION HEADER & METRIC BANNER
        ========================================================= */}
        <header className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-cyan/40 bg-cyan/10 px-4 py-1.5 shadow-[0_0_24px_-4px_rgba(76,201,240,0.35)]"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan"></span>
            </span>
            <span className="eyebrow text-cyan font-semibold tracking-wider">
              Built for High-Volume Immigration Practices
            </span>
          </motion.div>

          <motion.h2
            id="immigration-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="text-balance font-display text-3xl font-semibold leading-[1.12] tracking-tight text-text sm:text-5xl lg:text-6xl"
          >
            Stop{" "}
            <span className="bg-gradient-to-r from-brass via-amber-200 to-brass bg-clip-text text-transparent">
              $200k+
            </span>{" "}
            in Monthly Lead Leakage:
            <br />
            <span className="bg-gradient-to-r from-cyan via-text to-brass bg-clip-text text-transparent">
              Intelligent Intake & Case-Routing Automations
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="mx-auto mt-6 max-w-3xl text-balance text-base leading-relaxed text-muted sm:text-lg"
          >
            Transform raw lead chaos into instant, paid consultations. Connect prospective
            clients directly to the exact specialized attorney for their visa type within{" "}
            <span className="font-semibold text-cyan">60 seconds</span>—with zero manual data re-entry
            or dropped inquiries.
          </motion.p>
        </header>

        {/* METRIC BANNER */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.22 }}
          className="mt-14 grid grid-cols-2 gap-3.5 sm:grid-cols-4 lg:gap-5"
        >
          <div className="group rounded-2xl border border-border bg-surface/70 p-5 backdrop-blur transition-all hover:border-brass/40 hover:bg-surface/90">
            <div className="flex items-center justify-between text-brass">
              <span className="eyebrow text-brass">Monthly Impact</span>
              <DollarSign size={18} className="text-brass" />
            </div>
            <div className="mt-3 font-display text-2xl font-bold tracking-tight text-text sm:text-3xl lg:text-4xl">
              $240k+
            </div>
            <p className="mt-1.5 text-xs text-muted sm:text-sm">
              Lead leakage prevented across 100+ weekly inquiries
            </p>
          </div>

          <div className="group rounded-2xl border border-border bg-surface/70 p-5 backdrop-blur transition-all hover:border-cyan/40 hover:bg-surface/90">
            <div className="flex items-center justify-between text-cyan">
              <span className="eyebrow text-cyan">Response Velocity</span>
              <Clock size={18} className="text-cyan" />
            </div>
            <div className="mt-3 font-display text-2xl font-bold tracking-tight text-text sm:text-3xl lg:text-4xl">
              &lt; 60 Sec
            </div>
            <p className="mt-1.5 text-xs text-muted sm:text-sm">
              Intake screening to matched attorney calendar confirmation
            </p>
          </div>

          <div className="group rounded-2xl border border-border bg-surface/70 p-5 backdrop-blur transition-all hover:border-live/40 hover:bg-surface/90">
            <div className="flex items-center justify-between text-live">
              <span className="eyebrow text-live">Attendance Rate</span>
              <ShieldCheck size={18} className="text-live" />
            </div>
            <div className="mt-3 font-display text-2xl font-bold tracking-tight text-text sm:text-3xl lg:text-4xl">
              97.4%
            </div>
            <p className="mt-1.5 text-xs text-muted sm:text-sm">
              Consultation show-rate with integrated Stripe fee gating
            </p>
          </div>

          <div className="group rounded-2xl border border-border bg-surface/70 p-5 backdrop-blur transition-all hover:border-cyan/40 hover:bg-surface/90">
            <div className="flex items-center justify-between text-cyan">
              <span className="eyebrow text-cyan">Routing Precision</span>
              <GitBranch size={18} className="text-cyan" />
            </div>
            <div className="mt-3 font-display text-2xl font-bold tracking-tight text-text sm:text-3xl lg:text-4xl">
              100%
            </div>
            <p className="mt-1.5 text-xs text-muted sm:text-sm">
              Zero misrouted cases across business, talent & family pods
            </p>
          </div>
        </motion.div>

        {/* =========================================================
            2. THE IMMIGRATION PROBLEM VS. AUTOMATED SOLUTION
        ========================================================= */}
        <section className="mt-24">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow text-brass">Intake Breakdown vs. Automation</span>
            <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight text-text sm:text-3xl">
              Why High-Volume Immigration Practices Bleed Revenue
            </h3>
            <p className="mt-2 text-sm text-muted sm:text-base">
              Immigration law is uniquely vulnerable to intake lag. Compare the traditional manual
              quagmire against our 4-step automated legal intake engine.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-12 items-start">
            {/* The Immigration Problem Card (5 cols) */}
            <motion.article
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 rounded-3xl border border-red-500/20 bg-gradient-to-b from-surface/90 to-surface2/60 p-6 sm:p-8 backdrop-blur shadow-xl relative"
            >
              <div className="flex items-center justify-between pb-5 border-b border-border/80">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-red-500/10 text-red-400">
                    <ShieldAlert size={18} />
                  </span>
                  <div>
                    <span className="eyebrow text-red-400">The Problem</span>
                    <h4 className="font-display text-lg font-semibold text-text">
                      Manual Intake Chaos
                    </h4>
                  </div>
                </div>
                <span className="rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1 font-mono text-[11px] text-red-400 font-medium">
                  Leaking $200k–$300k/mo
                </span>
              </div>

              <div className="mt-6 space-y-4">
                <div className="rounded-xl border border-border/60 bg-surface/50 p-3.5">
                  <div className="flex items-start gap-2.5">
                    <AlertTriangle size={16} className="mt-0.5 shrink-0 text-red-400" />
                    <div>
                      <h5 className="text-xs font-semibold uppercase tracking-wider text-text">
                        100+ Weekly Leads Across Diverse Visas
                      </h5>
                      <p className="mt-1 text-xs leading-relaxed text-muted">
                        Inquiries pour in for H-1B, F-1 OPT, O-1, Green Cards, and Family Petitions.
                        Without automated triage, leads pile up in shared inboxes.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-border/60 bg-surface/50 p-3.5">
                  <div className="flex items-start gap-2.5">
                    <Clock size={16} className="mt-0.5 shrink-0 text-amber-400" />
                    <div>
                      <h5 className="text-xs font-semibold uppercase tracking-wider text-text">
                        4 to 24-Hour Delayed Response Times
                      </h5>
                      <p className="mt-1 text-xs leading-relaxed text-muted">
                        High-intent applicants contact 3–5 firms simultaneously. Waiting hours for a
                        callback means 64% retain competitors who respond first.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-border/60 bg-surface/50 p-3.5">
                  <div className="flex items-start gap-2.5">
                    <Users size={16} className="mt-0.5 shrink-0 text-red-400" />
                    <div>
                      <h5 className="text-xs font-semibold uppercase tracking-wider text-text">
                        Intake Staff Burnout & Misrouted Files
                      </h5>
                      <p className="mt-1 text-xs leading-relaxed text-muted">
                        Paralegals spend 18+ hours/week gathering basic visa status info, often
                        booking senior business partners with general family petitions.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-border/60 bg-surface/50 p-3.5">
                  <div className="flex items-start gap-2.5">
                    <DollarSign size={16} className="mt-0.5 shrink-0 text-red-400" />
                    <div>
                      <h5 className="text-xs font-semibold uppercase tracking-wider text-text">
                        45%+ Unpaid Consultation No-Shows
                      </h5>
                      <p className="mt-1 text-xs leading-relaxed text-muted">
                        Free or ungated booking links result in chronic ghosting, wasting valuable
                        attorney billable hours and zero revenue capture.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Summary stat box */}
              <div className="mt-6 rounded-2xl border border-red-500/25 bg-red-950/20 p-4">
                <div className="text-xs font-semibold text-red-300">
                  Estimated Law Practice Loss:
                </div>
                <div className="mt-1 flex items-baseline justify-between">
                  <span className="font-display text-2xl font-bold text-red-400">
                    -$240,000 / month
                  </span>
                  <span className="font-mono text-xs text-red-300">~15 to 20 dropped retainers</span>
                </div>
              </div>
            </motion.article>

            {/* The Automated Solution & Interactive Stepper (7 cols) */}
            <motion.article
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 rounded-3xl border border-cyan/30 bg-surface/80 p-6 sm:p-8 backdrop-blur shadow-2xl relative"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pb-5 border-b border-border/80 gap-3">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-cyan/15 text-cyan">
                    <Workflow size={18} />
                  </span>
                  <div>
                    <span className="eyebrow text-cyan">The Automated Solution</span>
                    <h4 className="font-display text-lg font-semibold text-text">
                      4-Step Intake & Case-Routing Engine
                    </h4>
                  </div>
                </div>
                <span className="self-start sm:self-auto rounded-full border border-live/30 bg-live/10 px-3 py-1 font-mono text-[11px] text-live font-medium">
                  Sub-60s Total Execution
                </span>
              </div>

              {/* Step Navigation Pills */}
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-2">
                {WORKFLOW_STEPS.map((s, idx) => {
                  const isActive = activeStep === idx;
                  return (
                    <button
                      key={s.step}
                      type="button"
                      onClick={() => setActiveStep(idx)}
                      className={`flex flex-col items-start p-2.5 rounded-xl border text-left transition-all ${
                        isActive
                          ? "border-cyan bg-cyan/10 shadow-[0_0_15px_-3px_rgba(76,201,240,0.4)]"
                          : "border-border/70 bg-surface/40 hover:border-border hover:bg-surface/70"
                      }`}
                    >
                      <span
                        className={`font-mono text-[10px] font-bold ${
                          isActive ? "text-cyan" : "text-muted"
                        }`}
                      >
                        {s.step}
                      </span>
                      <span
                        className={`text-xs font-semibold truncate w-full mt-0.5 ${
                          isActive ? "text-text" : "text-muted"
                        }`}
                      >
                        {s.shortName}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Active Step Content */}
              <div className="mt-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStep}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className="flex items-center justify-between">
                      <span className="eyebrow text-brass">
                        {WORKFLOW_STEPS[activeStep].badge}
                      </span>
                      <span className="font-mono text-xs text-muted">
                        Stage {WORKFLOW_STEPS[activeStep].step} of 04
                      </span>
                    </div>

                    <h5 className="mt-2 font-display text-xl font-semibold text-text">
                      {WORKFLOW_STEPS[activeStep].title}
                    </h5>
                    <p className="mt-2 text-sm text-muted leading-relaxed">
                      {WORKFLOW_STEPS[activeStep].summary}
                    </p>

                    {/* Step details checklist */}
                    <ul className="mt-4 space-y-2">
                      {WORKFLOW_STEPS[activeStep].details.map((detail, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2.5 text-xs text-text">
                          <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-cyan" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Live Payload Preview / Code Card */}
                    <div className="mt-5 rounded-2xl border border-border/80 bg-ink/90 p-4 font-mono text-xs shadow-inner">
                      <div className="flex items-center justify-between pb-2 mb-3 border-b border-border/60">
                        <span className="text-[11px] font-semibold text-cyan flex items-center gap-1.5">
                          <span className="h-2 w-2 rounded-full bg-cyan inline-block animate-pulse" />
                          {WORKFLOW_STEPS[activeStep].highlightCode.label}
                        </span>
                        <span className="text-[10px] text-brass border border-brass/30 bg-brass/10 px-2 py-0.5 rounded">
                          {WORKFLOW_STEPS[activeStep].highlightCode.badge}
                        </span>
                      </div>
                      <div className="space-y-1.5 text-[11px]">
                        {WORKFLOW_STEPS[activeStep].highlightCode.fields.map((f, fIdx) => (
                          <div key={fIdx} className="flex flex-wrap items-baseline gap-2">
                            <span className="text-muted">{f.key}:</span>
                            <span className="text-brass font-medium">{f.val}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Step Navigation Controls */}
              <div className="mt-6 flex items-center justify-between pt-4 border-t border-border/60">
                <button
                  type="button"
                  onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : 3))}
                  className="text-xs text-muted hover:text-text transition-colors flex items-center gap-1"
                >
                  Previous Step
                </button>
                <div className="flex items-center gap-1.5">
                  {WORKFLOW_STEPS.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      aria-label={`Go to step ${i + 1}`}
                      onClick={() => setActiveStep(i)}
                      className={`h-1.5 rounded-full transition-all ${
                        activeStep === i ? "w-6 bg-cyan" : "w-2 bg-border"
                      }`}
                    />
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => setActiveStep((prev) => (prev < 3 ? prev + 1 : 0))}
                  className="text-xs font-semibold text-cyan hover:text-cyan/80 transition-colors flex items-center gap-1"
                >
                  Next Step
                  <ChevronRight size={14} />
                </button>
              </div>
            </motion.article>
          </div>
        </section>

        {/* =========================================================
            FEATURE SPOTLIGHT: INTERACTIVE CASE-ROUTING SIMULATOR
        ========================================================= */}
        <div className="mt-20 rounded-3xl border border-border bg-gradient-to-b from-surface/80 via-surface/60 to-surface2/80 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="pointer-events-none absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-cyan/10 blur-[90px]" />

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 pb-8 border-b border-border/70">
            <div>
              <div className="inline-flex items-center gap-2 rounded-md border border-brass/30 bg-brass/10 px-2.5 py-1 text-xs font-mono text-brass">
                <Sparkles size={13} />
                <span>Interactive Architecture Spotlight</span>
              </div>
              <h3 className="mt-3 font-display text-2xl font-semibold text-text sm:text-3xl">
                Algorithmic Attorney Case-Matching Engine
              </h3>
              <p className="mt-1 text-sm text-muted max-w-2xl">
                Test the dynamic routing logic in real-time. Select a visa category below to watch
                how the system evaluates qualification parameters, assigns the specialist counsel,
                and gates the Stripe consultation fee.
              </p>
            </div>

            {/* Live latency pill */}
            <div className="flex items-center gap-2 rounded-2xl border border-border bg-ink/60 px-4 py-2.5 self-start lg:self-auto shrink-0">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-live opacity-75"></span>
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-live"></span>
              </span>
              <div className="text-left font-mono text-xs">
                <div className="text-muted text-[10px]">ROUTING LATENCY</div>
                <div className="text-live font-bold">&lt; 420ms Sync</div>
              </div>
            </div>
          </div>

          {/* Visa Preset Selectors */}
          <div className="mt-8">
            <span className="eyebrow text-muted">Select an Inbound Lead Visa Classification:</span>
            <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {VISA_ROUTING_PRESETS.map((preset) => {
                const isSelected = selectedVisa.id === preset.id;
                return (
                  <button
                    key={preset.id}
                    type="button"
                    onClick={() => handleVisaChange(preset)}
                    className={`rounded-2xl border p-4 text-left transition-all ${
                      isSelected
                        ? "border-cyan bg-cyan/10 shadow-[0_0_20px_-4px_rgba(76,201,240,0.35)] scale-[1.01]"
                        : "border-border bg-surface/50 hover:border-border/80 hover:bg-surface/80"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-muted">
                        {preset.tag}
                      </span>
                      {isSelected && <Check size={14} className="text-cyan" />}
                    </div>
                    <div className="mt-2 font-display text-sm font-semibold text-text">
                      {preset.name}
                    </div>
                    <div className="mt-1 text-[11px] text-muted truncate">{preset.urgency}</div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Visual Routing Result Card */}
          <div className="mt-8 grid gap-5 lg:grid-cols-12 items-center">
            {/* Lead Dossier (Left) */}
            <div className="lg:col-span-5 rounded-2xl border border-border bg-ink/80 p-5 font-mono text-xs">
              <div className="flex items-center justify-between pb-3 border-b border-border/60">
                <span className="text-muted uppercase text-[10px] tracking-wider">
                  Inbound Intake Dossier
                </span>
                <span className="text-live text-[10px] font-semibold bg-live/10 border border-live/30 px-2 py-0.5 rounded">
                  Screening Passed
                </span>
              </div>
              <div className="mt-3.5 space-y-2 text-[11px]">
                <div className="flex justify-between">
                  <span className="text-muted">Classification:</span>
                  <span className="text-cyan font-semibold">{selectedVisa.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted">Urgency Status:</span>
                  <span className="text-brass">{selectedVisa.urgency}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted">Required Retainer:</span>
                  <span className="text-text font-bold">$4,500 – $9,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted">Screening Logic:</span>
                  <span className="text-live">Validated (3 Qs)</span>
                </div>
              </div>

              {/* Dynamic rule box */}
              <div className="mt-4 rounded-xl border border-border/80 bg-surface/60 p-3 text-[11px] leading-relaxed text-muted">
                <span className="text-text font-semibold">Engine Rule Trigger: </span>
                {selectedVisa.routingReason}
              </div>
            </div>

            {/* Arrow Bridge */}
            <div className="lg:col-span-2 flex flex-col items-center justify-center py-2 text-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan/40 bg-cyan/10 text-cyan animate-pulse">
                <GitBranch size={20} />
              </div>
              <span className="mt-2 font-mono text-[10px] uppercase tracking-wider text-muted">
                Algorithmic Match
              </span>
            </div>

            {/* Matched Attorney & Orchestration Result (Right) */}
            <div className="lg:col-span-5 rounded-2xl border border-cyan/40 bg-surface/90 p-5 shadow-lg">
              <div className="flex items-center justify-between pb-3 border-b border-border/60">
                <span className="eyebrow text-cyan text-[10px]">Target Attorney Assigned</span>
                <span className="font-mono text-xs text-brass font-bold">
                  {selectedVisa.consultationFee} Gated Fee
                </span>
              </div>

              <div className="mt-4 flex items-center gap-3.5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-brass/40 bg-brass/10 font-display text-base font-bold text-brass">
                  {selectedVisa.attorneyAvatar}
                </div>
                <div>
                  <h4 className="font-display text-base font-semibold text-text">
                    {selectedVisa.assignedAttorney}
                  </h4>
                  <p className="text-xs text-muted">{selectedVisa.attorneyTitle}</p>
                </div>
              </div>

              {/* Live pipeline dispatches */}
              <div className="mt-4 space-y-2 rounded-xl border border-border/60 bg-ink/70 p-3 text-[11px] font-mono">
                <div className="flex items-center gap-2 text-cyan">
                  <CheckCircle2 size={13} className="shrink-0" />
                  <span className="truncate">{selectedVisa.ghlStage}</span>
                </div>
                <div className="flex items-center gap-2 text-brass">
                  <CheckCircle2 size={13} className="shrink-0" />
                  <span className="truncate">Slack: {selectedVisa.slackChannel}</span>
                </div>
                <div className="flex items-center gap-2 text-live">
                  <CheckCircle2 size={13} className="shrink-0" />
                  <span className="truncate">Stripe: Verified & Calendar Confirmed</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================
            3. TECH STACK INTEGRATIONS GRID
        ========================================================= */}
        <section className="mt-28">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow text-cyan">Tech Stack Integrations Grid</span>
            <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight text-text sm:text-4xl">
              The Underlying Automation Engine
            </h3>
            <p className="mt-2 text-sm text-muted sm:text-base">
              Engineered with enterprise-grade legal CRM webhooks, calendar bi-directional sync,
              instant multi-channel alerting, and secure Stripe payment processing.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {TECH_INTEGRATIONS.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="group relative flex flex-col justify-between rounded-3xl border border-border bg-surface/60 p-6 sm:p-7 backdrop-blur transition-all hover:border-cyan/40 hover:bg-surface/90"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan/30 bg-cyan/10 text-cyan transition-transform group-hover:scale-105">
                        <Icon size={22} />
                      </span>
                      <span className="eyebrow rounded-full border border-border px-3 py-1 text-brass text-[10px]">
                        {item.badge}
                      </span>
                    </div>

                    <h4 className="mt-5 font-display text-lg font-semibold leading-snug text-text">
                      {item.title}
                    </h4>

                    <p className="mt-2 text-xs leading-relaxed text-muted sm:text-sm">
                      {item.description}
                    </p>

                    <ul className="mt-4 space-y-2 border-t border-border/60 pt-4">
                      {item.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2 text-xs text-text">
                          <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-cyan" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* =========================================================
            4. EXPANSION BANNER (Other Law Practices)
        ========================================================= */}
        <div className="mt-24 rounded-3xl border border-border/80 bg-gradient-to-r from-surface2/90 via-surface/95 to-surface2/90 p-8 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="pointer-events-none absolute -left-12 -top-12 h-56 w-56 rounded-full bg-brass/10 blur-[80px]" />

          <div className="mx-auto max-w-4xl text-center">
            <span className="eyebrow text-brass">Cross-Practice Scalability</span>
            <h3 className="mt-2 font-display text-2xl font-semibold text-text sm:text-3xl">
              Custom-Built for Immigration Law.
              <br />
              <span className="text-cyan">Scalable Across Every High-Volume Legal Practice.</span>
            </h3>
            <p className="mx-auto mt-3 max-w-2xl text-xs sm:text-sm text-muted">
              While specialized for complex immigration classification logic, our algorithmic
              intake and fee-gated scheduling architecture readily powers premier litigation,
              estate, family, and criminal defense firms.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {PRACTICE_AREAS.map((area) => (
              <div
                key={area.name}
                className="rounded-2xl border border-border/80 bg-ink/60 p-4 transition-all hover:border-cyan/30"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-text">{area.name}</span>
                  <span className="font-mono text-[9px] text-brass uppercase border border-brass/25 px-1.5 py-0.5 rounded">
                    {area.tag}
                  </span>
                </div>
                <div className="mt-2 font-mono text-[10px] text-cyan">{area.statute}</div>
                <p className="mt-1.5 text-[11px] leading-relaxed text-muted">{area.desc}</p>
              </div>
            ))}
          </div>

          {/* CTA Bar */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl border border-cyan/20 bg-cyan/5 p-5">
            <div>
              <div className="text-sm font-semibold text-text">
                Ready to stop lead leakage in your legal practice?
              </div>
              <div className="text-xs text-muted">
                Schedule a 30-minute architectural walkthrough with Ammar Hussain.
              </div>
            </div>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 rounded-xl bg-text px-5 py-3 text-xs font-semibold text-ink transition-transform hover:scale-[1.03] active:scale-[0.98] shrink-0"
            >
              <Calendar size={14} />
              Book Immigration Strategy Call
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
