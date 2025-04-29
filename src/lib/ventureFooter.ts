'use client';
import { usePathname } from 'next/navigation';

export function useSpecialFooter() {
  const pathname = usePathname();

  // List the paths where you want to use the special footer
  const specialFooterPaths = [
    '/special-page-1',
    '/special-page-2',
    '/special-page-3',
    '/special-page-4',
  ];

  // Check if current path is in the list of special paths
  return specialFooterPaths.includes(pathname);
}
