import type { Metadata, Viewport } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import './styles.css';
import { Suspense } from 'react';
import Loader from '@/components/ui/Loader';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
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
    <html lang="en" className={poppins.className}>
      {/* Make body a flex container spanning full height */}
      <body className="flex flex-col min-h-screen">
        <Suspense fallback={<Loader />}>
          <Header />
         
         <main className="flex flex-col flex-grow pt-10 lg:pt-20"> 
         
            {children}
          </main>
          <Footer />
        </Suspense>
      </body>
    </html>
  );
}