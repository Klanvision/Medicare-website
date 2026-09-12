import React from 'react';
import { cn } from '@/utils/cn';

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'text' | 'circular' | 'rectangular' | 'card';
  width?: string | number;
  height?: string | number;
  count?: number;
}

export const Skeleton: React.FC<SkeletonProps> = ({
  className,
  variant = 'text',
  width,
  height,
  count = 1,
  style,
  ...props
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'circular':
        return 'rounded-full';
      case 'rectangular':
        return 'rounded-lg';
      case 'card':
        return 'rounded-2xl border border-gray-200 p-6 space-y-4';
      case 'text':
      default:
        return 'rounded h-4 w-full';
    }
  };

  const renderSingle = (index: number) => {
    if (variant === 'card') {
      return (
        <div
          key={index}
          className={cn('bg-white animate-pulse', getVariantStyles(), className)}
          aria-hidden="true"
        >
          <div className="h-40 bg-gray-200 rounded-xl w-full" />
          <div className="space-y-2">
            <div className="h-5 bg-gray-200 rounded w-3/4" />
            <div className="h-4 bg-gray-200 rounded w-1/2" />
          </div>
          <div className="h-10 bg-gray-200 rounded-xl w-full pt-4" />
        </div>
      );
    }

    return (
      <div
        key={index}
        className={cn('bg-gray-200 animate-pulse', getVariantStyles(), className)}
        style={{
          width: width !== undefined ? width : undefined,
          height: height !== undefined ? height : undefined,
          ...style,
        }}
        aria-hidden="true"
        {...props}
      />
    );
  };

  if (count > 1) {
    return (
      <div className="space-y-3 w-full" role="status" aria-label="Loading content">
        {Array.from({ length: count }).map((_, i) => renderSingle(i))}
        <span className="sr-only">Loading content...</span>
      </div>
    );
  }

  return (
    <div role="status" aria-label="Loading content">
      {renderSingle(0)}
      <span className="sr-only">Loading content...</span>
    </div>
  );
};
