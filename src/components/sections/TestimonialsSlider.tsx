import React, { useState } from 'react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';
import { testimonialsData } from '@/data/testimonials';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const TestimonialsSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prevIdx) => (prevIdx === 0 ? testimonialsData.length - 1 : prevIdx - 1));
  };

  const next = () => {
    setCurrentIndex((prevIdx) => (prevIdx === testimonialsData.length - 1 ? 0 : prevIdx + 1));
  };

  const current = testimonialsData[currentIndex];

  return (
    <section className="py-24 bg-white dark:bg-brand-midnight transition-colors border-t border-slate-200 dark:border-white/5 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-brand-violet/5 rounded-full blur-3xl pointer-events-none" />

      <Container>
        <SectionHeading
          badge="Executive Endorsements"
          badgeVariant="violet"
          title="Trusted by Visionary"
          highlight="Enterprise Leaders"
          description="Read how our strategic partnership and technical execution enabled C-level executives to achieve their most aggressive digital milestones."
        />

        <div className="max-w-4xl mx-auto">
          <Reveal animation="fade-up">
            <div className="relative rounded-3xl bg-slate-50 dark:bg-brand-card/50 border border-slate-200 dark:border-white/10 p-8 sm:p-12 lg:p-16 shadow-lg">
              {/* Giant Quote Icon */}
              <Quote className="absolute top-6 right-8 w-16 h-16 text-brand-blue/10 dark:text-white/5 pointer-events-none" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  {/* Rating Stars & Key Metric Highlight */}
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-1 text-amber-400">
                      {Array.from({ length: current.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950/80 text-brand-blue dark:text-brand-cyan">
                      {current.highlight}
                    </span>
                  </div>

                  {/* Quote Body */}
                  <blockquote className="font-heading font-medium text-lg sm:text-xl text-slate-800 dark:text-slate-100 leading-relaxed italic">
                    "{current.quote}"
                  </blockquote>

                  {/* Author Meta */}
                  <div className="flex items-center gap-4 pt-4 border-t border-slate-200 dark:border-white/10">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-brand-blue to-brand-violet flex items-center justify-center text-white font-bold text-lg shadow-sm">
                      {current.author.charAt(0)}
                    </div>
                    <div>
                      <div className="font-heading font-bold text-base text-brand-navy dark:text-white">
                        {current.author}
                      </div>
                      <div className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                        {current.role} &bull; <span className="font-semibold text-brand-navy dark:text-white">{current.company}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Slider Controls */}
              <div className="flex items-center justify-between mt-8 pt-4 border-t border-slate-200 dark:border-white/10">
                <div className="flex items-center gap-2">
                  {testimonialsData.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      aria-label={`Go to testimonial ${idx + 1}`}
                      className={`h-2 rounded-full transition-all ${
                        currentIndex === idx
                          ? 'w-8 bg-brand-blue dark:bg-brand-cyan'
                          : 'w-2 bg-slate-300 dark:bg-white/20'
                      }`}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={prev}
                    aria-label="Previous Testimonial"
                    className="p-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-brand-midnight hover:bg-slate-100 dark:hover:bg-white/10 text-slate-700 dark:text-slate-200 transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={next}
                    aria-label="Next Testimonial"
                    className="p-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-brand-midnight hover:bg-slate-100 dark:hover:bg-white/10 text-slate-700 dark:text-slate-200 transition-colors"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
};

