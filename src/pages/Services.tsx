import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Reveal } from '@/components/ui/Reveal';
import { Accordion } from '@/components/ui/Accordion';
import { CTABanner } from '@/components/sections/CTABanner';
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
  Search,
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

const generalFaqs = [
  {
    id: 'f1',
    question: 'How does Datanest structure consulting and delivery contracts?',
    answer:
      'We offer agile milestone-based fixed scope agreements, time and materials for specialized staff augmentation, and SLA-guaranteed managed services retainers with transparent unit economics.',
  },
  {
    id: 'f2',
    question: 'Who owns the intellectual property and code created during the engagement?',
    answer:
      '100% of all intellectual property, source code, data pipelines, and infrastructure-as-code blueprints are the sole property of our clients upon milestone completion.',
  },
  {
    id: 'f3',
    question: 'Can Datanest work within our existing compliance and security policies?',
    answer:
      'Yes. Our engineers and architects are well-versed in ISO 27001, SOC 2 Type II, HIPAA, PCI-DSS, and NIST frameworks. We integrate seamlessly into your enterprise change management workflows.',
  },
  {
    id: 'f4',
    question: 'What is the average timeline to launch a new enterprise initiative?',
    answer:
      'Using our pre-built industry landing zones and accelerators, discovery to production pilot typically takes between 4 to 8 weeks, compared to 6-12 months with legacy consultancies.',
  },
];

