import React from 'react';
import { DateFilterType, DateRange } from '@/types/analytics';
import { Calendar, RefreshCw, Filter, Building2, Eye, FileSpreadsheet } from 'lucide-react';
import { Button } from '@/components/common/Button';
import { SimulationControlBar } from './SimulationControlBar';

interface DateFilterSelectorProps {
  activeFilter: DateFilterType;
  onFilterChange: (filter: DateFilterType) => void;
  customRange: DateRange;
  onCustomRangeChange: (range: DateRange) => void;
  campusFilter: string;
  onCampusChange: (campus: string) => void;
  onRefresh: () => void;
  isRefreshing: boolean;
  simulateLoading: boolean;
  onToggleLoading: () => void;
  simulateEmpty: boolean;
  onToggleEmpty: () => void;
}

export const DateFilterSelector: React.FC<DateFilterSelectorProps> = ({
  activeFilter,
  onFilterChange,
  customRange,
  onCustomRangeChange,
  campusFilter,
  onCampusChange,
  onRefresh,
  isRefreshing,
  simulateLoading,
  onToggleLoading,
  simulateEmpty,
  onToggleEmpty,
}) => {
  const presets: { id: DateFilterType; label: string }[] = [
    { id: 'today', label: 'Today' },
    { id: '7d', label: '7 Days' },
    { id: '30d', label: '30 Days' },
    { id: '90d', label: '90 Days' },
    { id: 'custom', label: 'Custom' },
  ];

  const campuses = [
    'All Campuses',
    'Wakad Main Campus',
    'Baner Specialty Hub',
    'Pimpri Care Center',
    'Hadapsar Facility',
  ];

  return (
    <div className="bg-white p-4 sm:p-6 rounded-3xl border border-gray-200 shadow-sm space-y-4">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        
        {/* Date Presets Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 lg:pb-0 custom-scrollbar">
          <span className="text-xs font-bold text-gray-500 flex items-center gap-1 mr-2 shrink-0">
            <Calendar className="w-4 h-4 text-teal-600" />
            <span>Range:</span>
          </span>
          {presets.map((preset) => {
            const isActive = activeFilter === preset.id;
            return (
              <button
                key={preset.id}
                onClick={() => onFilterChange(preset.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-extrabold transition-all shrink-0 ${
                  isActive
                    ? 'bg-navy-950 text-amber-400 shadow-sm border border-amber-500/40'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {preset.label}
              </button>
            );
          })}
        </div>

        {/* Dynamic Controls: Campus Filter & Buttons */}
        <SimulationControlBar
          campusFilter={campusFilter}
          onCampusChange={onCampusChange}
          onRefresh={onRefresh}
          isRefreshing={isRefreshing}
          simulateLoading={simulateLoading}
          onToggleLoading={onToggleLoading}
          simulateEmpty={simulateEmpty}
          onToggleEmpty={onToggleEmpty}
          campuses={campuses}
        />
      </div>

      {/* Custom Date Pickers (Shown when activeFilter === 'custom') */}
      {activeFilter === 'custom' && (
        <div className="p-3 bg-amber-500/10 border border-amber-500/30 rounded-2xl flex flex-wrap items-center gap-4 text-xs font-bold animate-fadeIn">
          <span className="text-navy-950 font-black flex items-center gap-1.5">
            <Filter className="w-4 h-4 text-amber-600" />
            Select Custom Range:
          </span>
          <div className="flex items-center gap-2">
            <label className="text-gray-600">From:</label>
            <input
              type="date"
              value={customRange.startDate}
              onChange={(e) => onCustomRangeChange({ ...customRange, startDate: e.target.value })}
              className="px-3 py-1.5 rounded-xl border border-gray-300 bg-white font-medium focus:ring-2 focus:ring-amber-500 focus:outline-none"
            />
          </div>
          <div className="flex items-center gap-2">
            <label className="text-gray-600">To:</label>
            <input
              type="date"
              value={customRange.endDate}
              onChange={(e) => onCustomRangeChange({ ...customRange, endDate: e.target.value })}
              className="px-3 py-1.5 rounded-xl border border-gray-300 bg-white font-medium focus:ring-2 focus:ring-amber-500 focus:outline-none"
            />
          </div>
        </div>
      )}
    </div>
  );
};
