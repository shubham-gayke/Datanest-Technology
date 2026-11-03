import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { CTABanner } from '@/components/sections/CTABanner';
import { caseStudiesData } from '@/data/caseStudies';
import {
  ChevronRight,
  ArrowRight,
  TrendingUp,
  AlertCircle,
  CheckCircle2,
  Cpu,
  Layers,
  Clock,
} from 'lucide-react';

export const CaseStudyDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const study = caseStudiesData.find((s) => s.slug === slug);

  if (!study) {
    return <Navigate to="/case-studies" replace />;
  }

  return (
    <>
      <Helmet>
        <title>{`${study.title} | Case Study | Datanest Technology`}</title>
        <meta name="description" content={study.summary} />
      </Helmet>

      {/* Hero with Breadcrumbs */}
      <section className="pt-32 pb-20 bg-brand-midnight text-white relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient-hero pointer-events-none" />
        <Container>
          <nav className="flex items-center gap-2 text-xs text-slate-400 mb-6" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link to="/case-studies" className="hover:text-white transition-colors">
              Case Studies
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-brand-cyan font-semibold truncate">{study.category}</span>
          </nav>

          <div className="max-w-4xl space-y-5">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-brand-cyan">
                {study.category}
              </span>
              <span className="text-xs text-slate-400 font-semibold">
                {study.industry}
              </span>
              <span className="text-slate-500">&bull;</span>
              <span className="text-xs text-slate-400 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {study.readTime}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold tracking-tight leading-tight">
              {study.title}
            </h1>

            <div className="p-3 rounded-xl bg-white/5 border border-white/10 inline-block text-xs text-slate-300">
              <span className="text-slate-400">Enterprise Client:</span>{' '}
              <span className="font-bold text-white">{study.client}</span>
            </div>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
              {study.summary}
            </p>
          </div>
        </Container>
      </section>

      {/* Measurable Impact Outcome Grid */}
      <section className="py-12 bg-white dark:bg-brand-card/50 border-y border-slate-200 dark:border-white/5 transition-colors">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {study.outcomes.map((outcome, idx) => (
              <Reveal key={outcome.label} animation="fade-up" delay={idx * 0.08}>
                <div className="p-4 rounded-xl text-center md:text-left">
                  <div className="font-heading font-black text-3xl sm:text-4xl text-brand-blue dark:text-brand-cyan">
                    {outcome.metric}
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-brand-navy dark:text-white mt-1">
                    {outcome.label}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Challenge vs Solution Deep Dive */}
      <section className="py-24 bg-slate-50 dark:bg-brand-midnight transition-colors border-b border-slate-200 dark:border-white/5">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* The Challenge */}
            <div className="lg:col-span-6 space-y-5">
              <Reveal animation="slide-left">
                <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-brand-card/80 border border-slate-200 dark:border-white/10 shadow-sm space-y-4">
                  <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-500">
                    <AlertCircle className="w-4 h-4" />
                    <span>The Critical Problem</span>
                  </div>
                  <h3 className="font-heading font-bold text-2xl text-brand-navy dark:text-white">
                    Systemic Bottlenecks & Exposure
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                    {study.challenge}
                  </p>
                </div>
              </Reveal>
            </div>

            {/* The Solution */}
            <div className="lg:col-span-6 space-y-5">
              <Reveal animation="slide-right">
                <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-brand-card/80 border border-slate-200 dark:border-white/10 shadow-sm space-y-4">
                  <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-500">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Datanest Engineering Approach</span>
                  </div>
                  <h3 className="font-heading font-bold text-2xl text-brand-navy dark:text-white">
                    The Modern Architectural Solution
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                    {study.solution}
                  </p>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Architectural Blueprint Highlights */}
          <div className="mt-14">
            <Reveal animation="fade-up">
              <div className="rounded-3xl bg-slate-900 border border-slate-800 p-8 sm:p-10 text-white shadow-xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-brand-blue/20 text-brand-cyan flex items-center justify-center">
                    <Layers className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-lg text-white">
                      Architectural Blueprint Highlights
                    </h4>
                    <p className="text-xs text-slate-400">
                      Engineering patterns implemented for this mission-critical deployment
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {study.architecturalHighlights.map((hl) => (
                    <div
                      key={hl}
                      className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3"
                    >
                      <span className="w-2 h-2 rounded-full bg-brand-cyan shrink-0 mt-2" />
                      <span className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
                        {hl}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Technologies Grid */}
                <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center gap-3">
                  <span className="text-xs text-slate-400 font-bold uppercase tracking-wider mr-2">
                    Technologies Utilized:
                  </span>
                  {study.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono px-3 py-1 rounded-lg bg-white/10 text-brand-cyan"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <CTABanner />
    </>
  );
};
