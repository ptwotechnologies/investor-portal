import { Button } from '../ui/Button';
import HeroBrands from './HeroBrands';
import InvestmentCard from './InvestmentCard';

const investmentOptions = [
  {
    id: 1,
    title: 'Venture Funds',
    description:
      'Raise capital, close deals, and manage your portfolio — all from a single platform',
    imageUrl: 'https://picsum.photos/id/123/315/360', // Increased height from 288 to 360
    link: '/venture-funds',
  },
  {
    id: 2,
    title: "SPV's",
    description:
      'Raise capital, close deals, and manage your portfolio — all from a single platform',
    imageUrl: 'https://picsum.photos/id/124/315/360',
    link: '/spvs',
  },
  {
    id: 3,
    title: 'Scout Funds',
    description:
      'Raise capital, close deals, and manage your portfolio — all from a single platform',
    imageUrl: 'https://picsum.photos/id/125/315/360',
    link: '/scout-funds',
  },
  {
    id: 4,
    title: 'Digital Subscriptions',
    description:
      'Raise capital, close deals, and manage your portfolio — all from a single platform',
    imageUrl: 'https://picsum.photos/id/126/315/360',
    link: '/digital-subscriptions',
  },
];

export default function HeroSection() {
  return (
    // Outer container for overall page background and padding
    <div className="relative bg-primary-950 min-h-screen pt-14 pb-18 text-white px-4 md:px-8 lg:px-12">
      {/* Centralized container for all main content */}
      <div className="max-w-[1400px] mx-auto">
        {/* Top button for "Explore our 2024 year in review" */}
        <div className="flex justify-start mb-16">
          <div className="bg-primary-800 px-6 py-2 rounded-full">
            <p className="gradient-text text-xl font-medium">
              Explore our 2025 year in review
            </p>
          </div>
        </div>

        {/* Main heading and description */}
        <div className="mb-16">
          <h1 className="text-4xl font-light md:text-5xl lg:text-8xl leading-tight text-white">
            Build to scale
            <br />
            all private funds
          </h1>
          <p className="mt-6 text-xl text-gray-300">
            Angellist provides investors and innovator
            <br />
            with the tools to grow
          </p>
        </div>

        {/* CTA Button */}
        <div className="flex mb-28">
          <Button variant="white" className="h-14 p-3 w-36">
            Contact sales
          </Button>
        </div>

        {/* Investment Cards Grid Container - Removed outer borders since each card now has its own */}
        <div className="py-16 mb-20">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 justify-items-start">
            {investmentOptions.map((option) => (
              <InvestmentCard
                key={option.id}
                title={option.title}
                description={option.description}
                imageUrl={option.imageUrl}
                link={option.link}
              />
            ))}
          </div>
        </div>

        {/* Brands section */}
        <HeroBrands />
      </div>
    </div>
  );
}
