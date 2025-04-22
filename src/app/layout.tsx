import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Loader from '@/components/ui/Loader';
import { Suspense } from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Investor Portal | Connecting Startups and Investors',
  description: 'A platform built to scale all private and public funds.',
  viewport: 'width=device-width, initial-scale=1',
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <Suspense fallback={<Loader />}>
          <main className="min-h-screen">{children}</main>
        </Suspense>
        <Footer />
      </body>
    </html>
  );
}
