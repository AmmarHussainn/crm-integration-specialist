import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingSection from "@/components/BookingSection";
import FAQ from "@/components/FAQ";
import { ArrowRight, Workflow, CheckCircle2, Shield, Layers, FileCheck, Zap } from "lucide-react";
import { CALENDLY_URL } from "@/lib/data";

export const metadata = {
  title: "Legal Workflow & Pipeline Automation with n8n | Law Firm CRM Sync",
  description:
    "End-to-end legal automation pipelines built on n8n. Connect GoHighLevel, Clio, Lawmatics, Filevine, and e-sign platforms into a unified, zero-touch workflow.",
  alternates: {
    canonical: "https://www.crmintegrationspecialist.com/legal-automation-n8n",
  },
  openGraph: {
    title: "Legal Workflow & Pipeline Automation with n8n — Law Firm Systems",
    description:
      "Automate legal intake, retainer generation, Clio matter creation, and billing status sync using self-hosted n8n workflows.",
    url: "https://www.crmintegrationspecialist.com/legal-automation-n8n",
    siteName: "CRM Integration Specialists",
    type: "article",
  },
};

export default function LegalAutomationN8nPage() {
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
          <span className="eyebrow text-brass">End-to-End Legal Practice Automation</span>
          <h1 className="mt-4 text-balance font-display text-4xl font-semibold leading-tight tracking-tight text-text sm:text-5xl md:text-6xl">
            Legal Workflow & Pipeline Automation with n8n
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-balance text-base text-muted sm:text-lg">
            Connect intake forms, Retell AI voice agents, GoHighLevel pipelines, and Clio/Lawmatics case files into one synchronized, error-aware automation architecture.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 rounded-xl bg-text px-6 py-3.5 text-sm font-semibold text-ink transition-transform hover:scale-[1.03]"
            >
              Book Legal Automation Audit
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </section>

      {/* Process Highlights */}
      <section className="relative px-4 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-6 sm:grid-cols-3">
            <div className="rounded-2xl border border-border bg-surface/60 p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brass/10 text-brass">
                <Workflow size={20} />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold">Intake to Retained Flow</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Lead submits an intake form &rarr; Retell AI qualifies &rarr; GHL marks as qualified &rarr; DocuSign agreement dispatched &rarr; Clio matter opened upon signing.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-surface/60 p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan/10 text-cyan">
                <FileCheck size={20} />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold">Automated Case Documents</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Intake attachments, police reports, and signed retainer agreements are automatically filed into the proper Clio or Filevine matter folder with zero manual sorting.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-surface/60 p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brass/10 text-brass">
                <Shield size={20} />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold">HIPAA & Privacy Compliant</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Self-hosted n8n instances deployed within your private virtual private cloud (VPC) guarantee attorney-client privilege data remains protected.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive */}
      <section className="relative border-t border-border px-4 py-20">
        <div className="mx-auto max-w-3xl space-y-12">
          <div>
            <h2 className="font-display text-2xl font-semibold sm:text-3xl">
              Turn Multi-App Friction into a 320ms Real-Time Engine
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Most law firms use 4 to 8 software tools: GoHighLevel for advertising and SMS intake, Calendly for appointments, Retell AI for after-hours calls, Clio or Lawmatics for case management, and LawPay for retainers. When these tools operate in silos, paralegals spend 15+ hours each week manually re-keying data.
            </p>
            <p className="mt-3 text-base leading-relaxed text-muted">
              We design n8n pipelines that bind these tools into a single coherent system. When a milestone occurs in any application, downstream systems update automatically within 320ms.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-surface/80 p-8 shadow-xl">
            <h3 className="flex items-center gap-2 font-display text-xl font-semibold text-brass">
              <Layers size={20} />
              Pre-Built & Custom Legal Workflows We Deliver
            </h3>

            <ul className="mt-6 space-y-3.5 text-sm text-text">
              <li className="flex items-start gap-3">
                <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-brass" />
                <span><strong>Bi-Directional Case Stage Sync:</strong> Moving a matter stage in Clio (e.g. from &ldquo;Investigation&rdquo; to &ldquo;Filed&rdquo;) updates the client pipeline in GoHighLevel to trigger automated client status SMS updates.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-brass" />
                <span><strong>Instant Conflict-Check Notifications:</strong> Intake form entries automatically query Clio contact databases and flag matching party names in your private firm Slack channel.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-brass" />
                <span><strong>Retell AI Post-Call Routing:</strong> AI voice agents qualify claimants after hours, write the consultation summary into Clio matter notes, and trigger the consultation calendar invite.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-brass" />
                <span><strong>Settlement & Accounting Webhooks:</strong> Integrates Clio billing trust deposits with QuickBooks / Xero records with complete transaction timestamps.</span>
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
