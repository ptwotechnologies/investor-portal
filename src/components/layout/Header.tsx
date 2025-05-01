'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import * as React from 'react';
import { Button } from '../ui/Button';

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
  {
    name: 'Contact',
    href: '/contact-sales',
  },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  //  for tracking hover state for each dropdown
  const dropdownContainerRefs = useRef<Map<string, HTMLDivElement>>(new Map());

  //  managing hover state with a direct approach
  /*  const handleDropdownHover = (itemName: string, isHovering: boolean) => {
    if (isHovering) {
      setOpenDropdown(itemName);
    } else {
      // Only close if we're not hovering the dropdown container
      const container = dropdownContainerRefs.current.get(itemName);
      if (container && !container.matches(':hover')) {
        setOpenDropdown(null);
      }
    }
  }; */

  // Add scroll listener to adjust navbar on scroll
  /*   useEffect(() => {
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
  }, []); */

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
          <div className="flex items-center py-1 rounded-full bg-primary-950">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative mx-4"
                ref={(el) => {
                  if (el) dropdownContainerRefs.current.set(item.name, el);
                }}
              >
                {item.dropdown ? (
                  <div
                    className="group"
                    onMouseEnter={() => setOpenDropdown(item.name)}
                    onMouseLeave={() => {
                      setTimeout(() => {
                        const container = dropdownContainerRefs.current.get(
                          item.name
                        );
                        if (container && !container.matches(':hover')) {
                          setOpenDropdown(null);
                        }
                      }, 50);
                    }}
                  >
                    <Link
                      href={item.href}
                      className={`text-lg inline-flex items-center rounded-full px-4 py-2 transition-colors duration-200 focus:outline-none ${
                        openDropdown === item.name || pathname === item.href
                          ? 'bg-primary-200 text-primary-950'
                          : 'text-gray-300 hover:bg-primary-200 hover:text-primary-950'
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

                    {/* Dropdown menu with animations */}
                    {openDropdown === item.name && (
                      <div className="absolute left-0 z-10 mt-2 min-w-[220px] box-forming">
                        <div className="py-2 bg-primary-950 rounded-md shadow-lg border border-primary-800">
                          <div className="dropdown-content-fade">
                            {item.dropdown.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                className="block px-4 py-2 text-white hover:bg-primary-800 focus:bg-primary-800 focus:text-white"
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={`text-lg focus:outline-none rounded-full px-4 py-2 transition-colors duration-200 ${
                      pathname === item.href
                        ? 'bg-primary-200 text-primary-950'
                        : 'text-gray-300 hover:bg-primary-200 hover:text-primary-950'
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
            <Link href="/signin">
              <Button variant={'white'}>Login </Button>
            </Link>
            <Link href="/signup">
              <Button variant={'default'}>Sign Up </Button>
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
              <Link href="/signin" onClick={() => setMobileMenuOpen(false)}>
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
