import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingSection from "@/components/BookingSection";
import FAQ from "@/components/FAQ";
import { Mail, Clock, ShieldCheck, MapPin, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Contact Ammar Hussain | CRM Integration Specialists",
  description:
    "Get in touch with Ammar Hussain for custom legal CRM integrations, GoHighLevel to Clio bridges, Retell AI voice agents, and n8n middleware.",
  alternates: {
    canonical: "https://www.crmintegrationspecialist.com/contact",
  },
  openGraph: {
    title: "Contact Ammar Hussain — CRM Integration Specialist",
    description:
      "Schedule a 30-minute strategy call or send a direct project inquiry. Guaranteed response within 4 business hours.",
    url: "https://www.crmintegrationspecialist.com/contact",
    siteName: "CRM Integration Specialists",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-ink text-text">
      <Navbar />

      <section className="relative px-4 pb-8 pt-36 text-center sm:pt-44">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-1/2 h-[380px] w-[1200px] -translate-x-1/2 -translate-y-1/2 bg-bowtie blur-2xl" />
          <div className="absolute inset-0 grid-fade" />
        </div>

        <div className="mx-auto max-w-3xl">
          <span className="eyebrow text-cyan">Direct Technical Consultation</span>
          <h1 className="mt-4 text-balance font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Contact CRM Integration Specialists
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-muted text-sm sm:text-base">
            Have a question about connecting GoHighLevel, Clio, Lawmatics, or Retell AI? Reach out directly to Ammar Hussain.
          </p>

          <div className="mt-8 grid gap-4 text-left sm:grid-cols-3">
            <div className="rounded-2xl border border-border bg-surface/70 p-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-cyan">
                <Clock size={15} />
                Response Time
              </div>
              <p className="mt-2 text-xs text-muted">
                Within 4 business hours for all inquiries.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-surface/70 p-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-brass">
                <ShieldCheck size={15} />
                NDA Protected
              </div>
              <p className="mt-2 text-xs text-muted">
                Complete attorney-client and business confidentiality.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-surface/70 p-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-cyan">
                <MapPin size={15} />
                Location
              </div>
              <p className="mt-2 text-xs text-muted">
                Remote / Worldwide (US, UK, & Global Law Firms).
              </p>
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
