import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Container } from '@/components/ui/Container';

export const Terms: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service | Datanest Technology</title>
        <meta
          name="description"
          content="Terms and conditions governing the use of Datanest Technology website and enterprise consulting engagements."
        />
      </Helmet>

      <section className="pt-32 pb-16 bg-brand-midnight text-white relative">
        <Container size="md">
          <span className="text-xs uppercase font-bold tracking-widest text-brand-cyan">
            Legal & Compliance
          </span>
          <h1 className="text-3xl sm:text-5xl font-heading font-extrabold tracking-tight mt-2">
            Terms of Service
          </h1>
          <p className="text-slate-400 text-sm mt-3">
            Last Updated: February 2026 &bull; Corporate Enterprise Agreement
          </p>
        </Container>
      </section>

      <section className="py-20 bg-white dark:bg-brand-midnight text-slate-700 dark:text-slate-300 transition-colors">
        <Container size="md">
          <div className="prose dark:prose-invert max-w-none space-y-8 text-sm sm:text-base leading-relaxed">
            <div>
              <h2 className="text-xl sm:text-2xl font-heading font-bold text-brand-navy dark:text-white">
                1. Acceptance of Terms
              </h2>
              <p className="mt-2">
                By accessing or using the website of Datanest Technology Inc. ("Datanest"), you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you are entering into these terms on behalf of a corporation or entity, you represent that you hold appropriate authority.
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-heading font-bold text-brand-navy dark:text-white">
                2. Enterprise Consulting Engagements & Master Services Agreements
              </h2>
              <p className="mt-2">
                All client architectural advisory, engineering retainers, and managed services are governed by separate Master Services Agreements (MSA) and Statements of Work (SOW) executed between Datanest and the enterprise client. Nothing on this website constitutes a binding offer of service or fixed contractual warranty.
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-heading font-bold text-brand-navy dark:text-white">
                3. Intellectual Property Rights
              </h2>
              <p className="mt-2">
                The Datanest Technology brand mark, vector logos, website design, and published research whitepapers are the exclusive intellectual property of Datanest Technology Inc. All deliverables produced under client SOWs transfer exclusively to client ownership upon milestone signoff as stipulated in our MSA.
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-heading font-bold text-brand-navy dark:text-white">
                4. Disclaimer of Warranties & Limitation of Liability
              </h2>
              <p className="mt-2">
                This website and its informational resources are provided "as is" without warranty of any kind. In no event shall Datanest Technology Inc. be liable for any indirect, incidental, or consequential damages resulting from the use of informational articles or case studies published on this site.
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-heading font-bold text-brand-navy dark:text-white">
                5. Governing Law & Jurisdiction
              </h2>
              <p className="mt-2">
                These terms shall be governed by and construed in accordance with the laws of the State of New York, USA, without regard to its conflict of law principles.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};
