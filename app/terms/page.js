import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Terms of Service | CRM Integration Specialists",
  description:
    "Terms of Service governing custom API integration, middleware development, and automation consulting services.",
  alternates: {
    canonical: "https://www.crmintegrationspecialist.com/terms",
  },
};

export default function TermsPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-ink text-text">
      <Navbar />

      <section className="relative px-4 pb-20 pt-36 sm:pt-44">
        <div className="mx-auto max-w-3xl">
          <span className="eyebrow text-brass">Legal & Service Agreements</span>
          <h1 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Terms of Service
          </h1>
          <p className="mt-2 text-xs font-mono text-muted">Last updated: October 2026</p>

          <div className="mt-10 space-y-8 text-sm leading-relaxed text-muted sm:text-base">
            <div>
              <h2 className="font-display text-xl font-semibold text-text">1. Scope of Services</h2>
              <p className="mt-2">
                CRM Integration Specialists provides software engineering, API integration, webhook middleware configuration, and workflow automation services. All engagements are governed by individual Statement of Work (SOW) documents detailing agreed-upon deliverables, milestones, and timelines.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-text">2. Warranties & Guarantee</h2>
              <p className="mt-2">
                All production builds include a minimum 30-day post-launch warranty period. During this period, any defects, API mapping mismatches, or middleware failures resulting from our code will be remedied at no additional charge.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-text">3. Intellectual Property</h2>
              <p className="mt-2">
                Upon final payment, clients receive full ownership of the custom workflows, n8n JSON templates, and custom middleware code written specifically for their organization.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-text">4. Third-Party API Platforms</h2>
              <p className="mt-2">
                Our integrations connect with third-party software including GoHighLevel, Clio, Lawmatics, Retell AI, and Salesforce. We are not liable for outages, breaking API revisions, or fee changes initiated by these third-party platforms, though we provide retainer services to adapt code when third-party changes occur.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-text">5. Contact</h2>
              <p className="mt-2">
                For questions regarding project terms or service agreements, please reach out to{" "}
                <a href="mailto:ammarhussain0315@gmail.com" className="text-cyan underline">
                  ammarhussain0315@gmail.com
                </a>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
