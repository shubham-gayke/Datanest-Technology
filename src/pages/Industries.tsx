import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Reveal } from '@/components/ui/Reveal';
import { CTABanner } from '@/components/sections/CTABanner';
import { industriesData } from '@/data/industries';
import {
  Landmark,
  Activity,
  ShoppingBag,
  Cog,
  Radio,
  Truck,
  ArrowRight,
  TrendingUp,
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Landmark: <Landmark className="w-6 h-6" />,
  Activity: <Activity className="w-6 h-6" />,
  ShoppingBag: <ShoppingBag className="w-6 h-6" />,
  Cog: <Cog className="w-6 h-6" />,
  Radio: <Radio className="w-6 h-6" />,
  Truck: <Truck className="w-6 h-6" />,
};

export const Industries: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Industry Practices & Verticals | Datanest Technology</title>
        <meta
          name="description"
          content="Enterprise IT solutions engineered specifically for Banking & Capital Markets, Healthcare, Retail, Smart Manufacturing, Telecom, and Global Logistics."
        />
      </Helmet>

      {/* Hero */}
      <section className="pt-32 pb-20 bg-brand-midnight text-white relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient-hero pointer-events-none" />
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <span className="inline-block px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-brand-cyan text-xs font-bold uppercase tracking-wider">
              Specialized Industry Practices
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight leading-tight">
              Tailored Solutions for{' '}
              <span className="text-gradient bg-gradient-to-r from-brand-blue via-brand-cyan to-brand-violet">
                Critical Sectors
              </span>
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              We understand that generic IT cannot solve regulated banking latency, healthcare HIPAA boundaries, or smart factory OT security. Our vertical practices bring deep domain blueprints.
            </p>
          </div>
        </Container>
      </section>

      {/* Industry Verticals Grid */}
      <section className="py-24 bg-white dark:bg-brand-midnight transition-colors border-b border-slate-200 dark:border-white/5">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industriesData.map((ind, idx) => {
              const Icon = iconMap[ind.icon] || <Landmark className="w-6 h-6" />;

              return (
                <Reveal key={ind.slug} animation="fade-up" delay={idx * 0.08}>
                  <Card hoverEffect className="h-full flex flex-col justify-between p-6 sm:p-8 group">
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/80 text-brand-blue dark:text-brand-cyan flex items-center justify-center mb-5 group-hover:bg-brand-blue group-hover:text-white group-hover:scale-105 transition-all">
                        {Icon}
                      </div>

                      <h3 className="font-heading font-bold text-xl text-brand-navy dark:text-white group-hover:text-brand-blue dark:group-hover:text-brand-cyan transition-colors">
                        {ind.title}
                      </h3>
                      <p className="text-xs font-semibold text-brand-blue dark:text-brand-cyan mt-1">
                        {ind.tagline}
                      </p>

                      <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed">
                        {ind.overview}
                      </p>

                      {/* Primary Stat Pill */}
                      <div className="mt-5 p-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 flex items-center justify-between">
                        <div>
                          <div className="font-heading font-black text-xl text-brand-blue dark:text-brand-cyan">
                            {ind.metrics[0].stat}
                          </div>
                          <div className="text-[10px] text-slate-400 font-semibold uppercase">
                            {ind.metrics[0].label}
                          </div>
                        </div>
                        <TrendingUp className="w-4 h-4 text-emerald-500 shrink-0" />
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/5">
                      <Link
                        to={`/industries/${ind.slug}`}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-blue dark:text-brand-cyan group-hover:gap-2.5 transition-all"
                      >
                        <span>Explore Industry Practice & Case Outcomes</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </Card>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      <CTABanner />
    </>
  );
};
