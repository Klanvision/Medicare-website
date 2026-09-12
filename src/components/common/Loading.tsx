import React from 'react';
import { Loader2 } from 'lucide-react';
import { cn } from '@/utils/cn';
import { Logo } from './Logo';

interface SpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  color?: 'teal' | 'navy' | 'gold' | 'white';
}

export const Spinner: React.FC<SpinnerProps> = ({ size = 'md', className, color = 'teal' }) => {
  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-12 h-12',
  };

  const colors = {
    teal: 'text-teal-600',
    navy: 'text-navy-900',
    gold: 'text-gold-600',
    white: 'text-white',
  };

  return <Loader2 className={cn('animate-spin', sizes[size], colors[color], className)} />;
};

interface PageLoaderProps {
  message?: string;
}

export const PageLoader: React.FC<PageLoaderProps> = ({ message = 'Loading MEDICARE...' }) => {
  return (
    <div className="fixed inset-0 z-50 bg-slate-900/90 backdrop-blur-md flex flex-col items-center justify-center gap-6 p-4">
      <div className="animate-pulse">
        <Logo variant="light" size="lg" showTagline={true} clickable={false} />
      </div>
      <div className="flex items-center gap-3">
        <Spinner size="lg" color="teal" />
        <span className="text-sm font-medium text-slate-200 tracking-wide">{message}</span>
      </div>
    </div>
  );
};

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export const Skeleton: React.FC<SkeletonProps> = ({ className, ...props }) => {
  return (
    <div
      className={cn('animate-pulse bg-gray-200 rounded-lg', className)}
      {...props}
    />
  );
};
