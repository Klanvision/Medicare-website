import React from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';
import { Button } from './Button';
import { cn } from '@/utils/cn';

interface ErrorStateProps {
  title?: string;
  message?: string;
  onRetry?: () => void;
  fullPage?: boolean;
  className?: string;
}

export const ErrorState: React.FC<ErrorStateProps> = ({
  title = 'Unable to Load Data',
  message = 'We encountered an unexpected error while retrieving medical data. Please verify your internet connection or try again.',
  onRetry,
  fullPage = false,
  className,
}) => {
  const content = (
    <div
      className={cn(
        'flex flex-col items-center justify-center text-center p-8 bg-white border border-red-100 rounded-2xl shadow-soft max-w-lg mx-auto',
        className
      )}
    >
      <div className="w-14 h-14 rounded-2xl bg-red-50 border border-red-100 flex items-center justify-center text-red-600 mb-4 shadow-2xs">
        <AlertTriangle className="w-7 h-7" />
      </div>
      <h3 className="text-xl font-bold text-navy-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-600 mb-6 leading-relaxed">{message}</p>
      {onRetry && (
        <Button variant="teal" onClick={onRetry} leftIcon={<RefreshCw className="w-4 h-4" />}>
          Retry Action
        </Button>
      )}
    </div>
  );

  if (fullPage) {
    return <div className="min-h-[60vh] flex items-center justify-center p-4">{content}</div>;
  }

  return content;
};
