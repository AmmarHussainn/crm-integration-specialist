import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingSection from "@/components/BookingSection";
import FAQ from "@/components/FAQ";
import EmploymentVoiceSimulator from "@/components/EmploymentVoiceSimulator";
import EmploymentStackVisualizer from "@/components/EmploymentStackVisualizer";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Zap,
  PhoneCall,
  Layers,
  FileCheck,
  Database,
  Lock,
  Workflow,
  Sparkles,
  TrendingUp,
  Clock,
  DollarSign,
  AlertTriangle,
  Scale,
  Cpu,
  Mail,
  Send,
  GitBranch,
} from "lucide-react";
import { CALENDLY_URL } from "@/lib/data";

export const metadata = {
  title: "Employment Law Automation | Retell AI Voice Intake & Filevine-Lead Docket Bridges",
  description:
    "Scale your employment law practice with autonomous Retell AI voice intake, 40-question triage, Lead Docket to Filevine bi-directional sync, automated Vinesign retainer dispatch, and Monday.com half-lead rescue.",
  alternates: {
    canonical: "https://www.crmintegrationspecialist.com/employment-law-automation",
  },
  openGraph: {
    title: "Scaling Employment Law Firms Through Autonomous Voice Intake & Filevine Bridges",
    description:
      "Never lose an employment dispute lead again. Connect Lead Docket to Filevine, deploy 40-question Retell AI voice triage, and rescue half-leads via Monday.com.",
    url: "https://www.crmintegrationspecialist.com/employment-law-automation",
    siteName: "CRM Integration Specialists",
    type: "article",
  },
  keywords: [
    "Employment law firm automation",
    "Lead Docket Filevine integration",
    "Retell AI legal voice intake",
    "Filevine automated retainer dispatch",
    "Monday.com legal intake field validation",
    "Employment dispute triage automation",
    "Wrongful termination intake automation",
    "Vinesign retainer contract automation",
    "Lead Docket to Filevine data pipeline",
    "Legal CRM webhook middleware",
  ],
};

const employmentFaqs = [
  {
    question: "How does the Retell AI voice agent handle the nuanced empathy needed in wrongful termination cases?",
    answer:
      "Employment law inquiries often come from highly distressed individuals who have just lost their livelihood or endured workplace harassment. Our Retell AI voice agents are engineered with tailored conversational prompts and empathetic active-listening cues. Rather than sounding like rigid IVR trees, the agent validates the caller's experience ('I understand how stressful that situation is, and we take workplace retaliation very seriously') while dynamically extracting legal jurisdiction criteria like company size, protected class, and adverse employment action.",
  },
  {
    question: "What exactly happens when a caller hangs up halfway through the 40 triage questions?",
    answer:
      "Traditional law firms lose 100% of these 'drop-off' leads. In our architecture, every single answer is cached in real time. If the caller hangs up at Question 18, our middleware detects the disconnect event, logs a 'Half-Lead' checkpoint on your Monday.com board, and automatically fires an SMS and email with a pre-filled Monday.com WorkForm link. The claimant can finish the remaining questions on their phone at their own convenience without repeating their answers. Once submitted, the case merges directly into Lead Docket and Filevine.",
  },
  {
    question: "How does the Lead Docket to Filevine hand-off work without creating duplicate records?",
    answer:
      "We build a deterministic bi-directional bridge between Lead Docket and the Filevine API v2. When an intake coordinator or automated scoring rule advances a lead status to 'Qualified' in Lead Docket, our middleware initiates an idempotent lookup against Filevine using claimant email, phone, and SSN hash. If no duplicate exists, it creates the Filevine Project, applies the Employment Practice Area template, maps 60+ custom intake fields, and writes the Filevine Project ID back to Lead Docket for bi-directional reference.",
  },
  {
    question: "How do you prevent Monday.com GraphQL column schema errors from breaking intake?",
    answer:
      "Monday.com's GraphQL API is notoriously strict—sending an unexpected text format into a status column or dropdown ID results in a mutation rejection. Our middleware runs a runtime JSON Schema validation layer before any GraphQL dispatch. It validates every field against your board's column definitions, casts string dates to ISO timestamps, maps label texts to internal Monday.com index IDs, and reroutes any anomalous payloads to a dead-letter retry queue with Slack alerts.",
  },
  {
    question: "Can retainer agreements be generated and sent immediately upon intake approval?",
    answer:
      "Yes. The moment a case qualifies in Lead Docket or is approved in Filevine, our webhook engine triggers an automated Vinesign or DocuSign document workflow. The system pulls the claimant's legal name, employer entity, and fee tier (e.g., 33.3% pre-litigation / 40% post-complaint contingency) into your approved employment retainer template and dispatches it via SMS and email. When signed, the executed PDF is filed into Filevine Docs and the team is notified via Slack.",
  },
  {
    question: "How long does it take to deploy this complete multi-system stack?",
    answer:
      "A complete multi-platform deployment—connecting Retell AI voice intake, Monday.com validation boards, Lead Docket qualification rules, Filevine project creation, and automated contract dispatch—typically takes 3 to 4 weeks from technical audit to live production cutover, with 30 days of included monitoring.",
  },
];

