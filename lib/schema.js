// lib/schema.js

export const siteGraphSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.crmintegrationspecialist.com/#organization",
      "name": "CRM Integration Specialists",
      "url": "https://www.crmintegrationspecialist.com/",
      "logo": "https://www.crmintegrationspecialist.com/logo.png",
      "founder": {
        "@id": "https://www.crmintegrationspecialist.com/#person-ammar-hussain"
      },
      "sameAs": [
        "https://calendly.com/ammarhussain0315/book-a-strategy-call"
      ]
    },
    {
      "@type": "Person",
      "@id": "https://www.crmintegrationspecialist.com/#person-ammar-hussain",
      "name": "Ammar Hussain",
      "jobTitle": "CRM Integration Specialist & Automation Architect",
      "worksFor": {
        "@id": "https://www.crmintegrationspecialist.com/#organization"
      },
      "knowsAbout": [
        "GoHighLevel API",
        "HubSpot API",
        "Salesforce REST API",
        "Clio API",
        "Lawmatics",
        "Filevine",
        "SmartAdvocate API",
        "Monday.com GraphQL API",
        "LawPay API & IOLTA Compliance",
        "Zoho CRM",
        "CasePeer",
        "Retell AI",
        "Twilio",
        "n8n",
        "Make (Integromat)",
        "Webhook Middleware",
        "OAuth 2.0",
        "CRM Bi-Directional Sync",
        "Lead Routing Automation",
        "Legal Trust Accounting Automation"
      ],
      "sameAs": ["https://calendly.com/ammarhussain0315/book-a-strategy-call"]
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://www.crmintegrationspecialist.com/#service",
      "name": "CRM Integration Specialists",
      "url": "https://www.crmintegrationspecialist.com/",
      "image": "https://www.crmintegrationspecialist.com/og-image.png",
      "description": "Specialized bi-directional API bridges between GoHighLevel, Clio, Lawmatics, Filevine, Monday.com, SmartAdvocate, LawPay, and Retell AI voice agents for law firms and agencies. Custom n8n middleware and webhook engineering.",
      "founder": { "@type": "Person", "name": "Ammar Hussain" },
      "provider": {
        "@id": "https://www.crmintegrationspecialist.com/#organization"
      },
      "areaServed": [
        { "@type": "Country", "name": "United States" },
        { "@type": "Country", "name": "United Kingdom" },
        { "@type": "Country", "name": "Canada" },
        { "@type": "Country", "name": "Australia" },
        { "@type": "Place", "name": "Global / Remote" }
      ],
      "priceRange": "$$-$$$",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "reviewCount": "4"
      },
      "review": [
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Imran Khan, ScaleTech Solutions" },
          "reviewRating": { "@type": "Rating", "ratingValue": "5" },
          "reviewBody": "This is our 2nd time using Ammar for our web and CRM integration solutions. He delivers beyond what is expected, a true expert in webhook architecture and bi-directional sync. Highly recommended."
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Gio Valenti, Apex Growth Agency" },
          "reviewRating": { "@type": "Rating", "ratingValue": "5" },
          "reviewBody": "Ammar is exceptionally skilled at what he does. Fast turnaround on our GoHighLevel and custom API middleware with clear communication."
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Dax Miller, CTO at LegalFlow Automations" },
          "reviewRating": { "@type": "Rating", "ratingValue": "5" },
          "reviewBody": "Amazing full stack and API integration developer. High quality work with attention to detail, sub-second sync speeds, and robust error logging."
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Marcus Vance, Vance & Associates Law" },
          "reviewRating": { "@type": "Rating", "ratingValue": "5" },
          "reviewBody": "Ammar eliminated our law firm's duplicate client entry completely. Our GoHighLevel intake now triggers Clio matters in real-time without a single dropped lead."
        }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Legal CRM Integration & Automation Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@id": "https://www.crmintegrationspecialist.com/ghl-clio-integration"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@id": "https://www.crmintegrationspecialist.com/monday-crm-integration"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@id": "https://www.crmintegrationspecialist.com/smartadvocate-integration"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@id": "https://www.crmintegrationspecialist.com/lawpay-integration"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@id": "https://www.crmintegrationspecialist.com/n8n-webhook-middleware"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@id": "https://www.crmintegrationspecialist.com/retell-ai-crm-integration"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@id": "https://www.crmintegrationspecialist.com/#immigration-law-firm-automation"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@id": "https://www.crmintegrationspecialist.com/employment-law-automation"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@id": "https://www.crmintegrationspecialist.com/legal-automation-n8n"
            }
          }
        ]
      }
    },
    {
      "@type": "Service",
      "@id": "https://www.crmintegrationspecialist.com/ghl-clio-integration",
      "name": "GoHighLevel to Clio Bi-Directional Integration",
      "serviceType": "Legal CRM Integration",
      "provider": { "@id": "https://www.crmintegrationspecialist.com/#organization" },
      "description": "Real-time, two-way data sync between GoHighLevel and Clio Manage, with field-level mapping, matter automation, and conflict resolution.",
      "areaServed": "Global"
    },
    {
      "@type": "Service",
      "@id": "https://www.crmintegrationspecialist.com/monday-crm-integration",
      "name": "Monday.com CRM & Work OS Bi-Directional Integration",
      "serviceType": "Work OS & CRM Integration",
      "provider": { "@id": "https://www.crmintegrationspecialist.com/#organization" },
      "description": "Real-time bi-directional sync connecting Monday.com Work OS with legal CRMs (Clio, Lawmatics, Filevine), GoHighLevel, and Retell AI using GraphQL API v2 and webhooks.",
      "areaServed": [
        { "@type": "Country", "name": "United States" },
        { "@type": "Country", "name": "United Kingdom" },
        { "@type": "Country", "name": "Canada" },
        { "@type": "Place", "name": "Global / Remote" }
      ]
    },
    {
      "@type": "Service",
      "@id": "https://www.crmintegrationspecialist.com/smartadvocate-integration",
      "name": "SmartAdvocate Legal Case Management API Integration",
      "serviceType": "Litigation & Personal Injury Case Management Integration",
      "provider": { "@id": "https://www.crmintegrationspecialist.com/#organization" },
      "description": "Automated case intake, bi-directional lead sync, and Retell AI voice logging for SmartAdvocate legal case management software.",
      "areaServed": [
        { "@type": "Country", "name": "United States" },
        { "@type": "Place", "name": "US Law Firms Nationwide" }
      ]
    },
    {
      "@type": "Service",
      "@id": "https://www.crmintegrationspecialist.com/lawpay-integration",
      "name": "LawPay Trust Accounting & Billing Integration",
      "serviceType": "Legal Trust Accounting & Payment Integration",
      "provider": { "@id": "https://www.crmintegrationspecialist.com/#organization" },
      "description": "Automated legal trust (IOLTA) and operating account billing integrations via LawPay API. Real-time invoice settlement and retainer link dispatch across CRMs.",
      "areaServed": [
        { "@type": "Country", "name": "United States" },
        { "@type": "Place", "name": "All 50 US State Bar Jurisdictions" }
      ]
    },
    {
      "@type": "Service",
      "@id": "https://www.crmintegrationspecialist.com/n8n-webhook-middleware",
      "name": "Custom n8n Webhook Middleware Development",
      "serviceType": "API Middleware Development",
      "provider": { "@id": "https://www.crmintegrationspecialist.com/#organization" },
      "description": "Purpose-built middleware for validating, transforming, and routing webhook events between legal CRMs, with dead-letter retry queues and signature verification.",
      "areaServed": "Global"
    },
    {
      "@type": "Service",
      "@id": "https://www.crmintegrationspecialist.com/retell-ai-crm-integration",
      "name": "Retell AI Voice Agent CRM Deployment",
      "serviceType": "AI Voice CRM Automation",
      "provider": { "@id": "https://www.crmintegrationspecialist.com/#organization" },
      "description": "Retell AI voice agents wired directly into legal CRM systems for live call logging, transcript extraction, and post-call pipeline advancement.",
      "areaServed": "Global"
    },
    {
      "@type": "Service",
      "@id": "https://www.crmintegrationspecialist.com/legal-automation-n8n",
      "name": "Legal Workflow & Pipeline Automation",
      "serviceType": "Legal Process Automation",
      "provider": { "@id": "https://www.crmintegrationspecialist.com/#organization" },
      "description": "Multi-step legal automation pipelines built on n8n connecting intake forms, Clio/Lawmatics matters, billing, and voice agents with full audit logging.",
      "areaServed": "Global"
    },
    {
      "@type": "Service",
      "@id": "https://www.crmintegrationspecialist.com/#immigration-law-firm-automation",
      "name": "Immigration Law Firm Intake Automation & Attorney Routing System",
      "serviceType": "Legal Intake Automation & CRM Integration",
      "provider": { "@id": "https://www.crmintegrationspecialist.com/#organization" },
      "description": "Enterprise-grade automated intake, qualification screening, Stripe paid consultation gating, and algorithmic attorney case matching for high-volume immigration law practices. Prevents $200k-$300k monthly lead leakage with GoHighLevel and custom API middleware.",
      "areaServed": [
        { "@type": "Country", "name": "United States" },
        { "@type": "Country", "name": "Canada" },
        { "@type": "Place", "name": "Global / Remote" }
      ]
    },
    {
      "@type": "Service",
      "@id": "https://www.crmintegrationspecialist.com/employment-law-automation",
      "name": "Employment Law Firm Intake Automation & Multi-System CRM Bridges",
      "serviceType": "Legal Tech & Voice AI Integration",
      "provider": { "@id": "https://www.crmintegrationspecialist.com/#organization" },
      "description": "Autonomous Retell AI voice intake, 40-question triage, Lead Docket to Filevine bi-directional sync, automated Vinesign retainer dispatch, and Monday.com half-lead rescue for employment law practices.",
      "areaServed": [
        { "@type": "Country", "name": "United States" },
        { "@type": "Country", "name": "Canada" },
        { "@type": "Place", "name": "Global / Remote" }
      ]
    }
  ]
};

export const faqSchema = (items) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: items.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
});