import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';

export const ThemeToggle: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      className={`relative p-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-brand-card/80 text-slate-700 dark:text-slate-200 hover:text-brand-blue dark:hover:text-brand-cyan hover:border-brand-blue/30 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue ${className}`}
    >
      <div className="relative w-5 h-5 flex items-center justify-center">
        {theme === 'light' ? (
          <Moon className="w-4 h-4 transition-transform duration-300 hover:-rotate-12 text-brand-navy" />
        ) : (
          <Sun className="w-4 h-4 transition-transform duration-300 hover:rotate-45 text-amber-400" />
        )}
      </div>
    </button>
  );
};
