import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { FormField } from '@/components/ui/FormField';
import { Modal } from '@/components/ui/Modal';
import { Reveal } from '@/components/ui/Reveal';
import { GlobalPresenceMap } from '@/components/sections/GlobalPresenceMap';
import { contactFormSchema, type ContactFormData } from '@/lib/validations';
import { officesData } from '@/data/offices';
import confetti from 'canvas-confetti';
import {
  Send,
  CheckCircle2,
  Phone,
  Mail,
  Clock,
  MapPin,
  ShieldCheck,
  Sparkles,
  Lock,
} from 'lucide-react';

export const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid, isDirty },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    mode: 'onTouched',
  });

  const onSubmit = async (_data: ContactFormData) => {
    setIsSubmitting(true);

    // Simulate enterprise backend SLA dispatch (~1.5s)
    await new Promise((r) => setTimeout(r, 1500));

    setIsSubmitting(false);
    setShowSuccessModal(true);
    setToastMessage('Consultation request registered. Priority ticket dispatched.');

    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#2563EB', '#06B6D4', '#7C3AED'],
    });

    reset();

    // Auto dismiss toast after 5s
    setTimeout(() => {
      setToastMessage(null);
    }, 5000);
  };

  return (
    <>
      <Helmet>
        <title>Contact Us & Global Offices | Datanest Technology</title>
        <meta
          name="description"
          content="Initiate a consultation with Datanest Technology. Connect with our enterprise architects and regional delivery hubs across New York, London, Singapore, and Zurich."
        />
      </Helmet>

      {/* Floating Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 animate-bounce">
          <div className="flex items-center gap-2.5 px-4 py-3 rounded-2xl bg-brand-midnight text-white border border-brand-cyan/40 shadow-2xl backdrop-blur-md text-xs font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>{toastMessage}</span>
          </div>
        </div>
      )}

      {/* Hero */}
      <section className="pt-32 pb-16 bg-brand-midnight text-white relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient-hero pointer-events-none" />
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <span className="inline-block px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-brand-cyan text-xs font-bold uppercase tracking-wider">
              Executive Engagement
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight leading-tight">
              Let's Engineer Your{' '}
              <span className="text-gradient bg-gradient-to-r from-brand-blue via-brand-cyan to-brand-violet">
                Transformation
              </span>
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Connect directly with our senior enterprise practice leaders. Whether scoping a multi-region cloud migration, sovereign generative AI deployment, or Zero Trust audit, we are ready to assist.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Consultation Form & Office Quick Info */}
      <section className="py-20 bg-slate-50 dark:bg-brand-midnight/90 transition-colors border-b border-slate-200 dark:border-white/5">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Consultation Form Column */}
            <div className="lg:col-span-7">
              <Reveal animation="slide-left">
                <div className="p-6 sm:p-10 rounded-3xl bg-white dark:bg-brand-card border border-slate-200 dark:border-white/10 shadow-xl">
                  <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-100 dark:border-white/10">
                    <div>
                      <h2 className="font-heading font-bold text-2xl text-brand-navy dark:text-white">
                        Request Strategic Consultation
                      </h2>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                        Guaranteed NDA protection &bull; 24-hour executive response
                      </p>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-white/5 text-brand-blue dark:text-brand-cyan flex items-center justify-center">
                      <Lock className="w-5 h-5" />
                    </div>
                  </div>

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <FormField
                        label="Full Name"
                        required
                        placeholder="Dr. Sarah Kensington"
                        error={errors.fullName?.message}
                        {...register('fullName')}
                      />

                      <FormField
                        label="Corporate Work Email"
                        type="email"
                        required
                        placeholder="s.kensington@enterprise.com"
                        error={errors.email?.message}
                        {...register('email')}
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <FormField
                        label="Phone Number"
                        required
                        placeholder="+1 (212) 555-0199"
                        error={errors.phone?.message}
                        {...register('phone')}
                      />

                      <FormField
                        label="Company / Organization"
                        required
                        placeholder="Global Retail Partners Inc."
                        error={errors.company?.message}
                        {...register('company')}
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <FormField
                        as="select"
                        label="Primary Service of Interest"
                        required
                        placeholder="Select Practice Area"
                        options={[
                          { value: 'Cloud Computing & Infrastructure', label: 'Cloud Computing & Infrastructure' },
                          { value: 'AI & Machine Learning', label: 'Artificial Intelligence & Machine Learning' },
                          { value: 'Enterprise Data & Analytics', label: 'Enterprise Data & Lakehouse' },
                          { value: 'Cybersecurity & Zero Trust', label: 'Cybersecurity & Digital Trust' },
                          { value: 'Application Modernization', label: 'Application Modernization' },
                          { value: 'DevOps & SRE', label: 'DevOps, SRE & Platform Engineering' },
                          { value: 'ERP Transformation (SAP/Salesforce)', label: 'ERP & Digital Core' },
                          { value: 'Strategic IT Consulting & Advisory', label: 'Strategic IT Consulting & Advisory' },
                        ]}
                        error={errors.service?.message}
                        {...register('service')}
                      />

                      <FormField
                        as="select"
                        label="Estimated Project Scope / Budget"
                        placeholder="Select Scope Range (Optional)"
                        options={[
                          { value: '$100k - $250k', label: '$100k - $250k (Assessment / POC)' },
                          { value: '$250k - $1M', label: '$250k - $1M (Initial Phase)' },
                          { value: '$1M - $5M', label: '$1M - $5M (Multi-Workload Modernization)' },
                          { value: '$5M+', label: '$5M+ (Enterprise Digital Transformation)' },
                        ]}
                        {...register('budget')}
                      />
                    </div>

                    <FormField
                      as="textarea"
                      rows={4}
                      label="Project Description / Objective"
                      required
                      placeholder="Please summarize your target systems, objectives, timeline, or current technical bottlenecks..."
                      error={errors.message?.message}
                      {...register('message')}
                    />

                    <div className="pt-2">
                      <label className="flex items-start gap-2.5 cursor-pointer">
                        <input
                          type="checkbox"
                          {...register('consent')}
                          className="rounded border-slate-300 dark:border-white/20 text-brand-blue focus:ring-brand-blue mt-0.5"
                        />
                        <span className="text-xs text-slate-500 dark:text-slate-400">
                          I agree to Datanest's processing of my data in accordance with the corporate Privacy Policy. All disclosures remain protected under mutual non-disclosure agreements.
                        </span>
                      </label>
                      {errors.consent && (
                        <p className="text-xs text-red-500 font-medium mt-1">{errors.consent.message}</p>
                      )}
                    </div>

                    <div className="pt-4">
                      <Button
                        type="submit"
                        variant="primary"
                        size="lg"
                        className="w-full"
                        isLoading={isSubmitting}
                        icon={<Send className="w-4 h-4" />}
                      >
                        Submit Consultation Request
                      </Button>
                    </div>
                  </form>
                </div>
              </Reveal>
            </div>

            {/* Global Hubs & Direct Channels Column */}
            <div className="lg:col-span-5 space-y-6">
              <Reveal animation="slide-right">
                <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-brand-card border border-slate-200 dark:border-white/10 shadow-sm space-y-6">
                  <div>
                    <span className="text-xs uppercase font-bold tracking-wider text-brand-blue dark:text-brand-cyan">
                      Direct Engagement
                    </span>
                    <h3 className="font-heading font-bold text-xl text-brand-navy dark:text-white mt-1">
                      Global Headquarters & Desk
                    </h3>
                  </div>

                  <div className="space-y-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-brand-blue dark:text-brand-cyan shrink-0 mt-0.5" />
                      <div>
                        <div className="font-bold text-slate-900 dark:text-white">New York Headquarters</div>
                        <div>One World Trade Center, Suite 7800, New York, NY 10007</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-brand-blue dark:text-brand-cyan shrink-0" />
                      <div>
                        <div className="text-slate-400 text-[11px]">Direct Switchboard</div>
                        <a href="tel:+12125550190" className="font-semibold text-slate-900 dark:text-white hover:underline">
                          +1 (212) 555-0190
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Mail className="w-4 h-4 text-brand-blue dark:text-brand-cyan shrink-0" />
                      <div>
                        <div className="text-slate-400 text-[11px]">Executive RFP Submissions</div>
                        <a href="mailto:solutions@datanesttechnology.com" className="font-semibold text-slate-900 dark:text-white hover:underline">
                          solutions@datanesttechnology.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Clock className="w-4 h-4 text-brand-blue dark:text-brand-cyan shrink-0" />
                      <div>
                        <div className="text-slate-400 text-[11px]">Executive Hours</div>
                        <span>Mon - Fri: 8:30 AM - 6:00 PM EST (Follow-the-Sun SLA 24/7)</span>
                      </div>
                    </div>
                  </div>

                  {/* Security SLA Badge */}
                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5 space-y-2">
                    <div className="flex items-center gap-2 text-xs font-bold text-emerald-600 dark:text-emerald-400">
                      <ShieldCheck className="w-4 h-4" />
                      <span>Enterprise Security Protocol</span>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                      All consultation inquiries are routed via encrypted TLS 1.3 channels directly to designated practice directors. We execute bilateral non-disclosure agreements prior to technical reviews.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Global Interactive Presence Map */}
      <GlobalPresenceMap />

      {/* Submission Success Modal */}
      <Modal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        title="Consultation Request Received"
        description="Priority dispatch ticket created"
      >
        <div className="text-center py-6 space-y-4">
          <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/80 border border-emerald-500/40 text-emerald-500 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <h3 className="font-heading font-bold text-2xl text-brand-navy dark:text-white">
            Thank You for Reaching Out
          </h3>

          <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
            Your consultation request has been assigned to a senior enterprise solutions director. We will review your project parameters and reach out within 24 hours to schedule your preliminary architectural session.
          </p>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs text-slate-500 text-left max-w-sm mx-auto space-y-1">
            <div className="font-bold text-brand-navy dark:text-white">Next Steps:</div>
            <div>&bull; Review of project requirements by technical leads</div>
            <div>&bull; Dispatch of reciprocal NDA documentation</div>
            <div>&bull; Coordination of 45-minute architectural discovery call</div>
          </div>

          <div className="pt-4">
            <Button
              variant="primary"
              size="md"
              onClick={() => setShowSuccessModal(false)}
            >
              Close Confirmation
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

