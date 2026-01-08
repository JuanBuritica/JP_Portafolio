
import React from 'react';
import { Mail, ArrowRight, Github, Linkedin, Globe } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="container mx-auto max-w-6xl">
      <div className="grid lg:grid-cols-12 gap-24">
        <div className="lg:col-span-5 space-y-16">
          <div className="space-y-8">
            <div className="w-12 h-[2px] bg-black"></div>
            <h2 className="text-7xl font-extralight tracking-tighter leading-[0.9] text-black">
              Let's <br />
              <span className="italic font-serif text-black">Collaborate</span>.
            </h2>
            <p className="text-xl font-light text-black/60 leading-relaxed max-w-sm">
              Currently accepting selected projects for technical architecture and enterprise solution design.
            </p>
          </div>

          <div className="space-y-12 font-light text-black">
            <div className="flex gap-8 items-center group cursor-pointer">
              <div className="w-14 h-14 rounded-2xl bg-black/5 flex items-center justify-center group-hover:bg-black group-hover:text-white group-hover:shadow-2xl group-hover:-translate-y-1 transition-all duration-500 border border-black/5">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.4em] opacity-30 mb-1 font-black">Direct Inquiry</p>
                <a href="mailto:juanpabloburiticaruiz@gmail.com" className="text-xl font-medium hover:text-black transition-colors">juanpabloburiticaruiz@gmail.com</a>
              </div>
            </div>
            
            <div className="pt-8 border-t border-black/5 space-y-8">
              <p className="text-[10px] uppercase tracking-[0.4em] opacity-30 font-black">Digital Presence</p>
              <div className="flex gap-4">
                {[
                  { icon: <Github size={22} />, label: 'GitHub' },
                  { icon: <Linkedin size={22} />, label: 'LinkedIn' },
                  { icon: <Globe size={22} />, label: 'Portfolio' }
                ].map((social, i) => (
                  <a key={i} href="#" className="w-14 h-14 border border-black/10 rounded-2xl flex items-center justify-center hover:bg-black hover:text-white hover:border-black hover:-translate-y-2 transition-all duration-500 shadow-sm">
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="crystal-light p-10 lg:p-16 rounded-[2.5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] border border-black/5">
            <form className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-12">
              <div className="space-y-4">
                <label className="text-[10px] uppercase tracking-[0.4em] font-black text-black">Full Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className="w-full bg-transparent border-b-2 border-black/10 py-4 focus:outline-none focus:border-black transition-all font-light text-base text-black placeholder:text-black/20"
                />
              </div>
              <div className="space-y-4">
                <label className="text-[10px] uppercase tracking-[0.4em] font-black text-black">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@nexus.com"
                  className="w-full bg-transparent border-b-2 border-black/10 py-4 focus:outline-none focus:border-black transition-all font-light text-base text-black placeholder:text-black/20"
                />
              </div>
              <div className="sm:col-span-2 space-y-4">
                <label className="text-[10px] uppercase tracking-[0.4em] font-black text-black">Brief Inquiry</label>
                <textarea 
                  rows={4}
                  placeholder="Describe your technical requirements..."
                  className="w-full bg-transparent border-b-2 border-black/10 py-4 focus:outline-none focus:border-black transition-all resize-none font-light text-base text-black placeholder:text-black/20"
                ></textarea>
              </div>
              <div className="sm:col-span-2 pt-8">
                <button className="group relative flex items-center justify-between w-full bg-black text-white px-10 py-7 rounded-2xl uppercase text-[11px] tracking-[0.5em] font-black hover:scale-[1.02] transition-all overflow-hidden shadow-2xl">
                  <span className="relative z-10">Execute Submission</span>
                  <ArrowRight size={20} className="relative z-10 group-hover:translate-x-3 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-r from-zinc-800 via-black to-zinc-800 bg-[length:200%_auto] opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-gradient-slow"></div>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
