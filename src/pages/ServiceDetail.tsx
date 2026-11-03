import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { Accordion } from '@/components/ui/Accordion';
import { CTABanner } from '@/components/sections/CTABanner';
import { servicesData } from '@/data/services';
import {
  ChevronRight,
  ArrowRight,
  CheckCircle2,
  Cpu,
  Cloud,
  BarChart3,
  ShieldCheck,
  Code2,
  Terminal,
  Layers,
  Briefcase,
  Layers as ProcessIcon,
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Cloud: <Cloud className="w-8 h-8" />,
  Cpu: <Cpu className="w-8 h-8" />,
  BarChart3: <BarChart3 className="w-8 h-8" />,
  ShieldCheck: <ShieldCheck className="w-8 h-8" />,
  Code2: <Code2 className="w-8 h-8" />,
  Terminal: <Terminal className="w-8 h-8" />,
  Layers: <Layers className="w-8 h-8" />,
  Briefcase: <Briefcase className="w-8 h-8" />,
};

export const ServiceDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const Icon = iconMap[service.icon] || <Cloud className="w-8 h-8" />;
  const formattedFaqs = service.faqs.map((f, i) => ({
    id: `faq-${i}`,
    question: f.question,
    answer: f.answer,
  }));

  return (
    <>
      <Helmet>
        <title>{`${service.title} | Datanest Technology`}</title>
        <meta name="description" content={service.shortDescription} />
      </Helmet>

      {/* Hero with Breadcrumbs */}
      <section className="pt-32 pb-20 bg-brand-midnight text-white relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient-hero pointer-events-none" />
        <Container>
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs text-slate-400 mb-6" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link to="/services" className="hover:text-white transition-colors">
              Services
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-brand-cyan font-semibold truncate">{service.title}</span>
          </nav>

          <div className="max-w-4xl space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-2xl bg-blue-500/20 border border-blue-500/30 text-brand-cyan flex items-center justify-center">
                {Icon}
              </div>
              {service.badge && (
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-brand-cyan">
                  {service.badge}
                </span>
              )}
            </div>

            <h1 className="text-3xl sm:text-5xl font-heading font-extrabold tracking-tight leading-tight">
              {service.title}
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 font-medium leading-relaxed">
              {service.tagline}
            </p>

            <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-3xl">
              {service.overview}
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <Link to="/contact">
                <Button variant="glow" size="md" icon={<ArrowRight className="w-4 h-4" />}>
                  Schedule Architectural Review
                </Button>
              </Link>
              <Link to="/case-studies">
                <Button variant="outline" size="md" className="border-white/20 text-white hover:bg-white/10">
                  Related Case Studies
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Quantified Benefits Metric Bar */}
      <section className="py-12 bg-white dark:bg-brand-card/50 border-y border-slate-200 dark:border-white/5 transition-colors">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {service.benefits.map((benefit, idx) => (
              <Reveal key={benefit.label} animation="fade-up" delay={idx * 0.1}>
                <div className="text-center md:text-left p-4 rounded-xl">
                  <div className="font-heading font-black text-3xl sm:text-4xl text-brand-blue dark:text-brand-cyan">
                    {benefit.metric}
                  </div>
                  <div className="font-heading font-bold text-sm text-brand-navy dark:text-white mt-1">
                    {benefit.label}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    {benefit.description}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Key Architectural Offerings */}
      <section className="py-24 bg-slate-50 dark:bg-brand-midnight transition-colors border-b border-slate-200 dark:border-white/5">
        <Container>
          <SectionHeading
            badge="Solutions Blueprint"
            badgeVariant="blue"
            title="Comprehensive Offerings in"
            highlight={service.title}
            description="Our specialized engineering practices deliver end-to-end solutions tailored to your operational ecosystem."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.keyOfferings.map((offering, idx) => (
              <Reveal key={offering.title} animation="fade-up" delay={idx * 0.08}>
                <Card hoverEffect className="h-full p-6 sm:p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/80 text-brand-blue dark:text-brand-cyan flex items-center justify-center shrink-0 mt-1">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-lg text-brand-navy dark:text-white">
                        {offering.title}
                      </h3>
                      <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        {offering.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* 4-Step Process Lifecycle */}
      <section className="py-24 bg-white dark:bg-brand-midnight/90 transition-colors border-b border-slate-200 dark:border-white/5">
        <Container>
          <SectionHeading
            badge="Delivery Process"
            badgeVariant="cyan"
            title="Our Rigorous 4-Step"
            highlight="Execution Roadmap"
            description="How we take complex requirements from discovery through architecture to autonomous production operation."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.process.map((step, idx) => (
              <Reveal key={step.step} animation="fade-up" delay={idx * 0.1}>
                <div className="p-6 rounded-2xl bg-slate-50 dark:bg-brand-card/60 border border-slate-200 dark:border-white/10 h-full">
                  <span className="font-heading font-black text-3xl text-brand-blue dark:text-brand-cyan">
                    {step.step}
                  </span>
                  <h4 className="font-heading font-bold text-base text-brand-navy dark:text-white mt-2">
                    {step.title}
                  </h4>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Technologies Strip */}
      <section className="py-16 bg-slate-50 dark:bg-brand-midnight transition-colors border-b border-slate-200 dark:border-white/5">
        <Container>
          <div className="text-center mb-8">
            <span className="text-xs uppercase font-bold tracking-widest text-slate-400">
              Integrated Technologies & Tooling
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            {service.technologies.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-xl bg-white dark:bg-brand-card border border-slate-200 dark:border-white/10 text-xs sm:text-sm font-semibold text-brand-navy dark:text-white shadow-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </Container>
      </section>

      {/* Service-Specific FAQs */}
      <section className="py-24 bg-white dark:bg-brand-midnight transition-colors border-b border-slate-200 dark:border-white/5">
        <Container size="md">
          <SectionHeading
            badge="Technical FAQs"
            badgeVariant="violet"
            title="Frequently Asked"
            highlight="Questions"
            description={`Answers to common architecture and operational inquiries regarding our ${service.title} practice.`}
          />

          <Accordion items={formattedFaqs} />
        </Container>
      </section>

      {/* CTA */}
      <CTABanner />
    </>
  );
};
