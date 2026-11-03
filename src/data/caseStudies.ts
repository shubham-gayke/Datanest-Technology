export interface CaseStudy {
  slug: string;
  title: string;
  category: 'Cloud' | 'AI & ML' | 'FinTech' | 'Modernization' | 'Cybersecurity' | 'Data';
  client: string;
  industry: string;
  summary: string;
  challenge: string;
  solution: string;
  outcomes: {
    metric: string;
    label: string;
  }[];
  architecturalHighlights: string[];
  technologies: string[];
  readTime: string;
}

export const caseStudiesData: CaseStudy[] = [
  {
    slug: 'pan-european-bank-cloud-migration',
    title: 'Migrating 14 Million Accounts to Cloud-Native Banking Architecture',
    category: 'FinTech',
    client: 'Tier-1 Pan-European Retail Bank',
    industry: 'Banking & Financial Services',
    summary: 'A complete modernization of a 30-year-old COBOL mainframe core into a high-availability event-driven AWS ecosystem with zero customer downtime.',
    challenge: 'The institution faced mounting technical debt, prohibitive mainframe licensing fees exceeding €40M annually, and batch settlement cycles that locked customer transfers for hours every evening.',
    solution: 'Datanest architected a multi-year strangler-fig migration roadmap. We deployed an event-driven Kafka layer synchronizing mainframe transactions in real-time to a containerized microservices suite running on Amazon EKS.',
    outcomes: [
      { metric: '€32M', label: 'Annual Infrastructure Cost Savings' },
      { metric: '99.999%', label: 'Platform Availability Maintained' },
      { metric: '28 min', label: 'Settlement Window (down from 7 hrs)' },
      { metric: 'Zero', label: 'Unplanned Customer Outages During Cutover' },
    ],
    architecturalHighlights: [
      'Dual-run real-time transactional reconciliation across 14M accounts',
      'Immutable audit trails utilizing AWS QLDB and encrypted S3 buckets',
      'Active-active multi-region failover across Frankfurt and Dublin',
    ],
    technologies: ['AWS', 'Amazon EKS', 'Apache Kafka', 'Java Spring Boot', 'Terraform', 'PostgreSQL'],
    readTime: '6 min read',
  },
  {
    slug: 'health-network-generative-ai',
    title: 'Autonomous Clinical Documentation & Diagnostic Assist Platform',
    category: 'AI & ML',
    client: 'Integrated Health & Hospital Network',
    industry: 'Healthcare & Life Sciences',
    summary: 'Building a private HIPAA-compliant LLM system that translates ambient doctor-patient conversations into structured EHR notes, freeing 2 hours per clinician daily.',
    challenge: 'Over 65% of physicians reported burnout linked to after-hours documentation. Generic commercial AI models could not comply with strict patient privacy standards or medical nomenclature nuances.',
    solution: 'We engineered a sovereign, on-premises AI inference stack powered by fine-tuned open-source medical LLMs with multi-stage RAG, integrated directly into the hospital Epic EHR system via FHIR APIs.',
    outcomes: [
      { metric: '2.4 hrs', label: 'Saved Daily Per Physician' },
      { metric: '98.6%', label: 'Clinical Note Accuracy Rating' },
      { metric: '100%', label: 'HIPAA & HITRUST Audit Compliance' },
      { metric: '+42%', label: 'Increase in Clinician Job Satisfaction' },
    ],
    architecturalHighlights: [
      'Zero external data egress with private vLLM clusters on NVIDIA H100s',
      'Hybrid semantic search cross-checking against PubMed and ICD-10 codices',
      'Real-time audio streaming transcription with multi-speaker diarization',
    ],
    technologies: ['vLLM', 'Python', 'PyTorch', 'LangChain', 'Pinecone', 'Epic FHIR APIs', 'Docker'],
    readTime: '7 min read',
  },
  {
    slug: 'global-freight-iot-visibility',
    title: 'Real-Time Intermodal Freight Telemetry & Fleet Route Optimization',
    category: 'Data',
    client: 'Multinational Intermodal Logistics Carrier',
    industry: 'Supply Chain & Logistics',
    summary: 'A petabyte-scale IoT streaming platform monitoring 45,000 refrigerated shipping containers globally with predictive temperature failure alerts.',
    challenge: 'Cargo spoilage during cross-ocean transit caused $25M in annual insurance claims, while disconnected fleet dispatch systems burned millions in excess diesel.',
    solution: 'Datanest built a global IoT ingestion fabric on Microsoft Azure, utilizing Azure IoT Hub and Databricks streaming pipelines to analyze container sensor feeds in real-time.',
    outcomes: [
      { metric: '$18M', label: 'Reduction in Spoilage Claims' },
      { metric: '14%', label: 'Fleet Fuel Consumption Savings' },
      { metric: '45k+', label: 'Active Connected Vessels & Trucks Monitored' },
      { metric: '<3 sec', label: 'Anomaly Alert Latency Worldwide' },
    ],
    architecturalHighlights: [
      'Edge analytics on onboard gateway devices buffering during satellite dropouts',
      'Graph algorithms optimizing multimodal cargo transfers across rail and port',
      'Automated smart contract triggers releasing carrier payments upon delivery confirmation',
    ],
    technologies: ['Azure IoT Hub', 'Databricks', 'Apache Spark', 'Snowflake', 'Power BI', 'Golang'],
    readTime: '5 min read',
  },
  {
    slug: 'luxury-retail-composable-commerce',
    title: 'Transforming Omnichannel Retail with Sub-Second Composable Commerce',
    category: 'Modernization',
    client: 'Global Haute Horlogerie & Fashion House',
    industry: 'Retail & E-Commerce',
    summary: 'Replacing a rigid legacy monolith with a modern headless commerce platform serving 30 countries and 12 localized languages.',
    challenge: 'Sluggish 4.8-second mobile page loads and poor international localization led to an intolerable 72% mobile checkout drop-off rate during peak luxury launches.',
    solution: 'Datanest engineered a microservices-based headless commerce architecture utilizing Next.js at the edge, integrated with commercetools, Algolia AI search, and Stripe.',
    outcomes: [
      { metric: '750ms', label: 'Average Global Mobile Page Load' },
      { metric: '+48%', label: 'Mobile Conversion Rate Increase' },
      { metric: '120k', label: 'Concurrent VIP Shoppers During Drops' },
      { metric: '30+', label: 'Countries Launched in Under 6 Months' },
    ],
    architecturalHighlights: [
      'Static edge generation with incremental regeneration (ISR)',
      'Global multi-currency checkout routing through localized payment rails',
      'Real-time boutique inventory sync connecting 180 physical flagship stores',
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'commercetools', 'Stripe', 'Algolia', 'Tailwind CSS'],
    readTime: '5 min read',
  },
  {
    slug: 'smart-factory-computer-vision',
    title: 'Sub-Millimeter Defect Detection at Industrial Assembly Speeds',
    category: 'AI & ML',
    client: 'Tier-1 Electric Vehicle Battery Manufacturer',
    industry: 'Smart Manufacturing',
    summary: 'Deploying edge computer vision and deep learning cameras inspecting EV pouch cells at 40 parts per second to prevent thermal runaway flaws.',
    challenge: 'Human visual inspection was fatigue-prone and could only catch surface defects down to 0.5mm, missing micro-punctures that could cause battery catastrophic failures.',
    solution: 'We engineered an edge-native vision system featuring high-resolution line-scan cameras and specialized TensorRT models detecting defects down to 0.05mm.',
    outcomes: [
      { metric: '99.98%', label: 'Defect Detection Accuracy' },
      { metric: '0.05mm', label: 'Smallest Flaw Detected' },
      { metric: 'Zero', label: 'Escaped Battery Cell Flaws in 12 Months' },
      { metric: '$12M', label: 'Scrap Reduction Savings' },
    ],
    architecturalHighlights: [
      'Hardware-accelerated inference with NVIDIA Jetson AGX Orin edge boards',
      'Closed-loop pneumatic reject actuators triggered in 12 milliseconds',
      'Continuous federated learning across 8 global manufacturing plants',
    ],
    technologies: ['TensorRT', 'C++', 'Python', 'OpenCV', 'PyTorch', 'NVIDIA Jetson', 'MQTT'],
    readTime: '6 min read',
  },
  {
    slug: 'global-defense-zero-trust',
    title: 'Zero Trust Architecture for a Critical Infrastructure Provider',
    category: 'Cybersecurity',
    client: 'Transcontinental Energy Grid Operator',
    industry: 'Energy & Utilities',
    summary: 'Securing SCADA and operational technology (OT) networks across 12,000 square miles against state-sponsored advanced persistent threats (APTs).',
    challenge: 'The convergence of legacy physical substation gear with modern smart meters created unsegmented network exposure vulnerable to lateral cyber infiltration.',
    solution: 'Datanest designed and deployed an end-to-end Zero Trust security model, enforcing micro-segmentation, hardware-backed identity, and continuous AI anomaly detection.',
    outcomes: [
      { metric: '100%', label: 'OT/IT Substation Air-Gapping & Microsegmentation' },
      { metric: '<3 min', label: 'Average Automated Threat Isolation' },
      { metric: 'Zero', label: 'Unauthorized Lateral Breaches' },
      { metric: '100%', label: 'NERC-CIP & NIST Regulatory Compliance' },
    ],
    architecturalHighlights: [
      'Software-defined perimeters (SDP) with cryptographically authenticated endpoints',
      'Real-time behavioral telemetry correlation using Splunk and Palo Alto Prisma',
      'Continuous automated red team attack simulations and canary traps',
    ],
    technologies: ['Palo Alto Networks', 'HashiCorp Vault', 'Splunk', 'CrowdStrike', 'Cisco ISE', 'Python'],
    readTime: '8 min read',
  },
];
