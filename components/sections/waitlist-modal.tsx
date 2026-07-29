'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Badge } from '../ui/badge';
import { COPY_CATALOG } from '@/constants/copy-catalog';
import { isValidIndianMobile, isValidEmail } from '@/lib/utils';
import { X, CheckCircle2, ShieldCheck, Sparkles, Copy, Check } from 'lucide-react';
import type { WaitlistTrack } from '@/types';

interface WaitlistModalProps {
  isOpen: boolean;
  initialTrack?: WaitlistTrack;
  onClose: () => void;
}

export const WaitlistModal: React.FC<WaitlistModalProps> = ({
  isOpen,
  initialTrack = 'patron',
  onClose,
}) => {
  const [track, setTrack] = useState<WaitlistTrack>(initialTrack);
  const [mobile, setMobile] = useState('');
  const [brandName, setBrandName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [cohortCode, setCohortCode] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTrack(initialTrack);
      setError(null);
      setIsSuccess(false);
      setMobile('');
      setBrandName('');
      setWhatsapp('');
      setEmail('');
      setCohortCode(null);
      setCopied(false);
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen, initialTrack]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen && !isLoading) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, isLoading, onClose]);

  const handleCopyCohortCode = () => {
    if (cohortCode) {
      navigator.clipboard.writeText(cohortCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (track === 'patron') {
      // Customer Early Access Validation
      if (!mobile.trim()) {
        setError(COPY_CATALOG.modal.errors.emptyMobile);
        return;
      }
      if (!isValidIndianMobile(mobile)) {
        setError(COPY_CATALOG.modal.errors.invalidMobile);
        return;
      }

      setIsLoading(true);

      try {
        const res = await fetch('/api/early-access', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ mobile: mobile.trim() }),
        });

        const result = await res.json();

        if (!res.ok || !result.success) {
          setError(result.error?.message || COPY_CATALOG.modal.errors.networkError);
          setIsLoading(false);
          return;
        }

        setCohortCode(result.data?.cohortCode || 'SOUQ-000127');
        setIsLoading(false);
        setIsSuccess(true);
      } catch (err) {
        console.error('Early access submission error:', err);
        setError(COPY_CATALOG.modal.errors.networkError);
        setIsLoading(false);
      }
    } else {
      // Merchant Partner Lead Validation
      if (!brandName.trim() || brandName.trim().length < 2) {
        setError(COPY_CATALOG.modal.errors.invalidBrandName);
        return;
      }
      if (!whatsapp.trim() || !isValidIndianMobile(whatsapp)) {
        setError(COPY_CATALOG.modal.errors.invalidMobile);
        return;
      }
      if (!email.trim() || !isValidEmail(email)) {
        setError(COPY_CATALOG.modal.errors.invalidEmail);
        return;
      }

      setIsLoading(true);

      try {
        const res = await fetch('/api/merchant-leads', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            brandName: brandName.trim(),
            whatsapp: whatsapp.trim(),
            email: email.trim().toLowerCase(),
          }),
        });

        const result = await res.json();

        if (!res.ok || !result.success) {
          setError(result.error?.message || COPY_CATALOG.modal.errors.networkError);
          setIsLoading(false);
          return;
        }

        setIsLoading(false);
        setIsSuccess(true);
      } catch (err) {
        console.error('Merchant lead submission error:', err);
        setError(COPY_CATALOG.modal.errors.networkError);
        setIsLoading(false);
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => !isLoading && onClose()}
            className="fixed inset-0 bg-[#050505]/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-[460px] rounded-[28px] bg-[#121214] border border-white/[0.16] p-6 sm:p-8 shadow-[0_24px_64px_rgba(0,0,0,0.85)] z-10 my-auto"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              disabled={isLoading}
              aria-label={COPY_CATALOG.modal.closeAria}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#8E8E93] hover:text-[#F4F4F6] hover:bg-white/[0.10] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <X className="w-4 h-4" />
            </button>

            {!isSuccess ? (
              <>
                {/* Track Segment Tabs */}
                <div className="flex items-center p-1 rounded-xl bg-white/[0.04] border border-white/[0.06] mb-6">
                  <button
                    type="button"
                    onClick={() => {
                      setTrack('patron');
                      setError(null);
                    }}
                    className={`flex-1 py-2 text-xs font-medium rounded-lg transition-all duration-200 ${
                      track === 'patron'
                        ? 'bg-[#1A1A1E] text-[#F4F4F6] shadow-sm'
                        : 'text-[#8E8E93] hover:text-[#F4F4F6]'
                    }`}
                  >
                    {COPY_CATALOG.modal.tabPatron}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setTrack('merchant');
                      setError(null);
                    }}
                    className={`flex-1 py-2 text-xs font-medium rounded-lg transition-all duration-200 ${
                      track === 'merchant'
                        ? 'bg-[#1A1A1E] text-[#F4F4F6] shadow-sm'
                        : 'text-[#8E8E93] hover:text-[#F4F4F6]'
                    }`}
                  >
                    {COPY_CATALOG.modal.tabMerchant}
                  </button>
                </div>

                {/* Modal Title & Description */}
                <div className="text-left mb-6">
                  <h3
                    id="modal-title"
                    className="font-sans font-medium text-2xl text-[#F4F4F6] tracking-tight mb-2"
                  >
                    {track === 'patron'
                      ? COPY_CATALOG.modal.customer.title
                      : COPY_CATALOG.modal.merchant.title}
                  </h3>
                  <p className="font-sans text-sm text-[#8E8E93]">
                    {track === 'patron'
                      ? COPY_CATALOG.modal.customer.description
                      : COPY_CATALOG.modal.merchant.description}
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  {track === 'patron' ? (
                    /* Customer Early Access Input (Mobile Only) */
                    <div className="flex flex-col gap-2 text-left">
                      <label className="text-xs font-medium text-[#8E8E93] tracking-wide">
                        {COPY_CATALOG.modal.customer.mobileLabel}
                      </label>
                      <div className="flex items-center rounded-[10px] bg-[#121214] border border-white/[0.10] px-3 focus-within:border-white focus-within:ring-2 focus-within:ring-white/20">
                        <span className="font-mono text-xs text-[#8E8E93] border-r border-white/[0.08] pr-3 mr-3 select-none">
                          {COPY_CATALOG.modal.customer.countryCode}
                        </span>
                        <input
                          ref={inputRef}
                          type="tel"
                          placeholder={COPY_CATALOG.modal.customer.mobilePlaceholder}
                          value={mobile}
                          onChange={e => setMobile(e.target.value.replace(/[^\d\s]/g, ''))}
                          disabled={isLoading}
                          className="h-12 w-full bg-transparent text-sm text-[#F4F4F6] placeholder-[#545458] focus:outline-none"
                        />
                      </div>
                      {error && (
                        <p className="text-xs font-mono text-[#EF4444] mt-1">{error}</p>
                      )}
                    </div>
                  ) : (
                    /* Merchant Partner Inputs */
                    <>
                      <Input
                        ref={inputRef}
                        label={COPY_CATALOG.modal.merchant.brandNameLabel}
                        placeholder={COPY_CATALOG.modal.merchant.brandNamePlaceholder}
                        value={brandName}
                        onChange={e => setBrandName(e.target.value)}
                        disabled={isLoading}
                      />

                      <div className="flex flex-col gap-2 text-left">
                        <label className="text-xs font-medium text-[#8E8E93] tracking-wide">
                          {COPY_CATALOG.modal.merchant.whatsappLabel}
                        </label>
                        <div className="flex items-center rounded-[10px] bg-[#121214] border border-white/[0.10] px-3 focus-within:border-white focus-within:ring-2 focus-within:ring-white/20">
                          <span className="font-mono text-xs text-[#8E8E93] border-r border-white/[0.08] pr-3 mr-3 select-none">
                            +91
                          </span>
                          <input
                            type="tel"
                            placeholder={COPY_CATALOG.modal.merchant.whatsappPlaceholder}
                            value={whatsapp}
                            onChange={e => setWhatsapp(e.target.value.replace(/[^\d\s]/g, ''))}
                            disabled={isLoading}
                            className="h-12 w-full bg-transparent text-sm text-[#F4F4F6] placeholder-[#545458] focus:outline-none"
                          />
                        </div>
                      </div>

                      <Input
                        label={COPY_CATALOG.modal.merchant.emailLabel}
                        placeholder={COPY_CATALOG.modal.merchant.emailPlaceholder}
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        error={error}
                        disabled={isLoading}
                      />
                    </>
                  )}

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    isLoading={isLoading}
                    loadingText={
                      track === 'patron'
                        ? COPY_CATALOG.modal.customer.submitLoading
                        : COPY_CATALOG.modal.merchant.submitLoading
                    }
                    className="w-full mt-2"
                  >
                    {track === 'patron'
                      ? COPY_CATALOG.modal.customer.submitDefault
                      : COPY_CATALOG.modal.merchant.submitDefault}
                  </Button>
                </form>
              </>
            ) : (
              /* Success Confirmation View */
              <div className="flex flex-col items-center text-center py-4">
                <div className="w-14 h-14 rounded-full bg-[#10B981]/10 border border-[#10B981]/30 flex items-center justify-center text-[#10B981] mb-6">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <h3 className="font-sans font-medium text-2xl text-[#F4F4F6] mb-2 tracking-tight">
                  {track === 'patron'
                    ? COPY_CATALOG.modal.customer.successTitle
                    : COPY_CATALOG.modal.merchant.successTitle}
                </h3>

                <p className="font-sans text-sm text-[#8E8E93] leading-relaxed mb-6 max-w-[340px]">
                  {track === 'patron'
                    ? COPY_CATALOG.modal.customer.successSubtitle
                    : COPY_CATALOG.modal.merchant.successSubtitle}
                </p>

                {/* Cohort Code Display Box */}
                {track === 'patron' && cohortCode && (
                  <div className="w-full p-5 rounded-2xl bg-white/[0.04] border border-white/[0.12] flex flex-col items-center mb-6">
                    <span className="font-mono text-[10px] tracking-widest text-[#8E8E93] uppercase mb-1">
                      {COPY_CATALOG.modal.customer.cohortLabel}
                    </span>
                    <div className="flex items-center gap-3 my-1">
                      <span className="font-mono text-2xl font-bold tracking-widest text-[#F4F4F6]">
                        {cohortCode}
                      </span>
                      <button
                        onClick={handleCopyCohortCode}
                        aria-label="Copy cohort code"
                        className="p-1.5 rounded-lg bg-white/[0.08] hover:bg-white/[0.16] text-[#8E8E93] hover:text-[#F4F4F6] transition-colors"
                      >
                        {copied ? (
                          <Check className="w-4 h-4 text-[#10B981]" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                    <p className="font-sans text-xs text-[#8E8E93] mt-2 leading-relaxed">
                      {COPY_CATALOG.modal.customer.cohortNote}
                    </p>
                  </div>
                )}

                <Button
                  variant="primary"
                  size="lg"
                  onClick={onClose}
                  className="w-full"
                >
                  {COPY_CATALOG.modal.customer.successCloseCTA}
                </Button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
