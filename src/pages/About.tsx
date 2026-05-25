import React from 'react';
import { FadeIn, AnimatedText, PageHeader } from '../components/Shared';

export const About = () => (
  <div className="min-h-screen pb-32 relative z-10">
    <PageHeader title="Who We Are" subtitle="Bridging the gap between ambition and digital excellence." />
    <section className="relative flex flex-col items-center justify-center px-5 py-20 overflow-hidden">
      <div className="flex flex-col items-center gap-16 max-w-5xl">
        <AnimatedText text="We build modern websites, apps, and brand identities that make businesses stand out online. Without a proper digital presence, you are invisible. We ensure you never miss an opportunity." className="font-medium text-center leading-relaxed text-[clamp(1.2rem,2.5vw,1.8rem)] max-w-4xl" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mt-16">
          {[
            {title: "Customers Find You Online", desc: "When someone searches for your service, a proper digital presence makes your name appear. Without one, you miss opportunities every day."},
            {title: "Build Trust Before They Reach Out", desc: "A beautiful website or brand identity shows clients you are serious. They see your portfolio and feel confident before making contact."},
            {title: "Your Business is Reachable 24/7", desc: "Customers browse late at night, on weekends, and during holidays. Your website takes enquiries and showcases your work at any hour."},
            {title: "Reach Local & Global Audiences", desc: "With SEO and Google Business Profile optimisation built in, nearby customers find you easily, and you can reach beyond your area."}
          ].map((val, i) => (
            <FadeIn key={i} delay={i * 0.1} y={20} className="bg-[#111111]/80 backdrop-blur-md border border-white/5 p-8 rounded-[30px] hover:border-white/20 transition-colors">
              <h3 className="font-bold text-2xl mb-4 text-white uppercase tracking-wider">{val.title}</h3>
              <p className="opacity-60 leading-relaxed text-lg">{val.desc}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  </div>
);