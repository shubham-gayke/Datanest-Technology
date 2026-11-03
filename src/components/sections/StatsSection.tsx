import React from 'react';
import { Container } from '../ui/Container';
import { StatCounter } from '../ui/StatCounter';
import { statsData } from '@/data/stats';
import { Reveal } from '../ui/Reveal';

export const StatsSection: React.FC = () => {
  return (
    <section id="stats" className="py-20 bg-white dark:bg-brand-midnight transition-colors border-b border-slate-200 dark:border-white/5">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-6">
          {statsData.map((stat, idx) => (
            <Reveal key={stat.id} animation="fade-up" delay={idx * 0.1}>
              <div className="text-center p-4 rounded-2xl bg-slate-50/60 dark:bg-brand-card/40 border border-slate-200/60 dark:border-white/5 hover:border-brand-blue/30 transition-all">
                <div className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-brand-blue dark:text-brand-cyan tracking-tight">
                  <StatCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    prefix={stat.prefix}
                    decimals={stat.value % 1 !== 0 ? 1 : 0}
                  />
                </div>
                <h3 className="mt-2 text-sm sm:text-base font-bold text-brand-navy dark:text-white">
                  {stat.label}
                </h3>
                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400 font-normal">
                  {stat.sublabel}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
};
