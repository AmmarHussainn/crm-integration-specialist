import { CALENDLY_URL, NAV_LINKS } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative border-t border-border px-4 py-14">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 text-center sm:flex-row sm:items-start sm:justify-between sm:text-left">
        <div>
          <div className="flex items-center justify-center gap-2 font-display text-sm font-semibold text-text sm:justify-start">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-cyan/40 bg-cyan/10 font-mono text-xs text-cyan">
              {"{ }"}
            </span>
            CRM Integration Specialists
          </div>
          <p className="mt-3 max-w-xs text-sm text-muted">
            Ammar Hussain builds bi-directional API bridges for law firms and
            GoHighLevel agencies. Based remotely, working worldwide.
          </p>
        </div>

        <div className="flex flex-col items-center gap-3 sm:items-start">
          <span className="eyebrow text-muted">Navigate</span>
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition-colors hover:text-text"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex flex-col items-center gap-3 sm:items-start">
          <span className="eyebrow text-muted">Get Started</span>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-border px-4 py-2 text-sm font-semibold text-text transition-colors hover:border-cyan/40 hover:text-cyan"
          >
            Book a Strategy Call
          </a>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-6xl border-t border-border pt-6 text-center text-xs text-muted sm:text-left">
        © {new Date().getFullYear()} CRMIntegrationSpecialists.com — All rights reserved.
      </div>
    </footer>
  );
}
