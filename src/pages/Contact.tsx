import React from 'react';
import { FadeIn, ContactButton, PageHeader } from '../components/Shared';

export const Contact = () => (
  <div className="min-h-screen pb-32 relative z-10">
    <PageHeader title="Let's Talk" subtitle="Ready to grow your business? Reach out today." />
    <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 mt-10">
      <FadeIn x={-30} className="bg-[#111111]/80 backdrop-blur-md border border-white/10 rounded-[40px] p-8 md:p-12 shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
        <form className="flex flex-col gap-8" onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Your Name" className="bg-transparent border-b border-white/20 pb-4 outline-none focus:border-[#B600A8] transition-colors text-lg text-white placeholder:text-white/40" />
          <input type="email" placeholder="Email Address" className="bg-transparent border-b border-white/20 pb-4 outline-none focus:border-[#B600A8] transition-colors text-lg text-white placeholder:text-white/40" />
          <textarea placeholder="Tell us about your project..." rows={4} className="bg-transparent border-b border-white/20 pb-4 outline-none focus:border-[#B600A8] transition-colors text-lg resize-none text-white placeholder:text-white/40"></textarea>
          <div className="mt-4"><ContactButton text="Send Message" /></div>
        </form>
      </FadeIn>
      <FadeIn x={30} delay={0.2} className="flex flex-col justify-center gap-10">
        <div>
          <h3 className="text-sm uppercase tracking-widest text-[#B600A8] mb-2 font-bold">Email Us</h3>
          <p className="text-2xl font-medium">bifrostdigital360@gmail.com</p>
        </div>
        <div>
          <h3 className="text-sm uppercase tracking-widest text-[#B600A8] mb-2 font-bold">Location</h3>
          <p className="text-2xl font-medium">Bengaluru, Karnataka, India</p>
        </div>
        <div>
          <h3 className="text-sm uppercase tracking-widest text-[#B600A8] mb-2 font-bold">WhatsApp / Phone</h3>
          <p className="text-2xl font-medium">Available on request</p>
        </div>
        <div className="mt-6">
          <a href="mailto:bifrostdigital360@gmail.com" className="px-10 py-4 rounded-full border-2 border-[#3B82F6] text-[#3B82F6] font-bold uppercase tracking-widest text-sm hover:bg-[#3B82F6] hover:text-white transition-all shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:shadow-[0_0_25px_rgba(59,130,246,0.6)] inline-block text-center">
            Email Us Directly
          </a>
        </div>
      </FadeIn>
    </div>
  </div>
);