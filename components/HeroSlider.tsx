
import React, { useState, useEffect } from 'react';
import { PROJECTS } from '../constants';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HeroSlider: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrent((prev) => (prev === PROJECTS.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsTransitioning(false), 800);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrent((prev) => (prev === 0 ? PROJECTS.length - 1 : prev - 1));
    setTimeout(() => setIsTransitioning(false), 800);
  };

  const activeProject = PROJECTS[current];

  return (
    <div className="relative h-full w-full overflow-hidden flex flex-col">
      {/* Background Images */}
      {PROJECTS.map((project, idx) => (
        <div 
          key={project.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${idx === current ? 'opacity-30' : 'opacity-0'}`}
        >
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
        </div>
      ))}

      {/* Main Content Area */}
      <div className="relative z-10 flex-1 flex flex-col lg:flex-row items-center justify-between px-6 lg:px-24 pt-32 pb-12">
        
        {/* Left Side: Index & Text */}
        <div className="max-w-2xl flex flex-col gap-8">
          <div className="flex items-center gap-6 font-mono text-[10px] tracking-[0.5em] text-white/40">
            <span className="text-white overflow-hidden relative w-10 h-6">
              <span className={`absolute transition-transform duration-700 ${isTransitioning ? '-translate-y-full' : 'translate-y-0'}`}>
                {activeProject.id}
              </span>
            </span>
            <span className="opacity-30">/</span>
            <span className="opacity-30">0{PROJECTS.length}</span>
          </div>

          <h1 className="text-6xl sm:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.85] flex flex-col uppercase">
            <span className="overflow-hidden">
               <span className={`inline-block transition-transform duration-700 delay-100 ${isTransitioning ? 'translate-y-full' : 'translate-y-0'}`}>
                 {activeProject.title.split(' ')[0]}
               </span>
            </span>
            <span className="overflow-hidden">
               <span className={`inline-block transition-transform duration-700 delay-200 ${isTransitioning ? 'translate-y-full' : 'translate-y-0'}`}>
                 {activeProject.title.split(' ')[1] || ''}
               </span>
            </span>
          </h1>

          <div className="space-y-6">
            <p className={`max-w-md text-base opacity-40 leading-relaxed font-light tracking-wide transition-all duration-700 delay-300 ${isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-60 translate-y-0'}`}>
              {activeProject.description}
            </p>

            <div className="mt-4">
              <a href="#about" className="underlined-cta uppercase text-[10px] tracking-[0.4em] font-bold text-white">
                View Details
              </a>
            </div>
          </div>
        </div>

        {/* Right Side: Decorative Vertical Text */}
        <div className="hidden lg:flex flex-col items-center gap-12">
            <div className="vertical-text h-64 overflow-hidden relative">
              <div className={`flex flex-col gap-2 transition-transform duration-1000 ease-out uppercase tracking-[0.6em] text-[9px] font-light whitespace-nowrap text-white/20 ${isTransitioning ? '-translate-y-full' : 'translate-y-0'}`}>
                <span className="py-4 font-bold text-sm text-white/60">JP</span>
                <span className="py-4">CORE</span>
                <span className={`py-4 font-bold text-sm text-white/60 transition-all ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>{activeProject.verticalAccent}</span>
                <span className="py-4">SYSTEM</span>
                <span className="py-4 font-bold text-sm text-white/60">JP</span>
              </div>
            </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between px-6 lg:px-12 py-12 border-t border-white/5">
        <div className="flex gap-4">
          <button 
            onClick={prevSlide}
            className="w-12 h-12 border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all group"
          >
            <ChevronLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          </button>
          <button 
            onClick={nextSlide}
            className="w-12 h-12 border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all group"
          >
            <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <ul className="hidden md:flex gap-16 mt-8 sm:mt-0">
          {PROJECTS.map((project, idx) => (
            <li key={project.id} className="relative group">
              <button 
                onClick={() => setCurrent(idx)}
                className={`uppercase text-[9px] tracking-[0.4em] font-bold transition-opacity ${idx === current ? 'opacity-100' : 'opacity-20 hover:opacity-100'}`}
              >
                {project.category}
              </button>
              {idx === current && <div className="absolute -bottom-3 left-0 w-full h-[1px] bg-white scale-x-100 origin-left transition-transform duration-500"></div>}
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
           <span className="text-[9px] uppercase tracking-[0.3em] font-light opacity-20">
             © 2024 JP Portfolio
           </span>
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
