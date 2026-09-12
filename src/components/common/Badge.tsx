import React from 'react';
import { cn } from '@/utils/cn';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'primary' | 'teal' | 'gold' | 'navy' | 'success' | 'warning' | 'danger' | 'outline';
  size?: 'sm' | 'md';
  dot?: boolean;
}

export const Badge: React.FC<BadgeProps> = ({
  className,
  variant = 'teal',
  size = 'md',
  dot = false,
  children,
  ...props
}) => {
  const variants = {
    primary: 'bg-navy-100 text-navy-900 border-navy-200',
    teal: 'bg-teal-50 text-teal-800 border-teal-200',
    gold: 'bg-gold-50 text-gold-900 border-gold-200 font-semibold',
    navy: 'bg-navy-900 text-white border-transparent',
    success: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    warning: 'bg-amber-50 text-amber-800 border-amber-200',
    danger: 'bg-red-50 text-red-700 border-red-200',
    outline: 'bg-transparent text-navy-800 border-gray-300',
  };

  const dotColors = {
    primary: 'bg-navy-600',
    teal: 'bg-teal-600',
    gold: 'bg-gold-600',
    navy: 'bg-gold-400',
    success: 'bg-emerald-500',
    warning: 'bg-amber-500',
    danger: 'bg-red-500',
    outline: 'bg-gray-400',
  };

  const sizes = {
    sm: 'px-2 py-0.5 text-[11px] rounded-md gap-1',
    md: 'px-2.5 py-1 text-xs rounded-full gap-1.5',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center font-medium border shadow-2xs tracking-wide',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {dot && <span className={cn('w-1.5 h-1.5 rounded-full shrink-0', dotColors[variant])} />}
      <span>{children}</span>
    </span>
  );
};
