import React from 'react';
import { Container } from '../layout/Container';
import { SectionWrapper } from '../layout/SectionWrapper';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { FadeIn } from '../animation/FadeIn';
import { COPY_CATALOG } from '@/constants/copy-catalog';
import { Building2 } from 'lucide-react';

interface MerchantSectionProps {
  onOpenWaitlist: (track?: 'patron' | 'merchant') => void;
}

export const MerchantSection: React.FC<MerchantSectionProps> = ({ onOpenWaitlist }) => {
  return (
    <SectionWrapper id="merchants" className="py-16 sm:py-24">
      <Container>
        <FadeIn direction="up">
          <Card
            hoverEffect={false}
            className="relative overflow-hidden bg-gradient-to-b from-[#141418] to-[#0D0D0E] border-white/[0.12] p-8 sm:p-12 lg:p-16 text-center sm:text-left"
          >
            {/* Ambient Background Glow Effect */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/[0.03] rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
              <div className="max-w-[640px]">
                <Badge variant="mono" className="mb-4 bg-white/[0.04] border-white/[0.10]">
                  <Building2 className="w-3.5 h-3.5 mr-1 text-[#10B981]" />
                  {COPY_CATALOG.merchantSection.badge}
                </Badge>

                <h2 className="font-sans font-medium text-3xl sm:text-4xl lg:text-5xl text-[#F4F4F6] mb-4 tracking-tight">
                  {COPY_CATALOG.merchantSection.headline}
                </h2>

                <p className="font-sans text-base sm:text-lg text-[#8E8E93] leading-relaxed mb-4">
                  {COPY_CATALOG.merchantSection.body}
                </p>

                <p className="font-mono text-xs text-[#545458]">
                  {COPY_CATALOG.merchantSection.supportingNote}
                </p>
              </div>

              <div className="w-full lg:w-auto shrink-0">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => onOpenWaitlist('merchant')}
                  className="w-full lg:w-auto px-8 whitespace-nowrap"
                >
                  <span>{COPY_CATALOG.merchantSection.ctaButton}</span>
                </Button>
              </div>
            </div>
          </Card>
        </FadeIn>
      </Container>
    </SectionWrapper>
  );
};
