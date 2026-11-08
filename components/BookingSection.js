
"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  Mail,
  CheckCircle,
  Send,
  Clock,
  ShieldCheck,
} from "lucide-react";
import { CALENDLY_URL } from "@/lib/data";

export default function BookingSection() {
  const [activeTab, setActiveTab] = useState("calendar");
  const [submitted, setSubmitted] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    firm: "",
    integration: "Personal Injury Intake & CRM Pipeline",
    message: "",
  });

  useEffect(() => {
    const handleSelectIntegration = (e) => {
      if (e?.detail) {
        setActiveTab("form");
        setFormState((prev) => ({
          ...prev,
          integration: e.detail.integration || prev.integration,
          message: e.detail.message || prev.message,
        }));
      }
    };

    window.addEventListener("select-integration", handleSelectIntegration);

    return () =>
      window.removeEventListener(
        "select-integration",
        handleSelectIntegration
      );
  }, []);

  // Web3Forms Submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    formData.append(
      "access_key",
      "fe162e9e-de61-466f-800c-160cd5d2addc"
    );

    formData.append(
      "subject",
      "New Project Inquiry - CRM Integration Specialist"
    );

    formData.append(
      "from_name",
      "CRM Integration Specialist Website"
    );

    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
        setFormState({
          name: "",
          email: "",
          firm: "",
          integration: "Personal Injury Intake & CRM Pipeline",
          message: "",
        });
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("Unable to send your inquiry. Please try again later.");
    }
  };

  return (
    <section id="booking" className="relative px-4 py-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[320px] w-[1100px] -translate-x-1/2 -translate-y-1/2 bg-bowtie blur-2xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-3xl text-center"
      >
        <span className="eyebrow text-brass">Get in Touch</span>

        <h2 className="mt-3 text-balance font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          Bring your broken webhook. Leave with a plan.
        </h2>

        <p className="mx-auto mt-3 max-w-xl text-muted text-sm sm:text-base">
          Choose between booking a 30-minute strategy call on Google Meet
          or sending a direct project inquiry below.
        </p>

        {/* Tab Switcher */}
        <div className="mt-8 inline-flex items-center rounded-xl border border-border bg-surface/80 p-1">
          <button
            type="button"
            onClick={() => setActiveTab("calendar")}
            className={`flex items-center gap-2 rounded-lg px-4 py-2 text-xs font-semibold transition-colors ${
              activeTab === "calendar"
                ? "bg-cyan/15 text-cyan border border-cyan/30"
                : "text-muted hover:text-text"
            }`}
          >
            <Calendar size={14} />
            Book Video Call (Calendly)
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("form")}
            className={`flex items-center gap-2 rounded-lg px-4 py-2 text-xs font-semibold transition-colors ${
              activeTab === "form"
                ? "bg-cyan/15 text-cyan border border-cyan/30"
                : "text-muted hover:text-text"
            }`}
          >
            <Mail size={14} />
            Send Quick Message
          </button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mx-auto mt-8 max-w-3xl overflow-hidden rounded-3xl border border-border bg-surface/70"
      >
        {activeTab === "calendar" ? (
          <div>
            <div className="flex items-center justify-between border-b border-border px-5 py-3">
              <span className="eyebrow text-muted">
                Ammar Hussain · Strategy Call
              </span>
              <span className="text-xs text-muted">
                30 min · Google Meet
              </span>
            </div>

            <div className="h-[640px] w-full">
              <iframe
                title="Book a strategy call with Ammar Hussain"
                src={`${CALENDLY_URL}?embed_domain=crmintegrationspecialist.com&embed_type=Inline&hide_gdpr_banner=1`}
                className="h-full w-full"
                frameBorder="0"
              />
            </div>
          </div>
        ) : (
          <div className="p-8 sm:p-10">
            {submitted ? (
              <div className="py-12 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-cyan/15 text-cyan">
                  <CheckCircle size={32} />
                </div>

                <h3 className="mt-4 font-display text-xl font-semibold text-text">
                  Inquiry Received!
                </h3>

                <p className="mx-auto mt-2 max-w-md text-sm text-muted">
                  Thank you, {formState.name || "there"}. Ammar will review
                  your integration stack and reply to{" "}
                  <strong>{formState.email || "your email"}</strong> within
                  4 business hours.
                </p>

                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-xs text-cyan underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-semibold text-text">
                      Your Name *
                    </label>

                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. John Doe"
                      value={formState.name}
                      onChange={(e) =>
                        setFormState({
                          ...formState,
                          name: e.target.value,
                        })
                      }
                      className="mt-1.5 w-full rounded-xl border border-border bg-ink/60 px-3.5 py-2.5 text-sm text-text placeholder-muted/60 focus:border-cyan/60 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-text">
                      Work Email *
                    </label>

                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="john@yourfirm.com"
                      value={formState.email}
                      onChange={(e) =>
                        setFormState({
                          ...formState,
                          email: e.target.value,
                        })
                      }
                      className="mt-1.5 w-full rounded-xl border border-border bg-ink/60 px-3.5 py-2.5 text-sm text-text placeholder-muted/60 focus:border-cyan/60 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-semibold text-text">
                      Law Firm / Agency
                    </label>

                    <input
                      type="text"
                      name="firm"
                      placeholder="e.g. Doe Legal Group P.C."
                      value={formState.firm}
                      onChange={(e) =>
                        setFormState({
                          ...formState,
                          firm: e.target.value,
                        })
                      }
                      className="mt-1.5 w-full rounded-xl border border-border bg-ink/60 px-3.5 py-2.5 text-sm text-text placeholder-muted/60 focus:border-cyan/60 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-text">
                      Primary Integration Needed
                    </label>

                    <select
                      name="integration"
                      value={formState.integration}
                      onChange={(e) =>
                        setFormState({
                          ...formState,
                          integration: e.target.value,
                        })
                      }
                      className="mt-1.5 w-full rounded-xl border border-border bg-ink/60 px-3.5 py-2.5 text-sm text-text focus:border-cyan/60 focus:outline-none"
                    >
                      <option value="Personal Injury & Mass Torts Architecture">
                        Personal Injury &amp; Mass Torts Architecture
                      </option>
                      <option value="Employment & Labor Law Architecture">
                        Employment &amp; Labor Law Architecture
                      </option>
                      <option value="Disability & Benefits Law (SSDI/VA) Pipeline">
                        Disability &amp; Benefits Law (SSDI/VA)
                      </option>
                      <option value="Immigration Law Intake & Retainer Stack">
                        Immigration Law Intake &amp; Retainer Stack
                      </option>
                      <option value="Criminal Defense & Traffic Rapid Retainer">
                        Criminal Defense &amp; Traffic Rapid Retainer
                      </option>
                      <option value="Workers' Compensation Legal Workflow Pipeline">
                        Workers&apos; Compensation Workflow
                      </option>
                      <option value="Family Law & Estate Planning CRM Architecture">
                        Family Law &amp; Estate Planning
                      </option>
                      <option value="Bankruptcy & Business Litigation Data Pipeline">
                        Bankruptcy &amp; Business Litigation
                      </option>
                      <option value="GoHighLevel to Clio">
                        GoHighLevel to Clio (2-Way Sync)
                      </option>
                      <option value="Monday.com Integration">
                        Monday.com CRM &amp; Work OS Sync
                      </option>
                      <option value="SmartAdvocate Integration">
                        SmartAdvocate Legal Case Sync
                      </option>
                      <option value="LawPay Integration">
                        LawPay Trust &amp; Billing Sync
                      </option>
                      <option value="GoHighLevel to Lawmatics">
                        GoHighLevel to Lawmatics
                      </option>
                      <option value="GoHighLevel to Filevine">
                        GoHighLevel to Filevine
                      </option>
                      <option value="Retell AI Voice Sync">
                        Retell AI Voice CRM Integration
                      </option>
                      <option value="n8n Webhook Middleware">
                        Custom n8n Webhook Middleware
                      </option>
                      <option value="Other / Multi-Platform">
                        Other / Multi-Platform Workflow
                      </option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-text">
                    Where are leads falling through? *
                  </label>

                  <textarea
                    name="message"
                    rows={4}
                    required
                    placeholder="Briefly describe your current setup, dropped webhooks, or what you want to automate..."
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({
                        ...formState,
                        message: e.target.value,
                      })
                    }
                    className="mt-1.5 w-full rounded-xl border border-border bg-ink/60 px-3.5 py-2.5 text-sm text-text placeholder-muted/60 focus:border-cyan/60 focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-text py-3.5 text-sm font-semibold text-ink transition-transform hover:scale-[1.01]"
                >
                  <Send size={15} />
                  Send Inquiry to Ammar
                </button>

                <div className="flex items-center justify-center gap-4 pt-2 text-[11px] text-muted">
                  <span className="flex items-center gap-1">
                    <Clock size={12} className="text-cyan" />
                    Response guaranteed within 4 hours
                  </span>

                  <span>•</span>

                  <span className="flex items-center gap-1">
                    <ShieldCheck size={12} className="text-brass" />
                    Strict confidentiality (NDA compliant)
                  </span>
                </div>
              </form>
            )}
          </div>
        )}
      </motion.div>

      <div className="mt-8 flex flex-col items-center justify-center gap-3 text-center sm:flex-row">
        <span className="text-xs text-muted">
          Direct Technical Contact:
        </span>

        <a
          href="mailto:ammarhussain0315@gmail.com"
          className="rounded-lg border border-border bg-surface/60 px-3 py-1 font-mono text-xs text-cyan transition-colors hover:border-cyan/40"
        >
          ammarhussain0315@gmail.com
        </a>
      </div>
    </section>
  );
}
