
import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight, Download, Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        const rect = contactSection.getBoundingClientRect();
        // Trigger flip when the white section is near the top
        setIsScrolled(rect.top <= 120);
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMenu = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (e: React.MouseEvent, item: typeof NAV_ITEMS[0]) => {
    if (item.label === 'Download CV') {
      e.preventDefault();
      alert("Preparing High-Resolution CV Bundle...");
      setIsMenuOpen(false);
    } else {
      setIsMenuOpen(false);
    }
  };

  // VIVID CONTRAST LOGIC:
  const headerBg = isScrolled 
    ? 'bg-black/90 border-white/20 shadow-[0_10px_40px_rgba(0,0,0,0.5)]' 
    : 'bg-white/90 border-black/10 shadow-[0_10px_40px_rgba(255,255,255,0.15)]';
  
  const contentColor = isScrolled ? 'text-white' : 'text-black';
  const logoBoxColor = isScrolled ? 'bg-white/10 border-white/20' : 'bg-black/10 border-black/20';
  const buttonTheme = isScrolled 
    ? 'bg-white/10 text-white border-white/20 hover:bg-white hover:text-black' 
    : 'bg-black/10 text-black border-black/20 hover:bg-black hover:text-white';

  return (
    <header 
      className={`fixed top-8 left-1/2 -translate-x-1/2 w-[calc(100%-40px)] lg:w-[calc(100%-160px)] max-w-7xl z-[1000] flex justify-between items-center px-8 lg:px-12 rounded-[1.5rem] h-24 transition-all duration-500 backdrop-blur-[100px] border-2 ${headerBg}`}
    >
      {/* Brand Logo - Vivid Contrast */}
      <div 
        className="flex items-center gap-6 group cursor-pointer" 
        onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
      >
        <div className="relative w-12 h-12 flex items-center justify-center">
          <div className={`absolute inset-0 rotate-45 rounded-xl border-2 transition-all duration-700 ${logoBoxColor} animate-slow-rotate group-hover:scale-110 group-hover:border-nexus-accent`}></div>
          <span className={`relative z-10 text-[12px] font-black tracking-tighter transition-colors duration-500 ${contentColor}`}>JP</span>
        </div>
        <div className="flex flex-col">
          <span className={`text-[14px] font-black tracking-[0.4em] uppercase leading-none transition-colors duration-500 ${contentColor}`}>
            JP BURITICÁ
          </span>
          <span className={`text-[8px] tracking-[0.3em] uppercase font-black mt-2 opacity-40 transition-colors duration-500 ${contentColor}`}>
            SYSTEMS ARCHITECT
          </span>
        </div>
      </div>

      {/* Menu Trigger */}
      <div className="relative" ref={menuRef}>
        <button 
          onClick={toggleMenu}
          className={`flex items-center gap-6 group focus:outline-none px-8 py-3.5 rounded-2xl border-2 transition-all duration-500 font-black shadow-lg ${
            isMenuOpen 
              ? (isScrolled ? 'bg-white text-black border-white' : 'bg-black text-white border-black')
              : buttonTheme
          }`}
        >
          <span className="text-[10px] uppercase tracking-[0.4em]">
            {isMenuOpen ? 'Close' : 'Menu'}
          </span>
          <div className="relative w-5 h-5 flex items-center justify-center">
             {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </div>
        </button>

        {/* Crystalline Menu Dropdown - Platinum Theme */}
        <div 
          className={`absolute top-full right-0 mt-8 w-80 bg-black/95 backdrop-blur-[120px] border-2 border-white/10 rounded-[2rem] overflow-hidden transition-all duration-700 origin-top-right shadow-[0_80px_160px_rgba(0,0,0,1)] ${
            isMenuOpen 
              ? 'opacity-100 scale-100 translate-y-0' 
              : 'opacity-0 scale-95 -translate-y-4 pointer-events-none'
          }`}
        >
          <div className="relative p-6 space-y-2">
            {NAV_ITEMS.map((item, idx) => (
              <a 
                key={idx}
                href={item.href}
                onClick={(e) => handleNavClick(e, item)}
                className="group flex items-center justify-between px-6 py-6 rounded-2xl hover:bg-white/[0.08] transition-all text-[12px] font-black tracking-[0.2em] uppercase border-2 border-transparent hover:border-white/10 text-white"
              >
                <div className="flex items-center gap-6">
                  <span className="text-[10px] font-mono text-nexus-accent drop-shadow-[0_0_8px_white]">0{idx + 1}</span>
                  <span className="group-hover:translate-x-3 transition-all duration-500">{item.label}</span>
                </div>
                {item.label === 'Download CV' ? (
                  <Download size={18} className="opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all text-white" />
                ) : (
                  <ChevronRight size={18} className="opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all text-white" />
                )}
              </a>
            ))}
          </div>
          
          <div className="relative bg-white/[0.03] p-10 border-t-2 border-white/10 space-y-12 text-white">
            <div className="space-y-4">
              <p className="text-[9px] uppercase tracking-[0.5em] text-nexus-accent font-black">Location Status</p>
              <p className="text-[12px] tracking-[0.2em] text-white/60 uppercase font-light">Bogotá // Colombia // LatAm</p>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex gap-10">
                <a href="#" className="text-[10px] uppercase tracking-[0.3em] text-white/30 hover:text-nexus-accent transition-colors">LinkedIn</a>
                <a href="#" className="text-[10px] uppercase tracking-[0.3em] text-white/30 hover:text-nexus-accent transition-colors">GitHub</a>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-2.5 h-2.5 rounded-full bg-white animate-pulse shadow-[0_0_15px_white]"></div>
                <span className="text-[9px] text-white/40 tracking-[0.3em] uppercase font-black">Live</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
