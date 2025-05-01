// components/ui/NavigationButton.tsx
'use client';

import { Button, ButtonProps } from './Button';
import { Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export interface NavigationButtonProps extends ButtonProps {
  href: string;
  loadingText?: string;
  /**
   * Delay in milliseconds before navigation occurs
   * @default 50
   */
  navigationDelay?: number;
  /**
   * Callback function that runs before navigation starts
   * Return false to cancel navigation
   */
  beforeNavigate?: () => boolean | void;
}

export const NavigationButton = ({
  href,
  children,
  loadingText = 'Please wait',
  onClick,
  navigationDelay = 50,
  beforeNavigate,
  disabled,
  ...props
}: NavigationButtonProps) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    // Run custom onClick handler if provided
    if (onClick) onClick(e);

    // Check if navigation should be cancelled
    if (beforeNavigate && beforeNavigate() === false) {
      return;
    }

    setIsLoading(true);

    // Navigate after a small delay to allow state to update
    setTimeout(() => {
      router.push(href);
    }, navigationDelay);
  };

  return (
    <Button
      {...props}
      onClick={handleClick}
      disabled={isLoading || disabled}
      aria-busy={isLoading}
    >
      {isLoading ? (
        <span className="inline-flex items-center">
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          {loadingText}
        </span>
      ) : (
        children
      )}
    </Button>
  );
};
