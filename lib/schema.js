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
      "description": "Custom CRM integrations, automated workflow engineering, AI voice agent deployment, and webhook infrastructure for mid-market B2B companies, agencies, and fast-scaling SaaS businesses.",
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
          "author": { "@type": "Person", "name": "Gio" },
          "reviewRating": { "@type": "Rating", "ratingValue": "5" },
          "reviewBody": "Ammar is great at what he does, very responsive and great communication."
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Imran" },
          "reviewRating": { "@type": "Rating", "ratingValue": "5" },
          "reviewBody": "Ammar was absolutely awesome to work with from start to finish."
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Imran" },
          "reviewRating": { "@type": "Rating", "ratingValue": "5" },
          "reviewBody": "This is our 2nd time using Ammar for our web solutions. He delivers beyond what is expected, a true expert in his field. Highly recommended."
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Dax" },
          "reviewRating": { "@type": "Rating", "ratingValue": "5" },
          "reviewBody": "Amazing full stack developer. High quality work with attention to detail, fast turnaround, and excellent communication."
        }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "CRM Integration & Automation Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@id": "https://www.crmintegrationspecialist.com/#service-crm-sync"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@id": "https://www.crmintegrationspecialist.com/#service-webhook-middleware"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@id": "https://www.crmintegrationspecialist.com/#service-voice-ai"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@id": "https://www.crmintegrationspecialist.com/#service-automation"
            }
          }
        ]
      }
    },
    {
      "@type": "Service",
      "@id": "https://www.crmintegrationspecialist.com/#service-crm-sync",
      "name": "Bi-Directional CRM Integration",
      "serviceType": "CRM Integration",
      "provider": { "@id": "https://www.crmintegrationspecialist.com/#organization" },
      "description": "Real-time, two-way data sync between GoHighLevel, HubSpot, Salesforce, and industry-specific CRMs, with field-level mapping and conflict resolution.",
      "areaServed": "Global"
    },
    {
      "@type": "Service",
      "@id": "https://www.crmintegrationspecialist.com/#service-webhook-middleware",
      "name": "Custom API & Webhook Middleware Development",
      "serviceType": "API Development",
      "provider": { "@id": "https://www.crmintegrationspecialist.com/#organization" },
      "description": "Purpose-built middleware for validating, transforming, and routing webhook events between CRMs and business systems, including signature verification and dead-letter handling.",
      "areaServed": "Global"
    },
    {
      "@type": "Service",
      "@id": "https://www.crmintegrationspecialist.com/#service-voice-ai",
      "name": "AI Voice Agent Deployment",
      "serviceType": "AI Voice Automation",
      "provider": { "@id": "https://www.crmintegrationspecialist.com/#organization" },
      "description": "Retell AI and Twilio voice agents integrated directly into CRM systems for live call logging, case/deal updates, and post-call workflow automation.",
      "areaServed": "Global"
    },
    {
      "@type": "Service",
      "@id": "https://www.crmintegrationspecialist.com/#service-automation",
      "name": "Workflow & Pipeline Automation",
      "serviceType": "Business Process Automation",
      "provider": { "@id": "https://www.crmintegrationspecialist.com/#organization" },
      "description": "Multi-step automation pipelines built on n8n and Make connecting intake, CRM, billing, and voice systems, with error-aware branching and audit logging.",
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