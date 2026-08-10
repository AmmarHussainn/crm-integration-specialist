export const CALENDLY_URL =
  "https://calendly.com/ammarhussain0315/book-a-strategy-call";

export const NAV_LINKS = [
  { label: "Sync Demo", href: "#simulator" },
  { label: "Ecosystem", href: "#ecosystem" },
  { label: "Services", href: "#services" },
  { label: "FAQ", href: "#faq" },
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
    description:
      "Real-time, two-way data sync between GoHighLevel and your legal CRM, so a lead updated in one system reflects instantly in the other. No more duplicate entry, no more stale pipelines.",
    points: ["Field-level mapping", "Conflict resolution logic", "Retry-safe queues"],
  },
  {
    tag: "MIDDLEWARE",
    title: "Custom API Middleware & Webhook Development",
    description:
      "Purpose-built middleware that sits between your tools, validating payloads, transforming schemas, and routing events so nothing gets lost when a webhook fires.",
    points: ["Signature verification", "Schema transformation", "Dead-letter handling"],
  },
  {
    tag: "VOICE",
    title: "AI Voice Agent Integration (Retell AI)",
    description:
      "Retell AI voice agents wired directly into your CRM, logging calls, updating case status, and triggering follow-up workflows the moment a conversation ends.",
    points: ["Live CRM write-back", "Call transcript ingestion", "Custom function calling"],
  },
  {
    tag: "AUTOMATE",
    title: "Automation & Pipeline Optimization (n8n, Zapier)",
    description:
      "Multi-step automations that connect your intake, CRM, billing, and voice tools into a single pipeline, built on n8n or Zapier depending on scale and control needed.",
    points: ["Error-aware branching", "Rate-limit aware throttling", "Audit-logged runs"],
  },
];

export const FAQS = [
  {
    question: "What does a CRM Integration Specialist actually do?",
    answer:
      "A CRM integration specialist builds the connective layer between the tools your firm already runs, like GoHighLevel and Clio, so data moves between them automatically and correctly. This means designing the API calls, handling authentication, and writing the middleware that keeps both systems in sync without manual re-entry.",
  },
  {
    question: "Can you connect GoHighLevel with Clio directly?",
    answer:
      "Yes. GoHighLevel and Clio don't sync natively, so the connection is built through a custom bi-directional webhook bridge: GoHighLevel events trigger updates in Clio, and Clio changes flow back into GoHighLevel, keeping intake and case data aligned in both places.",
  },
  {
    question: "Do you work with Lawmatics, Filevine, or CasePeer instead of Clio?",
    answer:
      "Yes. The same integration approach applies to Lawmatics, Filevine, CasePeer, Zoho, and Salesforce. Each platform has its own API quirks and rate limits, but the underlying pattern, secure webhook handling with schema transformation, stays consistent across all of them.",
  },
  {
    question: "How does Retell AI fit into a legal CRM workflow?",
    answer:
      "Retell AI handles the voice conversation, and the integration layer makes sure that conversation actually does something: writing call outcomes to the CRM, updating lead or case status, and kicking off downstream automations the moment the call ends.",
  },
  {
    question: "How long does a typical integration project take?",
    answer:
      "Most single-platform integrations, like a GoHighLevel to Clio sync, take one to three weeks depending on the number of fields, workflows, and edge cases involved. Multi-platform builds or custom voice AI integrations typically run three to six weeks.",
  },
  {
    question: "What happens after the integration is live?",
    answer:
      "Every build ships with monitoring on the webhook endpoints and a documented handoff, so your team knows exactly how data flows. Ongoing maintenance and new workflow additions are available separately for firms that want a long-term technical partner.",
  },
];
