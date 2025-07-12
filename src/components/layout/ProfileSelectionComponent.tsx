'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/Button';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

interface ProfileCardData {
  id: number;
  bgColor: string;
  textColorClass: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
  subtitle: string;
  description: string;
  buttonVariant: 'white' | 'default';
  href: string;
  shadowColor: string;
}

const profileCards: ProfileCardData[] = [
  {
    id: 1,
    bgColor: 'bg-primary-950',
    textColorClass: 'text-white',
    imageSrc: 'https://picsum.photos/48/48?random=1',
    imageAlt: 'Startup icon',
    title: 'Startup',
    subtitle: 'Unlock your growth potential',
    description:
      "We'll walk you through the platform, and discuss how to use your expert consult wisely to accelerate your growth.",
    buttonVariant: 'white',
    href: '#startup',
    shadowColor: 'rgba(15, 23, 42, 0.3)', // dark blue shadow for primary-950
  },
  {
    id: 2,
    bgColor: 'bg-[#CDD7EB]',
    textColorClass: 'text-gray-900',
    imageSrc: 'https://picsum.photos/48/48?random=2',
    imageAlt: 'Investors icon',
    title: 'Investors',
    subtitle: 'Sign up and create your account',
    description:
      ' Share your investment focus, preferred industries, ticket sizes, and past experience to find the perfect matches.',
    buttonVariant: 'white',
    href: '#investors',
    shadowColor: 'rgba(205, 215, 235, 0.6)', // light blue shadow for #CDD7EB
  },
  {
    id: 3,
    bgColor: 'bg-[#E6E2E2]',
    textColorClass: 'text-gray-900',
    imageSrc: 'https://picsum.photos/48/48?random=3',
    imageAlt: 'Service Professionals icon',
    title: 'Service Professionals',
    subtitle: 'Choose your onboarding plan',
    description:
      'Get discovered by verified startups, respond to interest, and convert leads directly',
    buttonVariant: 'white',
    href: '#professionals',
    shadowColor: 'rgba(230, 226, 226, 0.6)', // light gray shadow for #E6E2E2
  },
];

const ProfileCard: React.FC<{ card: ProfileCardData; index: number }> = ({
  card,
  index,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`${card.bgColor} rounded-md p-6 md:p-8 lg:p-12 ${card.textColorClass} flex flex-col justify-between cursor-pointer h-[280px] md:h-[420px] lg:h-[450px]`}
      initial={{ 
        boxShadow: `0px 6px 10px -2px ${card.shadowColor}, 0px 4px 6px -1px ${card.shadowColor}`
      }}
      whileHover={{
        scale: 1.03,
        y: -5,
        boxShadow: `0px 25px 35px -5px ${card.shadowColor}, 0px 15px 15px -5px ${card.shadowColor}`,
        transition: {
          duration: 0.3,
          ease: 'easeOut',
          repeat: Infinity,
          repeatType: 'reverse',
          repeatDelay: 0.8,
        },
      }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 20,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        boxShadow: `0px 6px 10px -2px ${card.shadowColor}, 0px 4px 6px -1px ${card.shadowColor}`
      }}
    >
      <div className="flex-1">
        <div className="flex items-center mb-4 md:mb-6">
          <div className="relative hidden w-12 h-12 mr-4 md:block md:w-16 md:h-16 md:mr-6">
            <Image
              src={card.imageSrc}
              alt={card.imageAlt}
              fill
              className="object-cover rounded-md"
              sizes="(max-width: 768px) 48px, (max-width: 1024px) 64px, 64px"
              priority={index === 0}
            />
          </div>
          <h3 className="text-lg font-semibold md:text-xl">{card.title}</h3>
        </div>
        <p
          className={`text-sm md:text-lg   ${
            index === 0 ? 'text-gray-300' : 'text-gray-700'
          } mb-2`}
        >
          {card.subtitle}
        </p>
        <p
          className={`text-sm font-light md:text-lg leading-[35px] ${
            index === 0 ? 'text-gray-300' : 'text-gray-700'
          } mb-6 leading-relaxed line-clamp-4`}
        >
          {card.description}
        </p>
      </div>

      <div className="flex justify-start mt-auto md:justify-end">
        <Link href={card.href} passHref>
          <Button variant={card.buttonVariant} className="w-auto flex items-center gap-2 min-w-[120px] justify-center">
            <motion.div
              className="flex items-center gap-2"
              initial={false}
              animate={isHovered ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <motion.span
                initial={false}
                animate={
                  isHovered
                    ? { opacity: 1, x: 0, scale: 1 }
                    : { opacity: 1, x: 0, scale: 1 }
                }
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                {isHovered ? "Get Started" : card.title}
              </motion.span>
              <motion.svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                initial={false}
                animate={
                  isHovered
                    ? { opacity: 1, x: 0, scale: 1 }
                    : { opacity: 0, x: -10, scale: 0.8 }
                }
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </motion.svg>
            </motion.div>
          </Button>
        </Link>
      </div>
    </motion.div>
  );
};

const ProfileSelectionComponent: React.FC = () => {
  const [isSliderMode, setIsSliderMode] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      // Slider mode from sm (640px) to lg (1024px) breakpoints
      // From xl (1280px) onwards, show side by side without slider
      setIsSliderMode(width >= 640 && width < 1280);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <div className="overflow-hidden bg-white">
      <div className="w-full max-w-[1440px] mx-auto px-6 py-8 md:px-8 md:py-12 lg:py-16 lg:px-18">
        <div className="mb-8 text-center md:mb-12">
          <h1 className="text-[20px] md:text-4xl font-semibold text-gray-900 mb-1">
            Great!
          </h1>
          <h2 className="text-[20px] md:text-4xl font-semibold text-gray-900 mb-4 md:mb-6">
            How Do I Get Started Then?
          </h2>
          <p className="text-sm leading-relaxed tracking-wide text-gray-600 md:text-base">
            Simple, just choose which profile fits you,
            <br />
            and we&apos;ll show you what to do next.
          </p>
        </div>

        {isSliderMode ? (
          <div className="relative">
            <Swiper
              spaceBetween={24}
              slidesPerView={2}
              breakpoints={{
                640: {
                  slidesPerView: 2.2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2.2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 2.2,
                  spaceBetween: 24,
                },
              }}
              className="h-auto"
            >
              {profileCards.map((card, index) => (
                <SwiperSlide key={card.id} className="h-auto">
                  <ProfileCard card={card} index={index} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4 md:gap-6 lg:gap-8 xl:grid-cols-3">
            {profileCards.map((card, index) => (
              <ProfileCard key={card.id} card={card} index={index} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileSelectionComponent;