import React from 'react';
import { FadeIn, PageHeader } from '../components/Shared';

export const FAQ = () => (
  <div className="min-h-screen pb-32 relative z-10">
    <PageHeader title="FAQ" subtitle="Everything you need to know about working with us." />
    <div className="max-w-4xl mx-auto px-6 flex flex-col gap-6">
      {[
        { q: "How long does a website take?", a: "Typically 3–6 weeks depending on complexity." },
        { q: "Do you provide support after launch?", a: "Yes, we offer monthly maintenance plans and ongoing support." },
        { q: "Can you redesign my existing website?", a: "Absolutely. We analyze your current site and create a modern redesign." },
        { q: "Are there any hidden charges?", a: "Never. Our pricing is transparent – what you see is what you pay." }
      ].map((faq, i) => (
        <FadeIn key={i} delay={i * 0.1} y={20} className="bg-[#111111]/80 backdrop-blur-md border border-white/5 rounded-[20px] p-6 md:p-8 hover:bg-[#1a1a1a]/80 transition-colors">
          <h3 className="text-xl md:text-2xl font-bold mb-3 uppercase tracking-wider text-[#D7E2EA]">{faq.q}</h3>
          <p className="opacity-70 text-lg leading-relaxed">{faq.a}</p>
        </FadeIn>
      ))}
    </div>
  </div>
);