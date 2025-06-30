import { Suspense } from 'react';

import HeroSection from '@/components/features/HeroSection';
import FullServiceFundManagement from '@/components/features/FullServiceFundManagement';
import Loader from '@/components/ui/Loader';
import StatsSection from '@/components/features/StatsSection';
import ArticleSection from '@/components/features/ArticleSection';
import TestimonialSection from '@/components/features/TestimonialSection';
import AngelListBigTextSection from '@/components/features/AngelListBigTextSection';
// import LeadingInvestors from '@/components/features/LeadingInvestors';

export default function Home() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <HeroSection />
        <FullServiceFundManagement />
        <StatsSection />
        <TestimonialSection />
        <ArticleSection />
        <AngelListBigTextSection />
      </Suspense>
    </>
  );
}
