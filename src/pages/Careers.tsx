import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Modal } from '@/components/ui/Modal';
import { FormField } from '@/components/ui/FormField';
import { Reveal } from '@/components/ui/Reveal';
import { careersData, culturePillars, type JobOpening } from '@/data/careers';
import { jobApplicationSchema, type JobApplicationData } from '@/lib/validations';
import confetti from 'canvas-confetti';
import {
  Briefcase,
  MapPin,
  Clock,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Globe,
  BookOpen,
  Users,
  CheckCircle2,
  Upload,
} from 'lucide-react';
import { cn } from '@/lib/utils';

const iconMap: Record<string, React.ReactNode> = {
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-brand-blue" />,
  Globe: <Globe className="w-6 h-6 text-brand-cyan" />,
  BookOpen: <BookOpen className="w-6 h-6 text-brand-violet" />,
  Users: <Users className="w-6 h-6 text-emerald-500" />,
};

const departments = ['All', 'Engineering', 'AI & Data', 'Cloud & DevOps', 'Cybersecurity', 'Consulting'];

export const Careers: React.FC = () => {
  const [selectedDept, setSelectedDept] = useState('All');
  const [selectedJob, setSelectedJob] = useState<JobOpening | null>(null);
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<JobApplicationData>({
    resolver: zodResolver(jobApplicationSchema),
  });

  const handleOpenApply = (job: JobOpening) => {
    setSelectedJob(job);
    setValue('role', job.title);
    setIsSuccess(false);
    setIsApplyModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsApplyModalOpen(false);
    setIsSuccess(false);
    reset();
  };

  const onSubmit = async (_data: JobApplicationData) => {
    setIsSubmitting(true);
    // Simulate ~1.5s network submission
    await new Promise((r) => setTimeout(r, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
    confetti({
      particleCount: 75,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#2563EB', '#06B6D4', '#7C3AED'],
    });
  };

  const filteredJobs =
    selectedDept === 'All'
      ? careersData
      : careersData.filter((j) => j.department === selectedDept);

  return (
    <>
      <Helmet>
        <title>Careers & Culture | Datanest Technology</title>
        <meta
          name="description"
          content="Join Datanest Technology. Explore open engineering, AI research, cloud architecture, and cybersecurity positions across our global hubs."
        />
      </Helmet>

      {/* Hero */}
      <section className="pt-32 pb-20 bg-brand-midnight text-white relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient-hero pointer-events-none" />
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <span className="inline-block px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-brand-cyan text-xs font-bold uppercase tracking-wider">
              Careers at Datanest
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight leading-tight">
              Build the Backbones of the{' '}
              <span className="text-gradient bg-gradient-to-r from-brand-blue via-brand-cyan to-brand-violet">
                Intelligent Economy
              </span>
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Work with the world's most talented cloud architects, AI researchers, and distributed systems engineers solving mission-critical problems for Global 2000 enterprises.
            </p>
          </div>
        </Container>
      </section>

      {/* Culture & Perks Section */}
      <section className="py-24 bg-white dark:bg-brand-midnight transition-colors border-b border-slate-200 dark:border-white/5">
        <Container>
          <SectionHeading
            badge="Life At Datanest"
            badgeVariant="violet"
            title="Where Craftsmanship Meets"
            highlight="Global Impact"
            description="We foster an engineering-first culture that prizes curiosity, intellectual rigor, psychological safety, and work-life harmony."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {culturePillars.map((pillar, idx) => (
              <Reveal key={pillar.title} animation="fade-up" delay={idx * 0.1}>
                <Card hoverEffect className="h-full p-6 sm:p-8">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-white/5 flex items-center justify-center mb-5">
                    {iconMap[pillar.icon]}
                  </div>
                  <h3 className="font-heading font-bold text-lg text-brand-navy dark:text-white">
                    {pillar.title}
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Open Positions List */}
      <section className="py-24 bg-slate-50 dark:bg-brand-midnight/90 transition-colors border-b border-slate-200 dark:border-white/5">
        <Container>
          <SectionHeading
            badge="Open Opportunities"
            badgeVariant="blue"
            title="Current Openings Across Our"
            highlight="Global Practices"
            description="Explore leadership and engineering roles across North America, EMEA, APAC, and remote work arrangements."
          />

          {/* Department Filter Tabs */}
          <div className="flex items-center justify-start lg:justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
            {departments.map((dept) => {
              const isSelected = selectedDept === dept;
              return (
                <button
                  key={dept}
                  type="button"
                  onClick={() => setSelectedDept(dept)}
                  className={cn(
                    'px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all border',
                    isSelected
                      ? 'bg-brand-blue text-white border-brand-blue shadow-sm'
                      : 'bg-white dark:bg-brand-card/60 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-white/10 hover:border-brand-blue/30'
                  )}
                >
                  {dept}
                </button>
              );
            })}
          </div>

          {/* Job Listings Grid */}
          <div className="space-y-4">
            {filteredJobs.map((job, idx) => (
              <Reveal key={job.id} animation="fade-up" delay={idx * 0.05}>
                <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-brand-card/70 border border-slate-200 dark:border-white/10 shadow-sm hover:border-brand-blue/40 transition-all flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 group">
                  <div className="space-y-2 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-blue-50 dark:bg-blue-950/80 text-brand-blue dark:text-brand-cyan">
                        {job.department}
                      </span>
                      <span className="text-xs font-semibold px-2 py-0.5 rounded bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-slate-300">
                        {job.experience}
                      </span>
                      <span className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold">
                        {job.type}
                      </span>
                    </div>

                    <h3 className="font-heading font-bold text-xl text-brand-navy dark:text-white group-hover:text-brand-blue dark:group-hover:text-brand-cyan transition-colors">
                      {job.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
                      {job.summary}
                    </p>

                    <div className="flex items-center gap-4 text-xs text-slate-400 pt-1">
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5" />
                        {job.location}
                      </span>
                    </div>
                  </div>

                  <div className="shrink-0 w-full sm:w-auto">
                    <Button
                      variant="primary"
                      size="md"
                      onClick={() => handleOpenApply(job)}
                      className="w-full sm:w-auto"
                      icon={<ArrowRight className="w-4 h-4" />}
                    >
                      Apply for Position
                    </Button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Apply Modal */}
      <Modal
        isOpen={isApplyModalOpen}
        onClose={handleCloseModal}
        title={isSuccess ? 'Application Received' : `Apply: ${selectedJob?.title || 'Open Position'}`}
        description={
          isSuccess
            ? 'Your application has been received by our global talent acquisition team.'
            : `${selectedJob?.department} &bull; ${selectedJob?.location}`
        }
      >
        {isSuccess ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/80 border border-emerald-500/40 text-emerald-500 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="font-heading font-bold text-xl text-brand-navy dark:text-white">
              Thank You for Applying!
            </h3>

            <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
              We have received your application for the{' '}
              <span className="font-bold text-brand-blue dark:text-brand-cyan">
                {selectedJob?.title}
              </span>{' '}
              role. Our technical recruiting committee will review your credentials and contact you within 48 hours.
            </p>

            <div className="pt-4">
              <Button variant="primary" size="md" onClick={handleCloseModal}>
                Done
              </Button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <input type="hidden" {...register('role')} />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormField
                label="Full Name"
                required
                placeholder="Jane Doe"
                error={errors.fullName?.message}
                {...register('fullName')}
              />

              <FormField
                label="Email Address"
                type="email"
                required
                placeholder="jane.doe@example.com"
                error={errors.email?.message}
                {...register('email')}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormField
                label="Phone Number"
                required
                placeholder="+1 (555) 000-0000"
                error={errors.phone?.message}
                {...register('phone')}
              />

              <FormField
                as="select"
                label="Years of Experience"
                required
                placeholder="Select Experience Level"
                options={[
                  { value: '3-5 years', label: '3-5 years (Mid-Level)' },
                  { value: '6-8 years', label: '6-8 years (Senior)' },
                  { value: '9-12 years', label: '9-12 years (Staff / Principal)' },
                  { value: '12+ years', label: '12+ years (Director / Executive)' },
                ]}
                error={errors.experience?.message}
                {...register('experience')}
              />
            </div>

            <FormField
              label="LinkedIn / GitHub / Portfolio URL"
              placeholder="https://linkedin.com/in/username"
              error={errors.portfolioUrl?.message}
              {...register('portfolioUrl')}
            />

            {/* Resume File Upload Simulation */}
            <div className="space-y-1.5">
              <label className="block text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200">
                Resume / CV Attachment
              </label>
              <div className="p-4 rounded-xl border border-dashed border-slate-300 dark:border-white/15 bg-slate-50/50 dark:bg-white/5 text-center flex flex-col items-center justify-center gap-1 cursor-pointer hover:border-brand-blue/50 transition-colors">
                <Upload className="w-5 h-5 text-slate-400" />
                <span className="text-xs text-slate-600 dark:text-slate-300 font-medium">
                  Click to browse or drop PDF / Word file
                </span>
                <span className="text-[10px] text-slate-400">
                  Accepted formats: PDF, DOCX (Max 10MB)
                </span>
              </div>
            </div>

            <FormField
              as="textarea"
              rows={3}
              label="Brief Note / Why Datanest?"
              required
              placeholder="Tell us about a challenging system or model you engineered..."
              error={errors.coverNote?.message}
              {...register('coverNote')}
            />

            <div className="pt-2">
              <label className="flex items-start gap-2.5 cursor-pointer">
                <input
                  type="checkbox"
                  {...register('consent')}
                  className="rounded border-slate-300 dark:border-white/20 text-brand-blue focus:ring-brand-blue mt-0.5"
                />
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  I confirm that all information provided is accurate and grant permission to process my application under Datanest's recruitment privacy policy.
                </span>
              </label>
              {errors.consent && (
                <p className="text-xs text-red-500 font-medium mt-1">{errors.consent.message}</p>
              )}
            </div>

            <div className="pt-4 flex items-center justify-end gap-3 border-t border-slate-100 dark:border-white/10">
              <Button type="button" variant="outline" size="md" onClick={handleCloseModal}>
                Cancel
              </Button>
              <Button
                type="submit"
                variant="primary"
                size="md"
                isLoading={isSubmitting}
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Submit Application
              </Button>
            </div>
          </form>
        )}
      </Modal>
    </>
  );
};

