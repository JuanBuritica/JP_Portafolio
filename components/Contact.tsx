import React from 'react';
import { Mail, ArrowRight, Linkedin, Github, FileDown } from 'lucide-react';

const Contact: React.FC = () => {
  // Direct download link for the Google Drive file
  const cvLink = "https://drive.google.com/uc?export=download&id=1FyQb3te1oW0zKGF9bepsnu33HBwDdRZS";

  return (
    <div id="contact-section" className="container mx-auto max-w-6xl scroll-mt-32">
      <div className="grid lg:grid-cols-12 gap-24 items-stretch">
        {/* Left Column: Symmetrically aligned with the form */}
        <div className="lg:col-span-5 flex flex-col justify-center space-y-16 text-black">
          <div className="space-y-8">
            <div className="w-12 h-[2px] bg-black"></div>
            <h2 className="text-7xl font-extralight tracking-tighter leading-[0.9]">
              Let's <br />
              <span className="italic font-serif">Collaborate</span>.
            </h2>
            <p className="text-xl font-light text-black/60 leading-relaxed max-w-sm">
              Looking to work together? Please reach out.
            </p>
          </div>

          <div className="space-y-12 font-light">
            <div className="space-y-12">
              <div className="flex gap-8 items-center group cursor-pointer">
                <div className="w-14 h-14 rounded-2xl bg-black/5 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-500 border border-black/5">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.4em] opacity-30 mb-1 font-black">Direct Inquiry</p>
                  <a href="mailto:juanpabloburiticaruiz@gmail.com" className="text-xl font-medium break-all">juanpabloburiticaruiz@gmail.com</a>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-12 pt-4">
                <a 
                  href="https://www.linkedin.com/in/juanburitica/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group flex items-center gap-3 text-black/60 hover:text-black transition-all"
                >
                  <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="text-[10px] uppercase tracking-[0.2em] font-black">LinkedIn</span>
                </a>
                <a 
                  href="https://github.com/JuanBuritica" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group flex items-center gap-3 text-black/60 hover:text-black transition-all"
                >
                  <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="text-[10px] uppercase tracking-[0.2em] font-black">GitHub</span>
                </a>
                <a 
                  href={cvLink}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 text-black/60 hover:text-black transition-all"
                >
                  <FileDown className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="text-[10px] uppercase tracking-[0.2em] font-black">Download CV</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Form (Matching Height) */}
        <div className="lg:col-span-7">
          <div className="crystal-light p-10 lg:p-16 rounded-[2.5rem] shadow-2xl border border-black/5 h-full flex flex-col justify-center">
            <form className="grid grid-cols-1 gap-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                <div className="space-y-4">
                  <label className="text-[10px] uppercase tracking-[0.4em] font-black text-black">Full Name</label>
                  <input type="text" className="w-full bg-transparent border-b-2 border-black/10 py-4 focus:outline-none focus:border-black transition-all text-black"/>
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] uppercase tracking-[0.4em] font-black text-black">Email Address</label>
                  <input type="email" className="w-full bg-transparent border-b-2 border-black/10 py-4 focus:outline-none focus:border-black transition-all text-black"/>
                </div>
              </div>
              <div className="space-y-4">
                <label className="text-[10px] uppercase tracking-[0.4em] font-black text-black">What are you looking for?</label>
                <textarea rows={4} className="w-full bg-transparent border-b-2 border-black/10 py-4 focus:outline-none focus:border-black transition-all text-black resize-none" placeholder="Describe your project or inquiry..."></textarea>
              </div>
              <div className="pt-8">
                <button className="group relative flex items-center justify-between w-full bg-black text-white px-10 py-7 rounded-2xl uppercase text-[11px] tracking-[0.5em] font-black hover:scale-[1.02] transition-all">
                  <span>Execute Submission</span>
                  <ArrowRight size={20} className="group-hover:translate-x-3 transition-transform duration-500" />
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