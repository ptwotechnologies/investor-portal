import { Suspense } from 'react';

import HeroSection from '@/components/features/HeroSection';
import AutoCarousel from '@/components/features/AutoCarousel';
import Loader from '@/components/ui/Loader';
import StatsSection from '@/components/features/StatsSection';
import ArticleSection from '@/components/features/ArticleSection';
import TestimonialSection from '@/components/features/TestimonialSection';

export default function Home() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <HeroSection />
        <AutoCarousel />
        <StatsSection />
        <ArticleSection />
        <TestimonialSection />
      </Suspense>
    </>
  );
}
