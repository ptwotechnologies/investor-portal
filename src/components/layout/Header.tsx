'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import { Button } from '../ui/Button';
import MobileNav from '../features/MobileNav';
import NavLinks from '../features/NavLinks';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled] = useState(false);
  const navContainerRef = useRef<HTMLDivElement>(null);

  return (
    <header
      className={`bg-primary-950 text-white ${isScrolled ? 'shadow-md' : ''}`}
    >
      <nav
        className="flex items-center justify-between py-4 max-w-[1400px] max-sm:px-3.5 mx-auto lg:py-4"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="text-2xl font-bold">
            LOGO
          </Link>
        </div>

        {/* Centered desktop navigation */}
        <div className="hidden flex-1 lg:flex lg:justify-center">
          <NavLinks navContainerRef={navContainerRef} />
        </div>

        <div className="hidden lg:flex lg:justify-end lg:flex-1">
          <div className="flex space-x-4">
            <Link href="/signin">
              <Button>Sign Up</Button>
            </Link>
            <Link href="/contact">
              <Button variant={'white'}>Contact Sales</Button>
            </Link>
          </div>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center p-2 text-white rounded-md"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </nav>

      <MobileNav
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
    </header>
  );
}
