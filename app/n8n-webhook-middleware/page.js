import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingSection from "@/components/BookingSection";
import FAQ from "@/components/FAQ";
import { ArrowRight, ShieldCheck, Cpu, RefreshCw, AlertTriangle, CheckCircle2, Lock } from "lucide-react";
import { CALENDLY_URL } from "@/lib/data";

export const metadata = {
  title: "n8n Webhook Middleware Development | Zero-Drop Legal CRM Pipelines",
  description:
    "Custom n8n and Node.js webhook middleware engineering for law firms and agencies. Dead-letter queues, HMAC verification, payload transformation, and Clio/GHL sync.",
  alternates: {
    canonical: "https://www.crmintegrationspecialist.com/n8n-webhook-middleware",
  },
  openGraph: {
    title: "n8n Webhook Middleware Development — Zero-Drop Legal API Infrastructure",
    description:
      "Purpose-built webhook middleware with dead-letter retry queues, payload sanitation, and Clio/GoHighLevel error recovery.",
    url: "https://www.crmintegrationspecialist.com/n8n-webhook-middleware",
    siteName: "CRM Integration Specialists",
    type: "article",
  },
};

export default function N8nWebhookMiddlewarePage() {
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
          <span className="eyebrow text-cyan">Mission-Critical API Infrastructure</span>
          <h1 className="mt-4 text-balance font-display text-4xl font-semibold leading-tight tracking-tight text-text sm:text-5xl md:text-6xl">
            Custom n8n Webhook Middleware: Zero Silent Failures
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-balance text-base text-muted sm:text-lg">
            Standard webhooks fail silently when APIs encounter rate limits, token expirations, or malformed JSON payloads. We engineer robust n8n and Node.js middleware with automated dead-letter recovery queues.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 rounded-xl bg-text px-6 py-3.5 text-sm font-semibold text-ink transition-transform hover:scale-[1.03]"
            >
              Book Middleware Architecture Call
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </section>

      {/* Feature Pillars */}
      <section className="relative px-4 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-6 sm:grid-cols-3">
            <div className="rounded-2xl border border-border bg-surface/60 p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan/10 text-cyan">
                <AlertTriangle size={20} />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold">Dead-Letter Queues</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Failed webhooks are isolated into a persistent retry queue with exponential backoff and instant Slack alerting instead of being discarded into the void.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-surface/60 p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brass/10 text-brass">
                <Lock size={20} />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold">HMAC Signature Verification</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Every incoming webhook request is cryptographically validated at the perimeter to prevent injection attacks and corrupted data states.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-surface/60 p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan/10 text-cyan">
                <RefreshCw size={20} />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold">Atomic Schema Transformation</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Nested JSON from intake forms and GoHighLevel is normalized, sanitized, and reshaped to conform strictly to Clio and Lawmatics API v4 models.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Architecture */}
      <section className="relative border-t border-border px-4 py-20">
        <div className="mx-auto max-w-3xl space-y-12">
          <div>
            <h2 className="font-display text-2xl font-semibold sm:text-3xl">
              Why Self-Hosted n8n Beats Zapier for Legal Firms
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              While Zapier is convenient for basic personal automations, it lacks HIPAA/GDPR self-hosted data governance, advanced retry logic, and sub-millisecond execution control. When a law firm processes sensitive client matter intakes, customer data shouldn&rsquo;t pass through opaque third-party shared queues.
            </p>
            <p className="mt-3 text-base leading-relaxed text-muted">
              We deploy private, self-hosted n8n instances on dedicated cloud hardware (AWS / DigitalOcean / Hetzner) behind your own domain with full PostgreSQL audit logging. This keeps all client data completely within your security perimeter while eliminating expensive Zapier task bills.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-surface/80 p-8 shadow-xl">
            <h3 className="flex items-center gap-2 font-display text-xl font-semibold text-cyan">
              <Cpu size={20} />
              What We Build into Your Middleware Layer
            </h3>

            <ul className="mt-6 space-y-3.5 text-sm text-text">
              <li className="flex items-start gap-3">
                <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-cyan" />
                <span><strong>SHA-256 Idempotency Protection:</strong> Prevents duplicate matters or tasks if an ad platform or intake webhook fires multiple times.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-cyan" />
                <span><strong>Clio REST API Rate-Limit Throttling:</strong> Implements a token-bucket queue so sudden lead surges never trigger 429 rate limit drops.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-cyan" />
                <span><strong>OAuth 2.0 Automatic Refresh Handlers:</strong> Automatically captures expired tokens and refreshes them silently without workflow downtime.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-cyan" />
                <span><strong>Slack / Discord Anomaly Webhooks:</strong> Immediate alert pings to your team if an intake form produces unexpected null values or schema violations.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <BookingSection />
      <FAQ />
      <Footer />
    </main>
  );
}
