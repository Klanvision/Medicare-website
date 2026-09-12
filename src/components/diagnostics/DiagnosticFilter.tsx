import React from 'react';
import { Home, Filter } from 'lucide-react';
import { DiagnosticCategory } from '@/data/diagnosticData';

interface DiagnosticFilterProps {
  selectedCategory: DiagnosticCategory | 'All';
  onCategoryChange: (cat: DiagnosticCategory | 'All') => void;
  homeSampleOnly: boolean;
  onHomeSampleToggle: (val: boolean) => void;
}

export const DiagnosticFilter: React.FC<DiagnosticFilterProps> = ({
  selectedCategory,
  onCategoryChange,
  homeSampleOnly,
  onHomeSampleToggle,
}) => {
  const categories: (DiagnosticCategory | 'All')[] = [
    'All',
    'Pathology',
    'MRI',
    'CT Scan',
    'X-Ray',
    'Ultrasound',
  ];

  return (
    <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-soft flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
      {/* Category Tabs */}
      <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => onCategoryChange(cat)}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
              selectedCategory === cat
                ? 'bg-gradient-to-r from-[#00529B] via-[#0066BC] to-[#007AC9] text-white shadow-sm border border-sky-400/30'
                : 'bg-sky-50/70 text-gray-700 hover:bg-sky-100 hover:text-[#00529B] border border-gray-200/60'
            }`}
          >
            {cat === 'All' ? 'All Tests & Scans' : cat}
          </button>
        ))}
      </div>

      {/* Home Sample Collection Toggle */}
      <label className="flex items-center gap-2 cursor-pointer text-xs font-bold text-navy-900 shrink-0 select-none">
        <input
          type="checkbox"
          checked={homeSampleOnly}
          onChange={(e) => onHomeSampleToggle(e.target.checked)}
          className="w-4 h-4 accent-teal-600 rounded cursor-pointer"
        />
        <Home className="w-4 h-4 text-teal-600" />
        <span>Home Sample Collection Only</span>
      </label>
    </div>
  );
};
