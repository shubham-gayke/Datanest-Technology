import React from 'react';
import { trustedClients } from '@/data/stats';
import { ShieldCheck } from 'lucide-react';

export const Marquee: React.FC = () => {
  // Duplicate array for seamless infinite looping
  const duplicatedClients = [...trustedClients, ...trustedClients];

  return (
    <section className="py-10 bg-slate-50 dark:bg-brand-navy/90 border-y border-slate-200 dark:border-white/5 overflow-hidden transition-colors">
      <div className="max-w-7xl mx-auto px-4 mb-4 text-center">
        <p className="text-xs uppercase font-bold tracking-widest text-slate-500 dark:text-slate-400">
          Trusted by Fortune 500 & Global Enterprise Leaders
        </p>
      </div>

      <div className="relative w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused] gap-8 py-2">
          {duplicatedClients.map((client, idx) => (
            <div
              key={`${client.name}-${idx}`}
              className="flex items-center gap-3 px-5 py-2.5 rounded-xl bg-white dark:bg-brand-card/80 border border-slate-200 dark:border-white/10 shadow-sm hover:border-brand-blue/40 transition-colors shrink-0"
            >
              <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-white/5 flex items-center justify-center text-brand-blue dark:text-brand-cyan">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div className="text-left">
                <span className="block font-heading font-bold text-sm text-slate-800 dark:text-slate-100 whitespace-nowrap">
                  {client.name}
                </span>
                <span className="block text-[10px] text-slate-500 dark:text-slate-400 font-medium whitespace-nowrap">
                  {client.badge}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

