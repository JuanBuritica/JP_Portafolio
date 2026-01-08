
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Contact from './components/Contact';
import IntroOverlay from './components/IntroOverlay';
import About from './components/About';

const App: React.FC = () => {
  const [hasEntered, setHasEntered] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleEnter = () => {
    setHasEntered(true);
  };

  return (
    <div className={`relative min-h-screen bg-black selection:bg-white selection:text-black font-sans transition-colors duration-1000`}>
      {/* 3D Entry Animation Overlay */}
      {!hasEntered && <IntroOverlay onEnter={handleEnter} isReady={isReady} />}

      {hasEntered && <Header />}

      <div className={`transition-all duration-1000 ${hasEntered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <main>
          {/* Section 1: Black background - Tightened Padding */}
          <section id="about" className="pt-40 pb-16 px-6 bg-black text-white">
            <About />
          </section>

          {/* Section 2: White background - Tightened Padding */}
          <section id="contact" className="py-20 px-6 bg-white text-black">
            <Contact />
          </section>
        </main>
      </div>
    </div>
  );
};

export default App;
