import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';
import { industriesData } from '@/data/industries';
import {
  Landmark,
  Activity,
  ShoppingBag,
  Cog,
  Radio,
  Truck,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { cn } from '@/lib/utils';

const iconMap: Record<string, React.ReactNode> = {
  Landmark: <Landmark className="w-5 h-5" />,
  Activity: <Activity className="w-5 h-5" />,
  ShoppingBag: <ShoppingBag className="w-5 h-5" />,
  Cog: <Cog className="w-5 h-5" />,
  Radio: <Radio className="w-5 h-5" />,
  Truck: <Truck className="w-5 h-5" />,
};

export const IndustriesShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState(industriesData[0].slug);
  const activeIndustry = industriesData.find((i) => i.slug === activeTab) || industriesData[0];

  return (
    <section className="py-24 bg-white dark:bg-brand-midnight transition-colors border-t border-slate-200 dark:border-white/5">
      <Container>
        <SectionHeading
          badge="Industry Verticals"
          badgeVariant="cyan"
          title="Engineered for Complex"
          highlight="Sector Demands"
          description="Tailored digital platforms that solve mission-critical challenges across regulated finance, life sciences, smart factories, and global trade."
        />

        {/* Industry Selector Pills */}
        <div className="flex items-center justify-start lg:justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {industriesData.map((ind) => {
            const isSelected = activeTab === ind.slug;
            return (
              <button
                key={ind.slug}
                onClick={() => setActiveTab(ind.slug)}
                type="button"
                className={cn(
                  'flex items-center gap-2.5 px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 border',
                  isSelected
                    ? 'bg-brand-blue text-white border-brand-blue shadow-md shadow-brand-blue/20 scale-[1.02]'
                    : 'bg-slate-50 dark:bg-brand-card/60 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-white/10 hover:border-brand-blue/30'
                )}
              >
                <span className={isSelected ? 'text-white' : 'text-brand-blue dark:text-brand-cyan'}>
                  {iconMap[ind.icon]}
                </span>
                <span>{ind.title}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Industry Interactive Feature Card */}
        <Reveal animation="fade-up">
          <div className="rounded-3xl bg-slate-50 dark:bg-brand-card/40 border border-slate-200 dark:border-white/10 p-6 sm:p-10 lg:p-12 shadow-sm relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Overview & Metrics */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950/80 text-brand-blue dark:text-brand-cyan text-xs font-bold">
                  {iconMap[activeIndustry.icon]}
                  <span>{activeIndustry.title}</span>
                </div>

                <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-brand-navy dark:text-white leading-tight">
                  {activeIndustry.tagline}
                </h3>

                <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                  {activeIndustry.overview}
                </p>

                {/* Measurable Impact Metrics Grid */}
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-200 dark:border-white/10">
                  {activeIndustry.metrics.map((m) => (
                    <div key={m.label}>
                      <div className="font-heading font-black text-2xl sm:text-3xl text-brand-blue dark:text-brand-cyan">
                        {m.stat}
                      </div>
                      <div className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-2">
                  <Link
                    to={`/industries/${activeIndustry.slug}`}
                    className="inline-flex items-center gap-2 font-bold text-sm text-brand-blue dark:text-brand-cyan hover:underline"
                  >
                    <span>View full {activeIndustry.title} practice solutions</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Right Column: Key Solutions List & Client Highlight */}
              <div className="lg:col-span-5 space-y-4">
                <div className="rounded-2xl bg-white dark:bg-brand-midnight/90 border border-slate-200 dark:border-white/10 p-6 shadow-sm">
                  <h4 className="font-heading font-bold text-sm text-brand-navy dark:text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-brand-blue dark:text-brand-cyan" />
                    <span>Key Architectural Solutions</span>
                  </h4>

                  <div className="space-y-3.5">
                    {activeIndustry.keySolutions.map((sol) => (
                      <div key={sol.title} className="text-left">
                        <div className="text-xs font-bold text-slate-900 dark:text-white">
                          {sol.title}
                        </div>
                        <div className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug mt-0.5">
                          {sol.description}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Client Highlight Badge */}
                <div className="p-4 rounded-xl bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-purple-500/10 border border-brand-blue/20">
                  <div className="text-[11px] font-bold text-brand-blue dark:text-brand-cyan uppercase tracking-wider">
                    Client Case Highlight &bull; {activeIndustry.clientHighlight.client}
                  </div>
                  <p className="text-xs text-slate-700 dark:text-slate-200 mt-1 italic">
                    "{activeIndustry.clientHighlight.result}"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
};

