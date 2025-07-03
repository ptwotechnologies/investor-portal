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
    title: 'Streamlined Onboarding',
    content:
      'Our intuitive platform makes onboarding new team members a breeze, reducing paperwork and accelerating productivity from day one.',
    imageUrl: 'https://picsum.photos/seed/onboarding/800/600', // This will be the fixed image
  },
  {
    id: 2,
    title: 'Automated Payroll & Benefits',
    content:
      'Say goodbye to manual calculations. Our system automates payroll, tax filings, and benefit administration, ensuring accuracy and compliance.',
    imageUrl: 'https://picsum.photos/seed/payroll/800/600',
  },
  {
    id: 3,
    title: 'Performance Management',
    content:
      'Set goals, track progress, and conduct performance reviews effortlessly. Foster employee growth with continuous feedback loops.',
    imageUrl: 'https://picsum.photos/seed/performance/800/600',
  },
  {
    id: 4,
    title: 'Employee Self-Service Portal',
    content:
      'Empower your employees to manage their personal information, access pay stubs, and request time off without HR intervention.',
    imageUrl: 'https://picsum.photos/seed/selfservice/800/600',
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
    <section className="pb-8 md:pb-10 lg:pb-16 px-4 md:px-8 lg:px-16 bg-[#6D8D7F]">
      <div className="max-w-7xl mx-auto">
        <div className="md:grid md:grid-cols-2 md:gap-12 items-start">
          {/* Left Side: Accordion */}
          <motion.div
            className="md:col-span-1 w-full"
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
            className="md:col-span-1 md:block hidden"
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
