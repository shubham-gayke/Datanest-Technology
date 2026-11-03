import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  showTagline?: boolean;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'full' | 'mark-only';
  useImage?: boolean;
  light?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  showTagline = true,
  size = 'md',
  variant = 'full',
  useImage = false,
  light = false,
}) => {
  const sizeMap = {
    sm: { icon: 30, text: 'text-lg', subtext: 'text-[9px]' },
    md: { icon: 40, text: 'text-2xl', subtext: 'text-[11px]' },
    lg: { icon: 54, text: 'text-3xl', subtext: 'text-xs' },
  };

  const currentSize = sizeMap[size];

  if (useImage) {
    return (
      <Link to="/" className={`inline-flex items-center gap-3 group ${className}`} aria-label="Datanest Technology Home">
        <img
          src="/assets/Logo.jpeg"
          alt="Datanest Technology Logo"
          className="h-10 w-auto rounded-lg object-contain shadow-sm group-hover:scale-105 transition-transform"
        />
        {variant === 'full' && (
          <div className="flex flex-col">
            <span
              className={cn(
                'font-heading font-extrabold tracking-tight leading-none text-xl transition-colors',
                light ? 'text-white' : 'text-brand-navy dark:text-white'
              )}
            >
              Datanest
            </span>
            {showTagline && (
              <span
                className={cn(
                  'font-sans font-semibold tracking-wider uppercase text-[10px] mt-0.5 transition-colors',
                  light ? 'text-brand-cyan' : 'text-brand-violet dark:text-brand-accent'
                )}
              >
                Technology
              </span>
            )}
          </div>
        )}
      </Link>
    );
  }

  return (
    <Link to="/" className={`inline-flex items-center gap-2.5 group ${className}`} aria-label="Datanest Technology Home">
      {/* Precision Vector recreation matching Logo.jpeg mark */}
      <div className="relative flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
        <svg
          width={currentSize.icon}
          height={currentSize.icon}
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-sm"
        >
          <defs>
            <linearGradient id="logo-nodes" x1="20" y1="20" x2="80" y2="80" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#A855F7" />
              <stop offset="50%" stopColor="#7C3AED" />
              <stop offset="100%" stopColor="#2563EB" />
            </linearGradient>
            <linearGradient id="bracket-light" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#0B1B3D" />
              <stop offset="100%" stopColor="#1E3A8A" />
            </linearGradient>
            <linearGradient id="bracket-dark" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#38BDF8" />
              <stop offset="100%" stopColor="#2563EB" />
            </linearGradient>
          </defs>

          {/* Left Angle Bracket < */}
          <path
            d="M 36 28 L 18 50 L 36 72"
            stroke="currentColor"
            strokeWidth="8.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={light ? 'text-brand-cyan' : 'text-brand-navy dark:text-white transition-colors'}
          />

          {/* Right Angle Bracket > */}
          <path
            d="M 64 28 L 82 50 L 64 72"
            stroke="currentColor"
            strokeWidth="8.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={light ? 'text-brand-cyan' : 'text-brand-navy dark:text-white transition-colors'}
          />

          {/* Connected Network Nodes Matrix */}
          <g stroke="url(#logo-nodes)" strokeWidth="2.2" opacity="0.9">
            <line x1="50" y1="36" x2="40" y2="44" />
            <line x1="50" y1="36" x2="60" y2="44" />
            <line x1="40" y1="44" x2="38" y2="56" />
            <line x1="60" y1="44" x2="62" y2="56" />
            <line x1="38" y1="56" x2="50" y2="64" />
            <line x1="62" y1="56" x2="50" y2="64" />
            <line x1="40" y1="44" x2="50" y2="50" />
            <line x1="60" y1="44" x2="50" y2="50" />
            <line x1="50" y1="50" x2="50" y2="64" />
          </g>

          {/* Intelligent Data Nodes */}
          <circle cx="50" cy="36" r="4.5" fill="#C084FC" />
          <circle cx="40" cy="44" r="4" fill="#A855F7" />
          <circle cx="60" cy="44" r="4" fill="#7C3AED" />
          <circle cx="50" cy="50" r="5" fill="#6366F1" />
          <circle cx="38" cy="56" r="4.2" fill="#4F46E5" />
          <circle cx="62" cy="56" r="4.2" fill="#38BDF8" />
          <circle cx="50" cy="64" r="4.8" fill="#2563EB" />
        </svg>
      </div>

      {variant === 'full' && (
        <div className="flex flex-col">
          <span
            className={cn(
              'font-heading font-extrabold tracking-tight leading-none transition-colors',
              currentSize.text,
              light ? 'text-white' : 'text-brand-navy dark:text-white'
            )}
          >
            Datanest
          </span>
          {showTagline && (
            <span
              className={cn(
                'font-sans font-semibold tracking-wider uppercase mt-0.5 transition-colors',
                currentSize.subtext,
                light ? 'text-brand-cyan' : 'text-purple-700 dark:text-brand-accent'
              )}
            >
              Technology
            </span>
          )}
        </div>
      )}
    </Link>
  );
};
