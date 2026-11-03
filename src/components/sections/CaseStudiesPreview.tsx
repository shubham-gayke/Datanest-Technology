import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { Reveal } from '../ui/Reveal';
import { caseStudiesData } from '@/data/caseStudies';
import { ArrowRight, TrendingUp } from 'lucide-react';

export const CaseStudiesPreview: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 dark:bg-brand-midnight/90 transition-colors">
      <Container>
        <SectionHeading
          badge="Proven Outcomes"
          badgeVariant="emerald"
          title="Measurable Results for"
          highlight="Global Enterprises"
          description="Explore how our technology consulting and high-scale architecture delivered multi-million-dollar cost savings, accelerated clinical discoveries, and zero-defect uptime."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudiesData.slice(0, 3).map((study, idx) => (
            <Reveal key={study.slug} animation="fade-up" delay={idx * 0.1}>
              <Card hoverEffect className="h-full flex flex-col justify-between group p-6 sm:p-8">
                <div>
                  {/* Category and Client Tag */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-blue-50 dark:bg-blue-950/80 text-brand-blue dark:text-brand-cyan">
                      {study.category}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">
                      {study.readTime}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-lg sm:text-xl text-brand-navy dark:text-white group-hover:text-brand-blue dark:group-hover:text-brand-cyan transition-colors line-clamp-2">
                    {study.title}
                  </h3>

                  <p className="mt-1 text-xs font-semibold text-slate-500 dark:text-slate-400">
                    Client: {study.client}
                  </p>

                  <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed">
                    {study.summary}
                  </p>

                  {/* Primary Metrics Highlight */}
                  <div className="mt-5 p-3.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 flex items-center justify-between">
                    <div>
                      <div className="font-heading font-black text-xl text-brand-blue dark:text-brand-cyan">
                        {study.outcomes[0].metric}
                      </div>
                      <div className="text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold">
                        {study.outcomes[0].label}
                      </div>
                    </div>
                    <TrendingUp className="w-5 h-5 text-emerald-500 shrink-0" />
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/5">
                  <Link
                    to={`/case-studies/${study.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-blue dark:text-brand-cyan group-hover:gap-2.5 transition-all"
                  >
                    <span>Read Full Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 text-sm font-bold text-brand-blue dark:text-brand-cyan hover:underline"
          >
            <span>View all client case studies & impact metrics</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
};

