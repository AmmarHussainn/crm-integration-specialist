import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Privacy Policy | CRM Integration Specialists",
  description:
    "Privacy Policy for CRM Integration Specialists. Explaining how we collect, process, and protect client and lead data.",
  alternates: {
    canonical: "https://www.crmintegrationspecialist.com/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-ink text-text">
      <Navbar />

      <section className="relative px-4 pb-20 pt-36 sm:pt-44">
        <div className="mx-auto max-w-3xl">
          <span className="eyebrow text-cyan">Compliance & Data Protection</span>
          <h1 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-2 text-xs font-mono text-muted">Last updated: October 2026</p>

          <div className="mt-10 space-y-8 text-sm leading-relaxed text-muted sm:text-base">
            <div>
              <h2 className="font-display text-xl font-semibold text-text">1. Overview</h2>
              <p className="mt-2">
                CRM Integration Specialists (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;), operated by Ammar Hussain, provides custom API integration, webhook middleware, and automation engineering services. We are committed to safeguarding attorney-client sensitive information and client data.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-text">2. Data We Collect</h2>
              <p className="mt-2">
                When you schedule a consultation or inquire about services, we collect contact information such as your name, business email address, company or law firm name, and information regarding your software stack.
              </p>
              <p className="mt-2">
                During integration engagements, any access to sandbox or production API keys, OAuth tokens, and test webhook payloads is conducted under strict Non-Disclosure Agreements (NDAs). We never sell, rent, or monetize client or lead data.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-text">3. Security & Middleware Governance</h2>
              <p className="mt-2">
                Middleware developed for clients is deployed within dedicated, self-hosted client infrastructure (e.g. client AWS/DigitalOcean VPCs) or secured single-tenant endpoints with encrypted environment variables, HMAC-SHA256 signature verification, and automated token revocation.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-text">4. Third-Party Services</h2>
              <p className="mt-2">
                We use Calendly for scheduling meetings and standard Google analytics/server monitoring tools. Please consult their respective privacy policies for details on their data handling practices.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-text">5. Contact Information</h2>
              <p className="mt-2">
                If you have questions regarding this Privacy Policy or data security practices, please contact us at:{" "}
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
