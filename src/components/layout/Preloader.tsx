import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Logo } from '../ui/Logo';

export const Preloader: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 900); // 900ms snappy branded preloader

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-brand-midnight text-white"
        >
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col items-center gap-6"
          >
            <Logo size="lg" />

            <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden relative">
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ repeat: Infinity, duration: 1.2, ease: 'easeInOut' }}
                className="w-1/2 h-full bg-gradient-to-r from-brand-blue via-brand-cyan to-brand-violet rounded-full"
              />
            </div>

            <p className="text-xs uppercase tracking-widest text-slate-400 font-medium">
              Initializing Enterprise Systems
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

