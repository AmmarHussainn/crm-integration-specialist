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
        "Zoho CRM",
        "CasePeer",
        "Retell AI",
        "Twilio",
        "n8n",
        "Make (Integromat)",
        "Webhook Middleware",
        "OAuth 2.0",
        "CRM Bi-Directional Sync",
        "Lead Routing Automation"
      ],
      "sameAs": ["https://calendly.com/ammarhussain0315/book-a-strategy-call"]
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://www.crmintegrationspecialist.com/#service",
      "name": "CRM Integration Specialists",
      "url": "https://www.crmintegrationspecialist.com/",
      "image": "https://www.crmintegrationspecialist.com/og-image.png",
      "description": "Specialized bi-directional API bridges between GoHighLevel, Clio, Lawmatics, Filevine, and Retell AI voice agents for law firms and agencies. Custom n8n middleware and webhook engineering.",
      "founder": { "@type": "Person", "name": "Ammar Hussain" },
      "provider": {
        "@id": "https://www.crmintegrationspecialist.com/#organization"
      },
      "areaServed": [
        { "@type": "Country", "name": "United States" },
        { "@type": "Country", "name": "United Kingdom" },
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