// "use client";

// import { motion } from "framer-motion";
// import { Check, ArrowRight, ShieldCheck, Zap } from "lucide-react";
// import { CALENDLY_URL } from "@/lib/data";

// const TIERS = [
//   {
//     name: "Single CRM Bridge",
//     price: "$1,800",
//     timeline: "1–2 weeks delivery",
//     popular: false,
//     description: "Ideal for law firms needing a flawless 2-way sync between GoHighLevel and Clio or Lawmatics.",
//     features: [
//       "Bi-directional contact & field sync",
//       "Clio Matter creation upon GHL trigger",
//       "Sub-380ms event sync latency",
//       "SHA-256 deduplication logic",
//       "OAuth 2.0 automated refresh handlers",
//       "30 days post-launch support & monitoring",
//     ],
//   },
//   {
//     name: "Full Firm Intake & Matter Pipeline",
//     price: "$3,500",
//     timeline: "2–3 weeks delivery",
//     popular: true,
//     description: "Our flagship integration for practices requiring complete automated lead-to-retained pipelines.",
//     features: [
//       "Everything in Single CRM Bridge",
//       "E-Sign retainer agreement sync",
//       "Intake PDF attachment routing to Clio",
//       "Clio stage changes push back to GHL",
//       "Dedicated n8n webhook middleware & DLQ",
//       "Real-time Slack / Discord error alerts",
//       "45 days post-launch support & warranty",
//     ],
//   },
//   {
//     name: "Retell AI Voice + CRM Infrastructure",
//     price: "$4,800",
//     timeline: "3–4 weeks delivery",
//     popular: false,
//     description: "End-to-end Voice AI automation that qualifies claimants and updates your legal CRM in real time.",
//     features: [
//       "Everything in Full Firm Pipeline",
//       "Retell AI custom function calling API",
//       "Live caller contact & matter lookup",
//       "Sub-2s post-call transcript ingestion",
//       "Sentiment & qualification tags to CRM",
//       "Automated appointment booking sync",
//       "60 days post-launch dedicated support",
//     ],
//   },
// ];

// export default function PricingSection() {
//   return (
//     <section id="pricing" className="relative border-t border-border px-4 py-28">
//       <div className="mx-auto max-w-6xl">
//         <div className="text-center">
//           <span className="eyebrow text-brass">Transparent Investment</span>
//           <h2 className="mt-3 text-balance font-display text-3xl font-semibold tracking-tight text-text sm:text-4xl">
//             Fixed-Scope Projects. No Surprise Invoices.
//           </h2>
//           <p className="mx-auto mt-4 max-w-2xl text-muted text-sm sm:text-base">
//             Every build is scoped with fixed milestones, comprehensive stress testing, and guaranteed post-launch monitoring.
//           </p>
//         </div>

//         <div className="mt-16 grid gap-8 lg:grid-cols-3">
//           {TIERS.map((tier, idx) => (
//             <motion.div
//               key={tier.name}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, margin: "-60px" }}
//               transition={{ duration: 0.5, delay: idx * 0.1 }}
//               className={`relative flex flex-col justify-between rounded-3xl border p-8 transition-all ${
//                 tier.popular
//                   ? "border-cyan/40 bg-surface/90 shadow-2xl shadow-cyan/10"
//                   : "border-border bg-surface/60"
//               }`}
//             >
//               {tier.popular && (
//                 <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full border border-cyan/40 bg-cyan px-3 py-1 font-mono text-[11px] font-bold text-ink">
//                   MOST POPULAR FOR LAW FIRMS
//                 </div>
//               )}

//               <div>
//                 <div className="flex items-center justify-between">
//                   <h3 className="font-display text-xl font-semibold text-text">
//                     {tier.name}
//                   </h3>
//                 </div>
//                 <div className="mt-4 flex items-baseline gap-1">
//                   <span className="font-mono text-3xl font-bold text-text sm:text-4xl">
//                     {tier.price}
//                   </span>
//                   <span className="text-xs text-muted">/ project</span>
//                 </div>
//                 <span className="mt-1 inline-block font-mono text-xs text-brass">
//                   {tier.timeline}
//                 </span>

//                 <p className="mt-4 text-xs leading-relaxed text-muted sm:text-sm">
//                   {tier.description}
//                 </p>

//                 <div className="mt-6 border-t border-border/60 pt-6">
//                   <span className="eyebrow text-muted">What&rsquo;s Included</span>
//                   <ul className="mt-3 space-y-2.5">
//                     {tier.features.map((feature) => (
//                       <li key={feature} className="flex items-start gap-2.5 text-xs text-text sm:text-sm">
//                         <Check size={16} className="mt-0.5 shrink-0 text-cyan" />
//                         <span>{feature}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>

//               <div className="mt-8 pt-4">
//                 <a
//                   href={CALENDLY_URL}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className={`flex w-full items-center justify-center gap-2 rounded-xl py-3 text-sm font-semibold transition-transform hover:scale-[1.02] ${
//                     tier.popular
//                       ? "bg-text text-ink font-semibold"
//                       : "border border-border bg-surface text-text hover:border-cyan/40 hover:text-cyan"
//                   }`}
//                 >
//                   Book Scoping Call
//                   <ArrowRight size={15} />
//                 </a>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         <div className="mt-12 rounded-2xl border border-border bg-surface/50 p-6 text-center sm:flex sm:items-center sm:justify-between sm:text-left">
//           <div>
//             <h4 className="font-display text-sm font-semibold text-text sm:text-base">
//               Need ongoing maintenance or a custom multi-location SLA?
//             </h4>
//             <p className="mt-1 text-xs text-muted">
//               Retainer packages for ongoing workflow expansions start at $1,200/mo.
//             </p>
//           </div>
//           <a
//             href={CALENDLY_URL}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-cyan hover:underline sm:mt-0"
//           >
//             Inquire About Monthly Retainers
//             <ArrowRight size={14} />
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }
