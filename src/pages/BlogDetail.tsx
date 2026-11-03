import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { Reveal } from '@/components/ui/Reveal';
import { CTABanner } from '@/components/sections/CTABanner';
import { insightsData } from '@/data/insights';
import {
  ChevronRight,
  Clock,
  Calendar,
  Share2,
  CheckCircle2,
  Linkedin,
  Twitter,
  BookOpen,
} from 'lucide-react';

export const BlogDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = insightsData.find((a) => a.slug === slug);

  if (!article) {
    return <Navigate to="/insights" replace />;
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: article.title,
        text: article.excerpt,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Article link copied to clipboard!');
    }
  };

  return (
    <>
      <Helmet>
        <title>{`${article.title} | Datanest Insights`}</title>
        <meta name="description" content={article.excerpt} />
      </Helmet>

      {/* Hero */}
      <section className="pt-32 pb-16 bg-brand-midnight text-white relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient-hero pointer-events-none" />
        <Container size="md">
          <nav className="flex items-center gap-2 text-xs text-slate-400 mb-6" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link to="/insights" className="hover:text-white transition-colors">
              Insights
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-brand-cyan font-semibold truncate">{article.category}</span>
          </nav>

          <div className="space-y-5">
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
              <span className="font-bold px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-brand-cyan">
                {article.category}
              </span>
              <span>{article.date}</span>
              <span>&bull;</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {article.readTime}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold tracking-tight leading-tight">
              {article.title}
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              {article.excerpt}
            </p>

            {/* Author bar */}
            <div className="flex items-center justify-between pt-6 border-t border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-brand-blue to-brand-violet flex items-center justify-center font-bold text-sm text-white">
                  {article.author.name.charAt(0)}
                </div>
                <div>
                  <div className="font-heading font-bold text-sm text-white">
                    {article.author.name}
                  </div>
                  <div className="text-xs text-slate-400">
                    {article.author.role}
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={handleShare}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white/10 hover:bg-white/15 text-xs text-slate-200 border border-white/10 transition-colors"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>Share</span>
              </button>
            </div>
          </div>
        </Container>
      </section>

      {/* Main Article Content */}
      <section className="py-20 bg-white dark:bg-brand-midnight transition-colors border-b border-slate-200 dark:border-white/5">
        <Container size="md">
          {/* Key Takeaways Highlight Box */}
          <div className="p-6 sm:p-8 rounded-3xl bg-blue-50/70 dark:bg-brand-card/70 border border-blue-200/60 dark:border-brand-blue/30 mb-12 shadow-sm">
            <h3 className="font-heading font-bold text-base text-brand-navy dark:text-white uppercase tracking-wider mb-4 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-brand-blue dark:text-brand-cyan" />
              <span>Key Architectural Takeaways</span>
            </h3>

            <div className="space-y-3">
              {article.keyTakeaways.map((item) => (
                <div key={item} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-brand-blue dark:text-brand-cyan shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Article Sections */}
          <div className="space-y-12">
            {article.content.map((sec) => (
              <div key={sec.heading} className="space-y-4">
                <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-brand-navy dark:text-white leading-snug">
                  {sec.heading}
                </h2>
                <div className="space-y-4 text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                  {sec.body.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Author Footnote Bio */}
          <div className="mt-16 pt-8 border-t border-slate-200 dark:border-white/10 flex items-start gap-4">
            <div className="w-14 h-14 rounded-2xl bg-brand-blue/20 text-brand-blue dark:text-brand-cyan flex items-center justify-center font-bold text-xl shrink-0">
              {article.author.name.charAt(0)}
            </div>
            <div className="space-y-1">
              <h4 className="font-heading font-bold text-base text-brand-navy dark:text-white">
                About {article.author.name}
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {article.author.role} at Datanest Technology. Specializes in enterprise systems architecture, cognitive computing, and technology strategy.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <CTABanner />
    </>
  );
};
