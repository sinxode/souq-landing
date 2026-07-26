import React from 'react';
import { cn } from '@/lib/utils';
import type { ComponentBaseProps } from '@/types';

interface ContainerProps extends ComponentBaseProps {
  as?: React.ElementType;
}

/**
 * Container component enforcing maximum page width boundaries,
 * responsive outer margins, and horizontal padding according to the 8px spatial system.
 */
export const Container: React.FC<ContainerProps> = ({
  as: Component = 'div',
  className,
  children,
}) => {
  return (
    <Component
      className={cn(
        'mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8',
        className
      )}
    >
      {children}
    </Component>
  );
};
