import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Reveal } from '@/components/ui/Reveal';
import { GlobalPresenceMap } from '@/components/sections/GlobalPresenceMap';
import { CTABanner } from '@/components/sections/CTABanner';
import { teamData } from '@/data/team';
import {
  Award,
  ShieldCheck,
  CheckCircle2,
  Compass,
  Target,
  HeartHandshake,
  Linkedin,
  Sparkles,
} from 'lucide-react';

const milestones = [
  {
    year: '2011',
    title: 'Founding & Distributed Systems Lab',
    desc: 'Founded in New York by senior systems architects focused on high-throughput distributed database engineering.',
  },
  {
    year: '2015',
    title: 'EMEA Expansion & Cloud Practice',
    desc: 'Inaugurated European headquarters in London and Frankfurt, launching dedicated AWS and Azure cloud migration factories.',
  },
  {
    year: '2019',
    title: 'Global Delivery Scale & SOC 2 Certification',
    desc: 'Opened our 2,000-seat engineering innovation center in Bangalore and secured ISO 27001 and SOC 2 Type II certifications.',
  },
  {
    year: '2022',
    title: 'Cognitive Computing & AI Labs',
    desc: 'Established the Datanest AI Research Lab in San Francisco, pioneering sovereign generative models and RAG architectures.',
  },
  {
    year: '2024',
    title: 'APAC Leadership & Tokyo Delivery Hub',
    desc: 'Expanded into APAC with regional centers in Singapore, Tokyo, and Sydney, serving top financial institutions and manufacturers.',
  },
  {
    year: '2026',
    title: 'Engineering Intelligent Digital Futures',
    desc: 'Over 5,000 specialists worldwide delivering mission-critical cloud, AI, and cybersecurity for Global 2000 enterprises.',
  },
];

const values = [
  {
    icon: <ShieldCheck className="w-6 h-6 text-brand-blue" />,
    title: 'Zero-Defect Rigor',
    desc: 'We treat enterprise architectures with mathematical precision. Every blueprint is engineered for 99.999% SLA reliability.',
  },
  {
    icon: <Target className="w-6 h-6 text-brand-cyan" />,
    title: 'Client-Centric Value',
    desc: 'We anchor technology investments directly to verifiable commercial ROI, whether that is cutting TCO by 40% or unlocking sub-second execution.',
  },
  {
    icon: <Sparkles className="w-6 h-6 text-brand-violet" />,
    title: 'Ethical & Sovereign Innovation',
    desc: 'We uphold absolute data sovereignty. Our private AI implementations safeguard enterprise IP without external telemetry exposure.',
  },
  {
    icon: <HeartHandshake className="w-6 h-6 text-emerald-500" />,
    title: 'Radical Transparency',
    desc: 'We operate with candid communication, predictable pricing, and zero vendor lock-in. 100% of IP is owned by our clients.',
  },
];

const certifications = [
  { name: 'ISO/IEC 27001:2022', category: 'Information Security Management' },
  { name: 'SOC 2 Type II Certified', category: 'Security, Availability & Confidentiality' },
  { name: 'AWS Premier Tier Partner', category: 'Cloud Infrastructure & Migration' },
  { name: 'Microsoft Solutions Partner', category: 'Enterprise Cloud & Data AI' },
  { name: 'Google Cloud Premier Partner', category: 'Hyperscale Cloud & Big Data' },
  { name: 'HIPAA & HITRUST Aligned', category: 'Healthcare Data Privacy & Security' },
];

