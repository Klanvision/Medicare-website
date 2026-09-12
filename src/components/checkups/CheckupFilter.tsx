import React from 'react';
import { Search, X } from 'lucide-react';
import { Input } from '@/components/common/Input';
import { CheckupCategory } from '@/data/checkupData';

interface CheckupFilterProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  selectedCategory: CheckupCategory | 'All';
  onCategoryChange: (cat: CheckupCategory | 'All') => void;
}

export const CheckupFilter: React.FC<CheckupFilterProps> = ({
  searchTerm,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
}) => {
  const categories: (CheckupCategory | 'All')[] = [
    'All',
    'Full Body',
    "Men's",
    "Women's",
    'Senior Citizen',
    'Child',
    'Preventive',
    'Lifestyle',
    'Corporate',
  ];

  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-soft space-y-4">
      {/* Search Input */}
      <Input
        placeholder="Search health checkup package by name, test parameter, or category..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        startIcon={<Search className="w-4 h-4 text-teal-600" />}
        endIcon={
          searchTerm ? (
            <button
              type="button"
              onClick={() => onSearchChange('')}
              className="text-gray-400 hover:text-navy-900 transition-colors p-1"
            >
              <X className="w-4 h-4" />
            </button>
          ) : undefined
        }
      />

      {/* Category Tabs */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
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
            {cat === 'All' ? 'All Checkups' : cat}
          </button>
        ))}
      </div>
    </div>
  );
};
