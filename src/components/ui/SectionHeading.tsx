import React from 'react';
import { cn } from '@/lib/utils';
import { Badge } from './Badge';

interface SectionHeadingProps {
  badge?: string;
  badgeVariant?: 'blue' | 'cyan' | 'violet' | 'emerald';
  title: string;
  highlight?: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  badgeVariant = 'blue',
  title,
  highlight,
  description,
  align = 'center',
  className,
}) => {
  return (
    <div
      className={cn(
        'max-w-3xl mb-12 sm:mb-16',
        align === 'center' ? 'mx-auto text-center' : 'text-left',
        className
      )}
    >
      {badge && (
        <div className={cn('mb-3.5', align === 'center' ? 'flex justify-center' : '')}>
          <Badge variant={badgeVariant} dot>
            {badge}
          </Badge>
        </div>
      )}

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold tracking-tight text-brand-navy dark:text-white leading-[1.15]">
        {title}{' '}
        {highlight && (
          <span className="text-gradient bg-gradient-to-r from-brand-blue via-brand-cyan to-brand-violet">
            {highlight}
          </span>
        )}
      </h2>

      {description && (
        <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
          {description}
        </p>
      )}
    </div>
  );
};
