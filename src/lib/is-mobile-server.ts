// lib/is-mobile-server.ts
import { headers } from 'next/headers';
import { userAgent } from 'next/server';

// Make the function async
export async function getIsMobileViewServer(): Promise<boolean> {
  const headersList = await headers();
  const ua = userAgent({ headers: headersList }); // If headers() is sync, this is fine.

  // Fallback for safety if ua.device is undefined
  return ua.device?.type === 'mobile' || ua.device?.type === 'tablet';
}

// Another example:
export async function getIsIosServer(): Promise<boolean> {
  const headersList = await headers();
  const ua = userAgent({ headers: headersList });
  return ua.os?.name === 'iOS';
}
