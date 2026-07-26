import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export const SpotlightBg: React.FC = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  
  // Motion values for smooth cursor tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Easing spring physics for smooth, non-laggy cursor spotlight
  const springX = useSpring(mouseX, { stiffness: 120, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 120, damping: 20 });

  useEffect(() => {
    // Only enable mouse spotlight on desktop viewports
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024 && matchMedia('(pointer: fine)').matches);
    };

    checkDesktop();
    window.addEventListener('resize', checkDesktop);

    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth >= 1024) {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('resize', checkDesktop);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none">
      {/* Base Canvas Ambient Top Gradient Glow */}
      <div className="absolute -top-[200px] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.06)_0%,rgba(0,0,0,0)_70%)] blur-3xl" />

      {/* Desktop Mouse Tracking Radial Spotlight */}
      {isDesktop && (
        <motion.div
          className="absolute w-[350px] h-[350px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.06)_0%,rgba(0,0,0,0)_70%)] -translate-x-1/2 -translate-y-1/2"
          style={{
            left: springX,
            top: springY,
          }}
        />
      )}

      {/* Micro Grain SVG Noise Canvas Overlay to eliminate color banding */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
};
