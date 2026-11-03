import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Sparkles, Shield, Cpu, Cloud } from 'lucide-react';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';

export const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Intelligent floating node mesh canvas animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 750);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize);

    // Particle nodes definition
    const nodeCount = Math.min(Math.floor(width / 24), 65);
    interface Node {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
    }

    const colors = ['#2563EB', '#06B6D4', '#7C3AED', '#38BDF8'];
    const nodes: Node[] = Array.from({ length: nodeCount }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.7,
      vy: (Math.random() - 0.5) * 0.7,
      radius: Math.random() * 2.5 + 1.5,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Connect close nodes with glowing gradient lines
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(37, 99, 235, ${0.22 * (1 - dist / 130)})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      nodes.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.shadowColor = node.color;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-brand-midnight text-white pt-24 pb-16">
      {/* Mesh Gradient Background */}
      <div className="absolute inset-0 mesh-gradient-hero pointer-events-none" />

      {/* Interactive Node Mesh Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none opacity-45 dark:opacity-60"
      />

      {/* Subtle Radial Glow Highlights */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-brand-blue/30 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute top-1/3 -right-20 w-[450px] h-[450px] bg-brand-violet/25 rounded-full blur-[140px] pointer-events-none" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
        {/* Kicker Pill */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 mb-6"
        >
          <Badge variant="cyan" dot className="border-cyan-500/30 bg-cyan-950/40 text-cyan-300 py-1.5 px-4 text-xs font-semibold backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-brand-cyan" />
            <span>Next-Generation Enterprise IT Consulting</span>
          </Badge>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-heading font-extrabold tracking-tight leading-[1.08] sm:leading-[1.06]"
        >
          Engineering Intelligent{' '}
          <span className="text-gradient bg-gradient-to-r from-brand-blue via-brand-cyan to-brand-violet">
            Digital Futures
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal"
        >
          We partner with Global 2000 enterprises to architect hyperscale cloud ecosystems, deploy private generative AI systems, and enforce Zero Trust cyber resilience.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
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
          <Link to="/services">
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-white/20 text-white hover:bg-white/10 backdrop-blur-sm"
            >
              Explore Enterprise Solutions
            </Button>
          </Link>
        </motion.div>

        {/* Micro Trust Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-14 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-slate-400 text-xs font-medium"
        >
          <div className="flex items-center justify-center gap-2">
            <Cloud className="w-4 h-4 text-brand-blue" />
            <span>Multi-Cloud Architecture</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Cpu className="w-4 h-4 text-brand-cyan" />
            <span>Enterprise Generative AI</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Shield className="w-4 h-4 text-brand-violet" />
            <span>Zero Trust Cybersecurity</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>99.999% SLA Resiliency</span>
          </div>
        </motion.div>

        {/* Scroll Down Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-12 flex justify-center"
        >
          <a
            href="#stats"
            aria-label="Scroll down to statistics"
            className="group flex flex-col items-center gap-1.5 text-xs text-slate-400 hover:text-brand-cyan transition-colors"
          >
            <span className="uppercase tracking-widest text-[10px]">Discover More</span>
            <ChevronDown className="w-4 h-4 animate-bounce group-hover:text-brand-cyan" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

