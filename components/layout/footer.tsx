'use client';

import React from 'react';
import { Container } from './container';
import { COPY_CATALOG } from '@/constants/copy-catalog';
import { SITE_CONFIG } from '@/constants/site';

interface FooterProps {
  onOpenWaitlist?: (track?: 'patron' | 'merchant') => void;
}

export const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="w-full border-t border-white/[0.06] bg-[#050505] py-12 lg:py-16 text-[#8E8E93]">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-center md:items-start gap-2 text-center md:text-left">
            <span className="font-sans font-bold text-base tracking-widest text-[#F4F4F6]">
              {COPY_CATALOG.nav.brand}
            </span>
            <p className="text-xs text-[#545458] font-mono tracking-wider">
              {COPY_CATALOG.footer.copyright}
            </p>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.06] text-xs font-mono text-[#8E8E93]">
            <span className="w-2 h-2 rounded-full bg-[#10B981]" />
            <span>{COPY_CATALOG.footer.statusMonitor}</span>
          </div>

          <div className="flex items-center gap-6 text-xs font-mono text-[#8E8E93]">
            <a
              href={SITE_CONFIG.socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F4F4F6] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white rounded"
            >
              {COPY_CATALOG.footer.socialLink}
            </a>
            <span className="text-white/10">|</span>
            <button
              onClick={() => alert('Privacy policy documentation is available upon cohort invitation dispatch.')}
              className="hover:text-[#F4F4F6] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white rounded"
            >
              {COPY_CATALOG.footer.privacyLink}
            </button>
            <span className="text-white/10">|</span>
            <button
              onClick={() => alert('Terms of access are governed by SOUQ Technologies Inc.')}
              className="hover:text-[#F4F4F6] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white rounded"
            >
              {COPY_CATALOG.footer.termsLink}
            </button>
          </div>
        </div>
      </Container>
    </footer>
  );
};
