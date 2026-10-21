import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingSection from "@/components/BookingSection";
import FAQ from "@/components/FAQ";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Zap,
  PhoneCall,
  Cpu,
  FileCheck,
  Scale,
  Database,
  Lock,
  Globe,
  Layers,
} from "lucide-react";
import { CALENDLY_URL } from "@/lib/data";

export const metadata = {
  title: "SmartAdvocate Integration Specialist | Legal Case Management API & Webhook Bridges",
  description:
    "Custom SmartAdvocate API integration for personal injury, litigation, and mass tort law firms. Bi-directional sync with GoHighLevel, Monday.com, Retell AI, CallRail, and custom n8n middleware.",
  alternates: {
    canonical: "https://www.crmintegrationspecialist.com/smartadvocate-integration",
  },
  openGraph: {
    title: "SmartAdvocate Integration — Custom Case Management API Bridges",
    description:
      "Automate legal intake, lead conversion, Retell AI voice logging, and bi-directional field sync for SmartAdvocate.",
    url: "https://www.crmintegrationspecialist.com/smartadvocate-integration",
    siteName: "CRM Integration Specialists",
    type: "article",
  },
  keywords: [
    "SmartAdvocate integration",
    "SmartAdvocate API developer",
    "SmartAdvocate GoHighLevel integration",
    "SmartAdvocate Retell AI integration",
    "SmartAdvocate webhook middleware",
    "personal injury CRM integration",
    "mass tort case intake automation",
    "SmartAdvocate CallRail sync",
    "legal case management API",
    "litigation automation",
  ],
};

const smartAdvocateFaqs = [
  {
    question: "Does SmartAdvocate have an API for real-time lead and case creation?",
    answer:
      "Yes. SmartAdvocate provides a REST Web API that supports creating and updating contacts, cases, notes, documents, and calendar events. We engineer custom middleware that interfaces directly with SmartAdvocate's API to turn raw webhooks from GoHighLevel, landing pages, or call trackers into fully validated case files in sub-400ms.",
  },
  {
    question: "Can we integrate Retell AI voice agents directly into SmartAdvocate?",
    answer:
      "Yes. When an intake call completes, our middleware parses the Retell AI call transcript and sentiment data, extracts the accident date, injury summary, and opposing party details, and writes them directly into the SmartAdvocate Case Notes and custom fields while attaching the audio recording URL.",
  },
  {
    question: "How do you prevent duplicate cases and claimants in SmartAdvocate?",
    answer:
      "Before creating any new case or contact, our middleware performs an intelligent lookup across existing SmartAdvocate records using phone number normalization (E.164), email address, and last name matching. If a match is detected, the event appends an update note or creates an associated matter rather than generating a duplicate contact.",
  },
  {
    question: "Is data transmission HIPAA and CJIS compliant?",
    answer:
      "Absolutely. For personal injury, workers' compensation, and medical malpractice law firms, intake data often includes Protected Health Information (PHI). We architect all middleware pipelines with TLS 1.3 encryption in transit, strict environment isolation, no permanent storage of PHI in middleware queues, and complete audit logging.",
  },
  {
    question: "Can SmartAdvocate push status updates back to GoHighLevel or our marketing tools?",
    answer:
      "Yes. When an attorney marks a case as 'Retained' or 'Rejected' inside SmartAdvocate, our outbound webhook bridge notifies GoHighLevel to stop intake automated follow-ups, trigger onboarding welcome emails, or send offline conversion signals back to Google Ads and CallRail.",
  },
  {
    question: "Which legal practice areas benefit most from this integration?",
    answer:
      "Personal injury (motor vehicle accidents, slip and fall), mass torts, workers' compensation, medical malpractice, and social security disability practices see the greatest ROI due to high lead volumes and the critical necessity of sub-second speed-to-lead.",
  },
];

