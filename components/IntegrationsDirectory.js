"use client";

import { useState, useMemo } from "react";
import { ALL_CRMS, CRM_CATEGORIES } from "@/lib/crmData";
import {
  Search,
  ArrowRight,
  Filter,
  Sparkles,
  Layers,
  Zap,
  ShieldCheck,
  ChevronRight,
  Database,
  ExternalLink,
} from "lucide-react";

const CATEGORY_TABS = [
  "All Systems",
  CRM_CATEGORIES.DEDICATED,
  CRM_CATEGORIES.PRACTICE_MANAGEMENT,
  CRM_CATEGORIES.ENTERPRISE,
  CRM_CATEGORIES.GENERAL,
];

// Existing specialized custom bridges featured as highlighted connectors
const SPECIALIZED_BRIDGES = [
  {
    name: "Monday.com Legal CRM",
    category: "Work OS & Practice Board Bridge",
    href: "/monday-crm-integration",
    tag: "GraphQL & Sub-Items",
    accent: "cyan",
  },
  {
    name: "SmartAdvocate",
    category: "Personal Injury & Mass Tort",
    href: "/smartadvocate-integration",
    tag: "Case Management API",
    accent: "brass",
  },
  {
    name: "LawPay IOLTA",
    category: "Trust Accounting & Invoicing",
    href: "/lawpay-integration",
    tag: "IOLTA Compliance",
    accent: "cyan",
  },
  {
    name: "GoHighLevel ➔ Clio",
    category: "Bi-Directional Sync Bridge",
    href: "/ghl-clio-integration",
    tag: "Sub-380ms Latency",
    accent: "brass",
  },
  {
    name: "Retell AI Voice Agents",
    category: "Conversational Voice Intake",
    href: "/retell-ai-crm-integration",
    tag: "Live Function Calling",
    accent: "cyan",
  },
  {
    name: "Lead Docket ➔ Filevine",
    category: "Employment & Multi-CRM Stack",
    href: "/employment-law-automation",
    tag: "40-Q Triage & Vinesign",
    accent: "brass",
  },
];

