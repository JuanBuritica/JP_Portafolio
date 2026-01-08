
import React, { useEffect, useRef } from 'react';

interface JP3DLogoProps {
  size: number;
}

const JP3DLogo: React.FC<JP3DLogoProps> = ({ size }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !(window as any).THREE) return;

    const THREE = (window as any).THREE;
    const FontLoader = (window as any).THREE.FontLoader;
    const TextGeometry = (window as any).THREE.TextGeometry;

    if (!FontLoader || !TextGeometry) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 100);
    camera.position.z = 2.4;

    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true,
      powerPreference: "high-performance"
    });
    renderer.setSize(size, size);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // Neon white setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 2.5);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    const loader = new FontLoader();
    let mesh: any;

    loader.load('https://raw.githubusercontent.com/mrdoob/three.js/master/examples/fonts/helvetiker_bold.typeface.json', (font: any) => {
      const geometry = new TextGeometry('JP', {
        font: font,
        size: 1.1,
        height: 0.15,
        curveSegments: 16,
        bevelEnabled: true,
        bevelThickness: 0.04,
        bevelSize: 0.03,
        bevelOffset: 0,
        bevelSegments: 5
      });
      geometry.center();
      
      const material = new THREE.MeshStandardMaterial({ 
        color: 0xffffff, // Pure White
        wireframe: true,
        transparent: true,
        opacity: 0.8,
        emissive: 0xffffff,
        emissiveIntensity: 1.5, // High intensity for neon effect
        metalness: 0.5,
        roughness: 0
      });
      
      mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);
    });

    let frameId: number;
    const animate = () => {
      frameId = requestAnimationFrame(animate);
      if (mesh) {
        mesh.rotation.y += 0.015;
        mesh.rotation.x = Math.sin(Date.now() * 0.001) * 0.15;
        // Subtle pulsing of neon emissive intensity
        mesh.material.emissiveIntensity = 1.2 + Math.sin(Date.now() * 0.003) * 0.4;
      }
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(frameId);
      renderer.dispose();
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, [size]);

  return <div ref={containerRef} className="flex items-center justify-center drop-shadow-[0_0_35px_rgba(255,255,255,0.7)]" />;
};

export default JP3DLogo;
