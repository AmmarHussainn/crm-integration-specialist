export const CALENDLY_URL =
  "https://calendly.com/ammarhussain0315/book-a-strategy-call";

export const NAV_LINKS = [
  { label: "Services", href: "/#services" },
  { label: "Immigration", href: "/#immigration-automation" },
  { label: "Process", href: "/#process" },
  { label: "Methodology", href: "/#methodology" },
 
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/#faq" },
];

export const TRUST_BADGES = ["GoHighLevel", "Clio", "Retell AI", "Node.js"];

export const INTEGRATIONS = [
  { name: "Clio", tag: "Legal CRM", accent: "cyan" },
  { name: "Lawmatics", tag: "Intake & CRM", accent: "brass" },
  { name: "Filevine", tag: "Case Management", accent: "cyan" },
  { name: "GoHighLevel", tag: "Marketing OS", accent: "brass" },
  { name: "Zoho", tag: "CRM", accent: "cyan" },
  { name: "Salesforce", tag: "CRM", accent: "brass" },
  { name: "CasePeer", tag: "Case Management", accent: "cyan" },
  { name: "Retell AI", tag: "Voice Agent", accent: "brass" },
];

export const SERVICES = [
  {
    tag: "SYNC",
    title: "Legal CRM & GoHighLevel Bi-Directional Sync",
    href: "/ghl-clio-integration",
    description:
      "Our GoHighLevel–Clio bridge maintains sub-380ms sync latency with 100% field-mapping accuracy. Leads and case status update in real time across both systems without manual re-entry.",
    points: ["Sub-380ms sync latency", "100% field-mapping accuracy", "Conflict resolution logic"],
  },
  {
    tag: "MIDDLEWARE",
    title: "Custom API Middleware & Webhook Development",
    href: "/n8n-webhook-middleware",
    description:
      "Purpose-built middleware on n8n and Node.js validating payloads, transforming schemas, and enforcing dead-letter retry queues so 0% of webhooks fail silently.",
    points: ["Signature verification", "Schema transformation", "Dead-letter retry queues"],
  },
  {
    tag: "VOICE",
    title: "AI Voice Agent Integration (Retell AI)",
    href: "/retell-ai-crm-integration",
    description:
      "Retell AI voice agents wired directly into your CRM, executing live function calls during calls and writing back transcripts and sentiment analysis within 2 seconds of call completion.",
    points: ["Live CRM write-back (<2s)", "Call transcript ingestion", "Custom function calling"],
  },
  {
    tag: "AUTOMATE",
    title: "Automation & Pipeline Optimization (n8n, Zapier)",
    href: "/legal-automation-n8n",
    description:
      "Multi-step pipeline automations connecting intake, CRM, billing, and voice tools across 8+ platforms into a unified workflow logged with audit trails.",
    points: ["Error-aware branching", "Rate-limit throttling", "Audit-logged runs"],
  },
];

export const FAQS = [
  {
    question: "What does a CRM Integration Specialist actually do?",
    answer:
      "A CRM integration specialist engineers secure API bridges and custom middleware connecting platforms like GoHighLevel, Clio, Lawmatics, and Retell AI. Ammar Hussain designs payload validation schemas, OAuth authentication flows, and real-time webhook listeners to ensure sub-380ms bi-directional data sync with zero duplicate records.",
  },
  {
    question: "Can you connect GoHighLevel with Clio directly?",
    answer:
      "Yes. Because GoHighLevel and Clio Manage do not sync natively, we build a custom bi-directional webhook bridge using n8n or Node.js. This automatically maps custom intake fields, generates Clio matters upon GHL pipeline updates, and maintains 100% field-mapping accuracy across both systems.",
  },
  {
    question: "Do you work with Lawmatics, Filevine, or CasePeer instead of Clio?",
    answer:
      "Yes. The same bi-directional API architecture connects Lawmatics, Filevine, CasePeer, Zoho, and Salesforce. Each integration handles platform-specific OAuth 2.0 authentication, rate limiting, and schema transformation to guarantee zero lost leads.",
  },
  {
    question: "How does Retell AI fit into a legal CRM workflow?",
    answer:
      "Retell AI voice agents handle inbound and outbound calls while our integration layer executes live function calls to query your CRM and writes call transcripts, sentiment scores, and outcome tags back to the contact record within two seconds of call termination.",
  },
  {
    question: "How long does a typical integration project take?",
    answer:
      "A single-platform integration such as a GoHighLevel to Clio bi-directional sync typically takes 1 to 3 weeks to deploy and test. Multi-system enterprise builds or Retell AI voice workflows generally take 3 to 6 weeks from technical audit to live deployment.",
  },
  {
    question: "What happens after the integration is live?",
    answer:
      "Every integration includes automated monitoring endpoints, dead-letter queue alerts, and a complete technical handoff document. Ongoing maintenance and new workflow expansions are supported under dedicated technical partnership agreements.",
  },
];
