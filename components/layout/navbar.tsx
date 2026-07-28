'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from './container';
import { COPY_CATALOG } from '@/constants/copy-catalog';
import { cn } from '@/lib/utils';

interface NavbarProps {
  onOpenWaitlist: (track?: 'patron' | 'merchant') => void;
  className?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenWaitlist, className }) => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        'fixed top-0 left-0 right-0 z-40 w-full pt-4 sm:pt-6 transition-all duration-300 pointer-events-none',
        className
      )}
    >
      <Container>
        <nav
          aria-label="Main Navigation"
          className="pointer-events-auto flex items-center justify-between h-14 px-4 sm:px-6 rounded-full bg-[#0D0D0E]/70 backdrop-blur-xl border border-white/[0.08] shadow-[0_4px_24px_rgba(0,0,0,0.6)]"
        >
          {/* Left: Brand Monogram */}
          <a
            href="#"
            className="flex items-center gap-2 group focus-visible:outline-none"
            aria-label="SOUQ Home"
          >
            <span className="font-sans font-bold text-lg tracking-widest text-[#F4F4F6] group-hover:text-white transition-colors">
              {COPY_CATALOG.nav.brand}
            </span>
          </a>

          {/* Center: Monospaced Status Pill */}
          <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.06]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
            <span className="font-mono text-xs text-[#8E8E93] tracking-widest uppercase">
              {COPY_CATALOG.nav.statusPill}
            </span>
          </div>

          {/* Right: Primary Nav Action Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
            onClick={() => onOpenWaitlist('patron')}
            className="inline-flex items-center justify-center h-9 px-4 rounded-full bg-[#F4F4F6] text-[#050505] font-medium text-xs sm:text-sm tracking-tight transition-all duration-200 hover:bg-white hover:shadow-[0_0_16px_rgba(255,255,255,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            {COPY_CATALOG.nav.actionButton}
          </motion.button>
        </nav>
      </Container>
    </motion.header>
  );
};