export default function EmploymentLawAutomationPage() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.crmintegrationspecialist.com/employment-law-automation#service",
    name: "Employment Law Firm Intake Automation & Multi-System CRM Bridges",
    serviceType: "Legal Tech & Voice AI Integration",
    provider: {
      "@type": "Organization",
      name: "CRM Integration Specialists",
      url: "https://www.crmintegrationspecialist.com",
    },
    description:
      "Autonomous Retell AI voice intake, 40-question triage, Lead Docket to Filevine bi-directional sync, automated Vinesign retainer dispatch, and Monday.com half-lead rescue for employment law firms.",
    areaServed: [
      { "@type": "Country", "name": "United States" },
      { "@type": "Country", "name": "Canada" },
      { "@type": "Place", "name": "Global / Remote" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Employment Law Automation Solutions",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Lead Docket to Filevine Bi-Directional Pipeline Bridge",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "40-Question Retell AI Voice Intake Triage Engine",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Monday.com Half-Lead Drop-Off Rescue System",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Automated Filevine Retainer Agreement Dispatch",
          },
        },
      ],
    },
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.crmintegrationspecialist.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Employment Law Automation",
        item: "https://www.crmintegrationspecialist.com/employment-law-automation",
      },
    ],
  };

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#020617] text-text font-body selection:bg-cyan selection:text-slate-950">
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }}
      />

      <Navbar />

      {/* =========================================================
          1. HERO SECTION
      ========================================================= */}
      <section className="relative px-4 pb-20 pt-36 text-center sm:pt-44 overflow-hidden">
        {/* Background glow effects matching Midnight Slate & Indigo/Cyan accents */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-1/3 h-[450px] w-[1300px] -translate-x-1/2 -translate-y-1/2 bg-radial from-indigo-500/20 via-cyan/10 to-transparent blur-3xl" />
          <div className="absolute right-1/4 top-1/2 h-80 w-80 rounded-full bg-indigo-600/10 blur-[120px]" />
          <div className="absolute left-1/4 bottom-10 h-80 w-80 rounded-full bg-cyan/10 blur-[120px]" />
          <div className="absolute inset-0 grid-fade opacity-50" />
        </div>

        <div className="mx-auto max-w-5xl">
          {/* Badge */}
          <div className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-indigo-500/40 bg-indigo-500/10 px-4 py-1.5 shadow-[0_0_24px_-4px_rgba(99,102,241,0.35)]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-indigo-400"></span>
            </span>
            <span className="eyebrow text-indigo-400 font-semibold tracking-wider">
              Advanced Legal Tech & Voice AI Infrastructure
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-balance font-display text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Scaling Employment Law Firms Through{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-cyan to-indigo-300 bg-clip-text text-transparent">
              Autonomous Voice Intake
            </span>{" "}
            & Complex Filevine-Lead Docket Bridges
          </h1>

          {/* Subheadline */}
          <p className="mx-auto mt-6 max-w-3xl text-balance text-base leading-relaxed text-slate-300 sm:text-lg">
            Never lose an employment dispute lead again. We engineer bi-directional workflows
            connecting Lead Docket to Filevine, automated document/contract dispatches, and
            intelligent Retell AI voice intake that handles 40+ complex triage questions without
            dropping prospects.
          </p>

          {/* CTAs */}
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 rounded-xl bg-white px-7 py-4 text-sm font-semibold text-slate-950 transition-all hover:scale-[1.03] active:scale-[0.98] shadow-lg shadow-indigo-500/15"
            >
              Book a Technical Strategy Call
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#pipeline"
              className="rounded-xl border border-slate-700 bg-slate-900/80 px-6 py-4 text-sm font-semibold text-white transition-colors hover:border-cyan/50 hover:text-cyan"
            >
              Explore the Intake Architecture
            </a>
          </div>

          {/* Quick Stats Pill Strip */}
          <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-4 max-w-4xl mx-auto">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 backdrop-blur">
              <div className="text-xl sm:text-2xl font-bold font-display text-cyan">40 Questions</div>
              <div className="text-xs text-slate-400 mt-1">Autonomous Voice Triage</div>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 backdrop-blur">
              <div className="text-xl sm:text-2xl font-bold font-display text-indigo-400">0% Lost</div>
              <div className="text-xs text-slate-400 mt-1">Half-Lead Rescue Engine</div>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 backdrop-blur">
              <div className="text-xl sm:text-2xl font-bold font-display text-live">&lt; 380ms</div>
              <div className="text-xs text-slate-400 mt-1">Lead Docket ➔ Filevine Sync</div>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 backdrop-blur">
              <div className="text-xl sm:text-2xl font-bold font-display text-brass">1-Click</div>
              <div className="text-xs text-slate-400 mt-1">Vinesign Retainer Dispatch</div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          2. THE "LEAD DOCKET TO FILEVINE" & CONTRACT BRIDGE
      ========================================================= */}
      <section id="pipeline" className="relative border-t border-slate-800 px-4 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow text-cyan">Multi-CRM Mastery</span>
            <h2 className="mt-2 text-balance font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              The Lead Docket ➔ Filevine & Contract Bridge
            </h2>
            <p className="mt-3 text-sm text-slate-300 sm:text-base leading-relaxed">
              Most legal software vendors promise integrations, but leave intake coordinators copying
              and pasting between tabs. We engineer a true bi-directional synchronization bridge that
              passes qualified employment claims and executes contingent fee retainers automatically.
            </p>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            {/* Lead Docket ➔ Filevine Data Pipeline Card */}
            <article className="rounded-3xl border border-slate-800 bg-[#0F172A]/80 p-7 sm:p-8 backdrop-blur shadow-xl relative flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-400">
                      <Layers size={20} />
                    </span>
                    <div>
                      <span className="eyebrow text-indigo-400">Data Pipeline</span>
                      <h3 className="font-display text-lg font-semibold text-white">
                        Lead Docket ➔ Filevine Hand-Off
                      </h3>
                    </div>
                  </div>
                  <span className="rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 font-mono text-[11px] text-indigo-300 font-medium">
                    Auto-Triggered on Qualification
                  </span>
                </div>

                <p className="mt-5 text-sm text-slate-300 leading-relaxed">
                  The exact microsecond a lead status turns to "Qualified" in Lead Docket, our
                  middleware invokes Filevine API v2 to provision a new matter with zero human
                  intervention.
                </p>

                <ul className="mt-5 space-y-3">
                  <li className="flex items-start gap-2.5 text-xs text-slate-200">
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-cyan" />
                    <span>
                      <strong className="text-white">60+ Field Deep Mapping:</strong> Claimant
                      demographics, hire/fire dates, adverse action, corporate employer entity, annual
                      base compensation, and EEOC Right-to-Sue numbers.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs text-slate-200">
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-cyan" />
                    <span>
                      <strong className="text-white">Idempotent Deduplication:</strong> Cryptographic
                      payload hash and email/phone matching preventing accidental double-booking of cases.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs text-slate-200">
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-cyan" />
                    <span>
                      <strong className="text-white">Bi-Directional Status Sync:</strong> Writes the
                      Filevine Project ID and matter link back into Lead Docket so intake reps remain
                      synced.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Code preview snippet */}
              <div className="mt-6 rounded-2xl border border-slate-800 bg-[#020617] p-4 font-mono text-xs text-slate-300">
                <div className="text-[10px] text-indigo-400 uppercase tracking-wider mb-2 font-bold">
                  Filevine Project Creation Payload
                </div>
                <div className="space-y-1 text-[11px]">
                  <div>
                    <span className="text-slate-500">POST</span> /api/v2/projects
                  </div>
                  <div className="text-cyan">
                    &#123; "template": "Employment_Litigation", "phase": "Intake_Review" &#125;
                  </div>
                </div>
              </div>
            </article>

            {/* Automated Contract Dispatch Card */}
            <article className="rounded-3xl border border-slate-800 bg-[#0F172A]/80 p-7 sm:p-8 backdrop-blur shadow-xl relative flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-live/10 text-live">
                      <FileCheck size={20} />
                    </span>
                    <div>
                      <span className="eyebrow text-live">Contract Engine</span>
                      <h3 className="font-display text-lg font-semibold text-white">
                        Automated Vinesign Contract Dispatch
                      </h3>
                    </div>
                  </div>
                  <span className="rounded-full border border-live/30 bg-live/10 px-3 py-1 font-mono text-[11px] text-live font-medium">
                    1-Click Retainer Generation
                  </span>
                </div>

                <p className="mt-5 text-sm text-slate-300 leading-relaxed">
                  High-value employment claims leak when retainer delivery is delayed. Our engine
                  automatically generates and triggers customized contingency fee agreements directly out
                  of Filevine upon intake approval.
                </p>

                <ul className="mt-5 space-y-3">
                  <li className="flex items-start gap-2.5 text-xs text-slate-200">
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-live" />
                    <span>
                      <strong className="text-white">Dynamic Fee Tiering:</strong> Pre-populates
                      contingency rates (e.g., 33.3% pre-suit / 40% post-complaint) based on claim
                      classification (Wage & Hour Class Action vs. Single-Plaintiff FEHA).
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs text-slate-200">
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-live" />
                    <span>
                      <strong className="text-white">Multi-Channel Delivery:</strong> Dispatches
                      signature links simultaneously via SMS and email with automated 24h reminders.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs text-slate-200">
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-live" />
                    <span>
                      <strong className="text-white">Signed Webhook Listener:</strong> Upon e-sign,
                      the executed PDF automatically files into Filevine Docs and advances the matter to
                      "Active Case - Demand Stage".
                    </span>
                  </li>
                </ul>
              </div>

              {/* Code preview snippet */}
              <div className="mt-6 rounded-2xl border border-slate-800 bg-[#020617] p-4 font-mono text-xs text-slate-300">
                <div className="text-[10px] text-live uppercase tracking-wider mb-2 font-bold">
                  Vinesign Execution Webhook
                </div>
                <div className="space-y-1 text-[11px]">
                  <div>
                    <span className="text-slate-500">EVENT</span> vinesign.contract.executed
                  </div>
                  <div className="text-live">
                    &#123; "status": "SIGNED", "filevine_phase": "Demand_Stage", "doc_archived": true &#125;
                  </div>
                </div>
              </div>
            </article>
          </div>

          {/* Interactive Stack Visualizer Component */}
          <div className="mt-14">
            <EmploymentStackVisualizer />
          </div>
        </div>
      </section>

      {/* =========================================================
          3. THE 40-QUESTION VOICE AGENT & "ZERO-DISQUALIFICATION" FALLBACK ENGINE
      ========================================================= */}
      <section className="relative border-t border-slate-800 px-4 py-24 bg-[#0B0F14]/60">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center mb-14">
            <span className="eyebrow text-indigo-400">Voice AI & Drop-Off Rescue</span>
            <h2 className="mt-2 text-balance font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              The 40-Question Voice Agent & "Zero-Disqualification" Engine
            </h2>
            <p className="mt-3 text-sm text-slate-300 sm:text-base leading-relaxed">
              Employment law claims cannot be screened with a quick 3-question form. From statute of
              limitations and employer size to protected whistleblowing, our voice agent navigates the
              entire 40-question checklist—and rescues any caller who hangs up halfway.
            </p>
          </div>

          {/* Interactive Simulator */}
          <EmploymentVoiceSimulator />

          {/* Deep Explanation Grid */}
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400">
                <PhoneCall size={20} />
              </div>
              <h3 className="mt-4 font-display text-base font-semibold text-white">
                The 40-Question Triage
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-400">
                Retell AI dynamically adapts question flow based on caller responses. If harassment is
                detected, it branches to Title VII/FEHA criteria; if wage issues are reported, it pivots
                to meal break and misclassification audits.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/10 text-amber-400">
                <Zap size={20} />
              </div>
              <h3 className="mt-4 font-display text-base font-semibold text-white">
                Half-Lead Rescue Engine
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-400">
                When callers disconnect at question 18, our system saves a checkpoint in Monday.com and
                instantly texts an encrypted WorkForm link. The claimant finishes on their smartphone
                later that evening, preserving the retainer.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-live/10 text-live">
                <ShieldCheck size={20} />
              </div>
              <h3 className="mt-4 font-display text-base font-semibold text-white">
                Zero Lead Disqualification
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-400">
                Every single caller is captured, transcribed, and scored. Non-qualifying matters are
                automatically routed to your referral partner network or issued respectful declination
                notices with statute warnings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          4. MONDAY.COM FIELD VALIDATION & DATA INTEGRITY
      ========================================================= */}
      <section className="relative border-t border-slate-800 px-4 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-12 items-center">
            {/* Left Content (6 Cols) */}
            <div className="lg:col-span-6">
              <span className="eyebrow text-cyan">Data Architecture & Trust</span>
              <h2 className="mt-2 text-balance font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Monday.com Field Validation & GraphQL Data Integrity
              </h2>
              <p className="mt-4 text-sm text-slate-300 leading-relaxed">
                Monday.com is an incredible visual dashboard for managing partners, but its GraphQL
                API rejects payloads the second an enum label or column format mismatches. Our custom
                middleware guarantees zero failed syncs through proactive schema validation.
              </p>

              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-3 rounded-2xl border border-slate-800 bg-slate-900/50 p-4">
                  <ShieldCheck size={18} className="mt-0.5 shrink-0 text-cyan" />
                  <div>
                    <h3 className="text-xs font-semibold text-white uppercase tracking-wider">
                      Strict Column Payload Casting
                    </h3>
                    <p className="mt-1 text-xs text-slate-400 leading-relaxed">
                      Every incoming field from Retell AI or Lead Docket is validated against your
                      board’s column schema. Numeric damages, enum status labels, multi-select tags,
                      and ISO date stamps are cast with zero GraphQL exceptions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-2xl border border-slate-800 bg-slate-900/50 p-4">
                  <Workflow size={18} className="mt-0.5 shrink-0 text-indigo-400" />
                  <div>
                    <h3 className="text-xs font-semibold text-white uppercase tracking-wider">
                      Dead-Letter Retry Queues (DLQ)
                    </h3>
                    <p className="mt-1 text-xs text-slate-400 leading-relaxed">
                      If Monday.com experiences downstream downtime or API maintenance, requests enter
                      an exponential backoff queue (1m, 5m, 15m, 1h). Not a single webhook is dropped.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-2xl border border-slate-800 bg-slate-900/50 p-4">
                  <Database size={18} className="mt-0.5 shrink-0 text-live" />
                  <div>
                    <h3 className="text-xs font-semibold text-white uppercase tracking-wider">
                      Audit-Logged Automation Runs
                    </h3>
                    <p className="mt-1 text-xs text-slate-400 leading-relaxed">
                      Every payload transformation is timestamped with SHA-256 idempotency keys and
                      logged into our secure monitoring dashboard for 100% compliance auditing.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Architecture Blueprint Card (6 Cols) */}
            <div className="lg:col-span-6 rounded-3xl border border-cyan/30 bg-[#0F172A]/90 p-6 sm:p-8 backdrop-blur shadow-2xl relative">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <span className="eyebrow text-cyan">Monday.com GraphQL Middleware Guard</span>
                <span className="font-mono text-xs text-live font-semibold flex items-center gap-1">
                  <ShieldCheck size={13} /> Active Validation Engine
                </span>
              </div>

              {/* Code Payload Simulation */}
              <div className="mt-5 rounded-2xl border border-slate-800 bg-[#020617] p-5 font-mono text-xs leading-relaxed space-y-3">
                <div className="text-slate-500">// 1. Schema Validation Pre-Flight</div>
                <div className="text-slate-300">
                  <span className="text-indigo-400">validateMondayPayload</span>(incomingData, &#123;
                  <br />
                  &nbsp;&nbsp;claimant_salary: <span className="text-cyan">Types.Currency(USD)</span>,
                  <br />
                  &nbsp;&nbsp;employer_size: <span className="text-cyan">Types.Enum("50_PLUS")</span>,
                  <br />
                  &nbsp;&nbsp;statute_expiry: <span className="text-cyan">Types.ISODate()</span>,
                  <br />
                  &nbsp;&nbsp;triage_status: <span className="text-cyan">Types.StatusLabel("Half-Lead")</span>
                  <br />
                  &#125;);
                </div>

                <div className="text-slate-500 pt-2 border-t border-slate-800">
                  // 2. Safe GraphQL Mutation Execution
                </div>
                <div className="text-slate-300">
                  <span className="text-live">mutation</span> &#123;
                  <br />
                  &nbsp;&nbsp;change_multiple_column_values(
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;board_id: <span className="text-amber-400">8472910482</span>,
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;item_id: <span className="text-amber-400">92810394</span>,
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;column_values: <span className="text-cyan">"&#123;...validated_json&#125;"</span>
                  <br />
                  &nbsp;&nbsp;) &#123; id &#125;
                  <br />
                  &#125;
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between text-xs text-slate-400 pt-3 border-t border-slate-800">
                <span>Schema Mismatches Prevented: 100%</span>
                <span className="text-cyan font-mono font-semibold">0% Silent Dropped Leads</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          5. ROI & PRACTICE GROWTH METRICS
      ========================================================= */}
      <section className="relative border-t border-slate-800 px-4 py-24 bg-gradient-to-b from-[#0F172A]/70 via-[#0B0F14] to-[#020617]">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow text-brass">Measurable Practice Value</span>
            <h2 className="mt-2 text-balance font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Turn Missed Calls into Signed Retainers
            </h2>
            <p className="mt-3 text-sm text-slate-300 sm:text-base leading-relaxed">
              Employment litigation cases yield substantial contingency settlements ($75k to $500k+).
              Eliminating intake leakage pays for the entire automation infrastructure in the first 30 days.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur">
              <div className="flex items-center justify-between text-brass">
                <span className="eyebrow text-brass">Retainer Velocity</span>
                <Clock size={18} />
              </div>
              <div className="mt-4 font-display text-3xl sm:text-4xl font-bold text-white">4.2x</div>
              <div className="mt-1 text-xs font-semibold text-slate-200">Faster Retainer Turnaround</div>
              <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                From initial voice intake to signed contingent retainer in 28 minutes instead of 3–5 days.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur">
              <div className="flex items-center justify-between text-live">
                <span className="eyebrow text-live">Recovered Revenue</span>
                <DollarSign size={18} />
              </div>
              <div className="mt-4 font-display text-3xl sm:text-4xl font-bold text-white">$320k+</div>
              <div className="mt-1 text-xs font-semibold text-slate-200">Monthly Rescued Pipeline</div>
              <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                Rescuing 12–18 high-value half-leads per month that previously hung up during long phone triage.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur">
              <div className="flex items-center justify-between text-cyan">
                <span className="eyebrow text-cyan">Data Fidelity</span>
                <ShieldCheck size={18} />
              </div>
              <div className="mt-4 font-display text-3xl sm:text-4xl font-bold text-white">100%</div>
              <div className="mt-1 text-xs font-semibold text-slate-200">Zero Transcription Error</div>
              <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                Direct sync from voice transcripts to Monday.com, Lead Docket, and Filevine without copy-paste.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur">
              <div className="flex items-center justify-between text-indigo-400">
                <span className="eyebrow text-indigo-400">Paralegal Overhead</span>
                <TrendingUp size={18} />
              </div>
              <div className="mt-4 font-display text-3xl sm:text-4xl font-bold text-white">0 Hrs</div>
              <div className="mt-1 text-xs font-semibold text-slate-200">Manual Intake Phone-Tag</div>
              <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                Paralegals freed from 25+ hours/week of repetitive screening calls to focus on active litigation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          6. TECHNICAL STACK LOGOS / GRID
      ========================================================= */}
      <section className="relative border-t border-slate-800 px-4 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow text-cyan">Underlying Legal Tech Stack</span>
            <h2 className="mt-2 text-balance font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Engineered Across Industry-Standard Platforms
            </h2>
            <p className="mt-3 text-sm text-slate-300 sm:text-base leading-relaxed">
              We do not force you into proprietary walled gardens. We engineer custom API connectors
              across the exact legal and enterprise tools your firm already relies on.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Retell AI */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 hover:border-indigo-500/40 transition-colors">
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-white">Retell AI</span>
                <span className="eyebrow text-indigo-400 border border-indigo-500/30 bg-indigo-500/10 px-2 py-0.5 rounded text-[10px]">
                  Voice AI
                </span>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-slate-400">
                Sub-800ms speech-to-speech conversational AI agents with dynamic prompt branching,
                sentiment analysis, and live custom function calling.
              </p>
            </div>

            {/* Lead Docket */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 hover:border-cyan/40 transition-colors">
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-white">Lead Docket</span>
                <span className="eyebrow text-cyan border border-cyan/30 bg-cyan/10 px-2 py-0.5 rounded text-[10px]">
                  Intake OS
                </span>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-slate-400">
                Automated employment lead capture, opportunity scoring, conflict checks, and instant
                matter promotion triggering Filevine project creation.
              </p>
            </div>

            {/* Filevine */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 hover:border-live/40 transition-colors">
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-white">Filevine & Vinesign</span>
                <span className="eyebrow text-live border border-live/30 bg-live/10 px-2 py-0.5 rounded text-[10px]">
                  Case Management
                </span>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-slate-400">
                Automated case provisioning via Filevine API v2, custom phase progression, document
                categorization, and automated Vinesign retainer dispatch.
              </p>
            </div>

            {/* Monday.com */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 hover:border-brass/40 transition-colors">
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-white">Monday.com</span>
                <span className="eyebrow text-brass border border-brass/30 bg-brass/10 px-2 py-0.5 rounded text-[10px]">
                  Work OS & Forms
                </span>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-slate-400">
                Strict GraphQL schema validation, visual managing partner dashboards, half-lead
                drop-off tracking, and mobile WorkForms.
              </p>
            </div>

            {/* GoHighLevel */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 hover:border-cyan/40 transition-colors">
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-white">GoHighLevel (GHL)</span>
                <span className="eyebrow text-cyan border border-cyan/30 bg-cyan/10 px-2 py-0.5 rounded text-[10px]">
                  Multi-Channel Nurture
                </span>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-slate-400">
                Automated high-deliverability SMS alerts, follow-up drip sequences for unsigned retainers,
                and calendar scheduling webhooks.
              </p>
            </div>

            {/* Node.js / n8n Middleware */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 hover:border-indigo-500/40 transition-colors">
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-white">Node.js & n8n Middleware</span>
                <span className="eyebrow text-indigo-400 border border-indigo-500/30 bg-indigo-500/10 px-2 py-0.5 rounded text-[10px]">
                  Integration Core
                </span>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-slate-400">
                Sub-380ms event bridges, HMAC signature authentication, Redis dead-letter queues, and
                encrypted REST/GraphQL bi-directional transformations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          7. FAQ SECTION
      ========================================================= */}
      <FAQ
        items={employmentFaqs}
        title="Frequently Asked Questions: Employment Law Intake Automation"
        eyebrow="Technical Clarity"
      />

      {/* =========================================================
          8. BOOKING SECTION & CALL TO ACTION
      ========================================================= */}
      <BookingSection />

      <Footer />
    </main>
  );
}
