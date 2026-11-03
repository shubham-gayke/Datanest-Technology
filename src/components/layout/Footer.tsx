import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Send,
  CheckCircle2,
  Linkedin,
  Twitter,
  Github,
  Youtube,
  Globe2,
  ShieldCheck,
  Award,
  Sparkles,
} from 'lucide-react';
import { Logo } from '../ui/Logo';
import { Button } from '../ui/Button';
import { footerLinks } from '@/data/navigation';
import { newsletterSchema, type NewsletterData } from '@/lib/validations';
import confetti from 'canvas-confetti';

export const Footer: React.FC = () => {
  const [subscribed, setSubscribed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<NewsletterData>({
    resolver: zodResolver(newsletterSchema),
  });

  const onSubmit = async (_data: NewsletterData) => {
    setIsSubmitting(true);
    // Simulate API delay
    await new Promise((r) => setTimeout(r, 1200));
    setIsSubmitting(false);
    setSubscribed(true);
    reset();
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.85 },
      colors: ['#2563EB', '#06B6D4', '#7C3AED'],
    });
  };

  return (
    <footer className="bg-brand-navy dark:bg-brand-midnight text-slate-300 border-t border-slate-800 dark:border-white/10 relative overflow-hidden transition-colors">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-brand-violet/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-14 border-b border-white/10">
          {/* Brand Info & Newsletter */}
          <div className="lg:col-span-2 space-y-5">
            <div className="inline-block p-1 bg-white/5 rounded-2xl">
              <Logo size="lg" className="text-white" />
            </div>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Engineering Intelligent Digital Futures. Datanest Technology is a trusted global consulting partner delivering cloud architecture, enterprise AI, cybersecurity, and digital transformation for Global 2000 enterprises.
            </p>

            {/* Newsletter Subscription Box */}
            <div className="pt-2">
              <p className="text-xs uppercase tracking-wider font-semibold text-brand-cyan mb-2 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Executive Technology Briefing</span>
              </p>

              {subscribed ? (
                <div className="flex items-center gap-2 p-3 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs font-semibold animate-fadeIn">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Subscribed! Check your inbox for the quarterly CIO tech radar.</span>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
                  <div className="relative flex items-center max-w-sm">
                    <input
                      type="email"
                      {...register('email')}
                      placeholder="corporate.email@enterprise.com"
                      className="w-full pl-3.5 pr-28 py-2.5 rounded-xl bg-white/5 border border-white/15 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-all"
                    />
                    <Button
                      type="submit"
                      size="sm"
                      variant="primary"
                      isLoading={isSubmitting}
                      className="absolute right-1 top-1 bottom-1 text-xs px-3"
                      icon={<Send className="w-3 h-3" />}
                    >
                      Subscribe
                    </Button>
                  </div>
                  {errors.email && (
                    <p className="text-[11px] text-red-400 font-medium">{errors.email.message}</p>
                  )}
                </form>
              )}
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="p-2 rounded-lg bg-white/5 hover:bg-brand-blue hover:text-white text-slate-400 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
                className="p-2 rounded-lg bg-white/5 hover:bg-brand-cyan hover:text-white text-slate-400 transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="p-2 rounded-lg bg-white/5 hover:bg-brand-violet hover:text-white text-slate-400 transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="p-2 rounded-lg bg-white/5 hover:bg-red-600 hover:text-white text-slate-400 transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Solutions Column */}
          <div className="space-y-4">
            <h4 className="font-heading font-bold text-sm tracking-wide text-white uppercase">
              Core Capabilities
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              {footerLinks.solutions.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="hover:text-brand-cyan transition-colors block py-0.5"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div className="space-y-4">
            <h4 className="font-heading font-bold text-sm tracking-wide text-white uppercase">
              Organization
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="hover:text-brand-cyan transition-colors block py-0.5"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Global Operations Column */}
          <div className="space-y-4">
            <h4 className="font-heading font-bold text-sm tracking-wide text-white uppercase">
              Global Presence
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Operating cross-border delivery hubs across the Americas, EMEA, and APAC.
            </p>
            <div className="space-y-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Globe2 className="w-3.5 h-3.5 text-brand-cyan shrink-0" />
                <span>Headquarters: New York, USA</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-brand-blue shrink-0" />
                <span>ISO 27001 & SOC 2 Type II Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                <span>AWS Premier & GCP Partner</span>
              </div>
            </div>
            <div className="pt-2">
              <Link
                to="/contact"
                className="text-xs font-semibold text-brand-cyan hover:underline inline-flex items-center gap-1"
              >
                <span>Find an office near you &rarr;</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <span>&copy; {new Date().getFullYear()} Datanest Technology Inc. All rights reserved.</span>
            <span className="hidden sm:inline text-white/20">|</span>
            <Link to="/privacy" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-slate-300 transition-colors">
              Terms of Service
            </Link>
            <Link to="/contact" className="hover:text-slate-300 transition-colors">
              Security Portal
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-950/60 text-emerald-400 border border-emerald-800/40 text-[11px] font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Global SOC Operations: Operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

