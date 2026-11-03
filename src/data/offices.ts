export interface Office {
  city: string;
  country: string;
  region: 'Americas' | 'EMEA' | 'APAC';
  isHQ?: boolean;
  address: string;
  phone: string;
  email: string;
  hours: string;
  coordinates: { x: number; y: number }; // Relative percentage coordinates on SVG map (0-100)
}

export const officesData: Office[] = [
  {
    city: 'New York',
    country: 'United States',
    region: 'Americas',
    isHQ: true,
    address: 'One World Trade Center, Suite 7800, New York, NY 10007',
    phone: '+1 (212) 555-0190',
    email: 'nyc@datanesttechnology.com',
    hours: 'Mon - Fri: 8:30 AM - 6:00 PM EST',
    coordinates: { x: 28, y: 35 },
  },
  {
    city: 'London',
    country: 'United Kingdom',
    region: 'EMEA',
    address: '1 Canada Square, Canary Wharf, London E14 5AA',
    phone: '+44 20 7946 0920',
    email: 'london@datanesttechnology.com',
    hours: 'Mon - Fri: 9:00 AM - 5:30 PM GMT',
    coordinates: { x: 48, y: 28 },
  },
  {
    city: 'Singapore',
    country: 'Singapore',
    region: 'APAC',
    address: 'Marina Bay Financial Centre, Tower 2, Singapore 018983',
    phone: '+65 6789 0123',
    email: 'singapore@datanesttechnology.com',
    hours: 'Mon - Fri: 9:00 AM - 6:00 PM SGT',
    coordinates: { x: 78, y: 58 },
  },
  {
    city: 'Frankfurt',
    country: 'Germany',
    region: 'EMEA',
    address: 'Main Tower, Neue Mainzer Str. 52, 60311 Frankfurt',
    phone: '+49 69 1234 5678',
    email: 'frankfurt@datanesttechnology.com',
    hours: 'Mon - Fri: 8:30 AM - 5:30 PM CET',
    coordinates: { x: 52, y: 30 },
  },
  {
    city: 'Zurich',
    country: 'Switzerland',
    region: 'EMEA',
    address: 'Gotthardstrasse 26, 8002 Zurich',
    phone: '+41 44 234 5678',
    email: 'zurich@datanesttechnology.com',
    hours: 'Mon - Fri: 8:30 AM - 5:30 PM CET',
    coordinates: { x: 53, y: 33 },
  },
  {
    city: 'Tokyo',
    country: 'Japan',
    region: 'APAC',
    address: 'Roppongi Hills Mori Tower, 6-10-1 Roppongi, Tokyo 106-6108',
    phone: '+81 3 5555 0142',
    email: 'tokyo@datanesttechnology.com',
    hours: 'Mon - Fri: 9:00 AM - 6:00 PM JST',
    coordinates: { x: 88, y: 38 },
  },
  {
    city: 'Bangalore',
    country: 'India',
    region: 'APAC',
    address: 'Global Technology Park, Outer Ring Road, Bellandur, Bangalore 560103',
    phone: '+91 80 4567 8900',
    email: 'bangalore@datanesttechnology.com',
    hours: 'Mon - Fri: 9:30 AM - 6:30 PM IST',
    coordinates: { x: 70, y: 52 },
  },
  {
    city: 'Sydney',
    country: 'Australia',
    region: 'APAC',
    address: 'International Towers, Barangaroo, Sydney NSW 2000',
    phone: '+61 2 8900 1234',
    email: 'sydney@datanesttechnology.com',
    hours: 'Mon - Fri: 9:00 AM - 5:00 PM AEST',
    coordinates: { x: 91, y: 80 },
  },
];

