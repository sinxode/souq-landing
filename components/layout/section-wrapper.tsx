import React from 'react';
import { cn } from '@/lib/utils';
import type { ComponentBaseProps } from '@/types';

interface SectionWrapperProps extends ComponentBaseProps {
  id?: string;
  ariaLabel?: string;
}

export const SectionWrapper: React.FC<SectionWrapperProps> = ({
  id,
  ariaLabel,
  className,
  children,
}) => {
  return (
    <section
      id={id}
      aria-label={ariaLabel}
      className={cn('relative py-16 sm:py-24 lg:py-32 overflow-hidden', className)}
    >
      {children}
    </section>
  );
};
