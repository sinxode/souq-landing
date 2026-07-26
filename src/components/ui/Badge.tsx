import React from 'react';
import { cn } from '@/lib/utils';
import type { ComponentBaseProps } from '@/types';

export interface BadgeProps extends ComponentBaseProps {
  variant?: 'mono' | 'success' | 'warning' | 'error';
}

export const Badge: React.FC<BadgeProps> = ({
  variant = 'mono',
  className,
  children,
}) => {
  const variants = {
    mono: 'bg-white/[0.04] text-[#8E8E93] border-white/[0.08]',
    success: 'bg-[#10B981]/10 text-[#10B981] border-[#10B981]/20',
    warning: 'bg-[#F59E0B]/10 text-[#F59E0B] border-[#F59E0B]/20',
    error: 'bg-[#EF4444]/10 text-[#EF4444] border-[#EF4444]/20',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-mono tracking-widest uppercase select-none',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
};
