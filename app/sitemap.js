import { ALL_CRMS } from "@/lib/crmData";

export default function sitemap() {
  const baseUrl = "https://www.crmintegrationspecialist.com";

  // Programmatic Legal CRM Integration sub-pages
  const crmUrls = ALL_CRMS.map((crm) => ({
    url: `${baseUrl}/integrations/${crm.slug}`,
    lastModified: new Date("2026-10-28"),
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date("2026-10-28"),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    // Master Directory Index Page
    {
      url: `${baseUrl}/integrations`,
      lastModified: new Date("2026-10-28"),
      changeFrequency: "weekly",
      priority: 0.95,
    },
    // Core Service & Dedicated Bridge Pages
    {
      url: `${baseUrl}/employment-law-automation`,
      lastModified: new Date("2026-10-22"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/ghl-clio-integration`,
      lastModified: new Date("2026-09-07"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/monday-crm-integration`,
      lastModified: new Date("2026-10-22"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/smartadvocate-integration`,
      lastModified: new Date("2026-10-22"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/lawpay-integration`,
      lastModified: new Date("2026-10-22"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/n8n-webhook-middleware`,
      lastModified: new Date("2026-10-19"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/retell-ai-crm-integration`,
      lastModified: new Date("2026-09-07"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/legal-automation-n8n`,
      lastModified: new Date("2026-10-19"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    // Programmatic 30 Legal CRM Pages
    ...crmUrls,
    // Blog Index & Guides
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date("2026-10-19"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/ghl-clio-webhook-setup`,
      lastModified: new Date("2026-10-19"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/retell-ai-custom-function-calling-crm`,
      lastModified: new Date("2026-10-19"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/n8n-dead-letter-retry-queue`,
      lastModified: new Date("2026-10-19"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/clio-api-oauth-errors`,
      lastModified: new Date("2026-10-19"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    // Company & Legal Pages
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date("2026-10-19"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date("2026-10-19"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date("2026-10-19"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
