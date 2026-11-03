export interface Industry {
  slug: string;
  title: string;
  tagline: string;
  icon: string;
  heroImage?: string;
  overview: string;
  challenges: string[];
  keySolutions: {
    title: string;
    description: string;
  }[];
  metrics: {
    stat: string;
    label: string;
  }[];
  clientHighlight: {
    client: string;
    result: string;
  };
}

export const industriesData: Industry[] = [
  {
    slug: 'banking-finance',
    title: 'Banking & Capital Markets',
    tagline: 'Powering high-frequency trading, fraud resilience, and open banking ecosystems.',
    icon: 'Landmark',
    overview: 'Financial institutions must balance rapid FinTech innovation with strict regulatory oversight. Datanest engineers resilient core banking solutions, real-time algorithmic fraud detection engines, and compliance-grade cloud data vaults that process billions in transactional throughput with microsecond latency.',
    challenges: [
      'Legacy mainframe dependence and sluggish batch cycles',
      'Sophisticated fraud and AML compliance requirements',
      'Skyrocketing consumer expectations for instant mobile banking',
      'Multi-jurisdictional financial data residency mandates',
    ],
    keySolutions: [
      {
        title: 'Core Banking Modernization',
        description: 'Decoupling monolithic legacy cores into event-driven microservices with zero transactional disruption.',
      },
      {
        title: 'Real-Time AI Fraud Prevention',
        description: 'Streaming graph neural networks evaluating risk signals in sub-15ms windows to stop unauthorized charges.',
      },
      {
        title: 'Open Banking & API Monetization',
        description: 'Secure, PSD2-compliant API portals enabling seamless FinTech partner integrations.',
      },
      {
        title: 'Algorithmic Trading & High-Throughput Compute',
        description: 'Ultra-low-latency order execution pipelines engineered in C++ and Go on optimized cloud instances.',
      },
    ],
    metrics: [
      { stat: '$1.4B+', label: 'Daily Transaction Volume Secured' },
      { stat: '99.999%', label: 'Platform Availability SLA' },
      { stat: '<15ms', label: 'Fraud Detection Latency' },
    ],
    clientHighlight: {
      client: 'Tier-1 International Bank',
      result: 'Migrated 14M accounts to an event-driven cloud core, slashing end-of-day settlement duration from 7 hours to 28 minutes.',
    },
  },
  {
    slug: 'healthcare',
    title: 'Healthcare & Life Sciences',
    tagline: 'Accelerating clinical breakthroughs, patient care, and HIPAA-compliant data lakes.',
    icon: 'Activity',
    overview: 'We empower health systems, pharmaceuticals, and medical innovators to deliver hyper-personalized care. Our solutions bridge electronic health records (EHR), genomic data pipelines, and connected IoMT devices within secure, HIPAA- and HITRUST-certified boundaries.',
    challenges: [
      'Disparate data silos across hospitals, labs, and clinics',
      'Strict regulatory penalties for patient data breaches (HIPAA/GDPR)',
      'High latency in clinical trials data harmonization',
      'Clinician burnout from tedious administrative documentation',
    ],
    keySolutions: [
      {
        title: 'Interoperable FHIR & EHR Platforms',
        description: 'Unified healthcare data hubs translating HL7, FHIR, and DICOM standards into real-time patient charts.',
      },
      {
        title: 'Clinical Generative AI Assistants',
        description: 'Ambient scribe technologies summarizing clinical encounters with high medical terminology accuracy.',
      },
      {
        title: 'IoMT Medical Device Telemetry',
        description: 'Secure IoT telemetry gateways capturing vital metrics from remote monitoring wearables.',
      },
      {
        title: 'Genomics & Drug Discovery Pipelines',
        description: 'High-performance cloud compute clusters running molecular dynamics simulations in parallel.',
      },
    ],
    metrics: [
      { stat: '25M+', label: 'Patient Records Secured' },
      { stat: '40%', label: 'Reduction in Clinical Documentation Time' },
      { stat: '100%', label: 'HIPAA & HITRUST Audit Compliance' },
    ],
    clientHighlight: {
      client: 'Global Biopharma Network',
      result: 'Accelerated biomarker clinical trial data synthesis by 65%, shortening drug candidate screening cycles by 4 months.',
    },
  },
  {
    slug: 'retail',
    title: 'Retail & E-Commerce',
    tagline: 'Driving unified omnichannel journeys, real-time inventory, and AI personalization.',
    icon: 'ShoppingBag',
    overview: 'Modern consumers demand frictionless journeys across web, mobile, and physical stores. Datanest builds headless commerce platforms, intelligent inventory routing algorithms, and hyper-personalized recommendation engines that drive customer lifetime value and eliminate stock-outs.',
    challenges: [
      'Fragmented data between in-store POS and digital storefronts',
      'Traffic spikes during seasonal sales overwhelming legacy systems',
      'Cart abandonment and impersonal digital shopping experiences',
      'Complex reverse logistics and inventory shrinkage',
    ],
    keySolutions: [
      {
        title: 'Headless & Composable Commerce',
        description: 'Decoupled frontends with sub-second page loads powered by microservices and edge caching.',
      },
      {
        title: 'AI Recommendation & Dynamic Pricing',
        description: 'Contextual deep-learning models boosting average order value (AOV) through individualized product feeds.',
      },
      {
        title: 'Unified Inventory & Order Management (OMS)',
        description: 'Real-time stock ledger unifying warehouses, distribution centers, and retail stores.',
      },
      {
        title: 'Customer Data Platforms (CDP)',
        description: 'Single customer view aggregating loyalty metrics, browsing history, and purchase patterns.',
      },
    ],
    metrics: [
      { stat: '+38%', label: 'Average Digital Revenue Growth' },
      { stat: '2.1x', label: 'Conversion Rate Improvement' },
      { stat: '100k+', label: 'Black Friday RPS Handled Without Glitch' },
    ],
    clientHighlight: {
      client: 'Leading Global Luxury Retailer',
      result: 'Implemented composable commerce architecture with sub-second page loads, boosting mobile checkout conversions by 34%.',
    },
  },
  {
    slug: 'manufacturing',
    title: 'Smart Manufacturing & Industry 4.0',
    tagline: 'Transforming factory floors into self-optimizing, predictive industrial hubs.',
    icon: 'Cog',
    overview: 'Connect physical shop floors with intelligent enterprise backbones. Datanest combines Industrial IoT (IIoT), digital twins, machine vision defect inspection, and predictive maintenance algorithms to minimize unplanned downtime and optimize overall equipment effectiveness (OEE).',
    challenges: [
      'Unscheduled equipment failures causing millions in downtime',
      'Siloed operational technology (OT) disconnected from enterprise IT',
      'Quality inconsistencies in high-speed assembly lines',
      'Volatile raw material costs and carbon footprint mandates',
    ],
    keySolutions: [
      {
        title: 'Industrial IoT & Edge Telemetry',
        description: 'Deploying edge compute nodes to capture vibration, temperature, and torque telemetry in sub-second intervals.',
      },
      {
        title: 'Predictive Maintenance Engines',
        description: 'AI models alerting floor managers weeks before critical mechanical failures occur.',
      },
      {
        title: 'Digital Twin Simulations',
        description: 'Virtual replicas of assembly lines simulating throughput bottlenecks and layout modifications.',
      },
      {
        title: 'Automated Computer Vision QA',
        description: 'High-speed camera feeds detecting microscopic surface defects at line speeds of 60 items per second.',
      },
    ],
    metrics: [
      { stat: '45%', label: 'Reduction in Unplanned Downtime' },
      { stat: '99.7%', label: 'Defect Detection Accuracy' },
      { stat: '22%', label: 'Energy Consumption Savings' },
    ],
    clientHighlight: {
      client: 'Automotive Powertrain Manufacturer',
      result: 'Integrated predictive vibration analytics across 4 plants, avoiding over $8.5M in unplanned catastrophic assembly downtime.',
    },
  },
  {
    slug: 'telecom',
    title: 'Telecommunications & 5G',
    tagline: 'Architecting software-defined networks, multi-access edge computing, and AI Ops.',
    icon: 'Radio',
    overview: 'As 5G networks mature, communications service providers (CSPs) must evolve from basic bit pipes into intelligent digital platforms. Datanest assists telecom leaders in deploying network functions virtualization (NFV), automated zero-touch provisioning, and edge-native application ecosystems.',
    challenges: [
      'Heavy capital expenditures in 5G infrastructure with monetization pressure',
      'Managing massive data streams from millions of connected 5G endpoints',
      'Manual, error-prone network configuration and truck rolls',
      'Churn from latency and dropped coverage in high-density areas',
    ],
    keySolutions: [
      {
        title: 'Cloud-Native 5G Core & Open RAN',
        description: 'Containerized network functions (CNFs) running on hyperscaler cloud infrastructure with automated autoscaling.',
      },
      {
        title: 'AI Ops & Automated Network Healing',
        description: 'Autonomous closed-loop orchestration systems mitigating network congestion before subscribers notice degradation.',
      },
      {
        title: 'Multi-Access Edge Computing (MEC)',
        description: 'Low-latency edge hosting for AR/VR, connected vehicles, and industrial automation.',
      },
      {
        title: 'Next-Gen BSS/OSS Platforms',
        description: 'Unified billing and customer care portals built for 5G enterprise slicing models.',
      },
    ],
    metrics: [
      { stat: '80M+', label: 'Connected Telecom Subscribers Supported' },
      { stat: '55%', label: 'Reduction in Network Trouble Tickets' },
      { stat: '<5ms', label: 'Edge Network Processing Latency' },
    ],
    clientHighlight: {
      client: 'National Mobile Operator',
      result: 'Rolled out zero-touch cloud-native network slice management, cutting new enterprise service activation from 6 weeks to 18 minutes.',
    },
  },
  {
    slug: 'logistics',
    title: 'Supply Chain & Logistics',
    tagline: 'Unlocking end-to-end freight visibility, route optimization AI, and warehouse robotics.',
    icon: 'Truck',
    overview: 'Global supply chains operate in perpetual volatility. Datanest provides logistics leaders with real-time tracking, multimodal route optimization, autonomous warehouse integration, and predictive demand planning to ensure on-time delivery at minimum operational cost.',
    challenges: [
      'Blind spots during cross-border maritime and intermodal transit',
      'Rising fuel expenses and volatile shipping carrier rates',
      'Labor shortages in fulfillment centers',
      'Inaccurate demand forecasting leading to either stock-outs or excess warehousing costs',
    ],
    keySolutions: [
      {
        title: 'Real-Time Global Freight Tracking',
        description: 'GPS and cellular IoT sensor feeds providing continuous temperature, humidity, and location updates for cargo.',
      },
      {
        title: 'Dynamic Routing & Load Optimization',
        description: 'Machine learning algorithms recalculating multimodal shipping routes based on weather, tolls, and port congestion.',
      },
      {
        title: 'Autonomous Warehouse Management (WMS)',
        description: 'Integrating automated guided vehicles (AGVs) and robotic picking systems with legacy enterprise ERPs.',
      },
      {
        title: 'Predictive Demand & Inventory Forecasting',
        description: 'Neural networks analyzing macro trends, promotional calendars, and lead times to optimize stock placement.',
      },
    ],
    metrics: [
      { stat: '18%', label: 'Fuel & Fleet Mileage Savings' },
      { stat: '99.4%', label: 'On-Time In-Full (OTIF) Delivery Rate' },
      { stat: '3x', label: 'Warehouse Pick-and-Pack Speed' },
    ],
    clientHighlight: {
      client: 'Continental Logistics Group',
      result: 'Deployed AI dynamic fleet route optimizer across 3,200 trucks, saving 1.2M gallons of diesel and lowering carbon emissions by 24%.',
    },
  },
];
