import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean;
  glow?: boolean;
  gradientBorder?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className,
  hoverEffect = true,
  glow = false,
  gradientBorder = false,
  ...props
}) => {
  return (
    <div
      className={cn(
        'relative rounded-2xl bg-white dark:bg-brand-card/70 border border-slate-200 dark:border-white/10 p-6 sm:p-8 transition-all duration-300',
        hoverEffect &&
          'hover:-translate-y-1.5 hover:shadow-card-hover dark:hover:shadow-card-dark-hover hover:border-brand-blue/40 dark:hover:border-brand-cyan/40',
        glow && 'shadow-glow-blue',
        gradientBorder && 'before:absolute before:-inset-px before:rounded-2xl before:bg-gradient-to-r before:from-brand-blue before:via-brand-cyan before:to-brand-violet before:opacity-0 hover:before:opacity-100 before:transition-opacity before:-z-10',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
