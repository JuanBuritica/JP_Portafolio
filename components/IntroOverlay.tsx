import React, { useEffect, useRef } from 'react';
import JP3DLogo from './JP3DLogo';
import ParticleBackground from './ParticleBackground';

interface IntroOverlayProps {
  onEnter: () => void;
  isReady: boolean;
}

const IntroOverlay: React.FC<IntroOverlayProps> = ({ onEnter, isReady }) => {
  const overlayRef = useRef<HTMLDivElement>(null);

  const handleInteraction = () => {
    if (isReady) {
      onEnter();
    }
  };

  return (
    <div 
      ref={overlayRef}
      className={`fixed inset-0 bg-black z-[1000] flex flex-col items-center justify-center cursor-pointer transition-transform duration-[1.2s] ease-[cubic-bezier(0.85,0,0.15,1)] ${!isReady ? 'pointer-events-none' : ''}`}
      onClick={handleInteraction}
    >
      <ParticleBackground />

      <div className="relative z-10 flex flex-col items-center text-center group select-none">
        {/* Neon White Diamond Rotating Crystal Logo Container */}
        <div className="relative w-[240px] h-[240px] mb-16 flex items-center justify-center">
          
          {/* Crystalline Rotating Shell with Intense Neon Glow - Increased Blur for Depth */}
          <div className="absolute inset-0 rotate-45 bg-white/[0.05] backdrop-blur-[120px] transition-transform duration-1000 group-hover:scale-110 animate-slow-rotate shadow-[0_0_100px_rgba(255,255,255,0.25)] border border-white/40 overflow-hidden">
            {/* Sophisticated Glint Streak */}
            <div className="absolute inset-[-150%] crystal-shine animate-ice-glint opacity-80 bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent"></div>
          </div>
          
          {/* Intense Neon White Glow Pulse */}
          <div className="absolute -inset-16 rounded-full bg-white/10 blur-[120px] animate-pulse-glow"></div>

          {/* The 3D Logo Content */}
          <div className="relative z-10 w-full h-full flex items-center justify-center transition-transform duration-1000 group-hover:scale-110">
             <JP3DLogo size={240} />
          </div>
        </div>

        <div className="space-y-10">
          <div className="space-y-2">
            <h2 className="text-sm tracking-[1.4em] font-bold uppercase text-white ml-[1.4em] text-glow-white">
              JP BURITICÁ
            </h2>
            <p className="text-[10px] tracking-[0.8em] font-light text-white uppercase ml-[0.8em] opacity-90 text-glow-white">
              Solutions Architect
            </p>
          </div>
          
          <div className="flex flex-col items-center gap-8">
            <div className="group-hover:translate-y-[-4px] transition-transform duration-700">
               <p className={`text-[11px] tracking-[0.5em] font-bold uppercase transition-all duration-1000 ${isReady ? 'text-white opacity-100 text-glow-white' : 'text-white/20 opacity-0'}`}>
                 Initialize Experience
               </p>
            </div>
            
            {isReady && (
              <div className="w-48 h-[2px] bg-white/20 overflow-hidden relative rounded-full shadow-[0_0_15px_white]">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-ice-glint"></div>
              </div>
            )}
          </div>
        </div>

        {!isReady && (
          <div className="absolute -bottom-24 w-64 h-[2px] bg-white/10 overflow-hidden rounded-full">
            <div className="h-full bg-white w-full animate-progress-loading shadow-[0_0_20px_#ffffff]"></div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes progress-loading {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-progress-loading {
          animation: progress-loading 2s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default IntroOverlay;