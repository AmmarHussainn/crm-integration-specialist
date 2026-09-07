import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingSection from "@/components/BookingSection";
import FAQ from "@/components/FAQ";
import { ArrowRight, CheckCircle2, ShieldCheck, Zap, RefreshCw, Cpu } from "lucide-react";
import { CALENDLY_URL } from "@/lib/data";

export const metadata = {
  title: "GoHighLevel to Clio Integration | Bi-Directional Legal CRM Sync",
  description:
    "Connect GoHighLevel with Clio via custom bi-directional API bridges and middleware. Automate lead intake, matter creation, contact updates, and eliminate manual data entry.",
  alternates: {
    canonical: "https://www.crmintegrationspecialist.com/ghl-clio-integration",
  },
  openGraph: {
    title: "GoHighLevel to Clio Integration — Custom Bi-Directional Middleware",
    description:
      "Automate lead intake, matter creation, and bi-directional field sync between GoHighLevel and Clio Manage.",
    url: "https://www.crmintegrationspecialist.com/ghl-clio-integration",
    siteName: "CRM Integration Specialists",
    type: "article",
  },
};

export default function GhlClioIntegrationPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-ink text-text">
      <Navbar />

      {/* Hero Section */}
      <section className="relative px-4 pb-16 pt-36 text-center sm:pt-44">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-1/2 h-[380px] w-[1200px] -translate-x-1/2 -translate-y-1/2 bg-bowtie blur-2xl" />
          <div className="absolute inset-0 grid-fade" />
        </div>

        <div className="mx-auto max-w-4xl">
          <span className="eyebrow text-cyan">Specialized Legal Integration</span>
          <h1 className="mt-4 text-balance font-display text-4xl font-semibold leading-tight tracking-tight text-text sm:text-5xl md:text-6xl">
            GoHighLevel to Clio Integration: Real-Time Bi-Directional Sync
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-balance text-base text-muted sm:text-lg">
            Stop losing qualified legal leads to broken webhooks and delayed data entry.
            We engineer secure, custom API bridges between GoHighLevel and Clio Manage so your firm runs seamlessly.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 rounded-xl bg-text px-6 py-3.5 text-sm font-semibold text-ink transition-transform hover:scale-[1.03]"
            >
              Book GHL–Clio Strategy Call
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="relative px-4 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-6 sm:grid-cols-3">
            <div className="rounded-2xl border border-border bg-surface/60 p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan/10 text-cyan">
                <RefreshCw size={20} />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold">Bi-Directional Field Sync</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Updates in GHL (custom fields, contact info, pipeline stages) instantly reflect in Clio Manage, and status changes in Clio push right back to GHL.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-surface/60 p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brass/10 text-brass">
                <Zap size={20} />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold">Automated Matter Creation</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Automatically generate new Client Matters in Clio when a lead reaches "Retained" or "Intake Completed" in your GHL pipeline.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-surface/60 p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan/10 text-cyan">
                <ShieldCheck size={20} />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold">Dead-Letter Recovery</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Built-in payload validation, rate-limit handling, and retry queues ensure zero lost leads even when API limits or network outages occur.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Deep-Dive Content */}
      <section className="relative border-t border-border px-4 py-20">
        <div className="mx-auto max-w-3xl space-y-12">
          <div>
            <h2 className="font-display text-2xl font-semibold sm:text-3xl">
              Why Native Integrations Fail Law Firms
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              GoHighLevel is a power-house marketing OS for capturing leads, running SMS campaigns, and organizing intake pipelines. Clio is the industry standard for legal case management, billing, and matter tracking. However, out of the box, they do not communicate directly.
            </p>
            <p className="mt-3 text-base leading-relaxed text-muted">
              Generic automation platforms often lack the sophisticated error handling, OAuth token management, and deep field mapping required for law firms. When a lead fills out an intake form, missing phone numbers or custom mapping mismatches cause webhooks to fail silently — leaving intake coordinators manually copy-pasting data between tabs.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-surface/80 p-8 shadow-xl">
            <h3 className="flex items-center gap-2 font-display text-xl font-semibold text-cyan">
              <Cpu size={20} />
              Custom Middleware Architecture
            </h3>
            <p className="mt-3 text-sm text-muted">
              We deploy lightweight, dedicated middleware (n8n or custom Node.js bridges) that acts as an intelligent router between GoHighLevel's Webhooks API and Clio's REST API v4.
            </p>

            <ul className="mt-6 space-y-3 text-sm text-text">
              <li className="flex items-start gap-3">
                <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-cyan" />
                <span><strong>Instant Contact Deduplication:</strong> Checks Clio for existing contacts by email or phone before creating duplicates.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-cyan" />
                <span><strong>Custom Field Mapping:</strong> Maps case details, practice area, accident date, and custom questionnaire answers to custom fields in Clio.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-cyan" />
                <span><strong>Document & Intake Attachment Sync:</strong> Pushes uploaded PDF intakes and form submissions directly into Clio Matter documents.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-cyan" />
                <span><strong>Audit Logged Execution:</strong> Every API call and webhook event is logged so you have complete visibility over data movement.</span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold sm:text-3xl">
              How We Build Your GHL to Clio Sync
            </h2>
            <div className="mt-6 space-y-6">
              <div className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-cyan/40 bg-cyan/10 font-mono text-sm font-semibold text-cyan">
                  1
                </span>
                <div>
                  <h4 className="font-display font-semibold">Field Mapping & Workflow Audit</h4>
                  <p className="mt-1 text-sm text-muted">
                    We map every custom field in your GHL intake forms to corresponding contact and matter fields in Clio.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-brass/40 bg-brass/10 font-mono text-sm font-semibold text-brass">
                  2
                </span>
                <div>
                  <h4 className="font-display font-semibold">Middleware & Webhook Setup</h4>
                  <p className="mt-1 text-sm text-muted">
                    We deploy dedicated n8n workflows or Node.js serverless functions with OAuth 2.0 authentication and rate-limiting safeguards.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-cyan/40 bg-cyan/10 font-mono text-sm font-semibold text-cyan">
                  3
                </span>
                <div>
                  <h4 className="font-display font-semibold">Testing, Monitoring & Handoff</h4>
                  <p className="mt-1 text-sm text-muted">
                    We test edge cases (duplicate emails, missing fields, rate limits) and provide ongoing error alerts via Slack/Email.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BookingSection />
      <FAQ />
      <Footer />
    </main>
  );
}
