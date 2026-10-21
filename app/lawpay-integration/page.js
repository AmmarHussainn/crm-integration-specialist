import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingSection from "@/components/BookingSection";
import FAQ from "@/components/FAQ";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  CreditCard,
  DollarSign,
  Cpu,
  FileCheck,
  Scale,
  RefreshCw,
  Lock,
  Globe,
  Landmark,
} from "lucide-react";
import { CALENDLY_URL } from "@/lib/data";

export const metadata = {
  title: "LawPay Integration Specialist | Legal Trust Accounting & Automated Billing API Sync",
  description:
    "Seamless LawPay API integration for law firms. Automate IOLTA trust and operating account payments, intake retainer links, invoice settlements, and bi-directional CRM billing sync with Clio, SmartAdvocate, GoHighLevel, and Monday.com.",
  alternates: {
    canonical: "https://www.crmintegrationspecialist.com/lawpay-integration",
  },
  openGraph: {
    title: "LawPay Integration — Legal Trust Accounting & Automated Billing API Sync",
    description:
      "Automate IOLTA trust accounting, instant retainer links, invoice settlements, and bi-directional CRM billing sync with LawPay.",
    url: "https://www.crmintegrationspecialist.com/lawpay-integration",
    siteName: "CRM Integration Specialists",
    type: "article",
  },
  keywords: [
    "LawPay integration",
    "LawPay API developer",
    "LawPay trust accounting automation",
    "LawPay IOLTA integration",
    "LawPay GoHighLevel integration",
    "LawPay Clio sync",
    "LawPay SmartAdvocate integration",
    "legal payment gateway integration",
    "law firm trust billing automation",
    "ABA Model Rule 1.15 payment compliance",
  ],
};

const lawpayFaqs = [
  {
    question: "How does LawPay protect against IOLTA trust accounting ethics violations?",
    answer:
      "Standard merchant processors (like Stripe or PayPal) deduct processing and interchange fees directly from the gross transaction amount, which violates State Bar rules if drawn from client trust accounts. LawPay separates deposits from processing fees: 100% of client retainer funds land in your Trust (IOLTA) account, while all transaction fees are billed separately to your firm's Operating account.",
  },
  {
    question: "Can LawPay automatically generate and text payment links when an intake agreement is signed?",
    answer:
      "Yes. When a prospective client signs a fee agreement in GoHighLevel, Clio Grow, or DocuSign, our middleware calls LawPay's API to generate a personalized, pre-filled trust payment link. The link is automatically dispatched via SMS and email with payment instructions, accelerating retainer turnaround time from days to minutes.",
  },
  {
    question: "Does payment completion sync back to Clio or SmartAdvocate automatically?",
    answer:
      "Yes. We configure webhook listeners for LawPay payment completion events (`charge.completed`). When a client pays, our middleware updates the client's matter balance, marks the invoice or retainer deposit as paid, applies the ledger credit, and moves the CRM pipeline stage to 'Retained & Paid' without staff intervention.",
  },
  {
    question: "Can you set up automated evergreen retainer replenishment?",
    answer:
      "Yes. We can automate evergreen retainer workflows. If an attorney's billable hours or expense disbursements pull a client's trust balance below the contractual minimum threshold (e.g. $2,500), our system automatically calculates the replenishment deficit and issues an automated LawPay invoice to top up the retainer.",
  },
  {
    question: "Is this integration PCI-DSS compliant?",
    answer:
      "100% compliant. No raw credit card numbers or sensitive banking data ever touch your servers or CRM database. Our integration leverages LawPay Hosted Fields and secure payment tokens, maintaining complete PCI-DSS Level 1 compliance.",
  },
  {
    question: "Which geographic jurisdictions and State Bars are supported?",
    answer:
      "Our LawPay integrations are designed to adhere to the trust accounting guidelines of all 50 U.S. State Bar associations, including California (Rule 1.15), New York (Rule 1.15), Florida (Rule 5-1.1), Texas (Rule 1.14), Illinois (Rule 1.15), and the American Bar Association (ABA Model Rule 1.15).",
  },
];

