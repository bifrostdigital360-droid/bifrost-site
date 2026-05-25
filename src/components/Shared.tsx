import React, { useRef, useState, useEffect, ReactNode } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

export const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

// --- NEW: Glowing Trailing Cursor ---
export const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9999] hidden md:block mix-blend-screen bg-gradient-to-r from-[#B600A8] to-[#3B82F6] blur-[8px] opacity-70"
      animate={{ x: mousePosition.x - 16, y: mousePosition.y - 16 }}
      transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.5 }}
    />
  );
};

// --- NEW: Scroll Progress Bar ---
export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <motion.div 
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#3B82F6] via-[#B600A8] to-[#BE4C00] origin-left z-[9999]" 
      style={{ scaleX }} 
    />
  );
};

export const FadeIn = ({ children, delay = 0, duration = 0.7, x = 0, y = 30, className = "" }: { children: ReactNode, delay?: number, duration?: number, x?: number, y?: number, className?: string }) => (
  <motion.div className={className} initial={{ opacity: 0, x, y }} whileInView={{ opacity: 1, x: 0, y: 0 }} viewport={{ once: true, margin: "50px", amount: 0 }} transition={{ delay, duration, ease: [0.25, 0.1, 0.25, 1] }}>
    {children}
  </motion.div>
);

export const Magnet = ({ children, padding = 150, strength = 3, className = "" }: any) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isActive, setIsActive] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    if (Math.abs(e.clientX - centerX) < padding && Math.abs(e.clientY - centerY) < padding) {
      setIsActive(true);
      setPosition({ x: (e.clientX - centerX) / strength, y: (e.clientY - centerY) / strength });
    } else {
      setIsActive(false);
      setPosition({ x: 0, y: 0 });
    }
  };

  return (
    <div ref={containerRef} className={className} onMouseMove={handleMouseMove} onMouseLeave={() => { setIsActive(false); setPosition({ x: 0, y: 0 }); }} style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0)`, transition: isActive ? "transform 0.3s ease-out" : "transform 0.6s ease-in-out", willChange: 'transform' }}>
      {children}
    </div>
  );
};

export const AnimatedText = ({ text, className = "" }: { text: string, className?: string }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({ target: container, offset: ['start 0.8', 'end 0.2'] });
  const words = text.split(" ");
  return (
    <p ref={container} className={`flex flex-wrap justify-center ${className}`}>
      {words.map((word, i) => {
        const opacity = useTransform(scrollYProgress, [i / words.length, (i + 1) / words.length], [0.2, 1]);
        return (
          <span key={i} className="relative mr-1.5 sm:mr-2">
            <span className="opacity-20">{word}</span>
            <motion.span style={{ opacity }} className="absolute left-0 top-0 text-[#D7E2EA]">{word}</motion.span>
          </span>
        );
      })}
    </p>
  );
};

export const ContactButton = ({ text = "Get a Quote" }) => (
  <Link to="/contact" className="px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 rounded-full text-white font-bold uppercase tracking-widest text-xs sm:text-sm outline outline-2 outline-white/50 -outline-offset-[3px] shadow-[0px_4px_15px_rgba(182,0,168,0.4)] hover:shadow-[0px_4px_25px_rgba(182,0,168,0.7)] transition-all inline-block text-center hover:scale-105 active:scale-95" style={{ background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)' }}>
    {text}
  </Link>
);

export const PageHeader = ({ title, subtitle }: { title: string, subtitle: string }) => (
  <div className="pt-40 pb-16 px-6 text-center z-10 relative">
    <FadeIn y={40}>
      <h1 className="hero-heading font-black uppercase tracking-tight leading-none text-[clamp(3rem,10vw,120px)]">{title}</h1>
    </FadeIn>
    <FadeIn delay={0.2} y={20}>
      <p className="mt-6 text-white/60 font-light uppercase tracking-wide max-w-2xl mx-auto text-[clamp(1rem,1.5vw,1.25rem)]">{subtitle}</p>
    </FadeIn>
  </div>
);