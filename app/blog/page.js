import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingSection from "@/components/BookingSection";
import { ArrowRight, BookOpen, Clock, Tag } from "lucide-react";

export const metadata = {
  title: "Technical Articles & Integration Guides | CRM Integration Specialists",
  description:
    "In-depth technical guides on GoHighLevel webhooks, Clio API integrations, Retell AI voice automation, n8n middleware, and custom CRM engineering.",
  alternates: {
    canonical: "https://www.crmintegrationspecialist.com/blog",
  },
  openGraph: {
    title: "CRM Integration & Automation Blog",
    description:
      "Technical deep-dives into webhook architecture, bi-directional sync, and legal tech automations.",
    url: "https://www.crmintegrationspecialist.com/blog",
    siteName: "CRM Integration Specialists",
    type: "website",
  },
};

const ARTICLES = [
  {
    slug: "/ghl-clio-integration",
    title: "GoHighLevel to Clio Integration: Real-Time Bi-Directional Sync Guide",
    description:
      "Learn how custom API middleware bridges GoHighLevel intake with Clio Manage matters without manual data entry or silent webhook failures.",
    category: "Legal Tech",
    readTime: "6 min read",
  },
  {
    slug: "/retell-ai-crm-integration",
    title: "Connecting Retell AI Voice Agents to Legal & Enterprise CRMs",
    description:
      "A complete breakdown of real-time function calling, call transcript ingestion, and post-call CRM workflows with Retell AI.",
    category: "Voice AI",
    readTime: "5 min read",
  },
];

export default function BlogIndexPage() {
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
          <span className="eyebrow text-cyan">Technical Insights</span>
          <h1 className="mt-4 text-balance font-display text-4xl font-semibold leading-tight tracking-tight text-text sm:text-5xl">
            Technical Articles & CRM Integration Guides
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted sm:text-lg">
            Practical breakdowns on building fault-tolerant webhooks, bi-directional CRM bridges, and AI voice agent workflows.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="relative px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-6 sm:grid-cols-2">
            {ARTICLES.map((article) => (
              <a
                key={article.slug}
                href={article.slug}
                className="group flex flex-col justify-between rounded-2xl border border-border bg-surface/60 p-6 transition-all duration-300 hover:border-cyan/40 hover:bg-surface/90"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-muted">
                    <span className="flex items-center gap-1 text-cyan font-medium">
                      <Tag size={12} />
                      {article.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} />
                      {article.readTime}
                    </span>
                  </div>

                  <h2 className="mt-4 font-display text-xl font-semibold text-text group-hover:text-cyan transition-colors">
                    {article.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {article.description}
                  </p>
                </div>

                <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-text group-hover:text-cyan">
                  Read Guide
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <BookingSection />
      <Footer />
    </main>
  );
}
