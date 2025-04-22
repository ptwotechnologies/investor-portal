'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '../ui/Button';
import { Skeleton } from '../ui/Skeleton'; // Make sure path is correct

const investmentOptions = [
  {
    id: 1,
    title: 'Venture Funds',
    imageUrl: 'https://picsum.photos/300/400',
    link: '#venture-funds',
  },
  {
    id: 2,
    title: 'SPVs',
    imageUrl: 'https://picsum.photos/300/400',
    link: '#spvs',
  },
  {
    id: 3,
    title: 'Scout Funds',
    imageUrl: 'https://picsum.photos/300/400',
    link: '#scout-funds',
  },
  {
    id: 4,
    title: 'Digital Subscriptions',
    imageUrl: 'https://picsum.photos/300/400',
    link: '#digital-subscriptions',
  },
];

export default function HeroSection() {
  return (
    <div className="relative bg-[#23003C] min-h-screen pt-14 pb-16 text-white">
      {/* Top button */}
      <div className="flex justify-center mb-20">
        <button className="flex items-center bg-opacity-20 bg-purple-100 text-purple-950 rounded-full px-6 py-2">
          Explore our Recent Products
          <svg
            className="ml-2 w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </button>
      </div>

      {/* Main heading */}
      <div className="text-center px-4">
        <h1 className="text-5xl md:text-6xl lg:text-7xl max-w-4xl mx-auto">
          Built to scale all private funds & Public funds
        </h1>
        <p className="mt-8 text-xl max-w-2xl mx-auto">
          AngelList provides investors and innovators with the tools to grow.
        </p>
      </div>

      {/* CTA Button */}
      <div className="flex justify-center mt-12">
        <Button variant="white">Contact Sales</Button>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20 px-6">
        {investmentOptions.map((option) => {
          const [loaded, setLoaded] = useState(false);
          return (
            <div
              key={option.id}
              className="flex flex-col bg-brand-950 bg-opacity-30 rounded-lg overflow-hidden"
            >
              <div className="relative h-96">
                {!loaded && (
                  <Skeleton className="absolute inset-0 w-full h-full" />
                )}
                <img
                  src={option.imageUrl}
                  alt={option.title}
                  onLoad={() => setLoaded(true)}
                  className={`w-full h-full object-cover transition-opacity duration-300 ${
                    loaded ? 'opacity-100' : 'opacity-0'
                  }`}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-end p-4">
                  <Link href={option.link} className="w-fit">
                    <span className="inline-flex items-center justify-center rounded-full border border-white bg-white/10 text-white px-4 py-2 text-sm font-medium backdrop-blur-sm transition-all hover:bg-white/20">
                      View
                      <svg
                        className="ml-2 w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium text-center">
                  {option.title}
                </h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
