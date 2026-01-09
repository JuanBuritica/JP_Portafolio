import React, { useEffect, useRef, useState } from 'react';

interface JP3DLogoProps {
  size: number;
}

const JP3DLogo: React.FC<JP3DLogoProps> = ({ size }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (!containerRef.current || !(window as any).THREE) {
      console.warn("Three.js not found, using fallback.");
      setHasError(true);
      return;
    }

    const THREE = (window as any).THREE;
    const FontLoader = (window as any).THREE.FontLoader;
    const TextGeometry = (window as any).THREE.TextGeometry;

    if (!FontLoader || !TextGeometry) {
      console.warn("Three.js Loaders not found, using fallback.");
      setHasError(true);
      return;
    }

    let renderer: any;
    let scene: any;
    let camera: any;
    let frameId: number;

    try {
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(75, 1, 0.1, 100);
      camera.position.z = 2.4;

      renderer = new THREE.WebGLRenderer({ 
        antialias: true, 
        alpha: true,
        powerPreference: "high-performance"
      });
      renderer.setSize(size, size);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      containerRef.current.appendChild(renderer.domElement);

      const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
      scene.add(ambientLight);

      const pointLight = new THREE.PointLight(0xffffff, 2.5);
      pointLight.position.set(5, 5, 5);
      scene.add(pointLight);

      const loader = new FontLoader();
      let mesh: any;

      loader.load('https://cdn.jsdelivr.net/npm/three@0.128.0/examples/fonts/helvetiker_bold.typeface.json', (font: any) => {
        const geometry = new TextGeometry('JP', {
          font: font,
          size: 1.1,
          height: 0.18,
          curveSegments: 16,
          bevelEnabled: true,
          bevelThickness: 0.05,
          bevelSize: 0.04,
          bevelOffset: 0,
          bevelSegments: 8
        });
        geometry.center();
        
        const material = new THREE.MeshStandardMaterial({ 
          color: 0xffffff,
          wireframe: true,
          transparent: true,
          opacity: 0.8,
          emissive: 0xffffff,
          emissiveIntensity: 1.5,
          metalness: 0.6,
          roughness: 0
        });
        
        mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);

        const animate = () => {
          frameId = requestAnimationFrame(animate);
          const time = Date.now() * 0.001;
          
          if (mesh) {
            // Pronounced Float and Rotation
            mesh.rotation.y += 0.015;
            mesh.rotation.x = Math.sin(time) * 0.15;
            mesh.rotation.z = Math.cos(time * 0.5) * 0.05;
            
            // Subtly Pulsing Glow
            mesh.material.emissiveIntensity = 1.2 + Math.sin(time * 2.5) * 0.8;
          }
          renderer.render(scene, camera);
        };

        animate();
      }, undefined, (err: any) => {
        console.error("Font loading error:", err);
        setHasError(true);
      });

    } catch (e) {
      console.error("Three.js Init Error:", e);
      setHasError(true);
    }

    return () => {
      if (frameId) cancelAnimationFrame(frameId);
      if (renderer) renderer.dispose();
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, [size]);

  if (hasError) {
    return (
      <div className="flex items-center justify-center text-white font-black text-6xl tracking-tighter drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]">
        JP
      </div>
    );
  }

  return <div ref={containerRef} className="flex items-center justify-center drop-shadow-[0_0_35px_rgba(255,255,255,0.7)]" />;
};

export default JP3DLogo;