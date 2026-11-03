import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Reveal } from '@/components/ui/Reveal';
import { CTABanner } from '@/components/sections/CTABanner';
import { caseStudiesData, type CaseStudy } from '@/data/caseStudies';
import { ArrowRight, TrendingUp, Search } from 'lucide-react';
import { cn } from '@/lib/utils';

const categories = ['All', 'Cloud', 'AI & ML', 'FinTech', 'Modernization', 'Cybersecurity', 'Data'];

export const CaseStudies: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredStudies = caseStudiesData.filter((study) => {
    const matchesCategory =
      activeCategory === 'All' || study.category === activeCategory;
    const matchesSearch =
      study.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      study.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      study.industry.toLowerCase().includes(searchQuery.toLowerCase()) ||
      study.technologies.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Helmet>
        <title>Client Case Studies & Verified Outcomes | Datanest Technology</title>
        <meta
          name="description"
          content="Review verified transformation case studies: 14M accounts migrated to AWS, sovereign generative AI clinical platforms, and zero trust OT cybersecurity."
        />
      </Helmet>

      {/* Hero */}
      <section className="pt-32 pb-20 bg-brand-midnight text-white relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient-hero pointer-events-none" />
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <span className="inline-block px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider">
              Proven Enterprise Impact
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight leading-tight">
              Real-World Outcomes,{' '}
              <span className="text-gradient bg-gradient-to-r from-brand-blue via-brand-cyan to-brand-violet">
                Verified At Scale
              </span>
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Explore how Datanest’s architectural rigor and agile execution delivered tangible millions in cloud savings, eradicated catastrophic downtime, and unlocked cognitive automation.
            </p>

            {/* Search Input */}
            <div className="pt-4 max-w-md mx-auto">
              <div className="relative flex items-center">
                <Search className="absolute left-3.5 w-4 h-4 text-slate-400 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search case studies (e.g. AWS, Banking, AI, Kafka)..."
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/10 border border-white/20 text-xs sm:text-sm text-white placeholder:text-slate-400 focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan backdrop-blur-md transition-all"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Filter Tabs & Grid */}
      <section className="py-20 bg-slate-50 dark:bg-brand-midnight/90 transition-colors border-b border-slate-200 dark:border-white/5">
        <Container>
          {/* Category Pills */}
          <div className="flex items-center justify-start lg:justify-center gap-2 overflow-x-auto pb-4 mb-12 no-scrollbar">
            {categories.map((cat) => {
              const isSelected = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    'px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all border',
                    isSelected
                      ? 'bg-brand-blue text-white border-brand-blue shadow-md shadow-brand-blue/20'
                      : 'bg-white dark:bg-brand-card/60 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-white/10 hover:border-brand-blue/30'
                  )}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStudies.map((study, idx) => (
              <Reveal key={study.slug} animation="fade-up" delay={idx * 0.08}>
                <Card hoverEffect className="h-full flex flex-col justify-between p-6 sm:p-8 group">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
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

                    <p className="mt-1.5 text-xs font-semibold text-slate-500 dark:text-slate-400">
                      {study.client} &bull; {study.industry}
                    </p>

                    <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed">
                      {study.summary}
                    </p>

                    {/* Metrics Banner */}
                    <div className="mt-5 p-3.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 flex items-center justify-between">
                      <div>
                        <div className="font-heading font-black text-2xl text-brand-blue dark:text-brand-cyan">
                          {study.outcomes[0].metric}
                        </div>
                        <div className="text-[10px] text-slate-500 dark:text-slate-400 uppercase font-semibold">
                          {study.outcomes[0].label}
                        </div>
                      </div>
                      <TrendingUp className="w-5 h-5 text-emerald-500 shrink-0" />
                    </div>

                    {/* Tech Badges */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {study.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="text-[10px] px-2 py-0.5 rounded bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/5">
                    <Link
                      to={`/case-studies/${study.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-blue dark:text-brand-cyan group-hover:gap-2.5 transition-all"
                    >
                      <span>Read Case Study Architecture</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>

          {filteredStudies.length === 0 && (
            <div className="text-center py-16 text-slate-500">
              <p className="text-base font-semibold">No case studies found matching your criteria.</p>
              <button
                type="button"
                onClick={() => {
                  setActiveCategory('All');
                  setSearchQuery('');
                }}
                className="mt-3 text-xs font-bold text-brand-blue dark:text-brand-cyan hover:underline"
              >
                Reset filters
              </button>
            </div>
          )}
        </Container>
      </section>

      <CTABanner />
    </>
  );
};

