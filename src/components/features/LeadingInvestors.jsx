'use client';
import { useState, useEffect } from 'react';

const row1 = [
  { id: 1, title: 'Image 1', imageUrl: 'https://picsum.photos/id/101/200/50' },
  { id: 2, title: 'Image 2', imageUrl: 'https://picsum.photos/id/102/200/50' },
  { id: 3, title: 'Image 3', imageUrl: 'https://picsum.photos/id/103/200/50' },
  { id: 4, title: 'Image 4', imageUrl: 'https://picsum.photos/id/104/200/50' },
];

const row2 = [
  { id: 5, title: 'Image 5', imageUrl: 'https://picsum.photos/id/113/200/50' },
  { id: 6, title: 'Image 6', imageUrl: 'https://picsum.photos/id/106/200/50' },
  { id: 7, title: 'Image 7', imageUrl: 'https://picsum.photos/id/107/200/50' },
  { id: 8, title: 'Image 8', imageUrl: 'https://picsum.photos/id/108/200/50' },
];

const row3 = [
  { id: 9, title: 'Image 9', imageUrl: 'https://picsum.photos/id/109/200/50' },
  {
    id: 10,
    title: 'Image 10',
    imageUrl: 'https://picsum.photos/id/110/200/50',
  },
  {
    id: 11,
    title: 'Image 11',
    imageUrl: 'https://picsum.photos/id/111/200/50',
  },
  {
    id: 12,
    title: 'Image 12',
    imageUrl: 'https://picsum.photos/id/112/200/50',
  },
];

// Marquee component for each row
const InfiniteMarquee = ({ items, speed, reverse }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Double the items to create seamless loop
  const doubledItems = [...items, ...items, ...items];

  const marqueeStyle = {
    display: 'flex',
    width: '100%',
    overflow: 'hidden',
    margin: '2rem 0',
    position: 'relative',
  };

  const contentStyle = {
    display: 'flex',
    animation: `${reverse ? 'scrollReverse' : 'scroll'} ${speed}s linear infinite`,
    minWidth: '100%',
    gap: '2rem',
  };

  const itemStyle = {
    flex: '0 0 auto',
    padding: '0 1rem',
  };

  const fadeStyle = {
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: '100px',
    zIndex: 2,
    pointerEvents: 'none',
  };

  if (!isClient) {
    return null;
  }

  return (
    <div
      style={marqueeStyle}
      className="group"
      onMouseEnter={(e) => {
        e.currentTarget.querySelector('div').style.animationPlayState =
          'paused';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.querySelector('div').style.animationPlayState =
          'running';
      }}
    >
      {/* Left fade */}
      <div
        style={{
          ...fadeStyle,
          left: 0,
          background:
            'linear-gradient(90deg, #001d21 0%, rgba(0, 29, 33, 0) 100%)',
        }}
      />

      {/* Right fade */}
      <div
        style={{
          ...fadeStyle,
          right: 0,
          background:
            'linear-gradient(270deg, #001d21 0%, rgba(0, 29, 33, 0) 100%)',
        }}
      />

      <div style={contentStyle}>
        {doubledItems.map((image, index) => (
          <div key={`${image.id}-${index}`} style={itemStyle} className="mx-2">
            <img
              src={image.imageUrl}
              alt={image.title}
              className="h-12 rounded-sm object-contain"
              style={{ height: '3rem' }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default function LeadingInvestors() {
  const [keyState, setKeyState] = useState(0);

  // Force remount component when window is resized
  useEffect(() => {
    const handleResize = () => setKeyState((prev) => prev + 1);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div
      className="w-full h-fit p-12 lg:px-24 lg:pt-[96px] bg-[#001d21]"
      key={keyState}
    >
      <h3 className="text-center text-white text-3xl font-extralight mb-8">
        Leading Investors Of Investor Portal
      </h3>

      <style jsx global>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% - 2rem));
          }
        }

        @keyframes scrollReverse {
          0% {
            transform: translateX(calc(-100% - 2rem));
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>

      <div className="overflow-hidden w-full">
        <InfiniteMarquee items={row1} speed={60} reverse={false} />
        <InfiniteMarquee items={row2} speed={40} reverse={true} />
        <InfiniteMarquee items={row3} speed={20} reverse={false} />
      </div>
    </div>
  );
}
