export interface StatItem {
  id: string;
  value: number;
  suffix: string;
  label: string;
  sublabel: string;
  prefix?: string;
}

export const statsData: StatItem[] = [
  {
    id: 'years',
    value: 15,
    suffix: '+',
    label: 'Years of Engineering Rigor',
    sublabel: 'Delivering mission-critical enterprise platforms globally',
  },
  {
    id: 'projects',
    value: 1200,
    suffix: '+',
    label: 'Enterprise Projects Delivered',
    sublabel: 'Across cloud, AI, data, and security architectures',
  },
  {
    id: 'countries',
    value: 40,
    suffix: '+',
    label: 'Countries Served Worldwide',
    sublabel: 'Supporting multinational operations across 5 continents',
  },
  {
    id: 'experts',
    value: 5000,
    suffix: '+',
    label: 'Technology Specialists',
    sublabel: 'Certified cloud architects, AI researchers, and engineers',
  },
  {
    id: 'retention',
    value: 99.4,
    suffix: '%',
    label: 'Client Partnership Retention',
    sublabel: 'Long-term trusted advisor to Global 2000 leaders',
  },
];

export const trustedClients = [
  { name: 'NexaCorp Financial', badge: 'Tier-1 Banking' },
  { name: 'OmniHealth Global', badge: 'Healthcare & Pharma' },
  { name: 'CloudScale Enterprises', badge: 'Hyperscale Cloud' },
  { name: 'Vanguard Retail', badge: 'Global Retail' },
  { name: 'Apex Logistics Intl', badge: 'Supply Chain' },
  { name: 'CyberShield Systems', badge: 'Critical Defense' },
  { name: 'TeleNova Networks', badge: 'Telecom 5G' },
  { name: 'AeroDynamics Corp', badge: 'Smart Manufacturing' },
  { name: 'Strata Energy Partners', badge: 'Energy & Utilities' },
  { name: 'Finova Capital', badge: 'Capital Markets' },
];
