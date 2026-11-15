// Image assets & placeholders configuration
// Easily swappable with local files
export const ASSETS = {
  // Official brand logos (with automatic dark/light theme switching)
  LOGO_LIGHT: '/assets/logo-light.webp',
  LOGO_DARK: '/assets/logo-dark.webp',
  FAVICON: '/assets/favicon.png',

  // Official ISO and certification badges
  ISO_9001: '/assets/iso-9001.svg',
  ISO_27001: '/assets/iso-27001.svg',
  ISO_27701: '/assets/iso-27701.svg',
  ISO_45001: '/assets/iso-45001.svg',
  BIG_W: '/assets/bigw.svg',
  SSL: '/assets/ssl.svg',

  // Clutch 2026 Awards
  CLUTCH_RECRUITING: '/assets/clutch-hr-recruiting.png',
  CLUTCH_OUTSOURCING: '/assets/clutch-hr-outsourcing.png',
  CLUTCH_HR: '/assets/clutch-human-resources.png',
  CLUTCH_PEO: '/assets/clutch-peo.png',
  CLUTCH_CONSULTING: '/assets/clutch-hr-consulting.png',

  // High-definition recruitment video and poster
  // Royalty-free 4K/HD corporate video & professional poster
  HERO_VIDEO_URL: 'https://assets.mixkit.co/videos/preview/mixkit-business-team-in-a-meeting-room-42861-large.mp4',
  HERO_VIDEO_BACKUP: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4',
  HERO_VIDEO_POSTER: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&q=80',

  // High-quality corporate placeholders (3D/modern enterprise visual imagery)
  HERO_BACKGROUND: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80',
  EXECUTIVE_MEETING: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1000&q=80',
  GLOBAL_WORKFORCE: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1000&q=80',
  TALENT_INNOVATION: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1000&q=80',
  CORPORATE_WOMEN_LEADERSHIP: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=80',
  C_SUITE_SEARCH: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1000&q=80',
  TECH_TALENT: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1000&q=80',
};

// Certifications data exactly matching InTalent Asia
export const CERTIFICATIONS = [
  {
    code: 'ISO 9001',
    title: 'Quality Management',
    desc: 'Structured recruitment processes and service quality assurance frameworks.',
    icon: ASSETS.ISO_9001,
    badgeColor: 'from-blue-500 to-indigo-600',
    tag: 'Quality Standards'
  },
  {
    code: 'ISO 27001',
    title: 'Information Security',
    desc: 'Enterprise-grade safeguards protecting client and candidate confidential data.',
    icon: ASSETS.ISO_27001,
    badgeColor: 'from-teal-500 to-emerald-600',
    tag: 'Data Security'
  },
  {
    code: 'ISO 27701',
    title: 'Privacy Management',
    desc: 'Stringent personal data governance complying with international privacy regulations.',
    icon: ASSETS.ISO_27701,
    badgeColor: 'from-cyan-500 to-blue-600',
    tag: 'Privacy Protection'
  },
  {
    code: 'ISO 45001',
    title: 'Health & Safety',
    desc: 'Commitment to occupational health, safety, and sustainable workplace well-being.',
    icon: ASSETS.ISO_45001,
    badgeColor: 'from-amber-500 to-orange-600',
    tag: 'Workplace Safety'
  }
];

// Clutch Recognitions
export const CLUTCH_AWARDS = [
  { title: 'Top HR Recruiting Company Sri Lanka 2026', img: ASSETS.CLUTCH_RECRUITING },
  { title: 'Top HR Outsourcing Company Sri Lanka 2026', img: ASSETS.CLUTCH_OUTSOURCING },
  { title: 'Top Human Resources Company Sri Lanka 2026', img: ASSETS.CLUTCH_HR },
  { title: 'Top PEO Company Sri Lanka 2026', img: ASSETS.CLUTCH_PEO },
  { title: 'Top HR Consulting Company Sri Lanka 2026', img: ASSETS.CLUTCH_CONSULTING },
];

