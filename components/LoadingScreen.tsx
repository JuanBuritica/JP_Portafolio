
import React, { useEffect, useState } from 'react';

const LoadingScreen: React.FC = () => {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 15);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-black z-[100] flex flex-col items-center justify-center">
      <div className="space-y-4 text-center">
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="w-8 h-8 border border-white animate-spin-slow"></div>
          <span className="text-xl font-bold tracking-tighter uppercase">Nexus</span>
        </div>
        
        <div className="relative w-64 h-[1px] bg-white/10">
          <div 
            className="absolute top-0 left-0 h-full bg-white transition-all duration-300"
            style={{ width: `${percent}%` }}
          ></div>
        </div>
        
        <div className="flex justify-between w-64 text-[10px] uppercase tracking-[0.3em] font-light">
          <span>Loading Assets</span>
          <span>{percent}%</span>
        </div>
      </div>

      <div className="absolute bottom-12 text-[10px] uppercase tracking-[0.5em] font-light opacity-30">
        System Operational
      </div>
      
      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 4s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;
