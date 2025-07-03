'use client';
import Image from 'next/image';
import { Skeleton } from '../ui/Skeleton';
import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

// InvestmentCard component - Fixed blur background issue
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
      <div className="flex flex-col bg-transparent border-t border-b border-gray-700 py-6 cursor-pointer hover:bg-gray-900/20 transition-colors duration-200 group">
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

          {/* Hover View Button - Fixed blur background */}
          <div className="flex absolute inset-0 items-end justify-center pb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
            <div className="flex bg-black/30 backdrop-blur-md border border-white/30 rounded-full px-4 py-2 items-center gap-2 text-white font-medium text-sm shadow-lg">
              <span>View</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Description Section */}
        <p className="text-gray-300 text-[16px]">{description}</p>
      </div>
    </Link>
  );
}
