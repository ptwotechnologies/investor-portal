'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import * as React from 'react';
import { Button } from '../ui/Button';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from '../ui/DropdownMenu';

// Updated navigation with dropdown items
const navigation = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'Startups',
    href: '/startups',
    dropdown: [
      { name: 'Find Talent', href: '/startups/talent' },
      { name: 'Raise Capital', href: '/startups/raise' },
      { name: 'Manage Equity', href: '/startups/equity' },
      { name: 'Startup Services', href: '/startups/services' },
    ],
  },
  {
    name: 'Invest',
    href: '/invest',
    dropdown: [
      { name: 'Access Funds', href: '/invest/funds' },
      { name: 'Discover Syndicates', href: '/invest/syndicates' },
      { name: 'Browse Startups', href: '/invest/startups' },
      { name: 'Investment Tools', href: '/invest/tools' },
    ],
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
    name: 'Pricing',
    href: '/pricing',
  },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  // For managing hover state
  const handleMouseEnter = (itemName: string) => {
    setOpenDropdown(itemName);
  };

  const handleMouseLeave = () => {
    setOpenDropdown(null);
  };

  return (
    <header className="bg-primary-800 text-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="text-2xl font-bold">AngelList</span>
          </Link>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-6 w-6"
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

        {/* Desktop Navigation with Dropdowns */}
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <div
              key={item.name}
              className="relative"
              onMouseEnter={() => handleMouseEnter(item.name)}
              onMouseLeave={handleMouseLeave}
            >
              {item.dropdown ? (
                <DropdownMenu open={openDropdown === item.name}>
                  <DropdownMenuTrigger asChild>
                    <Link
                      href={item.href}
                      className={`text-xl leading-6 inline-flex items-center ${
                        pathname === item.href
                          ? 'text-white'
                          : 'text-gray-300 hover:text-white'
                      }`}
                    >
                      {item.name}
                      <svg
                        className="ml-1 h-4 w-4"
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
                          className="hover:bg-primary-border-primary-800 focus:bg-primary-border-primary-800 focus:text-white py-2 px-4"
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
                  className={`text-xl leading-6 ${
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

        <div className="hidden space-x-6 lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="/login"
            className="rounded-md bg-white px-3.5 py-2 text-lg font-semibold text-[#23003C] shadow-sm hover:bg-[#23003c] hover:text-white hover:shadow-md"
            style={{ transition: 'all 0.3s ease-in-out' }}
          >
            Log in
          </Link>
          <Link
            href="/signup"
            className="rounded-md bg-[#23003C] px-3.5 py-2 text-lg font-semibold text-white shadow-sm hover:bg-gray-100 hover:text-[#23003C] hover:shadow-md"
            style={{ transition: 'all 0.3s ease-in-out' }}
          >
            Sign up
          </Link>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden" role="dialog" aria-modal="true">
          <div className="fixed inset-0 z-10 bg-primary-950 bg-opacity-90"></div>
          <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-primary-950 px-6 py-6 sm:max-w-sm">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="text-2xl font-bold">AngelList</span>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/25">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <React.Fragment key={item.name}>
                      <Link
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-primary-border-primary-800"
                        onClick={() =>
                          !item.dropdown && setMobileMenuOpen(false)
                        }
                      >
                        {item.name}
                      </Link>

                      {/* Mobile submenu */}
                      {item.dropdown && (
                        <div className="ml-4 space-y-1 mt-1">
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="-mx-3 block rounded-lg px-3 py-1.5 text-sm font-medium leading-7 text-gray-300 hover:bg-primary-border-primary-800 hover:text-white"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </React.Fragment>
                  ))}
                </div>
                <div className="py-6 flex flex-col space-y-4">
                  <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
                    <Button variant="login" size="auth" className="w-full">
                      Log in
                    </Button>
                  </Link>
                  <Link href="/signup" onClick={() => setMobileMenuOpen(false)}>
                    <Button variant="signup" size="auth" className="w-full">
                      Sign up
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
