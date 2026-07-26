import React from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

export interface CardProps extends HTMLMotionProps<'div'> {
  hoverEffect?: boolean;
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({
  hoverEffect = true,
  className,
  children,
  ...props
}) => {
  return (
    <motion.div
      whileHover={hoverEffect ? { y: -4 } : undefined}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        'relative rounded-[20px] bg-[#121214] border border-white/[0.08] p-6 sm:p-8 transition-colors duration-200 hover:border-white/[0.20] hover:bg-[#16161A] shadow-[0_8px_32px_rgba(0,0,0,0.6)]',
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
};
