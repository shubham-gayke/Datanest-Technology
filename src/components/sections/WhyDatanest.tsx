import React from 'react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';
import {
  ShieldCheck,
  Cpu,
  Zap,
  Globe2,
  CheckCircle,
  TrendingUp,
  Layers,
} from 'lucide-react';

const pillars = [
  {
    kicker: 'Engineering Discipline',
    title: 'Zero-Defect Architectural Rigor',
    description:
      'We do not deliver brittle hacks or unmaintainable prototypes. Every line of code and infrastructure blueprint conforms to strict TOGAF standards, automated mutation testing, and resilient self-healing failover pipelines.',
    stats: [
      { value: '99.999%', label: 'Uptime SLA Delivered' },
      { value: '85%+', label: 'Mandatory Test Coverage' },
    ],
    features: [
      'Automated canary releases with instant rollback triggers',
      'Continuous compliance scanners integrated into GitOps pipelines',
      'Domain-Driven Design (DDD) decoupling monolithic dependencies',
    ],
    icon: <ShieldCheck className="w-6 h-6 text-brand-blue" />,
    gradient: 'from-blue-600 to-indigo-600',
  },
  {
    kicker: 'Cognitive Sovereignty',
    title: 'Enterprise AI with 100% Data Sovereignty',
    description:
      'Deploy cutting-edge Generative AI and autonomous agent swarms without risking confidential intellectual property. Our private LLM inference clusters ensure zero telemetry or customer data leaks to public commercial vendors.',
    stats: [
      { value: '100%', label: 'Data Residency Guarantee' },
      { value: '<120ms', label: 'Average Vector Inference' },
    ],
    features: [
      'Private VPC and on-premise NVIDIA GPU acceleration',
      'Multi-stage semantic guardrails preventing hallucination',
      'Deterministic human-in-the-loop transaction authorizations',
    ],
    icon: <Cpu className="w-6 h-6 text-brand-cyan" />,
    gradient: 'from-cyan-500 to-blue-600',
  },
  {
    kicker: 'Accelerated Delivery',
    title: 'Pre-Built Industry Cloud Landing Zones',
    description:
      'Why reinvent the wheel? We bring mature, battle-tested architectural accelerators for banking, healthcare, and retail that shrink typical 12-month enterprise transformation timelines down to under 90 days.',
    stats: [
      { value: '4x', label: 'Faster Time to Production' },
      { value: '42%', label: 'TCO Reduction' },
    ],
    features: [
      'Terraform & OpenTofu modular landing zone repositories',
      'Pre-configured FHIR, Open Banking, and EDI integration fabrics',
      'Turnkey automated FinOps unit economics dashboards',
    ],
    icon: <Zap className="w-6 h-6 text-brand-violet" />,
    gradient: 'from-purple-600 to-brand-blue',
  },
];

export const WhyDatanest: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 dark:bg-brand-midnight/90 transition-colors relative overflow-hidden">
      <Container>
        <SectionHeading
          badge="Why Datanest"
          badgeVariant="violet"
          title="The Technology Partner for"
          highlight="Mission-Critical Scale"
          description="We combine the strategic consulting pedigree of top global firms with the rapid agility and deep technical craftsmanship of modern software innovators."
        />

        <div className="space-y-16 lg:space-y-24">
          {pillars.map((pillar, index) => {
            const isReversed = index % 2 === 1;

            return (
              <div
                key={pillar.title}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center ${
                  isReversed ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Text Content */}
                <div
                  className={`lg:col-span-6 space-y-6 ${
                    isReversed ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <Reveal animation="fade-up">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200/70 dark:bg-white/10 text-slate-700 dark:text-slate-300 text-xs font-bold uppercase tracking-wider">
                      {pillar.icon}
                      <span>{pillar.kicker}</span>
                    </div>

                    <h3 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-brand-navy dark:text-white leading-tight mt-3">
                      {pillar.title}
                    </h3>

                    <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed mt-4">
                      {pillar.description}
                    </p>

                    {/* Features List */}
                    <div className="space-y-2.5 pt-4">
                      {pillar.features.map((feat) => (
                        <div key={feat} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-200">
                          <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Quantified Metrics Box */}
                    <div className="grid grid-cols-2 gap-4 pt-6 mt-6 border-t border-slate-200 dark:border-white/10">
                      {pillar.stats.map((s) => (
                        <div key={s.label}>
                          <div className="font-heading font-black text-2xl sm:text-3xl text-brand-blue dark:text-brand-cyan">
                            {s.value}
                          </div>
                          <div className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5">
                            {s.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </Reveal>
                </div>

                {/* Abstract Interactive Architectural Illustration Card */}
                <div
                  className={`lg:col-span-6 ${
                    isReversed ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <Reveal animation={isReversed ? 'slide-left' : 'slide-right'}>
                    <div className="relative rounded-3xl bg-white dark:bg-brand-card border border-slate-200 dark:border-white/10 p-8 sm:p-10 shadow-xl overflow-hidden group">
                      {/* Gradient glow */}
                      <div
                        className={`absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br ${pillar.gradient} opacity-20 rounded-full blur-2xl group-hover:opacity-30 transition-opacity`}
                      />

                      {/* Mock System Diagram Card */}
                      <div className="space-y-4 relative z-10">
                        <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-white/5">
                          <div className="flex items-center gap-2">
                            <span className="w-3 h-3 rounded-full bg-red-400" />
                            <span className="w-3 h-3 rounded-full bg-amber-400" />
                            <span className="w-3 h-3 rounded-full bg-emerald-400" />
                            <span className="text-xs font-mono text-slate-400 ml-2">system-topology.json</span>
                          </div>
                          <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-950 text-brand-blue dark:text-brand-cyan">
                            Live Sync
                          </span>
                        </div>

                        {/* Visual architecture blocks */}
                        <div className="grid grid-cols-3 gap-3 pt-2">
                          <div className="p-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5 text-center">
                            <Layers className="w-5 h-5 mx-auto text-brand-blue mb-1" />
                            <div className="text-[10px] font-bold text-slate-700 dark:text-white">Compute</div>
                            <div className="text-[9px] text-emerald-500 font-mono">Autoscale: OK</div>
                          </div>
                          <div className="p-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5 text-center">
                            <ShieldCheck className="w-5 h-5 mx-auto text-brand-cyan mb-1" />
                            <div className="text-[10px] font-bold text-slate-700 dark:text-white">Security</div>
                            <div className="text-[9px] text-emerald-500 font-mono">Zero Trust: ON</div>
                          </div>
                          <div className="p-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5 text-center">
                            <TrendingUp className="w-5 h-5 mx-auto text-brand-violet mb-1" />
                            <div className="text-[10px] font-bold text-slate-700 dark:text-white">Latency</div>
                            <div className="text-[9px] text-emerald-500 font-mono">&lt; 14ms Global</div>
                          </div>
                        </div>

                        <div className="p-4 rounded-xl bg-slate-900 text-white font-mono text-xs space-y-1.5 shadow-inner">
                          <div className="text-emerald-400">$ datanest health-check --cluster=prod-global</div>
                          <div className="text-slate-400">&gt; Verifying 40+ multi-region nodes... [PASS]</div>
                          <div className="text-slate-400">&gt; Encrypted data mesh state: In Sync (0ms lag)</div>
                          <div className="text-cyan-400">&gt; SOC-2 security perimeter: 100% nominal</div>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
