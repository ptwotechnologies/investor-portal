'use client';

import { useEffect } from 'react';
import Link from 'next/link';
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
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  return (
    <div
      className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ease-in-out ${
        mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="fixed inset-0 bg-black bg-opacity-70"></div>
      <div
        className={`fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-primary-950 shadow-xl overflow-y-auto transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-6">
          <Link
            href="/"
            className="text-2xl font-bold"
            onClick={() => setMobileMenuOpen(false)}
          >
            LOGO
          </Link>
          <button
            type="button"
            className="p-2 text-white rounded-md cursor-pointer hover:bg-primary-800"
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
  );
}
