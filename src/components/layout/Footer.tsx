import React from 'react';
import Link from 'next/link';
import { Facebook, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Get Started Column */}
          <div>
            <h3 className="font-medium mb-4">Get started</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/sign-in"
                  className="text-gray-300 hover:text-white"
                >
                  Sign in
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-sales"
                  className="text-gray-300 hover:text-white"
                >
                  Contact sales
                </Link>
              </li>
            </ul>
          </div>

          {/* Fund Managers Column */}
          <div>
            <h3 className="font-medium mb-4">Fund Managers</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/rolling-funds"
                  className="text-gray-300 hover:text-white"
                >
                  Rolling Funds®
                </Link>
              </li>
              <li>
                <Link
                  href="/venture-funds"
                  className="text-gray-300 hover:text-white"
                >
                  Venture Funds
                </Link>
              </li>
              <li>
                <Link
                  href="/syndicates"
                  className="text-gray-300 hover:text-white"
                >
                  Syndicates
                </Link>
              </li>
              <li>
                <Link
                  href="/networked-investing"
                  className="text-gray-300 hover:text-white"
                >
                  Networked Investing
                </Link>
              </li>
              <li>
                <Link
                  href="/scout-funds"
                  className="text-gray-300 hover:text-white"
                >
                  Scout Funds
                </Link>
              </li>
              <li>
                <Link
                  href="/angellist-vs-carta"
                  className="text-gray-300 hover:text-white"
                >
                  Angellist vs. Carta
                </Link>
              </li>
              <li>
                <Link
                  href="/fin-beta"
                  className="text-gray-300 hover:text-white"
                >
                  Fin (Beta)
                </Link>
              </li>
            </ul>
          </div>

          {/* Pricing + Returns Column */}
          <div>
            <h3 className="font-medium mb-4">Pricing + Returns</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/pricing"
                  className="text-gray-300 hover:text-white"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/fund-cost-calculator"
                  className="text-gray-300 hover:text-white"
                >
                  Fund Cost Calculator
                </Link>
              </li>
              <li>
                <Link
                  href="/vc-fund-performance-calculator"
                  className="text-gray-300 hover:text-white"
                >
                  VC Fund Performance Calculator
                </Link>
              </li>
              <li>
                <Link
                  href="/irr-calculator"
                  className="text-gray-300 hover:text-white"
                >
                  IRR Calculator
                </Link>
              </li>
            </ul>
          </div>

          {/* Two merged columns: Startups + Investors and Resources */}
          <div>
            <div className="mb-8">
              <h3 className="font-medium mb-4">Startups + Investors</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/roll-up-vehicles"
                    className="text-gray-300 hover:text-white"
                  >
                    Roll Up Vehicles®
                  </Link>
                </li>
                <li>
                  <Link
                    href="/demo-day-funds"
                    className="text-gray-300 hover:text-white"
                  >
                    Demo Day Funds
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/partnerships"
                    className="text-gray-300 hover:text-white"
                  >
                    Partnerships
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-gray-300 hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/help-center"
                    className="text-gray-300 hover:text-white"
                  >
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link
                    href="/education-center"
                    className="text-gray-300 hover:text-white"
                  >
                    Education Center
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about-us"
                    className="text-gray-300 hover:text-white"
                  >
                    About us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/careers"
                    className="text-gray-300 hover:text-white"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/form-crs"
                    className="text-gray-300 hover:text-white"
                  >
                    Form CRS
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-800 pt-6">
          {/* Legal Links */}
          <div className="flex flex-wrap space-x-4 mb-4 md:mb-0">
            <Link
              href="/terms"
              className="text-gray-300 hover:text-white text-sm"
            >
              Terms
            </Link>
            <Link
              href="/privacy"
              className="text-gray-300 hover:text-white text-sm"
            >
              Privacy
            </Link>
            <Link
              href="/disclosures"
              className="text-gray-300 hover:text-white text-sm"
            >
              Disclosures
            </Link>
            <Link
              href="/cookie-settings"
              className="text-gray-300 hover:text-white text-sm"
            >
              Cookie Settings
            </Link>
            <span className="text-gray-300 text-sm">
              © AL Advisors Management Inc.
            </span>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <Link href="#" className="text-gray-300 hover:text-white">
              <Facebook size={20} />
            </Link>
            <Link href="#" className="text-gray-300 hover:text-white">
              <Linkedin size={20} />
            </Link>
            <Link href="#" className="text-gray-300 hover:text-white">
              <Twitter size={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
