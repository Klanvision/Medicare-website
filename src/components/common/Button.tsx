import React from 'react';
import { Loader2 } from 'lucide-react';
import { cn } from '@/utils/cn';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'gold' | 'teal' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      isLoading = false,
      leftIcon,
      rightIcon,
      fullWidth = false,
      children,
      disabled,
      type = 'button',
      ...props
    },
    ref
  ) => {
    const baseStyles = 'inline-flex items-center justify-center font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed rounded-lg shadow-sm active:scale-[0.99]';

    const variants = {
      primary: 'bg-navy-900 text-white hover:bg-navy-800 focus:ring-navy-900 border border-transparent shadow-soft',
      secondary: 'bg-gray-100 text-navy-900 hover:bg-gray-200 focus:ring-gray-300 border border-gray-200',
      outline: 'bg-transparent text-navy-900 border-2 border-navy-900 hover:bg-navy-900 hover:text-white focus:ring-navy-900',
      gold: 'bg-gold-600 text-navy-950 font-bold hover:bg-gold-500 focus:ring-gold-500 border border-gold-400 shadow-gold-glow',
      teal: 'bg-teal-600 text-white hover:bg-teal-700 focus:ring-teal-600 border border-transparent shadow-teal-glow',
      ghost: 'bg-transparent text-navy-800 hover:bg-gray-100 focus:ring-gray-200 border border-transparent shadow-none',
      danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500 border border-transparent',
    };

    const sizes = {
      sm: 'px-3 py-1.5 text-xs rounded-md gap-1.5',
      md: 'px-4 py-2 text-sm rounded-lg gap-2',
      lg: 'px-6 py-3 text-base rounded-xl gap-2.5',
    };

    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled || isLoading}
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          fullWidth && 'w-full',
          className
        )}
        {...props}
      >
        {isLoading && <Loader2 className="w-4 h-4 animate-spin shrink-0" />}
        {!isLoading && leftIcon && <span className="shrink-0">{leftIcon}</span>}
        <span>{children}</span>
        {!isLoading && rightIcon && <span className="shrink-0">{rightIcon}</span>}
      </button>
    );
  }
);

Button.displayName = 'Button';
