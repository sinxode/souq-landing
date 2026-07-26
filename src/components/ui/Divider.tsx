import React from 'react';
import { cn } from '@/lib/utils';

export const Divider: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <hr className={cn('w-full border-0 h-px bg-white/[0.06] my-8', className)} />
  );
};
