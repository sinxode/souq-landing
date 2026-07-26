import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import type { ComponentBaseProps } from '@/types';

interface FadeInProps extends ComponentBaseProps {
  delay?: number;
  direction?: 'up' | 'down' | 'none';
  distance?: number;
}

export const FadeIn: React.FC<FadeInProps> = ({
  delay = 0,
  direction = 'up',
  distance = 16,
  className,
  children,
}) => {
  const directionOffset = direction === 'up' ? distance : direction === 'down' ? -distance : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: directionOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
};
