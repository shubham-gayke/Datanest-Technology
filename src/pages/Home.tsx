import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Hero } from '@/components/sections/Hero';
import { Marquee } from '@/components/sections/Marquee';
import { StatsSection } from '@/components/sections/StatsSection';
import { ServicesGrid } from '@/components/sections/ServicesGrid';
import { IndustriesShowcase } from '@/components/sections/IndustriesShowcase';
import { WhyDatanest } from '@/components/sections/WhyDatanest';
import { TechStackStrip } from '@/components/sections/TechStackStrip';
import { CaseStudiesPreview } from '@/components/sections/CaseStudiesPreview';
import { TestimonialsSlider } from '@/components/sections/TestimonialsSlider';
import { InsightsPreview } from '@/components/sections/InsightsPreview';
import { CTABanner } from '@/components/sections/CTABanner';

export const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Datanest Technology | Engineering Intelligent Digital Futures</title>
        <meta
          name="description"
          content="Global IT services, cloud architecture, artificial intelligence, cybersecurity, and digital transformation consulting for Global 2000 enterprises."
        />
      </Helmet>

      <div>
        <Hero />
        <Marquee />
        <StatsSection />
        <ServicesGrid />
        <IndustriesShowcase />
        <WhyDatanest />
        <TechStackStrip />
        <CaseStudiesPreview />
        <TestimonialsSlider />
        <InsightsPreview />
        <CTABanner />
      </div>
    </>
  );
};
