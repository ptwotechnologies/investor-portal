'use client';
import Image from 'next/image';
import { Skeleton } from '../ui/Skeleton';
import { useState } from 'react';
import Link from 'next/link';

// InvestmentCard component - Added individual borders and padding to each card
export default function InvestmentCard({
  title,
  description,
  imageUrl,
  link,
}: {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}) {
  const [loaded, setLoaded] = useState(false);

  return (
    // Wrapped entire card in Link component to make it clickable
    <Link href={link} className="block">
      <div className="flex flex-col bg-transparent border-t border-b border-gray-700 py-6 cursor-pointer hover:bg-gray-900/20 transition-colors duration-200">
        {/* Card Title Section */}
        <h3 className="text-xl font-medium text-white mb-4">{title}</h3>

        {/* Image Section - Increased height from h-72 (288px) to h-90 (360px) */}
        <div className="relative w-full h-90 bg-gray-800 rounded-lg overflow-hidden mb-4">
          {!loaded && <Skeleton className="absolute inset-0 w-full h-full" />}
          <Image
            src={imageUrl}
            alt={title}
            onLoad={() => setLoaded(true)}
            width={315}
            height={360}
            className={`w-full h-full object-cover transition-opacity duration-300 ${
              loaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
        </div>

        {/* Description Section */}
        <p className="text-gray-300 text-[16px]">{description}</p>
      </div>
    </Link>
  );
}
