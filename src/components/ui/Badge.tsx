import React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'blue' | 'cyan' | 'violet' | 'emerald' | 'amber' | 'slate';
  dot?: boolean;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  className,
  variant = 'blue',
  dot = false,
  ...props
}) => {
  const variants = {
    blue: 'bg-blue-50 text-brand-blue border-blue-200 dark:bg-blue-950/60 dark:text-blue-300 dark:border-blue-800/60',
    cyan: 'bg-cyan-50 text-cyan-700 border-cyan-200 dark:bg-cyan-950/60 dark:text-cyan-300 dark:border-cyan-800/60',
    violet: 'bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-950/60 dark:text-purple-300 dark:border-purple-800/60',
    emerald: 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/60 dark:text-emerald-300 dark:border-emerald-800/60',
    amber: 'bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/60 dark:text-amber-300 dark:border-amber-800/60',
    slate: 'bg-slate-100 text-slate-700 border-slate-200 dark:bg-slate-800/70 dark:text-slate-300 dark:border-slate-700',
  };

  const dotColors = {
    blue: 'bg-brand-blue animate-pulse',
    cyan: 'bg-brand-cyan animate-pulse',
    violet: 'bg-brand-violet animate-pulse',
    emerald: 'bg-emerald-500 animate-pulse',
    amber: 'bg-amber-500 animate-pulse',
    slate: 'bg-slate-400',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide border transition-colors',
        variants[variant],
        className
      )}
      {...props}
    >
      {dot && <span className={cn('w-1.5 h-1.5 rounded-full', dotColors[variant])} />}
      {children}
    </span>
  );
};

