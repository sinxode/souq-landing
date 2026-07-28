'use client';

import { useState } from 'react';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { MobileStickyBar } from '@/components/layout/mobile-sticky-bar';
import { HeroSection } from '@/components/sections/hero-section';
import { TrustSection } from '@/components/sections/trust-section';
import { MerchantSection } from '@/components/sections/merchant-section';
import { WaitlistModal } from '@/components/sections/waitlist-modal';
import { SpotlightBg } from '@/components/animation/spotlight-bg';
import type { WaitlistTrack } from '@/types';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTrack, setActiveTrack] = useState<WaitlistTrack>('patron');

  const handleOpenWaitlist = (track: WaitlistTrack = 'patron') => {
    setActiveTrack(track);
    setIsModalOpen(true);
  };

  const handleCloseWaitlist = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="relative min-h-screen bg-[#050505] text-[#F4F4F6] selection:bg-white/20 selection:text-white antialiased overflow-x-hidden">
      {/* Interactive Desktop Mouse Spotlight & Ambient Background Lighting */}
      <SpotlightBg />

      {/* Persistent Frosted Header Navigation */}
      <Navbar onOpenWaitlist={handleOpenWaitlist} />

      {/* Main Content Sections */}
      <main id="main-content" className="relative z-10">
        <HeroSection onOpenWaitlist={handleOpenWaitlist} />
        <TrustSection />
        <MerchantSection onOpenWaitlist={handleOpenWaitlist} />
      </main>

      {/* Footer & Mobile Navigation Actions */}
      <Footer onOpenWaitlist={handleOpenWaitlist} />
      <MobileStickyBar onOpenWaitlist={handleOpenWaitlist} />

      {/* Accessible Waitlist Modal Dialog */}
      <WaitlistModal
        isOpen={isModalOpen}
        initialTrack={activeTrack}
        onClose={handleCloseWaitlist}
      />
    </div>
  );
}
