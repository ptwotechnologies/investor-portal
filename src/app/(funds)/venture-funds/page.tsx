import React from 'react';
import FAQComponent from '@/components/features/FAQComponent';
import PricingComponent from '@/components/features/PricingComponent';
import VentureAdministration from '@/components/features/VentureAdministration';
import VentureFeatures from '@/components/features/VentureFeatures';
import VentureFundManager from '@/components/features/VentureFundManager';
import VentureStats from '@/components/features/VentureStats';
import VentureHero from '@/components/layout/VetureHero';
import type { Metadata, Viewport } from 'next';

// Fixed metadata format for Next.js 15
export const metadata: Metadata = {
  title: 'Venture Funds | Investor Portal',
  description: 'A platform built to scale all private and public funds.',
};

// Separate viewport export as recommended
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function VentureFundsPage() {
  return (
    <>
      <VentureHero />
      <VentureStats />
      <VentureFeatures />
      <VentureFundManager />
      <VentureAdministration />
      <PricingComponent />
      <FAQComponent />
    </>
  );
}
