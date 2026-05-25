import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { PageHeader } from '../components/Shared';

const LiveProjectButton = () => (
  <button className="px-6 py-2.5 sm:px-8 sm:py-3 rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest text-xs sm:text-sm hover:bg-[#D7E2EA]/10 transition-colors">
    View Case Study
  </button>
);

export const Portfolio = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  
  const projects = [
    { num: "01", category: "Luxury Barbershop", title: "WELDONE Barbers", img1: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85", img2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85", img3: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85" },
    { num: "02", category: "Bakery", title: "Sweet Crumbs", img1: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85", img2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85", img3: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85" },
    { num: "03", category: "Beauty Salon", title: "Luxe Studio", img1: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85", img2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85", img3: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85" }
  ];

  return (
    <div className="pb-40 relative z-10">
      <PageHeader title="Portfolio" subtitle="Case studies of local businesses we've transformed." />
      
      <div ref={containerRef} className="relative w-full max-w-7xl mx-auto flex flex-col items-center px-6 pb-20">
        {projects.map((proj, i) => {
          const scale = useTransform(scrollYProgress, [i * 0.33, 1], [1, 1 - (projects.length - 1 - i) * 0.03]);
          return (
            <div key={i} className="h-[85vh] w-full sticky flex justify-center items-start" style={{ top: `calc(8rem + ${i * 28}px)` }}>
              <motion.div style={{ scale }} className="w-full h-full max-h-[85vh] flex flex-col bg-[#111111]/90 backdrop-blur-md border border-white/10 rounded-[40px] p-6 md:p-8 transform origin-top shadow-2xl">
                
                <div className="flex flex-col sm:flex-row justify-between sm:items-end mb-6 w-full gap-4">
                  <div className="flex items-center gap-6">
                    <span className="font-black text-[clamp(2.5rem,6vw,80px)] leading-none text-white/10">{proj.num}</span>
                    <div className="uppercase tracking-widest">
                      <span className="text-sm opacity-60">{proj.category}</span>
                      <h3 className="font-medium text-2xl md:text-4xl">{proj.title}</h3>
                    </div>
                  </div>
                  <div className="hidden sm:block">
                    <LiveProjectButton />
                  </div>
                </div>

                <div className="flex flex-1 gap-4 min-h-0">
                  <div className="flex flex-col gap-4 w-[40%]">
                    <img src={proj.img1} alt="" className="w-full object-cover rounded-[30px] h-[35%]" />
                    <img src={proj.img2} alt="" className="w-full object-cover rounded-[30px] flex-1" />
                  </div>
                  <div className="w-[60%] h-full">
                    <img src={proj.img3} alt="" className="w-full h-full object-cover rounded-[30px]" />
                  </div>
                </div>

                <div className="mt-6 w-full flex justify-center sm:hidden">
                  <LiveProjectButton />
                </div>
                
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
};