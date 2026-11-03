import React, { useState } from 'react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';
import { Cpu, Cloud, Terminal, Database, Shield, Radio } from 'lucide-react';
import { cn } from '@/lib/utils';

const categories = [
  { id: 'all', label: 'All Ecosystem', icon: null },
  { id: 'ai', label: 'AI & Machine Learning', icon: <Cpu className="w-4 h-4" /> },
  { id: 'cloud', label: 'Cloud & Infrastructure', icon: <Cloud className="w-4 h-4" /> },
  { id: 'devops', label: 'DevOps & SRE', icon: <Terminal className="w-4 h-4" /> },
  { id: 'data', label: 'Data & Lakehouse', icon: <Database className="w-4 h-4" /> },
  { id: 'cyber', label: 'Cybersecurity', icon: <Shield className="w-4 h-4" /> },
  { id: 'iot', label: 'IoT & Edge', icon: <Radio className="w-4 h-4" /> },
];

const technologies = [
  { name: 'PyTorch', category: 'ai', desc: 'Deep learning & neural model training' },
  { name: 'vLLM', category: 'ai', desc: 'High-throughput LLM inference engine' },
  { name: 'LangChain & LlamaIndex', category: 'ai', desc: 'RAG & cognitive agent orchestration' },
  { name: 'Hugging Face', category: 'ai', desc: 'Open model ecosystem & fine-tuning' },
  { name: 'Pinecone / Milvus', category: 'ai', desc: 'High-scale vector database indexing' },

  { name: 'Amazon Web Services', category: 'cloud', desc: 'Hyperscale cloud compute & serverless' },
  { name: 'Microsoft Azure', category: 'cloud', desc: 'Enterprise hybrid cloud & identity' },
  { name: 'Google Cloud Platform', category: 'cloud', desc: 'Data analytics & AI infrastructure' },
  { name: 'Terraform & OpenTofu', category: 'cloud', desc: 'Declarative infrastructure as code' },

  { name: 'Kubernetes & EKS', category: 'devops', desc: 'Enterprise container orchestration' },
  { name: 'ArgoCD & GitOps', category: 'devops', desc: 'Continuous automated declarative delivery' },
  { name: 'GitHub Actions', category: 'devops', desc: 'Modern CI/CD automated build pipelines' },
  { name: 'Istio Service Mesh', category: 'devops', desc: 'Zero trust mTLS traffic routing' },

  { name: 'Snowflake', category: 'data', desc: 'Cloud data warehouse & compute engine' },
  { name: 'Databricks & Spark', category: 'data', desc: 'Lakehouse & distributed big data' },
  { name: 'Apache Kafka', category: 'data', desc: 'Real-time event streaming bus' },
  { name: 'dbt (data build tool)', category: 'data', desc: 'Governed SQL transformation workflows' },

  { name: 'CrowdStrike Falcon', category: 'cyber', desc: 'Next-gen endpoint detection & response' },
  { name: 'Palo Alto Networks', category: 'cyber', desc: 'Zero trust firewall & Prisma cloud' },
  { name: 'HashiCorp Vault', category: 'cyber', desc: 'Dynamic secrets & encryption keys' },
  { name: 'Splunk SIEM', category: 'cyber', desc: 'Real-time security telemetry & analytics' },

  { name: 'NVIDIA Jetson & TensorRT', category: 'iot', desc: 'Hardware accelerated edge intelligence' },
  { name: 'MQTT & OPC-UA', category: 'iot', desc: 'Industrial factory floor messaging' },
  { name: 'Azure IoT Hub', category: 'iot', desc: 'Bi-directional connected fleet telemetry' },
];

export const TechStackStrip: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredTech =
    activeCategory === 'all'
      ? technologies
      : technologies.filter((t) => t.category === activeCategory);

  return (
    <section className="py-20 bg-white dark:bg-brand-midnight transition-colors border-y border-slate-200 dark:border-white/5">
      <Container>
        <SectionHeading
          badge="Technology Stack"
          badgeVariant="blue"
          title="Battle-Tested"
          highlight="Enterprise Technologies"
          description="We engineer solutions utilizing industry-leading cloud frameworks, neural networks, and fault-tolerant distributed systems."
        />

        {/* Filter Pills */}
        <div className="flex items-center justify-start lg:justify-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {categories.map((cat) => {
            const isSelected = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  'flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all border',
                  isSelected
                    ? 'bg-brand-blue text-white border-brand-blue shadow-sm'
                    : 'bg-slate-50 dark:bg-brand-card/60 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-white/10 hover:border-brand-blue/30'
                )}
              >
                {cat.icon}
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredTech.map((tech, idx) => (
            <Reveal key={tech.name} animation="fade-up" delay={idx * 0.03}>
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-brand-card/40 border border-slate-200 dark:border-white/10 hover:border-brand-blue/40 dark:hover:border-brand-cyan/40 hover:-translate-y-1 transition-all">
                <div className="font-heading font-bold text-sm text-brand-navy dark:text-white truncate">
                  {tech.name}
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 line-clamp-1">
                  {tech.desc}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
};

