import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingSection from "@/components/BookingSection";
import FAQ from "@/components/FAQ";
import { ArrowRight, PhoneCall, FileText, Cpu, CheckCircle2, ShieldCheck } from "lucide-react";
import { CALENDLY_URL } from "@/lib/data";

export const metadata = {
  title: "Retell AI Voice Integration for CRMs | GoHighLevel & Legal Sync",
  description:
    "Connect Retell AI voice agents directly with GoHighLevel, Clio, Lawmatics, and Salesforce. Log call transcripts, trigger post-call workflows, and update case statuses in real time.",
  alternates: {
    canonical: "https://www.crmintegrationspecialist.com/retell-ai-crm-integration",
  },
  openGraph: {
    title: "Retell AI Voice Integration — Real-Time CRM & Webhook Infrastructure",
    description:
      "Wire Retell AI voice agents into your CRM. Automate call logging, transcript analysis, function calling, and lead stage updates.",
    url: "https://www.crmintegrationspecialist.com/retell-ai-crm-integration",
    siteName: "CRM Integration Specialists",
    type: "article",
  },
};

export default function RetellAiCrmIntegrationPage() {
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
          <span className="eyebrow text-brass">Voice AI Infrastructure</span>
          <h1 className="mt-4 text-balance font-display text-4xl font-semibold leading-tight tracking-tight text-text sm:text-5xl md:text-6xl">
            Retell AI Voice Integration with Legal & Enterprise CRMs
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-balance text-base text-muted sm:text-lg">
            Turn outbound and inbound voice calls into actionable CRM data.
            We build the custom API layer connecting Retell AI agents with GoHighLevel, Clio, Lawmatics, and custom webhook pipelines.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 rounded-xl bg-text px-6 py-3.5 text-sm font-semibold text-ink transition-transform hover:scale-[1.03]"
            >
              Book Retell AI Strategy Call
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="relative px-4 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-6 sm:grid-cols-3">
            <div className="rounded-2xl border border-border bg-surface/60 p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brass/10 text-brass">
                <PhoneCall size={20} />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold">Live Call Write-Back</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Immediately log call outcomes, duration, sentiment analysis, and transcript summaries directly onto the contact record in your CRM.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-surface/60 p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan/10 text-cyan">
                <Cpu size={20} />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold">Custom Function Calling</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Enable your Retell AI agent to look up calendar availability, check contact status, or trigger real-time webhooks while on the live call.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-surface/60 p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brass/10 text-brass">
                <FileText size={20} />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold">Post-Call Pipeline Trigger</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Automatically advance leads to "Qualified", "Appointment Scheduled", or "Follow Up Required" based on structured JSON post-call webhooks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Technical Content */}
      <section className="relative border-t border-border px-4 py-20">
        <div className="mx-auto max-w-3xl space-y-12">
          <div>
            <h2 className="font-display text-2xl font-semibold sm:text-3xl">
              Unlocking the True Value of Voice AI
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Retell AI offers human-like voice conversation capabilities, but without a dedicated integration layer, those conversations live in isolation. A caller might confirm an appointment or share intake details, but if that data isn't written back to your CRM instantly, staff still have to manual listen to recordings.
            </p>
            <p className="mt-3 text-base leading-relaxed text-muted">
              Our custom Retell AI CRM integration bridges the gap between conversation and action. By listening for Retell AI post-call webhook events and setting up custom serverless endpoints, we parse call transcripts, extract key entities, and write them directly into GoHighLevel, Clio, Lawmatics, or custom relational databases.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-surface/80 p-8 shadow-xl">
            <h3 className="flex items-center gap-2 font-display text-xl font-semibold text-brass">
              <ShieldCheck size={20} />
              What We Build into Your Retell AI Stack
            </h3>

            <ul className="mt-6 space-y-3 text-sm text-text">
              <li className="flex items-start gap-3">
                <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-brass" />
                <span><strong>Inbound Lead Lookup:</strong> When a call comes in, the agent queries your CRM by phone number to greet the caller by name and retrieve active case details.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-brass" />
                <span><strong>Real-Time Calendar Booking:</strong> Integrates Retell AI function calls with Calendly or GHL Calendars to book strategy calls during the conversation.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-brass" />
                <span><strong>Structured Data Ingestion:</strong> Uses LLM function outputs to extract structured data (e.g. date of injury, insurance status, case value) and save them to custom CRM fields.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-brass" />
                <span><strong>Fail-Safe Webhook Middleware:</strong> Secures Retell AI webhook signatures, formats request bodies, and retries failed payloads automatically.</span>
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
