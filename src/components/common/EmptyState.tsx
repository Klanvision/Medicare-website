import React from 'react';
import { FolderOpen } from 'lucide-react';
import { Button } from './Button';
import { cn } from '@/utils/cn';

interface EmptyStateProps {
  icon?: React.ReactNode;
  title?: string;
  description?: string;
  actionLabel?: string;
  onAction?: () => void;
  className?: string;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  icon,
  title = 'No Records Found',
  description = 'There are no active records or items to display at this moment.',
  actionLabel,
  onAction,
  className,
}) => {
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center text-center p-8 sm:p-12 bg-gray-50/70 border border-dashed border-gray-300 rounded-2xl max-w-md mx-auto my-6',
        className
      )}
    >
      <div className="w-16 h-16 rounded-full bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-600 mb-4 shadow-sm">
        {icon || <FolderOpen className="w-8 h-8" />}
      </div>
      <h4 className="text-lg font-bold text-navy-900 mb-1">{title}</h4>
      <p className="text-xs sm:text-sm text-gray-500 mb-6 max-w-xs leading-relaxed">{description}</p>
      {actionLabel && onAction && (
        <Button variant="primary" size="sm" onClick={onAction}>
          {actionLabel}
        </Button>
      )}
    </div>
  );
};
