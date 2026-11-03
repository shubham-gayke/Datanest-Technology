import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { Reveal } from '../ui/Reveal';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

export const CTABanner: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-brand-midnight text-white">
      {/* Dynamic Animated Gradient Mesh */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/30 via-indigo-900/40 to-brand-violet/30 pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-cyan/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-brand-violet/20 rounded-full blur-3xl pointer-events-none" />

      <Container>
        <Reveal animation="scale">
          <div className="relative rounded-3xl bg-gradient-to-b from-white/10 to-white/5 border border-white/15 p-8 sm:p-14 lg:p-16 text-center backdrop-blur-xl shadow-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/40 text-brand-cyan text-xs font-semibold mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Accelerate Your Digital Evolution</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold tracking-tight max-w-3xl mx-auto leading-tight">
              Ready to Engineer Your Next-Generation{' '}
              <span className="text-gradient bg-gradient-to-r from-brand-cyan via-white to-purple-300">
                Enterprise Future?
              </span>
            </h2>

            <p className="mt-5 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Connect directly with our senior enterprise solutions architects. We will conduct a zero-obligation 45-minute architectural assessment of your existing infrastructure and formulate a high-ROI transformation roadmap.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact">
                <Button
                  variant="glow"
                  size="lg"
                  className="w-full sm:w-auto px-8"
                  icon={<ArrowRight className="w-5 h-5" />}
                >
                  Schedule Strategy Consultation
                </Button>
              </Link>
              <Link to="/case-studies">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto border-white/20 text-white hover:bg-white/10"
                >
                  Review Verified Case Studies
                </Button>
              </Link>
            </div>

            <div className="mt-10 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>NDA & Confidentiality Protected</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Direct Access to Senior Architects</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Guaranteed 24-Hour Response</span>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
};
