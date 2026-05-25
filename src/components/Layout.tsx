import React, { ReactNode, useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { FadeIn, CustomCursor, ScrollProgress } from './Shared';

export const Layout = ({ children }: { children: ReactNode }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Close mobile menu on route change
  useEffect(() => { setIsMobileMenuOpen(false); }, [location.pathname]);

  // --- NEW: Global Keyboard Shortcuts ---
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger shortcuts if the user is typing in a form field
      if (['INPUT', 'TEXTAREA'].includes((document.activeElement as HTMLElement)?.tagName)) return;
      
      switch (e.key.toLowerCase()) {
        case 'h': navigate('/'); break;
        case 'a': navigate('/about'); break;
        case 's': navigate('/services'); break;
        case 'p': navigate('/portfolio'); break;
        case 'c': navigate('/contact'); break;
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [navigate]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Process', path: '/process' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'FAQ', path: '/faq' }
  ];

  return (
    <div className="flex flex-col min-h-screen relative w-full overflow-x-clip bg-[#0C0C0C]">
      
      {/* UI Enhancements */}
      <CustomCursor />
      <ScrollProgress />

      {/* AMBIENT AURORA GLOWS */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#B600A8] opacity-[0.15] blur-[120px] mix-blend-screen animate-pulse" style={{ animationDuration: '8s' }}></div>
        <div className="absolute top-[40%] right-[-20%] w-[60%] h-[60%] rounded-full bg-[#3B82F6] opacity-[0.12] blur-[150px] mix-blend-screen animate-pulse" style={{ animationDuration: '12s' }}></div>
        <div className="absolute bottom-[-20%] left-[20%] w-[50%] h-[50%] rounded-full bg-[#BE4C00] opacity-[0.1] blur-[150px] mix-blend-screen animate-pulse" style={{ animationDuration: '10s' }}></div>
      </div>

      <FadeIn delay={0} y={-20} className="fixed top-4 md:top-6 left-0 w-full z-50 pointer-events-none px-5 md:px-10 flex items-center justify-between lg:justify-center">
        <Link to="/" className="pointer-events-auto hover:opacity-80 transition-opacity drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)] z-50 lg:absolute lg:left-10">
          <img src="/logo.png" alt="BIFRÖST DIGITAL" className="h-12 sm:h-16 md:h-20 lg:h-28 w-auto object-contain" />
        </Link>
        
        <nav className="liquid-navbar pointer-events-auto px-4 md:px-10 py-3 md:py-4 transition-all duration-300 z-50 relative border-t-white/20 border-l-white/20 shadow-[0_8px_32px_rgba(182,0,168,0.15)]">
          <div className="nav-content flex items-center text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-base drop-shadow-lg">
            <div className="hidden lg:flex gap-8 items-center">
              {navLinks.map((item) => (
                <Link key={item.name} to={item.path} className="hover:text-white transition-colors relative group">
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-[#3B82F6] via-[#B600A8] to-[#BE4C00] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
              <Link to="/contact" className="hover:text-white transition-colors relative group font-bold ml-2">
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-[#3B82F6] via-[#B600A8] to-[#BE4C00] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </div>
            <button className="lg:hidden flex items-center justify-center hover:opacity-80 transition-opacity w-7 h-7" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X size={26} color="#D7E2EA" /> : <Menu size={26} color="#D7E2EA" />}
            </button>
          </div>
        </nav>
      </FadeIn>

      {isMobileMenuOpen && <div className="fixed inset-0 z-30 lg:hidden" onClick={() => setIsMobileMenuOpen(false)} />}

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div initial={{ opacity: 0, y: -20, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -20, scale: 0.95 }} transition={{ duration: 0.2, ease: "easeOut" }} className="fixed top-[5.5rem] right-4 sm:right-10 w-64 sm:w-72 z-40 bg-[#111111]/80 backdrop-blur-2xl border border-white/10 rounded-[32px] p-6 flex flex-col items-center gap-5 shadow-[0_20px_40px_rgba(182,0,168,0.2)] lg:hidden">
            {navLinks.map((item, i) => (
              <motion.div key={item.name} initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }}>
                <Link to={item.path} className="text-lg font-black uppercase tracking-widest text-[#D7E2EA] hover:text-[#B600A8] transition-colors">{item.name}</Link>
              </motion.div>
            ))}
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: navLinks.length * 0.05 }} className="mt-2 w-full">
              <Link to="/contact" className="block w-full py-3 rounded-full text-white font-bold uppercase tracking-widest text-xs text-center outline outline-2 outline-white/50 -outline-offset-[3px] shadow-[0px_4px_15px_rgba(182,0,168,0.4)] hover:scale-105 active:scale-95 transition-all" style={{ background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)' }}>
                Get a Quote
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* --- NEW: Fluid Page Transitions --- */}
      <AnimatePresence mode="wait">
        <motion.main 
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="flex-grow w-full relative z-10"
        >
          {children}
        </motion.main>
      </AnimatePresence>

      <footer className="bg-[#0C0C0C]/80 backdrop-blur-xl text-center pt-20 pb-10 flex flex-col gap-4 relative z-30 w-full border-t border-white/5">
        <h2 className="font-black tracking-widest text-3xl opacity-80 bg-clip-text text-transparent bg-gradient-to-r from-[#D7E2EA] to-[#646973]">BIFRÖST DIGITAL</h2>
        <div className="flex justify-center flex-wrap gap-6 text-sm opacity-60 uppercase tracking-widest mt-4">
          <Link to="/portfolio" className="hover:text-[#B600A8] transition-colors">Portfolio</Link>
          <Link to="/services" className="hover:text-[#3B82F6] transition-colors">Services</Link>
          <Link to="/contact" className="hover:text-[#BE4C00] transition-colors">Contact</Link>
        </div>
        
        {/* --- NEW: Keyboard Shortcut Hints in Footer --- */}
        <div className="hidden md:flex justify-center gap-4 text-[10px] uppercase tracking-widest opacity-40 mt-4 border border-white/10 rounded-full py-2 px-6 w-max mx-auto bg-white/5">
          <span><kbd className="font-sans border border-white/30 rounded px-1.5 py-0.5">H</kbd> Home</span>
          <span><kbd className="font-sans border border-white/30 rounded px-1.5 py-0.5">A</kbd> About</span>
          <span><kbd className="font-sans border border-white/30 rounded px-1.5 py-0.5">S</kbd> Services</span>
          <span><kbd className="font-sans border border-white/30 rounded px-1.5 py-0.5">P</kbd> Portfolio</span>
          <span><kbd className="font-sans border border-white/30 rounded px-1.5 py-0.5">C</kbd> Contact</span>
        </div>

        <p className="text-sm opacity-40 mt-8">© 2026 Bifrost Digital. Built for Brands That Demand More.</p>
        <p className="text-xs opacity-30">bifrostdigital360@gmail.com | Phone: Available on request</p>
      </footer>
    </div>
  );
};