export interface NavItem {
  label: string;
  href: string;
  isMega?: boolean;
  children?: {
    title: string;
    description: string;
    href: string;
    icon?: string;
    badge?: string;
  }[];
}

export const navigationData: NavItem[] = [
  {
    label: 'Services',
    href: '/services',
    isMega: true,
    children: [
      {
        title: 'Cloud Computing & Infrastructure',
        description: 'Multi-cloud strategy, AWS/Azure/GCP architectures, serverless, and cloud-native migration.',
        href: '/services/cloud-computing',
        icon: 'Cloud',
      },
      {
        title: 'AI & Machine Learning',
        description: 'Enterprise generative AI, autonomous agent workflows, predictive intelligence, and LLM fine-tuning.',
        href: '/services/ai-machine-learning',
        icon: 'Cpu',
        badge: 'Trending',
      },
      {
        title: 'Enterprise Data & Analytics',
        description: 'Modern data lakes, real-time streaming architectures, Snowflake/Databricks, and BI governance.',
        href: '/services/data-analytics',
        icon: 'BarChart3',
      },
      {
        title: 'Cybersecurity & Digital Trust',
        description: 'Zero Trust architecture, DevSecOps, SOC operations, threat intelligence, and compliance audit.',
        href: '/services/cybersecurity',
        icon: 'ShieldCheck',
      },
      {
        title: 'Application Development & Modernization',
        description: 'Microservices architecture, legacy mainframe migration, React/Next.js, and high-load backend engineering.',
        href: '/services/application-development',
        icon: 'Code2',
      },
      {
        title: 'DevOps, SRE & Platform Engineering',
        description: 'Kubernetes orchestration, automated CI/CD pipelines, GitOps, and 99.999% uptime reliability.',
        href: '/services/devops-automation',
        icon: 'Terminal',
      },
      {
        title: 'ERP & Digital Transformation',
        description: 'SAP S/4HANA implementation, Salesforce ecosystem, and global business process re-engineering.',
        href: '/services/erp-digital-transformation',
        icon: 'Layers',
      },
      {
        title: 'IT Consulting & Managed Services',
        description: '24/7 global IT operations, ITIL service management, enterprise architecture, and vCIO advisory.',
        href: '/services/it-consulting',
        icon: 'Briefcase',
      },
    ],
  },
  {
    label: 'Industries',
    href: '/industries',
    children: [
      {
        title: 'Banking & Capital Markets',
        description: 'FinTech, algorithmic trading platforms, core banking migration, and fraud detection.',
        href: '/industries/banking-finance',
        icon: 'Landmark',
      },
      {
        title: 'Healthcare & Life Sciences',
        description: 'HIPAA-compliant telehealth, genomic data pipelines, and medical device IoT.',
        href: '/industries/healthcare',
        icon: 'Activity',
      },
      {
        title: 'Retail & E-Commerce',
        description: 'Omnichannel commerce platforms, AI recommendation engines, and inventory logistics.',
        href: '/industries/retail',
        icon: 'ShoppingBag',
      },
      {
        title: 'Manufacturing 4.0',
        description: 'Industrial IoT, smart robotics integration, digital twins, and predictive maintenance.',
        href: '/industries/manufacturing',
        icon: 'Cog',
      },
      {
        title: 'Telecom & 5G',
        description: 'Next-gen network virtualization, edge computing nodes, and BSS/OSS modernization.',
        href: '/industries/telecom',
        icon: 'Radio',
      },
      {
        title: 'Supply Chain & Logistics',
        description: 'End-to-end freight visibility, route optimization AI, and warehouse robotics.',
        href: '/industries/logistics',
        icon: 'Truck',
      },
    ],
  },
  {
    label: 'Case Studies',
    href: '/case-studies',
  },
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Careers',
    href: '/careers',
  },
  {
    label: 'Insights',
    href: '/insights',
  },
];

export const footerLinks = {
  solutions: [
    { label: 'Cloud Architecture', href: '/services/cloud-computing' },
    { label: 'Generative AI Systems', href: '/services/ai-machine-learning' },
    { label: 'Enterprise Data Lakehouse', href: '/services/data-analytics' },
    { label: 'Zero Trust Security', href: '/services/cybersecurity' },
    { label: 'Platform Engineering & SRE', href: '/services/devops-automation' },
    { label: 'SAP & Digital Core', href: '/services/erp-digital-transformation' },
  ],
  company: [
    { label: 'About Datanest', href: '/about' },
    { label: 'Leadership & Board', href: '/about#leadership' },
    { label: 'Milestones & History', href: '/about#milestones' },
    { label: 'Global Delivery Centers', href: '/about#global-presence' },
    { label: 'Careers & Culture', href: '/careers' },
    { label: 'Awards & Accreditations', href: '/about#awards' },
  ],
  insights: [
    { label: 'Research & Reports', href: '/insights' },
    { label: 'Engineering Blog', href: '/insights' },
    { label: 'Customer Stories', href: '/case-studies' },
    { label: 'Executive Perspectives', href: '/insights' },
    { label: 'Press Releases', href: '/insights' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Cookie Preferences', href: '/privacy#cookies' },
    { label: 'Security & Compliance', href: '/privacy#security' },
  ],
  socials: [
    { name: 'LinkedIn', href: 'https://linkedin.com', icon: 'Linkedin' },
    { name: 'Twitter/X', href: 'https://twitter.com', icon: 'Twitter' },
    { name: 'GitHub', href: 'https://github.com', icon: 'Github' },
    { name: 'YouTube', href: 'https://youtube.com', icon: 'Youtube' },
  ],
};

