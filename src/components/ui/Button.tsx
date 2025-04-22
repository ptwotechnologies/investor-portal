import { cn } from '@/lib/utils';
import { VariantProps, cva } from 'class-variance-authority';
import { ButtonHTMLAttributes, forwardRef } from 'react';

const buttonVariants = cva(
  'cursor-pointer inline-flex items-center justify-center rounded-md text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background',
  {
    variants: {
      variant: {
        default: 'bg-primary-950 text-white hover:bg-primary-900',
        outline:
          'border border-primary-950 text-primary-950 hover:bg-primary-50',
        ghost: 'hover:bg-primary-50 hover:text-primary-950',
        link: 'underline-offset-4 hover:underline text-primary-950',
        // Login style with primary-950 and white
        login:
          'rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-primary-950',
        // Signup style with white and primary-950
        signup:
          'rounded-md bg-white px-3.5 py-2.5 text-center text-base font-semibold text-primary-950 shadow-sm hover:bg-gray-100',
        white:
          'bg-white text-primary-950 hover:bg-primary-800 hover:text-white',
      },
      size: {
        default: 'h-10 py-2 px-4',
        sm: 'h-9 px-3 rounded-md',
        lg: 'h-11 px-8 rounded-md',
        // Auth size for login/signup buttons
        auth: 'px-3.5 py-2.5',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
