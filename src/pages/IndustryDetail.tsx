import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { CTABanner } from '@/components/sections/CTABanner';
import { industriesData } from '@/data/industries';
import {
  ChevronRight,
  ArrowRight,
  AlertTriangle,
  CheckCircle2,
  Landmark,
  Activity,
  ShoppingBag,
  Cog,
  Radio,
  Truck,
  Sparkles,
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Landmark: <Landmark className="w-8 h-8" />,
  Activity: <Activity className="w-8 h-8" />,
  ShoppingBag: <ShoppingBag className="w-8 h-8" />,
  Cog: <Cog className="w-8 h-8" />,
  Radio: <Radio className="w-8 h-8" />,
  Truck: <Truck className="w-8 h-8" />,
};

export const IndustryDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const industry = industriesData.find((i) => i.slug === slug);

  if (!industry) {
    return <Navigate to="/industries" replace />;
  }

  const Icon = iconMap[industry.icon] || <Landmark className="w-8 h-8" />;

  return (
    <>
      <Helmet>
        <title>{`${industry.title} | Datanest Technology`}</title>
        <meta name="description" content={industry.overview} />
      </Helmet>

      {/* Hero */}
      <section className="pt-32 pb-20 bg-brand-midnight text-white relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient-hero pointer-events-none" />
        <Container>
          <nav className="flex items-center gap-2 text-xs text-slate-400 mb-6" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link to="/industries" className="hover:text-white transition-colors">
              Industries
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-brand-cyan font-semibold truncate">{industry.title}</span>
          </nav>

          <div className="max-w-4xl space-y-6">
            <div className="w-16 h-16 rounded-2xl bg-blue-500/20 border border-blue-500/30 text-brand-cyan flex items-center justify-center">
              {Icon}
            </div>

            <h1 className="text-3xl sm:text-5xl font-heading font-extrabold tracking-tight leading-tight">
              {industry.title}
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 font-medium leading-relaxed">
              {industry.tagline}
            </p>

            <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-3xl">
              {industry.overview}
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <Link to="/contact">
                <Button variant="glow" size="md" icon={<ArrowRight className="w-4 h-4" />}>
                  Consult Sector Practice Director
                </Button>
              </Link>
              <Link to="/case-studies">
                <Button variant="outline" size="md" className="border-white/20 text-white hover:bg-white/10">
                  Sector Case Studies
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Impact Metric Strip */}
      <section className="py-12 bg-white dark:bg-brand-card/50 border-y border-slate-200 dark:border-white/5 transition-colors">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {industry.metrics.map((metric, idx) => (
              <Reveal key={metric.label} animation="fade-up" delay={idx * 0.1}>
                <div className="text-center md:text-left p-4 rounded-xl">
                  <div className="font-heading font-black text-3xl sm:text-4xl text-brand-blue dark:text-brand-cyan">
                    {metric.stat}
                  </div>
                  <div className="font-heading font-bold text-sm text-brand-navy dark:text-white mt-1">
                    {metric.label}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Sector Challenges vs Solutions Matrix */}
      <section className="py-24 bg-slate-50 dark:bg-brand-midnight transition-colors border-b border-slate-200 dark:border-white/5">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Sector Challenges */}
            <div className="lg:col-span-5 space-y-6">
              <Reveal animation="slide-left">
                <span className="text-xs uppercase font-bold tracking-wider text-red-500 flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4" />
                  <span>Sector Friction & Hurdles</span>
                </span>
                <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-brand-navy dark:text-white leading-tight">
                  What Enterprises in {industry.title} Face Today
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                  Navigating modernization in this vertical demands overcoming strict systemic bottlenecks:
                </p>

                <div className="space-y-3 pt-2">
                  {industry.challenges.map((c) => (
                    <div
                      key={c}
                      className="p-4 rounded-xl bg-white dark:bg-brand-card/80 border border-red-200/60 dark:border-red-900/40 text-xs sm:text-sm text-slate-700 dark:text-slate-200 shadow-sm flex items-start gap-3"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0 mt-2" />
                      <span>{c}</span>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* Right: Engineered Solutions */}
            <div className="lg:col-span-7 space-y-6">
              <Reveal animation="slide-right">
                <span className="text-xs uppercase font-bold tracking-wider text-brand-blue dark:text-brand-cyan flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4" />
                  <span>Datanest Architectural Solutions</span>
                </span>
                <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-brand-navy dark:text-white leading-tight">
                  Targeted Capabilities Built for Scale
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  {industry.keySolutions.map((sol) => (
                    <Card key={sol.title} hoverEffect className="p-5">
                      <div className="flex items-center gap-2 mb-2 text-brand-blue dark:text-brand-cyan">
                        <CheckCircle2 className="w-4 h-4 shrink-0" />
                        <h4 className="font-heading font-bold text-sm text-slate-900 dark:text-white">
                          {sol.title}
                        </h4>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                        {sol.description}
                      </p>
                    </Card>
                  ))}
                </div>

                {/* Client Highlight Card */}
                <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-purple-500/10 border border-brand-blue/30 mt-6">
                  <div className="text-xs font-bold text-brand-blue dark:text-brand-cyan uppercase tracking-wider">
                    Client Case Study Spotlight &bull; {industry.clientHighlight.client}
                  </div>
                  <p className="text-sm font-medium text-slate-800 dark:text-slate-100 mt-2 italic">
                    "{industry.clientHighlight.result}"
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      <CTABanner />
    </>
  );
};
