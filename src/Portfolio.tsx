import React, { useRef, useEffect, useState, ReactNode } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// --- GLOBAL STYLES & FONTS ---
const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Kanit:wght@300;400;500;700;900&display=swap');
    
    html, body, #root {
      background-color: #0C0C0C;
      font-family: 'Kanit', sans-serif;
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      color: #D7E2EA;
    }

    .hero-heading {
      background: linear-gradient(180deg, #646973 0%, #BBCCD7 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  `}</style>
);

// --- REUSABLE COMPONENTS ---

const FadeIn = ({ 
  children, 
  delay = 0, 
  duration = 0.7, 
  x = 0, 
  y = 30, 
  className = "" 
}: { children: ReactNode, delay?: number, duration?: number, x?: number, y?: number, className?: string }) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "50px", amount: 0 }}
      transition={{ delay, duration, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  );
};

const Magnet = ({ 
  children, 
  padding = 150, 
  strength = 3, 
  activeTransition = "transform 0.3s ease-out", 
  inactiveTransition = "transform 0.6s ease-in-out",
  className = ""
}: any) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isActive, setIsActive] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    if (Math.abs(distanceX) < padding && Math.abs(distanceY) < padding) {
      setIsActive(true);
      setPosition({ x: distanceX / strength, y: distanceY / strength });
    } else {
      setIsActive(false);
      setPosition({ x: 0, y: 0 });
    }
  };

  const handleMouseLeave = () => {
    setIsActive(false);
    setPosition({ x: 0, y: 0 });
  };

  return (
    <div
      ref={containerRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        transition: isActive ? activeTransition : inactiveTransition,
        willChange: 'transform'
      }}
    >
      {children}
    </div>
  );
};

const AnimatedText = ({ text, className = "" }: { text: string, className?: string }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({ target: container, offset: ['start 0.8', 'end 0.2'] });
  const words = text.split(" ");
  
  return (
    <p ref={container} className={`flex flex-wrap justify-center ${className}`}>
      {words.map((word, i) => {
        const step = 1 / words.length;
        const start = i * step;
        const end = start + step;
        const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1]);
        
        return (
          <span key={i} className="relative mr-1.5 sm:mr-2">
            <span className="opacity-20">{word}</span>
            <motion.span style={{ opacity }} className="absolute left-0 top-0 text-[#D7E2EA]">
              {word}
            </motion.span>
          </span>
        );
      })}
    </p>
  );
};

const ContactButton = () => (
  <button className="px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 rounded-full text-white font-medium uppercase tracking-widest text-xs sm:text-sm md:text-base outline outline-2 outline-white -outline-offset-[3px] shadow-[0px_4px_4px_rgba(181,1,167,0.25),inset_4px_4px_12px_#7721B1] hover:opacity-90 transition-opacity"
          style={{ background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)' }}>
    Contact Me
  </button>
);

const LiveProjectButton = () => (
  <button className="px-8 py-3 sm:px-10 sm:py-3.5 rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest text-sm sm:text-base hover:bg-[#D7E2EA]/10 transition-colors">
    Live Project
  </button>
);

// --- SECTIONS ---

const HeroSection = () => {
  return (
    <section className="h-screen flex flex-col overflow-x-clip relative w-full">
      <FadeIn delay="{0}" y="{-20}" className="w-full z-20 relative">
        <nav className="flex justify-between px-6 md:px-10 pt-6 md:pt-8 text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem]">
          {['About', 'Price', 'Projects', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:opacity-70 transition-opacity duration-200">{item}</a>
          ))}
        </nav>
      </FadeIn>

      <div className="flex-1 flex flex-col justify-center relative z-20 overflow-hidden w-full mt-6 sm:mt-4 md:-mt-5">
        <FadeIn delay="{0.15}" y="{40}" className="w-full text-center">
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw]">
            Hi, i&apos;m jack
          </h1>
        </FadeIn>
      </div>

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
         <FadeIn delay="{0.6}" y="{30}" className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 z-10 pointer-events-auto w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px]">
          <Magnet>
            <img src="https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png" alt="Jack Portrait" className="w-full h-auto" />
          </Magnet>
        </FadeIn>
      </div>

      <div className="flex justify-between items-end pb-7 sm:pb-8 md:pb-10 px-6 md:px-10 z-20 relative">
        <FadeIn delay="{0.35}" y="{20}">
          <p className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px] text-[clamp(0.75rem,1.4vw,1.5rem)]">
            a 3d creator driven by crafting striking and unforgettable projects
          </p>
        </FadeIn>
        <FadeIn delay="{0.5}" y="{20}">
          <ContactButton/>
        </FadeIn>
      </div>
    </section>
  );
};

const MarqueeSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const absoluteTop = window.scrollY + rect.top;
        const calcOffset = (window.scrollY - absoluteTop + window.innerHeight) * 0.3;
        setOffset(calcOffset);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const gifs = [
    "https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif",
    "https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif",
    "https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif",
    "https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif",
    "https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif",
    "https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif",
    "https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif",
    "https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif",
    "https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif",
    "https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif",
    "https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif",
    "https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif",
    "https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif",
    "https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif",
    "https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif",
    "https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif",
    "https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif",
    "https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif",
    "https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif",
    "https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif",
    "https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif"
  ];

  const row1 = [...gifs.slice(0, 11), ...gifs.slice(0, 11), ...gifs.slice(0, 11)];
  const row2 = [...gifs.slice(11), ...gifs.slice(11), ...gifs.slice(11)];

  return (
    <section ref={containerRef} className="pt-24 sm:pt-32 md:pt-40 pb-10 bg-[#0C0C0C] overflow-hidden flex flex-col gap-3">
      <div className="flex gap-3 will-change-transform w-max" style={{ transform: `translateX(${offset - 200}px)` }}>
        {row1.map((src, i) => (
          <img key={`r1-${i}`} src={src} loading="lazy" className="w-[420px] h-[270px] rounded-2xl object-cover" alt="" />
        ))}
      </div>
      <div className="flex gap-3 will-change-transform w-max" style={{ transform: `translateX(${-(offset - 200)}px)` }}>
        {row2.map((src, i) => (
          <img key={`r2-${i}`} src={src} loading="lazy" className="w-[420px] h-[270px] rounded-2xl object-cover" alt="" />
        ))}
      </div>
    </section>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="min-h-screen relative flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20 overflow-hidden">
      <FadeIn delay="{0.1}" x="{-80}" duration="{0.9}" className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] w-[120px] sm:w-[160px] md:w-[210px]">
        <img src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png" alt="Moon" />
      </FadeIn>
      <FadeIn delay="{0.25}" x="{-80}" duration="{0.9}" className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] w-[100px] sm:w-[140px] md:w-[180px]">
        <img src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png" alt="3D Object" />
      </FadeIn>
      <FadeIn delay="{0.15}" x="{80}" duration="{0.9}" className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] w-[120px] sm:w-[160px] md:w-[210px]">
        <img src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png" alt="Lego" />
      </FadeIn>
      <FadeIn delay="{0.3}" x="{80}" duration="{0.9}" className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] w-[130px] sm:w-[170px] md:w-[220px]">
        <img src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png" alt="3D Group" />
      </FadeIn>

      <div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16 z-10">
        <FadeIn delay="{0}" y="{40}">
          <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-center text-[clamp(3rem,12vw,160px)]">
            About me
          </h2>
        </FadeIn>
        
        <div className="flex flex-col items-center gap-16 sm:gap-20 md:gap-24">
          <AnimatedText text="With more than five years of experience in design, i focus on branding, web design, and user experience, i truly enjoy working with businesses that aim to stand out and present their best image. Let's build something incredible together!" className="font-medium text-center leading-relaxed max-w-[560px] text-[clamp(1rem,2vw,1.35rem)]"/>
          <FadeIn y="{30}" delay="{0.2}">
            <ContactButton/>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