// Recruitment Approach Metrics & Pillars
export const RECRUITMENT_METRICS = [
  {
    metric: 'Successful Hires',
    label: 'Specialist Hiring',
    description: 'Permanent, contract, and executive hires delivered across global markets.',
    stat: '10,000+',
    statSuffix: 'Talent Placements'
  },
  {
    metric: 'Shortlist Turnaround',
    label: 'Agreed Milestones',
    description: 'Sourcing and screening timelines agreed for each hiring brief with agile velocity.',
    stat: '48-72 hrs',
    statSuffix: 'Rapid Sourcing'
  },
  {
    metric: 'Repeat Business',
    label: 'Partnership',
    description: 'Long-term client relationships built on trust, confidentiality, and consistent delivery.',
    stat: '94%',
    statSuffix: 'Retention Rate'
  },
  {
    metric: 'Delivery Accuracy',
    label: 'Structured Screening',
    description: 'Structured processes and rigorous quality checks ensuring reliable, high-fit outcomes.',
    stat: '98.5%',
    statSuffix: 'Placement Accuracy'
  }
];

// 5-Step Hiring Process
export const HIRING_PROCESS = [
  {
    step: '01',
    title: 'Share Your Hiring Need',
    description: 'We understand your hiring needs and align the right sourcing strategy.',
    details: 'Deep intake consultation to align technical competencies, culture fit, compensation benchmark, and delivery milestones.'
  },
  {
    step: '02',
    title: 'Talent Mapping & Sourcing',
    description: 'We identify relevant candidates through AI tools, databases, and specialist networks.',
    details: 'Leveraging algorithmic talent search, proprietary candidate pools, and active headhunting across 20+ countries.'
  },
  {
    step: '03',
    title: 'Candidate Screening & Shortlisting',
    description: 'We share vetted and role matched candidates within a fast turnaround time.',
    details: 'Rigorous competency interviews, portfolio verification, and technical vetting before client presentation.'
  },
  {
    step: '04',
    title: 'Interview & Selection',
    description: 'We coordinate interviews, assessments, and feedback for a smoother hiring process.',
    details: 'Seamless scheduling, debrief loops, and psychometric evaluation support to empower confident decision-making.'
  },
  {
    step: '05',
    title: 'Offer & Onboarding',
    description: 'We support offers, documentation, and onboarding for a smooth candidate start.',
    details: 'Offer negotiation, local legal compliance, statutory contracts, and post-placement check-ins for high retention.'
  }
];

// Specialists & Solutions: 3 Pillars
export const SOLUTIONS_CATEGORIES = [
  {
    id: 'talent-acquisition',
    title: 'Talent Acquisition',
    subtitle: 'High-Impact Executive & Specialist Recruitment',
    description: 'Targeted headhunting, leadership search, and elastic team scaling across technology, finance, and corporate functions.',
    accent: 'border-blue-500 text-blue-500',
    color: 'from-blue-600 to-indigo-700',
    services: [
      { name: 'Recruitment Services', desc: 'End-to-end permanent and contract talent delivery for fast-growth firms.' },
      { name: 'Executive Search', desc: 'Structured market research to appoint C-level and high-stake leadership.' },
      { name: 'Headhunting', desc: 'Targeted direct outreach for discreet, scarce, and mission-critical specialists.' },
      { name: 'C-Suite Recruitment', desc: 'Boardroom-level advisory, MD, CEO, CTO, and executive placement.' },
      { name: 'Recruitment Process Outsourcing (RPO)', desc: 'Full lifecycle scalable recruiting embedded within your talent team.' },
      { name: 'Staff Augmentation', desc: 'Immediate technical and functional talent to supercharge project velocity.' },
      { name: 'HR Consultation for Startups', desc: 'Strategic workforce frameworks, hiring roadmaps, and compensation design.' }
    ]
  },
  {
    id: 'workforce-solutions',
    title: 'Workforce Solutions',
    subtitle: 'Global Employment & Borderless Expansion',
    description: 'Legally compliant international hiring, Employer of Record (EOR), PEO, and managed workforce operations.',
    accent: 'border-teal-500 text-teal-500',
    color: 'from-teal-600 to-emerald-700',
    services: [
      { name: 'Employer of Record (EOR) Services', desc: 'Hire top talent legally in Sri Lanka and regional hubs without creating a local entity.' },
      { name: 'Professional Employer Organisation (PEO)', desc: 'Co-employment models providing benefits, compliance, and HR administration.' },
      { name: 'Build Operate Transfer (BOT) Services', desc: 'Establishing offshore tech and operational centers transitioning seamlessly to your team.' },
      { name: 'Payroll Administration', desc: 'Accurate, timely payroll processing compliant with statutory tax and labor mandates.' },
      { name: 'Salary Processing & Statutory Registrations', desc: 'EPF, ETF, income tax, and regulatory filings managed with zero compliance friction.' }
    ]
  },
  {
    id: 'business-solutions',
    title: 'Business Solutions',
    subtitle: 'Strategic HR, Advisory & Organizational Growth',
    description: 'Enhancing talent retention, employer value proposition, and cross-border expansion capability.',
    accent: 'border-cyan-500 text-cyan-500',
    color: 'from-cyan-600 to-blue-700',
    services: [
      { name: 'Employer Branding', desc: 'Crafting compelling talent value propositions that attract tier-one industry candidates.' },
      { name: 'HR Outsourcing', desc: 'Complete delegation of operational HR functions to seasoned specialists.' },
      { name: 'Market Entry Support', desc: 'Navigating local labor dynamics, salary benchmarks, and regulatory setup in Asia.' },
      { name: 'Talent Assessments & Psychometrics', desc: 'Validated scientific testing to forecast cultural alignment and candidate performance.' },
      { name: 'Training & Development Programmes', desc: 'Bespoke corporate upskilling, leadership coaching, and team enablement.' }
    ]
  }
];

