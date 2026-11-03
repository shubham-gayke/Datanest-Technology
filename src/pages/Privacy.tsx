import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Container } from '@/components/ui/Container';
import { ShieldCheck, Lock, Globe } from 'lucide-react';

export const Privacy: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy & Data Protection | Datanest Technology</title>
        <meta
          name="description"
          content="Datanest Technology enterprise privacy policy, data sovereignty commitments, GDPR, HIPAA, and ISO 27001 compliance standards."
        />
      </Helmet>

      <section className="pt-32 pb-16 bg-brand-midnight text-white relative">
        <Container size="md">
          <span className="text-xs uppercase font-bold tracking-widest text-brand-cyan">
            Legal & Compliance
          </span>
          <h1 className="text-3xl sm:text-5xl font-heading font-extrabold tracking-tight mt-2">
            Privacy Policy & Data Sovereignty
          </h1>
          <p className="text-slate-400 text-sm mt-3">
            Last Updated: February 2026 &bull; Effective globally across all operating jurisdictions
          </p>
        </Container>
      </section>

      <section className="py-20 bg-white dark:bg-brand-midnight text-slate-700 dark:text-slate-300 transition-colors">
        <Container size="md">
          <div className="prose dark:prose-invert max-w-none space-y-8 text-sm sm:text-base leading-relaxed">
            <div>
              <h2 className="text-xl sm:text-2xl font-heading font-bold text-brand-navy dark:text-white">
                1. Executive Commitment to Data Sovereignty
              </h2>
              <p className="mt-2">
                Datanest Technology Inc. ("Datanest", "we", "us", or "our") operates as a global enterprise technology consulting and systems architecture provider. We adhere to the highest global standards of information security, data governance, and privacy compliance, including GDPR (EU/UK), CCPA/CPRA (California), HIPAA (US Healthcare), and ISO/IEC 27001:2022 standards.
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-heading font-bold text-brand-navy dark:text-white">
                2. Enterprise AI & Zero Model Leakage Guarantee
              </h2>
              <p className="mt-2">
                In all artificial intelligence, machine learning, and cognitive computing engagements, Datanest upholds a strict Zero Public Leakage policy:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-slate-600 dark:text-slate-400">
                <li>No client data, prompts, or proprietary telemetry are ever submitted to public, third-party generative AI models.</li>
                <li>All models are fine-tuned and executed strictly within the client’s designated private Virtual Private Cloud (VPC) or sovereign on-premise compute boundary.</li>
                <li>Client datasets remain 100% the exclusive property and intellectual asset of the client.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-heading font-bold text-brand-navy dark:text-white">
                3. Information We Collect
              </h2>
              <p className="mt-2">
                When you interact with our website or engage our consulting services, we may collect:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-slate-600 dark:text-slate-400">
                <li><strong>Professional Identity:</strong> Name, work email address, phone number, corporate title, and company affiliation submitted via consultation requests.</li>
                <li><strong>Technical Usage:</strong> IP address, browser type, device telemetry, and interaction logs captured strictly for site security and DDoS mitigation.</li>
                <li><strong>Candidate Submissions:</strong> Resumes, employment history, and portfolios submitted via our Careers portal.</li>
              </ul>
            </div>

            <div id="cookies">
              <h2 className="text-xl sm:text-2xl font-heading font-bold text-brand-navy dark:text-white">
                4. Cookies & Tracking Protocols
              </h2>
              <p className="mt-2">
                We utilize strictly necessary session cookies for site performance, light/dark theme preference persistence, and security verification. We do not sell, rent, or monetize user data with third-party behavioral advertising brokers.
              </p>
            </div>

            <div id="security">
              <h2 className="text-xl sm:text-2xl font-heading font-bold text-brand-navy dark:text-white">
                5. Security Measures & SOC 2 Certification
              </h2>
              <p className="mt-2">
                All data transmission is encrypted using TLS 1.3 in transit and AES-256 at rest. Our systems and development facilities undergo annual independent SOC 2 Type II audits and third-party penetration testing.
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-heading font-bold text-brand-navy dark:text-white">
                6. Contact the Data Protection Officer (DPO)
              </h2>
              <p className="mt-2">
                For questions regarding this policy or to exercise rights of access, rectification, or erasure, please contact our Office of the Data Protection Officer at:
              </p>
              <div className="p-4 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 mt-3 font-mono text-xs">
                Email: privacy@datanesttechnology.com<br />
                Address: Datanest Technology Inc., One World Trade Center, Suite 7800, New York, NY 10007<br />
                Attn: Legal & Compliance Department
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};
