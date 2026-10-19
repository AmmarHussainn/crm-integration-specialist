"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQS } from "@/lib/data";
import { faqSchema } from "@/lib/schema";

function FaqItem({ item, isOpen, onToggle }) {
  return (
    <div className="border-b border-border">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
      >
        <span className="font-display text-base font-medium text-text sm:text-lg">
          {item.question}
        </span>
        <ChevronDown
          size={18}
          className={`shrink-0 text-muted transition-transform duration-300 ${
            isOpen ? "rotate-180 text-cyan" : ""
          }`}
        />
      </button>
      <div
        id={`faq-answer-${item.question.replace(/\s+/g, "-").toLowerCase()}`}
        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="pb-5 pr-8 text-sm leading-relaxed text-muted">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="relative px-4 py-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema(FAQS)),
        }}
      />
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <span className="eyebrow text-cyan">Answers</span>
          <h2 className="mt-3 text-balance font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Common questions about legal CRM integrations
          </h2>
        </div>

        <div className="mt-12">
          {FAQS.map((item, i) => (
            <FaqItem
              key={item.question}
              item={item}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