// Why Choose InTalent Asia (Key Value Drivers)
export const VALUE_PROPOSITIONS = [
  {
    title: 'Fast Recruitment Delivery with AI Enhanced Sourcing',
    description: 'Combining proprietary AI algorithms with senior recruiter acumen to deliver qualified shortlists in as little as 48 hours.',
    iconName: 'Zap'
  },
  {
    title: 'ISO Aligned Processes for Quality, Safety & Data Protection',
    description: 'Certified governance under ISO 9001, 27001, 27701, and 45001 ensuring maximum audit readiness and risk reduction.',
    iconName: 'ShieldCheck'
  },
  {
    title: 'Global Talent Network with Deep Industry Specialisation',
    description: 'Unrivaled access across technology, banking, telecom, manufacturing, and healthcare in 20+ countries.',
    iconName: 'Globe'
  },
  {
    title: 'Women-Led Organisation Championing Equal Opportunity',
    description: 'Progressive leadership fostering diverse hiring practices, unbiased selection, and inclusive work environments.',
    iconName: 'HeartHandshake'
  },
  {
    title: 'Zero Cost to Candidates, Supporting Ethical Hiring',
    description: 'Strict adherence to international ethical recruitment standards—candidates are never charged placement fees.',
    iconName: 'Scale'
  },
  {
    title: 'Trusted Partner for Startups, SMEs & Enterprise Clients',
    description: 'Flexible engagement models from single critical hires to massive offshore workforce augmentation.',
    iconName: 'Award'
  }
];

// Global Markets Supported
export const GLOBAL_MARKETS = [
  { name: 'Sri Lanka', region: 'South Asia (HQ)', active: true, tag: 'Regional Headquarters' },
  { name: 'United Arab Emirates', region: 'Middle East', active: true, tag: 'High-Demand Hub' },
  { name: 'Saudi Arabia', region: 'Middle East', active: true, tag: 'Vision 2030 Projects' },
  { name: 'Qatar', region: 'Middle East', active: true, tag: 'Enterprise Staffing' },
  { name: 'Singapore', region: 'Southeast Asia', active: true, tag: 'FinTech & Tech' },
  { name: 'Malaysia', region: 'Southeast Asia', active: true, tag: 'Shared Services' },
  { name: 'India', region: 'South Asia', active: true, tag: 'Engineering Scale' },
  { name: 'Australia', region: 'Oceania', active: true, tag: 'Specialist Talent' },
  { name: 'United Kingdom', region: 'Europe', active: true, tag: 'Global Offshore' },
  { name: 'United States', region: 'North America', active: true, tag: 'Nearshore & EOR' },
  { name: 'Canada', region: 'North America', active: true, tag: 'Remote Teams' },
  { name: 'Maldives', region: 'South Asia', active: true, tag: 'Hospitality & Exec' },
  { name: 'Kuwait', region: 'Middle East', active: true, tag: 'Corporate Search' },
  { name: 'Oman', region: 'Middle East', active: true, tag: 'Workforce Solutions' },
  { name: 'Bahrain', region: 'Middle East', active: true, tag: 'Banking & Advisory' },
  { name: 'Vietnam', region: 'Southeast Asia', active: true, tag: 'Tech Hub' }
];

