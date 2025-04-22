// src/constants/index.ts
export const MOCK_STATS = {
  investors: 72000,
  fundsManaged: 107000000000, // $107B
  startupsFunded: 25000,
  countries: 33,
};

export const MOCK_ARTICLES = [
  {
    id: 1,
    title: 'The Future of Venture Capital: Trends to Watch in 2025',
    href: '/articles/future-of-venture-capital',
    description:
      'An analysis of emerging trends in the venture capital landscape and what they mean for investors and startups.',
    date: '2025-04-12',
    author: {
      name: 'Sarah Chen',
      role: 'Venture Partner',
    },
  },
  {
    id: 2,
    title: 'How Early-Stage Startups Can Attract Top-Tier Investors',
    href: '/articles/attracting-investors',
    description:
      'Practical strategies for early-stage founders looking to secure investment from leading venture capital firms.',
    date: '2025-04-05',
    author: {
      name: 'Michael Rodriguez',
      role: 'Angel Investor',
    },
  },
  {
    id: 3,
    title: 'The Rise of Sustainable Investing: Impact Meets Returns',
    href: '/articles/sustainable-investing',
    description:
      'How sustainability-focused investment strategies are generating both positive impact and competitive financial returns.',
    date: '2025-03-29',
    author: {
      name: 'Jessica Wong',
      role: 'ESG Director',
    },
  },
];

export const MOCK_TESTIMONIALS = [
  {
    id: 1,
    quote:
      'This platform has completely transformed how we manage our fund. From investor reporting to deal flow management, everything is now streamlined and efficient.',
    author: {
      name: 'Elena Sharma',
      role: 'Managing Partner, Horizon Ventures',
    },
  },
  {
    id: 2,
    quote:
      "The analytics and reporting features have given us incredible visibility into our portfolio performance. It's made a huge difference in how we make investment decisions.",
    author: {
      name: 'James Wilson',
      role: 'CFO, Blueprint Capital',
    },
  },
  {
    id: 3,
    quote:
      'As a startup founder, this platform made fundraising so much more efficient. We were able to connect with the right investors and close our round in record time.',
    author: {
      name: 'Rachel Kim',
      role: 'CEO, Quantum Health',
    },
  },
];

export const MOCK_FEATURES = [
  {
    title: 'For Fund Managers',
    description:
      'Streamline your fundraising process, manage investor relationships, and scale your operations with our comprehensive tools.',
    icon: 'FundManagement',
  },
  {
    title: 'For Startups',
    description:
      'Connect with the right investors, showcase your company, and access capital to fuel your growth journey.',
    icon: 'StartupSupport',
  },
  {
    title: 'For Investors',
    description:
      'Discover high-potential investment opportunities, diversify your portfolio, and track performance all in one place.',
    icon: 'InvestorTools',
  },
];
