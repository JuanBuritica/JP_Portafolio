
import React from 'react';
import { EXPERIENCE } from '../constants';

const About: React.FC = () => {
  return (
    <div className="container mx-auto max-w-6xl">
      <div className="grid lg:grid-cols-2 gap-24 items-start">
        <div className="space-y-16">
          <div className="space-y-4">
            <h2 className="text-[10px] uppercase tracking-[0.6em] font-black text-white/60">Discipline</h2>
            <p className="text-5xl sm:text-7xl font-extralight leading-none text-white tracking-tighter">
              Software <br />
              <span className="italic font-serif text-white">Engineering.</span>
            </p>
          </div>
          
          <div className="space-y-12">
            <div className="relative aspect-[4/5] w-full bg-nexus-gray overflow-hidden rounded-sm shadow-[0_0_80px_rgba(0,0,0,1)] border border-white/10 group">
               <img 
                 src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop" 
                 alt="JP Buritica Profile" 
                 className="w-full h-full object-cover grayscale brightness-125 contrast-125 opacity-40 group-hover:opacity-100 group-hover:scale-105 transition-all duration-[3s]"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
               <div className="absolute bottom-12 left-12 text-white space-y-3 drop-shadow-2xl">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-[1px] bg-white shadow-[0_0_12px_white]"></span>
                    <p className="text-[10px] tracking-[0.4em] uppercase text-white font-black">Principal Architect</p>
                  </div>
                  <p className="text-4xl font-light tracking-tighter uppercase leading-none text-white">JUAN PABLO <br/> BURITICÁ</p>
               </div>
            </div>

            <div className="grid grid-cols-2 gap-x-12 gap-y-12 pt-12 border-t border-white/20 relative">
              <div className="absolute -top-[1px] left-0 w-12 h-[2px] bg-white"></div>
              {[
                { label: 'Technical Core', items: ['REST APIs & sFTP', 'ERP ↔ SaaS Flows', 'SQL / Power BI'] },
                { label: 'Expertise', items: ['Solution Design', 'Data Automation', 'Technical Discovery'] }
              ].map((skill, idx) => (
                <div key={idx} className="space-y-6">
                  <h4 className="text-[9px] uppercase tracking-[0.4em] font-black text-white">{skill.label}</h4>
                  <ul className="space-y-4">
                    {skill.items.map((item, i) => (
                      <li key={i} className="text-xs font-light text-white tracking-wider flex items-center gap-3 group cursor-default">
                        <span className="w-1.5 h-1.5 bg-white rounded-full opacity-100"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-16 pt-0 lg:pt-32 text-white">
          <div className="space-y-8 max-w-lg">
            <div className="crystal-text-box p-8 lg:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-700 hover:bg-white/[0.06]">
              <p className="text-2xl font-extralight text-white/90 leading-relaxed tracking-wide">
                Designing high-performance <span className="text-white font-bold text-glow-white">SaaS ecosystems</span> that connect core business logic with global ERP infrastructure.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="flex items-center justify-between border-b border-white/20 pb-6">
              <h3 className="text-[10px] uppercase tracking-[0.5em] font-black text-white">Curriculum Vitae</h3>
            </div>
            <div className="space-y-8">
              {EXPERIENCE.map((exp, idx) => (
                <div key={idx} className="group relative pl-8 hover:translate-x-2 transition-transform duration-500">
                  <div className="absolute left-0 top-1.5 w-[1px] h-full bg-white/20 group-hover:bg-white transition-colors"></div>
                  <div className="absolute left-[-4px] top-1.5 w-2 h-2 rounded-full border border-white bg-black transition-all"></div>
                  
                  <div className="space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <h4 className="text-2xl font-light group-hover:font-medium transition-all duration-500 text-white">{exp.firm}</h4>
                      <p className="text-[9px] uppercase tracking-widest text-white/60 font-black">{exp.period}</p>
                    </div>
                    <p className="text-xs font-bold text-white uppercase tracking-widest opacity-100">{exp.role}</p>
                    <p className="text-[13px] font-light text-white/70 leading-relaxed max-w-sm">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
