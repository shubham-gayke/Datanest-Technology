import React from 'react';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'glow';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      isLoading = false,
      icon,
      iconPosition = 'right',
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'relative inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed disabled:pointer-events-none select-none';

    const variants = {
      primary:
        'bg-brand-blue hover:bg-blue-600 text-white shadow-md hover:shadow-glow-blue border border-transparent',
      secondary:
        'bg-brand-navy hover:bg-brand-deep text-white dark:bg-white dark:text-brand-navy dark:hover:bg-slate-100 shadow-sm border border-transparent',
      outline:
        'border border-slate-300 dark:border-slate-700 bg-transparent hover:bg-slate-100 dark:hover:bg-brand-card text-slate-800 dark:text-slate-100',
      ghost:
        'bg-transparent hover:bg-slate-100 dark:hover:bg-white/5 text-slate-700 dark:text-slate-200 border-none',
      glow:
        'bg-gradient-to-r from-brand-blue via-indigo-600 to-brand-violet text-white shadow-glow-blue hover:shadow-glow-violet border border-white/20',
    };

    const sizes = {
      sm: 'text-xs px-3.5 py-1.5 gap-1.5',
      md: 'text-sm px-5 py-2.5 gap-2',
      lg: 'text-base px-7 py-3.5 gap-2.5',
    };

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {isLoading ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin text-current" />
            <span>Processing...</span>
          </>
        ) : (
          <>
            {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
            <span>{children}</span>
            {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
          </>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';

