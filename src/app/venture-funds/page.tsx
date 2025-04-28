import VentureAdministration from '@/components/features/VentureAdministration';
import VentureFeatures from '@/components/features/VentureFeatures';
import VentureFundManager from '@/components/features/VentureFundManager';
import VentureStats from '@/components/features/VentureStats';
import VentureHero from '@/components/layout/VetureHero';
import React from 'react';

function page() {
  return (
    <>
      <VentureHero />
      <VentureFeatures />
      <VentureFundManager />
      <VentureStats />
      <VentureAdministration />
    </>
  );
}

export default page;
