import React from 'react';
import { FadeIn, PageHeader } from '../components/Shared';

export const Process = () => (
  <div className="min-h-screen pb-32 relative z-10">
    <PageHeader title="How We Work" subtitle="A transparent 7-step process. You are kept informed at every stage." />
    <div className="max-w-4xl mx-auto px-6 relative mt-10">
      <div className="absolute left-[39px] md:left-[49px] top-10 bottom-10 w-[2px] bg-gradient-to-b from-[#7621B0] to-transparent"></div>
      {[
        { title: 'Discovery & Planning', desc: 'We connect via WhatsApp, phone, or in person to understand your business, goals, and target customers gathering all requirements and preferences.' },
        { title: 'Design & Prototyping', desc: 'Our team creates wireframes and interactive mockups in Figma with your brand colours and style before any development begins. You see exactly what you are getting.' },
        { title: 'Development', desc: 'We build all pages and features using clean, mobile-first, SEO-optimised code - home, portfolio, service pages, contact forms, and integrations.' },
        { title: 'Client Review', desc: 'We share the full deliverable on a staging environment. You tell us what you love and what you would like changed. We adjust until you are completely satisfied.' },
        { title: 'Testing & Optimisation', desc: 'We rigorously test everything - every button, page, device, and screen size. Performance audits ensure excellent load times and SEO scores.' },
        { title: 'Launch', desc: 'We handle smooth deployment and all final technical checks. Once both sides are fully satisfied, your project goes live - clients can now find and contact you online.' },
        { title: 'Ongoing Support', desc: 'Launching is just the beginning. We stay by your side with monthly maintenance plans, security checks, content updates, and ongoing growth guidance.' }
      ].map((step, i) => (
        <FadeIn key={i} delay={i * 0.1} y={20} className="flex gap-8 items-start mb-16 relative">
          <div className="w-10 h-10 md:w-14 md:h-14 shrink-0 rounded-full bg-[#18011F] border-2 border-[#B600A8] flex items-center justify-center font-bold text-lg md:text-xl z-10 text-white shadow-[0_0_15px_rgba(182,0,168,0.5)]">{i + 1}</div>
          <div className="pt-1 md:pt-3">
            <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-wide mb-3 text-[#D7E2EA]">{step.title}</h3>
            <p className="opacity-60 text-lg leading-relaxed">{step.desc}</p>
          </div>
        </FadeIn>
      ))}
    </div>
  </div>
);