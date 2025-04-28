'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import * as React from 'react';
import { Button } from '../ui/Button';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '../ui/DropdownMenu';

// Updated navigation with dropdown items
const navigation = [
  {
    name: 'Products',
    href: '/products',
    dropdown: [
      { name: 'Find Talent', href: '/startups/talent' },
      { name: 'Raise Capital', href: '/startups/raise' },
      { name: 'Manage Equity', href: '/startups/equity' },
      { name: 'Startup Services', href: '/startups/services' },
    ],
  },
  {
    name: 'Pricing',
    href: '/pricing',
  },
  {
    name: 'Resources',
    href: '/resources',
    dropdown: [
      { name: 'Blog', href: '/resources/blog' },
      { name: 'Guides', href: '/resources/guides' },
      { name: 'Investor Reports', href: '/resources/reports' },
      { name: 'Success Stories', href: '/resources/stories' },
    ],
  },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  // For managing hover state
  const handleMouseEnter = (itemName: string) => {
    setOpenDropdown(itemName);
  };

  const handleMouseLeave = () => {
    setOpenDropdown(null);
  };

  // Add scroll listener to adjust navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Handle mobile menu animation
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  return (
    <header
      className={`bg-primary-800 text-white ${isScrolled ? 'shadow-md' : ''}`}
    >
      <nav
        className="flex items-center justify-between p-4 mx-auto lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="text-2xl font-bold">
            LOGO
          </Link>
        </div>

        {/* Centered desktop navigation */}
        <div className="hidden flex-1 lg:flex lg:justify-center">
          <div className="flex items-center px-8 py-2 rounded-full bg-primary-950">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative mx-4"
                onMouseEnter={() => handleMouseEnter(item.name)}
                onMouseLeave={handleMouseLeave}
              >
                {item.dropdown ? (
                  <DropdownMenu open={openDropdown === item.name}>
                    <DropdownMenuTrigger asChild>
                      <Link
                        href={item.href}
                        className={`text-lg inline-flex items-center ${
                          pathname === item.href
                            ? 'text-white'
                            : 'text-gray-300 hover:text-white'
                        }`}
                      >
                        {item.name}
                        <svg
                          className="w-4 h-4 ml-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </Link>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      className="bg-primary-950 text-white border-primary-800 min-w-[220px] mt-2"
                      sideOffset={0}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      {item.dropdown.map((subItem) => (
                        <DropdownMenuItem key={subItem.name} asChild>
                          <Link
                            href={subItem.href}
                            className="px-4 py-2 hover:bg-purple-800 focus:bg-purple-800 focus:text-white"
                          >
                            {subItem.name}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link
                    href={item.href}
                    className={`text-lg ${
                      pathname === item.href
                        ? 'text-white'
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="hidden lg:flex lg:justify-end lg:flex-1">
          <div className="flex space-x-4">
            <Button variant={'white'}>
              <Link href="/login">Login</Link>
            </Button>
            <Button variant={'default'}>
              <Link href="/signup">Sign Up</Link>
            </Button>
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

      {/* Mobile menu with smoother transition */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ease-in-out ${
          mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="fixed inset-0 bg-black bg-opacity-70"></div>
        <div
          className={`fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-purple-950 shadow-xl overflow-y-auto transform transition-transform duration-300 ease-in-out ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between p-6">
            <Link href="/" className="text-2xl font-bold">
              LOGO
            </Link>
            <button
              type="button"
              className="p-2 text-white rounded-md cursor-pointer hover:bg-purple-800"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="px-6 py-4 mt-2">
            <div className="space-y-4">
              {navigation.map((item) => (
                <div key={item.name} className="py-2">
                  <Link
                    href={item.href}
                    className="block text-xl font-semibold text-white hover:text-gray-200"
                    onClick={() => !item.dropdown && setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>

                  {/* Mobile submenu */}
                  {item.dropdown && (
                    <div className="mt-2 ml-4 space-y-2">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block py-1 text-gray-300 hover:text-white"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-8 space-y-4">
              <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="white" className="w-full mt-2">
                  Login
                </Button>
              </Link>
              <Link href="/signup" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="default" className="w-full mt-2" size="auth">
                  Sign up
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
