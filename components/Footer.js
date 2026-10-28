import { CALENDLY_URL, NAV_LINKS } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative border-t border-border px-4 py-16">
      <div className="mx-auto grid max-w-6xl gap-10 sm:grid-cols-2 md:grid-cols-4">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 font-display text-sm font-semibold text-text">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-cyan/40 bg-cyan/10 font-mono text-xs text-cyan">
              {"{ }"}
            </span>
            CRM Integration Specialists
          </div>
          <p className="mt-3 text-xs leading-relaxed text-muted">
            Led by Ammar Hussain. Engineering secure bi-directional API bridges and webhook middleware for law firms and agencies worldwide.
          </p>
          <div className="mt-4">
            <a
              href="mailto:ammarhussain0315@gmail.com"
              className="font-mono text-xs text-cyan hover:underline"
            >
              ammarhussain0315@gmail.com
            </a>
          </div>
        </div>

        {/* Services / Integrations */}
        <div className="flex flex-col gap-2.5">
          <span className="eyebrow text-muted">Core Services</span>
          <a href="/integrations" className="text-xs font-semibold text-cyan hover:underline">
            Legal CRM Directory (30+ Systems) →
          </a>
          <a href="/employment-law-automation" className="text-xs text-muted transition-colors hover:text-cyan">
            Employment Law & Filevine Sync
          </a>
          <a href="/#immigration-automation" className="text-xs text-muted transition-colors hover:text-cyan">
            Immigration Law Intake Automation
          </a>
          <a href="/ghl-clio-integration" className="text-xs text-muted transition-colors hover:text-cyan">
            GoHighLevel to Clio Sync
          </a>
          <a href="/monday-crm-integration" className="text-xs text-muted transition-colors hover:text-cyan">
            Monday.com CRM Integration
          </a>
          <a href="/smartadvocate-integration" className="text-xs text-muted transition-colors hover:text-cyan">
            SmartAdvocate Integration
          </a>
          <a href="/lawpay-integration" className="text-xs text-muted transition-colors hover:text-cyan">
            LawPay Trust Billing Sync
          </a>
          <a href="/n8n-webhook-middleware" className="text-xs text-muted transition-colors hover:text-cyan">
            n8n Webhook Middleware
          </a>
          <a href="/retell-ai-crm-integration" className="text-xs text-muted transition-colors hover:text-cyan">
            Retell AI Voice CRM Integration
          </a>
          <a href="/legal-automation-n8n" className="text-xs text-muted transition-colors hover:text-cyan">
            Legal Workflow Automation
          </a>
        </div>

        {/* Navigation & Guides */}
        <div className="flex flex-col gap-2.5">
          <span className="eyebrow text-muted">Resources</span>
          <a href="/blog" className="text-xs text-muted transition-colors hover:text-cyan">
            Technical Blog & Guides
          </a>
          <a href="/blog/ghl-clio-webhook-setup" className="text-xs text-muted transition-colors hover:text-cyan">
            GHL-Clio Webhook Setup
          </a>
          <a href="/blog/retell-ai-custom-function-calling-crm" className="text-xs text-muted transition-colors hover:text-cyan">
            Retell AI Function Calling
          </a>
          <a href="/blog/n8n-dead-letter-retry-queue" className="text-xs text-muted transition-colors hover:text-cyan">
            n8n Dead-Letter Retry Queue
          </a>
        </div>

        {/* Company & Legal */}
        <div className="flex flex-col gap-2.5">
          <span className="eyebrow text-muted">Company & Legal</span>
          <a href="/contact" className="text-xs text-muted transition-colors hover:text-cyan">
            Contact Ammar
          </a>
          <a href="/privacy" className="text-xs text-muted transition-colors hover:text-cyan">
            Privacy Policy
          </a>
          <a href="/terms" className="text-xs text-muted transition-colors hover:text-cyan">
            Terms of Service
          </a>
          <div className="pt-2">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-xl border border-cyan/40 bg-cyan/10 px-3.5 py-1.5 text-xs font-semibold text-cyan transition-colors hover:bg-cyan/20"
            >
              Book Strategy Call
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-6xl flex-col items-center justify-between gap-4 border-t border-border pt-6 text-xs text-muted sm:flex-row">
        <div>
          © {new Date().getFullYear()} CRMIntegrationSpecialist.com — All rights reserved.
        </div>
        <div className="flex items-center gap-4">
          <a href="/privacy" className="hover:text-text">Privacy</a>
          <span>•</span>
          <a href="/terms" className="hover:text-text">Terms</a>
          <span>•</span>
          <a href="/contact" className="hover:text-text">Contact</a>
        </div>
      </div>
    </footer>
  );
}
