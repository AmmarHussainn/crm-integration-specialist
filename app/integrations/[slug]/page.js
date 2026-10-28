import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingSection from "@/components/BookingSection";
import FAQ from "@/components/FAQ";
import { ALL_CRMS, getCrmBySlug } from "@/lib/crmData";
import { CALENDLY_URL } from "@/lib/data";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Zap,
  PhoneCall,
  Layers,
  FileCheck,
  Database,
  Cpu,
  Workflow,
  Sparkles,
  Clock,
  Lock,
  ChevronRight,
  Share2,
} from "lucide-react";

export async function generateStaticParams() {
  return ALL_CRMS.map((crm) => ({
    slug: crm.slug,
  }));
}

export async function generateMetadata({ params }) {
  const crm = getCrmBySlug(params.slug);
  if (!crm) return {};

  const title = `Custom ${crm.name} Integration & Automation Services | Law Firm Workflows`;
  const description = `Seamlessly integrate ${crm.name} with custom APIs, GoHighLevel, n8n, and legal intake automation systems to streamline lead capture and case management.`;
  const canonicalUrl = `https://www.crmintegrationspecialist.com/integrations/${crm.slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: "CRM Integration Specialists",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default function CrmIntegrationPage({ params }) {
  const crm = getCrmBySlug(params.slug);
  if (!crm) {
    notFound();
  }

  // Structured Data (Service + Breadcrumbs)
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `https://www.crmintegrationspecialist.com/integrations/${crm.slug}#service`,
    name: `Custom ${crm.name} Integration & Automation Services`,
    serviceType: "Legal CRM Integration Specialist",
    provider: {
      "@type": "Organization",
      name: "CRM Integration Specialists",
      url: "https://www.crmintegrationspecialist.com",
    },
    description: `Seamlessly integrate ${crm.name} with custom APIs, GoHighLevel, n8n, and legal intake automation systems to streamline lead capture and case management.`,
    areaServed: [
      { "@type": "Country", "name": "United States" },
      { "@type": "Country", "name": "United Kingdom" },
      { "@type": "Country", "name": "Canada" },
      { "@type": "Place", "name": "Global / Remote" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${crm.name} Legal Integration Capabilities`,
      itemListElement: crm.capabilities.map((cap) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: cap.title,
          description: cap.desc,
        },
      })),
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
        name: "Legal CRM Directory",
        item: "https://www.crmintegrationspecialist.com/integrations",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: `${crm.name} Integration`,
        item: `https://www.crmintegrationspecialist.com/integrations/${crm.slug}`,
      },
    ],
  };

  // Supported tech stack badges
  const TECH_STACK = [
    {
      name: "n8n Middleware",
      role: "Workflow Orchestration",
      desc: `Custom webhook pipelines with dead-letter retry queues, signature verification, and automated ${crm.name} field transformations.`,
      icon: Cpu,
    },
    {
      name: "Retell AI Voice Agents",
      role: "Autonomous Call Intake",
      desc: `24/7 conversational voice agents that triage inquiries, query ${crm.name} records in real time, and log transcripts.`,
      icon: PhoneCall,
    },
    {
      name: "GoHighLevel (GHL)",
      role: "Marketing & SMS Nurture",
      desc: `Bi-directional sync aligning ${crm.name} matter stages with GHL multi-channel SMS, email follow-ups, and calendar booking.`,
      icon: Workflow,
    },
    {
      name: "Make & Zapier",
      role: "Low-Latency Event Relays",
      desc: `Enterprise webhook triggers connecting ${crm.name} with external databases, e-signature tools, and practice portals.`,
      icon: Zap,
    },
    {
      name: "GraphQL & REST APIs",
      role: "Direct API Architecture",
      desc: `Engineered with ${crm.apiType}, enforcing strict data validation, rate limit handling, and token refresh cycles.`,
      icon: Database,
    },
    {
      name: "E-Signature Gateways",
      role: "Retainer Automation",
      desc: `DocuSign, Vinesign, or LawPay triggers dispatched immediately upon ${crm.name} prospect qualification.`,
      icon: FileCheck,
    },
  ];

  // Other related CRMs for cross-linking
  const otherCrms = ALL_CRMS.filter((item) => item.slug !== crm.slug).slice(0, 3);

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

      {/* =========================================================
          1. HERO SECTION
      ========================================================= */}
      <section className="relative px-4 pb-16 pt-36 text-center sm:pt-44">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-1/2 h-[380px] w-[1200px] -translate-x-1/2 -translate-y-1/2 bg-bowtie blur-2xl" />
          <div className="absolute inset-0 grid-fade" />
        </div>

        {/* Breadcrumb Navigation */}
        <nav
          aria-label="Breadcrumb"
          className="mx-auto mb-6 flex max-w-max items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-1.5 text-xs text-muted"
        >
          <a href="/" className="transition-colors hover:text-text">
            Home
          </a>
          <span>/</span>
          <a href="/integrations" className="transition-colors hover:text-text">
            Integrations
          </a>
          <span>/</span>
          <span className="text-cyan font-medium">{crm.name}</span>
        </nav>

        <div className="mx-auto max-w-4xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan/40 bg-cyan/10 px-3.5 py-1 text-xs font-mono text-cyan">
            <Sparkles size={13} />
            <span>{crm.category} · Integration Architecture</span>
          </div>

          <h1 className="mt-4 text-balance font-display text-4xl font-semibold leading-tight tracking-tight text-text sm:text-5xl md:text-6xl">
            Custom {crm.name} Integration & Automation for Law Firms
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-balance text-base leading-relaxed text-muted sm:text-lg">
            {crm.description}
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 rounded-xl bg-text px-6 py-3.5 text-sm font-semibold text-ink transition-transform hover:scale-[1.03] active:scale-[0.98]"
            >
              Book a Technical Consultation
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#capabilities"
              className="rounded-xl border border-border bg-surface/80 px-6 py-3.5 text-sm font-medium text-text transition-colors hover:border-cyan/40 hover:bg-surface"
            >
              Explore Capabilities
            </a>
          </div>

          {/* Metrics Grid */}
          <div className="mx-auto mt-14 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
            <div className="rounded-xl border border-border bg-surface/50 p-4">
              <span className="font-mono text-2xl font-bold text-cyan">{crm.stats.latency}</span>
              <p className="mt-1 text-xs text-muted">API Ingestion Latency</p>
            </div>
            <div className="rounded-xl border border-border bg-surface/50 p-4">
              <span className="font-mono text-2xl font-bold text-live">{crm.stats.fidelity}</span>
              <p className="mt-1 text-xs text-muted">Field Mapping Fidelity</p>
            </div>
            <div className="rounded-xl border border-border bg-surface/50 p-4">
              <span className="font-mono text-2xl font-bold text-brass">{crm.stats.duplicateRate}</span>
              <p className="mt-1 text-xs text-muted">Duplicate Records</p>
            </div>
            <div className="rounded-xl border border-border bg-surface/50 p-4">
              <span className="font-mono text-2xl font-bold text-cyan">{crm.stats.uptime}</span>
              <p className="mt-1 text-xs text-muted">Webhook Reliability</p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          2. KEY CAPABILITIES GRID
      ========================================================= */}
      <section id="capabilities" className="relative border-t border-border px-4 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <span className="eyebrow text-cyan">Core Architecture</span>
            <h2 className="mt-3 text-balance font-display text-3xl font-semibold tracking-tight text-text sm:text-4xl">
              Key Integration Capabilities for {crm.name}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm text-muted sm:text-base leading-relaxed">
              Eliminate manual copy-paste between marketing tools, intake channels, and {crm.name}.
              Our custom API middleware automates the entire client lifecycle.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2">
            {crm.capabilities.map((cap, idx) => (
              <div
                key={cap.title}
                className="group relative flex flex-col justify-between rounded-2xl border border-border bg-surface/60 p-6 sm:p-7 backdrop-blur transition-all hover:border-cyan/40 hover:bg-surface/90"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan/30 bg-cyan/10 text-cyan">
                      {idx === 0 && <Zap size={22} />}
                      {idx === 1 && <Layers size={22} />}
                      {idx === 2 && <PhoneCall size={22} />}
                      {idx === 3 && <FileCheck size={22} />}
                    </span>
                    <span className="font-mono text-xs font-semibold text-brass">
                      Capability 0{idx + 1}
                    </span>
                  </div>

                  <h3 className="mt-5 font-display text-xl font-semibold leading-snug text-text">
                    {cap.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-muted">{cap.desc}</p>
                </div>

                <div className="mt-6 flex items-center gap-2 text-xs font-semibold text-cyan">
                  <CheckCircle2 size={14} />
                  <span>Production-Ready & Fully Monitored</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          3. HOW IT WORKS / PIPELINE ARCHITECTURE
      ========================================================= */}
      <section className="relative border-t border-border px-4 py-24 bg-surface/30">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <span className="eyebrow text-brass">4-Stage Pipeline</span>
            <h2 className="mt-3 text-balance font-display text-3xl font-semibold tracking-tight text-text sm:text-4xl">
              How the {crm.name} Automation Pipeline Operates
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm text-muted sm:text-base leading-relaxed">
              A high-availability middleware pipeline engineered with sub-380ms response times and
              SHA-256 deduplication.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-border bg-surface/60 p-5">
              <span className="font-mono text-xs font-bold text-cyan">STAGE 01</span>
              <h3 className="mt-2 text-base font-semibold text-text">Lead Ingestion</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted">
                Captures web inquiries, Google LSAs, and Retell AI voice calls within 60ms of receipt.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-surface/60 p-5">
              <span className="font-mono text-xs font-bold text-brass">STAGE 02</span>
              <h3 className="mt-2 text-base font-semibold text-text">Payload Validation</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted">
                Normalizes phone numbers to E.164, hashes emails, and runs conflict checks to prevent duplicates.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-surface/60 p-5">
              <span className="font-mono text-xs font-bold text-cyan">STAGE 03</span>
              <h3 className="mt-2 text-base font-semibold text-text">{crm.name} Sync</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted">
                Invokes {crm.apiType} to create or update matters with 100% custom field accuracy.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-surface/60 p-5">
              <span className="font-mono text-xs font-bold text-live">STAGE 04</span>
              <h3 className="mt-2 text-base font-semibold text-text">Multi-Channel Relay</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted">
                Notifies on-call attorneys via Slack/Teams and triggers automated client SMS confirmation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          4. SUPPORTED TECH STACK BADGES
      ========================================================= */}
      <section className="relative border-t border-border px-4 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <span className="eyebrow text-cyan">Integration Ecosystem</span>
            <h2 className="mt-3 text-balance font-display text-3xl font-semibold tracking-tight text-text sm:text-4xl">
              Supported Tech Stack for {crm.name}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm text-muted sm:text-base leading-relaxed">
              We connect {crm.name} with industry-leading automation middleware, voice AI engines, and marketing systems.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {TECH_STACK.map((tech) => {
              const Icon = tech.icon;
              return (
                <div
                  key={tech.name}
                  className="rounded-2xl border border-border bg-surface/60 p-6 transition-all hover:border-cyan/40 hover:bg-surface/90"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan/10 text-cyan">
                      <Icon size={20} />
                    </span>
                    <span className="font-mono text-[10px] text-brass uppercase border border-brass/25 px-2 py-0.5 rounded">
                      {tech.role}
                    </span>
                  </div>

                  <h3 className="mt-4 font-display text-lg font-semibold text-text">
                    {tech.name}
                  </h3>

                  <p className="mt-2 text-xs leading-relaxed text-muted">{tech.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          5. FAQ ACCORDION SECTION
      ========================================================= */}
      <FAQ
        items={crm.faqs}
        title={`Frequently Asked Questions: ${crm.name} Integration`}
        eyebrow="Technical Answers"
      />

      {/* =========================================================
          6. CROSS-DIRECTORY LEGAL CRM STRIP
      ========================================================= */}
      <section className="relative border-t border-border px-4 py-16 bg-surface/20">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-border/60">
            <div>
              <span className="eyebrow text-brass">Explore More Systems</span>
              <h2 className="font-display text-xl font-semibold text-text">
                Related Legal CRM & Practice Integrations
              </h2>
            </div>
            <a
              href="/integrations"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan hover:underline"
            >
              View Full 30+ Directory
              <ArrowRight size={14} />
            </a>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {otherCrms.map((item) => (
              <a
                key={item.slug}
                href={`/integrations/${item.slug}`}
                className="group rounded-xl border border-border bg-surface/60 p-4 transition-all hover:border-cyan/40 hover:bg-surface"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-text group-hover:text-cyan transition-colors">
                    {item.name}
                  </span>
                  <ChevronRight size={14} className="text-muted group-hover:translate-x-0.5 transition-transform" />
                </div>
                <div className="mt-1 text-[11px] font-mono text-muted">{item.category}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          7. BOOKING & FOOTER
      ========================================================= */}
      <BookingSection />
      <Footer />
    </main>
  );
}
