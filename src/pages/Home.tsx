import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShieldCheck, Smartphone, Search, Zap, Handshake, MessageSquare, MapPin, Sparkles } from 'lucide-react';
import { FadeIn, Magnet, ContactButton } from '../components/Shared';

export const Home = () => {
  const [offset, setOffset] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => setOffset(window.scrollY * 0.5);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const industries = ["Barbershops", "Bakeries", "Restaurants", "Salons", "Retail Stores", "Service Businesses", "Clinics", "Gyms", "Cafés", "Boutiques"];

  const whyChooseUs = [
    { title: "No Upfront Payment", desc: "Pay only when completely satisfied.", icon: <ShieldCheck size={32} className="text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.6)]" />, color: "group-hover:border-cyan-400/50 group-hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]" },
    { title: "No Hidden Charges", desc: "Full transparency from day one.", icon: <Sparkles size={32} className="text-yellow-400 drop-shadow-[0_0_10px_rgba(250,204,21,0.6)]" />, color: "group-hover:border-yellow-400/50 group-hover:shadow-[0_0_30px_rgba(250,204,21,0.15)]" },
    { title: "Mobile-First Design", desc: "Built into every project.", icon: <Smartphone size={32} className="text-purple-400 drop-shadow-[0_0_10px_rgba(192,132,252,0.6)]" />, color: "group-hover:border-purple-400/50 group-hover:shadow-[0_0_30px_rgba(192,132,252,0.15)]" },
    { title: "SEO Basics Included", desc: "Google finds you from day one.", icon: <Search size={32} className="text-blue-500 drop-shadow-[0_0_10px_rgba(59,130,246,0.6)]" />, color: "group-hover:border-blue-500/50 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]" },
    { title: "Transparent Timelines", desc: "Delivered exactly when agreed.", icon: <Zap size={32} className="text-orange-500 drop-shadow-[0_0_10px_rgba(249,115,22,0.6)]" />, color: "group-hover:border-orange-500/50 group-hover:shadow-[0_0_30px_rgba(249,115,22,0.15)]" },
    { title: "Friendly Support", desc: "Always reachable when you need us.", icon: <MessageSquare size={32} className="text-green-400 drop-shadow-[0_0_10px_rgba(74,222,128,0.6)]" />, color: "group-hover:border-green-400/50 group-hover:shadow-[0_0_30px_rgba(74,222,128,0.15)]" },
    { title: "Hassle-Free Experience", desc: "We handle all the technical work.", icon: <Handshake size={32} className="text-pink-500 drop-shadow-[0_0_10px_rgba(236,72,153,0.6)]" />, color: "group-hover:border-pink-500/50 group-hover:shadow-[0_0_30px_rgba(236,72,153,0.15)]" },
    { title: "Local-Business Focused", desc: "Built for brands that demand more.", icon: <MapPin size={32} className="text-rose-500 drop-shadow-[0_0_10px_rgba(244,63,94,0.6)]" />, color: "group-hover:border-rose-500/50 group-hover:shadow-[0_0_30px_rgba(244,63,94,0.15)]" }
  ];

  return (
    <div className="w-full">
      <section className="min-h-[100svh] flex flex-col justify-between overflow-hidden relative w-full pt-28 pb-10 lg:pt-32 lg:pb-16">
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#B600A8]/20 blur-[100px] rounded-full pointer-events-none z-0 lg:hidden"></div>

        <div className="w-full text-center px-4 relative z-20">
          <FadeIn delay={0.15} y={40}>
            <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap text-[11vw] sm:text-[9vw] md:text-[8vw] lg:text-[6.5vw]">
              BIFRÖST DIGITAL
            </h1>
          </FadeIn>
        </div>

        {/* --- FIXED: Greatly increased mobile widths (340px) & reduced vertical margin (my-2) so it fills the space --- */}
        <div className="flex-1 flex justify-center items-center w-full relative lg:absolute lg:inset-0 pointer-events-none z-10 my-2 sm:my-4 lg:my-0">
          <FadeIn delay={0.6} y={30} className="pointer-events-auto w-[420px] sm:w-[420px] md:w-[500px] lg:w-[800px] lg:-translate-y-[12%]">
            <Magnet>
              {/* --- RESTORED: Switched back to motion.img for avatar.png --- */}
              <motion.img 
                src="/avatar.png" 
                alt="Bifrost Avatar" 
                className="w-full h-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)] object-contain"
                animate={{ y: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              />
            </Magnet>
          </FadeIn>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end w-full px-6 md:px-10 z-20 relative gap-8 lg:gap-10 mt-auto">
          <div className="flex flex-col gap-6 items-center lg:items-start text-center lg:text-left">
            <FadeIn delay={0.35} y={20}>
              <p className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[280px] sm:max-w-[340px] text-[clamp(0.75rem,1.4vw,1.5rem)]">
                We bridge the gap between ambition and digital excellence, building modern websites and apps that make businesses stand out.
              </p>
            </FadeIn>
            <FadeIn delay={0.5} y={20}><ContactButton /></FadeIn>
          </div>
          
          <FadeIn delay={0.6} y={20} className="grid grid-cols-3 lg:flex gap-4 sm:gap-8 lg:gap-10 border-t border-white/10 lg:border-none pt-6 lg:pt-0 w-full lg:w-auto text-center lg:text-left">
            <div>
              <h4 className="font-black text-xl sm:text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 to-blue-600">100%</h4>
              <p className="text-[10px] sm:text-xs uppercase tracking-widest opacity-60 mt-1">Satisfaction</p>
            </div>
            <div>
              <h4 className="font-black text-xl sm:text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-pink-600">7</h4>
              <p className="text-[10px] sm:text-xs uppercase tracking-widest opacity-60 mt-1">Core Services</p>
            </div>
            <div>
              <h4 className="font-black text-xl sm:text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-br from-orange-400 to-red-600">₹0</h4>
              <p className="text-[10px] sm:text-xs uppercase tracking-widest opacity-60 mt-1">Upfront</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="py-10 bg-[#0C0C0C]/50 backdrop-blur-md border-y border-white/5 overflow-hidden flex items-center relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0C0C0C] to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0C0C0C] to-transparent z-10"></div>
        <div className="flex gap-10 whitespace-nowrap will-change-transform" style={{ transform: `translateX(-${offset}px)` }}>
          {[...industries, ...industries, ...industries].map((ind, i) => (
            <span key={i} className="text-2xl md:text-4xl font-black uppercase tracking-widest opacity-30 outline-text transition-colors hover:text-[#B600A8] hover:opacity-100">
              {ind} <span className="text-[#B600A8] opacity-50 ml-10">✦</span>
            </span>
          ))}
        </div>
      </section>

      <section className="py-32 px-6 max-w-7xl mx-auto relative z-10">
        <FadeIn>
          <h2 className="hero-heading font-black uppercase text-center mb-16 text-[clamp(2.5rem,8vw,80px)] leading-none">Why Choose Us</h2>
        </FadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChooseUs.map((item, i) => (
            <FadeIn key={i} delay={i * 0.1} y={20} className={`bg-[#111111]/80 backdrop-blur-sm border border-white/5 p-8 rounded-[30px] flex flex-col items-center text-center transition-all duration-300 group ${item.color}`}>
              <div className="mb-6 p-5 rounded-full bg-gradient-to-br from-white/5 to-transparent border border-white/10 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="font-bold text-lg uppercase tracking-wide text-white/90 group-hover:text-white transition-colors mb-2">{item.title}</h3>
              <p className="text-sm opacity-60">{item.desc}</p>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="py-20 px-6 bg-[#111111]/60 backdrop-blur-xl rounded-[40px] sm:rounded-[60px] mx-4 sm:mx-10 mb-32 border border-white/5 shadow-[0_0_50px_rgba(0,0,0,0.5)] relative z-10">
        <FadeIn><h2 className="hero-heading font-black uppercase text-center mb-16 text-[clamp(2.5rem,8vw,80px)] leading-none">Trusted By</h2></FadeIn>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { text: "Bifrost Digital transformed our online presence. Our booking requests have tripled since launch.", author: "Rahul Sharma", role: "Owner, WELDONE Barbers", color: "from-amber-500 to-orange-600" },
            { text: "The WhatsApp ordering system has made it so easy for our customers to place cake orders. Highly professional.", author: "Priya Mehta", role: "Founder, Sweet Crumbs", color: "from-pink-500 to-rose-600" },
            { text: "Our new website looks stunning and has brought in so many new clients. The SEO work is paying off.", author: "Aisha Khan", role: "Director, Luxe Salon", color: "from-purple-500 to-indigo-600" }
          ].map((review, i) => (
            <FadeIn key={i} delay={i * 0.15} y={30} className="bg-[#0C0C0C]/80 backdrop-blur-md p-8 rounded-[30px] border border-white/5 flex flex-col justify-between group hover:border-white/20 transition-all duration-300">
              <p className="text-lg text-white/80 leading-relaxed font-light mb-8 group-hover:text-white transition-colors">"{review.text}"</p>
              <div>
                <p className={`font-black uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r ${review.color}`}>{review.author}</p>
                <p className="text-sm opacity-50 uppercase tracking-widest mt-1">{review.role}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="py-32 px-6 text-center flex flex-col items-center relative z-10">
        <FadeIn y={30}>
          <h2 className="font-black uppercase tracking-tight text-[clamp(2.5rem,6vw,80px)] leading-none mb-6">Let's Build Something<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] via-[#B600A8] to-[#BE4C00]">Extraordinary</span></h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto mb-10">Ready to take your local business to the next level? Let's talk about your vision.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ContactButton text="Book Free Consultation" />
            <Link to="/portfolio" className="px-8 py-3 sm:px-10 sm:py-3.5 rounded-full border-2 border-[#D7E2EA]/30 text-[#D7E2EA] font-medium uppercase tracking-widest text-sm sm:text-base hover:bg-white hover:text-black hover:border-white hover:scale-105 active:scale-95 transition-all duration-300">See Our Portfolio</Link>
          </div>
        </FadeIn>
      </section>
    </div>
  );
};