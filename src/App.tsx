import React, { Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ScrollProgress } from '@/components/layout/ScrollProgress';
import { CursorFollower } from '@/components/layout/CursorFollower';
import { Preloader } from '@/components/layout/Preloader';
import { ScrollToTop } from '@/components/layout/ScrollToTop';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import { Loader2 } from 'lucide-react';

// Lazy-loaded Pages for peak performance
const Home = lazy(() => import('@/pages/Home').then(m => ({ default: m.Home })));
const About = lazy(() => import('@/pages/About').then(m => ({ default: m.About })));
const Services = lazy(() => import('@/pages/Services').then(m => ({ default: m.Services })));
const ServiceDetail = lazy(() => import('@/pages/ServiceDetail').then(m => ({ default: m.ServiceDetail })));
const Industries = lazy(() => import('@/pages/Industries').then(m => ({ default: m.Industries })));
const IndustryDetail = lazy(() => import('@/pages/IndustryDetail').then(m => ({ default: m.IndustryDetail })));
const CaseStudies = lazy(() => import('@/pages/CaseStudies').then(m => ({ default: m.CaseStudies })));
const CaseStudyDetail = lazy(() => import('@/pages/CaseStudyDetail').then(m => ({ default: m.CaseStudyDetail })));
const Careers = lazy(() => import('@/pages/Careers').then(m => ({ default: m.Careers })));
const Insights = lazy(() => import('@/pages/Insights').then(m => ({ default: m.Insights })));
const BlogDetail = lazy(() => import('@/pages/BlogDetail').then(m => ({ default: m.BlogDetail })));
const Contact = lazy(() => import('@/pages/Contact').then(m => ({ default: m.Contact })));
const Privacy = lazy(() => import('@/pages/Privacy').then(m => ({ default: m.Privacy })));
const Terms = lazy(() => import('@/pages/Terms').then(m => ({ default: m.Terms })));
const NotFound = lazy(() => import('@/pages/NotFound').then(m => ({ default: m.NotFound })));

const PageLoader = () => (
  <div className="min-h-[60vh] flex items-center justify-center">
    <div className="flex flex-col items-center gap-3">
      <Loader2 className="w-8 h-8 animate-spin text-brand-blue dark:text-brand-cyan" />
      <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">
        Loading System Node...
      </span>
    </div>
  </div>
);

export const App: React.FC = () => {
  const location = useLocation();
  useSmoothScroll();

  return (
    <div className="min-h-screen flex flex-col bg-brand-light dark:bg-brand-midnight text-slate-800 dark:text-slate-100 transition-colors duration-300">
      <Preloader />
      <ScrollProgress />
      <CursorFollower />
      <ScrollToTop />

      <Navbar />

      <main className="flex-1">
        <Suspense fallback={<PageLoader />}>
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
            >
              <Routes location={location}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services/:slug" element={<ServiceDetail />} />
                <Route path="/industries" element={<Industries />} />
                <Route path="/industries/:slug" element={<IndustryDetail />} />
                <Route path="/case-studies" element={<CaseStudies />} />
                <Route path="/case-studies/:slug" element={<CaseStudyDetail />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/insights" element={<Insights />} />
                <Route path="/insights/:slug" element={<BlogDetail />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </motion.div>
          </AnimatePresence>
        </Suspense>
      </main>

      <Footer />
    </div>
  );
};
export default App;