const ServicesSection = () => {
  const services = [
    { title: "3D Modeling", desc: "Creation of detailed objects, characters, or environments tailored to specific client needs, ideal for games, products, and visualizations." },
    { title: "Rendering", desc: "High-quality, photorealistic renders that showcase designs with custom lighting, textures, and materials to bring concepts to life." },
    { title: "Motion Design", desc: "Dynamic animations and motion graphics that add energy and storytelling to brands, products, and digital experiences." },
    { title: "Branding", desc: "Crafting cohesive visual identities -- from logos to full brand systems -- that communicate a clear and memorable presence." },
    { title: "Web Design", desc: "Designing clean, modern, and conversion-focused websites with attention to layout, typography, and user experience." }
  ];

  return (
    <section className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 text-[#0C0C0C] relative z-20">
      <FadeIn>
        <h2 className="font-black uppercase text-center mb-16 sm:mb-20 md:mb-28 text-[clamp(3rem,12vw,160px)] leading-none">
          Services
        </h2>
      </FadeIn>
      
      <div className="max-w-5xl mx-auto flex flex-col">
        {services.map((srv, i) => (
<FadeIn key={i} delay={i * 0.1} y={30}>
              <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-16 py-8 sm:py-10 md:py-12 border-b border-[#0c0c0c26] last:border-0">
              <span className="font-black text-[clamp(3rem,10vw,140px)] leading-none">0{i + 1}</span>
              <div className="flex flex-col gap-2 md:gap-4">
                <h3 className="font-medium uppercase text-[clamp(1rem,2.2vw,2.1rem)]">{srv.title}</h3>
                <p className="font-light leading-relaxed max-w-2xl opacity-60 text-[clamp(0.85rem,1.6vw,1.25rem)]">
                  {srv.desc}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};

const ProjectsSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });

  const projects = [
    {
      num: "01", category: "Client", title: "Nextlevel Studio",
      img1: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85",
      img2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85",
      img3: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85"
    },
    {
      num: "02", category: "Personal", title: "Aura Brand Identity",
      img1: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85",
      img2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85",
      img3: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85"
    },
    {
      num: "03", category: "Client", title: "Solaris Digital",
      img1: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85",
      img2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85",
      img3: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85"
    }
  ];

  return (
    <section id="projects" className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-30 relative px-5 sm:px-8 md:px-10 py-20 pb-40">
      <FadeIn>
        <h2 className="hero-heading font-black uppercase text-center mb-16 sm:mb-20 text-[clamp(3rem,12vw,160px)] leading-none">
          Project
        </h2>
      </FadeIn>

      <div ref={containerRef} className="relative w-full max-w-7xl mx-auto flex flex-col items-center">
        {projects.map((proj, i) => {
          const targetScale = 1 - (projects.length - 1 - i) * 0.03;
          const range = [i * 0.33, 1];
          const scale = useTransform(scrollYProgress, range, [1, targetScale]);

          return (
            <div key={i} className="h-[85vh] w-full sticky flex justify-center items-start" style={{ top: `calc(6rem + ${i * 28}px)` }}>
              <motion.div style={{ scale }} className="w-full h-full max-h-[85vh] flex flex-col bg-[#0C0C0C] border-2 border-[#D7E2EA] rounded-[40px] sm:rounded-[50px] md:rounded-[60px] p-4 sm:p-6 md:p-8 transform origin-top">
                
                <div className="flex flex-col sm:flex-row justify-between sm:items-end mb-6 md:mb-8 w-full">
                  <div className="flex items-center gap-6 sm:gap-10">
                    <span className="font-black text-[clamp(3rem,8vw,100px)] leading-none">{proj.num}</span>
                    <div className="flex flex-col uppercase tracking-widest gap-1">
                      <span className="text-sm sm:text-base opacity-60">{proj.category}</span>
                      <h3 className="font-medium text-xl sm:text-3xl md:text-4xl">{proj.title}</h3>
                    </div>
                  </div>
                  <div className="hidden sm:block">
                    <LiveProjectButton/>
                  </div>
                </div>

                <div className="flex flex-1 gap-3 sm:gap-4 md:gap-6 min-h-0">
                  <div className="flex flex-col gap-3 sm:gap-4 md:gap-6 w-[40%]">
                    <img src={proj.img1} alt={`${proj.title} shot 1`} className="w-full object-cover rounded-[30px] sm:rounded-[40px] md:rounded-[50px] min-h-[130px] h-[clamp(130px,16vw,230px)]" />
                    <img src={proj.img2} alt={`${proj.title} shot 2`} className="w-full object-cover rounded-[30px] sm:rounded-[40px] md:rounded-[50px] flex-1 h-[clamp(160px,22vw,340px)]" />
                  </div>
                  <div className="w-[60%] h-full">
                    <img src={proj.img3} alt={`${proj.title} main shot`} className="w-full h-full object-cover rounded-[30px] sm:rounded-[40px] md:rounded-[50px]" />
                  </div>
                </div>

                <div className="mt-6 w-full flex justify-center sm:hidden">
                  <LiveProjectButton/>
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default function App() {
  return (
    <div className="overflow-x-clip w-full text-[#D7E2EA] bg-[#0C0C0C]">
      <GlobalStyles/>
      <HeroSection/>
      <MarqueeSection/>
      <AboutSection/>
      <ServicesSection/>
      <ProjectsSection/>
    </div>
  );
}