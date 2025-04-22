import { Metadata } from 'next';

type OpenGraphType =
  | 'website'
  | 'article'
  | 'book'
  | 'profile'
  | 'music.song'
  | 'music.album'
  | 'music.playlist'
  | 'music.radio_station'
  | 'video.movie'
  | 'video.episode'
  | 'video.tv_show'
  | 'video.other';

type SEOProps = {
  title?: string;
  description?: string;
  path?: string;
  openGraph?: {
    title?: string;
    description?: string;
    images?: string[];
    type?: OpenGraphType;
  };
};

export function constructMetadata({
  title = 'AngelList Clone - Connect Startups, Investors, and Talent',
  description = 'The platform built to scale all private and public funds. Connect with investors, raise capital, and grow your business.',
  path = '',
  openGraph,
}: SEOProps = {}): Metadata {
  const baseUrl =
    process.env.NEXT_PUBLIC_APP_URL || 'https://angellist-clone.com';

  const ogTitle =
    openGraph?.title ||
    'AngelList Clone - Connect Startups, Investors, and Talent';
  const ogDescription =
    openGraph?.description ||
    'The platform built to scale all private and public funds. Connect with investors, raise capital, and grow your business.';
  const ogImages = openGraph?.images?.map((url) => ({
    url: `${baseUrl}${url}`,
    width: 1200,
    height: 630,
    alt: ogTitle,
  })) || [
    {
      url: `${baseUrl}/images/og-default.jpg`,
      width: 1200,
      height: 630,
      alt: ogTitle,
    },
  ];
  const ogType: OpenGraphType = openGraph?.type || 'website';

  return {
    title,
    description,
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: `${baseUrl}${path}`,
    },
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      url: `${baseUrl}${path}`,
      siteName: 'AngelList Clone',
      images: ogImages,
      locale: 'en_US',
      type: ogType,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      creator: '@angellist_clone',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    icons: {
      icon: '/favicon.ico',
      shortcut: '/favicon-16x16.png',
      apple: '/apple-touch-icon.png',
    },
    viewport: 'width=device-width, initial-scale=1',
  };
}
