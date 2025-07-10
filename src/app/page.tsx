import { Suspense } from 'react';

import HeroSection from '@/components/features/HeroSection';
import Loader from '@/components/ui/Loader';
import TestimonialSection from '@/components/features/TestimonialSection';
import VideoSectionMobile from '@/components/features/VideoSectionMobile';
import FeaturesSection from '@/components/features/FeatureSection';
import PortalSection from '@/components/features/PortalSection';
import NoddingCTASection from '@/components/features/NoddingCTASection';
import CreatedByFoundersMB from '@/components/features/CreatedByFoundersMB';
import FeaturesAccordionMB from '@/components/layout/FeaturesAccordionMB';
import AccordionEnd from '@/components/features/AccordionEnd';
import ConsultationsComponent from '@/components/layout/ConsultationsComponent';
import ProfileSelectionComponent from '@/components/layout/ProfileSelectionComponent';
import WhatMakesDiffrent from '@/components/layout/WhatMakesDiffrent';
import MondayReminder from '@/components/layout/MondayReminder';
import FAQSection from '@/components/features/FAQComponent';
import StartupBenefits from '@/components/layout/StartupBenefits';

export default function Home() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <HeroSection />
        <VideoSectionMobile />
        <StartupBenefits />
        <FeaturesSection />
        <PortalSection />
        <NoddingCTASection />
        <CreatedByFoundersMB />
        <FeaturesAccordionMB />
        <WhatMakesDiffrent />
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
