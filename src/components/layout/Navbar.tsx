import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  Cloud,
  Cpu,
  BarChart3,
  ShieldCheck,
  Code2,
  Terminal,
  Layers,
  Briefcase,
  Landmark,
  Activity,
  ShoppingBag,
  Cog,
  Radio,
  Truck,
  Sparkles,
} from 'lucide-react';
import { Logo } from '../ui/Logo';
import { Button } from '../ui/Button';
import { ThemeToggle } from '../ui/ThemeToggle';
import { navigationData } from '@/data/navigation';
import { cn } from '@/lib/utils';

// Icon mapping helper
const iconMap: Record<string, React.ReactNode> = {
  Cloud: <Cloud className="w-5 h-5" />,
  Cpu: <Cpu className="w-5 h-5" />,
  BarChart3: <BarChart3 className="w-5 h-5" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5" />,
  Code2: <Code2 className="w-5 h-5" />,
  Terminal: <Terminal className="w-5 h-5" />,
  Layers: <Layers className="w-5 h-5" />,
  Briefcase: <Briefcase className="w-5 h-5" />,
  Landmark: <Landmark className="w-5 h-5" />,
  Activity: <Activity className="w-5 h-5" />,
  ShoppingBag: <ShoppingBag className="w-5 h-5" />,
  Cog: <Cog className="w-5 h-5" />,
  Radio: <Radio className="w-5 h-5" />,
  Truck: <Truck className="w-5 h-5" />,
};

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu and dropdowns on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-40 transition-all duration-300',
        isScrolled
          ? 'py-3.5 bg-brand-midnight/95 backdrop-blur-2xl border-b border-cyan-500/20 shadow-2xl shadow-black/40'
          : 'py-4 sm:py-5 bg-brand-midnight/85 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/20'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo with high-contrast light mode */}
          <Logo size="md" light />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1.5" aria-label="Main Navigation">
            {navigationData.map((item) => {
              const hasChildren = item.children && item.children.length > 0;
              const isMega = item.isMega;
              const isDropdownOpen = activeDropdown === item.label;

              if (hasChildren) {
                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button
                      type="button"
                      aria-expanded={isDropdownOpen}
                      className={cn(
                        'flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-sm font-semibold transition-all duration-200',
                        isDropdownOpen
                          ? 'text-brand-cyan bg-white/10'
                          : 'text-slate-200 hover:text-white hover:bg-white/5'
                      )}
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={cn(
                          'w-4 h-4 transition-transform duration-200',
                          isDropdownOpen ? 'rotate-180 text-brand-cyan' : 'text-slate-400'
                        )}
                      />
                    </button>

                    {/* Dropdown / Mega Menu */}
                    <AnimatePresence>
                      {isDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.2, ease: 'easeOut' }}
                          className={cn(
                            'absolute top-full pt-3 z-50',
                            isMega
                              ? '-left-36 w-[860px]'
                              : 'left-0 w-80'
                          )}
                        >
                          <div className="rounded-2xl bg-brand-midnight/98 backdrop-blur-2xl border border-white/15 p-6 shadow-2xl shadow-cyan-950/30">
                            {isMega ? (
                              <div>
                                <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                                  <div>
                                    <h3 className="font-heading font-bold text-base text-white">
                                      Enterprise Solutions & Capabilities
                                    </h3>
                                    <p className="text-xs text-slate-400">
                                      End-to-end IT modernization, cloud infrastructure, and AI engineering
                                    </p>
                                  </div>
                                  <Link
                                    to="/services"
                                    className="inline-flex items-center gap-1 text-xs font-semibold text-brand-cyan hover:underline"
                                  >
                                    <span>All Services</span>
                                    <ArrowRight className="w-3.5 h-3.5" />
                                  </Link>
                                </div>

                                <div className="grid grid-cols-2 gap-3">
                                  {item.children?.map((sub) => (
                                    <Link
                                      key={sub.href}
                                      to={sub.href}
                                      className="group flex items-start gap-3.5 p-3 rounded-xl hover:bg-white/5 transition-all border border-transparent hover:border-white/10"
                                    >
                                      <div className="shrink-0 p-2.5 rounded-xl bg-blue-950/80 text-brand-cyan group-hover:scale-110 group-hover:bg-brand-blue group-hover:text-white transition-all">
                                        {sub.icon && iconMap[sub.icon] ? iconMap[sub.icon] : <Sparkles className="w-5 h-5" />}
                                      </div>
                                      <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-2">
                                          <p className="text-sm font-semibold text-slate-100 group-hover:text-brand-cyan transition-colors truncate">
                                            {sub.title}
                                          </p>
                                          {sub.badge && (
                                            <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-purple-900/60 text-purple-300 border border-purple-700/50">
                                              {sub.badge}
                                            </span>
                                          )}
                                        </div>
                                        <p className="text-xs text-slate-400 line-clamp-2 mt-0.5">
                                          {sub.description}
                                        </p>
                                      </div>
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ) : (
                              <div className="space-y-1">
                                {item.children?.map((sub) => (
                                  <Link
                                    key={sub.href}
                                    to={sub.href}
                                    className="group flex items-center gap-3 p-2.5 rounded-xl hover:bg-white/5 transition-colors"
                                  >
                                    <div className="shrink-0 p-2 rounded-lg bg-blue-950/80 text-brand-cyan group-hover:bg-brand-blue group-hover:text-white transition-colors">
                                      {sub.icon && iconMap[sub.icon] ? iconMap[sub.icon] : <Sparkles className="w-4 h-4" />}
                                    </div>
                                    <div>
                                      <p className="text-sm font-semibold text-slate-200 group-hover:text-brand-cyan transition-colors">
                                        {sub.title}
                                      </p>
                                    </div>
                                  </Link>
                                ))}
                                <div className="pt-2 border-t border-white/10 mt-2">
                                  <Link
                                    to={item.href}
                                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-cyan px-2.5 py-1 hover:underline"
                                  >
                                    <span>Explore All {item.label}</span>
                                    <ArrowRight className="w-3.5 h-3.5" />
                                  </Link>
                                </div>
                              </div>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <NavLink
                  key={item.label}
                  to={item.href}
                  className={({ isActive }) =>
                    cn(
                      'relative px-3.5 py-2 rounded-xl text-sm font-semibold transition-all duration-200',
                      isActive
                        ? 'text-brand-cyan font-bold'
                        : 'text-slate-200 hover:text-white hover:bg-white/5'
                    )
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span>{item.label}</span>
                      {isActive && (
                        <motion.div
                          layoutId="navbar-active-pill"
                          className="absolute bottom-0 left-3 right-3 h-0.5 bg-gradient-to-r from-brand-blue via-brand-cyan to-brand-violet rounded-full shadow-glow-cyan"
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle className="bg-white/10 border-white/15 text-white hover:bg-white/20 hover:text-brand-cyan" />
            <Link to="/contact">
              <Button
                variant="glow"
                size="sm"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Schedule Consultation
              </Button>
            </Link>
          </div>

          {/* Mobile Actions & Hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle className="bg-white/10 border-white/15 text-white hover:bg-white/20" />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
              className="p-2.5 rounded-xl border border-white/15 bg-white/10 text-white hover:bg-white/20 hover:text-brand-cyan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden border-b border-white/15 bg-brand-midnight/98 backdrop-blur-2xl px-4 pt-3 pb-6 shadow-2xl text-white"
          >
            <div className="space-y-2 py-2 max-h-[75vh] overflow-y-auto">
              {navigationData.map((item) => (
                <div key={item.label} className="border-b border-white/10 pb-2">
                  <NavLink
                    to={item.href}
                    className={({ isActive }) =>
                      cn(
                        'block px-3 py-2 text-base font-semibold rounded-lg',
                        isActive
                          ? 'text-brand-cyan bg-white/10 font-bold'
                          : 'text-slate-200 hover:text-white'
                      )
                    }
                  >
                    {item.label}
                  </NavLink>
                  {item.children && (
                    <div className="pl-4 pr-2 py-1 grid grid-cols-1 gap-1">
                      {item.children.slice(0, 4).map((sub) => (
                        <Link
                          key={sub.href}
                          to={sub.href}
                          className="flex items-center gap-2 py-1.5 px-2 text-xs text-slate-300 hover:text-brand-cyan"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
                          <span>{sub.title}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4">
                <Link to="/contact" className="block w-full">
                  <Button variant="glow" size="md" className="w-full">
                    Schedule Consultation
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
