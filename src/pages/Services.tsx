import React from 'react';
import { FadeIn, PageHeader } from '../components/Shared';

export const Services = () => {
const services = [
    { title: "Custom Websites & Apps", desc: "Fast, responsive, conversion-focused websites and landing pages with speed optimization, blog setups, and custom dashboards." },
    { title: "Mobile App Development", desc: "Native Android and iOS apps designed for customer engagement, featuring booking engines, API integrations, and push notifications." },
    { title: "UI/UX Design", desc: "Beautiful, intuitive interfaces designed in Figma ensuring complete brand consistency, from wireframes to user journey mapping." },
    { title: "Branding & Identity", desc: "Complete brand identity from logo creation (2-3 concepts) to brand guidelines, social media templates, and business cards." },
    { title: "Local Growth & SEO", desc: "Local SEO, Google Business Profile optimisation, map ranking, and WhatsApp Business automation to grow your reach." },
    { title: "Analytics & Data", desc: "Business analytics dashboards, GA4 configuration, heatmaps, and custom Power BI data visualizations to track customer behavior." },
    { title: "Maintenance & Support", desc: "Ongoing updates, automated backups, security checks, and minor/major content edits on request to keep operations running." }
  ];
  return (
    <div className="min-h-screen pb-32">
      <PageHeader title="Our Services" subtitle="Comprehensive digital solutions tailored for local businesses." />
      <div className="max-w-5xl mx-auto px-6">
        {services.map((srv, i) => (
          <FadeIn key={i} delay={i * 0.1} y={30}>
            <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-16 py-10 border-b border-[#ffffff15] last:border-0 hover:bg-[#111111] transition-colors rounded-2xl px-4">
              <span className="font-black text-[clamp(3rem,8vw,100px)] leading-none hero-heading">0{i + 1}</span>
              <div>
                <h3 className="font-medium uppercase tracking-wider text-2xl md:text-3xl mb-2">{srv.title}</h3>
                <p className="font-light opacity-60 text-lg">{srv.desc}</p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
};