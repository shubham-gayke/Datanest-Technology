export interface JobOpening {
  id: string;
  title: string;
  department: 'Engineering' | 'AI & Data' | 'Cloud & DevOps' | 'Cybersecurity' | 'Consulting';
  location: string;
  type: 'Full-time' | 'Hybrid' | 'Remote';
  experience: 'Mid-Level' | 'Senior' | 'Principal / Staff' | 'Director';
  summary: string;
  responsibilities: string[];
  requirements: string[];
}

export const careersData: JobOpening[] = [
  {
    id: 'lead-ai-engineer',
    title: 'Lead Generative AI Solutions Architect',
    department: 'AI & Data',
    location: 'New York, USA (Hybrid)',
    type: 'Full-time',
    experience: 'Principal / Staff',
    summary: 'Lead the design and deployment of sovereign enterprise LLMs, agentic orchestration swarms, and RAG architectures for Global 2000 clients.',
    responsibilities: [
      'Architect production-grade enterprise LLM pipelines with high throughput and low latency',
      'Design safety guardrails, evaluations, and vector database retrieval strategies',
      'Collaborate with client CTOs to identify and scale high-ROI cognitive automation use cases',
      'Mentor and guide a global team of machine learning research engineers',
    ],
    requirements: [
      '7+ years experience in software engineering with 3+ years dedicated to NLP/LLMs',
      'Deep fluency with PyTorch, vLLM, LangChain, Hugging Face, and vector stores (Pinecone, Milvus)',
      'Proven track record taking ML models from research to high-volume production',
      'MS or PhD in Computer Science or equivalent field',
    ],
  },
  {
    id: 'principal-cloud-architect',
    title: 'Principal Cloud & FinOps Architect',
    department: 'Cloud & DevOps',
    location: 'London, UK (Hybrid)',
    type: 'Full-time',
    experience: 'Principal / Staff',
    summary: 'Spearhead multi-cloud enterprise migrations, landing zone designs, and automated FinOps governance across AWS and Azure.',
    responsibilities: [
      'Formulate multi-region cloud migration blueprints for regulated banking and healthcare clients',
      'Implement automated infrastructure-as-code and FinOps cost governance policies',
      'Lead incident post-mortems and establish site reliability engineering standards',
      'Drive executive architecture review boards and technical governance',
    ],
    requirements: [
      '10+ years in distributed systems architecture and enterprise infrastructure',
      'AWS Solutions Architect Professional or Azure Solutions Architect Expert certification',
      'Mastery of Terraform, Kubernetes, Istio, and GitOps workflows',
      'Exceptional executive communication and stakeholder alignment skills',
    ],
  },
  {
    id: 'senior-fullstack-dev',
    title: 'Senior Full-Stack Platform Engineer (React & Go)',
    department: 'Engineering',
    location: 'Remote (Global)',
    type: 'Remote',
    experience: 'Senior',
    summary: 'Build high-performance web applications, customer portals, and distributed microservices with clean code and sub-second latency.',
    responsibilities: [
      'Build responsive, accessible, and delightful user interfaces with React, Next.js, and TypeScript',
      'Develop scalable, concurrent microservices in Go and Node.js',
      'Optimize bundle sizes, core web vitals, and database query latency',
      'Participate in code reviews, TDD practices, and architectural discussions',
    ],
    requirements: [
      '5+ years building production full-stack web applications',
      'Deep expertise in modern React (v18+), TypeScript, Tailwind CSS, and state machines',
      'Strong proficiency in Golang or modern backend runtimes with SQL optimization',
      'Passion for craftsmanship, micro-interactions, and accessibility',
    ],
  },
  {
    id: 'cybersecurity-redteam',
    title: 'Senior Zero Trust & Penetration Testing Specialist',
    department: 'Cybersecurity',
    location: 'Frankfurt, Germany (Hybrid)',
    type: 'Full-time',
    experience: 'Senior',
    summary: 'Conduct advanced adversarial attack simulations, API vulnerability audits, and implement Zero Trust access models for mission-critical networks.',
    responsibilities: [
      'Execute white-box and black-box penetration tests across web apps, APIs, and cloud infrastructure',
      'Architect microsegmentation policies and software-defined perimeters (SDP)',
      'Design threat hunting playbooks for 24/7 autonomous SOC teams',
      'Deliver actionable remediation reports to executive CISO teams',
    ],
    requirements: [
      'OSCP, OSWE, CISSP, or equivalent high-tier offensive security credentials',
      '5+ years hands-on penetration testing and red teaming experience',
      'In-depth knowledge of cloud security standards (AWS GuardDuty, Azure Defender, Prisma)',
      'Proficiency in Python/Go scripting for automated exploit validation',
    ],
  },
  {
    id: 'data-engineer-lead',
    title: 'Staff Data Lakehouse Engineer (Snowflake & Spark)',
    department: 'AI & Data',
    location: 'Bangalore, India (Hybrid)',
    type: 'Full-time',
    experience: 'Senior',
    summary: 'Build real-time streaming pipelines, medallion lakehouse architectures, and dbt transformation workflows handling billions of daily records.',
    responsibilities: [
      'Design scalable ETL/ELT pipelines using Snowflake, Databricks, and Apache Kafka',
      'Enforce data contracts, automated schema drift alerts, and governance policies',
      'Optimize query compute costs and partition pruning strategies',
      'Collaborate with analytics engineers and data scientists to democratize metrics',
    ],
    requirements: [
      '6+ years experience in enterprise data engineering at scale',
      'Advanced proficiency in SQL, Python, dbt, Apache Spark, and Apache Airflow',
      'Hands-on experience with modern cloud lakehouse architectures',
      'Strong problem-solving skills and commitment to data quality guarantees',
    ],
  },
  {
    id: 'enterprise-sap-consultant',
    title: 'Principal SAP S/4HANA Transformation Consultant',
    department: 'Consulting',
    location: 'Zurich, Switzerland (Hybrid)',
    type: 'Full-time',
    experience: 'Principal / Staff',
    summary: 'Guide multinational industrial clients through Greenfield and Brownfield SAP S/4HANA transitions and business process re-engineering.',
    responsibilities: [
      'Conduct process mining and target operating model workshops with finance and supply chain leaders',
      'Lead functional configuration, custom ABAP/Fiori integration, and legacy data migration dry runs',
      'Manage risk logs, stakeholder escalations, and organizational change management plans',
    ],
    requirements: [
      '10+ years consulting experience in SAP ERP ecosystems with 2+ full-lifecycle S/4HANA go-lives',
      'Deep functional mastery of FICO, MM, or SD modules',
      'Experience leading multi-million-dollar digital transformation engagements',
      'Fluency in English (German or French is a significant asset)',
    ],
  },
];

export const culturePillars = [
  {
    title: 'Radical Engineering Rigor',
    description: 'We prioritize clean architecture, automated testing, and zero-defect deployments over quick and brittle hacks.',
    icon: 'ShieldCheck',
  },
  {
    title: 'Global Remote & Hybrid Flexibility',
    description: 'Work from our state-of-the-art regional hubs or from anywhere in the world with flexible, outcome-focused hours.',
    icon: 'Globe',
  },
  {
    title: 'Continuous Upskilling & Innovation Labs',
    description: 'Every team member receives a $5,000 annual learning stipend, paid certification days, and 10% time for R&D projects.',
    icon: 'BookOpen',
  },
  {
    title: 'Diversity, Equity & Psychological Safety',
    description: 'A vibrant global community representing over 45 nationalities where every voice is heard, respected, and celebrated.',
    icon: 'Users',
  },
];

