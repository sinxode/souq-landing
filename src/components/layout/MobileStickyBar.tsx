import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { COPY_CATALOG } from '@/constants/copy-catalog';

interface MobileStickyBarProps {
  onOpenWaitlist: (track?: 'patron' | 'merchant') => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ onOpenWaitlist }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show mobile bar after scrolling 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-4 left-4 right-4 z-30 md:hidden flex items-center justify-between h-14 px-5 rounded-full bg-[#0D0D0E]/90 backdrop-blur-xl border border-white/[0.12] shadow-[0_8px_32px_rgba(0,0,0,0.8)]"
        >
          <span className="font-sans font-bold text-sm tracking-widest text-[#F4F4F6]">
            {COPY_CATALOG.nav.brand}
          </span>
          <button
            onClick={() => onOpenWaitlist('patron')}
            className="inline-flex items-center justify-center h-10 px-5 rounded-full bg-[#F4F4F6] text-[#050505] font-medium text-xs tracking-tight shadow-lg active:scale-95 transition-transform"
          >
            {COPY_CATALOG.nav.actionButton}
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
