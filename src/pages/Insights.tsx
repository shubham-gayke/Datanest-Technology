import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Reveal } from '@/components/ui/Reveal';
import { CTABanner } from '@/components/sections/CTABanner';
import { insightsData } from '@/data/insights';
import { Clock, Calendar, Search, ArrowRight, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

const categories = ['All', 'AI Trends', 'Cloud Architecture', 'Cybersecurity', 'Digital Strategy'];

export const Insights: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredArticles = insightsData.filter((art) => {
    const matchesCategory =
      activeCategory === 'All' || art.category === activeCategory;
    const matchesSearch =
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.author.name.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const featured = insightsData[0];

  return (
    <>
      <Helmet>
        <title>Insights & Thought Leadership | Datanest Technology</title>
        <meta
          name="description"
          content="Enterprise IT thought leadership: multi-agent AI architectures, FinOps cloud cost optimization, Zero Trust postures, and real-time lakehouses."
        />
      </Helmet>

      {/* Hero */}
      <section className="pt-32 pb-20 bg-brand-midnight text-white relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient-hero pointer-events-none" />
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <span className="inline-block px-3 py-1 rounded-full bg-blue-950/80 border border-blue-500/30 text-brand-cyan text-xs font-bold uppercase tracking-wider">
              Research & Executive Insights
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight leading-tight">
              Perspectives on the{' '}
              <span className="text-gradient bg-gradient-to-r from-brand-blue via-brand-cyan to-brand-violet">
                Frontier of Enterprise Tech
              </span>
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              In-depth research papers, architectural blueprints, and executive guidance from our Chief Architects and Practice Directors.
            </p>

            {/* Search Input */}
            <div className="pt-4 max-w-md mx-auto">
              <div className="relative flex items-center">
                <Search className="absolute left-3.5 w-4 h-4 text-slate-400 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search articles by topic or keyword..."
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/10 border border-white/20 text-xs sm:text-sm text-white placeholder:text-slate-400 focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan backdrop-blur-md transition-all"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Featured Lead Article */}
      <section className="py-16 bg-white dark:bg-brand-midnight transition-colors border-b border-slate-200 dark:border-white/5">
        <Container>
          <div className="text-xs uppercase font-bold tracking-widest text-brand-blue dark:text-brand-cyan mb-4 flex items-center gap-1.5">
            <Sparkles className="w-4 h-4" />
            <span>Featured Whitepaper</span>
          </div>

          <Reveal animation="fade-up">
            <Link
              to={`/insights/${featured.slug}`}
              className="block rounded-3xl bg-slate-50 dark:bg-brand-card/60 border border-slate-200 dark:border-white/10 p-8 sm:p-12 hover:border-brand-blue/40 transition-all group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8 space-y-4">
                  <div className="flex items-center gap-3 text-xs text-slate-400">
                    <span className="font-bold px-2.5 py-0.5 rounded-full bg-blue-100 dark:bg-blue-950/80 text-brand-blue dark:text-brand-cyan">
                      {featured.category}
                    </span>
                    <span>{featured.date}</span>
                    <span>&bull;</span>
                    <span>{featured.readTime}</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-brand-navy dark:text-white group-hover:text-brand-blue dark:group-hover:text-brand-cyan transition-colors leading-tight">
                    {featured.title}
                  </h2>

                  <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                    {featured.excerpt}
                  </p>

                  <div className="flex items-center gap-3 pt-2">
                    <div className="w-9 h-9 rounded-full bg-brand-blue/20 text-brand-blue dark:text-brand-cyan flex items-center justify-center font-bold text-xs">
                      {featured.author.name.charAt(0)}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-800 dark:text-white">
                        {featured.author.name}
                      </div>
                      <div className="text-[11px] text-slate-400">
                        {featured.author.role}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-4 flex justify-start lg:justify-end">
                  <span className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-blue text-white text-xs sm:text-sm font-bold shadow-md group-hover:bg-blue-600 transition-colors">
                    <span>Read Full Paper</span>
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          </Reveal>
        </Container>
      </section>

      {/* Category Filter & Article Grid */}
      <section className="py-20 bg-slate-50 dark:bg-brand-midnight/90 transition-colors border-b border-slate-200 dark:border-white/5">
        <Container>
          {/* Category Pills */}
          <div className="flex items-center justify-start lg:justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
            {categories.map((cat) => {
              const isSelected = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    'px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all border',
                    isSelected
                      ? 'bg-brand-blue text-white border-brand-blue shadow-sm'
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
            {filteredArticles.map((article, idx) => (
              <Reveal key={article.slug} animation="fade-up" delay={idx * 0.08}>
                <Card hoverEffect className="h-full flex flex-col justify-between p-6 sm:p-7 group">
                  <div>
                    <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                      <span className="font-bold px-2.5 py-0.5 rounded-full bg-blue-50 dark:bg-blue-950/80 text-brand-blue dark:text-brand-cyan">
                        {article.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {article.readTime}
                      </span>
                    </div>

                    <h3 className="font-heading font-bold text-lg text-brand-navy dark:text-white group-hover:text-brand-blue dark:group-hover:text-brand-cyan transition-colors line-clamp-2">
                      {article.title}
                    </h3>

                    <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed">
                      {article.excerpt}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
                    <span className="text-[11px] text-slate-400 font-medium">
                      {article.author.name}
                    </span>
                    <Link
                      to={`/insights/${article.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-bold text-brand-blue dark:text-brand-cyan hover:underline"
                    >
                      <span>Read Paper</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTABanner />
    </>
  );
};

