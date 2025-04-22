import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';

import HeroSection from '@/components/features/HeroSection';
import Loader from '@/components/ui/Loader';

export default function Home() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <HeroSection />
      </Suspense>
    </>
  );
}
