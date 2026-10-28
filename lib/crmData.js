// lib/crmData.js
// Master Data Dictionary for 30 Legal CRMs & Practice Management Platforms

export const CRM_CATEGORIES = {
  DEDICATED: "Dedicated Legal CRMs",
  PRACTICE_MANAGEMENT: "All-In-One Practice Management",
  ENTERPRISE: "Enterprise / B2B Legal",
  GENERAL: "General CRMs Tailored for Legal",
};

export const ALL_CRMS = [
  // -------------------------------------------------------------
  // GROUP 1: DEDICATED LEGAL CRMS (8)
  // -------------------------------------------------------------
  {
    slug: "lawmatics",
    name: "Lawmatics",
    category: CRM_CATEGORIES.DEDICATED,
    badge: "Intake & Marketing OS",
    accent: "cyan",
    tagline: "Intelligent Law Firm Intake, Drip Automations & Marketing Analytics",
    description:
      "Lawmatics is the premier legal client intake, marketing automation, and law firm CRM platform. We engineer custom API and webhook bridges connecting Lawmatics with GoHighLevel, Retell AI voice intake, practice management backends, and multi-channel lead acquisition funnels.",
    apiType: "REST API v2 & Real-Time Webhooks",
    stats: {
      latency: "< 340ms",
      fidelity: "100%",
      duplicateRate: "0%",
      uptime: "99.98%",
    },
    capabilities: [
      {
        title: "Automated Lead Intake & Dynamic Qualification",
        desc: "Transform raw lead forms, chat submissions, and phone calls into pre-screened Lawmatics prospects with custom field mapping and automated conflict checks.",
      },
      {
        title: "Bi-Directional Case & Contact Synchronization",
        desc: "Keep Lawmatics in sync with Clio, Filevine, or custom internal databases without duplicate records, missing status updates, or manual re-entry.",
      },
      {
        title: "Retell AI Voice Call Ingestion",
        desc: "Ingest live voice agent call recordings, transcripts, and sentiment scores directly into Lawmatics contact timelines within 2 seconds of call termination.",
      },
      {
        title: "Automated Fee Agreement & E-Signature Dispatch",
        desc: "Trigger custom retainer agreements, fee disclosures, and intake packets automatically upon prospect status change with audit-logged execution tracking.",
      },
    ],
    faqs: [
      {
        question: "How to integrate Lawmatics with automated call intake and AI voice agents?",
        answer:
          "We build a sub-second webhook bridge connecting voice AI platforms like Retell AI or Twilio directly to Lawmatics. When a call completes, our custom middleware validates the caller payload, parses triage responses (e.g., accident date, claim type, opposing party), and creates or updates the Lawmatics prospect record with call transcripts and recordings attached.",
      },
      {
        question: "Can Lawmatics sync bi-directionally with GoHighLevel and case management tools?",
        answer:
          "Yes. While native marketplace connectors offer only basic one-way triggers, our custom n8n and Node.js middleware provides true bi-directional synchronization. When a lead advances to 'Consultation Booked' in GoHighLevel or 'Retained' in Clio/Filevine, custom fields, pipeline stages, and notes sync across both systems in under 380ms.",
      },
      {
        question: "How do you prevent duplicate prospects in Lawmatics?",
        answer:
          "Our middleware runs an idempotent deduplication algorithm using E.164 phone normalization, email hashing, and name matching before making any write API calls to Lawmatics. If an existing record exists, the event appends an interaction timeline note rather than creating a duplicate contact.",
      },
      {
        question: "Can we automate retainer agreement dispatch directly from Lawmatics pipeline stages?",
        answer:
          "Yes. We configure automated triggers that dispatch customized contingent fee or hourly retainer agreements via Lawmatics e-sign or DocuSign the moment an attorney approves a qualified intake lead, dramatically shortening your speed-to-retain.",
      },
    ],
  },
  {
    slug: "clio-grow",
    name: "Clio Grow",
    category: CRM_CATEGORIES.DEDICATED,
    badge: "Intake & Client Onboarding",
    accent: "brass",
    tagline: "Streamlined Legal Intake, Online Scheduling & Matter Pipeline Tracking",
    description:
      "Clio Grow empowers law firms to manage prospective clients from first contact to signed retainer. We engineer custom API connectors that funnel leads from paid marketing, AI receptionists, and GoHighLevel into Clio Grow with zero dropouts and instant matter export to Clio Manage.",
    apiType: "Clio REST API v4 & Webhooks",
    stats: {
      latency: "< 380ms",
      fidelity: "100%",
      duplicateRate: "0%",
      uptime: "99.95%",
    },
    capabilities: [
      {
        title: "Direct Marketing Channel Ingestion",
        desc: "Route paid Google LSAs, Facebook lead forms, and referral portals straight into Clio Grow pipelines with attribution tracking and custom intake fields.",
      },
      {
        title: "Two-Way Clio Manage & CRM Sync",
        desc: "Ensure seamless hand-off from prospective status in Clio Grow to open matter in Clio Manage without losing intake questionnaires or document uploads.",
      },
      {
        title: "AI Voice & Chat Intake Integration",
        desc: "Connect Retell AI voice receptionists to qualify callers, check calendar availability, and book initial consultations directly into Clio Grow.",
      },
      {
        title: "Automated Drip Follow-Ups",
        desc: "Trigger high-converting SMS and email follow-up sequences through GoHighLevel or Make when prospects fail to complete intake questionnaires.",
      },
    ],
    faqs: [
      {
        question: "How to integrate Clio Grow with automated call intake and Retell AI?",
        answer:
          "We construct a real-time API connector using Clio's REST API v4 and webhook events. Retell AI executes live function calls during inbound calls to create Clio Grow leads, populate intake question responses, and schedule paid or free consultations directly on your firm's calendar.",
      },
      {
        question: "Can Clio Grow connect with GoHighLevel marketing funnels?",
        answer:
          "Yes. We engineer bi-directional webhook pipelines that sync contacts between GoHighLevel and Clio Grow. When an intake form is submitted in GHL, our middleware creates the lead in Clio Grow, applies custom tags, and mirrors pipeline stage updates in real time.",
      },
      {
        question: "How does the integration handle document and intake form attachments?",
        answer:
          "When a prospective client uploads medical records, accident photos, or court summons through external web forms, our API bridge securely streams the files into the Clio Grow matter document repository with SHA-256 verification.",
      },
      {
        question: "What happens when a lead is converted to an active case?",
        answer:
          "Upon conversion in Clio Grow, our automation triggers downstream matter provisioning in Clio Manage, sends a notification to your litigation Slack channel, and dispatches an automated welcome onboarding sequence to the client.",
      },
    ],
  },
  {
    slug: "captorra",
    name: "Captorra",
    category: CRM_CATEGORIES.DEDICATED,
    badge: "High-Volume Case Intake",
    accent: "cyan",
    tagline: "Enterprise Case Intake & Lead Conversion for High-Velocity Law Practices",
    description:
      "Captorra is the industry-standard case intake software for personal injury, mass tort, and high-volume litigation firms. We build custom API middleware to connect Captorra with modern marketing engines, call tracking platforms, and external case management systems.",
    apiType: "Captorra Web API & Webhook Services",
    stats: {
      latency: "< 420ms",
      fidelity: "100%",
      duplicateRate: "0%",
      uptime: "99.99%",
    },
    capabilities: [
      {
        title: "Speed-to-Lead Call Routing",
        desc: "Capture and route inbound personal injury inquiries to on-call intake specialists within 15 seconds of form submission or missed call.",
      },
      {
        title: "Mass Tort Triage & Screening",
        desc: "Automate complex medical criteria questionnaires, product qualification checks, and statute of limitations calculations in Captorra.",
      },
      {
        title: "CallRail & Marketing Attribution Sync",
        desc: "Pass keyword, campaign, and caller data from CallRail or Google Ads directly into Captorra custom fields to track exact cost per signed retainer.",
      },
      {
        title: "E-Signature & Retainer Dispatch",
        desc: "Instantly trigger DocuSign or Adobe Sign contingency retainer agreements the moment an intake specialist verifies liability and damages.",
      },
    ],
    faqs: [
      {
        question: "How to integrate Captorra with automated call intake?",
        answer:
          "We develop secure API middleware that consumes webhook payloads from Retell AI or contact center platforms and maps the caller's injury details, incident date, and insurance carrier directly into Captorra's case screening schema.",
      },
      {
        question: "Can Captorra sync with modern practice management tools like Filevine or SmartAdvocate?",
        answer:
          "Yes. When an intake lead is accepted in Captorra, our bridge automatically provisions the new matter in Filevine, SmartAdvocate, or Clio Manage, transferring all questionnaire responses and medical documentation seamlessly.",
      },
      {
        question: "How do you handle HIPAA and sensitive medical data in Captorra integrations?",
        answer:
          "All data processed through our middleware uses end-to-end TLS 1.3 encryption, zero persistent storage of protected health information (PHI) in transient queues, and strict audit logging to ensure full HIPAA compliance.",
      },
      {
        question: "Can we automate follow-up sequences for unsigned Captorra retainers?",
        answer:
          "Yes. If a retainer agreement is sent from Captorra but remains unsigned after 2 hours, our integration triggers timed multi-channel SMS and email reminder drips via GoHighLevel or Twilio.",
      },
    ],
  },
  {
    slug: "law-ruler",
    name: "Law Ruler",
    category: CRM_CATEGORIES.DEDICATED,
    badge: "Legal Intake & E-Sign",
    accent: "brass",
    tagline: "Legal Intake CRM, Softphone Dialers & Automated Contingency Retainers",
    description:
      "Law Ruler provides legal intake automation, built-in softphones, and document signing for personal injury and mass tort practices. We engineer advanced API bridges connecting Law Ruler with external CRMs, marketing platforms, and voice AI agents.",
    apiType: "Law Ruler REST API & Webhooks",
    stats: {
      latency: "< 360ms",
      fidelity: "100%",
      duplicateRate: "0%",
      uptime: "99.96%",
    },
    capabilities: [
      {
        title: "Omnichannel Lead Ingestion",
        desc: "Consolidate web form submissions, live chat, TV ads, and digital campaign leads into Law Ruler with instant round-robin attorney assignment.",
      },
      {
        title: "Two-Way Practice Management Sync",
        desc: "Automatically push signed cases into TimeSolv, Filevine, or Clio with complete client files, intake notes, and contingency fee contracts.",
      },
      {
        title: "Retell AI Voice Receptionist Link",
        desc: "Route after-hours legal intake calls to conversational AI agents that screen callers against Law Ruler qualification criteria and book appointments.",
      },
      {
        title: "Automated SMS Drips & Lead Nurture",
        desc: "Trigger intelligent text messaging workflows when leads go cold, keeping prospects engaged until an intake specialist conducts a live interview.",
      },
    ],
    faqs: [
      {
        question: "How to integrate Law Ruler with automated call intake and voice AI?",
        answer:
          "We connect Retell AI voice agents to Law Ruler via custom API middleware. When a prospect calls, the voice agent asks key screening questions, checks attorney availability, and creates a pre-qualified lead in Law Ruler with call recording URLs.",
      },
      {
        question: "Can Law Ruler sync bi-directionally with GoHighLevel?",
        answer:
          "Yes. Our middleware maintains synchronized contact statuses, custom fields, and pipeline milestones between Law Ruler and GoHighLevel, preventing duplicate communications and ensuring marketing attribution fidelity.",
      },
      {
        question: "How are retainer agreements triggered from Law Ruler?",
        answer:
          "Upon lead approval, our integration can immediately generate and dispatch a Law Ruler e-sign agreement or send contract signing triggers to DocuSign, notifying your intake team via Slack the instant the contract is signed.",
      },
      {
        question: "Does the integration support multi-office or round-robin routing in Law Ruler?",
        answer:
          "Yes. We can implement dynamic routing logic that assigns inbound leads based on geographic jurisdiction, practice area, or attorney caseload balance.",
      },
    ],
  },
  {
    slug: "legal-crm",
    name: "Legal CRM",
    category: CRM_CATEGORIES.DEDICATED,
    badge: "Cloud Legal CRM",
    accent: "cyan",
    tagline: "Comprehensive Legal Client Relationship Management & Intake Workflows",
    description:
      "Legal CRM (part of the LEAP software ecosystem) centralizes prospect intake, automated text messaging, and case conversion. We build custom API connectors that wire Legal CRM into your firm's wider digital ecosystem, eliminating manual entry and data silos.",
    apiType: "Legal CRM REST API & Webhooks",
    stats: {
      latency: "< 370ms",
      fidelity: "100%",
      duplicateRate: "0%",
      uptime: "99.97%",
    },
    capabilities: [
      {
        title: "Automated Intake & Pipeline Progression",
        desc: "Capture multi-channel leads and advance them through custom intake stages with automated status updates and team task assignments.",
      },
      {
        title: "LEAP Case Management Integration",
        desc: "Seamlessly push retained client files and intake discovery details from Legal CRM directly into LEAP legal software with zero data corruption.",
      },
      {
        title: "Voice AI Receptionist Ingestion",
        desc: "Connect Retell AI to field inbound calls 24/7, extract case details, and log caller recordings and transcripts into Legal CRM contact cards.",
      },
      {
        title: "Custom Webhook & Dead-Letter Queues",
        desc: "Engineer resilient n8n webhook middleware with exponential retry queues to ensure zero dropped leads during peak intake hours.",
      },
    ],
    faqs: [
      {
        question: "How to integrate Legal CRM with automated call intake?",
        answer:
          "We build a custom webhook endpoint that receives call completion events from Retell AI or Twilio, parses caller metadata and claim facts, and writes directly to Legal CRM via its REST API in sub-400ms.",
      },
      {
        question: "Can Legal CRM push data to external marketing tools?",
        answer:
          "Yes. When a lead's status changes in Legal CRM (e.g., 'Retained' or 'Declined'), our outbound webhook engine sends conversion signals to Google Ads, Meta, and GoHighLevel to optimize paid marketing spend.",
      },
      {
        question: "How does the integration prevent duplicate records in Legal CRM?",
        answer:
          "We implement phone and email normalization with deduplication checks. Existing contacts receive new matter associations or timeline notes instead of duplicate contact cards.",
      },
      {
        question: "What legal practice areas are best suited for Legal CRM automations?",
        answer:
          "Personal injury, family law, criminal defense, and estate planning practices benefit immensely from automated intake triage, appointment scheduling, and retainer dispatch.",
      },
    ],
  },
  {
    slug: "leaddocket",
    name: "LeadDocket",
    category: CRM_CATEGORIES.DEDICATED,
    badge: "Lead Conversion OS",
    accent: "brass",
    tagline: "High-Volume Intake Tracking, Lead Conversion & Multi-Office Routing",
    description:
      "LeadDocket is the gold-standard intake tracking and lead conversion platform for plaintiff litigation firms. We build robust API bridges connecting LeadDocket with Filevine, Monday.com, Retell AI voice agents, and multi-channel lead acquisition funnels.",
    apiType: "LeadDocket REST API & Webhooks",
    stats: {
      latency: "< 320ms",
      fidelity: "100%",
      duplicateRate: "0%",
      uptime: "99.99%",
    },
    capabilities: [
      {
        title: "Lead Docket ➔ Filevine Data Pipeline",
        desc: "Seamless lead hand-off the exact moment a case qualifies, automatically provisioning Filevine projects with 60+ custom fields and phase templates.",
      },
      {
        title: "40-Question Voice Triage Ingestion",
        desc: "Ingest deep employment, personal injury, and mass tort voice screening data from Retell AI directly into LeadDocket intake questionnaires.",
      },
      {
        title: "Half-Lead & Drop-Off Recovery",
        desc: "Automatically save partial intake calls that disconnect early and dispatch secure Monday.com or mobile form links so callers finish on their own time.",
      },
      {
        title: "Automated Vinesign & DocuSign Retainers",
        desc: "Trigger contingent fee agreements directly from LeadDocket or Filevine upon intake approval, with signed PDF write-back to case files.",
      },
    ],
    faqs: [
      {
        question: "How to integrate LeadDocket with automated call intake and Retell AI?",
        answer:
          "We build custom middleware that consumes Retell AI structured JSON payloads and maps caller responses to LeadDocket's custom fields and case criteria, creating pre-screened leads with full audio transcripts attached.",
      },
      {
        question: "How does the LeadDocket to Filevine hand-off work?",
        answer:
          "When a lead is marked 'Qualified' in LeadDocket, our middleware calls Filevine API v2 to create the project, map custom fields, apply practice area templates, and write the Filevine Project ID back to LeadDocket for 2-way tracking.",
      },
      {
        question: "What happens if a caller drops off during long intake questioning?",
        answer:
          "Our system saves partial answers into an interim buffer (e.g., Monday.com or Redis) and immediately dispatches a pre-filled mobile form link via SMS, rescuing leads that traditional firms lose to phone fatigue.",
      },
      {
        question: "Can LeadDocket track marketing campaign ROI automatically?",
        answer:
          "Yes. Our integration passes UTM parameters, CallRail tracking numbers, and Google Click IDs (GCLID) straight into LeadDocket for closed-loop ROI reporting from initial ad click to final settlement.",
      },
    ],
  },
  {
    slug: "crm-runner",
    name: "CRM Runner (Legal)",
    category: CRM_CATEGORIES.DEDICATED,
    badge: "Operations & Client Portal",
    accent: "cyan",
    tagline: "Field Operations, Secure Client Portals & Document Workflows for Law Firms",
    description:
      "CRM Runner provides law practices with modular client management, automated invoicing, GPS tracking for process servers, and document management. We engineer API connectors to streamline lead intake, billing sync, and client portal automations.",
    apiType: "CRM Runner REST API & Webhooks",
    stats: {
      latency: "< 410ms",
      fidelity: "100%",
      duplicateRate: "0%",
      uptime: "99.94%",
    },
    capabilities: [
      {
        title: "Intake-to-Portal Provisioning",
        desc: "Automatically create client records and secure portal credentials upon lead conversion, allowing clients to upload documents securely.",
      },
      {
        title: "Billing & Trust Accounting Sync",
        desc: "Sync invoices, retainer requests, and payment receipts between CRM Runner, LawPay, and external accounting software.",
      },
      {
        title: "Automated Task & Hearing Reminders",
        desc: "Trigger automated SMS and email reminders to clients and staff for court appearances, depositions, and document submission deadlines.",
      },
      {
        title: "Voice AI Call Logging",
        desc: "Log inbound inquiry transcripts from Retell AI voice agents directly into CRM Runner matter notes with auto-generated intake tasks.",
      },
    ],
    faqs: [
      {
        question: "How to integrate CRM Runner with automated call intake?",
        answer:
          "We connect Retell AI or Twilio voice systems via custom webhooks that create client profiles in CRM Runner, log call recordings, and assign follow-up tasks to the responsible attorney.",
      },
      {
        question: "Can CRM Runner sync with external payment gateways like LawPay?",
        answer:
          "Yes. We configure bi-directional payment webhooks that record client retainer deposits, split operating and IOLTA trust accounts, and update CRM Runner balance sheets in real time.",
      },
      {
        question: "How does the integration secure client document uploads?",
        answer:
          "Documents uploaded via external forms or portal links are validated, virus-scanned, encrypted, and mapped directly into the client's CRM Runner document archive.",
      },
      {
        question: "Can we trigger automated review requests from CRM Runner?",
        answer:
          "Yes. When a matter reaches 'Closed - Won' status in CRM Runner, our automation can trigger Google Review request SMS sequences via GoHighLevel.",
      },
    ],
  },
  {
    slug: "infoware-intake",
    name: "Infoware Intake",
    category: CRM_CATEGORIES.DEDICATED,
    badge: "Document & Intake Automation",
    accent: "brass",
    tagline: "Document-Centric Legal Client Intake & Automated Matter Assembly",
    description:
      "Infoware Intake specializes in document-driven legal onboarding and template automation for boutique and corporate law firms. We build API bridges that connect Infoware with CRM pipelines, billing engines, and front-end intake forms.",
    apiType: "Infoware API & Document Services",
    stats: {
      latency: "< 390ms",
      fidelity: "100%",
      duplicateRate: "0%",
      uptime: "99.96%",
    },
    capabilities: [
      {
        title: "Document Template Auto-Population",
        desc: "Merge intake questionnaire data directly into Word and PDF legal templates, retainer agreements, and initial court pleadings.",
      },
      {
        title: "Multi-Source Intake Aggregation",
        desc: "Aggregate web forms, client portal questionnaires, and voice agent notes into standardized Infoware intake packets.",
      },
      {
        title: "Practice Management Hand-Off",
        desc: "Automatically push completed Infoware intake dossiers and assembled documents into Clio, Filevine, or iManage matter workspaces.",
      },
      {
        title: "Secure Client Document Verification",
        desc: "Validate identification documents, proof of income, and corporate filings with automated checklists and deficiency alerts.",
      },
    ],
    faqs: [
      {
        question: "How to integrate Infoware Intake with automated call intake?",
        answer:
          "Our middleware receives structured JSON from Retell AI voice agents and streams claimant answers into Infoware's document assembly templates, generating instant draft intake summaries for attorney review.",
      },
      {
        question: "Can Infoware Intake push assembled documents directly to our DMS?",
        answer:
          "Yes. We build automated file transfer pipelines that deposit assembled retainer agreements and intake packets directly into iManage, NetDocuments, or Filevine.",
      },
      {
        question: "How does Infoware handle field validation across complex legal forms?",
        answer:
          "Our custom integration enforces strict schema validation, ensuring SSNs, EINs, dates of birth, and claim dates match court-approved formats before document compilation.",
      },
      {
        question: "Can clients sign assembled Infoware intake packets electronically?",
        answer:
          "Yes. Assembled documents can be routed automatically to DocuSign or Adobe Sign with automatic status updates returned to your CRM upon completion.",
      },
    ],
  },

  // -------------------------------------------------------------
  // GROUP 2: ALL-IN-ONE PRACTICE MANAGEMENT (10)
  // -------------------------------------------------------------
  {
    slug: "mycase",
    name: "MyCase",
    category: CRM_CATEGORIES.PRACTICE_MANAGEMENT,
    badge: "All-In-One Practice OS",
    accent: "cyan",
    tagline: "End-to-End Case Management, Billing, Client Portal & Lead Tracking",
    description:
      "MyCase provides complete law practice management with integrated billing, client communication, and lead tracking. We build custom API connectors to bridge MyCase with GoHighLevel, voice AI receptionists, external intake funnels, and marketing attribution tools.",
    apiType: "MyCase Open API & Webhooks",
    stats: {
      latency: "< 360ms",
      fidelity: "100%",
      duplicateRate: "0%",
      uptime: "99.98%",
    },
    capabilities: [
      {
        title: "Seamless Lead-to-Case Transition",
        desc: "Automatically convert qualified marketing prospects into active MyCase leads and matters with complete questionnaire data attached.",
      },
      {
        title: "Two-Way Calendar & Event Sync",
        desc: "Sync consultations and court dates between MyCase, Google Calendar, Outlook, and GoHighLevel with automated buffer windows.",
      },
      {
        title: "Retell AI Voice Receptionist Integration",
        desc: "Field 24/7 inbound calls with Retell AI, automatically logging client inquiries, case details, and audio recordings into MyCase notes.",
      },
      {
        title: "Automated Trust Billing & Invoicing Triggers",
        desc: "Trigger initial consultation invoices, LawPay retainer links, and payment confirmation workflows upon matter creation.",
      },
    ],
    faqs: [
      {
        question: "How to integrate MyCase with automated call intake and Retell AI?",
        answer:
          "We develop a sub-second API bridge using MyCase's Open API. When an inbound call completes in Retell AI, our middleware validates the lead data and creates a new lead or case in MyCase with the full call transcript and audio link attached.",
      },
      {
        question: "Can MyCase sync bi-directionally with GoHighLevel?",
        answer:
          "Yes. Our middleware keeps GoHighLevel marketing contacts and MyCase leads synchronized. When an attorney updates a case phase in MyCase, GoHighLevel automatically pauses intake drips and triggers client onboarding sequences.",
      },
      {
        question: "How do you prevent duplicate contacts in MyCase?",
        answer:
          "Before creating a contact, our integration queries MyCase by normalized phone number and email address. If an existing contact is found, the system links the new matter or interaction rather than duplicating the record.",
      },
      {
        question: "Can MyCase intake forms be triggered from external landing pages?",
        answer:
          "Yes. Custom landing page forms built on WordPress, Webflow, or Next.js can send webhook data straight into MyCase via our middleware with 100% field mapping accuracy.",
      },
    ],
  },
  {
    slug: "practicepanther",
    name: "PracticePanther",
    category: CRM_CATEGORIES.PRACTICE_MANAGEMENT,
    badge: "Cloud Practice Management",
    accent: "brass",
    tagline: "Automated Calendaring, Trust Accounting & Legal Workflow Automation",
    description:
      "PracticePanther is an intuitive, cloud-based legal practice management platform trusted by thousands of law firms. We engineer custom API integrations to connect PracticePanther with advanced marketing pipelines, voice AI triage, and custom webhook middleware.",
    apiType: "PracticePanther REST API v2 & Webhooks",
    stats: {
      latency: "< 350ms",
      fidelity: "100%",
      duplicateRate: "0%",
      uptime: "99.97%",
    },
    capabilities: [
      {
        title: "Automated Matter & Contact Creation",
        desc: "Generate pre-populated PracticePanther matters and contacts from web forms, call tracking, and third-party lead aggregators in real time.",
      },
      {
        title: "PantherPayments & LawPay Sync",
        desc: "Automate invoice reconciliation, retainer requests, and trust deposit logging across your financial and CRM systems.",
      },
      {
        title: "Voice AI Call Transcription Sync",
        desc: "Wire Retell AI voice agents directly into PracticePanther, automatically creating time entries and logging detailed call transcripts.",
      },
      {
        title: "Custom Document Template Merging",
        desc: "Populate retainer agreements, medical release forms, and engagement letters directly from PracticePanther custom fields.",
      },
    ],
    faqs: [
      {
        question: "How to integrate PracticePanther with automated call intake?",
        answer:
          "We engineer a custom webhook listener that ingests Retell AI call outcomes, maps caller answers to PracticePanther custom fields, creates a new contact and matter, and logs the call duration as a billable or non-billable activity.",
      },
      {
        question: "Can PracticePanther sync with GoHighLevel pipelines?",
        answer:
          "Yes. Our custom integration creates bi-directional synchronization between GoHighLevel pipeline stages and PracticePanther matter statuses, ensuring your marketing and legal teams operate from a single source of truth.",
      },
      {
        question: "How does the integration handle custom fields in PracticePanther?",
        answer:
          "Our middleware performs schema validation against PracticePanther's API v2, correctly casting dates, currency, dropdowns, and text fields to prevent payload rejections or silent dropouts.",
      },
      {
        question: "Can we automate client review requests upon case closure in PracticePanther?",
        answer:
          "Yes. When an attorney changes a matter status to 'Closed' in PracticePanther, our webhook triggers automated Google Review request campaigns through GoHighLevel or Twilio.",
      },
    ],
  },
  {
    slug: "smokeball",
    name: "Smokeball",
    category: CRM_CATEGORIES.PRACTICE_MANAGEMENT,
    badge: "Productivity & Auto-Time",
    accent: "cyan",
    tagline: "Automatic Time Tracking, Document Automation & Legal Case Management",
    description:
      "Smokeball provides automated legal practice management with unique automatic time capture and comprehensive document automation. We build API bridges connecting Smokeball with front-end intake funnels, marketing CRMs, and AI voice receptionists.",
    apiType: "Smokeball Public API & Data Connectors",
    stats: {
      latency: "< 400ms",
      fidelity: "100%",
      duplicateRate: "0%",
      uptime: "99.96%",
    },
    capabilities: [
      {
        title: "Intake-to-Matter Provisioning",
        desc: "Streamline the flow from prospect intake to active Smokeball matter with automated stage assignment and team notifications.",
      },
      {
        title: "Automate Time & Activity Logging",
        desc: "Capture every inbound communication, consultation call, and document review automatically in Smokeball's activity ledger.",
      },
      {
        title: "Retell AI Inbound Voice Sync",
        desc: "Deploy 24/7 AI voice receptionists that triage inquiries and log structured call summaries directly into Smokeball matters.",
      },
      {
        title: "Bi-Directional Lead Drip Integration",
        desc: "Connect Smokeball with GoHighLevel to nurture prospective clients until they sign retainer agreements and pay initial deposits.",
      },
    ],
    faqs: [
      {
        question: "How to integrate Smokeball with automated call intake?",
        answer:
          "We build custom middleware that captures Retell AI call transcripts and webhook data, formats the caller's case facts, and inserts a new matter lead directly into Smokeball with task assignments for your legal team.",
      },
      {
        question: "Can Smokeball sync with external marketing platforms like GoHighLevel?",
        answer:
          "Yes. When a prospect submits an inquiry via GoHighLevel, our bridge transfers the contact details into Smokeball. When Smokeball marks the matter active, GHL immediately halts intake nurture campaigns.",
      },
      {
        question: "How does the integration support Smokeball document automation?",
        answer:
          "Data captured during online intake is mapped directly into Smokeball custom fields, allowing your paralegals to generate 100% accurate engagement letters and court forms with a single click.",
      },
      {
        question: "Can we integrate Smokeball with custom calendar scheduling?",
        answer:
          "Yes. Our integration coordinates between Calendly, GoHighLevel calendars, and Smokeball to ensure consultations never conflict with court appearances or depositions.",
      },
    ],
  },
  {
    slug: "cosmolex",
    name: "CosmoLex",
    category: CRM_CATEGORIES.PRACTICE_MANAGEMENT,
    badge: "IOLTA & Accounting Hub",
    accent: "brass",
    tagline: "Practice Management, Compliant Legal Trust Accounting & Billing Integration",
    description:
      "CosmoLex combines legal practice management with full legal trust (IOLTA) accounting, eliminating the need for third-party accounting software. We build custom API middleware connecting CosmoLex with legal intake pipelines, voice agents, and billing gateways.",
    apiType: "CosmoLex REST API & Webhooks",
    stats: {
      latency: "< 380ms",
      fidelity: "100%",
      duplicateRate: "0%",
      uptime: "99.98%",
    },
    capabilities: [
      {
        title: "Compliant IOLTA Trust Deposit Sync",
        desc: "Automate retainer payment reconciliation into CosmoLex trust ledgers with automatic split of operating and trust accounts.",
      },
      {
        title: "Automated Matter Ingestion",
        desc: "Transform signed intake leads into fully configured CosmoLex matters with custom rates, billing methods, and practice templates.",
      },
      {
        title: "AI Voice Call Transcription & Billing",
        desc: "Record consultation call summaries from Retell AI voice agents and attach them directly to CosmoLex client matter histories.",
      },
      {
        title: "Multi-Platform CRM Synchronization",
        desc: "Keep CosmoLex synchronized with GoHighLevel and Lawmatics, preventing duplicate client entry across intake and accounting.",
      },
    ],
    faqs: [
      {
        question: "How to integrate CosmoLex with automated call intake?",
        answer:
          "We create a webhook bridge connecting Retell AI to the CosmoLex REST API. Inbound call outcomes, caller details, and case summaries are logged directly into CosmoLex client records with automated attorney follow-up tasks.",
      },
      {
        question: "How does the integration ensure IOLTA compliance in CosmoLex?",
        answer:
          "Our payment middleware segregates earned consultation fees from unearned retainer deposits, ensuring compliance with State Bar trust accounting rules and writing precise ledger entries into CosmoLex.",
      },
      {
        question: "Can CosmoLex sync with external CRMs like GoHighLevel?",
        answer:
          "Yes. Our bi-directional sync keeps contact information, addresses, and matter statuses aligned between GoHighLevel and CosmoLex in sub-400ms.",
      },
      {
        question: "Can invoice status updates in CosmoLex trigger automated reminders?",
        answer:
          "Yes. When an invoice reaches overdue status in CosmoLex, our webhook can trigger automated polite SMS and email payment reminders through GoHighLevel or Twilio.",
      },
    ],
  },
  {
    slug: "filevine",
    name: "Filevine",
    category: CRM_CATEGORIES.PRACTICE_MANAGEMENT,
    badge: "Enterprise Case Workflows",
    accent: "cyan",
    tagline: "Collaborative Legal Work Platform, Litigation Management & Vinesign E-Sign",
    description:
      "Filevine is the leading case management platform for litigation, personal injury, and enterprise law firms. We build bi-directional API bridges connecting Filevine with LeadDocket, Monday.com, Retell AI voice agents, and automated Vinesign contract workflows.",
    apiType: "Filevine API v2 & Vinesign Webhooks",
    stats: {
      latency: "< 320ms",
      fidelity: "100%",
      duplicateRate: "0%",
      uptime: "99.99%",
    },
    capabilities: [
      {
        title: "Lead Docket ➔ Filevine Data Pipeline",
        desc: "Seamless lead hand-off the instant a matter qualifies, automatically provisioning Filevine projects with 60+ custom fields and practice templates.",
      },
      {
        title: "Automated Vinesign Contract Dispatch",
        desc: "Instantly generate and trigger contingency fee agreements directly out of Filevine upon intake approval, with automatic phase advancement on signature.",
      },
      {
        title: "Retell AI 40-Question Voice Triage",
        desc: "Field complex wrongful termination, personal injury, and mass tort calls via AI voice agents and map structured JSON directly into Filevine sections.",
      },
      {
        title: "Monday.com & GHL Bi-Directional Bridge",
        desc: "Maintain real-time synchronization between Filevine project milestones, Monday.com operational boards, and GoHighLevel marketing funnels.",
      },
    ],
    faqs: [
      {
        question: "How to integrate Filevine with automated call intake and Retell AI?",
        answer:
          "We build an API bridge using Filevine API v2. When a Retell AI call concludes, our middleware parses the transcript, extracts claimant details and legal claims, and provisions a new Filevine project or activity item with the audio recording attached.",
      },
      {
        question: "How does the automated Vinesign retainer dispatch work?",
        answer:
          "When a case reaches 'Intake Approved' in Filevine or LeadDocket, our webhook creates a pre-filled Vinesign fee agreement. When the client signs, the executed PDF files into Filevine Docs and advances the project phase automatically.",
      },
      {
        question: "Can Filevine sync bi-directionally with LeadDocket and Monday.com?",
        answer:
          "Yes. We specialize in multi-CRM legal stacks (Lead Docket ➔ Filevine ➔ Monday.com). Phase updates, notes, and task completions sync across all platforms in under 380ms with cryptographic deduplication.",
      },
      {
        question: "How does the integration handle complex Filevine custom forms?",
        answer:
          "Our middleware dynamically retrieves your Filevine project template schemas and validates incoming payloads against custom field types, dropdowns, and date pickers to prevent API errors.",
      },
    ],
  },
  {
    slug: "actionstep",
    name: "Actionstep",
    category: CRM_CATEGORIES.PRACTICE_MANAGEMENT,
    badge: "Process-Driven Practice OS",
    accent: "brass",
    tagline: "Workflow-Driven Practice Management & Enterprise Legal Process Automation",
    description:
      "Actionstep is a modern, process-driven practice management software with built-in step-by-step workflow automation. We build custom API integrations to connect Actionstep with external intake funnels, marketing platforms, and voice AI triage.",
    apiType: "Actionstep REST API & Webhook Services",
    stats: {
      latency: "< 370ms",
      fidelity: "100%",
      duplicateRate: "0%",
      uptime: "99.98%",
    },
    capabilities: [
      {
        title: "Automated Matter Ingestion by Practice Type",
        desc: "Route intake data directly into specific Actionstep matter workflow types with pre-configured step sequences and task checklists.",
      },
      {
        title: "Two-Way Marketing CRM Sync",
        desc: "Sync contacts and pipeline stages between Actionstep and GoHighLevel or HubSpot to track lead progression and automate follow-ups.",
      },
      {
        title: "Retell AI Inbound Call Transcription",
        desc: "Ingest client triage calls into Actionstep matter notes, automatically assigning initial review steps to responsible paralegals.",
      },
      {
        title: "Accounting & Trust Ledger Sync",
        desc: "Bridge Actionstep's trust accounting with LawPay and external payment processors for real-time retainer reconciliation.",
      },
    ],
    faqs: [
      {
        question: "How to integrate Actionstep with automated call intake?",
        answer:
          "We build a custom webhook middleware pipeline that ingests Retell AI or Twilio voice data, maps caller responses to Actionstep matter data collections, and moves the matter to the initial review step.",
      },
      {
        question: "Can Actionstep sync with GoHighLevel and external landing pages?",
        answer:
          "Yes. Leads submitted through custom landing pages or GoHighLevel funnels are validated and pushed into Actionstep, while matter status updates flow back to trigger marketing automations.",
      },
      {
        question: "How does the integration interact with Actionstep step workflows?",
        answer:
          "Our API calls can programmatically advance an Actionstep matter from one step to the next upon specific events, such as when an intake payment is verified or a retainer is signed.",
      },
      {
        question: "How are documents attached to Actionstep matters via API?",
        answer:
          "Uploaded intake evidence, ID verification, and signed retainer PDFs are transferred directly into Actionstep's matter document folder with metadata tagging.",
      },
    ],
  },
  {
    slug: "rocket-matter",
    name: "Rocket Matter",
    category: CRM_CATEGORIES.PRACTICE_MANAGEMENT,
    badge: "Cloud Billing & Matters",
    accent: "cyan",
    tagline: "Cloud Legal Practice Management, Automated Invoicing & Time Tracking",
    description:
      "Rocket Matter helps law firms increase billable hours, streamline case management, and automate trust billing. We build custom API connectors connecting Rocket Matter with front-end intake funnels, voice AI agents, and marketing automation tools.",
    apiType: "Rocket Matter REST API & Webhooks",
    stats: {
      latency: "< 360ms",
      fidelity: "100%",
      duplicateRate: "0%",
      uptime: "99.96%",
    },
    capabilities: [
      {
        title: "Instant Matter Creation from Intake",
        desc: "Convert qualified web and phone inquiries directly into Rocket Matter cases with custom field mappings and attorney assignments.",
      },
      {
        title: "Automated Time Entry for Consultations",
        desc: "Automatically record consultation call durations from Retell AI or phone systems into Rocket Matter as billable or non-billable time entries.",
      },
      {
        title: "Two-Way Calendar Synchronization",
        desc: "Keep Rocket Matter calendars aligned with Google Calendar, Outlook, and Calendly to prevent double-booking consultations.",
      },
      {
        title: "Payment Gateway Reconciliation",
        desc: "Sync online retainer payments from LawPay or Stripe directly into Rocket Matter trust accounts with automated receipt dispatch.",
      },
    ],
    faqs: [
      {
        question: "How to integrate Rocket Matter with automated call intake?",
        answer:
          "We engineer an API integration that captures Retell AI call outcomes, creates a new contact and matter in Rocket Matter, logs the transcript in matter notes, and schedules an attorney review task.",
      },
      {
        question: "Can Rocket Matter connect with GoHighLevel?",
        answer:
          "Yes. Our middleware synchronizes leads between GoHighLevel and Rocket Matter, ensuring new prospects are tracked through both intake pipelines and active case management.",
      },
      {
        question: "How do you avoid duplicate contacts in Rocket Matter?",
        answer:
          "We implement normalized phone and email lookups prior to record creation. If a matching contact exists, the integration appends the new matter to the existing profile.",
      },
      {
        question: "Can we automate retainer agreement dispatch from Rocket Matter?",
        answer:
          "Yes. When an intake matter is approved in Rocket Matter, our integration triggers an automated DocuSign or Adobe Sign contract workflow to the client.",
      },
    ],
  },
  {
    slug: "caret-legal",
    name: "CARET Legal",
    category: CRM_CATEGORIES.PRACTICE_MANAGEMENT,
    badge: "End-to-End Enterprise OS",
    accent: "brass",
    tagline: "Complete Legal Practice Management & Native Double-Entry Accounting",
    description:
      "CARET Legal (formerly Zola Suite) offers a complete legal practice management platform with built-in corporate and trust accounting. We engineer custom API integrations connecting CARET Legal with modern lead acquisition funnels, voice AI agents, and CRM bridges.",
    apiType: "CARET Legal Open API & Webhooks",
    stats: {
      latency: "< 370ms",
      fidelity: "100%",
      duplicateRate: "0%",
      uptime: "99.98%",
    },
    capabilities: [
      {
        title: "Automated Matter Ingestion",
        desc: "Streamline new client onboarding by mapping digital intake forms directly into CARET Legal matters with custom practice area fields.",
      },
      {
        title: "Native Trust Accounting Sync",
        desc: "Ensure seamless synchronization between online retainer collections, LawPay gateways, and CARET Legal's native double-entry ledger.",
      },
      {
        title: "Voice AI Call Transcription Ingestion",
        desc: "Log Retell AI call recordings, AI summaries, and caller sentiment scores directly into CARET Legal matter communication logs.",
      },
      {
        title: "Marketing CRM Pipeline Integration",
        desc: "Bridge CARET Legal with GoHighLevel or HubSpot to track prospective clients from initial ad click to final invoice payment.",
      },
    ],
    faqs: [
      {
        question: "How to integrate CARET Legal with automated call intake and Retell AI?",
        answer:
          "We build a custom webhook middleware bridge that ingests Retell AI call completion events, parses the caller's legal details, and creates a new matter and contact in CARET Legal in under 400ms.",
      },
      {
        question: "Can CARET Legal sync bi-directionally with GoHighLevel?",
        answer:
          "Yes. Our middleware maintains real-time synchronization between GoHighLevel pipelines and CARET Legal matters, updating statuses and notes across both platforms automatically.",
      },
      {
        question: "How does the integration support CARET Legal's native accounting?",
        answer:
          "We configure payment webhooks that record client payments directly against CARET Legal invoices and trust accounts, maintaining perfect balance sheets without manual bookkeeping.",
      },
      {
        question: "How are document uploads handled in CARET Legal integrations?",
        answer:
          "Client-uploaded evidence, discovery files, and signed retainer agreements are automatically uploaded into the CARET Legal matter document folder with appropriate folder structures.",
      },
    ],
  },
  {
    slug: "centerbase",
    name: "Centerbase",
    category: CRM_CATEGORIES.PRACTICE_MANAGEMENT,
    badge: "Configurable Enterprise OS",
    accent: "cyan",
    tagline: "Highly Configurable Legal Practice Management, Billing & Accounting",
    description:
      "Centerbase is a highly customizable legal practice management and accounting software built for mid-sized and growing law firms. We build custom API connectors to bridge Centerbase with front-end intake funnels, voice AI agents, and external marketing CRMs.",
    apiType: "Centerbase REST API & Webhooks",
    stats: {
      latency: "< 380ms",
      fidelity: "100%",
      duplicateRate: "0%",
      uptime: "99.98%",
    },
    capabilities: [
      {
        title: "Custom Item & Record Mapping",
        desc: "Map complex intake data into Centerbase's custom-built tables, custom fields, and practice-specific relationship structures.",
      },
      {
        title: "Automated Retainer & Billing Sync",
        desc: "Bridge online payment collections directly into Centerbase client accounting, split trust and operating funds, and reconcile invoices.",
      },
      {
        title: "Retell AI Inbound Call Logging",
        desc: "Automatically record phone intake conversations, transcripts, and action items directly into Centerbase client matter timelines.",
      },
      {
        title: "Bi-Directional Pipeline Integration",
        desc: "Sync lead stages between GoHighLevel or HubSpot and Centerbase to maintain unified visibility across marketing and legal teams.",
      },
    ],
    faqs: [
      {
        question: "How to integrate Centerbase with automated call intake?",
        answer:
          "We engineer custom middleware that interfaces with Centerbase's REST API. Retell AI voice agents query client records during calls and push new intake matter files with transcripts directly into Centerbase.",
      },
      {
        question: "Can Centerbase sync with GoHighLevel?",
        answer:
          "Yes. Our middleware maps GoHighLevel intake opportunities to Centerbase matters, keeping contact details, notes, and pipeline milestones synchronized.",
      },
      {
        question: "How do you handle Centerbase's highly customized data schemas?",
        answer:
          "Our middleware dynamically queries Centerbase's item definitions, ensuring that all custom lookup fields, dropdowns, and required relationships are populated cleanly without schema errors.",
      },
      {
        question: "Can retainer agreements be triggered from Centerbase?",
        answer:
          "Yes. When an intake matter moves to 'Approved' in Centerbase, our automation generates and dispatches a customized retainer agreement via DocuSign or Adobe Sign.",
      },
    ],
  },
  {
    slug: "meruscase",
    name: "MerusCase",
    category: CRM_CATEGORIES.PRACTICE_MANAGEMENT,
    badge: "Workers' Comp & Litigation",
    accent: "brass",
    tagline: "Workers' Comp, Employment & Personal Injury Case Management Software",
    description:
      "MerusCase is the specialized cloud-based practice management platform for workers' compensation, personal injury, and employment law firms. We build API bridges to connect MerusCase with automated intake funnels, voice AI agents, and marketing pipelines.",
    apiType: "MerusCase REST API v2 & Webhooks",
    stats: {
      latency: "< 360ms",
      fidelity: "100%",
      duplicateRate: "0%",
      uptime: "99.97%",
    },
    capabilities: [
      {
        title: "Workers' Comp Intake Triage",
        desc: "Capture injury dates, employer details, claims administrators, and DWC/WCAB case numbers automatically from online forms and phone intake.",
      },
      {
        title: "Court Form & Pleading Automation",
        desc: "Push validated intake data directly into MerusCase's automated court form generation engine for immediate application filing.",
      },
      {
        title: "Retell AI Voice Receptionist Link",
        desc: "Deploy AI voice agents to triage injured worker inquiries 24/7, extracting injury facts and creating pre-screened MerusCase files.",
      },
      {
        title: "GoHighLevel & Marketing Sync",
        desc: "Sync prospective claimant statuses between GoHighLevel ad funnels and MerusCase to eliminate manual double-entry.",
      },
    ],
    faqs: [
      {
        question: "How to integrate MerusCase with automated call intake?",
        answer:
          "We develop a custom webhook connector that ingests Retell AI voice call summaries, parses injury details and employer information, and creates a new case in MerusCase with audio links attached.",
      },
      {
        question: "Can MerusCase sync with GoHighLevel pipelines?",
        answer:
          "Yes. Our middleware creates real-time bi-directional sync between GoHighLevel and MerusCase, updating contact records and case stages automatically.",
      },
      {
        question: "How does the integration handle workers' comp specific data in MerusCase?",
        answer:
          "Our integration maps state-specific workers' comp fields (such as employer carrier, body parts injured, date of injury, and doctor info) directly into MerusCase's specialized data tables.",
      },
      {
        question: "Can we automate retainer agreement dispatch for MerusCase inquiries?",
        answer:
          "Yes. When a claimant qualifies during intake, our automation can immediately dispatch an electronic DWC-approved attorney disclosure and retainer agreement via SMS.",
      },
    ],
  },

  // -------------------------------------------------------------
  // GROUP 3: ENTERPRISE / B2B LEGAL (5)
  // -------------------------------------------------------------
  {
    slug: "nexl",
    name: "Nexl",
    category: CRM_CATEGORIES.ENTERPRISE,
    badge: "Relationship Intelligence",
    accent: "cyan",
    tagline: "No-Data-Entry CRM & Relationship Intelligence for Law Firms",
    description:
      "Nexl is an enterprise CRM and relationship intelligence platform that captures interactions automatically from email, calendar, and marketing channels. We build custom API connectors to bridge Nexl with corporate intake pipelines, marketing automation, and practice management backends.",
    apiType: "Nexl REST API & Webhooks",
    stats: {
      latency: "< 340ms",
      fidelity: "100%",
      duplicateRate: "0%",
      uptime: "99.99%",
    },
    capabilities: [
      {
        title: "Passive Relationship Graph Sync",
        desc: "Integrate inbound enterprise client leads and corporate inquiries into Nexl's relationship mapping engine without manual data entry.",
      },
      {
        title: "B2B Legal Pipeline Tracking",
        desc: "Connect enterprise business development pipelines between Nexl, HubSpot, and corporate intake systems for complete deal visibility.",
      },
      {
        title: "Corporate Client Onboarding Workflows",
        desc: "Automate conflict of interest checks, engagement letter approvals, and matter intake routing across practice groups.",
      },
      {
        title: "Event & Webinar Lead Ingestion",
        desc: "Capture corporate legal webinar registrations, CLE attendees, and newsletter signups directly into Nexl key client accounts.",
      },
    ],
    faqs: [
      {
        question: "How to integrate Nexl with automated legal intake?",
        answer:
          "We build an API bridge that feeds corporate legal inquiries from web portals or voice receptionists into Nexl, mapping company domains, key decision makers, and estimated deal value.",
      },
      {
        question: "Can Nexl sync with enterprise practice management platforms?",
        answer:
          "Yes. We configure bi-directional integrations between Nexl and platforms like Clio, Intapp, or Elite 3E to ensure client relationship data remains consistent across the firm.",
      },
      {
        question: "How does Nexl handle contact deduplication and domain enrichment?",
        answer:
          "Nexl automatically parses corporate email domains and enriches company profiles. Our middleware ensures incoming webhook events merge seamlessly into existing account hierarchies.",
      },
      {
        question: "Can Nexl trigger automated client nurture campaigns?",
        answer:
          "Yes. Our integration can trigger targeted executive email nurture campaigns through HubSpot or GoHighLevel when key relationship milestones are reached in Nexl.",
      },
    ],
  },
  {
    slug: "intapp-dealcloud",
    name: "Intapp DealCloud",
    category: CRM_CATEGORIES.ENTERPRISE,
    badge: "Enterprise Deal & Client OS",
    accent: "brass",
    tagline: "Enterprise Deal Management, Relationship Intelligence & Institutional Legal CRM",
    description:
      "Intapp DealCloud is the premier enterprise CRM and relationship management platform for institutional law firms, investment banks, and private capital firms. We engineer enterprise-grade API pipelines connecting DealCloud with corporate intake, business development, and practice management systems.",
    apiType: "DealCloud REST API v2 & Webhooks",
    stats: {
      latency: "< 410ms",
      fidelity: "100%",
      duplicateRate: "0%",
      uptime: "99.99%",
    },
    capabilities: [
      {
        title: "Institutional Matter Ingestion",
        desc: "Streamline complex corporate matter onboarding, cross-border deal tracking, and institutional client relationship management in DealCloud.",
      },
      {
        title: "Enterprise Conflict Check Integration",
        desc: "Trigger automated corporate entity lookups, parent-subsidiary mapping, and conflict checks prior to deal creation in DealCloud.",
      },
      {
        title: "Bi-Directional Financial Sync",
        desc: "Sync billing figures, realization rates, and matter revenue between DealCloud and enterprise accounting platforms like Aderant or Elite 3E.",
      },
      {
        title: "Executive Relationship Analytics",
        desc: "Aggregate communications from partner email, conference interactions, and digital touchpoints into unified DealCloud account dossiers.",
      },
    ],
    faqs: [
      {
        question: "How to integrate DealCloud with external corporate intake portals?",
        answer:
          "We develop secure API middleware utilizing DealCloud's REST API v2 to ingest corporate client inquiries, map complex entity relationships, and assign deal leads to industry practice leaders.",
      },
      {
        question: "How do you manage authentication and security in DealCloud integrations?",
        answer:
          "All connections use enterprise OAuth 2.0 with automatic token refresh, HMAC payload verification, IP whitelisting, and SOC 2 Type II compliant middleware infrastructure.",
      },
      {
        question: "Can DealCloud sync with HubSpot or marketing automation tools?",
        answer:
          "Yes. Our middleware maintains two-way synchronization between DealCloud institutional accounts and marketing automation platforms for executive event and thought leadership outreach.",
      },
      {
        question: "Can we build automated partner alerts from DealCloud deal milestones?",
        answer:
          "Yes. Our integration can dispatch encrypted Slack or Microsoft Teams alerts to practice group leaders when high-value deals advance or require conflict clearance.",
      },
    ],
  },
  {
    slug: "lexisnexis-interaction",
    name: "LexisNexis InterAction",
    category: CRM_CATEGORIES.ENTERPRISE,
    badge: "Enterprise Legal CRM",
    accent: "cyan",
    tagline: "Enterprise Relationship Management & Business Development for Large Law Firms",
    description:
      "LexisNexis InterAction is the legacy relationship management software designed specifically for large law firms to uncover relationship capital and drive business development. We build modern API middleware connecting InterAction with modern marketing automation, events, and intake systems.",
    apiType: "InterAction REST API & Integration Services",
    stats: {
      latency: "< 430ms",
      fidelity: "100%",
      duplicateRate: "0%",
      uptime: "99.98%",
    },
    capabilities: [
      {
        title: "Modern Inbound Lead Ingestion",
        desc: "Channel modern digital inquiries, website form submissions, and thought leadership downloads into InterAction's enterprise contact database.",
      },
      {
        title: "Relationship Intelligence Sync",
        desc: "Sync key client relationship scores, board affiliations, and alumni connections between InterAction and modern business intelligence tools.",
      },
      {
        title: "Marketing Automation Synchronization",
        desc: "Bridge InterAction with HubSpot or Marketo, keeping enterprise client lists, opt-outs, and communication preferences aligned.",
      },
      {
        title: "Conflict & Practice Group Routing",
        desc: "Route corporate prospects to the correct practice group leader with automated preliminary conflict checks and historical matter lookups.",
      },
    ],
    faqs: [
      {
        question: "How to integrate LexisNexis InterAction with modern digital marketing funnels?",
        answer:
          "We build custom REST API middleware that captures leads from modern web forms, normalizes corporate data, performs deduplication, and inserts structured records directly into InterAction.",
      },
      {
        question: "Can InterAction sync bi-directionally with HubSpot or GoHighLevel?",
        answer:
          "Yes. Our middleware keeps contact lists, relationship tags, and communication history synchronized between InterAction and modern marketing engines.",
      },
      {
        question: "How does the integration handle complex contact data stewardship in InterAction?",
        answer:
          "Our integration respects InterAction's Data Change Management (DCM) rules, queuing new or modified client details for review or auto-accepting validated corporate updates.",
      },
      {
        question: "Can we automate client alert sequences based on InterAction data?",
        answer:
          "Yes. Changes in client company leadership or new matter openings can trigger automated executive notifications and partner task reminders.",
      },
    ],
  },
  {
    slug: "oneplace",
    name: "OnePlace",
    category: CRM_CATEGORIES.ENTERPRISE,
    badge: "Client Lifecycle OS",
    accent: "brass",
    tagline: "Intapp Client Lifecycle Management & Enterprise Legal CRM on Salesforce",
    description:
      "OnePlace (part of the Intapp platform, built on Salesforce) manages the entire client lifecycle for professional services and corporate law firms. We engineer custom API connectors bridging OnePlace with intake portals, risk assessment workflows, and financial systems.",
    apiType: "Intapp OnePlace API & Salesforce REST",
    stats: {
      latency: "< 390ms",
      fidelity: "100%",
      duplicateRate: "0%",
      uptime: "99.99%",
    },
    capabilities: [
      {
        title: "Corporate Client Lifecycle Tracking",
        desc: "Unify business development, pitches, matter inception, and client retention into a single automated pipeline.",
      },
      {
        title: "Automated Terms of Business & Engagement Sync",
        desc: "Sync outside counsel guidelines (OCG), billing rates, and engagement agreements directly into OnePlace matter records.",
      },
      {
        title: "Enterprise Practice Management Sync",
        desc: "Connect OnePlace with Elite 3E, Aderant, or Clio Manage to eliminate billing discrepancies and duplicate matter entry.",
      },
      {
        title: "Risk & Compliance Workflow Automation",
        desc: "Automate AML, KYC, and corporate conflict of interest routing prior to matter opening in OnePlace.",
      },
    ],
    faqs: [
      {
        question: "How to integrate OnePlace with external legal intake portals?",
        answer:
          "We build custom middleware leveraging the Intapp and Salesforce REST APIs to ingest corporate legal inquiries, trigger compliance checks, and populate OnePlace opportunity records.",
      },
      {
        question: "Can OnePlace connect with practice management and billing systems?",
        answer:
          "Yes. We configure bi-directional integrations connecting OnePlace with Aderant, Elite 3E, or Clio to synchronize client codes, matter numbers, and billing data.",
      },
      {
        question: "How does the integration enforce Outside Counsel Guidelines (OCGs)?",
        answer:
          "Client billing constraints and guidelines captured during onboarding are structured and pushed into OnePlace matter profiles to enforce compliance across the firm.",
      },
      {
        question: "Can OnePlace trigger partner notifications on key deal milestones?",
        answer:
          "Yes. Our integration sends automated notifications to Microsoft Teams, Slack, or email when significant pitches are won or high-value matters are opened.",
      },
    ],
  },
  {
    slug: "foundation-software",
    name: "Foundation Software",
    category: CRM_CATEGORIES.ENTERPRISE,
    badge: "Firm Intelligence & Experience",
    accent: "cyan",
    tagline: "Law Firm Experience Management, Matter Intelligence & Proposal Automation",
    description:
      "Foundation Software (part of Litera) is the firm intelligence platform that unifies law firm matter history, lawyer experience, and client relationships to win new business. We build API bridges connecting Foundation with CRMs, website bios, and pitch engines.",
    apiType: "Litera Foundation API & Data Integrations",
    stats: {
      latency: "< 420ms",
      fidelity: "100%",
      duplicateRate: "0%",
      uptime: "99.98%",
    },
    capabilities: [
      {
        title: "Automated Matter Experience Logging",
        desc: "Extract closed matter details, industry tags, deal values, and outcome summaries from practice management systems directly into Foundation.",
      },
      {
        title: "Pitch & Proposal Data Synchronization",
        desc: "Bridge Foundation with CRM deal pipelines (HubSpot, Salesforce, DealCloud) to automatically supply relevant case studies and partner bios.",
      },
      {
        title: "Website Attorney Bio Sync",
        desc: "Keep public-facing website attorney profiles and representative matter lists synchronized with Foundation's verified experience database.",
      },
      {
        title: "Enterprise Directory & Taxonomy Integration",
        desc: "Map firm matters against industry-standard taxonomies (SALES, Chambers, Legal 500) with automated data hygiene pipelines.",
      },
    ],
    faqs: [
      {
        question: "How to integrate Foundation Software with legal CRMs?",
        answer:
          "We build custom API bridges connecting Foundation with Salesforce, HubSpot, or DealCloud, allowing business development teams to pull verified matter experience into proposals automatically.",
      },
      {
        question: "Can Foundation Software sync matter data from Clio or Filevine?",
        answer:
          "Yes. When a matter closes in Clio or Filevine, our integration extracts key case metadata and pushes it to Foundation for review and inclusion in the firm's experience repository.",
      },
      {
        question: "How does the integration maintain data hygiene across thousands of matters?",
        answer:
          "Our middleware performs automated field standardization, deduplicating corporate client names and mapping practice areas to standardized taxonomies.",
      },
      {
        question: "Can Foundation experience records update public website bios automatically?",
        answer:
          "Yes. We configure automated sync pipelines that publish approved matter descriptions and case outcomes directly to your law firm's Next.js or WordPress website.",
      },
    ],
  },

  // -------------------------------------------------------------
  // GROUP 4: GENERAL CRMS TAILORED FOR LEGAL (7)
  // -------------------------------------------------------------
  {
    slug: "hubspot",
    name: "HubSpot",
    category: CRM_CATEGORIES.GENERAL,
    badge: "Inbound Marketing & Sales OS",
    accent: "cyan",
    tagline: "Inbound Legal Marketing, Pipeline Tracking & Marketing Automation for Law Firms",
    description:
      "HubSpot is a powerful inbound marketing and sales CRM widely adapted by forward-thinking law practices. We build custom bi-directional API bridges connecting HubSpot with Clio, Filevine, Retell AI voice agents, and legal practice management backends.",
    apiType: "HubSpot REST API v3 & Webhooks",
    stats: {
      latency: "< 310ms",
      fidelity: "100%",
      duplicateRate: "0%",
      uptime: "99.99%",
    },
    capabilities: [
      {
        title: "Inbound Legal Lead Pipeline Ingestion",
        desc: "Capture website leads, Google Ads inquiries, and social campaigns into custom legal deal stages with automated lead scoring.",
      },
      {
        title: "Clio & Filevine Bi-Directional Bridge",
        desc: "Sync deals and contacts between HubSpot and your case management software, automatically halting marketing drips when retainers are signed.",
      },
      {
        title: "Retell AI Inbound Call Logging",
        desc: "Log full call transcripts, sentiment scores, and audio recording links from voice AI agents directly onto HubSpot contact timelines.",
      },
      {
        title: "Automated Retainer Drips & SMS Nurturing",
        desc: "Deploy sophisticated multi-touch email and SMS nurture sequences for prospects who schedule consultations but have not yet signed retainers.",
      },
    ],
    faqs: [
      {
        question: "How to integrate HubSpot with automated call intake and Retell AI?",
        answer:
          "We configure a real-time webhook connector that receives Retell AI call outcomes and creates or updates HubSpot contacts, deals, and activity notes with complete call transcripts attached.",
      },
      {
        question: "Can HubSpot sync bi-directionally with Clio Manage?",
        answer:
          "Yes. Our custom middleware creates a two-way sync between HubSpot deals and Clio matters. When a matter opens in Clio, the corresponding deal updates in HubSpot, and marketing emails are suppressed.",
      },
      {
        question: "How do you handle custom legal fields in HubSpot?",
        answer:
          "We configure custom contact and deal properties in HubSpot (such as incident date, injury severity, opposing party, statute of limitations) and map them 1:1 with your legal software.",
      },
      {
        question: "Can HubSpot trigger automated retainer agreements via DocuSign?",
        answer:
          "Yes. When a HubSpot deal moves to 'Qualified / Retainer Pending', our integration automatically generates and dispatches a customized engagement agreement via DocuSign or PandaDoc.",
      },
    ],
  },
  {
    slug: "salesforce",
    name: "Salesforce",
    category: CRM_CATEGORIES.GENERAL,
    badge: "Enterprise CRM Platform",
    accent: "brass",
    tagline: "Enterprise Legal Operations, Lead Routing & Custom Practice Objects",
    description:
      "Salesforce is the world's leading enterprise CRM, capable of powering large-scale law firm operations, multi-office lead routing, and custom matter tracking. We engineer custom Salesforce API bridges connecting your practice management tools, voice agents, and intake pipelines.",
    apiType: "Salesforce REST & Composite APIs",
    stats: {
      latency: "< 340ms",
      fidelity: "100%",
      duplicateRate: "0%",
      uptime: "99.99%",
    },
    capabilities: [
      {
        title: "Custom Legal Object Architecture",
        desc: "Engineer and integrate custom Salesforce objects for Matters, Claims, Opposing Parties, and Retainers with complete field mapping.",
      },
      {
        title: "Enterprise Multi-Office Round-Robin",
        desc: "Route high volumes of incoming legal leads to the correct geographic office, practice group leader, or intake specialist in sub-second time.",
      },
      {
        title: "Retell AI Voice Receptionist Integration",
        desc: "Log voice AI call transcripts, sentiment analyses, and call recordings directly into Salesforce Contact and Opportunity timelines.",
      },
      {
        title: "Clio, Filevine & SmartAdvocate Sync",
        desc: "Bridge Salesforce with legal case management platforms to maintain unified reporting and eliminate manual double-entry.",
      },
    ],
    faqs: [
      {
        question: "How to integrate Salesforce with automated legal call intake?",
        answer:
          "We build a high-performance middleware pipeline using the Salesforce Composite API. When Retell AI completes an intake call, our bridge creates a Lead or Opportunity, attaches the transcript, and triggers automated task alerts.",
      },
      {
        question: "Can Salesforce sync with Clio Manage or Filevine?",
        answer:
          "Yes. Our middleware maintains two-way synchronization between Salesforce custom legal objects and Clio/Filevine, keeping matter milestones, notes, and contacts synchronized.",
      },
      {
        question: "How do you handle Salesforce API rate limits during high-volume intake?",
        answer:
          "We implement payload batching, request throttling, and Redis-backed queuing to optimize API usage and ensure your firm never exceeds Salesforce daily governor limits.",
      },
      {
        question: "Can Salesforce trigger automated retainer agreements?",
        answer:
          "Yes. Moving a Salesforce Opportunity to 'Contract Stage' can automatically trigger DocuSign or Adobe Sign contract workflows with signed PDF write-back.",
      },
    ],
  },
  {
    slug: "zoho-crm",
    name: "Zoho CRM",
    category: CRM_CATEGORIES.GENERAL,
    badge: "Customizable Practice CRM",
    accent: "cyan",
    tagline: "Flexible Legal Lead Management, Pipeline Automation & Law Firm Workflows",
    description:
      "Zoho CRM offers an affordable, highly customizable platform for small and mid-sized law practices to manage intake leads, automated follow-ups, and client communication. We build custom API integrations to connect Zoho CRM with Clio, LawPay, voice AI agents, and marketing tools.",
    apiType: "Zoho CRM REST API v2 & Webhooks",
    stats: {
      latency: "< 360ms",
      fidelity: "100%",
      duplicateRate: "0%",
      uptime: "99.96%",
    },
    capabilities: [
      {
        title: "Custom Legal Module Architecture",
        desc: "Configure specialized Zoho CRM modules for Matters, Claims, and Opposing Counsel with automated intake field mapping.",
      },
      {
        title: "Clio & Practice Management Sync",
        desc: "Sync leads and contacts between Zoho CRM and Clio or PracticePanther, eliminating manual duplicate data entry.",
      },
      {
        title: "Retell AI Voice Call Ingestion",
        desc: "Stream call transcripts, recordings, and triage scores from voice AI receptionists directly into Zoho CRM Lead notes.",
      },
      {
        title: "Automated SMS Drips & Booking Links",
        desc: "Trigger automated text message follow-ups via Twilio or Zoho SMS when prospects fail to book consultations after form submission.",
      },
    ],
    faqs: [
      {
        question: "How to integrate Zoho CRM with automated call intake and Retell AI?",
        answer:
          "We build an API connector that consumes Retell AI webhook events, validates the caller's legal details, and creates a pre-screened Lead in Zoho CRM with audio transcripts attached.",
      },
      {
        question: "Can Zoho CRM sync bi-directionally with Clio Manage?",
        answer:
          "Yes. Our middleware keeps Zoho CRM leads and Clio matters synchronized. When a lead is retained in Zoho, it automatically provisions a matter in Clio.",
      },
      {
        question: "How does the integration prevent duplicate records in Zoho CRM?",
        answer:
          "We configure duplicate check rules based on normalized phone numbers and emails, merging new inquiry details into existing contact cards.",
      },
      {
        question: "Can Zoho CRM trigger retainer agreements via Zoho Sign?",
        answer:
          "Yes. Upon intake qualification, our automation triggers a Zoho Sign template pre-populated with client details and fee terms.",
      },
    ],
  },
  {
    slug: "pipedrive",
    name: "Pipedrive",
    category: CRM_CATEGORIES.GENERAL,
    badge: "Visual Pipeline Management",
    accent: "brass",
    tagline: "Visual Lead Pipelines, Activity-Based Selling & Legal Intake Automation",
    description:
      "Pipedrive provides an intuitive, visual deal pipeline ideal for contingency fee law practices and boutique firms tracking prospective client conversion. We build custom API connectors to bridge Pipedrive with practice management systems, voice AI agents, and marketing campaigns.",
    apiType: "Pipedrive REST API v1 & Webhooks",
    stats: {
      latency: "< 330ms",
      fidelity: "100%",
      duplicateRate: "0%",
      uptime: "99.98%",
    },
    capabilities: [
      {
        title: "Visual Intake Stage Management",
        desc: "Track prospective legal clients across visual pipeline stages (New Inquiry, Consultation Scheduled, Retainer Sent, Retained).",
      },
      {
        title: "Two-Way Clio & Case Management Sync",
        desc: "Automatically push won Pipedrive deals into Clio, Filevine, or PracticePanther as active matters with zero re-keying.",
      },
      {
        title: "Retell AI Inbound Call Logging",
        desc: "Capture 24/7 phone intake inquiries with Retell AI voice agents, logging transcripts and call recordings directly onto Pipedrive deal cards.",
      },
      {
        title: "Automated Activity Reminders for Staff",
        desc: "Generate automated follow-up tasks for intake specialists when prospective clients go 24 hours without responding.",
      },
    ],
    faqs: [
      {
        question: "How to integrate Pipedrive with automated call intake?",
        answer:
          "We build a custom webhook integration that maps Retell AI call outcomes directly to Pipedrive deals, attaching the full conversation transcript and setting follow-up tasks.",
      },
      {
        question: "Can Pipedrive sync with Clio Manage?",
        answer:
          "Yes. Moving a deal to 'Won' in Pipedrive can automatically create the client contact and open a new matter in Clio Manage via our bi-directional API bridge.",
      },
      {
        question: "How do you handle custom legal fields in Pipedrive?",
        answer:
          "We configure custom deal and person fields in Pipedrive for case type, date of incident, estimated case value, and opposing party, ensuring 100% data fidelity.",
      },
      {
        question: "Can Pipedrive trigger automated retainer agreements?",
        answer:
          "Yes. When a deal reaches the 'Retainer Pending' stage in Pipedrive, our integration automatically generates and sends a DocuSign or PandaDoc agreement.",
      },
    ],
  },
  {
    slug: "activecampaign",
    name: "ActiveCampaign",
    category: CRM_CATEGORIES.GENERAL,
    badge: "Email & SMS Nurture OS",
    accent: "cyan",
    tagline: "Advanced Marketing Automation, Multi-Channel Drips & Legal CRM Workflows",
    description:
      "ActiveCampaign combines powerful email marketing, SMS automation, and CRM capabilities for law firms seeking high-touch client nurturing. We engineer custom API connectors connecting ActiveCampaign with Clio, MyCase, voice AI agents, and legal advertising funnels.",
    apiType: "ActiveCampaign REST API v3 & Webhooks",
    stats: {
      latency: "< 350ms",
      fidelity: "100%",
      duplicateRate: "0%",
      uptime: "99.97%",
    },
    capabilities: [
      {
        title: "Dynamic Legal Nurture Campaigns",
        desc: "Deploy tailored email and SMS drip sequences segmented by practice area (personal injury, criminal defense, family law, estate planning).",
      },
      {
        title: "Clio & Practice Management Sync",
        desc: "Sync contacts and matter statuses with Clio or Filevine, automatically unenrolling clients from marketing drips once retained.",
      },
      {
        title: "Retell AI Call Outcome Triggering",
        desc: "Trigger specific ActiveCampaign automations based on voice AI call triage results (e.g., 'Unqualified Drip' vs. 'VIP Consultation Follow-Up').",
      },
      {
        title: "Closed-Loop Ad Attribution",
        desc: "Track marketing attribution across Google Ads and Facebook, passing campaign source and click data into ActiveCampaign custom fields.",
      },
    ],
    faqs: [
      {
        question: "How to integrate ActiveCampaign with automated call intake and Retell AI?",
        answer:
          "We build a webhook pipeline that feeds Retell AI call results into ActiveCampaign, tagging contacts by practice area and triggering immediate SMS consultation reminders.",
      },
      {
        question: "Can ActiveCampaign sync bi-directionally with Clio Manage?",
        answer:
          "Yes. When a prospect becomes a retained client in Clio, our webhook updates the contact in ActiveCampaign, adding a 'Client - Active' tag and halting intake emails.",
      },
      {
        question: "How does ActiveCampaign support law firm email deliverability?",
        answer:
          "We configure SPF, DKIM, DMARC, and custom sending domains alongside automated list cleaning to ensure your firm's emails land directly in prospect inboxes.",
      },
      {
        question: "Can ActiveCampaign automate review generation for law firms?",
        answer:
          "Yes. When a matter closes successfully, our integration can trigger a timed multi-channel review request sequence driving 5-star Google Reviews.",
      },
    ],
  },
  {
    slug: "gohighlevel",
    name: "GoHighLevel",
    category: CRM_CATEGORIES.GENERAL,
    badge: "Marketing & Voice OS",
    accent: "brass",
    tagline: "All-In-One Marketing OS, Two-Way SMS, Pipelines & Legal Funnel Automation",
    description:
      "GoHighLevel (GHL) is the all-in-one marketing, funnel, and automated messaging platform powering high-growth law firms and legal marketing agencies. We build advanced bi-directional API bridges connecting GoHighLevel with Clio, Lawmatics, Filevine, Monday.com, and Retell AI voice agents.",
    apiType: "GoHighLevel REST API v2 & Webhooks",
    stats: {
      latency: "< 290ms",
      fidelity: "100%",
      duplicateRate: "0%",
      uptime: "99.99%",
    },
    capabilities: [
      {
        title: "Sub-380ms Legal CRM Bi-Directional Sync",
        desc: "Maintain real-time synchronization between GoHighLevel pipelines and legal CRMs (Clio, Lawmatics, Filevine) with zero dropped leads.",
      },
      {
        title: "Two-Way Twilio SMS & Voice Booking",
        desc: "Deploy automated text message booking flows and conversational voice AI agents that qualify leads and lock calendar appointments.",
      },
      {
        title: "Multi-Practice Custom Field Architecture",
        desc: "Configure dynamic custom fields for immigration, personal injury, criminal defense, and estate planning with schema validation.",
      },
      {
        title: "Stripe Paid Consultation Gateways",
        desc: "Embed payment collection into GHL scheduling workflows to eliminate consultation no-shows and collect upfront fees.",
      },
    ],
    faqs: [
      {
        question: "How to integrate GoHighLevel with automated call intake and Retell AI?",
        answer:
          "We engineer custom webhook middleware connecting Retell AI voice agents directly with GoHighLevel. The agent queries GHL calendar slots during the live call, books the appointment, creates the contact, and logs the call transcript.",
      },
      {
        question: "Why do GoHighLevel and Clio need a custom integration bridge?",
        answer:
          "GoHighLevel and Clio Manage do not sync natively. Generic Zapier connectors frequently fail on custom field mapping or rate limits. Our custom n8n / Node.js bridge ensures sub-380ms sync with zero duplicate records and automated error retry queues.",
      },
      {
        question: "Can GoHighLevel trigger retainer agreements automatically?",
        answer:
          "Yes. Advancing a lead to 'Retainer Sent' in GoHighLevel can automatically trigger a customized DocuSign, Vinesign, or PandaDoc agreement via API.",
      },
      {
        question: "How does the integration prevent duplicate contacts in GoHighLevel?",
        answer:
          "Our middleware normalizes phone numbers to E.164 and checks existing contacts by email and phone before executing contact creation or pipeline movement.",
      },
    ],
  },
  {
    slug: "keap",
    name: "Keap",
    category: CRM_CATEGORIES.GENERAL,
    badge: "Sales & Drip Automation",
    accent: "cyan",
    tagline: "Sales Pipeline Management, Automated Drip Marketing & Appointment Booking",
    description:
      "Keap (formerly Infusionsoft) offers robust sales pipeline management, automated marketing campaigns, and payment processing for boutique law firms. We build custom API connectors connecting Keap with Clio, Filevine, voice AI agents, and custom intake forms.",
    apiType: "Keap REST API v2 & Webhooks",
    stats: {
      latency: "< 370ms",
      fidelity: "100%",
      duplicateRate: "0%",
      uptime: "99.96%",
    },
    capabilities: [
      {
        title: "Automated Campaign Sequencing",
        desc: "Deliver multi-stage nurture sequences to prospective clients based on their specific legal practice area and consultation status.",
      },
      {
        title: "Practice Management Synchronization",
        desc: "Sync contacts and consultation outcomes between Keap and Clio or PracticePanther, eliminating manual duplicate data entry.",
      },
      {
        title: "Retell AI Voice Receptionist Integration",
        desc: "Capture 24/7 phone inquiries with Retell AI and automatically trigger Keap follow-up campaigns and appointment reminders.",
      },
      {
        title: "Payment Processing & Invoicing",
        desc: "Collect consultation deposits and invoice payments via Keap, automatically updating client account balances.",
      },
    ],
    faqs: [
      {
        question: "How to integrate Keap with automated call intake?",
        answer:
          "We connect Retell AI voice agents to Keap via REST API v2. When a call concludes, the caller's details and legal needs are logged into Keap, triggering automated follow-up sequences.",
      },
      {
        question: "Can Keap sync bi-directionally with Clio Manage?",
        answer:
          "Yes. Our middleware creates two-way synchronization between Keap and Clio, updating contact info and matter stages across both systems seamlessly.",
      },
      {
        question: "How does the integration handle custom fields in Keap?",
        answer:
          "We configure custom contact and opportunity fields in Keap (incident date, claim type, opposing party) and map them 1:1 with your intake forms.",
      },
      {
        question: "Can Keap trigger automated e-signatures for retainers?",
        answer:
          "Yes. Moving an opportunity in Keap can automatically dispatch a DocuSign or HelloSign retainer agreement to the client.",
      },
    ],
  },
];

// Helper to lookup CRM by slug
export function getCrmBySlug(slug) {
  return ALL_CRMS.find((crm) => crm.slug === slug);
}

// Helper to get all CRM slugs
export function getAllCrmSlugs() {
  return ALL_CRMS.map((crm) => crm.slug);
}
