import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { Reveal } from '../ui/Reveal';
import { servicesData } from '@/data/services';
import {
  Cloud,
  Cpu,
  BarChart3,
  ShieldCheck,
  Code2,
  Terminal,
  Layers,
  Briefcase,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Cloud: <Cloud className="w-6 h-6" />,
  Cpu: <Cpu className="w-6 h-6" />,
  BarChart3: <BarChart3 className="w-6 h-6" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6" />,
  Code2: <Code2 className="w-6 h-6" />,
  Terminal: <Terminal className="w-6 h-6" />,
  Layers: <Layers className="w-6 h-6" />,
  Briefcase: <Briefcase className="w-6 h-6" />,
};

export const ServicesGrid: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 dark:bg-brand-midnight/90 transition-colors relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-brand-blue/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-brand-cyan/5 rounded-full blur-3xl pointer-events-none" />

      <Container>
        <SectionHeading
          badge="Enterprise Solutions"
          badgeVariant="blue"
          title="Transformative Capabilities for the"
          highlight="Modern Enterprise"
          description="From resilient multi-cloud architecture and sovereign generative AI to military-grade cybersecurity, we deliver high-impact engineering that fuels continuous innovation."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {servicesData.map((service, index) => {
            const Icon = iconMap[service.icon] || <Cloud className="w-6 h-6" />;

            return (
              <Reveal key={service.slug} animation="fade-up" delay={index * 0.08}>
                <Card
                  hoverEffect
                  gradientBorder
                  className="h-full flex flex-col justify-between group p-6 sm:p-7"
                >
                  <div>
                    {/* Icon & Badge Header */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/70 text-brand-blue dark:text-brand-cyan flex items-center justify-center group-hover:bg-brand-blue group-hover:text-white group-hover:scale-110 transition-all duration-300">
                        {Icon}
                      </div>
                      {service.badge && (
                        <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-slate-300">
                          {service.badge}
                        </span>
                      )}
                    </div>

                    {/* Title & Description */}
                    <h3 className="font-heading font-bold text-lg text-brand-navy dark:text-white group-hover:text-brand-blue dark:group-hover:text-brand-cyan transition-colors">
                      {service.title}
                    </h3>

                    <p className="mt-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed">
                      {service.shortDescription}
                    </p>

                    {/* Key Offerings Preview */}
                    <div className="mt-4 pt-4 border-t border-slate-100 dark:border-white/5 space-y-1.5">
                      {service.keyOfferings.slice(0, 2).map((offering) => (
                        <div key={offering.title} className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-blue dark:text-brand-cyan shrink-0" />
                          <span className="truncate">{offering.title}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Read More Link */}
                  <div className="mt-6 pt-2">
                    <Link
                      to={`/services/${service.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-blue dark:text-brand-cyan group-hover:gap-2.5 transition-all"
                    >
                      <span>Explore Capability</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </Card>
              </Reveal>
            );
          })}
        </div>

        {/* View All Services Footer */}
        <div className="mt-14 text-center">
          <Link to="/services">
            <button
              type="button"
              className="inline-flex items-center gap-2 text-sm font-bold text-brand-blue dark:text-brand-cyan hover:underline"
            >
              <span>Explore all enterprise offerings & architectural blueprints</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </div>
      </Container>
    </section>
  );
};
