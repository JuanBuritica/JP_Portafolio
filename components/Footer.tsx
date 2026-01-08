
import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-32 pb-16 px-6 lg:px-24">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 pb-20 border-b border-white/10">
          <div className="lg:col-span-6 space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 border-2 border-white rotate-45 flex items-center justify-center">
                <span className="text-[10px] font-black -rotate-45">JP</span>
              </div>
              <h2 className="text-3xl font-black tracking-tighter uppercase leading-none">Juan Pablo <br /> Buriticá</h2>
            </div>
            <p className="max-w-xs text-xs font-light text-white/40 leading-relaxed tracking-wider uppercase">
              Principal Solutions Architect based in Bogotá. Crafting the next generation of enterprise systems.
            </p>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-12">
            <div className="space-y-6">
              <h4 className="text-[10px] uppercase tracking-[0.4em] font-black text-white/40">Navigation</h4>
              <ul className="space-y-4 text-xs font-bold uppercase tracking-widest">
                <li><a href="#about" className="hover:text-glow-white transition-all">About</a></li>
                <li><a href="#about" className="hover:text-glow-white transition-all">Experience</a></li>
                <li><a href="#contact" className="hover:text-glow-white transition-all">Contact</a></li>
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="text-[10px] uppercase tracking-[0.4em] font-black text-white/40">Connect</h4>
              <ul className="space-y-4 text-xs font-bold uppercase tracking-widest">
                <li>
                  <a href="#" className="flex items-center gap-2 group hover:text-glow-white transition-all">
                    LinkedIn <ArrowUpRight size={12} className="opacity-40 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center gap-2 group hover:text-glow-white transition-all">
                    GitHub <ArrowUpRight size={12} className="opacity-40 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center gap-2 group hover:text-glow-white transition-all">
                    Instagram <ArrowUpRight size={12} className="opacity-40 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="text-[10px] uppercase tracking-[0.4em] font-black text-white/40">Say Hello</h4>
              <p className="text-xs font-bold uppercase tracking-widest">
                <a href="mailto:hello@jp-dev.com" className="hover:text-glow-white transition-all">hello@jp-dev.com</a>
              </p>
            </div>
          </div>
        </div>

        <div className="pt-12 flex flex-col md:flex-row justify-between items-end md:items-center gap-10">
          <div className="space-y-2">
            <h3 className="text-[12vw] font-black leading-none tracking-tighter text-white/5 select-none -mb-4 lg:-mb-10">BURITICÁ</h3>
            <div className="flex gap-8 text-[9px] uppercase tracking-[0.4em] font-black text-white/20">
              <p>© 2024 PRECISION CRAFTED</p>
              <p>BOGOTÁ, CO</p>
            </div>
          </div>
          
          <div className="flex items-center gap-12 text-[9px] uppercase tracking-[0.4em] font-black text-white/20">
            <span>Portfolio v4.0</span>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_white] animate-pulse"></div>
              <span>Operational</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
