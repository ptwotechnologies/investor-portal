'use client';
import { cn } from '@/lib/utils';
import { VariantProps, cva } from 'class-variance-authority';
import { ButtonHTMLAttributes, forwardRef } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

const buttonVariants = cva(
  'cursor-pointer inline-flex items-center justify-center rounded-sm text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background p-1',
  {
    variants: {
      variant: {
        default:
          'bg-primary-950 text-white hover:bg-white hover:text-primary-950 ',
        outline:
          'border border-white text-white hover:bg-white hover:text-primary-950',
        ghost: 'hover:bg-primary-50 hover:text-primary-950',
        link: 'underline-offset-4 hover:underline text-primary-950',
        white:
          'bg-white text-primary-950 hover:bg-primary-800 hover:text-white',
        'outline-primary':
          'border border-primary-950 text-primary-950 hover:bg-primary-950 hover:text-white',
      },
      size: {
        default: 'h-10 py-2 px-4',
        sm: 'h-9 px-3 rounded-sm',
        lg: 'h-11 px-8 rounded-sm',
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
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onDrag'>,
    VariantProps<typeof buttonVariants> {
  disableAnimation?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, disableAnimation = false, ...props }, ref) => {
    if (disableAnimation) {
      return (
        <button
          className={cn(buttonVariants({ variant, size, className }))}
          ref={ref}
          {...props}
        />
      );
    }

    return (
      <motion.button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        whileHover={{ 
          scale: 1.02,
          transition: { duration: 0.2, ease: "easeOut" }
        }}
        whileTap={{ 
          scale: 0.95,
          transition: { duration: 0.1, ease: "easeInOut" }
        }}
        initial={{ scale: 1 }}
        animate={{ scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 17
        }}
        {...(props as HTMLMotionProps<"button">)}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };