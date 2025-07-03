import React from 'react';
import Image from 'next/image';
import Link from 'next/link'; // Import Link from next/link
import { Button } from '../ui/Button';

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
  href: string; // Added href property for the link
}

const profileCards: ProfileCardData[] = [
  {
    id: 1,
    bgColor: 'bg-primary-950',
    textColorClass: 'text-white',
    imageSrc: 'https://picsum.photos/48/48?random=1',
    imageAlt: 'Startup icon',
    title: "I'm a Startup",
    subtitle: 'Unlock your growth potential',
    description:
      "Pick your onboarding plan. We'll walk you through the platform, and discuss how to use your expert consult wisely to accelerate your growth.",
    buttonVariant: 'white',
    href: '#startup', // Example href, replace with actual path
  },
  {
    id: 2,
    bgColor: 'bg-[#CDD7EB]',
    textColorClass: 'text-gray-900',
    imageSrc: 'https://picsum.photos/48/48?random=2',
    imageAlt: 'Investors icon',
    title: 'Investors',
    subtitle: 'Find your next big opportunity',
    description:
      'Sign up and create your account. Share your investment focus, preferred industries, ticket sizes, and past experience to find the perfect matches.',
    buttonVariant: 'white',
    href: '#investors', // Example href, replace with actual path
  },
  {
    id: 3,
    bgColor: 'bg-gray-200',
    textColorClass: 'text-gray-900',
    imageSrc: 'https://picsum.photos/48/48?random=3',
    imageAlt: 'Service Professionals icon',
    title: 'Service Professionals',
    subtitle: 'Connect with eager clients',
    description:
      'Choose your onboarding plan. Create your verified strategies, respond to interest, and convert leads directly into paying clients.',
    buttonVariant: 'white',
    href: '#professionals',
  },
];

const ProfileSelectionComponent: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="block md:hidden">
        <div className="px-6 py-8">
          <div className="text-center mb-8">
            <h1 className="text-2xl lg:text-4xl font-bold text-gray-900 mb-2">
              Great!
            </h1>
            <h2 className="text-xl lg:text-3xl font-semibold text-gray-900 mb-4">
              How do I get started then?
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Simple, just choose which profile fits you,
              <br />
              and we&apos;ll show you what to do next.
            </p>
          </div>

          <div className="space-y-4">
            {profileCards.map((card, index) => (
              <div
                key={card.id}
                className={`${card.bgColor} rounded-md p-6 ${card.textColorClass} aspect-square flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 relative mr-4">
                      <Image
                        src={card.imageSrc}
                        alt={card.imageAlt}
                        fill
                        className="object-cover rounded-md"
                        sizes="(max-width: 768px) 48px, 48px"
                        priority={index === 0}
                      />
                    </div>
                    <h3 className="text-lg font-semibold">{card.title}</h3>
                  </div>
                  <p
                    className={`text-sm font-semibold ${index === 0 ? 'text-gray-300' : 'text-gray-700'} mb-4`}
                  >
                    {card.subtitle}
                  </p>
                  <p
                    className={`text-sm ${index === 0 ? 'text-gray-300' : 'text-gray-700'} mb-6 leading-relaxed`}
                  >
                    {card.description}
                  </p>
                </div>
                <div className="flex justify-end">
                  <Link href={card.href} passHref>
                    <Button variant={card.buttonVariant} className="w-auto">
                      Get Started
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="hidden md:block">
        <div className="w-full max-w-[1400px] mx-auto px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Great!</h1>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              How do I get started then?
            </h2>
            <p className="text-gray-600 text-base">
              Simple, just choose which profile fits you,
              <br />
              and we&apos;ll show you what to do next.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {profileCards.map((card, index) => (
              <div
                key={card.id}
                className={`${card.bgColor} rounded-md p-8 ${card.textColorClass} aspect-square flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 relative mr-6">
                      <Image
                        src={card.imageSrc}
                        alt={card.imageAlt}
                        fill
                        className="object-cover rounded-md"
                        sizes="(min-width: 769px) 64px, 100vw"
                        priority={index === 0}
                      />
                    </div>
                    <h3 className="text-xl font-semibold">{card.title}</h3>
                  </div>
                  <p
                    className={`text-base font-semibold ${index === 0 ? 'text-gray-300' : 'text-gray-700'} mb-4`}
                  >
                    {card.subtitle}
                  </p>
                  <p
                    className={`text-sm ${index === 0 ? 'text-gray-300' : 'text-gray-700'} mb-6 leading-relaxed`}
                  >
                    {card.description}
                  </p>
                </div>
                <div className="flex justify-end">
                  <Link href={card.href} passHref>
                    <Button variant={card.buttonVariant} className="w-auto">
                      Get Started
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSelectionComponent;
