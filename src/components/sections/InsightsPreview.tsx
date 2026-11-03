import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { Reveal } from '../ui/Reveal';
import { insightsData } from '@/data/insights';
import { ArrowRight, Calendar, Clock } from 'lucide-react';

export const InsightsPreview: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 dark:bg-brand-midnight/90 transition-colors">
      <Container>
        <SectionHeading
          badge="Thought Leadership"
          badgeVariant="blue"
          title="Executive Perspectives &"
          highlight="Engineering Insights"
          description="In-depth analysis of emerging technologies, cloud cost optimization, enterprise AI adoption, and zero trust architectural best practices."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {insightsData.slice(0, 3).map((article, idx) => (
            <Reveal key={article.slug} animation="fade-up" delay={idx * 0.1}>
              <Card hoverEffect className="h-full flex flex-col justify-between group p-6 sm:p-7">
                <div>
                  {/* Category & Meta */}
                  <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-3.5">
                    <span className="font-bold px-2.5 py-0.5 rounded-full bg-blue-50 dark:bg-blue-950/80 text-brand-blue dark:text-brand-cyan">
                      {article.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{article.readTime}</span>
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-lg sm:text-xl text-brand-navy dark:text-white group-hover:text-brand-blue dark:group-hover:text-brand-cyan transition-colors line-clamp-2">
                    {article.title}
                  </h3>

                  <p className="mt-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-slate-200 dark:bg-white/10 flex items-center justify-center font-bold text-xs text-brand-navy dark:text-white">
                      {article.author.name.charAt(0)}
                    </div>
                    <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                      {article.author.name}
                    </span>
                  </div>

                  <Link
                    to={`/insights/${article.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-brand-blue dark:text-brand-cyan group-hover:underline"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/insights"
            className="inline-flex items-center gap-2 text-sm font-bold text-brand-blue dark:text-brand-cyan hover:underline"
          >
            <span>Explore all technical whitepapers & research articles</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
};

