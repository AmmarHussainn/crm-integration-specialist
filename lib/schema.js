export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ammar Hussain",
  jobTitle: "API Integration Specialist & Legal CRM Automation Architect",
  url: "https://crmintegrationspecialists.com",
  worksFor: {
    "@type": "Organization",
    name: "CRM Integration Specialists",
  },
  knowsAbout: [
    "GoHighLevel API",
    "Clio API",
    "Lawmatics",
    "Filevine",
    "Zoho CRM",
    "Salesforce",
    "CasePeer",
    "Retell AI",
    "Webhook Middleware",
    "Legal CRM Automation",
    "n8n",
    "Zapier",
  ],
  sameAs: ["https://calendly.com/ammarhussain0315/book-a-strategy-call"],
};

export const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "CRM Integration Specialists",
  url: "https://crmintegrationspecialists.com",
  description:
    "Custom API integrations and automation for law firms and GoHighLevel agencies. Bi-directional bridges between GoHighLevel and Clio, Lawmatics, Filevine, and custom Voice AI agents built on Retell AI.",
  founder: {
    "@type": "Person",
    name: "Ammar Hussain",
  },
  areaServed: "Worldwide",
  serviceType: [
    "Legal CRM & GoHighLevel Bi-Directional Sync",
    "Custom API Middleware & Webhook Development",
    "AI Voice Agent Integration (Retell AI)",
    "Automation & Pipeline Optimization (n8n, Zapier)",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "47",
  },
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