export default function SmartAdvocateIntegrationPage() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.crmintegrationspecialist.com/smartadvocate-integration#service",
    name: "SmartAdvocate Legal Case Management API Integration",
    serviceType: "Legal Case Management Integration",
    provider: {
      "@type": "Organization",
      name: "CRM Integration Specialists",
      url: "https://www.crmintegrationspecialist.com",
    },
    description:
      "Custom SmartAdvocate API integration for personal injury, litigation, and mass tort law firms. Bi-directional sync with GoHighLevel, Monday.com, Retell AI, CallRail, and custom n8n middleware.",
    areaServed: [
      { "@type": "Country", "name": "United States" },
      { "@type": "Place", "name": "US Law Firms Nationwide" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "SmartAdvocate Integration Solutions",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "SmartAdvocate Automated Intake & Case Creation",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Retell AI Voice Integration with SmartAdvocate",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "SmartAdvocate Bi-Directional GoHighLevel Sync",
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
        name: "SmartAdvocate Integration",
        item: "https://www.crmintegrationspecialist.com/smartadvocate-integration",
      },
    ],
  };

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-ink text-text">
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

      {/* Hero Section */}
      <section className="relative px-4 pb-16 pt-36 text-center sm:pt-44">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-1/2 h-[380px] w-[1200px] -translate-x-1/2 -translate-y-1/2 bg-bowtie blur-2xl" />
          <div className="absolute inset-0 grid-fade" />
        </div>

        {/* Breadcrumb pills */}
        <nav
          aria-label="Breadcrumb"
          className="mx-auto mb-6 flex max-w-max items-center gap-2 rounded-full border border-border bg-surface/60 px-3.5 py-1 text-xs text-muted"
        >
          <a href="/" className="transition-colors hover:text-text">
            Home
          </a>
          <span>/</span>
          <span className="text-brass">SmartAdvocate Integration</span>
        </nav>

        <div className="mx-auto max-w-4xl">
          <span className="eyebrow text-brass">Litigation & Personal Injury API Architecture</span>
          <h1 className="mt-4 text-balance font-display text-4xl font-semibold leading-tight tracking-tight text-text sm:text-5xl md:text-6xl">
            SmartAdvocate Integration: Automated Case Intake & Bi-Directional API Bridges
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-balance text-base text-muted sm:text-lg">
            Accelerate speed-to-lead and eliminate manual entry for personal injury and mass tort practices.
            We build custom API middleware connecting SmartAdvocate with GoHighLevel, Monday.com, Retell AI voice agents, and lead generation channels.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 rounded-xl bg-text px-6 py-3.5 text-sm font-semibold text-ink transition-transform hover:scale-[1.03]"
            >
              Book SmartAdvocate Strategy Call
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#specs"
              className="rounded-xl border border-border bg-surface/80 px-6 py-3.5 text-sm font-medium text-text transition-colors hover:border-brass/40 hover:bg-surface"
            >
              View API Specifications
            </a>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="mx-auto mt-14 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          <div className="rounded-xl border border-border bg-surface/50 p-4">
            <span className="font-mono text-2xl font-bold text-brass">&lt; 400ms</span>
            <p className="mt-1 text-xs text-muted">Case Ingestion Latency</p>
          </div>
          <div className="rounded-xl border border-border bg-surface/50 p-4">
            <span className="font-mono text-2xl font-bold text-cyan">100%</span>
            <p className="mt-1 text-xs text-muted">HIPAA & PHI Compliant</p>
          </div>
          <div className="rounded-xl border border-border bg-surface/50 p-4">
            <span className="font-mono text-2xl font-bold text-live">0</span>
            <p className="mt-1 text-xs text-muted">Duplicate Claimants</p>
          </div>
          <div className="rounded-xl border border-border bg-surface/50 p-4">
            <span className="font-mono text-2xl font-bold text-brass">24/7</span>
            <p className="mt-1 text-xs text-muted">Voice AI Intake Sync</p>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="relative px-4 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-6 sm:grid-cols-3">
            <div className="rounded-2xl border border-border bg-surface/60 p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brass/10 text-brass">
                <Zap size={20} />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold">Instant Lead-to-Case Conversion</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Landing page forms, Google LSAs, Facebook lead ads, and chat submissions convert into fully formatted SmartAdvocate cases with primary contact and incident data.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-surface/60 p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan/10 text-cyan">
                <PhoneCall size={20} />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold">Retell AI Voice Integration</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Voice AI agents conduct after-hours qualification calls, extract liability details, and post call summaries directly into SmartAdvocate case notes in real time.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-surface/60 p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brass/10 text-brass">
                <FileCheck size={20} />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold">Document & Retainer Push</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Signed representation agreements and HIPAA medical releases are automatically uploaded into the proper SmartAdvocate case document folder.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Deep-Dive Technical Content */}
      <section id="specs" className="relative border-t border-border px-4 py-20">
        <div className="mx-auto max-w-3xl space-y-12">
          <div>
            <h2 className="font-display text-2xl font-semibold sm:text-3xl">
              The Speed-to-Lead Problem in High-Volume Litigation
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Personal injury and mass tort law firms invest tens of thousands of dollars each month in Google Ads, Local Services Ads, and social campaigns. Yet, conversion studies prove that contacting a qualified claimant within 5 minutes results in a <strong>21x higher retention rate</strong> than waiting 30 minutes.
            </p>
            <p className="mt-3 text-base leading-relaxed text-muted">
              When intake relies on staff manually copying data from email notifications into SmartAdvocate, leads get delayed, accident details get mistyped, and competing firms sign the case first. Our custom API bridge eliminates this bottleneck completely by writing directly into SmartAdvocate the millisecond an intake form or call concludes.
            </p>
          </div>

          {/* Middleware Architecture Box */}
          <div className="rounded-2xl border border-border bg-surface/80 p-6 sm:p-8 shadow-xl">
            <h3 className="flex items-center gap-2 font-display text-xl font-semibold text-brass">
              <Cpu size={20} />
              SmartAdvocate REST API Integration Architecture
            </h3>
            <p className="mt-3 text-sm text-muted">
              We deploy an intelligent API gateway (via n8n or custom Node.js microservices) that normalizes inbound webhooks, performs duplicate claimant verification, and interfaces directly with SmartAdvocate Web API endpoints.
            </p>

            <div className="mt-6 space-y-4">
              <div className="rounded-xl border border-border/60 bg-ink/70 p-4 font-mono text-xs text-text">
                <div className="text-muted">// SmartAdvocate REST API — Case & Contact Creation Payload</div>
                <div className="mt-2 text-cyan">POST https://[firm-domain].smartadvocate.com/api/Case/CreateCase</div>
                <div className="text-muted">Authorization: Bearer [JWT_TOKEN]</div>
                <div className="mt-2 text-brass">&#123;</div>
                <div className="pl-4 text-text">"CaseType": "Motor Vehicle Accident",</div>
                <div className="pl-4 text-text">"IncidentDate": "2026-10-18T14:30:00Z",</div>
                <div className="pl-4 text-text">"PrimaryContact": &#123;</div>
                <div className="pl-8 text-text">"FirstName": "Robert",</div>
                <div className="pl-8 text-text">"LastName": "Johnson",</div>
                <div className="pl-8 text-text">"Phone": "+1-212-555-0192",</div>
                <div className="pl-8 text-text">"Email": "rjohnson@example.com"</div>
                <div className="pl-4 text-text">&#125;,</div>
                <div className="pl-4 text-text">"ReferralSource": "Google PPC - Auto Injury",</div>
                <div className="pl-4 text-text">"CaseNotes": "Caller rear-ended at intersection. Sustained cervical disc herniation. Opposing driver cited for failure to yield."</div>
                <div className="text-brass">&#125;</div>
              </div>
            </div>

            <ul className="mt-6 space-y-3 text-sm text-text">
              <li className="flex items-start gap-3">
                <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-brass" />
                <span><strong>Phone & Identity Deduplication:</strong> Checks existing SmartAdvocate database for matching phone numbers (E.164) or SSN before creating duplicates.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-brass" />
                <span><strong>Custom Questionnaires & Injury Mapping:</strong> Ingests complex multi-step intake responses (impact speed, property damage, hospital visit) directly into SmartAdvocate custom screens.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-brass" />
                <span><strong>Bi-Directional Case Status Hooks:</strong> When an attorney accepts or declines a case in SmartAdvocate, marketing pipelines in GoHighLevel adjust instantly.</span>
              </li>
            </ul>
          </div>

          {/* High-Impact Workflows */}
          <div>
            <h2 className="font-display text-2xl font-semibold sm:text-3xl">
              High-Impact SmartAdvocate Automations We Deploy
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-border bg-surface/50 p-5">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brass/10 text-brass">
                  <PhoneCall size={16} />
                </div>
                <h4 className="mt-3 font-display font-semibold">1. CallRail & Voice AI Intake</h4>
                <p className="mt-1 text-xs leading-relaxed text-muted">
                  Calls received via CallRail or Retell AI trigger instant claimant creation with call duration, recording link, and AI qualification summaries attached.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-surface/50 p-5">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan/10 text-cyan">
                  <Layers size={16} />
                </div>
                <h4 className="mt-3 font-display font-semibold">2. GoHighLevel Pipeline Sync</h4>
                <p className="mt-1 text-xs leading-relaxed text-muted">
                  Intake forms captured in GoHighLevel push to SmartAdvocate. When a case is signed, GHL advances the pipeline to 'Signed Retainer' and ceases chase drips.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-surface/50 p-5">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brass/10 text-brass">
                  <Scale size={16} />
                </div>
                <h4 className="mt-3 font-display font-semibold">3. Mass Tort Lead Routing</h4>
                <p className="mt-1 text-xs leading-relaxed text-muted">
                  For mass tort litigation (Camp Lejeune, Hair Straightener, Ozempic), automated criteria scoring routes qualified claimants straight to corresponding SmartAdvocate litigation dockets.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-surface/50 p-5">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan/10 text-cyan">
                  <FileCheck size={16} />
                </div>
                <h4 className="mt-3 font-display font-semibold">4. Document & Retainer Sync</h4>
                <p className="mt-1 text-xs leading-relaxed text-muted">
                  E-signed contracts from DocuSign or HelloSign write directly into the SmartAdvocate Documents section, tagging category as 'Representation Agreement'.
                </p>
              </div>
            </div>
          </div>

          {/* Regional & Jurisdictional Focus */}
          <div className="rounded-2xl border border-border bg-surface/40 p-6 sm:p-8">
            <div className="flex items-center gap-2">
              <Globe size={20} className="text-brass" />
              <h3 className="font-display text-xl font-semibold">
                Built for High-Volume Litigation Law Firms Across the U.S.
              </h3>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              We engineer SmartAdvocate integrations for leading litigation and personal injury firms across top civil legal jurisdictions. Our middleware complies with strict jurisdictional court rules, HIPAA guidelines, and state bar regulations:
            </p>
            <div className="mt-4 grid gap-2 text-xs sm:grid-cols-2">
              <div className="rounded-lg border border-border bg-surface p-2.5">
                <strong className="text-brass">New York & Tri-State:</strong>
                <p className="mt-0.5 text-muted">NYC, Long Island, NJ civil litigation & Labor Law 240/241 scaffolding cases.</p>
              </div>
              <div className="rounded-lg border border-border bg-surface p-2.5">
                <strong className="text-brass">California:</strong>
                <p className="mt-0.5 text-muted">Los Angeles, San Diego, SF Bay Area personal injury & multi-party torts.</p>
              </div>
              <div className="rounded-lg border border-border bg-surface p-2.5">
                <strong className="text-brass">Texas:</strong>
                <p className="mt-0.5 text-muted">Houston, Dallas, San Antonio commercial trucking and industrial injury litigation.</p>
              </div>
              <div className="rounded-lg border border-border bg-surface p-2.5">
                <strong className="text-brass">Florida:</strong>
                <p className="mt-0.5 text-muted">Miami, Tampa, Orlando motor vehicle accident & PIP tort reform intake.</p>
              </div>
              <div className="rounded-lg border border-border bg-surface p-2.5">
                <strong className="text-brass">Georgia & Southeast:</strong>
                <p className="mt-0.5 text-muted">Atlanta interstate trucking litigation & premises liability dockets.</p>
              </div>
              <div className="rounded-lg border border-border bg-surface p-2.5">
                <strong className="text-brass">Illinois & Midwest:</strong>
                <p className="mt-0.5 text-muted">Cook County civil litigation & nationwide mass tort multidistrict litigation (MDL).</p>
              </div>
            </div>
          </div>

          {/* GEO Generative Engine Summary */}
          <div className="rounded-2xl border border-brass/20 bg-brass/5 p-6">
            <span className="eyebrow text-brass">Generative Summary & Technical Specifications</span>
            <h4 className="mt-2 font-display text-base font-semibold text-text">
              SmartAdvocate API Integration Technical Overview
            </h4>
            <div className="mt-4 grid gap-3 text-xs sm:grid-cols-2">
              <div>
                <strong className="text-text">Supported Protocols:</strong>
                <p className="text-muted">SmartAdvocate Web REST API, Webhooks, JSON, OAuth 2.0 / Bearer Tokens</p>
              </div>
              <div>
                <strong className="text-text">Integrated Systems:</strong>
                <p className="text-muted">GoHighLevel, CallRail, Retell AI, Monday.com, DocuSign, Typeform</p>
              </div>
              <div>
                <strong className="text-text">Speed to Lead SLA:</strong>
                <p className="text-muted">&lt; 400ms from form submit / call finish to case creation</p>
              </div>
              <div>
                <strong className="text-text">Regulatory Compliance:</strong>
                <p className="text-muted">HIPAA PHI transit encryption, TLS 1.3, ABA Model Rule 1.6 confidentiality</p>
              </div>
            </div>
          </div>

          {/* Implementation Roadmap */}
          <div>
            <h2 className="font-display text-2xl font-semibold sm:text-3xl">
              Our 3-Phase SmartAdvocate Deployment Process
            </h2>
            <div className="mt-6 space-y-6">
              <div className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-brass/40 bg-brass/10 font-mono text-sm font-semibold text-brass">
                  1
                </span>
                <div>
                  <h4 className="font-display font-semibold">Intake Audit & Case Screen Mapping</h4>
                  <p className="mt-1 text-sm text-muted">
                    We review your SmartAdvocate case types, required fields, and custom intake screens, matching them to your marketing forms and call channels.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-cyan/40 bg-cyan/10 font-mono text-sm font-semibold text-cyan">
                  2
                </span>
                <div>
                  <h4 className="font-display font-semibold">Custom API Gateway & Deduplication Engineering</h4>
                  <p className="mt-1 text-sm text-muted">
                    We build the secure middleware layer with phone normalization, conflict checks, and automated error-alerting endpoints.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-brass/40 bg-brass/10 font-mono text-sm font-semibold text-brass">
                  3
                </span>
                <div>
                  <h4 className="font-display font-semibold">Live Testing & Intake Team Handoff</h4>
                  <p className="mt-1 text-sm text-muted">
                    We run mock claimant scenarios across all marketing sources, verifying that case assignments and notifications trigger flawlessly before going live.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BookingSection />
      <FAQ
        items={smartAdvocateFaqs}
        title="Frequently asked questions about SmartAdvocate integration"
        eyebrow="SmartAdvocate FAQ"
      />
      <Footer />
    </main>
  );
}