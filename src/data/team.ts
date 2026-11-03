export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  department: string;
  location: string;
  avatarSeed: string;
  linkedin: string;
}

export const teamData: TeamMember[] = [
  {
    name: 'Dr. Aris Thorne',
    role: 'Chief Executive Officer & Founder',
    bio: 'Former VP of Enterprise Engineering at global tech conglomerates with 22+ years architecting hyperscale distributed systems and driving international digital transformation.',
    department: 'Executive Leadership',
    location: 'New York, USA',
    avatarSeed: 'Aris',
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Elena Rostova',
    role: 'Chief Technology Officer',
    bio: 'Pioneer in distributed systems and cloud-native architecture. Author of three patents in low-latency event processing and former Principal Architect at AWS.',
    department: 'Engineering & Innovation',
    location: 'London, UK',
    avatarSeed: 'Elena',
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Marcus Vance',
    role: 'Chief AI Officer',
    bio: 'PhD in Machine Learning from Stanford. Former lead researcher in generative models, specializing in deterministic enterprise LLM governance and agentic workflows.',
    department: 'AI & Data Sciences',
    location: 'San Francisco, USA',
    avatarSeed: 'Marcus',
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Priya Sundaram',
    role: 'Chief Delivery Officer',
    bio: '20+ years leading cross-border delivery centers across APAC, EMEA, and the Americas. Champion of Agile scale, Zero Defect engineering, and client satisfaction.',
    department: 'Global Delivery Operations',
    location: 'Singapore',
    avatarSeed: 'Priya',
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Julian Sterling',
    role: 'Chief Information Security Officer',
    bio: 'Former cybersecurity advisor to national infrastructure agencies. CISSP and CISM certified expert in Zero Trust, offensive red teaming, and DevSecOps governance.',
    department: 'Cyber Defense & Trust',
    location: 'Frankfurt, Germany',
    avatarSeed: 'Julian',
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Kavita Mehta',
    role: 'EVP, Global Enterprise Consulting',
    bio: 'Former senior partner at Big 4 consultancy. Specialist in SAP S/4HANA transformations, M&A IT consolidation, and enterprise business process re-engineering.',
    department: 'Strategic Consulting',
    location: 'Bangalore, India',
    avatarSeed: 'Kavita',
    linkedin: 'https://linkedin.com',
  },
];
