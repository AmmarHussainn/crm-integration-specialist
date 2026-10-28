import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingSection from "@/components/BookingSection";
import FAQ from "@/components/FAQ";
import IntegrationsDirectory from "@/components/IntegrationsDirectory";
import { ALL_CRMS } from "@/lib/crmData";
import { CALENDLY_URL } from "@/lib/data";
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  PhoneCall,
  Layers,
  Database,
  Cpu,
  Sparkles,
  Workflow,
} from "lucide-react";

export const metadata = {
  title: "Legal CRM Integration Directory | 30+ Practice Management & Intake Systems",
  description:
    "Comprehensive directory of 30+ legal CRM integrations. Custom API connectors, bi-directional sync, Retell AI voice intake, and webhook middleware for law firms.",
  alternates: {
    canonical: "https://www.crmintegrationspecialist.com/integrations",
  },
  openGraph: {
    title: "Legal CRM Integration Directory — 30+ Systems Supported",
    description:
      "Explore 30+ custom legal CRM integrations. Bi-directional sync, voice AI triage, and zero-dropped-lead intake automation for law practices.",
    url: "https://www.crmintegrationspecialist.com/integrations",
    siteName: "CRM Integration Specialists",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Legal CRM Integration Directory | 30+ Practice Management Systems",
    description:
      "Explore custom API bridges connecting 30+ legal CRMs with GoHighLevel, Retell AI, and n8n middleware.",
  },
};

const directoryFaqs = [
  {
    question: "Why do law firms need custom API integrations instead of native marketplace apps?",
    answer:
      "Native marketplace connectors and generic Zapier zaps rely on basic triggers that frequently drop custom field data, fail to normalize phone numbers, lack cryptographic deduplication, and have no dead-letter retry queues. Our custom n8n and Node.js middleware maintains sub-380ms bi-directional synchronization, handles complex multi-step conditional branching, and guarantees zero dropped leads during peak marketing campaigns.",
  },
  {
    question: "Can any legal CRM in this directory integrate with Retell AI voice agents?",
    answer:
      "Yes. Every CRM in our directory can ingest conversational AI voice intake. Our middleware parses call transcripts, extracts legal case criteria, and executes live function calls to query calendars, check conflicts, and write notes or matters directly into your CRM within two seconds of call termination.",
  },
  {
    question: "How do you ensure data security and HIPAA/IOLTA compliance across integrations?",
    answer:
      "All integrations are built using TLS 1.3 encryption in transit, strict OAuth 2.0 token isolation, automated SHA-256 idempotency verification, and zero persistent storage of sensitive client or medical data in intermediate queues. Financial workflows strictly separate operating and IOLTA trust accounts.",
  },
  {
    question: "How long does a typical legal CRM integration take to deploy?",
    answer:
      "A standard single-platform bi-directional bridge (e.g., GoHighLevel to Lawmatics or MyCase) typically takes 1 to 2 weeks to build, test with 1,000+ payload simulations, and deploy to live production. Multi-system enterprise deployments (e.g., Lead Docket ➔ Filevine ➔ Monday.com) take 3 to 4 weeks.",
  },
  {
    question: "What if our law firm uses a proprietary or self-hosted database?",
    answer:
      "We build custom webhook listeners, REST endpoints, and SQL database adapters for on-premise, cloud, or legacy legal databases, allowing your firm to modernize intake and connect voice AI agents without migrating existing case management software.",
  },
];

export default function IntegrationsDirectoryPage() {
  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": "https://www.crmintegrationspecialist.com/integrations#collection",
    name: "Legal CRM Integration Directory",
    description:
      "Directory of 30+ custom legal CRM integrations, webhook bridges, and voice AI automations.",
    url: "https://www.crmintegrationspecialist.com/integrations",
    publisher: {
      "@type": "Organization",
      name: "CRM Integration Specialists",
      url: "https://www.crmintegrationspecialist.com",
    },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: ALL_CRMS.map((crm, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `https://www.crmintegrationspecialist.com/integrations/${crm.slug}`,
        name: `${crm.name} Integration & Automation`,
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
        name: "Integrations Directory",
        item: "https://www.crmintegrationspecialist.com/integrations",
      },
    ],
  };

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-ink text-text">
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
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

        <div className="mx-auto max-w-4xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan/40 bg-cyan/10 px-4 py-1.5 text-xs font-mono text-cyan">
            <Sparkles size={13} />
            <span>30+ Legal CRMs & Practice Management Platforms</span>
          </div>

          <h1 className="mt-4 text-balance font-display text-4xl font-semibold leading-tight tracking-tight text-text sm:text-5xl md:text-6xl">
            Legal CRM Integration & Automation Directory
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-balance text-base leading-relaxed text-muted sm:text-lg">
            Custom bi-directional API bridges, sub-380ms sync latency, and autonomous Retell AI
            voice intake engineered for every premier law practice management system.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 rounded-xl bg-text px-6 py-3.5 text-sm font-semibold text-ink transition-transform hover:scale-[1.03]"
            >
              Book Integration Strategy Call
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </section>

      {/* Main Interactive Directory Section */}
      <section className="relative px-4 pb-24">
        <IntegrationsDirectory />
      </section>

      {/* Directory FAQ */}
      <FAQ
        items={directoryFaqs}
        title="Frequently Asked Questions: Legal CRM Integrations"
        eyebrow="Integration Intelligence"
      />

      {/* Booking & Footer */}
      <BookingSection />
      <Footer />
    </main>
  );
}
