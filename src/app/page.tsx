import { Suspense } from 'react';

import HeroSection from '@/components/features/HeroSection';
import Loader from '@/components/ui/Loader';
import TestimonialSection from '@/components/features/TestimonialSection';
import VideoSection from '@/components/features/VideoSection';
import FeaturesSection from '@/components/features/FeatureSection';
import PortalSection from '@/components/features/PortalSection';
import NoddingCTASection from '@/components/features/NoddingCTASection';
import WhatMakesUsDifferent from '@/components/features/WhatMakesUsDifferent ';
import FeaturesAccordion from '@/components/layout/FeaturesAccordion';
import AccordionEnd from '@/components/features/AccordionEnd';
import ConsultationsComponent from '@/components/layout/ConsultationsComponent';
import ProfileSelectionComponent from '@/components/layout/ProfileSelectionComponent';
import MondayReminder from '@/components/layout/MondayReminder';
import FAQSection from '@/components/features/FAQComponent';

export default function Home() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <HeroSection />
        <VideoSection />
        <FeaturesSection />
        <PortalSection />
        <NoddingCTASection />
        <WhatMakesUsDifferent />
        <FeaturesAccordion />
        <AccordionEnd />
        <ConsultationsComponent />
        <TestimonialSection />
        <ProfileSelectionComponent />
        <MondayReminder />
        <FAQSection />
      </Suspense>
    </>
  );
}
