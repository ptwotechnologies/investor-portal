'use client';

import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface CarouselItem {
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  imageUrl: string;
}

const carouselData: CarouselItem[] = [
  {
    title: 'Full Service Fund Management',
    description:
      "Investor Poratl's full service offerings provides access to 50+ services that remove friction from fund management for venture funds, rolling funds, and syndicates.",
    ctaText: 'Explore our fund & syndicate offerings',
    ctaLink: '#',
    imageUrl: 'https://picsum.photos/600/400',
  },
  {
    title: 'Portfolio Management Solutions',
    description:
      'Streamline your portfolio tracking with our comprehensive dashboard, analytics, and reporting tools built specifically for venture investors.',
    ctaText: 'Discover portfolio tools',
    ctaLink: '#',
    imageUrl: 'https://picsum.photos/600/400',
  },
  {
    title: 'Capital Formation Services',
    description:
      'Our platform enables efficient fundraising, investor relations management, and regulatory compliance for funds of all sizes.',
    ctaText: 'Learn about capital formation',
    ctaLink: '#',
    imageUrl: 'https://picsum.photos/600/400',
  },
  {
    title: 'Investment Operations',
    description:
      'Simplify deal flow, due diligence, and investment operations with our end-to-end solution built for modern investors.',
    ctaText: 'View operational solutions',
    ctaLink: '#',
    imageUrl: 'https://picsum.photos/600/400',
  },
  {
    title: 'Investor Relations & Reporting',
    description:
      'Keep your LPs informed and engaged with automated reporting, document management, and communication tools.',
    ctaText: 'See IR solutions',
    ctaLink: '#',
    imageUrl: 'https://picsum.photos/600/400',
  },
];

export default function AutoCarousel() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const slideTimeout = useRef<NodeJS.Timeout | null>(null);
  const slideDuration = 5000;

  // Handle automatic rotation
  useEffect(() => {
    const nextSlide = () => {
      setCurrentSlide((prev) =>
        prev === carouselData.length - 1 ? 0 : prev + 1
      );
    };

    slideTimeout.current = setTimeout(nextSlide, slideDuration);

    return () => {
      if (slideTimeout.current) {
        clearTimeout(slideTimeout.current);
      }
    };
  }, [currentSlide]);

  // Handle manual navigation
  const goToSlide = (index: number): void => {
    if (slideTimeout.current) {
      clearTimeout(slideTimeout.current);
    }
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full overflow-hidden bg-amber-50 p-6 rounded-lg">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {carouselData.map((slide, index) => (
          <div
            key={index}
            className="flex min-w-full flex-col md:flex-row items-center justify-between gap-8 p-8"
          >
            <div className="md:w-1/2 space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-stone-800">
                {slide.title}
              </h2>
              <p className="text-stone-600">{slide.description}</p>
              <a
                href={slide.ctaLink}
                className="inline-block text-teal-700 underline font-medium hover:text-teal-800 transition-colors"
              >
                {slide.ctaText}
              </a>
            </div>
            <div className="flex md:w-1/2 justify-end">
              <div className="relative w-full md:w-auto h-48 md:h-64">
                <img
                  src={slide.imageUrl}
                  alt={slide.title}
                  className="rounded-xl object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation dots */}
      <div className="flex absolute bottom-4 left-1/2 transform -translate-x-1/2 space-x-2">
        {carouselData.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              'w-3 h-3 rounded-full transition-colors',
              currentSlide === index
                ? 'bg-teal-500'
                : 'bg-gray-300 hover:bg-gray-400'
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
