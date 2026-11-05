"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck,
  Award,
  ExternalLink,
  Download,
  CheckCircle2,
  X,
  FileText,
  Globe,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { CALENDLY_URL, LINKEDIN_URL, CLIO_CERT_PDF, CLIO_CERT_IMAGE } from "@/lib/data";

// Official Clio 6-dot icon SVG
export function ClioLogo({ className = "h-6 w-6" }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      {/* 6 circular dots forming the official Clio hexagonal constellation */}
      <circle cx="50" cy="18" r="10" />
      <circle cx="78" cy="34" r="10" />
      <circle cx="78" cy="66" r="10" />
      <circle cx="50" cy="82" r="10" />
      <circle cx="22" cy="66" r="10" />
      <circle cx="22" cy="34" r="10" />
    </svg>
  );
}

// LinkedIn Brand Icon SVG
export function LinkedInIcon({ className = "h-4 w-4" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.22a1.62 1.62 0 0 0-1.61 1.61c0 .89.72 1.62 1.61 1.62a1.62 1.62 0 0 0 1.62-1.62c0-.89-.73-1.61-1.62-1.61Z" />
    </svg>
  );
}

export default function CertificationsSection() {
  const [modalOpen, setModalOpen] = useState(false);

  // Listen for custom trigger from Hero badge
  useEffect(() => {
    const handleOpenCert = () => setModalOpen(true);
    window.addEventListener("open-clio-cert", handleOpenCert);
    return () => window.removeEventListener("open-clio-cert", handleOpenCert);
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [modalOpen]);

  return (
    <section
      id="certifications"
      className="relative scroll-mt-24 border-t border-border px-4 py-24 sm:py-28"
    >
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[340px] w-[1100px] -translate-x-1/2 -translate-y-1/2 bg-bowtie blur-3xl opacity-60" />
      </div>

      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan/40 bg-cyan/10 px-3.5 py-1 text-xs font-mono text-cyan">
            <ShieldCheck size={14} className="text-cyan" />
            <span>Verified Industry Credential</span>
          </div>
          <h2 className="mt-4 text-balance font-display text-3xl font-semibold tracking-tight text-text sm:text-4xl md:text-5xl">
            Clio Certified Administrator &amp; Legal CRM Authority
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-balance text-sm text-muted sm:text-base">
            Official legal tech accreditation backing enterprise-grade Clio practice management configurations, custom API bridges, and automated law firm intake pipelines.
          </p>
        </div>

        {/* Credential Showcase Card */}
        <div className="mt-14 overflow-hidden rounded-3xl border border-border bg-surface/75 backdrop-blur-xl shadow-2xl">
          <div className="grid gap-8 p-6 sm:p-10 lg:grid-cols-12 lg:items-center lg:gap-12">
            
            {/* Left Column: Certificate Preview Graphic */}
            <div className="lg:col-span-5">
              <div
                onClick={() => setModalOpen(true)}
                className="group relative cursor-pointer overflow-hidden rounded-2xl border border-border bg-ink/80 p-2 transition-all duration-300 hover:border-cyan/60 hover:shadow-[0_0_36px_-8px_rgba(76,201,240,0.45)]"
                title="Click to view full certificate"
              >
                {/* Certificate Image Thumbnail */}
                <div className="relative aspect-[1.44/1] w-full overflow-hidden rounded-xl bg-ink">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={CLIO_CERT_IMAGE}
                    alt="Clio Certified Administrator Certificate - Ammar Hussain - Legal CRM Integration Specialist"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-ink/75 opacity-0 backdrop-blur-sm transition-opacity duration-200 group-hover:opacity-100">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-cyan text-ink shadow-lg">
                      <ExternalLink size={20} />
                    </span>
                    <span className="font-display text-xs font-semibold text-text">
                      Click to Inspect Full Certificate
                    </span>
                    <span className="font-mono text-[11px] text-muted">
                      Awarded Nov 04, 2026 • Clio Academy
                    </span>
                  </div>
                </div>

                {/* Card footer strip */}
                <div className="mt-3 flex items-center justify-between px-2 py-1 text-xs text-muted">
                  <span className="flex items-center gap-1.5 font-mono text-[11px] text-live">
                    <span className="h-2 w-2 rounded-full bg-live animate-pulse" />
                    Verified by Clio Academy
                  </span>
                  <span className="font-mono text-[11px] text-muted">
                    Issued to Ammar Hussain
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Detailed Credential Specs & Competencies */}
            <div className="space-y-6 lg:col-span-7">
              <div>
                <div className="flex flex-wrap items-center gap-2.5">
                  <div className="flex items-center gap-2 rounded-lg border border-cyan/40 bg-cyan/10 px-3 py-1 font-mono text-xs font-semibold text-cyan">
                    <ClioLogo className="h-4 w-4 text-cyan" />
                    <span>Clio Certified Administrator</span>
                  </div>
                  <span className="rounded-lg border border-brass/40 bg-brass/10 px-2.5 py-1 font-mono text-xs text-brass">
                    Issued Nov 04, 2026
                  </span>
                </div>

                <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight text-text sm:text-3xl">
                  Certified Mastery in Clio Practice Management &amp; Custom API Architecture
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                  Certified expertise in building custom Clio API integrations, automating intake workflows, configuring matter management pipelines, and syncing practice management systems with GoHighLevel, n8n, and web applications.
                </p>
              </div>

              {/* Core Competencies Grid */}
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-border/80 bg-ink/50 p-3.5">
                  <div className="flex items-center gap-2 font-display text-xs font-semibold text-cyan">
                    <CheckCircle2 size={15} className="shrink-0 text-cyan" />
                    Clio REST API v4 &amp; Webhooks
                  </div>
                  <p className="mt-1 text-xs text-muted leading-relaxed">
                    Event-driven webhooks, OAuth 2.0 handshake verification, rate-limit throttling, and sub-380ms bi-directional sync.
                  </p>
                </div>

                <div className="rounded-xl border border-border/80 bg-ink/50 p-3.5">
                  <div className="flex items-center gap-2 font-display text-xs font-semibold text-brass">
                    <CheckCircle2 size={15} className="shrink-0 text-brass" />
                    Matter &amp; Intake Automation
                  </div>
                  <p className="mt-1 text-xs text-muted leading-relaxed">
                    Automated matter creation, custom field schemas, document folder categorization, and zero-touch lead conversion.
                  </p>
                </div>

                <div className="rounded-xl border border-border/80 bg-ink/50 p-3.5">
                  <div className="flex items-center gap-2 font-display text-xs font-semibold text-brass">
                    <CheckCircle2 size={15} className="shrink-0 text-brass" />
                    GoHighLevel &amp; Multi-CRM Bridges
                  </div>
                  <p className="mt-1 text-xs text-muted leading-relaxed">
                    Custom middleware linking GoHighLevel, Monday.com, SmartAdvocate, and Retell AI voice agents directly to Clio Manage.
                  </p>
                </div>

                <div className="rounded-xl border border-border/80 bg-ink/50 p-3.5">
                  <div className="flex items-center gap-2 font-display text-xs font-semibold text-cyan">
                    <CheckCircle2 size={15} className="shrink-0 text-cyan" />
                    IOLTA Billing &amp; Trust Compliance
                  </div>
                  <p className="mt-1 text-xs text-muted leading-relaxed">
                    LawPay API integrations adhering to ABA Model Rule 1.15 and state bar trust accounting rules nationwide.
                  </p>
                </div>
              </div>

              {/* Geo & Semantic Ranking Tags */}
              <div className="flex flex-wrap items-center gap-1.5 pt-1 text-[11px] text-muted">
                <span className="font-semibold text-text">Specializations:</span>
                <span className="rounded-md border border-border bg-ink/40 px-2 py-0.5">
                  Legal CRM integration specialist US/UK
                </span>
                <span className="rounded-md border border-border bg-ink/40 px-2 py-0.5">
                  Legal tech automation architect for law firms
                </span>
                <span className="rounded-md border border-border bg-ink/40 px-2 py-0.5">
                  Remote Clio setup expert
                </span>
                <span className="rounded-md border border-border bg-ink/40 px-2 py-0.5">
                  Clio API Integration Specialist
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setModalOpen(true)}
                  className="flex items-center gap-2 rounded-xl bg-text px-5 py-2.5 text-xs font-semibold text-ink transition-transform hover:scale-[1.03] active:scale-[0.98]"
                >
                  <FileText size={15} />
                  View Official Certificate
                </button>

                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-xl border border-border bg-surface px-4 py-2.5 text-xs font-semibold text-text transition-all hover:border-[#0A66C2] hover:text-[#0A66C2]"
                >
                  <LinkedInIcon className="h-4 w-4 fill-current text-[#0A66C2]" />
                  Verify on LinkedIn
                  <ExternalLink size={13} className="opacity-70" />
                </a>

                <a
                  href={CLIO_CERT_PDF}
                  download="Ammar-Hussain-Clio-Certified-Administrator.pdf"
                  className="flex items-center gap-2 rounded-xl border border-border bg-ink/60 px-4 py-2.5 text-xs font-semibold text-muted transition-colors hover:border-cyan/40 hover:text-cyan"
                >
                  <Download size={14} />
                  Download PDF
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* High-Resolution Certificate Modal */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setModalOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-ink/90 p-4 backdrop-blur-md"
            role="dialog"
            aria-modal="true"
            aria-label="Clio Certified Administrator Certificate"
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0, y: 12 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.94, opacity: 0, y: 12 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl overflow-hidden rounded-2xl border border-border bg-surface shadow-2xl"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between border-b border-border px-5 py-3.5 bg-surface/90">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-cyan/15 text-cyan">
                    <ClioLogo className="h-4 w-4 text-cyan" />
                  </span>
                  <div>
                    <h3 className="font-display text-sm font-semibold text-text">
                      Clio Certified Administrator Certificate
                    </h3>
                    <p className="text-[11px] text-muted">
                      Awarded to Ammar Hussain by Clio Academy • Nov 04, 2026
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="rounded-lg p-1.5 text-muted transition-colors hover:bg-ink hover:text-text"
                  aria-label="Close certificate modal"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Modal Image Display */}
              <div className="max-h-[75vh] overflow-y-auto bg-ink/90 p-4 sm:p-6 text-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={CLIO_CERT_IMAGE}
                  alt="Clio Certified Administrator Certificate - Ammar Hussain - Legal CRM Integration Specialist"
                  className="mx-auto rounded-xl border border-border shadow-2xl max-h-[64vh] object-contain"
                />
              </div>

              {/* Modal Actions Footer */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border px-5 py-3.5 bg-surface/90 text-xs">
                <div className="flex items-center gap-2 text-muted">
                  <span className="h-2 w-2 rounded-full bg-live" />
                  <span className="font-mono text-[11px]">Official Clio Academy Credential</span>
                </div>

                <div className="flex flex-wrap items-center gap-2.5">
                  <a
                    href={LINKEDIN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-ink px-3 py-1.5 font-medium text-text transition-colors hover:border-[#0A66C2] hover:text-[#0A66C2]"
                  >
                    <LinkedInIcon className="h-3.5 w-3.5 fill-current text-[#0A66C2]" />
                    Verify on LinkedIn
                  </a>

                  <a
                    href={CLIO_CERT_PDF}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-cyan/40 bg-cyan/10 px-3 py-1.5 font-medium text-cyan transition-colors hover:bg-cyan/20"
                  >
                    <Download size={13} />
                    Download PDF
                  </a>

                  <a
                    href={CALENDLY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg bg-text px-3 py-1.5 font-medium text-ink transition-transform hover:scale-[1.02]"
                  >
                    Book Clio Strategy Call
                    <ArrowRight size={13} />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
