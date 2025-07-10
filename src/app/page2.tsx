import { getIsMobileViewServer } from '@/lib/is-mobile-server'; 

export default async function HomePage() {
  const isMobile = await getIsMobileViewServer(); 

  return (
    <main>
      <h1>Hello from {isMobile ? 'Mobile' : 'Desktop'} View</h1>
      {isMobile ? (
        <p>This is mobile-optimized content</p>
      ) : (
        <p>This is desktop layout</p>
      )}
    </main>
  );
}
