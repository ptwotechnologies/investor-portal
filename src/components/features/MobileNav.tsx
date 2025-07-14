'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '../ui/Button';
import { navigation } from '../../config/navConfig';

interface MobileNavProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

export default function MobileNav({
  mobileMenuOpen,
  setMobileMenuOpen,
}: MobileNavProps) {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const pathname = usePathname();
  const isAboutPage = pathname === '/about';

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setExpandedItems([]);
    }
  }, [mobileMenuOpen]);

  const toggleDropdown = (itemName: string) => {
    setExpandedItems((prev) =>
      prev.includes(itemName)
        ? prev.filter((name) => name !== itemName)
        : [...prev, itemName]
    );
  };

  return (
    <div
      className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ease-in-out ${
        mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div
        className="fixed inset-0 bg-black/20 backdrop-blur-sm"
        onClick={() => setMobileMenuOpen(false)}
      ></div>

      <div
        className={`fixed inset-y-0 right-0 z-50 w-full max-w-sm shadow-xl overflow-y-auto transform transition-transform duration-300 ease-in-out
        ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
        ${isAboutPage ? 'bg-white text-primary-950' : 'bg-primary-950/90 text-white'} 
        backdrop-blur-sm`}
      >
        <div className={`flex items-center justify-between p-6 border-b 
          ${isAboutPage ? 'border-gray-200' : 'border-primary-800'}`}>
          <Link
            href="/"
            className={`text-2xl font-bold ${isAboutPage ? 'text-primary-950' : 'text-white'}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            PORTAL
          </Link>
          <button
            type="button"
            className={`p-2 rounded-md cursor-pointer transition-colors 
            ${isAboutPage ? 'text-primary-950 hover:bg-gray-100' : 'text-white hover:bg-primary-800'}`}
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
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="px-6 py-4">
          <div className="space-y-2">
            {navigation.map((item) => (
              <div key={item.name} className={`border-b ${isAboutPage ? 'border-gray-200' : 'border-primary-800/30'} last:border-b-0`}>
                {item.dropdown ? (
                  <div>
                    <button
                      className={`flex items-center justify-between w-full py-4 text-lg font-semibold text-left transition-colors
                        ${isAboutPage ? 'text-primary-950 hover:text-gray-700' : 'text-white hover:text-gray-200'}`}
                      onClick={() => toggleDropdown(item.name)}
                    >
                      <span>{item.name}</span>
                      <svg
                        className={`w-5 h-5 transition-transform duration-200 ${
                          expandedItems.includes(item.name) ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        expandedItems.includes(item.name)
                          ? 'max-h-96 opacity-100 pb-4'
                          : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="ml-4 space-y-2">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className={`block px-3 py-2 rounded-md transition-colors 
                              ${isAboutPage
                                ? 'text-primary-800 hover:text-primary-900 hover:bg-gray-100'
                                : 'text-gray-300 hover:text-white hover:bg-primary-800/50'}`}
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={`block py-4 text-lg font-semibold transition-colors
                      ${isAboutPage ? 'text-primary-950 hover:text-gray-700' : 'text-white hover:text-gray-200'}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          <div className={`pt-6 mt-8 space-y-4 border-t ${isAboutPage ? 'border-gray-200' : 'border-primary-800'}`}>
            <Link href="/signin" onClick={() => setMobileMenuOpen(false)}>
              <Button variant={isAboutPage ? 'default' : 'white'} className="w-full">
                Login
              </Button>
            </Link>
            <Link href="/signup" onClick={() => setMobileMenuOpen(false)}>
              <Button variant="default" className="w-full" size="auth">
                Sign up
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