export const Services: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredServices = servicesData.filter(
    (s) =>
      s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.technologies.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <>
      <Helmet>
        <title>Enterprise IT Services & Capabilities | Datanest Technology</title>
        <meta
          name="description"
          content="Explore Datanest's full suite of enterprise services: Cloud Computing, Generative AI, Data Analytics, Cybersecurity, DevOps, Application Development, ERP, and IT Consulting."
        />
      </Helmet>

      {/* Hero */}
      <section className="pt-32 pb-20 bg-brand-midnight text-white relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient-hero pointer-events-none" />
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <span className="inline-block px-3 py-1 rounded-full bg-blue-950/80 border border-blue-500/40 text-brand-cyan text-xs font-bold uppercase tracking-wider">
              Enterprise Services Portfolio
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight leading-tight">
              Architecting Resilient,{' '}
              <span className="text-gradient bg-gradient-to-r from-brand-blue via-brand-cyan to-brand-violet">
                Intelligent Platforms
              </span>
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              We empower Global 2000 leaders with transformative cloud engineering, sovereign generative AI swarms, zero-defect devops pipelines, and military-grade cyber defenses.
            </p>

            {/* Quick Search */}
            <div className="pt-4 max-w-md mx-auto">
              <div className="relative flex items-center">
                <Search className="absolute left-3.5 w-4 h-4 text-slate-400 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by technology (e.g. AWS, AI, Kubernetes, SAP)..."
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/10 border border-white/20 text-xs sm:text-sm text-white placeholder:text-slate-400 focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan backdrop-blur-md transition-all"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white dark:bg-brand-midnight transition-colors border-b border-slate-200 dark:border-white/5">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredServices.map((service, idx) => {
              const Icon = iconMap[service.icon] || <Cloud className="w-6 h-6" />;

              return (
                <Reveal key={service.slug} animation="fade-up" delay={idx * 0.08}>
                  <Card hoverEffect className="h-full flex flex-col justify-between p-6 sm:p-8">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/80 text-brand-blue dark:text-brand-cyan flex items-center justify-center">
                          {Icon}
                        </div>
                        {service.badge && (
                          <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-slate-300">
                            {service.badge}
                          </span>
                        )}
                      </div>

                      <h3 className="font-heading font-bold text-xl sm:text-2xl text-brand-navy dark:text-white">
                        {service.title}
                      </h3>
                      <p className="text-xs font-semibold text-brand-blue dark:text-brand-cyan mt-1">
                        {service.tagline}
                      </p>

                      <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        {service.shortDescription}
                      </p>

                      {/* Offerings Highlights */}
                      <div className="mt-5 space-y-2 pt-4 border-t border-slate-100 dark:border-white/5">
                        <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                          Core Architectural Solutions
                        </div>
                        {service.keyOfferings.slice(0, 3).map((offering) => (
                          <div key={offering.title} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-brand-blue dark:text-brand-cyan shrink-0 mt-0.5" />
                            <span className="font-semibold text-slate-800 dark:text-white">{offering.title}</span>
                          </div>
                        ))}
                      </div>

                      {/* Technology Badges */}
                      <div className="mt-5 flex flex-wrap gap-1.5">
                        {service.technologies.slice(0, 5).map((tech) => (
                          <span
                            key={tech}
                            className="text-[11px] px-2 py-0.5 rounded-md bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 font-mono"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-8 pt-4 border-t border-slate-100 dark:border-white/5">
                      <Link
                        to={`/services/${service.slug}`}
                        className="inline-flex items-center gap-2 text-xs font-bold text-brand-blue dark:text-brand-cyan hover:gap-3 transition-all"
                      >
                        <span>View Detailed Architecture & Blueprints</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </Card>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 4-Step Delivery Methodology */}
      <section className="py-24 bg-slate-50 dark:bg-brand-midnight/90 transition-colors border-b border-slate-200 dark:border-white/5">
        <Container>
          <SectionHeading
            badge="Engineering Lifecycle"
            badgeVariant="cyan"
            title="Our 4-Phase Enterprise"
            highlight="Delivery Blueprint"
            description="A predictable, battle-tested framework engineered to eliminate implementation risk and guarantee on-schedule milestones."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Reveal animation="fade-up" delay={0.1}>
              <div className="p-6 rounded-2xl bg-white dark:bg-brand-card/60 border border-slate-200 dark:border-white/10 h-full">
                <span className="font-heading font-black text-3xl text-brand-blue dark:text-brand-cyan">01</span>
                <h4 className="font-heading font-bold text-lg text-brand-navy dark:text-white mt-2">Discovery & Audit</h4>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Deep assessment of legacy code, security perimeter, data dependencies, and commercial ROI metrics.
                </p>
              </div>
            </Reveal>
            <Reveal animation="fade-up" delay={0.2}>
              <div className="p-6 rounded-2xl bg-white dark:bg-brand-card/60 border border-slate-200 dark:border-white/10 h-full">
                <span className="font-heading font-black text-3xl text-brand-cyan">02</span>
                <h4 className="font-heading font-bold text-lg text-brand-navy dark:text-white mt-2">Target Architecture</h4>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Designing resilient TOGAF-aligned landing zones, cloud-native microservices, and Zero Trust security boundaries.
                </p>
              </div>
            </Reveal>
            <Reveal animation="fade-up" delay={0.3}>
              <div className="p-6 rounded-2xl bg-white dark:bg-brand-card/60 border border-slate-200 dark:border-white/10 h-full">
                <span className="font-heading font-black text-3xl text-brand-violet">03</span>
                <h4 className="font-heading font-bold text-lg text-brand-navy dark:text-white mt-2">Staged Migration</h4>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Execution via incremental strangler-fig pipelines, automated testing, and blue-green zero-downtime cutovers.
                </p>
              </div>
            </Reveal>
            <Reveal animation="fade-up" delay={0.4}>
              <div className="p-6 rounded-2xl bg-white dark:bg-brand-card/60 border border-slate-200 dark:border-white/10 h-full">
                <span className="font-heading font-black text-3xl text-emerald-500">04</span>
                <h4 className="font-heading font-bold text-lg text-brand-navy dark:text-white mt-2">Autonomous Operations</h4>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Continuous AI-driven FinOps cost optimization, 24/7 site reliability engineering, and SLA surveillance.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Services FAQ */}
      <section className="py-24 bg-white dark:bg-brand-midnight transition-colors border-b border-slate-200 dark:border-white/5">
        <Container size="md">
          <SectionHeading
            badge="Frequently Asked Questions"
            badgeVariant="blue"
            title="Enterprise Engagement"
            highlight="Clarified"
            description="Common questions about our consulting process, intellectual property rights, and SLA commitments."
          />

          <Accordion items={generalFaqs} />
        </Container>
      </section>

      {/* Consultation Banner */}
      <CTABanner />
    </>
  );
};
