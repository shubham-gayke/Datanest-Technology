import React, { useState } from 'react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';
import { officesData, type Office } from '@/data/offices';
import { MapPin, Phone, Mail, Clock, Globe2 } from 'lucide-react';
import { cn } from '@/lib/utils';

export const GlobalPresenceMap: React.FC = () => {
  const [selectedOffice, setSelectedOffice] = useState<Office>(officesData[0]);

  return (
    <section id="global-presence" className="py-24 bg-white dark:bg-brand-midnight transition-colors border-t border-slate-200 dark:border-white/5 relative overflow-hidden">
      <Container>
        <SectionHeading
          badge="Global Footprint"
          badgeVariant="cyan"
          title="Engineered Locally."
          highlight="Delivered Globally."
          description="With strategic engineering delivery centers and regional client executive hubs across 40+ countries, we ensure 24/7 follow-the-sun execution and localized regulatory compliance."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* SVG Stylized Interactive Map Container */}
          <div className="lg:col-span-8">
            <Reveal animation="fade-up">
              <div className="relative rounded-3xl bg-slate-900 border border-slate-800 p-6 sm:p-10 shadow-2xl overflow-hidden aspect-[16/9] flex items-center justify-center">
                {/* Background grid */}
                <div
                  className="absolute inset-0 opacity-15"
                  style={{
                    backgroundImage:
                      'radial-gradient(circle at 1px 1px, #38BDF8 1px, transparent 0)',
                    backgroundSize: '24px 24px',
                  }}
                />

                {/* Stylized World Continents SVG outline */}
                <svg
                  viewBox="0 0 1000 500"
                  className="w-full h-full opacity-40 select-none pointer-events-none"
                  fill="none"
                  stroke="#38BDF8"
                  strokeWidth="1.2"
                >
                  {/* North America */}
                  <path d="M 120 100 Q 180 80, 240 110 T 320 140 T 260 220 T 180 250 T 140 180 Z" fill="#1E293B" />
                  {/* South America */}
                  <path d="M 260 260 Q 300 280, 310 350 T 270 440 T 230 360 Z" fill="#1E293B" />
                  {/* Europe */}
                  <path d="M 450 110 Q 520 90, 540 130 T 490 200 T 440 160 Z" fill="#1E293B" />
                  {/* Africa */}
                  <path d="M 460 210 Q 540 220, 560 300 T 500 400 T 440 300 Z" fill="#1E293B" />
                  {/* Asia */}
                  <path d="M 550 100 Q 700 80, 800 130 T 780 250 T 650 250 T 560 170 Z" fill="#1E293B" />
                  {/* Australia */}
                  <path d="M 760 330 Q 860 320, 870 380 T 790 420 T 740 370 Z" fill="#1E293B" />
                </svg>

                {/* Pulsing Interactive Location Markers */}
                {officesData.map((office) => {
                  const isSelected = selectedOffice.city === office.city;
                  return (
                    <button
                      key={office.city}
                      type="button"
                      onClick={() => setSelectedOffice(office)}
                      style={{
                        left: `${office.coordinates.x}%`,
                        top: `${office.coordinates.y}%`,
                      }}
                      className="absolute -translate-x-1/2 -translate-y-1/2 group focus:outline-none z-20"
                      aria-label={`View office in ${office.city}`}
                    >
                      <span className="relative flex h-5 w-5 items-center justify-center">
                        <span
                          className={cn(
                            'animate-ping absolute inline-flex h-full w-full rounded-full opacity-75',
                            isSelected ? 'bg-cyan-400' : 'bg-brand-blue'
                          )}
                        />
                        <span
                          className={cn(
                            'relative inline-flex rounded-full h-3.5 w-3.5 border-2 border-slate-900 transition-all',
                            isSelected
                              ? 'bg-brand-cyan scale-125'
                              : 'bg-brand-blue group-hover:bg-brand-cyan'
                          )}
                        />
                      </span>

                      {/* City Name Label Pill */}
                      <span
                        className={cn(
                          'absolute top-full left-1/2 -translate-x-1/2 mt-1 px-2 py-0.5 rounded text-[10px] font-bold whitespace-nowrap transition-all shadow-md',
                          isSelected
                            ? 'bg-brand-cyan text-brand-midnight font-black opacity-100 scale-105'
                            : 'bg-slate-800 text-slate-300 opacity-80 group-hover:opacity-100'
                        )}
                      >
                        {office.city}
                      </span>
                    </button>
                  );
                })}
              </div>
            </Reveal>
          </div>

          {/* Selected Office Details Card */}
          <div className="lg:col-span-4">
            <Reveal animation="slide-right">
              <div className="rounded-3xl bg-slate-50 dark:bg-brand-card border border-slate-200 dark:border-white/10 p-6 sm:p-8 shadow-lg space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-blue-100 dark:bg-blue-950/80 text-brand-blue dark:text-brand-cyan">
                    {selectedOffice.region} Regional Hub
                  </span>
                  {selectedOffice.isHQ && (
                    <span className="text-xs font-bold text-brand-violet bg-purple-50 dark:bg-purple-950/60 px-2 py-0.5 rounded-full">
                      Global Headquarters
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-brand-navy dark:text-white">
                    {selectedOffice.city}
                  </h3>
                  <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">
                    {selectedOffice.country}
                  </p>
                </div>

                <div className="space-y-4 pt-4 border-t border-slate-200 dark:border-white/10 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-brand-blue dark:text-brand-cyan shrink-0 mt-0.5" />
                    <span>{selectedOffice.address}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-brand-blue dark:text-brand-cyan shrink-0" />
                    <a href={`tel:${selectedOffice.phone}`} className="hover:underline">
                      {selectedOffice.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-brand-blue dark:text-brand-cyan shrink-0" />
                    <a href={`mailto:${selectedOffice.email}`} className="hover:underline">
                      {selectedOffice.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-brand-blue dark:text-brand-cyan shrink-0" />
                    <span>{selectedOffice.hours}</span>
                  </div>
                </div>

                {/* Quick Office Selector Pills */}
                <div className="pt-4 border-t border-slate-200 dark:border-white/10">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Quick Select Hub
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {officesData.map((o) => (
                      <button
                        key={o.city}
                        type="button"
                        onClick={() => setSelectedOffice(o)}
                        className={cn(
                          'text-xs px-2.5 py-1 rounded-lg transition-colors font-medium',
                          selectedOffice.city === o.city
                            ? 'bg-brand-blue text-white font-bold'
                            : 'bg-white dark:bg-white/5 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-white/10'
                        )}
                      >
                        {o.city}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
};

