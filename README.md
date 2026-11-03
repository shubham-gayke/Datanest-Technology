# Datanest Technology — Production Corporate Website

> **Tagline**: *"Engineering Intelligent Digital Futures"*  
> **Brand Identity**: Global IT services and enterprise consulting (positioning aligned with Accenture, TCS, Infosys, and Wipro).

---

## Overview

Datanest Technology is an enterprise-grade corporate web platform engineered with **React 18**, **Vite**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. It showcases mission-critical solutions across Multi-Cloud Architecture, Sovereign Generative AI, Enterprise Data Lakehouse, Zero Trust Cybersecurity, SRE & Platform Engineering, and Core Modernization.

---

## Key Highlights & Architectural Features

- **Enterprise Design System**:
  - Color palette: Deep Navy (`#0A1330`), Midnight Navy (`#060B1B`), Electric Blue (`#2563EB`), Cyan (`#06B6D4`), Violet (`#7C3AED`), Light Slate (`#F8FAFC`).
  - Google Fonts: Heading font `Sora`, body font `Plus Jakarta Sans` / `Inter`.
  - Consistent 8px spacing scale, rounded-2xl cards, subtle glassmorphism, and neon gradient glows.
  - Full Dark Mode / Light Mode support persisted in `localStorage`.
- **High-Impact Interactive Micro-Interactions**:
  - Interactive HTML5 canvas floating network node cluster in the hero section.
  - Custom subtle glowing cursor follower for desktop (auto-disabled on touch devices).
  - Lenis smooth scrolling with top-edge gradient scroll progress indicator bar.
  - Framer Motion scroll-reveal wrappers (`Reveal`) respecting `prefers-reduced-motion`.
  - Infinite auto-scrolling trusted-by client marquee with hover-pause.
  - IntersectionObserver-powered number counters (`15+ Years`, `1,200+ Projects`, `40+ Countries`, `5,000+ Specialists`).
- **Complete Information Architecture (Multi-Page Routing)**:
  - **Home**: Hero, Marquee, Stats Counter, 8-Service Matrix, 6-Industry Matrix, Why Datanest Parallax, Tech Stack, Case Studies, Testimonials Slider, Insights, and Consultation CTA.
  - **About Us**: Founding story, Strategic Compass (Vision, Mission, Values), Interactive Milestones Timeline (2011–2026), Executive Leadership Team, and Enterprise Compliance Badges (ISO 27001, SOC 2 Type II, AWS Premier Partner, GCP Premier Partner).
  - **Services**: Overview catalog with search + 8 dedicated dynamic detail pages (`/services/:slug`) with key offerings, 4-step delivery lifecycle, quantified metrics, technology badges, and accordion FAQs.
  - **Industries**: 6 sector deep dives (`/industries/:slug`) for Banking & Capital Markets, Healthcare & Life Sciences, Retail & E-Commerce, Smart Manufacturing, Telecom & 5G, and Logistics.
  - **Case Studies**: Filterable directory (All, Cloud, AI & ML, FinTech, Modernization, Cybersecurity, Data) + comprehensive detail pages with challenge, solution, and architectural highlights.
  - **Careers**: Culture, EVP, Employee Benefits, filterable open jobs list by department/location + **Interactive "Apply Now" Modal** with Zod schema validation, resume upload simulation, 1.5s simulated submit with loading spinner, and celebratory confetti.
  - **Insights & Whitepapers**: Searchable technical blog with reading time, category filters, and detailed article view with key takeaways, table of contents, and author bio.
  - **Contact Us**: Enterprise consultation form with full Zod validation (Name, Work Email, Phone, Company, Service, Scope, Message, Consent), 1.5s simulated submission delay, celebratory confetti, confirmation modal, toast notification, and global office locator with interactive SVG map.
  - **Global Presence**: Interactive stylized SVG world map with pulsing location markers for New York HQ, London, Singapore, Frankfurt, Zurich, Tokyo, Bangalore, and Sydney.
  - **404 Page & Legal**: Interactive 404 with broken circuit node animation, and full Privacy Policy & Terms of Service pages.

---

## Folder Structure

