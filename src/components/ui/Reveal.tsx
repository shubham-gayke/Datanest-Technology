import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface RevealProps {
  children: React.ReactNode;
  animation?: 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right' | 'scale';
  delay?: number;
  duration?: number;
  className?: string;
  cascade?: boolean;
}

export const Reveal: React.FC<RevealProps> = ({
  children,
  animation = 'fade-up',
  delay = 0,
  duration = 0.5,
  className = '',
}) => {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  const variants = {
    'fade-up': {
      hidden: { opacity: 0, y: 28 },
      visible: { opacity: 1, y: 0 },
    },
    'fade-in': {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
    'slide-left': {
      hidden: { opacity: 0, x: -32 },
      visible: { opacity: 1, x: 0 },
    },
    'slide-right': {
      hidden: { opacity: 0, x: 32 },
      visible: { opacity: 1, x: 0 },
    },
    scale: {
      hidden: { opacity: 0, scale: 0.94 },
      visible: { opacity: 1, scale: 1 },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      variants={variants[animation]}
      className={className}
    >
      {children}
    </motion.div>
  );
};

