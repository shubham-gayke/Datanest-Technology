import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { ArrowLeft, Home, Compass, Search } from 'lucide-react';
import { motion } from 'framer-motion';

export const NotFound: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>404 - Node Disconnected | Datanest Technology</title>
        <meta name="description" content="The requested enterprise network endpoint does not exist." />
      </Helmet>

      <section className="min-h-[85vh] flex items-center justify-center py-28 bg-brand-midnight text-white relative overflow-hidden">
        {/* Glowing background */}
        <div className="absolute inset-0 mesh-gradient-hero pointer-events-none" />

        <Container size="sm">
          <div className="text-center space-y-6">
            {/* Animated Broken Node SVG */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative w-36 h-36 mx-auto flex items-center justify-center"
            >
              <div className="absolute inset-0 rounded-full bg-brand-blue/20 blur-xl animate-pulse" />
              <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
                <circle cx="50" cy="50" r="42" fill="none" stroke="#2563EB" strokeWidth="2" strokeDasharray="6 6" />
                <path d="M 32 32 L 68 68" stroke="#EF4444" strokeWidth="4" strokeLinecap="round" />
                <circle cx="32" cy="32" r="6" fill="#A855F7" />
                <circle cx="68" cy="68" r="6" fill="#06B6D4" />
                <circle cx="50" cy="50" r="8" fill="#EF4444" />
              </svg>
            </motion.div>

            <span className="inline-block px-3 py-1 rounded-full bg-red-950/60 border border-red-500/40 text-red-400 text-xs font-mono font-bold uppercase tracking-widest">
              Error 404 &bull; Route Unreachable
            </span>

            <h1 className="text-3xl sm:text-5xl font-heading font-extrabold tracking-tight">
              Network Endpoint Not Found
            </h1>

            <p className="text-slate-400 text-sm sm:text-base max-w-md mx-auto leading-relaxed">
              The requested resource or enterprise pathway does not exist or has been migrated to a new cluster address.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/">
                <Button variant="primary" size="md" icon={<Home className="w-4 h-4" />}>
                  Return to Home
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" size="md" className="border-white/20 text-white hover:bg-white/10" icon={<Compass className="w-4 h-4" />}>
                  Browse Services
                </Button>
              </Link>
            </div>

            {/* Quick Links */}
            <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
              <Link to="/about" className="hover:text-brand-cyan transition-colors">About Us</Link>
              <Link to="/case-studies" className="hover:text-brand-cyan transition-colors">Case Studies</Link>
              <Link to="/careers" className="hover:text-brand-cyan transition-colors">Careers</Link>
              <Link to="/contact" className="hover:text-brand-cyan transition-colors">Contact Support</Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

