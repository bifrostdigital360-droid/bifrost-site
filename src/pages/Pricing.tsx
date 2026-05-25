import React from 'react';
import { FadeIn, ContactButton, PageHeader } from '../components/Shared';

export const Pricing = () => (
  <div className="min-h-screen pb-32 relative z-10">
    <PageHeader title="Investment" subtitle="Clear, honest pricing. No upfront payment. Pay only when 100% satisfied." />
    
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
      <FadeIn delay={0.1} y={30} className="bg-[#111111]/80 backdrop-blur-md border border-[#3B82F6]/50 rounded-[40px] p-8 flex flex-col shadow-[0_0_30px_rgba(59,130,246,0.1)]">
        <h3 className="text-2xl font-black uppercase tracking-widest mb-8 text-[#3B82F6]">Websites & Apps</h3>
        <div className="flex flex-col gap-6 mb-10 flex-1">
          <div><p className="text-sm opacity-60 uppercase mb-1">Standard Local Website</p><p className="text-2xl font-bold">₹12,000 - ₹20,000</p></div>
          <div><p className="text-sm opacity-60 uppercase mb-1">Advanced Web App</p><p className="text-2xl font-bold">₹25,000 - ₹50,000</p></div>
          <div><p className="text-sm opacity-60 uppercase mb-1">Website Redesign</p><p className="text-2xl font-bold">₹15,000 - ₹20,000</p></div>
          <div><p className="text-sm opacity-60 uppercase mb-1">Mobile App (Basic/Mid)</p><p className="text-2xl font-bold">₹30,000 - ₹75,000</p></div>
        </div>
        <ContactButton text="Start Project" />
      </FadeIn>

      <FadeIn delay={0.2} y={30} className="bg-[#111111]/80 backdrop-blur-md border border-[#B600A8]/50 rounded-[40px] p-8 flex flex-col shadow-[0_0_30px_rgba(182,0,168,0.15)]">
        <h3 className="text-2xl font-black uppercase tracking-widest mb-8 text-[#B600A8]">Design & Branding</h3>
        <div className="flex flex-col gap-6 mb-10 flex-1">
          <div><p className="text-sm opacity-60 uppercase mb-1">Website UI/UX (Figma)</p><p className="text-2xl font-bold">₹15,000 - ₹20,000</p></div>
          <div><p className="text-sm opacity-60 uppercase mb-1">Mobile App UI/UX</p><p className="text-2xl font-bold">₹20,000 - ₹30,000</p></div>
          <div><p className="text-sm opacity-60 uppercase mb-1">Full Branding Package</p><p className="text-2xl font-bold">₹5,000 - ₹10,000</p></div>
          <div><p className="text-sm opacity-60 uppercase mb-1">Logo Design (High-Res)</p><p className="text-2xl font-bold">₹5,000</p></div>
        </div>
        <ContactButton text="Start Project" />
      </FadeIn>

      <FadeIn delay={0.3} y={30} className="bg-[#111111]/80 backdrop-blur-md border border-[#BE4C00]/50 rounded-[40px] p-8 flex flex-col shadow-[0_0_30px_rgba(190,76,0,0.1)]">
        <h3 className="text-2xl font-black uppercase tracking-widest mb-8 text-[#BE4C00]">Growth & Analytics</h3>
        <div className="flex flex-col gap-6 mb-10 flex-1">
          <div><p className="text-sm opacity-60 uppercase mb-1">Google Business & Local SEO</p><p className="text-2xl font-bold">₹5,000 - ₹10,000</p></div>
          <div><p className="text-sm opacity-60 uppercase mb-1">WhatsApp Business Setup</p><p className="text-2xl font-bold">₹12,000 - ₹15,000</p></div>
          <div><p className="text-sm opacity-60 uppercase mb-1">Custom Analytics Dashboards</p><p className="text-2xl font-bold">₹15,000 - ₹25,000</p></div>
          <div><p className="text-sm opacity-60 uppercase mb-1">Basic Maintenance</p><p className="text-2xl font-bold">₹5,000 / month</p></div>
        </div>
        <ContactButton text="Start Project" />
      </FadeIn>
    </div>

    <div className="max-w-4xl mx-auto px-6 mt-20">
      <FadeIn y={20} className="bg-[#0C0C0C]/80 backdrop-blur-md border border-white/10 rounded-[30px] p-8">
        <h3 className="text-xl font-bold uppercase tracking-widest mb-6 border-b border-white/10 pb-4">Annual Operating Costs (Transparency)</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div><p className="opacity-60 text-sm">Domain Name</p><p className="font-bold text-lg">~₹800 - ₹1,200 / yr</p></div>
          <div><p className="opacity-60 text-sm">Web Hosting</p><p className="font-bold text-lg">~₹850 / yr</p></div>
          <div><p className="opacity-60 text-sm">SSL Security</p><p className="font-bold text-lg text-green-400">Included FREE</p></div>
        </div>
      </FadeIn>
    </div>
  </div>
);