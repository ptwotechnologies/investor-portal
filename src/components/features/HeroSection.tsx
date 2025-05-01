'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '../ui/Button';
import { Skeleton } from '../ui/Skeleton';
import Image from 'next/image';

const investmentOptions = [
  {
    id: 1,
    title: 'Venture Funds',
    imageUrl: 'https://picsum.photos/id/123/300/400',
    link: '/venture-funds',
  },
  {
    id: 2,
    title: 'Rolling Funds',
    imageUrl: 'https://picsum.photos/id/124/300/400',
    link: '/rolling-funds',
  },
  {
    id: 3,
    title: 'Scout Funds',
    imageUrl: 'https://picsum.photos/id/125/300/400',
    link: '/scout-funds',
  },
  {
    id: 4,
    title: 'Syndicates',
    imageUrl: 'https://picsum.photos/id/126/300/400',
    link: '/syndicates',
  },
];

// Card component with proper hook usage
function InvestmentCard({
  title,
  imageUrl,
  link,
}: {
  title: string;
  imageUrl: string;
  link: string;
}) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="flex flex-col overflow-hidden border-b-2 rounded-lg bg-brand-950 bg-opacity-30">
      <div className="relative h-96">
        {!loaded && <Skeleton className="absolute inset-0 w-full h-full" />}
        <Image
          src={imageUrl}
          alt={title}
          onLoad={() => setLoaded(true)}
          width={300} // Add width here
          height={400} // Add height here
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            loaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
        <div className="flex absolute inset-0 flex-col items-center justify-end p-4">
          <Link href={link} className="w-fit">
            <span className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white transition-all border border-white rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20">
              View
              <svg
                className="w-4 h-4 ml-2"
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
        <h3 className="text-lg font-medium text-center">{title}</h3>
      </div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <div className="relative bg-primary-950 min-h-screen pt-14 pb-18 text-white">
      {/* Top button */}
      <div className="flex justify-center mb-20">
        <button className="flex items-center px-6 py-2 bg-purple-100 rounded-full bg-opacity-20 text-purple-950">
          Explore our Recent Products
          <svg
            className="w-4 h-4 ml-2"
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
      <div className="px-4 text-center">
        <h1 className="max-w-4xl mx-auto text-5xl font-light md:text-6xl lg:text-7xl">
          Built to scale all private funds & public funds
        </h1>
        <p className="max-w-2xl mx-auto mt-8 text-xl">
          Investor Portal provides investors and innovators with the tools to
          grow.
        </p>
      </div>

      {/* CTA Button */}
      <div className="flex justify-center mt-12">
        <Button variant="white">Contact Sales</Button>
      </div>

      {/* Investment Cards */}
      <div className="grid grid-cols-1 gap-6 px-6 mt-20 md:grid-cols-2 lg:grid-cols-4">
        {investmentOptions.map((option) => (
          <InvestmentCard
            key={option.id}
            title={option.title}
            imageUrl={option.imageUrl}
            link={option.link}
          />
        ))}
      </div>

      {/* Brands */}
      <div className="px-4 mt-20 text-center">
        <h3 className="mb-8 text-2xl font-light leading-8 text-white sm:text-3xl">
          Better together. Investor Portal partners with industry leaders.
        </h3>
        <div className="flex flex-wrap justify-center gap-8 sm:gap-10">
          {[...Array(5)].map((_, idx) => (
            <Image
              key={idx}
              src="https://picsum.photos/200/50"
              alt={`Brand Logo ${idx + 1}`}
              width={200} // Add width here
              height={50} // Add height here
              className="h-10 sm:h-12"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