```
datanest-technology/
├── index.html                   # HTML entry point with meta tags & Google Fonts
├── package.json                 # Dependencies & build scripts
├── postcss.config.js            # PostCSS configuration
├── tailwind.config.js           # Tailwind theme tokens, keyframes & animations
├── tsconfig.json                # TypeScript compiler configuration
├── vite.config.ts               # Vite configuration with chunk splitting & path aliases
├── public/
│   ├── favicon.svg              # Scalable SVG brand mark
│   └── assets/
│       └── Logo.jpeg            # Original brand asset
└── src/
    ├── assets/                  # Brand vectors & imagery
    ├── components/
    │   ├── layout/
    │   │   ├── Navbar.tsx       # Mega-menu, mobile drawer, scroll-aware blur
    │   │   ├── Footer.tsx       # Corporate links, newsletter form, compliance status
    │   │   ├── ScrollProgress.tsx # Top gradient scroll indicator
    │   │   ├── CursorFollower.tsx # Desktop micro-cursor
    │   │   ├── Preloader.tsx    # Snappy branded loader
    │   │   └── ScrollToTop.tsx  # Automatic scroll reset on route change
    │   ├── ui/
    │   │   ├── Button.tsx       # Primary, secondary, outline, glow variants
    │   │   ├── Card.tsx         # Hover-lift card with gradient border glow
    │   │   ├── Badge.tsx        # Pill badge with status dot
    │   │   ├── SectionHeading.tsx # Animated title with gradient highlight
    │   │   ├── Container.tsx    # Standardized 8px container
    │   │   ├── Reveal.tsx       # Framer Motion scroll-reveal wrapper
    │   │   ├── StatCounter.tsx  # Animated numeric counter
    │   │   ├── Accordion.tsx    # Accessible collapsible FAQ accordion
    │   │   ├── Modal.tsx        # Native <dialog> accessible modal
    │   │   ├── FormField.tsx    # Form inputs with Zod error feedback
    │   │   ├── Logo.tsx         # Vector reproduction + image support
    │   │   └── ThemeToggle.tsx  # Dark/Light mode toggle button
    │   └── sections/
    │       ├── Hero.tsx         # Interactive canvas node mesh
    │       ├── Marquee.tsx      # Infinite client marquee
    │       ├── StatsSection.tsx # InView animated counters
    │       ├── ServicesGrid.tsx # 8 enterprise capability cards
    │       ├── IndustriesShowcase.tsx # Interactive sector tabs
    │       ├── WhyDatanest.tsx  # Alternating parallax value blocks
    │       ├── TechStackStrip.tsx # Filterable technology ecosystem
    │       ├── CaseStudiesPreview.tsx # Featured outcomes
    │       ├── TestimonialsSlider.tsx # Executive review carousel
    │       ├── InsightsPreview.tsx # Thought leadership previews
    │       ├── CTABanner.tsx    # High-conversion consultation banner
    │       └── GlobalPresenceMap.tsx # Interactive SVG map with pulsing pins
    ├── data/                    # Type-safe enterprise datasets
    │   ├── navigation.ts        # Header & footer menus
    │   ├── services.ts          # 8 detailed service blueprints & FAQs
    │   ├── industries.ts        # 6 sector challenges & solutions
    │   ├── caseStudies.ts       # 6 verified client case studies
    │   ├── team.ts              # Executive committee profiles
    │   ├── careers.ts           # Open roles & culture pillars
    │   ├── insights.ts          # Technical research whitepapers
    │   ├── testimonials.ts      # C-level client endorsements
    │   ├── stats.ts             # Key corporate metrics & clients
    │   └── offices.ts           # 8 global delivery hubs & coordinates
    ├── hooks/
    │   ├── useTheme.ts          # Dark/Light theme state & storage
    │   ├── useSmoothScroll.ts   # Lenis smooth scroll lifecycle
    │   └── useReducedMotion.ts  # Accessibility preference detector
    ├── lib/
    │   ├── utils.ts             # Tailwind class merger (clsx + twMerge)
    │   └── validations.ts       # Zod schemas for contact, apply & newsletter
    ├── pages/
    │   ├── Home.tsx             # Main landing page
    │   ├── About.tsx            # Company story, timeline & leadership
    │   ├── Services.tsx         # Services overview with search
    │   ├── ServiceDetail.tsx    # Dynamic service detail layout
    │   ├── Industries.tsx       # Industries overview
    │   ├── IndustryDetail.tsx   # Dynamic industry vertical layout
    │   ├── CaseStudies.tsx      # Filterable case studies directory
    │   ├── CaseStudyDetail.tsx  # Case study outcome breakdown
    │   ├── Careers.tsx          # Careers hub with Apply Modal
    │   ├── Insights.tsx         # Whitepapers & research hub
    │   ├── BlogDetail.tsx       # Full article layout with takeaways
    │   ├── Contact.tsx          # Consultation form & global offices
    │   ├── Privacy.tsx          # Legal privacy policy & data sovereignty
    │   ├── Terms.tsx            # Corporate terms of service
    │   └── NotFound.tsx         # 404 page with animated broken circuit
    ├── App.tsx                  # Lazy-loaded routes & AnimatePresence
    ├── index.css                # Tailwind directives & base styles
    └── main.tsx                 # React DOM mount point with HelmetProvider
```

---

## Getting Started

### Prerequisites
- **Node.js**: v18.0.0 or later (v20+ recommended)
- **npm** or **pnpm**

### Installation

```bash
# Clone or navigate to the project directory
cd "c:/Datanest Website"

# Install all dependencies
npm install
```

### Development Server

Run the development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

Open your browser at `http://localhost:5173`.

### Production Build

Verify TypeScript compilation and generate optimized production assets in `dist/`:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## How to Edit Content

All text, services, case studies, open positions, team members, and office locations are cleanly separated into typed data files in `src/data/`:

| To Edit Content In... | Modify File |
| :--- | :--- |
| **Services & Blueprints** | `src/data/services.ts` |
| **Industry Practices** | `src/data/industries.ts` |
| **Case Studies & Outcomes** | `src/data/caseStudies.ts` |
| **Open Job Positions & Culture** | `src/data/careers.ts` |
| **Insights & Whitepapers** | `src/data/insights.ts` |
| **Executive Leadership Team** | `src/data/team.ts` |
| **Client Testimonials** | `src/data/testimonials.ts` |
| **Key Stats & Trusted Clients** | `src/data/stats.ts` |
| **Global Offices & Map Coordinates** | `src/data/offices.ts` |
| **Navigation Menus & Mega-menu** | `src/data/navigation.ts` |

---

## Deployment Instructions

### Deploy to Vercel

1. Push your repository to GitHub, GitLab, or Bitbucket.
2. Go to [Vercel Dashboard](https://vercel.com/) and click **"Add New Project"**.
3. Import your repository.
4. Framework Preset will automatically detect **Vite**.
5. Build settings:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
6. Click **Deploy**. Single-page routing (SPA rewrites) is handled automatically.

### Deploy to Netlify

1. Go to [Netlify Dashboard](https://app.netlify.com/) and select **"Add new site" > "Import an existing project"**.
2. Select your repository.
3. Configure build settings:
   - **Base directory**: `/`
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
4. Add a `_redirects` file in `public/` (or `dist/`) containing:
   ```
   /*    /index.html   200
   ```
5. Click **Deploy Site**.

