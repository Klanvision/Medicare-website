import React from 'react';
import { Card } from '@/components/common/Card';
import { Badge } from '@/components/common/Badge';
import { BarChart3, AlertCircle, RefreshCw, Layers } from 'lucide-react';
import { Button } from '@/components/common/Button';

interface ChartCardProps {
  title: string;
  subtitle?: string;
  badge?: string;
  icon?: React.ReactNode;
  isLoading?: boolean;
  isEmpty?: boolean;
  onResetFilters?: () => void;
  children: React.ReactNode;
  height?: string;
}

export const ChartCard: React.FC<ChartCardProps> = ({
  title,
  subtitle,
  badge,
  icon = <BarChart3 className="w-5 h-5 text-teal-600" />,
  isLoading = false,
  isEmpty = false,
  onResetFilters,
  children,
  height = 'h-80',
}) => {
  return (
    <Card className="p-6 relative overflow-hidden flex flex-col justify-between shadow-md border-gray-200 hover:shadow-lg transition-all">
      {/* Chart Header */}
      <div className="flex items-start justify-between gap-4 mb-4">
        <div className="flex items-start gap-3">
          <div className="p-2.5 rounded-2xl bg-teal-50 text-teal-700 shrink-0 border border-teal-100">
            {icon}
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-black text-navy-950 flex items-center gap-2">
              {title}
            </h3>
            {subtitle && (
              <p className="text-xs text-gray-500 font-medium leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>
        </div>

        {badge && (
          <Badge variant="gold" size="sm" className="shrink-0 font-extrabold">
            {badge}
          </Badge>
        )}
      </div>

      {/* Chart Content Container */}
      <div className={`w-full relative ${height} flex items-center justify-center`}>
        {/* 1. LOADING STATE */}
        {isLoading ? (
          <div className="absolute inset-0 bg-white/90 z-20 backdrop-blur-xs flex flex-col items-center justify-center p-6 space-y-4 rounded-2xl">
            <div className="w-full h-full flex flex-col justify-between py-2 space-y-3 animate-pulse">
              <div className="h-4 bg-gray-200 rounded-lg w-1/3" />
              <div className="flex-1 bg-gradient-to-r from-gray-100 via-teal-50 to-gray-100 rounded-2xl" />
              <div className="flex justify-between gap-2">
                <div className="h-3 bg-gray-200 rounded w-1/6" />
                <div className="h-3 bg-gray-200 rounded w-1/6" />
                <div className="h-3 bg-gray-200 rounded w-1/6" />
                <div className="h-3 bg-gray-200 rounded w-1/6" />
              </div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex items-center gap-2 px-4 py-2 bg-navy-950 text-amber-400 rounded-full text-xs font-black shadow-lg animate-bounce">
                <RefreshCw className="w-4 h-4 animate-spin text-teal-400" />
                <span>Fetching Clinical Analytics...</span>
              </div>
            </div>
          </div>
        ) : isEmpty ? (
          /* 2. EMPTY STATE */
          <div className="w-full h-full border-2 border-dashed border-gray-200 rounded-2xl bg-gray-50/70 p-6 flex flex-col items-center justify-center text-center space-y-3">
            <div className="p-3 bg-amber-100 text-amber-700 rounded-full">
              <AlertCircle className="w-6 h-6" />
            </div>
            <div className="space-y-1 max-w-xs">
              <p className="text-sm font-extrabold text-navy-950">No Data Points Found</p>
              <p className="text-xs text-gray-500 font-medium">
                There are no record entries available for the selected date range or hospital filter.
              </p>
            </div>
            {onResetFilters && (
              <Button
                variant="outline"
                size="sm"
                onClick={onResetFilters}
                leftIcon={<RefreshCw className="w-3.5 h-3.5" />}
              >
                Reset Filters
              </Button>
            )}
          </div>
        ) : (
          /* 3. READY STATE: CHILDREN CHART */
          <div className="w-full h-full">{children}</div>
        )}
      </div>
    </Card>
  );
};
