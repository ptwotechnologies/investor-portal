'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion'; // AnimatePresence is no longer needed here for the image
import AccordionItem from '../features/AccordionItem';
import AccordionImageDisplay from '../features/AccordionImageDisplay';

interface FeatureItem {
  id: number;
  title: string;
  content: string;
  imageUrl: string;
}

const features: FeatureItem[] = [
  {
    id: 1,
    title: 'Really! The system is built to drain founders…',
    content:
      'First, the ad platforms charge you for every single click (doesn’t matter if those clicks) See more...',
    imageUrl: 'https://picsum.photos/seed/onboarding/800/600', // This will be the fixed image
  },
  {
    id: 2,
    title: 'That’s when we decided, we need to fix this...',
    content:
      'So our team sat together, spent months on planning, strategizing, building and came up See more...',
    imageUrl: 'https://picsum.photos/seed/payroll/800/600',
  },
];

const FeaturesAccordion: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(features[0].id);

  const handleItemClick = (id: number) => {
    setActiveIndex((prevId) => (prevId === id ? 0 : id));
  };

  // We'll use the imageUrl from the first feature as the static image
  const staticImageUrl = features[0].imageUrl;
  const staticImageAlt = "Our platform's main feature visual"; // A generic alt text for the static image

  return (
    <section className="pb-8 md:pb-10 lg:hidden lg:pb-16 px-4 md:px-8 lg:px-16 bg-[#6D8D7F]">
      <div className="mx-auto max-w-7xl">
        <div className="items-start md:grid md:grid-cols-2 md:gap-12">
          {/* Left Side: Accordion */}
          <motion.div
            className="w-full md:col-span-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            {features.map((feature, index) => (
              <AccordionItem
                key={feature.id}
                item={feature}
                isOpen={activeIndex === feature.id}
                onClick={handleItemClick}
                isFirst={index === 0}
                isLast={index === features.length - 1}
              />
            ))}
          </motion.div>

          <motion.div
            className="hidden md:col-span-1 md:block"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          >
            <AccordionImageDisplay
              imageUrl={staticImageUrl}
              alt={staticImageAlt}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesAccordion;
