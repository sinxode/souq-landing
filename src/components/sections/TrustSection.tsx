import React from 'react';
import { Container } from '../layout/Container';
import { SectionWrapper } from '../layout/SectionWrapper';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { FadeIn } from '../animation/FadeIn';
import { StaggerContainer } from '../animation/StaggerContainer';
import { COPY_CATALOG } from '@/constants/copy-catalog';
import { ShieldCheck, Zap, Lock } from 'lucide-react';

export const TrustSection: React.FC = () => {
  const pillarIcons = [ShieldCheck, Zap, Lock];
  const cards = [COPY_CATALOG.pillars.card1, COPY_CATALOG.pillars.card2, COPY_CATALOG.pillars.card3];

  return (
    <SectionWrapper id="trust" className="py-16 sm:py-24">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <FadeIn delay={0.1}>
            <Badge variant="mono" className="mb-4">
              {COPY_CATALOG.pillars.sectionTag}
            </Badge>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h2 className="font-sans font-medium text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[#F4F4F6]">
              {COPY_CATALOG.pillars.sectionTitle}
            </h2>
          </FadeIn>
        </div>

        {/* 3-Column Pillars Matrix */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {cards.map((card, idx) => {
            const Icon = pillarIcons[idx];
            return (
              <FadeIn key={card.tag} delay={0.1 * (idx + 1)}>
                <Card className="h-full flex flex-col justify-between group">
                  <div>
                    {/* Header Tag & Icon */}
                    <div className="flex items-center justify-between mb-8">
                      <span className="font-mono text-xs text-[#8E8E93] tracking-widest uppercase">
                        {card.tag}
                      </span>
                      <div className="w-9 h-9 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#8E8E93] group-hover:text-[#F4F4F6] group-hover:border-white/[0.20] transition-all duration-300">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Card Title */}
                    <h3 className="font-sans font-medium text-xl sm:text-2xl text-[#F4F4F6] mb-3 tracking-tight">
                      {card.title}
                    </h3>

                    {/* Card Body Description */}
                    <p className="font-sans text-sm sm:text-base text-[#8E8E93] leading-relaxed">
                      {card.body}
                    </p>
                  </div>
                </Card>
              </FadeIn>
            );
          })}
        </StaggerContainer>
      </Container>
    </SectionWrapper>
  );
};
