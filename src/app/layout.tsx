import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Suspense } from 'react';
import Loader from '@/components/ui/Loader';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// Import Inter font
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Investor Portal | Connecting Startups and Investors',
  description: 'A platform built to scale all private and public funds.',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://investorportal.com',
    title: 'Investor Portal | Connecting Startups and Investors',
    description: 'A platform built to scale all private and public funds.',
    siteName: 'Investor Portal Clone',
  },
};

// Separate viewport export as recommended in Next.js 15
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <Suspense fallback={<Loader />}>
          <Header />
          <main>{children}</main>
          <Footer />
        </Suspense>
      </body>
    </html>
  );
}
