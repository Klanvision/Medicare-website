import React from 'react';
import { Building2, RefreshCw, ChevronDown } from 'lucide-react';

export interface SimulationControlBarProps {
  campusFilter: string;
  onCampusChange: (campus: string) => void;
  onRefresh: () => void;
  isRefreshing?: boolean;
  simulateLoading: boolean;
  onToggleLoading: () => void;
  simulateEmpty: boolean;
  onToggleEmpty: () => void;
  campuses?: string[];
  className?: string;
}

export const DEFAULT_CAMPUSES = [
  'All Campuses',
  'Wakad Main Campus',
  'Baner Specialty Hub',
  'Pimpri Care Center',
  'Hadapsar Facility',
];

export const SimulationControlBar: React.FC<SimulationControlBarProps> = ({
  campusFilter,
  onCampusChange,
  onRefresh,
  isRefreshing = false,
  simulateLoading,
  onToggleLoading,
  simulateEmpty,
  onToggleEmpty,
  campuses = DEFAULT_CAMPUSES,
  className = '',
}) => {
  return (
    <div className={`flex flex-wrap sm:flex-nowrap items-center gap-2 shrink-0 ${className}`}>
      {/* 1. All Campuses Selector Dropdown */}
      <div className="relative flex items-center gap-1.5 bg-slate-50/90 hover:bg-slate-100 border border-slate-200 px-3 py-1.5 rounded-2xl text-xs font-bold text-navy-950 transition-all shadow-2xs group shrink-0">
        <Building2 className="w-4 h-4 text-teal-600 shrink-0" />
        <select
          value={campusFilter}
          onChange={(e) => onCampusChange(e.target.value)}
          className="bg-transparent font-extrabold focus:outline-none cursor-pointer pr-4 text-navy-950 text-xs appearance-none py-0.5"
          aria-label="Filter by Campus"
        >
          {campuses.map((c) => (
            <option key={c} value={c} className="bg-white text-navy-950 font-medium">
              {c}
            </option>
          ))}
        </select>
        <ChevronDown className="w-3.5 h-3.5 text-slate-500 shrink-0 pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 group-hover:text-slate-700 transition-colors" />
      </div>

      {/* 2. Refresh Button */}
      <button
        type="button"
        onClick={onRefresh}
        disabled={isRefreshing}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-navy-950 bg-white text-navy-950 hover:bg-slate-50 text-xs font-extrabold shadow-2xs transition-all active:scale-95 disabled:opacity-50 cursor-pointer shrink-0"
        title="Trigger live data refresh"
      >
        <RefreshCw className={`w-3.5 h-3.5 text-navy-950 ${isRefreshing ? 'animate-spin text-teal-600' : ''}`} />
        <span>Refresh</span>
      </button>

      {/* 3. Vertical Separator Divider */}
      <div className="w-[1px] h-6 bg-slate-200 mx-0.5 hidden sm:block shrink-0" />

      {/* 4. Simulate Loading Button */}
      <button
        type="button"
        onClick={onToggleLoading}
        className={`px-3 py-1.5 rounded-xl text-xs font-extrabold transition-all cursor-pointer shadow-2xs shrink-0 ${
          simulateLoading
            ? 'bg-[#fef08a] border-2 border-[#f59e0b] text-[#78350f] font-black shadow-amber-100 shadow-md ring-2 ring-amber-300/50 scale-[1.02]'
            : 'bg-[#fef9c3] hover:bg-[#fef08a] border border-[#fde047] text-[#854d0e] hover:border-[#f59e0b]'
        }`}
        title="Toggle skeleton loading state across all widgets and cards"
      >
        Simulate Loading
      </button>

      {/* 5. Simulate Empty Data Button */}
      <button
        type="button"
        onClick={onToggleEmpty}
        className={`px-3 py-1.5 rounded-xl text-xs font-extrabold transition-all cursor-pointer shadow-2xs shrink-0 ${
          simulateEmpty
            ? 'bg-rose-100 border-2 border-rose-400 text-rose-900 font-black shadow-rose-100 shadow-md ring-2 ring-rose-300/50 scale-[1.02]'
            : 'bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 hover:border-slate-300'
        }`}
        title="Toggle empty state simulation with 0 records"
      >
        Simulate Empty Data
      </button>
    </div>
  );
};
