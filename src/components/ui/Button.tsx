import React from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Spinner } from './Spinner';

export interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'icon';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  loadingText?: string;
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      isLoading = false,
      loadingText,
      disabled,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505] disabled:opacity-40 disabled:cursor-not-allowed disabled:pointer-events-none select-none relative overflow-hidden';

    const variants = {
      primary:
        'bg-[#F4F4F6] text-[#050505] hover:bg-white hover:shadow-[0_0_20px_rgba(255,255,255,0.25)] rounded-[14px]',
      secondary:
        'bg-white/[0.06] text-[#F4F4F6] border border-white/[0.12] hover:bg-white/[0.10] hover:border-white/[0.20] rounded-[14px]',
      ghost:
        'bg-transparent text-[#8E8E93] hover:text-[#F4F4F6] hover:bg-white/[0.04] rounded-[10px]',
      icon:
        'bg-white/[0.04] text-[#F4F4F6] border border-white/[0.08] hover:bg-white/[0.10] hover:border-white/[0.16] rounded-[10px] p-2.5',
    };

    const sizes = {
      sm: 'h-9 px-3.5 text-xs',
      md: 'h-12 px-6 text-sm',
      lg: 'h-14 px-8 text-base',
    };

    return (
      <motion.button
        ref={ref}
        whileTap={{ scale: disabled || isLoading ? 1 : 0.97 }}
        transition={{ duration: 0.1, ease: [0.16, 1, 0.3, 1] }}
        disabled={disabled || isLoading}
        className={cn(
          baseStyles,
          variants[variant],
          variant !== 'icon' && sizes[size],
          className
        )}
        {...props}
      >
        {isLoading ? (
          <span className="inline-flex items-center gap-2">
            <Spinner size="sm" />
            <span>{loadingText || children}</span>
          </span>
        ) : (
          children
        )}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';
