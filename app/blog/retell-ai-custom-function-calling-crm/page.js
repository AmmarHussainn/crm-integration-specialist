import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingSection from "@/components/BookingSection";
import LeadMagnet from "@/components/LeadMagnet";
import { ArrowLeft, Clock, CheckCircle2, PhoneCall, Code, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Retell AI Custom Function Calling: Live CRM Lookups & Data Ingestion",
  description:
    "How to configure custom function calling in Retell AI to query CRM contact data on live calls, check calendar availability, and ingest structured case details.",
  alternates: {
    canonical: "https://www.crmintegrationspecialist.com/blog/retell-ai-custom-function-calling-crm",
  },
  openGraph: {
    title: "Retell AI Custom Function Calling: Live CRM Lookups & Data Ingestion",
    description: "Complete guide to real-time function calling between Retell AI and legal CRMs like GoHighLevel and Clio.",
    url: "https://www.crmintegrationspecialist.com/blog/retell-ai-custom-function-calling-crm",
    siteName: "CRM Integration Specialists",
    type: "article",
  },
};

export default function RetellAiCustomFunctionCallingPost() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-ink text-text">
      <Navbar />

      <article className="relative px-4 pb-20 pt-36 sm:pt-44">
        <div className="mx-auto max-w-3xl">
          <a
            href="/blog"
            className="inline-flex items-center gap-1.5 text-xs text-muted hover:text-cyan transition-colors"
          >
            <ArrowLeft size={14} />
            Back to Guides & Articles
          </a>

          <div className="mt-6 flex items-center gap-3 text-xs text-muted">
            <span className="rounded-full border border-brass/40 bg-brass/10 px-2.5 py-0.5 text-brass font-mono">
              Voice AI & CRM
            </span>
            <span className="flex items-center gap-1">
              <Clock size={12} /> 7 min read
            </span>
          </div>

          <h1 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
            Retell AI Custom Function Calling: Live CRM Lookups & Data Ingestion
          </h1>

          <p className="mt-4 text-base text-muted leading-relaxed sm:text-lg">
            How to equip Retell AI voice agents with real-time API tools to query active Clio matters, check attorney calendar availability, and push structured consultation summaries in under 2 seconds.
          </p>

          <div className="mt-10 space-y-8 text-sm leading-relaxed text-muted sm:text-base border-t border-border pt-8">
            <div>
              <h2 className="font-display text-xl font-semibold text-text sm:text-2xl">
                Beyond Standard Voice Prompts: The Power of Function Calling
              </h2>
              <p className="mt-3">
                A conversational voice AI agent is only as smart as the live data it can access. When an existing client or hot intake lead calls your law firm, an agent that merely takes a message provides a frustrating experience.
              </p>
              <p className="mt-3">
                By configuring Retell AI custom functions, your agent can make asynchronous HTTP calls to your middleware during the call. For example, when a caller provides their phone number or case ID, the agent calls <code>checkCaseStatus(callerPhone)</code> and replies with their active attorney&rsquo;s name and next court date.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-surface/70 p-6">
              <h3 className="font-display text-base font-semibold text-text flex items-center gap-2">
                <Code size={18} className="text-cyan" />
                Three Essential Retell AI Functions for Law Practices
              </h3>
              <div className="mt-4 space-y-4">
                <div className="rounded-xl border border-border bg-ink/50 p-4">
                  <h4 className="font-mono text-xs font-bold text-cyan">1. lookupContactByPhone(phone)</h4>
                  <p className="text-xs text-muted mt-1">
                    Queries Clio Manage or GoHighLevel by E.164 phone number. Returns existing client name, assigned paralegal, and matter status.
                  </p>
                </div>
                <div className="rounded-xl border border-border bg-ink/50 p-4">
                  <h4 className="font-mono text-xs font-bold text-brass">2. bookConsultationSlot(datetime, email)</h4>
                  <p className="text-xs text-muted mt-1">
                    Directly interfaces with your Calendly or GHL Calendar API to book and confirm an appointment slot while the caller is still on the line.
                  </p>
                </div>
                <div className="rounded-xl border border-border bg-ink/50 p-4">
                  <h4 className="font-mono text-xs font-bold text-live">3. saveIntakeDetails(structuredJson)</h4>
                  <p className="text-xs text-muted mt-1">
                    Extracts accident date, injuries, and opposing party information from the conversation and writes it to custom fields in Clio.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-text sm:text-2xl">
                Post-Call Webhook Ingestion Pipeline
              </h2>
              <p className="mt-3">
                When the call terminates, Retell AI emits a <code>call_analyzed</code> webhook payload containing the full stereo audio URL, timestamped transcription, and LLM sentiment summary.
              </p>
              <p className="mt-3">
                Our custom <a href="/retell-ai-crm-integration" className="text-cyan underline">Retell AI CRM integration middleware</a> ingests this webhook, extracts structured tags, attaches the call transcript to the Clio matter notes, and advances the pipeline stage in GoHighLevel to &ldquo;Intake Consultation Completed&rdquo;.
              </p>
            </div>
          </div>
        </div>
      </article>

      <LeadMagnet />
      <BookingSection />
      <Footer />
    </main>
  );
}
