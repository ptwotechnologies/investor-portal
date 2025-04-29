import React from 'react';
import Link from 'next/link';
import { Facebook, Linkedin, Twitter } from 'lucide-react';

interface FooterLink {
  title: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const VentureFooter: React.FC = () => {
  const sections: FooterSection[] = [
    {
      title: 'Get started',
      links: [
        { title: 'Sign in', href: '/sign-in' },
        { title: 'Contact sales', href: '/contact-sales' },
      ],
    },
    {
      title: 'Fund Managers',
      links: [
        { title: 'Rolling Funds®', href: '/rolling-funds' },
        { title: 'Venture Funds', href: '/venture-funds' },
        { title: 'Syndicates', href: '/syndicates' },
        { title: 'Networked banking', href: '/networked-banking' },
        { title: 'Scout Funds', href: '/scout-funds' },
        {
          title: 'Investor Portal vs. Carta',
          href: '/Investor Portal-vs-carta',
        },
        { title: 'Fin (Beta)', href: '/fin-beta' },
      ],
    },
    {
      title: 'Pricing + Returns',
      links: [
        { title: 'Pricing', href: '/pricing' },
        { title: 'Fund Cost Calculator', href: '/fund-cost-calculator' },
        {
          title: 'VC Fund Performance Calculator',
          href: '/vc-fund-performance-calculator',
        },
        { title: 'ROV Calculator', href: '/rov-calculator' },
      ],
    },
    {
      title: 'Startups + Investors',
      links: [
        { title: 'Roll Up Vehicles®', href: '/roll-up-vehicles' },
        { title: 'Demo Day Funds', href: '/demo-day-funds' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { title: 'Partnerships', href: '/partnerships' },
        { title: 'Blog', href: '/blog' },
        { title: 'Help Center', href: '/help-center' },
        { title: 'Education Center', href: '/education-center' },
        { title: 'About us', href: '/about-us' },
        { title: 'Careers', href: '/careers' },
        { title: 'Form CRS', href: '/form-crs' },
      ],
    },
  ];

  const legalLinks: FooterLink[] = [
    { title: 'Terms', href: '/terms' },
    { title: 'Privacy', href: '/privacy' },
    { title: 'Disclosures', href: '/disclosures' },
    { title: 'Cookie Settings', href: '/cookie-settings' },
  ];

  const disclaimers = [
    'The information contained herein is provided for informational and discussion purposes only and is not intended to be a recommendation for any investment, service, product, or other advice of any kind, and shall not constitute or imply an offer of any kind. Any investment opportunities and/or products or services shown here will only be completed pursuant to formal offering materials, a letter of intent, and/or any other agreements as determined by Investor Portal containing full details regarding risks, minimum investment, fees, and expenses of such transaction.The terms of any product, service, or particular investment opportunity, including actual characteristics, are set forth in the applicable constituent documents for such product, service or particular investment opportunity and may differ materially from those presented in this presentation. Such terms are subject to change without notice. For more information on Investor Portal and its products and services, please see here.',
    "Past performance is not indicative of future results. Any examples of companies are purely for illustrative purposes and do not represent an endorsement of Investor Portal. Such companies may either support or disapprove of Investor Portal or the advisory services provided by its affiliates. Examples provided are only partial, and readers should not assume that the investments and/or funds identified were or will be profitable or are representative of investments by Investor Portal Advisors' advised funds or SVVCapital advised funds. No person was paid or compensated in any way for any testimonial provided on this page.",
    "All figures in this presentation are as of January 15, 2021. We undertake no obligation to provide updates or revisions. Please contact us for details of Investor Portal Advisors or SVV Capital's valuation policy.",
    'Unicorns are private companies that have announced funding rounds with post-money valuations over $1 billion. While we believe these reports to be reliable, we have not independently verified their accuracy.',
    "Quotes included in these materials related to Investor Portal's services should not be construed in anyway as an endorsement of Investor Portal's advice, analysis, or other service rendered to its clients.",
  ];

  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer Sections */}
        <div className="grid grid-cols-2 gap-8 py-12 md:grid-cols-3 lg:grid-cols-5">
          {sections.map((section, index) => (
            <div key={index} className="mb-8">
              <h3 className="text-sm font-semibold text-primary-800">
                {section.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-sm text-primary-700 hover:text-primary-900"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Disclaimers */}
        <div className="border-t border-gray-200 py-8">
          <div className="text-xs text-primary-700 space-y-4">
            <p className="font-semibold text-primary-800">Disclaimer:</p>
            {disclaimers.map((disclaimer, index) => (
              <p key={index} className="text-primary-700">
                {disclaimer}
              </p>
            ))}
          </div>
        </div>

        {/* Bottom Links and Social */}
        <div className="flex flex-col items-start justify-between border-t border-gray-200 py-6 md:flex-row md:items-center">
          <div className="flex flex-wrap items-center space-x-4">
            {legalLinks.map((link, index) => (
              <React.Fragment key={index}>
                <Link
                  href={link.href}
                  className="text-xs text-primary-700 hover:text-primary-900"
                >
                  {link.title}
                </Link>
                {index < legalLinks.length - 1 && (
                  <span className="text-primary-400 text-xs">•</span>
                )}
              </React.Fragment>
            ))}
            <span className="text-xs text-primary-700">
              © AL Advisors Management Inc.
            </span>
          </div>

          <div className="flex mt-4 space-x-6 md:mt-0">
            <a href="#" className="text-primary-600 hover:text-primary-900">
              <span className="sr-only">Facebook</span>
              <Facebook size={20} />
            </a>
            <a href="#" className="text-primary-600 hover:text-primary-900">
              <span className="sr-only">LinkedIn</span>
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-primary-600 hover:text-primary-900">
              <span className="sr-only">Twitter</span>
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default VentureFooter;