export default function IntegrationsDirectory() {
  const [selectedCategory, setSelectedCategory] = useState("All Systems");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCrms = useMemo(() => {
    return ALL_CRMS.filter((crm) => {
      const matchesCategory =
        selectedCategory === "All Systems" || crm.category === selectedCategory;
      const matchesSearch =
        searchQuery === "" ||
        crm.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        crm.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        crm.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        crm.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="mx-auto max-w-6xl">
      {/* =========================================================
          SPECIALIZED CUSTOM BRIDGES SPOTLIGHT
      ========================================================= */}
      <div className="mb-14 rounded-3xl border border-border/80 bg-gradient-to-b from-surface/80 via-surface/60 to-surface2/80 p-6 sm:p-8 backdrop-blur shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-border/60">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-brass/30 bg-brass/10 px-3 py-1 text-xs font-mono text-brass">
              <Sparkles size={13} />
              <span>Dedicated Bridge Architecture</span>
            </div>
            <h2 className="mt-2.5 font-display text-xl sm:text-2xl font-semibold text-text">
              Specialized Multi-CRM & Practice Gateways
            </h2>
          </div>
          <span className="text-xs text-muted font-mono self-start sm:self-auto">
            Live Production Connectors
          </span>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SPECIALIZED_BRIDGES.map((bridge) => (
            <a
              key={bridge.name}
              href={bridge.href}
              className="group flex flex-col justify-between rounded-2xl border border-border bg-ink/70 p-5 transition-all hover:border-cyan/40 hover:bg-surface/90"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-display text-base font-semibold text-text group-hover:text-cyan transition-colors">
                    {bridge.name}
                  </span>
                  <ExternalLink size={14} className="text-muted group-hover:text-cyan transition-colors" />
                </div>
                <div className="mt-1 text-xs text-muted">{bridge.category}</div>
              </div>

              <div className="mt-4 pt-3 border-t border-border/60 flex items-center justify-between text-[11px] font-mono">
                <span className="text-brass">{bridge.tag}</span>
                <span className="text-cyan group-hover:translate-x-0.5 transition-transform flex items-center gap-1 font-sans font-semibold">
                  View Specs <ChevronRight size={12} />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* =========================================================
          DIRECTORY SEARCH & FILTER CONTROLS
      ========================================================= */}
      <div className="mb-8 space-y-4">
        {/* Search Input Bar */}
        <div className="relative max-w-xl mx-auto">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-muted"
          />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search 30+ legal CRMs (e.g. Lawmatics, Filevine, Clio, HubSpot)..."
            className="w-full rounded-2xl border border-border bg-surface/80 py-3.5 pl-11 pr-4 text-sm text-text placeholder-muted backdrop-blur focus:border-cyan focus:outline-none focus:ring-1 focus:ring-cyan"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-mono text-muted hover:text-text"
            >
              Clear
            </button>
          )}
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
          {CATEGORY_TABS.map((tab) => {
            const isSelected = selectedCategory === tab;
            return (
              <button
                key={tab}
                type="button"
                onClick={() => setSelectedCategory(tab)}
                className={`rounded-xl px-4 py-2 text-xs font-semibold transition-all ${
                  isSelected
                    ? "border border-cyan/40 bg-cyan/15 text-cyan shadow-[0_0_15px_-3px_rgba(76,201,240,0.3)]"
                    : "border border-border/70 bg-surface/60 text-muted hover:border-border hover:text-text"
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>
      </div>

      {/* Results Count */}
      <div className="mb-6 flex items-center justify-between text-xs text-muted font-mono px-2">
        <span>
          Showing <strong className="text-text">{filteredCrms.length}</strong> Legal CRM
          Integrations
        </span>
        <span>Directory Index</span>
      </div>

      {/* =========================================================
          CRM CARDS GRID
      ========================================================= */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredCrms.map((crm) => (
          <article
            key={crm.slug}
            className="group relative flex flex-col justify-between rounded-3xl border border-border bg-surface/60 p-6 sm:p-7 backdrop-blur transition-all duration-300 hover:border-cyan/40 hover:bg-surface/90 hover:shadow-xl hover:shadow-cyan/5"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="eyebrow rounded-full border border-border/80 bg-surface px-3 py-1 text-[10px] text-brass">
                  {crm.category}
                </span>
                <span className="font-mono text-[11px] text-cyan font-bold">
                  {crm.stats.latency}
                </span>
              </div>

              <h3 className="mt-4 font-display text-xl font-semibold text-text group-hover:text-cyan transition-colors">
                <a href={`/integrations/${crm.slug}`}>{crm.name}</a>
              </h3>

              <div className="mt-1 text-xs font-medium text-brass/90">
                {crm.badge}
              </div>

              <p className="mt-3 text-xs leading-relaxed text-muted line-clamp-3">
                {crm.description}
              </p>

              {/* Key Features Mini-List */}
              <div className="mt-4 space-y-1.5 border-t border-border/60 pt-4 text-[11px] text-slate-300">
                <div className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan shrink-0" />
                  <span className="truncate">{crm.capabilities[0].title}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-brass shrink-0" />
                  <span className="truncate">{crm.capabilities[1].title}</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-border/60 flex items-center justify-between">
              <span className="font-mono text-[10px] text-muted truncate max-w-[140px]">
                {crm.apiType}
              </span>
              <a
                href={`/integrations/${crm.slug}`}
                className="inline-flex items-center gap-1.5 rounded-xl border border-cyan/30 bg-cyan/10 px-3.5 py-1.5 text-xs font-semibold text-cyan transition-all group-hover:bg-cyan group-hover:text-ink"
              >
                Explore Specs
                <ArrowRight size={13} className="transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          </article>
        ))}
      </div>

      {filteredCrms.length === 0 && (
        <div className="rounded-3xl border border-dashed border-border p-12 text-center">
          <p className="text-sm text-muted">
            No legal CRMs found matching "{searchQuery}".
          </p>
          <button
            type="button"
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("All Systems");
            }}
            className="mt-4 rounded-xl border border-cyan/40 bg-cyan/10 px-4 py-2 text-xs font-semibold text-cyan"
          >
            Reset All Filters
          </button>
        </div>
      )}
    </div>
  );
}
