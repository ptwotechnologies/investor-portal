'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navigation } from '../../config/navConfig';

interface NavLinksProps {
  navContainerRef: React.RefObject<HTMLDivElement | null>;
}

export default function NavLinks({ navContainerRef }: NavLinksProps) {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [sliderStyle, setSliderStyle] = useState({});
  const pathname = usePathname();
  const linkRefs = useRef<Map<string, HTMLElement>>(new Map());

  const isAboutPage = pathname === '/about';

  const updateSlider = (itemName: string | null) => {
    if (!itemName || !navContainerRef.current) {
      setSliderStyle({ opacity: 0 });
      return;
    }

    const linkElement = linkRefs.current.get(itemName);
    const container = navContainerRef.current;

    if (linkElement && container) {
      const containerRect = container.getBoundingClientRect();
      const linkRect = linkElement.getBoundingClientRect();

      const left = linkRect.left - containerRect.left;
      const width = linkRect.width;

      setSliderStyle({
        opacity: 1,
        transform: `translateX(${left}px)`,
        width: `${width}px`,
      });
    }
  };

  const handleMouseEnter = (itemName: string) => {
    setHoveredItem(itemName);
    updateSlider(itemName);
    const item = navigation.find((nav) => nav.name === itemName);
    if (item?.dropdown) {
      setOpenDropdown(itemName);
    }
  };

  const handleNavMouseLeave = () => {
    setHoveredItem(null);
    setSliderStyle({ opacity: 0 });
    setOpenDropdown(null);
  };

  return (
    <div
      ref={navContainerRef}
      className={`relative flex items-center py-1 rounded-full ${
        isAboutPage ? 'bg-white' : 'bg-primary-800'
      }`}
      onMouseLeave={handleNavMouseLeave}
    >
      {/* Sliding background */}
      <div
        className={`absolute transition-all duration-300 ease-out rounded-full pointer-events-none top-1 bottom-1 ${
          isAboutPage ?  'bg-primary-hover' : 'bg-primary-hover'
        }`}
        style={sliderStyle}
      />

      {navigation.map((item) => (
        <div key={item.name} className="relative mx-4">
          {item.dropdown ? (
            <div
              className="group"
              onMouseEnter={() => handleMouseEnter(item.name)}
            >
              <Link
                href={item.href}
                ref={(el) => {
                  if (el) linkRefs.current.set(item.name, el);
                }}
                className={`text-lg relative z-10 inline-flex items-center rounded-full px-4 py-2 transition-colors duration-300 focus:outline-none ${
                  hoveredItem === item.name || pathname === item.href
                    ? isAboutPage
                      ? 'text-primary-900'
                      : 'text-primary-950'
                    : isAboutPage
                    ? 'text-primary-950'
                    : 'text-gray-300'
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

              {openDropdown === item.name && (
                <div className="absolute left-0 z-10 mt-1 min-w-[220px] box-forming">
                  <div
                    className={`py-2 border rounded-md shadow-lg ${
                      isAboutPage
                        ? 'bg-white border-gray-200'
                        : 'bg-primary-950 border-primary-800'
                    }`}
                  >
                    <div className="dropdown-content-fade">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className={`block px-4 py-2 transition-colors ${
                            isAboutPage
                              ? 'text-primary-800 hover:bg-gray-100'
                              : 'text-white hover:bg-primary-800'
                          }`}
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
              ref={(el) => {
                if (el) linkRefs.current.set(item.name, el);
              }}
              className={`text-lg relative z-10 focus:outline-none rounded-full px-4 py-2 transition-colors duration-300 ${
                hoveredItem === item.name || pathname === item.href
                  ? isAboutPage
                    ? 'text-primary-900'
                    : 'text-primary-950'
                  : isAboutPage
                  ? 'text-primary-700'
                  : 'text-gray-300'
              }`}
              onMouseEnter={() => handleMouseEnter(item.name)}
            >
              {item.name}
            </Link>
          )}
        </div>
      ))}
    </div>
  );
}