export const About: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Datanest Technology</title>
        <meta
          name="description"
          content="Learn about Datanest Technology: our story, executive leadership, core values, global presence, and enterprise certifications."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-brand-midnight text-white relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient-hero pointer-events-none" />
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <span className="inline-block px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-brand-cyan text-xs font-bold uppercase tracking-wider">
              About Datanest Technology
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight leading-tight">
              Engineering Trust, Scale &{' '}
              <span className="text-gradient bg-gradient-to-r from-brand-blue via-brand-cyan to-brand-violet">
                Intelligent Futures
              </span>
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              We are a premier global IT services and consulting enterprise partnering with Global 2000 companies to architect resilient cloud foundations, private AI platforms, and impenetrable cyber defenses.
            </p>
          </div>
        </Container>
      </section>

      {/* Corporate Story & Vision */}
      <section className="py-24 bg-white dark:bg-brand-midnight transition-colors border-b border-slate-200 dark:border-white/5">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <Reveal animation="fade-up">
                <span className="text-xs uppercase font-bold tracking-widest text-brand-blue dark:text-brand-cyan">
                  Our Founding Vision
                </span>
                <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-brand-navy dark:text-white leading-tight">
                  Born from the Conviction That Enterprise IT Deserves Mathematical Rigor
                </h2>
                <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                  Founded in 2011, Datanest Technology arose from a simple realization: enterprise digital transformations were frequently failing because traditional consultancies treated software engineering as an outsourced commodity rather than a core strategic discipline.
                </p>
                <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                  We built Datanest on an uncompromising standard: pair top-tier management consulting pedigree with world-class software craft. Today, our 5,000+ certified specialists across North America, Europe, and Asia-Pacific build the mission-critical backbones that power global finance, healthcare, and industrial supply chains.
                </p>

                <div className="grid grid-cols-2 gap-6 pt-4 border-t border-slate-200 dark:border-white/10">
                  <div>
                    <div className="font-heading font-black text-3xl text-brand-blue dark:text-brand-cyan">15+</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 font-semibold mt-1">Years of Excellence</div>
                  </div>
                  <div>
                    <div className="font-heading font-black text-3xl text-brand-blue dark:text-brand-cyan">99.4%</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 font-semibold mt-1">Client Retention</div>
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-6">
              <Reveal animation="slide-left">
                <div className="relative rounded-3xl bg-slate-50 dark:bg-brand-card/60 border border-slate-200 dark:border-white/10 p-8 sm:p-10 shadow-lg">
                  <h3 className="font-heading font-bold text-xl text-brand-navy dark:text-white mb-6 flex items-center gap-2">
                    <Compass className="w-5 h-5 text-brand-blue dark:text-brand-cyan" />
                    <span>Our Strategic Compass</span>
                  </h3>

                  <div className="space-y-6">
                    <div className="p-4 rounded-2xl bg-white dark:bg-brand-midnight border border-slate-200/60 dark:border-white/5">
                      <div className="text-xs font-bold text-brand-blue dark:text-brand-cyan uppercase tracking-wider">Our Mission</div>
                      <p className="text-sm text-slate-700 dark:text-slate-200 mt-1.5 font-medium leading-relaxed">
                        To architect, scale, and secure the foundational digital systems that empower global enterprises to thrive in an autonomous, AI-driven future.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-white dark:bg-brand-midnight border border-slate-200/60 dark:border-white/5">
                      <div className="text-xs font-bold text-brand-violet uppercase tracking-wider">Our Vision</div>
                      <p className="text-sm text-slate-700 dark:text-slate-200 mt-1.5 font-medium leading-relaxed">
                        To be the world’s most trusted engineering and technology consulting authority for mission-critical enterprise platforms.
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-slate-50 dark:bg-brand-midnight/90 transition-colors border-b border-slate-200 dark:border-white/5">
        <Container>
          <SectionHeading
            badge="Corporate Values"
            badgeVariant="violet"
            title="The Principles That Drive Our"
            highlight="Engineering Culture"
            description="Our values guide every technical architecture decision, client engagement, and software sprint."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {values.map((val, idx) => (
              <Reveal key={val.title} animation="fade-up" delay={idx * 0.1}>
                <Card hoverEffect className="h-full p-6 sm:p-8">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-white/5 flex items-center justify-center mb-5">
                    {val.icon}
                  </div>
                  <h3 className="font-heading font-bold text-lg text-brand-navy dark:text-white">
                    {val.title}
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {val.desc}
                  </p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Animated Timeline of Milestones */}
      <section id="milestones" className="py-24 bg-white dark:bg-brand-midnight transition-colors border-b border-slate-200 dark:border-white/5">
        <Container>
          <SectionHeading
            badge="Milestones"
            badgeVariant="blue"
            title="A Decade and a Half of"
            highlight="Pioneering Growth"
            description="From a specialized distributed systems boutique to a multi-national IT consulting powerhouse."
          />

          <div className="relative max-w-4xl mx-auto">
            {/* Center Timeline Line */}
            <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-blue via-brand-cyan to-brand-violet -translate-x-1/2" />

            <div className="space-y-12">
              {milestones.map((item, idx) => {
                const isEven = idx % 2 === 0;

                return (
                  <Reveal key={item.year} animation="fade-up" delay={idx * 0.08}>
                    <div
                      className={`relative flex flex-col sm:flex-row items-start ${
                        isEven ? 'sm:flex-row-reverse' : ''
                      } gap-8`}
                    >
                      {/* Timeline Year Node */}
                      <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-brand-midnight border-4 border-brand-cyan flex items-center justify-center z-10 shadow-glow-cyan" />

                      {/* Content Card */}
                      <div className="ml-12 sm:ml-0 sm:w-1/2 sm:px-8">
                        <div className="p-6 rounded-2xl bg-slate-50 dark:bg-brand-card/60 border border-slate-200 dark:border-white/10 shadow-sm hover:border-brand-blue/30 transition-colors">
                          <span className="font-heading font-black text-2xl text-brand-blue dark:text-brand-cyan">
                            {item.year}
                          </span>
                          <h4 className="font-heading font-bold text-base text-brand-navy dark:text-white mt-1">
                            {item.title}
                          </h4>
                          <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* Leadership Team */}
      <section id="leadership" className="py-24 bg-slate-50 dark:bg-brand-midnight/90 transition-colors border-b border-slate-200 dark:border-white/5">
        <Container>
          <SectionHeading
            badge="Executive Leadership"
            badgeVariant="cyan"
            title="Guided by Industry"
            highlight="Visionaries & Pioneers"
            description="Our executive committee brings decades of proven hyperscale engineering and technology consulting leadership."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamData.map((member, idx) => (
              <Reveal key={member.name} animation="fade-up" delay={idx * 0.08}>
                <Card hoverEffect className="h-full flex flex-col justify-between p-6 sm:p-8 group">
                  <div>
                    {/* Avatar Initials Placeholder with Gradient Glow */}
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-brand-blue via-indigo-600 to-brand-violet flex items-center justify-center text-white font-heading font-extrabold text-2xl shadow-md group-hover:scale-105 transition-transform mb-5">
                      {member.name.split(' ').map((n) => n[0]).join('')}
                    </div>

                    <h3 className="font-heading font-bold text-xl text-brand-navy dark:text-white">
                      {member.name}
                    </h3>
                    <p className="text-xs font-semibold text-brand-blue dark:text-brand-cyan mt-1">
                      {member.role}
                    </p>
                    <p className="text-[11px] text-slate-400 mt-0.5">
                      {member.department} &bull; {member.location}
                    </p>

                    <p className="mt-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {member.bio}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/5">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-brand-blue dark:hover:text-brand-cyan transition-colors"
                    >
                      <Linkedin className="w-4 h-4 text-brand-blue" />
                      <span>Connect on LinkedIn</span>
                    </a>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Global Footprint Map */}
      <GlobalPresenceMap />

      {/* Awards & Certifications */}
      <section id="awards" className="py-20 bg-slate-50 dark:bg-brand-midnight/90 transition-colors border-t border-slate-200 dark:border-white/5">
        <Container>
          <SectionHeading
            badge="Accreditations & Compliance"
            badgeVariant="emerald"
            title="Enterprise Certifications &"
            highlight="Strategic Partnerships"
            description="We operate under rigorous global compliance frameworks, ensuring verified security, governance, and technical excellence."
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {certifications.map((cert, idx) => (
              <Reveal key={cert.name} animation="fade-up" delay={idx * 0.05}>
                <div className="p-4 rounded-2xl bg-white dark:bg-brand-card/60 border border-slate-200 dark:border-white/10 text-center h-full flex flex-col justify-center items-center hover:border-brand-blue/30 transition-all">
                  <Award className="w-6 h-6 text-brand-blue dark:text-brand-cyan mb-2" />
                  <div className="font-heading font-bold text-xs text-brand-navy dark:text-white">
                    {cert.name}
                  </div>
                  <div className="text-[10px] text-slate-400 mt-1">
                    {cert.category}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Consultation Banner */}
      <CTABanner />
    </>
  );
};

