import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import Shared Utilites & Layout
import { ScrollToTop } from './components/Shared';
import { Layout } from './components/Layout';

// Import Pages
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Portfolio } from './pages/Portfolio';
import { Process } from './pages/Process';
import { Pricing } from './pages/Pricing';
import { FAQ } from './pages/FAQ';
import { Contact } from './pages/Contact';

// --- GLOBAL STYLES ---
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
      overflow-x: clip; /* CHANGED to clip so sticky scroll works */
    }

    .hero-heading {
      background: linear-gradient(180deg, #646973 0%, #BBCCD7 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .no-scrollbar::-webkit-scrollbar { display: none; }
    .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

    /* 3D Liquid Glass Animations */
    @keyframes liquidMorph {
      0% { border-radius: 40px 40px 40px 40px; }
      33% { border-radius: 50px 30px 40px 50px / 30px 50px 30px 40px; transform: translateY(0px) scale(1); }
      66% { border-radius: 30px 50px 30px 40px / 50px 30px 50px 30px; transform: translateY(-2px) scale(1.01); }
      100% { border-radius: 40px 40px 40px 40px; transform: translateY(0px) scale(1); }
    }

    @keyframes glassShine {
      0% { background-position: 200% center; }
      100% { background-position: -200% center; }
    }

    .liquid-navbar {
      background: linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.01) 100%);
      backdrop-filter: blur(24px) saturate(150%);
      -webkit-backdrop-filter: blur(24px) saturate(150%);
      border: 1px solid rgba(255, 255, 255, 0.15);
      box-shadow: 
        0 16px 40px -10px rgba(0, 0, 0, 0.5), 
        inset 0 2px 4px rgba(255, 255, 255, 0.4), 
        inset 0 -2px 5px rgba(0, 0, 0, 0.3), 
        inset -5px 5px 20px rgba(255, 255, 255, 0.05); 
      animation: liquidMorph 8s ease-in-out infinite alternate;
      position: relative;
      overflow: hidden;
    }

    .liquid-navbar::after {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0; bottom: 0;
      background: linear-gradient(120deg, transparent 20%, rgba(255,255,255,0.2) 30%, transparent 40%);
      background-size: 200% 100%;
      animation: glassShine 6s infinite linear;
      pointer-events: none;
      z-index: 0;
    }
    
    .nav-content { position: relative; z-index: 10; }
  `}</style>
);

export default function App() {
  return (
    <Router>
      <GlobalStyles />
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/process" element={<Process />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}