// Latest Thinking / Insights
export const LATEST_INSIGHTS = [
  {
    tag: 'Global Hiring',
    title: 'Staff Augmentation vs Hiring for Global Teams',
    description: 'How to choose the right workforce model for speed, flexibility, and sustainable growth in a distributed economy.',
    readTime: '5 min read',
    date: '2026 Strategic Advisory',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80'
  },
  {
    tag: 'AI in HR',
    title: 'AI in Recruitment in 2026: What Actually Works',
    description: 'A practical, hype-free look at where artificial intelligence creates real value across candidate sourcing and candidate experience.',
    readTime: '6 min read',
    date: '2026 Innovation Brief',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=600&q=80'
  },
  {
    tag: 'Future of Work',
    title: 'Future of Work Strategy Requires a Human Edge',
    description: 'Why modern talent acquisition blends algorithmic precision with deep empathy and transparent candidate advocacy.',
    readTime: '4 min read',
    date: '2026 Leadership Report',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80'
  }
];

// FAQs
export const FAQS = [
  {
    id: 1,
    question: 'What does a recruitment company do for employers?',
    answer: 'Recruiters help define the vacancy, source potential candidates, screen relevant experience, conduct initial competency assessments, and coordinate a qualified shortlist and interviews against the employer brief, reducing time-to-hire and cost-per-hire.'
  },
  {
    id: 2,
    question: 'How do executive search and headhunting differ?',
    answer: 'Executive search focuses on a leadership mandate and structured market research to identify C-suite, board, and director-level appointments. Headhunting uses targeted direct outreach and can also support scarce specialist technical or commercial roles that are not actively applying on job boards.'
  },
  {
    id: 3,
    question: 'Can InTalent Asia support international recruitment?',
    answer: 'Yes. InTalent Asia operates across Sri Lanka, UAE, Saudi Arabia, Singapore, Australia, UK, USA, and over 20 global markets. We assist with cross-border talent sourcing, remote hiring, Employer of Record (EOR), and relocation advisory.'
  },
  {
    id: 4,
    question: 'What is an Employer of Record (EOR) service?',
    answer: 'An Employer of Record (EOR) allows companies to hire full-time personnel in another country legally without incorporating a local subsidiary. InTalent Asia acts as the legal employer, managing payroll, taxes, benefits, and statutory compliance, while the candidate works directly under your day-to-day management.'
  },
  {
    id: 5,
    question: 'What are InTalent Asia’s ISO certifications?',
    answer: 'InTalent Asia is certified in ISO 9001 (Quality Management), ISO 27001 (Information Security), ISO 27701 (Privacy Information Management), and ISO 45001 (Occupational Health & Safety). This ensures international compliance, data confidentiality, and disciplined delivery standards.'
  }
];

// Office & Contact Info
export const CONTACT_INFO = {
  office: 'Sri Lanka Office',
  addressLine1: '674/2/1, Dr NM Perera Mawatha,',
  addressLine2: 'Colombo 08, Sri Lanka.',
  email: 'hello@intalent.asia',
  phone: '(011) 206 7999',
  internationalPhone: '+94 11 206 7999',
  hours: 'Mon - Fri: 8:30 AM - 5:30 PM (IST / GMT+5:30)',
  socials: {
    linkedin: 'https://www.linkedin.com/company/intalent-asia',
    youtube: 'https://www.youtube.com/@InTalent-Asia',
    facebook: 'https://facebook.com/intalentasia'
  }
};
