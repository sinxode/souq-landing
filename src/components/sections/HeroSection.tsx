import React from 'react';
import { Container } from '../layout/Container';
import { SectionWrapper } from '../layout/SectionWrapper';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { FadeIn } from '../animation/FadeIn';
import { COPY_CATALOG } from '@/constants/copy-catalog';
import { ArrowRight, ShieldCheck } from 'lucide-react';

interface HeroSectionProps {
  onOpenWaitlist: (track?: 'patron' | 'merchant') => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenWaitlist }) => {
  return (
    <SectionWrapper id="hero" className="pt-32 sm:pt-40 lg:pt-48 pb-16 sm:pb-24">
      <Container>
        <div className="flex flex-col items-center text-center max-w-[800px] mx-auto">
          {/* Status Badge Tag */}
          <FadeIn delay={0.1} direction="up">
            <Badge variant="mono" className="mb-6 py-1.5 px-4 bg-white/[0.04] border-white/[0.10]">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse mr-1" />
              {COPY_CATALOG.hero.badge}
            </Badge>
          </FadeIn>

          {/* Main Hero Headline */}
          <FadeIn delay={0.2} direction="up">
            <h1 className="font-sans font-medium text-4xl sm:text-6xl lg:text-7xl tracking-[ -0.035em] leading-[1.05] text-[#F4F4F6] mb-6">
              {COPY_CATALOG.hero.headline}
            </h1>
          </FadeIn>

          {/* Body Description */}
          <FadeIn delay={0.3} direction="up">
            <p className="font-sans text-base sm:text-lg lg:text-xl text-[#8E8E93] leading-relaxed max-w-[680px] mb-10">
              {COPY_CATALOG.hero.body}
            </p>
          </FadeIn>

          {/* Dual Action CTA Buttons */}
          <FadeIn delay={0.4} direction="up" className="w-full sm:w-auto">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
              <Button
                variant="primary"
                size="lg"
                onClick={() => onOpenWaitlist('patron')}
                className="w-full sm:w-auto min-w-[200px]"
              >
                <span>{COPY_CATALOG.hero.primaryCTA}</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>

              <Button
                variant="secondary"
                size="lg"
                onClick={() => onOpenWaitlist('merchant')}
                className="w-full sm:w-auto min-w-[200px]"
              >
                <span>{COPY_CATALOG.hero.secondaryCTA}</span>
              </Button>
            </div>
          </FadeIn>

          {/* Micro Security Callout */}
          <FadeIn delay={0.5} direction="up">
            <p className="inline-flex items-center gap-1.5 text-xs font-mono text-[#545458] mt-8">
              <ShieldCheck className="w-3.5 h-3.5 text-[#10B981]" />
              <span>{COPY_CATALOG.hero.securityNote}</span>
            </p>
          </FadeIn>
        </div>
      </Container>
    </SectionWrapper>
  );
};
