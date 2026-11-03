export interface Service {
  slug: string;
  title: string;
  tagline: string;
  icon: string;
  badge?: string;
  shortDescription: string;
  overview: string;
  keyOfferings: {
    title: string;
    description: string;
  }[];
  process: {
    step: string;
    title: string;
    description: string;
  }[];
  benefits: {
    metric: string;
    label: string;
    description: string;
  }[];
  technologies: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const servicesData: Service[] = [
  {
    slug: 'cloud-computing',
    title: 'Cloud Computing & Infrastructure',
    tagline: 'Architecting resilient, cost-optimized, hyperscale cloud ecosystems.',
    icon: 'Cloud',
    badge: 'Core Competency',
    shortDescription: 'Migrate, modernize, and scale enterprise workloads across AWS, Microsoft Azure, and Google Cloud with military-grade resilience and automated FinOps governance.',
    overview: 'Datanest provides turnkey multi-cloud and hybrid infrastructure engineering. From legacy mainframe re-platforming to cloud-native microservices orchestration, our 1,400+ certified architects ensure your transition reduces TCO, eliminates vendor lock-in, and maximizes system availability up to 99.999%.',
    keyOfferings: [
      {
        title: 'Multi-Cloud & Hybrid Cloud Strategy',
        description: 'Bespoke workload placement analysis, compliance governance frameworks, and federated identity integration across AWS, Azure, and GCP.',
      },
      {
        title: 'Cloud Migration & Mainframe Modernization',
        description: 'Zero-disruption factory migration pipelines leveraging automated refactoring, re-platforming, and containerization.',
      },
      {
        title: 'Cloud FinOps & Cost Optimization',
        description: 'Continuous cost anomaly detection, reservation planning, rightsizing automation, and unit economic dashboards cutting waste by 35-50%.',
      },
      {
        title: 'Disaster Recovery & High Availability',
        description: 'Multi-region active-active architectures with sub-second RPO and near-instant RTO disaster recovery simulations.',
      },
    ],
    process: [
      { step: '01', title: 'Workload Discovery', description: 'Comprehensive dependency mapping, compliance evaluation, and TCO benchmarking.' },
      { step: '02', title: 'Target Architecture', description: 'Designing high-availability Landing Zones, infrastructure-as-code blueprints, and security perimeter.' },
      { step: '03', title: 'Staged Migration', description: 'Execution of zero-downtime cutovers using automated blue-green pipelines and canary deployments.' },
      { step: '04', title: 'Autonomous FinOps', description: 'Continuous AI-driven cost governance, capacity optimization, and 24/7 site reliability monitoring.' },
    ],
    benefits: [
      { metric: '42%', label: 'Average Cloud TCO Reduction', description: 'Derived through automated rightsizing and reserved instance governance.' },
      { metric: '99.999%', label: 'System Uptime SLA', description: 'Across mission-critical production workloads deployed globally.' },
      { metric: '4x', label: 'Faster Time to Market', description: 'Accelerated through automated GitOps landing zones.' },
    ],
    technologies: ['AWS', 'Microsoft Azure', 'Google Cloud', 'Terraform', 'Kubernetes', 'Docker', 'OpenShift', 'Datadog'],
    faqs: [
      {
        question: 'How does Datanest minimize disruption during complex legacy migrations?',
        answer: 'We utilize an incremental strangler-fig pattern combined with automated dual-run validation to guarantee data consistency and zero transactional downtime during cutover phases.',
      },
      {
        question: 'What cloud security certifications do your architects maintain?',
        answer: 'Our senior engineers hold AWS Certified Solutions Architect Professional, Azure Solutions Architect Expert, and Google Cloud Professional Cloud Architect accreditations, backed by ISO 27001 and SOC 2 Type II compliance.',
      },
    ],
  },
  {
    slug: 'ai-machine-learning',
    title: 'Artificial Intelligence & Machine Learning',
    tagline: 'Enterprise-grade generative AI, autonomous agent swarms, and predictive intelligence.',
    icon: 'Cpu',
    badge: 'Trending Innovation',
    shortDescription: 'Empower your enterprise with production-ready Generative AI, RAG pipelines, fine-tuned domain LLMs, and autonomous agent systems engineered for high governance and deterministic accuracy.',
    overview: 'Move beyond experimental prototypes into enterprise-grade cognitive platforms. Datanest crafts private AI ecosystems that integrate seamlessly with your internal data lakehouse, honoring strict data lineage, zero data leaks, and transparent guardrails.',
    keyOfferings: [
      {
        title: 'Private Enterprise LLMs & RAG Architectures',
        description: 'Domain-adapted model fine-tuning with hybrid vector search, knowledge graph retrieval, and hallucinations safeguards.',
      },
      {
        title: 'Autonomous Agentic Workflows',
        description: 'Multi-agent orchestration systems capable of executing multi-step business logic, decision-making, and document processing.',
      },
      {
        title: 'Computer Vision & Real-time Sensor AI',
        description: 'Edge-deployed visual inspection, defect detection, and optical character recognition for smart facilities.',
      },
      {
        title: 'MLOps & Responsible AI Governance',
        description: 'Full lifecycle model tracking, bias auditing, drift remediation, and model registry infrastructure.',
      },
    ],
    process: [
      { step: '01', title: 'AI Opportunity Audit', description: 'Feasibility analysis, business case ROI modeling, and high-value use-case prioritization.' },
      { step: '02', title: 'Data Prep & Vectorization', description: 'Curating proprietary domain embeddings, chunking strategy, and vector database ingestion.' },
      { step: '03', title: 'Model Tuning & Guardrails', description: 'LoRA fine-tuning, safety filtering, prompt engineering, and deterministic integration tests.' },
      { step: '04', title: 'MLOps Deployment', description: 'Continuous inference optimization, telemetry tracking, and latency minimization.' },
    ],
    benefits: [
      { metric: '70%', label: 'Efficiency Gain', description: 'Automating high-frequency document analysis and decisioning.' },
      { metric: '<120ms', label: 'Average Inference Latency', description: 'Engineered for real-time customer and employee interactions.' },
      { metric: '100%', label: 'Data Sovereignty', description: 'Zero telemetry or prompt leakage to external public model providers.' },
    ],
    technologies: ['PyTorch', 'TensorFlow', 'LangChain', 'LlamaIndex', 'vLLM', 'Hugging Face', 'Pinecone', 'Milvus', 'NVIDIA Triton'],
    faqs: [
      {
        question: 'Will our proprietary corporate data be used to train external public models?',
        answer: 'Never. All Datanest enterprise AI deployments run in your isolated VPC or dedicated on-premise infrastructure, ensuring 100% data residency and IP preservation.',
      },
      {
        question: 'How do you prevent hallucinations in high-stakes industries like finance or healthcare?',
        answer: 'We deploy multi-stage Retrieval-Augmented Generation (RAG) coupled with semantic guardrails, deterministic rule engines, and automated citation cross-referencing.',
      },
    ],
  },
  {
    slug: 'data-analytics',
    title: 'Enterprise Data & Analytics',
    tagline: 'Transform disparate data silos into unified, real-time decision intelligence.',
    icon: 'BarChart3',
    badge: 'High Impact',
    shortDescription: 'Modernize your data stack with cloud lakehouses, streaming event buses, governed semantic layers, and self-service analytics powering predictive executive insights.',
    overview: 'Raw data is only an asset when it delivers actionable decisions. Datanest engineers petabyte-scale data pipelines using Snowflake, Databricks, and Apache Kafka to provide single-pane-of-glass visibility across your entire corporate value chain.',
    keyOfferings: [
      {
        title: 'Modern Data Lakehouse Architecture',
        description: 'Unified storage and compute engines unifying batch and streaming ingestion with ACID transactional guarantees.',
      },
      {
        title: 'Real-Time Event Streaming & CDC',
        description: 'High-throughput Kafka and Flink pipelines powering sub-second transactional sync and fraud response.',
      },
      {
        title: 'Data Mesh & Enterprise Governance',
        description: 'Decentralized domain data ownership supported by automated lineage, cataloging, and RBAC security.',
      },
      {
        title: 'Executive BI & Semantic Modeling',
        description: 'Unified metrics layer, automated anomaly detection, and intuitive interactive executive cockpits.',
      },
    ],
    process: [
      { step: '01', title: 'Data Landscape Discovery', description: 'Cataloging disparate schema, source systems, latency requirements, and compliance obligations.' },
      { step: '02', title: 'Lakehouse Blueprints', description: 'Establishing bronze/silver/gold medallion architecture and semantic business definitions.' },
      { step: '03', title: 'Pipeline Orchestration', description: 'Building automated dbt, Airflow, and streaming connectors with strict automated data quality tests.' },
      { step: '04', title: 'Self-Serve Democratization', description: 'Deploying role-based dashboards, natural language querying, and executive KPI hubs.' },
    ],
    benefits: [
      { metric: '10x', label: 'Faster Query Speeds', description: 'Achieved through modern columnar storage and lakehouse partition optimization.' },
      { metric: '99.9%', label: 'Data Accuracy Assurance', description: 'Enforced via automated contract validation and schema drift monitors.' },
      { metric: '65%', label: 'Reduction in Reporting Cycle', description: 'Turning monthly manual aggregation into real-time streaming telemetry.' },
    ],
    technologies: ['Snowflake', 'Databricks', 'Apache Spark', 'Apache Kafka', 'dbt', 'Airflow', 'Power BI', 'Tableau'],
    faqs: [
      {
        question: 'What is the advantage of a Data Lakehouse over a traditional Data Warehouse?',
        answer: 'A lakehouse merges the low storage cost and unstructured data flexibility of a data lake with the ACID transactions, data governance, and lightning query performance of a warehouse.',
      },
      {
        question: 'How do you handle sensitive PII and GDPR compliance in analytics?',
        answer: 'We employ automated column-level hashing, dynamic data masking, differential privacy techniques, and automated retention policies tailored to regional jurisdictions.',
      },
    ],
  },
  {
    slug: 'cybersecurity',
    title: 'Cybersecurity & Digital Trust',
    tagline: 'Defending enterprise assets with proactive Zero Trust resilience.',
    icon: 'ShieldCheck',
    badge: 'Critical Defense',
    shortDescription: 'Comprehensive cyber defense: Zero Trust architecture, 24/7 autonomous SOC monitoring, cloud security posture management (CSPM), and rigorous penetration testing.',
    overview: 'Modern enterprises face continuous, highly sophisticated cyber threats. Datanest delivers an impenetrable cyber fabric that safeguards intellectual property, customer data, and operational continuity across distributed hybrid architectures.',
    keyOfferings: [
      {
        title: 'Zero Trust Architecture Implementation',
        description: 'Micro-segmentation, identity-as-the-perimeter, continuous adaptive risk evaluation, and conditional access.',
      },
      {
        title: '24/7 Managed Detection & Response (MDR)',
        description: 'AI-assisted Security Operations Center (SOC) hunting threats, containing incidents, and executing automated playbooks.',
      },
      {
        title: 'Cloud Security & DevSecOps',
        description: 'Shift-left security scanners in CI/CD pipelines, container runtime defenses, and continuous posture compliance.',
      },
      {
        title: 'Penetration Testing & Red Teaming',
        description: 'Adversarial attack simulations, API vulnerability audits, and social engineering resilience assessments.',
      },
    ],
    process: [
      { step: '01', title: 'Threat Surface Audit', description: 'Comprehensive vulnerability scans, asset discovery, and compliance gap assessments.' },
      { step: '02', title: 'Zero Trust Design', description: 'Formulating least-privilege policies, identity provider integrations, and crypto protocols.' },
      { step: '03', title: 'Hardening & Tooling', description: 'Deploying EDR/XDR agents, SIEM correlation engines, and automated patch management.' },
      { step: '04', title: 'Continuous Vigilance', description: 'Round-the-clock telemetry surveillance, automated incident containment, and tabletop drills.' },
    ],
    benefits: [
      { metric: '<15 min', label: 'Mean Time to Detect (MTTD)', description: 'Industry-leading threat identification utilizing AI telemetry correlation.' },
      { metric: 'Zero', label: 'Critical Breaches', description: 'Maintained across all enterprise clients under our managed SOC care.' },
      { metric: '100%', label: 'Audit Readiness', description: 'Guaranteed compliance with ISO 27001, SOC 2, HIPAA, and NIST 800-53.' },
    ],
    technologies: ['CrowdStrike', 'Palo Alto Networks', 'Splunk', 'Microsoft Sentinel', 'HashiCorp Vault', 'Wiz', 'Tenable'],
    faqs: [
      {
        question: 'How does your Zero Trust model accommodate remote and hybrid workforces?',
        answer: 'We deploy secure access service edge (SASE) and software-defined perimeters (SDP) that verify device posture and identity continuously before granting just-in-time access.',
      },
      {
        question: 'Can Datanest assist with urgent post-incident recovery?',
        answer: 'Yes, our Cyber Incident Response Unit operates with rapid on-call readiness, providing immediate forensics, malware neutralization, and clean recovery pipelines.',
      },
    ],
  },
  {
    slug: 'application-development',
    title: 'Application Development & Modernization',
    tagline: 'Crafting fault-tolerant, high-performance digital platforms built for hyperscale.',
    icon: 'Code2',
    badge: 'Enterprise Core',
    shortDescription: 'Engineer modern cloud-native web applications, mobile platforms, and distributed microservices with clean architectural patterns, high throughput, and delightful UX.',
    overview: 'From consumer-facing banking portals handling millions of daily transactions to complex supply-chain orchestration platforms, Datanest turns ambitious digital visions into robust, secure, and extensible production software.',
    keyOfferings: [
      {
        title: 'Full-Stack Cloud-Native Engineering',
        description: 'Modern frontends with React, Next.js, and TypeScript coupled with resilient Go, Node.js, and Java Spring backends.',
      },
      {
        title: 'Legacy Monolith to Microservices',
        description: 'Domain-Driven Design (DDD) decomposing brittle monoliths into autonomous, independently deployable services.',
      },
      {
        title: 'Cross-Platform Mobile Ecosystems',
        description: 'Native-grade iOS and Android experiences leveraging React Native and Flutter with offline-first synchronization.',
      },
      {
        title: 'Enterprise API Gateways & Integration',
        description: 'GraphQL federated schemas, RESTful API governance, event-driven webhooks, and third-party partner portals.',
      },
    ],
    process: [
      { step: '01', title: 'Architecture Blueprint', description: 'Domain modeling, data access patterns, scalability forecasting, and UI/UX design systems.' },
      { step: '02', title: 'Agile Sprint Sprints', description: 'Two-week iterative cycles with continuous integration, automated unit and e2e testing.' },
      { step: '03', title: 'Hardening & Performance', description: 'Load testing to 100k+ RPS, chaos engineering, memory profiling, and security auditing.' },
      { step: '04', title: 'Global Launch & Scale', description: 'Multi-region CDN deployment, real-user monitoring (RUM), and seamless SLA operations.' },
    ],
    benefits: [
      { metric: '99.99%', label: 'Application Availability', description: 'Engineered with fault-tolerant self-healing container pods.' },
      { metric: '5x', label: 'Release Velocity', description: 'From monthly monolithic deployments to multiple seamless production pushes daily.' },
      { metric: '<80ms', label: 'Global API Response Time', description: 'Optimized through edge compute caching and efficient query routing.' },
    ],
    technologies: ['React', 'TypeScript', 'Next.js', 'Node.js', 'Go', 'Java Spring Boot', 'GraphQL', 'PostgreSQL', 'Redis'],
    faqs: [
      {
        question: 'Do you provide full ownership of the intellectual property and codebase?',
        answer: 'Yes, 100% of the developed code, architecture blueprints, test suites, and documentation are the exclusive intellectual property of the client upon milestone delivery.',
      },
      {
        question: 'How do you guarantee software quality and zero regression?',
        answer: 'We mandate test-driven development (TDD) with mandatory 85%+ code coverage, automated SonarQube static analysis, and end-to-end Cypress/Playwright regression testing.',
      },
    ],
  },
  {
    slug: 'devops-automation',
    title: 'DevOps, SRE & Platform Engineering',
    tagline: 'Bridging engineering and operations with automated resilience and GitOps.',
    icon: 'Terminal',
    badge: 'Developer Velocity',
    shortDescription: 'Accelerate your delivery pipelines with GitOps, internal developer platforms (IDP), Kubernetes clustering, chaos engineering, and automated site reliability management.',
    overview: 'High-performing engineering teams ship features safely and continuously. Datanest builds turnkey internal developer platforms that empower developers to provision infrastructure, run automated tests, and deploy to production with total autonomy and zero friction.',
    keyOfferings: [
      {
        title: 'GitOps & CI/CD Pipeline Engineering',
        description: 'ArgoCD and GitHub Actions workflows with automated canary releases, progressive rollouts, and rollback triggers.',
      },
      {
        title: 'Enterprise Kubernetes & Service Mesh',
        description: 'Production-ready EKS, GKE, and AKS clusters with Istio service mesh, mTLS security, and traffic routing.',
      },
      {
        title: 'Internal Developer Platforms (IDP)',
        description: 'Self-service developer portals (Backstage) reducing developer onboarding time from weeks to hours.',
      },
      {
        title: 'Site Reliability Engineering & Chaos Testing',
        description: 'SLO/SLI budget tracking, automated synthetic monitoring, and chaos experiments (Gremlin/Litmus) to uncover flaws.',
      },
    ],
    process: [
      { step: '01', title: 'DevOps Maturity Assessment', description: 'Evaluating DORA metrics, deployment friction, lead time for changes, and failure rates.' },
      { step: '02', title: 'Pipeline Modernization', description: 'Refactoring build pipelines into declarative, containerized, and cached workflows.' },
      { step: '03', title: 'Infrastructure as Code', description: 'Standardizing Terraform / OpenTofu modules with policy-as-code guards (OPA).' },
      { step: '04', title: 'Observability & SRE', description: 'OpenTelemetry instrumentation, distributed tracing, and automated on-call escalation matrices.' },
    ],
    benefits: [
      { metric: '85%', label: 'Reduction in Deployment Lead Time', description: 'Shrinking the journey from git commit to production rollout.' },
      { metric: '60%', label: 'Decrease in Change Failure Rate', description: 'Achieved through automated canary testing and pre-merge validation.' },
      { metric: '90%', label: 'Developer Onboarding Acceleration', description: 'Using standardized containerized development environments.' },
    ],
    technologies: ['Kubernetes', 'ArgoCD', 'GitHub Actions', 'Terraform', 'Prometheus', 'Grafana', 'Istio', 'Backstage'],
    faqs: [
      {
        question: 'What are DORA metrics and why do you focus on them?',
        answer: 'DORA (DevOps Research and Assessment) metrics track Deployment Frequency, Lead Time for Changes, Change Failure Rate, and Time to Restore Service — the gold standards for engineering velocity and stability.',
      },
      {
        question: 'Can you help our teams transition from legacy Jenkins to modern GitOps?',
        answer: 'Yes, we specialize in seamless migration strategies from legacy CI tools to modern GitHub Actions/GitLab CI and ArgoCD pipelines with zero developer downtime.',
      },
    ],
  },
  {
    slug: 'erp-digital-transformation',
    title: 'ERP & Digital Transformation',
    tagline: 'Modernizing core business backbones with intelligent ERP and CRM ecosystems.',
    icon: 'Layers',
    badge: 'Enterprise Core',
    shortDescription: 'Implement, migrate, and customize SAP S/4HANA, Salesforce, and Microsoft Dynamics to harmonize global supply chains, finance, and customer lifecycles.',
    overview: 'A company is only as agile as its operational core. Datanest partners with Global 2000 enterprises to modernize their ERP landscapes, unifying fragmented regional data into an intelligent, automated digital spine.',
    keyOfferings: [
      {
        title: 'SAP S/4HANA Green & Brownfield Deployments',
        description: 'Comprehensive migration methodologies minimizing risk while unlocking real-time financial reporting.',
      },
      {
        title: 'Salesforce Enterprise Architecture',
        description: 'Full-cycle Service Cloud, Sales Cloud, and MuleSoft integration for 360-degree customer relationship management.',
      },
      {
        title: 'Robotic Process Automation (RPA)',
        description: 'UiPath bots automating repetitive accounting, invoice matching, compliance filing, and inventory sync.',
      },
      {
        title: 'Supply Chain Digitization',
        description: 'Real-time ERP connector integration for automated purchase order fulfillment and supplier portals.',
      },
    ],
    process: [
      { step: '01', title: 'Process Mining', description: 'Mapping real-world transaction paths using Celonis to identify operational bottlenecks.' },
      { step: '02', title: 'System Blueprinting', description: 'Designing unified master data governance, ledger structures, and regional tax modules.' },
      { step: '03', title: 'Data Migration & Dry Runs', description: 'Rigorous transactional reconciliation through multiple simulated go-live runs.' },
      { step: '04', title: 'Hypercare & Continuous Value', description: '24/7 dedicated support team ensuring seamless post-launch adoption.' },
    ],
    benefits: [
      { metric: '30%', label: 'Operational Efficiency Boost', description: 'Eliminating manual spreadsheet reconciliation across multi-currency operations.' },
      { metric: '99.9%', label: 'Financial Data Integrity', description: 'Verified across millions of global daily transactions.' },
      { metric: '50%', label: 'Reduction in Month-End Close Time', description: 'Accelerating financial visibility for executive leadership.' },
    ],
    technologies: ['SAP S/4HANA', 'Salesforce', 'MuleSoft', 'Microsoft Dynamics 365', 'UiPath', 'Celonis'],
    faqs: [
      {
        question: 'Should we choose a greenfield or brownfield approach for our ERP upgrade?',
        answer: 'During our discovery sprint, we evaluate your legacy technical debt versus custom modifications to recommend whether a clean-slate greenfield or phased brownfield migration delivers optimal ROI.',
      },
      {
        question: 'How do you ensure user adoption among non-technical personnel?',
        answer: 'We embed organizational change management (OCM) frameworks, localized training modules, and in-app interactive walkthroughs from day one.',
      },
    ],
  },
  {
    slug: 'it-consulting',
    title: 'Strategic IT Consulting & Managed Services',
    tagline: 'Empowering C-level leaders with visionary technology roadmaps and resilient operations.',
    icon: 'Briefcase',
    badge: 'Executive Advisory',
    shortDescription: 'Navigate technology complexity with vCIO advisory, enterprise architecture governance, vendor selection, ITIL-aligned 24/7 infrastructure management, and IT audits.',
    overview: 'In an era of relentless technological disruption, strategic foresight is your primary competitive moat. Datanest provides high-caliber management consulting and enterprise IT leadership that aligns digital investments directly with corporate revenue objectives.',
    keyOfferings: [
      {
        title: 'vCIO & Executive Technology Advisory',
        description: 'Fractional CIO/CTO leadership providing high-level strategy, board presentations, and capital allocation guidance.',
      },
      {
        title: 'Enterprise Architecture Governance (TOGAF)',
        description: 'Establishing scalable architectural blueprints, technology standards, and innovation sandbox protocols.',
      },
      {
        title: '24/7 Global Managed IT Services',
        description: 'Comprehensive tier 1 to tier 4 support across endpoints, networks, cloud resources, and corporate software.',
      },
      {
        title: 'IT Due Diligence & M&A Integration',
        description: 'Technical debt audits, software IP assessments, and cyber exposure evaluation for private equity and corporate acquisitions.',
      },
    ],
    process: [
      { step: '01', title: 'Strategic Alignment', description: 'Executive workshops to understand 3-5 year corporate growth targets and technology hurdles.' },
      { step: '02', title: 'Technology Capability Review', description: 'Auditing existing systems, licensing costs, developer velocity, and operational vulnerabilities.' },
      { step: '03', title: 'Target Operating Model', description: 'Crafting the 36-month technology roadmap with phased milestones and investment horizons.' },
      { step: '04', title: 'Execution Oversight', description: 'Establishing KPI scorecards, vendor SLAs, and steering committee governance.' },
    ],
    benefits: [
      { metric: '3.8x', label: 'Average ROI on IT Spend', description: 'Unlocked through vendor rationalization and strategic infrastructure modernization.' },
      { metric: '<3 min', label: 'Average SLA Incident Response', description: 'Provided by our global follow-the-sun 24/7 technical desk.' },
      { metric: '98%', label: 'Executive Stakeholder Satisfaction', description: 'Reflecting transparent communication and strategic delivery.' },
    ],
    technologies: ['ITIL v4', 'TOGAF', 'ServiceNow', 'Jira Service Management', 'PagerDuty', 'Freshservice'],
    faqs: [
      {
        question: 'What size companies benefit most from your IT consulting services?',
        answer: 'We serve mid-market growth enterprises ($50M+) looking to scale into global markets as well as Global 2000 enterprises navigating complex multi-entity consolidation.',
      },
      {
        question: 'How do you structure consulting engagements?',
        answer: 'We offer flexible engagement models including milestone-driven fixed-scope roadmaps, ongoing advisory retainers, and SLA-guaranteed managed services.',
      },
    ],
  },
];
