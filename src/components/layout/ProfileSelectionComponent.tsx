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
      'Create your verified growth strategies, quickly respond to client interest, and seamlessly convert leads directly into paying clients.',
    buttonVariant: 'white',
    href: '#professionals',
  },
];

const ProfileCard: React.FC<{ card: ProfileCardData; index: number }> = ({
  card,
  index,
}) => (
  <motion.div
    className={`${card.bgColor} rounded-md p-6 md:p-8 ${card.textColorClass} flex flex-col justify-between cursor-pointer min-h-[300px] md:min-h-[320px]`}
    initial={{ boxShadow: 'none' }}
    whileHover={{
      scale: 1.03,
      y: -5,
      boxShadow: `0px 10px 15px -3px rgba(0,0,0,0.1), 0px 4px 6px -2px rgba(0,0,0,0.05)`,
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
  >
    <div className="flex-1">
      <div className="flex items-center mb-4 md:mb-6">
        <div className="hidden w-12 h-12 relative mr-4 md:block md:w-16 md:h-16 md:mr-6">
          <Image
            src={card.imageSrc}
            alt={card.imageAlt}
            fill
            className="object-cover rounded-md"
            sizes="(max-width: 768px) 48px, (max-width: 1024px) 64px, 64px"
            priority={index === 0}
          />
        </div>
        <h3 className="text-lg md:text-xl font-semibold">{card.title}</h3>
      </div>
      <p
        className={`text-sm md:text-base  ${
          index === 0 ? 'text-gray-300' : 'text-gray-700'
        } mb-2`}
      >
        {card.subtitle}
      </p>
      <p
        className={`text-sm md:text-base ${
          index === 0 ? 'text-gray-300' : 'text-gray-700'
        } mb-6 leading-relaxed`}
      >
        {card.description}
      </p>
    </div>

    <div className="flex justify-start md:justify-end mt-auto">
      <Link href={card.href} passHref>
        <Button variant={card.buttonVariant} className="w-auto">
          Get Started
        </Button>
      </Link>
    </div>
  </motion.div>
);

const ProfileSelectionComponent: React.FC = () => {
  const [isSliderMode, setIsSliderMode] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      // Between 640px (sm) and 1024px (lg)
      setIsSliderMode(width >= 640 && width < 1024);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <div className="w-full max-w-[1400px] mx-auto px-6 py-8 md:px-8 md:py-12 lg:px-12 lg:py-16">
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-[20px] md:text-4xl font-semibold text-gray-900 mb-1">
            Great!
          </h1>
          <h2 className="text-[20px] md:text-4xl font-semibold text-gray-900 mb-4 md:mb-6">
            How Do I Get Started Then?
          </h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed tracking-wide">
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
              loop={true}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 24,
                },
              }}
              className="h-auto"
            >
              {profileCards.map((card, index) => (
                <SwiperSlide key={card.id} className="flex h-auto">
                  <div className="w-full h-full">
                    <ProfileCard card={card} index={index} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 md:gap-6 lg:gap-8">
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
