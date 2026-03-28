"use client";

import { useState } from "react";
import type { PlantFile } from "@/data/types";
import { TabContainer, TabHeader } from "./TabContainer";

export function FaqTab({ plant }: { plant: PlantFile }) {
  const faq = plant.faq;
  if (!faq) return null;

  return (
    <TabContainer>
      <TabHeader label="Common questions" title="FAQ" />
      <p className="text-[13px] text-cream/35 leading-[1.78] mb-8">
        Answers drawn from first-hand growing experience and verified collector knowledge.
      </p>
      <div className="space-y-8">
        {faq.categories.map((cat) => (
          <div key={cat.category}>
            <p className="text-[8px] tracking-[0.42em] uppercase text-earth-300/50 mb-3">
              {cat.category}
            </p>
            <div className="space-y-1.5">
              {cat.items.map((item, i) => (
                <FaqAccordion key={item.question} question={item.question} answer={item.answer} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </TabContainer>
  );
}

function FaqAccordion({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-cream/[0.08] rounded-lg overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left bg-transparent p-[14px_16px] cursor-pointer flex items-start justify-between gap-3"
      >
        <span className="font-serif text-[0.9rem] text-cream/60 leading-[1.4]">
          {question}
        </span>
        <span
          className="text-cream/20 text-xs flex-shrink-0 mt-0.5 transition-transform duration-200"
          style={{ transform: open ? "rotate(45deg)" : "rotate(0deg)" }}
        >
          +
        </span>
      </button>
      {open && (
        <div className="px-4 pb-4 pt-0">
          <div className="border-t border-cream/[0.06] pt-3">
            <p className="text-xs text-cream/25 leading-[1.72]">{answer}</p>
          </div>
        </div>
      )}
    </div>
  );
}