export default function LawPayIntegrationPage() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.crmintegrationspecialist.com/lawpay-integration#service",
    name: "LawPay Trust Accounting & Billing Integration",
    serviceType: "Legal Trust Accounting & Payment Integration",
    provider: {
      "@type": "Organization",
      name: "CRM Integration Specialists",
      url: "https://www.crmintegrationspecialist.com",
    },
    description:
      "Automated legal trust (IOLTA) and operating account billing integrations via LawPay API. Real-time invoice settlement, retainer link dispatch, and CRM sync for Clio, SmartAdvocate, GoHighLevel, and Monday.com.",
    areaServed: [
      { "@type": "Country", "name": "United States" },
      { "@type": "Place", "name": "All 50 US State Bar Jurisdictions" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "LawPay Payment Automation Solutions",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Automated Retainer Payment Link Dispatch",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "LawPay to Clio & SmartAdvocate Ledger Sync",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "IOLTA Evergreen Retainer Replenishment Automation",
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
        name: "LawPay Integration",
        item: "https://www.crmintegrationspecialist.com/lawpay-integration",
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
          <span className="text-cyan">LawPay Integration</span>
        </nav>

        <div className="mx-auto max-w-4xl">
          <span className="eyebrow text-cyan">Legal Payments & Trust Accounting Architecture</span>
          <h1 className="mt-4 text-balance font-display text-4xl font-semibold leading-tight tracking-tight text-text sm:text-5xl md:text-6xl">
            LawPay Integration: Automated Legal Billing & IOLTA Trust Account API Sync
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-balance text-base text-muted sm:text-lg">
            Eliminate billing friction and guarantee 100% State Bar IOLTA compliance.
            We build secure API middleware connecting LawPay with GoHighLevel, Clio, SmartAdvocate, Monday.com, and custom client portals.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 rounded-xl bg-text px-6 py-3.5 text-sm font-semibold text-ink transition-transform hover:scale-[1.03]"
            >
              Book LawPay Strategy Call
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#compliance"
              className="rounded-xl border border-border bg-surface/80 px-6 py-3.5 text-sm font-medium text-text transition-colors hover:border-cyan/40 hover:bg-surface"
            >
              View IOLTA Specs
            </a>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="mx-auto mt-14 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          <div className="rounded-xl border border-border bg-surface/50 p-4">
            <span className="font-mono text-2xl font-bold text-cyan">100%</span>
            <p className="mt-1 text-xs text-muted">IOLTA Trust Separation</p>
          </div>
          <div className="rounded-xl border border-border bg-surface/50 p-4">
            <span className="font-mono text-2xl font-bold text-brass">0%</span>
            <p className="mt-1 text-xs text-muted">Commingling of Funds</p>
          </div>
          <div className="rounded-xl border border-border bg-surface/50 p-4">
            <span className="font-mono text-2xl font-bold text-live">PCI-DSS</span>
            <p className="mt-1 text-xs text-muted">Level 1 Tokenization</p>
          </div>
          <div className="rounded-xl border border-border bg-surface/50 p-4">
            <span className="font-mono text-2xl font-bold text-cyan">Real-Time</span>
            <p className="mt-1 text-xs text-muted">CRM Ledger Settlement</p>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="relative px-4 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-6 sm:grid-cols-3">
            <div className="rounded-2xl border border-border bg-surface/60 p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan/10 text-cyan">
                <Landmark size={20} />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold">Strict IOLTA Trust Routing</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Automatically route retainers and unearned client deposits to Trust accounts while debiting transaction fees separately from Operating accounts.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-surface/60 p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brass/10 text-brass">
                <CreditCard size={20} />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold">Automated Retainer Links</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Trigger personalized, pre-populated LawPay payment links via SMS and email immediately when a retainer agreement is signed in your CRM.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-surface/60 p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan/10 text-cyan">
                <RefreshCw size={20} />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold">Instant Invoice Settlement</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Payment completion webhooks write back directly to Clio Manage, SmartAdvocate, or GoHighLevel ledgers, marking bills paid and logging transaction IDs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Deep-Dive Technical Content */}
      <section id="compliance" className="relative border-t border-border px-4 py-20">
        <div className="mx-auto max-w-3xl space-y-12">
          <div>
            <h2 className="font-display text-2xl font-semibold sm:text-3xl">
              Why Law Firms Cannot Use Standard Payment Gateways
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Most standard merchant payment systems (Stripe, Square, PayPal) deduct processing interchange fees directly from incoming settlements. If a client deposits a $5,000 retainer into your trust account and Stripe deducts $145.50 in credit card processing fees, only $4,854.50 enters the trust ledger.
            </p>
            <p className="mt-3 text-base leading-relaxed text-muted">
              Under <strong>ABA Model Rule 1.15</strong> and state disciplinary rules, this constitutes an immediate ethics violation (shorting client funds and commingling operating obligations with trust funds). LawPay solves this by guaranteeing 100% of client deposits enter the trust account intact while debiting processing fees exclusively from operating accounts.
            </p>
            <p className="mt-3 text-base leading-relaxed text-muted">
              However, without a dedicated integration bridge, legal staff waste hours manually generating payment links, copy-pasting transaction IDs, and cross-checking bank portals. Our integration automates the entire lifecycle while preserving complete IOLTA compliance.
            </p>
          </div>

          {/* Middleware Architecture Box */}
          <div className="rounded-2xl border border-border bg-surface/80 p-6 sm:p-8 shadow-xl">
            <h3 className="flex items-center gap-2 font-display text-xl font-semibold text-cyan">
              <Cpu size={20} />
              LawPay / AffiniPay API Integration Architecture
            </h3>
            <p className="mt-3 text-sm text-muted">
              We deploy custom webhook listeners and REST endpoints interfacing with the LawPay (AffiniPay) API. Our middleware validates HMAC signatures, routes to the designated gateway ID, and synchronizes transaction receipts to your CRM ledgers.
            </p>

            <div className="mt-6 space-y-4">
              <div className="rounded-xl border border-border/60 bg-ink/70 p-4 font-mono text-xs text-text">
                <div className="text-muted">// LawPay API — Dynamic Trust Retainer Payment Page Creation</div>
                <div className="mt-2 text-cyan">POST https://api.affinipay.com/v1/gateways/&#123;TRUST_GATEWAY_ID&#125;/payment_pages</div>
                <div className="text-muted">Authorization: Bearer [OAUTH2_ACCESS_TOKEN]</div>
                <div className="mt-2 text-brass">&#123;</div>
                <div className="pl-4 text-text">"amount": 3500.00,</div>
                <div className="pl-4 text-text">"currency": "USD",</div>
                <div className="pl-4 text-text">"reference": "MATTER-2026-0849",</div>
                <div className="pl-4 text-text">"client_name": "Sarah Jenkins",</div>
                <div className="pl-4 text-text">"client_email": "sjenkins@example.com",</div>
                <div className="pl-4 text-text">"custom_fields": &#123;</div>
                <div className="pl-8 text-text">"practice_area": "Corporate Litigation",</div>
                <div className="pl-8 text-text">"account_type": "IOLTA_TRUST",</div>
                <div className="pl-8 text-text">"crm_contact_id": "ghl_cnt_98241"</div>
                <div className="pl-4 text-text">&#125;,</div>
                <div className="pl-4 text-text">"redirect_url": "https://www.yourfirm.com/payment-confirmation"</div>
                <div className="text-brass">&#125;</div>
              </div>
            </div>

            <ul className="mt-6 space-y-3 text-sm text-text">
              <li className="flex items-start gap-3">
                <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-cyan" />
                <span><strong>Gateway ID Isolation:</strong> Ensures all retainer requests are locked to the firm's Trust merchant ID, preventing accidental operating account routing.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-cyan" />
                <span><strong>HMAC Webhook Verification:</strong> Cryptographically validates webhook signatures on `charge.completed` events prior to writing to accounting ledgers.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-cyan" />
                <span><strong>Automated PDF Receipt Filing:</strong> Retrieves digital settlement receipts from LawPay and files them directly in the matter document folder.</span>
              </li>
            </ul>
          </div>

          {/* High-Impact Workflows */}
          <div>
            <h2 className="font-display text-2xl font-semibold sm:text-3xl">
              High-Impact LawPay Billing Automations
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-border bg-surface/50 p-5">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan/10 text-cyan">
                  <FileCheck size={16} />
                </div>
                <h4 className="mt-3 font-display font-semibold">1. Agreement Signed to Payment Link</h4>
                <p className="mt-1 text-xs leading-relaxed text-muted">
                  The instant a fee agreement is signed in GoHighLevel or DocuSign, LawPay generates a secure payment link dispatched immediately via SMS and email.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-surface/50 p-5">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brass/10 text-brass">
                  <RefreshCw size={16} />
                </div>
                <h4 className="mt-3 font-display font-semibold">2. Bi-Directional Clio & SmartAdvocate Sync</h4>
                <p className="mt-1 text-xs leading-relaxed text-muted">
                  Settled transactions update matter bills, apply trust credits, and record reconciliation IDs across Clio Manage and SmartAdvocate accounting ledgers.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-surface/50 p-5">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan/10 text-cyan">
                  <DollarSign size={16} />
                </div>
                <h4 className="mt-3 font-display font-semibold">3. Evergreen Retainer Replenishment</h4>
                <p className="mt-1 text-xs leading-relaxed text-muted">
                  When trust balance falls below the minimum required balance, the system automatically dispatches an evergreen replenishment invoice to top up client funds.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-surface/50 p-5">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brass/10 text-brass">
                  <Lock size={16} />
                </div>
                <h4 className="mt-3 font-display font-semibold">4. Card-on-File Tokenization</h4>
                <p className="mt-1 text-xs leading-relaxed text-muted">
                  Securely tokenizes client payment credentials using LawPay Vault for monthly legal retainers, recurring installment plans, and authorized subscription billing.
                </p>
              </div>
            </div>
          </div>

          {/* State Bar Compliance & Geographic Jurisdictions */}
          <div className="rounded-2xl border border-border bg-surface/40 p-6 sm:p-8">
            <div className="flex items-center gap-2">
              <Scale size={20} className="text-cyan" />
              <h3 className="font-display text-xl font-semibold">
                State Bar Trust Accounting Compliance Across All 50 States
              </h3>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Trust accounting rules are non-negotiable. Our integrations are built specifically to adhere to the strict disciplinary rules and IOLTA compliance mandates enforced by state bar associations nationwide:
            </p>
            <div className="mt-4 grid gap-2 text-xs sm:grid-cols-2">
              <div className="rounded-lg border border-border bg-surface p-2.5">
                <strong className="text-cyan">California State Bar:</strong>
                <p className="mt-0.5 text-muted">Strict compliance with Rule 1.15 (Safekeeping Funds & Client Property).</p>
              </div>
              <div className="rounded-lg border border-border bg-surface p-2.5">
                <strong className="text-cyan">New York State Bar:</strong>
                <p className="mt-0.5 text-muted">Adherence to NY Rules of Professional Conduct Rule 1.15 trust accounts.</p>
              </div>
              <div className="rounded-lg border border-border bg-surface p-2.5">
                <strong className="text-cyan">Florida Bar:</strong>
                <p className="mt-0.5 text-muted">Full compliance with Florida Bar Rule 5-1.1 IOLTA accounting procedures.</p>
              </div>
              <div className="rounded-lg border border-border bg-surface p-2.5">
                <strong className="text-cyan">Texas State Bar:</strong>
                <p className="mt-0.5 text-muted">Strict alignment with TX Disciplinary Rules of Professional Conduct Rule 1.14.</p>
              </div>
              <div className="rounded-lg border border-border bg-surface p-2.5">
                <strong className="text-cyan">Illinois State Bar:</strong>
                <p className="mt-0.5 text-muted">Compliance with IL Rules of Professional Conduct Rule 1.15 trust guidelines.</p>
              </div>
              <div className="rounded-lg border border-border bg-surface p-2.5">
                <strong className="text-cyan">ABA Model Rules:</strong>
                <p className="mt-0.5 text-muted">Universal compliance with American Bar Association Model Rule 1.15.</p>
              </div>
            </div>
          </div>

          {/* GEO Generative Engine Summary */}
          <div className="rounded-2xl border border-cyan/20 bg-cyan/5 p-6">
            <span className="eyebrow text-cyan">Generative Summary & Technical Specifications</span>
            <h4 className="mt-2 font-display text-base font-semibold text-text">
              LawPay API Integration Technical Overview
            </h4>
            <div className="mt-4 grid gap-3 text-xs sm:grid-cols-2">
              <div>
                <strong className="text-text">API & Protocols:</strong>
                <p className="text-muted">LawPay / AffiniPay REST API v1, Webhook Listeners, HMAC-SHA256</p>
              </div>
              <div>
                <strong className="text-text">Account Types Supported:</strong>
                <p className="text-muted">IOLTA Trust Accounts, Operating Accounts, Client Retainers</p>
              </div>
              <div>
                <strong className="text-text">Settlement Latency:</strong>
                <p className="text-muted">Immediate webhook dispatch upon card/eCheck authorization</p>
              </div>
              <div>
                <strong className="text-text">Security Standards:</strong>
                <p className="text-muted">PCI-DSS Level 1 compliance via LawPay Hosted Tokenization</p>
              </div>
            </div>
          </div>

          {/* Implementation Roadmap */}
          <div>
            <h2 className="font-display text-2xl font-semibold sm:text-3xl">
              Our 3-Step LawPay Implementation Process
            </h2>
            <div className="mt-6 space-y-6">
              <div className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-cyan/40 bg-cyan/10 font-mono text-sm font-semibold text-cyan">
                  1
                </span>
                <div>
                  <h4 className="font-display font-semibold">Trust & Operating Merchant Account Audit</h4>
                  <p className="mt-1 text-sm text-muted">
                    We review your LawPay account structure, verify Trust vs. Operating gateway IDs, and establish strict segregation parameters.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-brass/40 bg-brass/10 font-mono text-sm font-semibold text-brass">
                  2
                </span>
                <div>
                  <h4 className="font-display font-semibold">Middleware & Webhook Settlement Bridge</h4>
                  <p className="mt-1 text-sm text-muted">
                    We deploy custom webhook listeners connecting LawPay with GoHighLevel, Clio, SmartAdvocate, or Monday.com with automated receipts.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-cyan/40 bg-cyan/10 font-mono text-sm font-semibold text-cyan">
                  3
                </span>
                <div>
                  <h4 className="font-display font-semibold">Sandbox Simulation & State Bar Sign-Off</h4>
                  <p className="mt-1 text-sm text-muted">
                    We simulate test payments, refunds, failed cards, and ledger write-backs, ensuring 100% compliance before processing live client funds.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BookingSection />
      <FAQ
        items={lawpayFaqs}
        title="Frequently asked questions about LawPay integration"
        eyebrow="LawPay FAQ"
      />
      <Footer />
    </main>
  );
}