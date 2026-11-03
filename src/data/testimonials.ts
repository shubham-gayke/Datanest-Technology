export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatarSeed: string;
  rating: number;
  highlight: string;
}

export const testimonialsData: Testimonial[] = [
  {
    id: '1',
    quote: 'Datanest was instrumental in modernizing our core banking infrastructure. Their team engineered a seamless migration for 14 million customer accounts without a single second of unplanned downtime. Their technical rigor is unmatched in the industry.',
    author: 'Henrik Lindqvist',
    role: 'Global Head of Core Banking',
    company: 'Nordic Sovereign Financial Group',
    avatarSeed: 'Henrik',
    rating: 5,
    highlight: '€32M Annual Cost Reduction',
  },
  {
    id: '2',
    quote: 'The generative AI documentation platform Datanest delivered transformed clinician productivity overnight. Our physicians recovered 2.4 hours every day, allowing them to focus entirely on patient care rather than administrative paperwork.',
    author: 'Dr. Sarah Kensington',
    role: 'Chief Medical Information Officer',
    company: 'Metropolitan Health Alliance',
    avatarSeed: 'Sarah',
    rating: 5,
    highlight: '2.4 Hours Daily Physician Time Recovered',
  },
  {
    id: '3',
    quote: 'Migrating to a headless, composable architecture with Datanest was the best digital decision we made. Our mobile page load times dropped from nearly 5 seconds to under 800ms, and our conversion rates surged by 48%.',
    author: 'Antoine Moreau',
    role: 'Chief Digital Officer',
    company: 'L’Étoile Global Retail',
    avatarSeed: 'Antoine',
    rating: 5,
    highlight: '+48% Mobile Conversion Rate',
  },
  {
    id: '4',
    quote: 'Datanest’s Zero Trust security transformation gave our board complete confidence. Their team brought deep defense expertise, successfully air-gapping our critical operational technology while modernizing our threat detection pipelines.',
    author: 'Rachel Chen',
    role: 'VP of Cybersecurity & Infrastructure',
    company: 'Pacific Grid & Utilities',
    avatarSeed: 'Rachel',
    rating: 5,
    highlight: '100% Zero-Trust Compliance Achieved',
  },
];

