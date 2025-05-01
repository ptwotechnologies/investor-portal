import React from 'react';
import { cn } from '@/lib/utils';

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const CustomCheckbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, id, ...props }, ref) => {
    return (
      <div className="flex items-center space-x-2">
        <input
          ref={ref}
          type="checkbox"
          id={id}
          className={cn(
            'h-4 w-4 rounded-sm border border-primary text-primary focus:ring-primary focus:ring-offset-0',
            className
          )}
          {...props}
        />
        {label && (
          <label
            htmlFor={id}
            className="text-sm text-primary-800 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {label}
          </label>
        )}
      </div>
    );
  }
);

CustomCheckbox.displayName = 'CustomCheckbox';

export { CustomCheckbox };
