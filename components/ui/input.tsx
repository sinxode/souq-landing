import React from 'react';
import { cn } from '@/lib/utils';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string | null;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className, id, ...props }, ref) => {
    const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

    return (
      <div className="flex flex-col gap-2 w-full text-left">
        {label && (
          <label
            htmlFor={inputId}
            className="text-xs font-medium text-[#8E8E93] tracking-wide"
          >
            {label}
          </label>
        )}
        <div className="relative w-full">
          <input
            id={inputId}
            ref={ref}
            className={cn(
              'h-12 w-full rounded-[10px] bg-[#121214] border border-white/[0.10] px-4 text-sm text-[#F4F4F6] placeholder-[#545458] transition-all duration-200 focus:outline-none focus:border-white focus:ring-2 focus:ring-white/20 disabled:opacity-40 disabled:cursor-not-allowed',
              error && 'border-[#EF4444] focus:border-[#EF4444] focus:ring-[#EF4444]/20',
              className
            )}
            {...props}
          />
        </div>
        {error && (
          <p className="text-xs font-mono text-[#EF4444] animate-fadeIn mt-1">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
